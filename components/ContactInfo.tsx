"use client";

export default function ContactInfo() {
     return (
          <div className="max-w-[1000px] mx-auto px-6 mb-16">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Email */}
                    <div className="bg-white/80 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                         <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                              </svg>
                         </div>
                         <h3 className="font-black text-navy text-[16px] mb-1">Email</h3>
                         <p className="text-slate-600 text-[14px]">info@c2it.lu</p>
                    </div>

                    {/* Téléphone */}
                    <div className="bg-white/80 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                         <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                              </svg>
                         </div>
                         <h3 className="font-black text-navy text-[16px] mb-1">Téléphone</h3>
                         <p className="text-slate-600 text-[14px]">+352 27 996 597</p>
                    </div>

                    {/* Brevo Chat Trigger */}
                    <button
                         id="brevo-chat-trigger"
                         onClick={() => (window as any).BrevoConversations?.('openChat')}
                         className="bg-white/80 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-md group"
                    >
                         <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                         </div>
                         <h3 className="font-black text-navy text-[16px] mb-1">Chat Support</h3>
                         <p className="text-slate-600 text-[14px]">Assistance en direct disponible</p>
                         <span className="text-blue-600 text-[12px] font-bold mt-2 uppercase tracking-tight group-hover:underline">Ouvrir le chat →</span>
                    </button>
               </div>
          </div>
     );
}
