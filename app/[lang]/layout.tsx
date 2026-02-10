import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "../globals.css";
import { i18n, type Locale } from "../../i18n-config";
import Navbar from "../../components/Navbar";
import { getDictionary } from "../../lib/dictionaries";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Vertex Intelligence - Full-Stack Technical Services",
    description: "Vertex Intelligence provides power, network, access control, surveillance, and EV charging systems for businesses.",
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { lang: Locale };
}>) {
    const dict = await getDictionary(params.lang);

    return (
        <html lang={params.lang}>
            <body className="bg-white dark:bg-slate-950">
                <Navbar lang={params.lang} nav={dict.navigation} />
                <main className="pt-20 min-h-screen">
                    {children}
                </main>
                <footer className="bg-slate-50 dark:bg-slate-900 py-12 mt-20">
                    <div className="container mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
                        <p>&copy; {new Date().getFullYear()} Vertex Intelligence, LLC. All rights reserved.</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
