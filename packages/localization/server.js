const locales = {
    vi: {
        code: 'vi',
        iso: 'vi-VN',
        file: 'vi.js',
    },
    en: {
        code: 'en',
        iso: 'en-GB',
        file: 'en.js',
    },
};

const datetimeLocale = {
    vi: 'vi',
    en: 'en-gb',
};

const defaultTimezone = 'Asia/Ho_Chi_Minh';

const localeArray = Object.entries(datetimeLocale).map(([_, value]) => value);

const defaultLocale = datetimeLocale.vi;
const langDir = 'locales/';

module.exports = {
    locales,
    defaultLocale,
    langDir,
    datetimeLocale,
    localeArray,
    defaultTimezone,
};
