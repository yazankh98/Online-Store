import React from "react";
import { FaWhatsapp, FaFacebookMessenger, FaEnvelope } from "react-icons/fa";

const ShopContact = () => {
    return (
        <section className="py-14 px-6 bg-slate-50">
            <div className="max-w-lg mx-auto text-center bg-white shadow-sm border border-slate-200 rounded-2xl p-8">

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Need Help?
                </h2>
                <p className="text-slate-600 mt-2 text-sm md:text-base">
                    Our team is here to answer your questions and assist your orders anytime.
                </p>

                {/* Contact Options */}
                <div className="mt-6 flex flex-col gap-4">
                    <a
                        href="#"
                        className="flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-full py-2.5 text-slate-700 font-medium hover:border-slate-400 transition-all"
                    >
                        <FaEnvelope className="text-lg" />
                        Email Us
                    </a>

                    <a
                        href="#"
                        className="flex items-center justify-center gap-3 bg-green-500 text-white rounded-full py-2.5 font-medium hover:opacity-90 transition-all"
                    >
                        <FaWhatsapp className="text-lg" />
                        WhatsApp
                    </a>

                    <a
                        href="#"
                        className="flex items-center justify-center gap-3 bg-blue-500 text-white rounded-full py-2.5 font-medium hover:opacity-90 transition-all"
                    >
                        <FaFacebookMessenger className="text-lg" />
                        Messenger
                    </a>
                </div>

                <p className="text-xs text-slate-400 mt-6">
                    We reply within minutes 🕓
                </p>
            </div>
        </section>
    );
};

export default ShopContact;
