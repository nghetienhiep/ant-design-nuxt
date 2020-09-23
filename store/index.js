import { cookies, defaultOptions } from 'packages/cookies/constant';

export const state = () => ({
    device: 'desktop',
    locale: 'vi',
});

export const getters = {
    device: (state) => state.device,
    locale: (state) => state.locale,
};

export const actions = {
    // Only mode: universal
    nuxtServerInit({ commit }) {},
};

export const mutations = {
    SET_LANG(state, locale) {
        if (locale) {
            this.$cookies.set(cookies.LOCALE, locale, defaultOptions);
            state.locale = locale;
        }
    },
    SET_DEVICE(state, device) {
        state.device = device;
    },
};
