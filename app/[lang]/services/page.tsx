import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/i18n-config";
import {
    ShieldCheck,
    Zap,
    Wifi,
    Cctv,
    Lightbulb,
    CheckCircle2,
    ArrowRight,
    Server,
    Settings,
    Activity,
    Lock
} from "lucide-react";

export default async function Services({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    const servicesDict = dict.services.items;

    // Map dictionary keys to Lucide icons, colors, and images
    const serviceConfig: Record<string, any> = {
        access: {
            icon: ShieldCheck,
            color: "text-blue-600",
            bg: "bg-blue-50 dark:bg-blue-900/20",
            border: "border-blue-100 dark:border-blue-800",
            image: "/images/services/access.png"
        },
        ev: {
            icon: Zap,
            color: "text-green-600",
            bg: "bg-green-50 dark:bg-green-900/20",
            border: "border-green-100 dark:border-green-800",
            image: "/images/services/ev.png"
        },
        wifi: {
            icon: Wifi,
            color: "text-indigo-600",
            bg: "bg-indigo-50 dark:bg-indigo-900/20",
            border: "border-indigo-100 dark:border-indigo-800",
            image: "/images/services/wifi.png"
        },
        cctv: {
            icon: Cctv,
            color: "text-red-600",
            bg: "bg-red-50 dark:bg-red-900/20",
            border: "border-red-100 dark:border-red-800",
            image: "/images/services/cctv.png"
        },
        lighting: {
            icon: Lightbulb,
            color: "text-amber-600",
            bg: "bg-amber-50 dark:bg-amber-900/20",
            border: "border-amber-100 dark:border-amber-800",
            image: "/images/services/lighting.png"
        }
    };

    // Helper to get icon for feature index
    const getFeatureIcon = (index: number) => {
        const icons = [Settings, Server, Activity, Lock];
        return icons[index % icons.length];
    };

    return (
        <div className="bg-white dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-950"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        {dict.services.title}
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        {lang === 'en' ? 'Comprehensive technical infrastructure solutions mainly for industrial environments.' : '专为工业环境打造的全栈式技术基础设施解决方案。'}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="w-full">
                {Object.entries(servicesDict).map(([key, service]: [string, any], index) => {
                    const config = serviceConfig[key] || serviceConfig.access;
                    const Icon = config.icon;
                    const isEven = index % 2 === 0;

                    return (
                        <div key={key} id={key} className={`scroll-mt-24 py-24 ${isEven ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}`}>
                            <div className="container mx-auto px-4">
                                <div className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                                    {/* Image Side */}
                                    <div className="w-full lg:w-1/2">
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                            <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800">
                                                <img
                                                    src={config.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                            <div className="absolute bottom-6 left-6 text-white">
                                                <div className={`inline-flex items-center justify-center p-3 rounded-xl ${config.bg} backdrop-blur-sm bg-opacity-80 mb-4`}>
                                                    <Icon size={32} className={config.color} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-full lg:w-1/2">
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            {service.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                            {service.desc}
                                        </p>

                                        <div className="grid grid-cols-1 gap-4">
                                            {service.features && Object.values(service.features).map((feature: any, fIndex: number) => {
                                                const FeatureIcon = getFeatureIcon(fIndex);
                                                return (
                                                    <div key={fIndex} className="bg-white dark:bg-slate-950/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors shadow-sm">
                                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                                            <FeatureIcon size={18} className={config.color} />
                                                            {feature.title}
                                                        </h3>
                                                        <ul className="space-y-2">
                                                            {feature.items && feature.items.map((item: string, iIndex: number) => (
                                                                <li key={iIndex} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                                                                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-2 shrink-0 ${config.bg.replace('bg-', 'bg-').split(' ')[0].replace('/20', '-500')}`}></span>
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <section className="py-20 bg-blue-600 dark:bg-blue-700">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        {lang === 'en' ? 'Ready to modernize your facility?' : '准备好升级您的设施了吗？'}
                    </h2>
                    <a href={`/${lang}/contact`} className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-lg">
                        {dict.ctaSection.button}
                        <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
}
