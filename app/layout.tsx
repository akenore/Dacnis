import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "STRAKON : Offre Exclusive Formation | C2IT - Coffrage & Armatures",
  description: "Profitez d'une offre spéciale sur les licences STRAKON pour les participants de la formation. Options de location ou d'achat définitif pour optimiser vos projets de coffrage et armatures au Luxembourg et à l'international.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={roboto.className}>
        {children}

        <Script
          id="brevo-conversations"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, w, c) {
                w.BrevoConversationsID = '62ac6353e5958733497876ae';
                w.BrevoConversationsSetup = {
                  customWidgetButton: '#brevo-chat-trigger'
                };
                w[c] = w[c] || function() {
                  (w[c].q = w[c].q || []).push(arguments);
                };
                var s = d.createElement('script');
                s.async = true;
                s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
                if (d.head) d.head.appendChild(s);
              })(document, window, 'BrevoConversations');
            `,
          }}
        />
      </body>
    </html>
  );
}