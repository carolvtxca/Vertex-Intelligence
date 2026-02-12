import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/i18n-config";
import AboutStats from "@/components/AboutStats";

export default async function About({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);

    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/about/leadership.png"
                        alt="Vertex Leadership"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {dict.about.hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                        {dict.about.hero.subtitle}
                    </p>
                </div>
            </div>

            {/* Our Story Section */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full z-0"></div>
                                <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden bg-black">
                                    <video
                                        controls
                                        className="w-full h-auto"
                                        poster="/images/about/team.png" // Use the original image as poster
                                    >
                                        <source src={lang === 'en' ? "/Vertex introduction_EN.mp4" : "/Vertex introduction_cn.mp4"} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 dark:bg-slate-800 rounded-2xl z-0 -rotate-6"></div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Who We Are</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{dict.about.story.title}</h3>
                            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>{dict.about.story.p1}</p>
                                <p>{dict.about.story.p2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{dict.about.values.title}</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {dict.about.values.items.map((item: any, index: number) => (
                            <div key={index} className="bg-white dark:bg-slate-950 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 dark:border-slate-800">
                                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                                    {index === 0 && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                                    {index === 1 && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                                    {index === 2 && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <AboutStats dict={dict.about.stats} />

            {/* Team Section */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{dict.about.team.title}</h2>
                    <h3 className="text-xl text-blue-600 font-medium mb-8">{dict.about.team.subtitle}</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                        {dict.about.team.desc}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder for team logos/certifications or partner badges if needed */}
                        {/* Currently just spacing or could be certification logos */}
                    </div>
                </div>
            </section>
        </div>
    );
}
