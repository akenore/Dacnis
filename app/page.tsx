import Image from "next/image";
import PricingHero from "../components/PricingHero";
import PricingCard from "../components/PricingCard";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import { pricingOptions, tvaConditions } from "../data/pricingData";

function ShieldCheck() {
  return (
    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#2e7d52] shrink-0 mt-0.5">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4">
        <path d="M12 3L4 7v5c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V7L12 3z" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0 bg-linear-to-br from-[#ddeaf8] via-[#e8f2fc] via-[#d8e8f5] to-[#cfe0f0]" />
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/bg-industrial.png"
          alt="Contexte industriel pour STRAKON coffrage et armatures"
          fill
          priority
          className="object-cover object-top"
          quality={75}
        />
      </div>

      <div className="relative z-1">
        <div className="flex justify-center pt-10 pb-2 relative z-100">
          <Image
            src="/logo-c2it.png"
            alt="C2IT - Experts en Solutions Coffrage et Armatures"
            width={240}
            height={68}
            className="h-[68px] w-auto object-contain block"
            priority
          />
        </div>

        <div className="max-w-[1240px] mx-auto px-6 pb-12 relative">
          <PricingHero />

          {pricingOptions.map((option) => (
            <PricingCard key={option.id} option={option} />
          ))}

          <div className="rounded-xl overflow-hidden shadow-[0_6px_28px_rgba(0,0,0,0.18)] bg-white/97">
            <div className="bg-[#1a2e5a] px-[22px] py-[11px]">
              <h2 className="text-white font-bold text-[15px] m-0 pr-4">TVA – Ce que vous devez savoir</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-[22px] md:p-[22px_22px_26px]">
              <div className="flex flex-col gap-5">
                {tvaConditions.map((c) => (
                  <div key={c.id} className="flex gap-3 items-start">
                    <ShieldCheck />
                    <div>
                      <p className="text-[13px] text-[#333] leading-relaxed m-0" dangerouslySetInnerHTML={{ __html: c.description }} />
                      <p className="text-[13px] text-[#555] mt-1.5">{c.detail}</p>
                    </div>
                  </div>
                ))}

                <div className="mt-1 p-4 bg-[#fff8e1] border-l-4 border-gold rounded-md">
                  <p className="font-bold text-[14px] text-navy m-0 mb-1.5">⏳ Offre réservée aux participants</p>
                  <p className="text-[13px] text-[#444] m-0 mb-1 leading-normal">
                    Cette offre est exclusivement réservée aux entreprises ayant participé à la formation STRAKON.
                  </p>
                  <p className="text-[13px] text-[#c0392b] m-0 font-bold">
                    ⚠️ Elle est valable pour une durée limitée.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-navy font-bold text-[15px] m-0 mb-3.5 tracking-tight">Accédez à STRAKON maintenant :</h3>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}