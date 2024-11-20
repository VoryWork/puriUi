declare function __VLS_template(): {
    slots: {
        prepend?(_: {}): any;
        append?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    prependIcon: {
        type: StringConstructor;
        required: false;
    };
    cleaner: {
        type: BooleanConstructor;
        default: boolean;
    };
    validation: {
        type: {
            (arrayLength: number): ((v: any) => string | void)[];
            (...items: ((v: any) => string | void)[]): ((v: any) => string | void)[];
            new (arrayLength: number): ((v: any) => string | void)[];
            new (...items: ((v: any) => string | void)[]): ((v: any) => string | void)[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: false;
    };
    autoComplete: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: import('vue').PropType<any>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: any) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    prependIcon: {
        type: StringConstructor;
        required: false;
    };
    cleaner: {
        type: BooleanConstructor;
        default: boolean;
    };
    validation: {
        type: {
            (arrayLength: number): ((v: any) => string | void)[];
            (...items: ((v: any) => string | void)[]): ((v: any) => string | void)[];
            new (arrayLength: number): ((v: any) => string | void)[];
            new (...items: ((v: any) => string | void)[]): ((v: any) => string | void)[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: false;
    };
    autoComplete: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: import('vue').PropType<any>;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
}>, {
    type: string;
    cleaner: boolean;
    autoComplete: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
