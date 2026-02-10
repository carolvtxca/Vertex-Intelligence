import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/i18n-config';

interface NavbarProps {
    lang: Locale;
    nav: {
        home: string;
        services: string;
        about: string;
        contact: string;
        getStarted: string;
    };
}

export default function Navbar({ lang, nav }: NavbarProps) {
    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href={`/${lang}`} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/images/logo.png" className="h-8 w-auto" alt="Vertex Logo" width={32} height={32} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Vertex Intelligence
                    </span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <div className="flex items-center space-x-2 mr-4">
                        <Link href="/en" className={`text-sm ${lang === 'en' ? 'font-bold underline' : 'text-gray-500'}`}>EN</Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/cn" className={`text-sm ${lang === 'cn' ? 'font-bold underline' : 'text-gray-500'}`}>中文</Link>
                    </div>
                    <Link href={`/${lang}/contact`}>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {nav.getStarted}
                        </button>
                    </Link>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <Link href={`/${lang}`} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{nav.home}</Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/services`} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{nav.services}</Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/about`} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{nav.about}</Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/contact`} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{nav.contact}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
