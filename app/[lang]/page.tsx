import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import { ClipboardList, PenTool, HardHat, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Hero Section */}
            <section className="relative w-full py-32 md:py-48 text-center bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-60"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="absolute inset-0 w-full h-full bg-black/50"></div>
                <div className="relative container mx-auto px-4 z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 animate-tech-blink">
                        {dict.hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 dark:text-slate-200 max-w-3xl mx-auto mb-10">
                        {dict.hero.subtitle}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href={`/${lang}/services`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
                            {dict.hero.cta}
                        </Link>
                        <Link href={`/${lang}/contact`} className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold py-3 px-8 rounded-full transition-all hover:scale-105 dark:bg-slate-800 dark:text-white dark:border-slate-700">
                            {dict.navigation.contact}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="w-full py-10 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-4">
                    <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">{dict.trust.title}</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Client Logos / Names */}
                        <div className="text-2xl font-black text-blue-600 flex items-center gap-2">
                            <span className="text-3xl">菜鸟</span> CAINIAO
                        </div>
                        <div className="text-2xl font-bold text-slate-800 dark:text-white font-serif italic">
                            miHoYo
                        </div>
                        <div className="text-2xl font-black text-slate-900 dark:text-white tracking-widest">
                            LEOPARD
                        </div>
                        <div className="text-2xl font-bold text-indigo-600 tracking-wide font-mono">
                            Xchange
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Highlights */}
            <section className="w-full py-24 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{dict.services.title}</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(dict.services.items).map(([key, item]: [string, any]) => {
                            const images: Record<string, string> = {
                                access: "/images/services/access.png",
                                ev: "/images/services/ev.png",
                                wifi: "/images/services/wifi.png",
                                cctv: "/images/services/cctv.png",
                                lighting: "/images/services/lighting.png"
                            };

                            return (
                                <div key={key} className="group rounded-2xl bg-slate-50 dark:bg-slate-900 hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 overflow-hidden hover:-translate-y-1">
                                    <div className="h-48 w-full overflow-hidden relative">
                                        <img
                                            src={images[key] || images.access}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                                        <span className="text-blue-600 dark:text-blue-400 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            {lang === 'en' ? 'Learn more' : '了解更多'}
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-center mt-12">
                        <Link href={`/${lang}/services`} className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                            {lang === 'en' ? 'View All Services' : '查看所有服务'}
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                </div>
            </section>


            {/* Why Us Section */}
            <section className="w-full py-24 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{dict.whyUs.title}</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Object.entries(dict.whyUs.items).map(([key, item]: [string, any]) => {
                            const images: Record<string, string> = {
                                expertise: "/images/why-us/expertise.png",
                                efficiency: "/images/why-us/deployment.png",
                                reliability: "/images/why-us/support.png"
                            };

                            return (
                                <div key={key} className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                                    <div className="absolute inset-0">
                                        <img
                                            src={images[key] || images.expertise}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                    </div>
                                    <div className="relative h-full flex flex-col justify-end p-8 text-white z-10">
                                        <div className="w-12 h-1 bg-blue-500 mb-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
                                        <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-slate-200 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="w-full py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{dict.testimonials.title}</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {dict.testimonials.items.map((item: any, index: number) => (
                            <div key={index} className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative">
                                <div className="absolute top-6 left-6 text-blue-200 dark:text-slate-800 text-6xl font-serif leading-none">"</div>
                                <p className="text-slate-600 dark:text-slate-300 relative z-10 mb-6 italic pt-4">
                                    {item.quote}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 text-xs font-bold">
                                        {item.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.author}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="w-full py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{dict.workflow.title}</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-700 dark:to-blue-900 rounded-full -z-10"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {Object.entries(dict.workflow.steps).map(([key, step]: [string, any], index) => {
                                // Map step keys (1, 2, 3, 4) to icons
                                const icons = [ClipboardList, PenTool, HardHat, Headphones];
                                const Icon = icons[index % icons.length];

                                return (
                                    <div key={key} className="relative group perspective">
                                        <div className="flex flex-col items-center text-center transform transition-all duration-500 group-hover:-translate-y-2">
                                            {/* Icon Circle */}
                                            <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full border-4 border-white dark:border-slate-700 shadow-xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:border-blue-500 dark:group-hover:border-blue-400">
                                                <div className="absolute inset-0 rounded-full bg-blue-50 dark:bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <Icon size={40} className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-white transition-colors" />

                                                {/* Number Badge */}
                                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800 text-sm">
                                                    {key}
                                                </div>
                                            </div>

                                            {/* Content Card */}
                                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 w-full group-hover:shadow-lg group-hover:border-blue-100 dark:group-hover:border-blue-900 transition-all duration-300">
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{step.title}</h3>
                                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-20 bg-blue-600 dark:bg-blue-700">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {dict.ctaSection.title}
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                        {dict.ctaSection.subtitle}
                    </p>
                    <Link href={`/${lang}/contact`} className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
                        {dict.ctaSection.button}
                    </Link>
                </div>
            </section>
        </div >
    );
}
