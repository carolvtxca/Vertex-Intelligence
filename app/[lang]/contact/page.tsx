import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/i18n-config";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default async function Contact({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4 py-20">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full flex flex-col md:flex-row min-h-[600px]">

                {/* Visual Side */}
                <div className="md:w-1/2 relative bg-slate-900">
                    <img
                        src="/images/contact/office.png"
                        alt="Vertex Office"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="relative z-10 p-12 h-full flex flex-col justify-between text-white">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">{dict.contact.title}</h1>
                            <p className="text-lg text-slate-200 leading-relaxed mb-8">
                                {lang === 'en'
                                    ? "Ready to upgrade your infrastructure? Get in touch with us today for a consultation."
                                    : "准备好升级您的基础设施了吗？立即联系我们进行咨询。"}
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-600/20 backdrop-blur rounded-full flex items-center justify-center text-blue-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Phone</p>
                                    <p className="text-lg font-medium">626 386 3830</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-600/20 backdrop-blur rounded-full flex items-center justify-center text-blue-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Email</p>
                                    <p className="text-lg font-medium">info@vtxca.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-600/20 backdrop-blur rounded-full flex items-center justify-center text-blue-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Location</p>
                                    <p className="text-lg font-medium">Los Angeles, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="md:w-1/2 p-8 md:p-12 bg-white dark:bg-slate-800 flex flex-col justify-center">
                    <ContactForm dict={dict.contact} lang={lang} />
                </div>
            </div>
        </div>
    );
}
