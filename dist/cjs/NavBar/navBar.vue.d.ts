import { NavBarItem } from '../interface';
declare let __VLS_typeProps: {
    col?: number;
    items: NavBarItem[];
};
type __VLS_PublicProps = {
    modelValue?: string;
} & typeof __VLS_typeProps;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
