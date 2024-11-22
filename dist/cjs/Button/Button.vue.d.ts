declare function __VLS_template(): {
    slots: {
        prepend?(_: {}): any;
        default?(_: {}): any;
        append?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    prependIcon?: string;
    appendIcon?: string;
    customColor?: boolean;
    size?: "small" | "large";
    solo?: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    prependIcon?: string;
    appendIcon?: string;
    customColor?: boolean;
    size?: "small" | "large";
    solo?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
