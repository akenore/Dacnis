"use client";
import { useState, useEffect } from "react";
import { formFields } from "@/data/FromFields";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (id: string, value: string) =>
    setFormData((prev) => ({ ...prev, [id]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.telephone && !isValidPhoneNumber(formData.telephone)) {
      setStatus("error");
      setErrorMsg("Le numéro de téléphone n'est pas valide.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erreur inconnue");

      setStatus("success");
      setFormData({});
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur serveur.");
    }
  };

  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const commande = params.get("commande");
      if (commande === "Location" || commande === "Achat") {
        setFormData((prev) => ({ ...prev, commande }));
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    window.addEventListener("hashchange", handleUrlChange);
    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.removeEventListener("hashchange", handleUrlChange);
    };
  }, []);

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 scroll-mt-[100px]" id="contact">
        {formFields.map((field) => {
          if (field.type === "select") {
            return (
              <select
                key={field.id}
                id={field.id}
                required={field.required}
                value={formData[field.id] ?? ""}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full border border-[#d0d5dd] rounded-[7px] p-[10px_13px] text-[13px] text-[#333] bg-white outline-none font-inherit box-border transition-[border-color] duration-150 focus:border-blue-brand focus:shadow-[0_0_0_3px_rgba(33,118,199,0.12)]"
                disabled={status === "loading"}
              >
                <option value="" disabled>{field.placeholder}</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            );
          }

          if (field.id === "telephone") {
            return (
              <div key={field.id} className="relative">
                <PhoneInput
                  international
                  defaultCountry="FR"
                  placeholder={field.placeholder}
                  value={formData[field.id] ?? ""}
                  onChange={(val) => handleChange(field.id, val ?? "")}
                  disabled={status === "loading"}
                  className="w-full border border-[#d0d5dd] rounded-[7px] p-[10px_13px] text-[13px] text-[#333] bg-white outline-none font-inherit box-border transition-[border-color] duration-150 focus:border-blue-brand focus:shadow-[0_0_0_3px_rgba(33,118,199,0.12)] phone-input-override"
                />
              </div>
            );
          }

          return (
            <input
              key={field.id}
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.id] ?? ""}
              onChange={(e) => handleChange(field.id, e.target.value)}
              className="w-full border border-[#d0d5dd] rounded-[7px] p-[10px_13px] text-[13px] text-[#333] bg-white outline-none font-inherit box-border transition-[border-color] duration-150 focus:border-blue-brand focus:shadow-[0_0_0_3px_rgba(33,118,199,0.12)]"
              disabled={status === "loading"}
            />
          );
        })}

        {status === "error" && (
          <p className="text-[#ff4d4d] text-[13px] mt-2.5 text-center font-bold">
            ⚠️ {errorMsg}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-linear-to-b from-[#f5ca2a] to-[#c8940a] text-white font-extrabold text-[14px] p-[13px] rounded-[7px] border-none cursor-pointer mt-1 font-inherit shadow-[0_4px_14px_rgba(200,148,10,0.35)] transition-transform duration-100 hover:-translate-y-px disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Envoi en cours..." : "Accéder à STRAKON →"}
        </button>
      </form>

      {status === "success" && (
        <div className="fixed top-0 left-0 right-0 z-[9999] bg-linear-to-r from-[#059669] to-[#10b981] text-white p-4 flex items-center justify-center gap-3 shadow-[0_4px_16px_rgba(5,150,105,0.3)] animate-[bannerSlideDown_0.4s_cubic-bezier(0.34,1.56,0.64,1)]">
          <div className="w-6 h-6 rounded-full bg-white text-[#059669] flex items-center justify-center text-[16px] font-black">✓</div>
          <span className="text-[15px] font-semibold">Votre commande de licence a été transmise avec succès !</span>
        </div>
      )}
    </>
  );
}