"use client";
import Image from "next/image";

export default function Footer() {
     const currentYear = new Date().getFullYear();

     return (
          <footer className="bg-[#1a2e5a] text-white py-16 mt-16 border-t border-white/10 relative z-10 w-full overflow-hidden">
               <div className="max-w-[1240px] mx-auto px-6 flex flex-col items-center">
                    <div className="mb-10 transform hover:scale-105 transition-transform duration-300">
                         <Image
                              src="/logo-c2it-white.png"
                              alt="C2IT - Expertise en Logiciels de Construction et Solutions IT"
                              width={180}
                              height={50}
                              className="h-12 w-auto object-contain"
                         />
                    </div>

                    <div className="w-full pt-10 border-t border-white/5 text-center">
                         <p className="text-white/50 text-[14px] mb-8 font-medium tracking-wide">
                              © {currentYear} C2IT & STRAKON - Coffrage & Armatures | Tous droits réservés.
                         </p>

                         <div className="flex justify-center opacity-40 hover:opacity-100 transition-opacity duration-500">
                              <Image
                                   src="/logo-strakon-white.png"
                                   alt="STRAKON - Logiciel leader pour le coffrage et l'armature"
                                   width={160}
                                   height={40}
                                   className="h-9 w-auto object-contain"
                              />
                         </div>
                    </div>
               </div>
          </footer>
     );
}
