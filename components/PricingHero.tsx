export default function PricingHero() {
  return (
    <div className="text-center p-[28px_16px_40px] relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_70%_55%_at_50%_40%,rgba(255,255,255,0.26)_0%,rgba(255,255,255,0)_75%)] before:pointer-events-none before:animate-[heroGlow_6s_ease-in-out_infinite_alternate]">
      <h1 className="font-['Playfair_Display'] text-[clamp(36px,8vw,72px)] font-black text-navy leading-[1.0] m-[0_auto_25px] max-w-[1100px] tracking-tight whitespace-normal animate-[fadeSlideDown_0.9s_ease_both_0.1s]">
        <em className="italic font-bold">Passez à l&apos;action</em>{" "}
        <span className="not-italic font-bold">avec</span>{" "}
        <span className="not-italic font-black text-blue-brand relative inline-block drop-shadow-sm">STRAKON</span>
        <br />
        <span className="not-italic font-black text-navy">dès aujourd&apos;hui</span>
      </h1>

      <div className="flex items-center justify-center gap-[0.7rem] m-[1.2rem_auto_1.5rem] max-w-[280px] animate-[fadeSlideDown_1s_ease_both_0.2s]">
        <span className="flex-1 h-[1px] bg-linear-to-r from-transparent via-[rgba(26,46,90,0.28)] to-transparent" />
        <span className="w-[7px] h-[7px] bg-blue-tick rotate-45 rounded-[1px]" />
        <span className="flex-1 h-[1px] bg-linear-to-r from-transparent via-[rgba(26,46,90,0.28)] to-transparent" />
      </div>

      <p className="font-['DM_Sans'] text-[18px] font-light text-[rgba(26,46,90,0.8)] leading-[1.8] max-w-[700px] mx-auto mb-[1.3rem] animate-[fadeSlideDown_1.1s_ease_both_0.3s]">
        Merci d&apos;avoir participé à notre formation STRAKON.<br />
        Vous avez vu <strong className="font-medium text-navy">la puissance du logiciel</strong>.<br />
        Vous avez compris <strong className="font-medium text-navy">son potentiel</strong> pour optimiser vos projets <strong className="font-medium text-navy">coffrage &amp; armatures</strong>.<br />
        Il est maintenant temps de passer à l&apos;étape suivante.
      </p>

      <div className="text-[18px] inline-flex items-center gap-[0.55rem] bg-linear-to-br from-[#1a2e5a] to-[#2a5298] text-white font-['DM_Sans'] text-[0.88rem] font-medium rounded-xl p-[0.7rem_1.5rem] shadow-[0_8px_24px_rgba(26,46,90,0.22),0_2px_6px_rgba(26,46,90,0.1)] tracking-[0.01em] animate-[fadeSlideDown_1.2s_ease_both_0.45s] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(26,46,90,0.28)]">
        <span>🎯</span>
        Nous vous réservons une offre exclusive, uniquement pour les participants à la formation.
      </div>
    </div>
  );
}