interface PuriDatePickerProps {
    /**
     * 是否是范围选择
     */
    range?: boolean;
    /**
     * 是否是月选择
     */
    month?: boolean;
    /**
     *第一天是周几
     */
    firstDay?: number;
}
declare let __VLS_typeProps: PuriDatePickerProps;
type __VLS_PublicProps = {
    modelValue: string | string[];
} & typeof __VLS_typeProps;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string | string[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: string | string[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
