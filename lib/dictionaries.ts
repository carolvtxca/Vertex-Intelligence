import 'server-only';
import type { Locale } from '@/i18n-config';

const dictionaries = {
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    cn: () => import('@/dictionaries/cn.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    if (dictionaries[locale]) {
        return dictionaries[locale]();
    }
    console.warn(`Dictionary not found for locale: ${locale}, falling back to default.`);
    return dictionaries['en']();
};
