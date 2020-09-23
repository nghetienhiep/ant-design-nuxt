import { deviceEnquire, DEVICE_TYPE } from 'packages/device';

export default function ({ store }) {
    deviceEnquire((deviceType) => {
        switch (deviceType) {
            case DEVICE_TYPE.DESKTOP:
                store.commit('SET_DEVICE', 'desktop');
                break;
            case DEVICE_TYPE.TABLET:
                store.commit('SET_DEVICE', 'tablet');
                break;
            case DEVICE_TYPE.MOBILE:
            default:
                store.commit('SET_DEVICE', 'mobile');
                break;
        }
    });
}
