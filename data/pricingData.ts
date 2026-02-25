export interface Feature {
  id: string;
  text: string;
}

export interface PricingOption {
  id: string;
  tag: string;
  icon: "monitor" | "key";
  title: string;
  accentColor: "blue" | "gold";
  features: Feature[];
  idealTitle: string;
  idealItems: Feature[];
  price: string;
  tvaFeatures: Feature[];
  tvaPrice: string;
  tvaPriceNote?: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface TvaCondition {
  id: string;
  description: string;
  detail: string;
}

export const pricingOptions: PricingOption[] = [
  {
    id: "option-1",
    tag: "OPTION 1 – STRAKON en location (3 mois)",
    icon: "monitor",
    title: "Lancez vos projets immédiatement",
    accentColor: "blue",
    features: [
      { id: "f1", text: "Licence STRAKON complète" },
      { id: "f2", text: "Accès immédiat pendant 3 mois" },
      { id: "f3", text: "Support technique" },
    ],
    idealTitle: "Idéal pour",
    idealItems: [
      { id: "i1", text: "Tester le logiciel sur un projet concret" },
      { id: "i2", text: "Former votre équipe" },
      { id: "i3", text: "Répondre rapidement à un marché" },
    ],
    price: "1 100",
    tvaFeatures: [
      { id: "t0", text: "TVA applicable selon votre situation" },
      { id: "t1", text: "Besoin de démarrer rapidement ? Testez STRAKON en conditions réelles sur vos projets." },
      { id: "t2", text: "Une facture vous est envoyée. Dès réception du paiement, vous recevez un code de déblocage valable 3 mois." },
      { id: "t3", text: "Vous pouvez commencer à travailler immédiatement." },
    ],
    tvaPrice: "1 100",
    ctaLabel: "Je démarre avec la location 3 mois",
    ctaHref: "?commande=Location#contact",
  },
  {
    id: "option-2",
    tag: "OPTION 2 – Licence STRAKON définitive",
    icon: "key",
    title: "Investissez durablement dans votre performance",
    accentColor: "gold",
    features: [
      { id: "f1", text: "Licence STRAKON définitive" },
      { id: "f2", text: "6 mois de maintenance OFFERTS" },
      { id: "f3", text: "Support technique prioritaire" },
    ],
    idealTitle: "Idéal pour",
    idealItems: [
      { id: "index-1", text: "Intégrer STRAKON durablement dans votre bureau d'études" },
      { id: "index-2", text: "Standardiser vos méthodes" },
      { id: "index-3", text: "Améliorer votre productivité sur le long terme" },
    ],
    price: "5 900",
    tvaFeatures: [
      { id: "t0", text: "Profitez d’un tarif exceptionnel réservé aux participants — TVA applicable selon votre situation" },
      { id: "t1", text: "Une facture vous est émise. Vous recevrez un code de deblocage temporaire valable 15 jours." },
      { id: "t2", text: "Dés reception du paiement : La clé définitive vous est ensuite envoyée." },
    ],
    tvaPrice: "5 900",
    tvaPriceNote: "Environ 10 % du prix catalogue",
    ctaLabel: "Je choisis la licence définitive",
    ctaHref: "?commande=Achat#contact",
  },
];

export const tvaConditions: TvaCondition[] = [
  {
    id: "tva1",
    description:
      "Entreprises disposant d'un numéro de TVA intracommunautaire valide <strong>hors Luxembourg</strong>",
    detail: "→ Facturation sans TVA (autoliquidation).",
  },
  {
    id: "tva2",
    description:
      "Entreprises basées au <strong>Luxembourg</strong> ou sans numéro de TVA intracommunautaire valide",
    detail: "→ TVA luxembourgeoise de 17 % appliquée sur le prix HT.",
  },
];