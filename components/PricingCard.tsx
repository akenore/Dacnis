"use client";
import { PricingOption } from "@/data/pricingData";

function MonitorIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="13" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="16" x2="12" y2="21" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="M21 2L11.5 11.5" />
      <path d="M15 8l3 3" />
      <path d="M17 6l3 3" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );
}

function Tick({ variant, size = 15 }: { variant: "blue" | "gold" | "orange"; size?: number }) {
  const bgMap = { blue: "#4a72b2", gold: "#d4a017", orange: "#e6a23c" };
  return (
    <span
      className="inline-flex items-center justify-center shrink-0 rounded-[3px]"
      style={{ width: size, height: size, background: bgMap[variant] }}
    >
      <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 12 12" fill="none">
        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function PricingCard({ option }: { option: PricingOption }) {
  const isGold = option.accentColor === "gold";
  const tickVariant = isGold ? "gold" : "blue";

  return (
    <div className="relative rounded-xl bg-white shadow-[0_4px_6px_rgba(26,46,90,0.06),0_10px_30px_rgba(26,46,90,0.12),0_20px_50px_rgba(26,46,90,0.08)] mb-6 overflow-visible">
      <div className={`p-[10px_22px] rounded-t-xl ${isGold ? "bg-linear-to-r from-[#c8940a] to-[#f1c40f]" : "bg-linear-to-r from-[#3b5998] to-[#638cd3]"}`}>
        <h2 className="text-white font-bold text-[17px] m-0">{option.tag}</h2>
      </div>

      <div className="flex flex-col md:flex-row relative rounded-b-xl overflow-hidden">
        <div className="flex-1 p-[20px_24px_24px_22px] bg-white relative z-1">
          <div className="flex items-center gap-3 mb-3.5">
            {option.icon === "monitor" ? <MonitorIcon /> : <KeyIcon />}
            <h3 className="text-navy font-extrabold text-[21px] m-0 tracking-[-0.3px] leading-tight">{option.title}</h3>
          </div>

          <ul className="list-none p-0 pl-1 m-0">
            {option.features.map((f) => (
              <li key={f.id} className="flex items-start gap-[9px] text-[16px] text-[#333] mb-2.5">
                <span className="mt-[5px] flex shrink-0">
                  <Tick variant={tickVariant} />
                </span>
                <span dangerouslySetInnerHTML={{
                  __html: f.text
                    .replace("3 mois", "<strong>3 mois</strong>")
                    .replace("OFFERTS", "<strong>OFFERTS</strong>")
                }} />
              </li>
            ))}
          </ul>

          <hr className="border-none border-t border-[#e0e4ec] my-3.5" />

          <div className="flex items-center gap-2 mb-2.5">
            <PenIcon />
            <span className="font-extrabold text-navy text-[18px]">{option.idealTitle} :</span>
          </div>
          <ul className="list-none p-0 pl-1 m-0">
            {option.idealItems.map((item) => (
              <li key={item.id} className="flex items-start gap-[9px] text-[16px] text-[#444] mb-[9px]">
                <span className="mt-[5px] flex shrink-0">
                  <Tick variant={tickVariant} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-[300px] shrink-0 flex flex-col bg-[#edf2f9] relative z-2">
          <div className={`flex items-center justify-center gap-[3px] p-[16px_18px_16px_48px] text-white [clip-path:polygon(13%_0%,100%_0%,100%_100%,0%_100%)] drop-shadow-[-6px_4px_14px_rgba(0,0,0,0.28)] relative z-10 ${isGold ? "bg-linear-to-br from-[#2d4a80] to-[#1a2e5a]" : "bg-linear-to-br from-[#7eb8f5] via-[#4a8de0] to-[#2f6ec5]"}`}>
            <span className="text-[62px] font-black tracking-[-3px] leading-none">{option.price}</span>
            <span className="text-[28px] font-black self-center mb-0.5">€</span>
            <span className="text-[16px] font-bold self-end mb-2 tracking-[0.5px]">HT</span>
          </div>

          {isGold && (
            <div className="bg-linear-to-r from-[#c8940a] to-[#f1c40f] text-white text-center p-[5px_12px] text-[11px] font-black tracking-[0.5px] uppercase">
              -10% DU PRIX CATALOGUE
            </div>
          )}

          <div className="p-[13px_13px_16px] flex flex-col flex-1">
            <p className="text-navy text-[14px] font-bold m-0 mb-1 text-center">TVA au preneur :</p>
            <p className="text-[#555] text-[13px] m-0 mb-2.5 text-center">{option.tvaFeatures[0]?.text}</p>

            <div className="flex flex-col gap-1.5 mb-3">
              {option.tvaFeatures.slice(1).map((f) => (
                <div key={f.id} className="text-[13px] text-[#444] flex items-start gap-1.5">
                  <span className="mt-[3px] flex shrink-0">
                    <Tick variant="gold" size={13} />
                  </span>
                  <span dangerouslySetInnerHTML={{
                    __html: f.text.replace("OFFERTS", "<strong>OFFERTS</strong>")
                  }} />
                </div>
              ))}
            </div>

            <hr className="border-none border-t border-[#cdd4e0] my-2.5" />

            <div className="flex items-baseline justify-center gap-[3px] text-gold text-[32px] font-black tracking-[-0.5px] mb-1">
              <span className="text-[32px] font-black tracking-[-1px]">{option.tvaPrice}</span>
              <span className="text-[22px] font-black text-gold">€</span>
              <span className="text-[16px] font-bold self-end mb-0.5">HT</span>
            </div>

            {isGold ? (
              <p className="text-[#777] text-[11px] italic text-center m-0 mb-3.5 leading-tight">{option.tvaPriceNote}</p>
            ) : (
              <p className="text-navy text-[11px] font-black uppercase tracking-[0.5px] text-center m-0 mb-3.5">-10% DU PRIX CATALOGUE</p>
            )}

            <a
              href={option.ctaHref}
              className="block w-full bg-linear-to-b from-[#f5ca2a] to-[#c8940a] text-white text-center p-[13px_10px] rounded-md no-underline text-[15px] shadow-[0_4px_14px_rgba(200,148,10,0.45)] transition-[transform,box-shadow] duration-100 ease mt-auto hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(200,148,10,0.55)]"
              onClick={(e) => {
                const href = option.ctaHref;
                if (href.includes("#contact")) {
                  e.preventDefault();
                  const url = new URL(window.location.href);
                  const searchParams = new URLSearchParams(href.split("#")[0].split("?")[1]);
                  url.searchParams.set("commande", searchParams.get("commande") || "");
                  window.history.pushState({}, "", url.toString() + "#contact");

                  const target = document.getElementById("contact");
                  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.dispatchEvent(new HashChangeEvent("hashchange"));
                }
              }}
            >
              <span className="font-black text-[16px]">{option.ctaLabel.split(" ")[0]}</span>
              {" "}
              <span className="font-normal text-[14px]">{option.ctaLabel.split(" ").slice(1).join(" ")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}