import Header from './components/Header.vue';
export default (await import('vue')).defineComponent({
    name: 'App',
    components: {
        Header
    }
});

function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.body, __VLS_intrinsicElements.body)({ ...{ class: ("container") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .Header;
    ({}.Header);
    __VLS_components.Header;
    // @ts-ignore
    [Header,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pt-5") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .RouterView;
    ({}.RouterView);
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['pt-5'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        Header
    };
    const __VLS_name = 'App';
    let __VLS_internalComponent;
}
