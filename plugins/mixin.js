import Vue from 'vue';
import { mapState } from 'vuex';
import { DEVICE_TYPE } from 'packages/device';

Vue.mixin({
    computed: {
        ...mapState({
            device: (state) => state.device,
            i18nLocale: (state) => state.locale,
        }),
        isMobile() {
            return this.device === DEVICE_TYPE.MOBILE;
        },
        isDesktop() {
            return this.device === DEVICE_TYPE.DESKTOP;
        },
        isTablet() {
            return this.device === DEVICE_TYPE.TABLET;
        },
    },
});
