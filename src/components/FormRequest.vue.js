export default (await import('vue')).defineComponent({
    props: {
        colors: Array,
        selectedColorName: String,
        sizes: Array
    },
    emits: ['select-color', 'update-quantity', 'add-to-cart'],
    computed: {
        isOrderEnabled() {
            return this.sizes.some(size => size.quantity > 0);
        }
    },
    methods: {
        selectColor(color) {
            this.$emit('select-color', color.name);
        },
        updateQuantity(index, change) {
            this.$emit('update-quantity', index, change);
        },
        addToCart() {
            this.$emit('add-to-cart');
        }
    }
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("form-label fw-semibold pb-1 mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-body fw-normal") }, });
    (__VLS_ctx.selectedColorName);
    // @ts-ignore
    [selectedColorName,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-wrap") }, });
    for (const [color, index] of __VLS_getVForSourceType((__VLS_ctx.colors))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.selectColor(color);
                    // @ts-ignore
                    [colors, selectColor,];
                } }, key: ((index)), ...{ class: ("p-2") }, ...{ style: ({}) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: (({ backgroundColor: color.code, borderRadius: '50%', width: '40px', height: '40px', border: __VLS_ctx.selectedColorName === color.name ? '2px solid black' : '1px solid #ccc' })) }, });
        // @ts-ignore
        [selectedColorName,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("form-label fw-semibold pb-1 mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row g-4") }, });
    for (const [size, index] of __VLS_getVForSourceType((__VLS_ctx.sizes))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("col-5 d-flex align-items-center justify-content-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fw-semibold col-2 d-flex align-items-center") }, });
        (size.label);
        // @ts-ignore
        [sizes,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-9") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex align-items-center gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.updateQuantity(index, -1);
                    // @ts-ignore
                    [updateQuantity,];
                } }, ...{ class: ("btn btn-outline-secondary btn-sm btn-equal-height") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("text"), value: ((size.quantity)), ...{ class: ("form-control text-center input-sm") }, readonly: (true), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.updateQuantity(index, 1);
                    // @ts-ignore
                    [updateQuantity,];
                } }, ...{ class: ("btn btn-outline-secondary btn-sm btn-equal-height") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex gap-3 pb-3 pb-lg-4 mb-3 pt-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.addToCart) }, type: ("button"), ...{ class: ("btn btn-lg btn-dark w-100") }, disabled: ((!__VLS_ctx.isOrderEnabled)), });
    // @ts-ignore
    [addToCart, isOrderEnabled,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['form-label'];
        __VLS_styleScopedClasses['fw-semibold'];
        __VLS_styleScopedClasses['pb-1'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-body'];
        __VLS_styleScopedClasses['fw-normal'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['form-label'];
        __VLS_styleScopedClasses['fw-semibold'];
        __VLS_styleScopedClasses['pb-1'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['g-4'];
        __VLS_styleScopedClasses['col-5'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['justify-content-between'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['fw-semibold'];
        __VLS_styleScopedClasses['col-2'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['col-9'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['btn-equal-height'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['input-sm'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['btn-equal-height'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['pb-3'];
        __VLS_styleScopedClasses['pb-lg-4'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['pt-5'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-lg'];
        __VLS_styleScopedClasses['btn-dark'];
        __VLS_styleScopedClasses['w-100'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
