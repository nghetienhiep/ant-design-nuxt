<template>
    <a-config-provider :locale="i18nLocale === 'vi' ? vi_VN : en_GB">
        <a-layout :class="['layout', device]">
            <slot />
            <a-back-top class="back-top" />
        </a-layout>
    </a-config-provider>
</template>

<script>
    import { BackTop, ConfigProvider, Layout } from 'ant-design-vue';
    import vi_VN from 'ant-design-vue/lib/locale-provider/vi_VN';
    import en_GB from 'ant-design-vue/lib/locale-provider/en_GB';

    export default {
        name: 'Config',
        components: {
            ALayout: Layout,
            ABackTop: BackTop,
            AConfigProvider: ConfigProvider,
        },
        data() {
            return {
                en_GB,
                vi_VN,
            };
        },
    };
</script>

<style lang="scss">
    @import 'components/AntD/Style/CustomAntd';
    @import 'assets/style/Global';
</style>
