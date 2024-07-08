import { defineComponent, reactive, computed, onMounted } from 'vue';
export default defineComponent({
    name: 'Requests',
    setup() {
        const state = reactive({
            orders: [],
            currentPage: 1,
            pageSize: 10,
            sortKey: 'date',
            sortDirection: 'asc',
        });
        const getOrders = async () => {
            try {
                const response = await fetch('http://localhost:3000/orders');
                const data = await response.json();
                state.orders = data || [];
            }
            catch (error) {
                console.error('Erro ao buscar as encomendas:', error);
            }
        };
        const totalPages = computed(() => {
            if (state.orders.length === 0) {
                return 0;
            }
            return Math.ceil(state.orders.length / state.pageSize);
        });
        const filteredOrders = computed(() => {
            const start = (state.currentPage - 1) * state.pageSize;
            const end = start + state.pageSize;
            let sortedOrders = [...state.orders];
            if (state.sortKey) {
                sortedOrders = sortedOrders.sort((a, b) => {
                    const valueA = a[state.sortKey];
                    const valueB = b[state.sortKey];
                    if (state.sortDirection === 'asc') {
                        return valueA > valueB ? 1 : -1;
                    }
                    else {
                        return valueA < valueB ? 1 : -1;
                    }
                });
            }
            return sortedOrders.slice(start, end);
        });
        const setCurrentPage = (page) => {
            state.currentPage = page;
        };
        const sortBy = (key) => {
            if (state.sortKey === key) {
                state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
            }
            else {
                state.sortKey = key;
                state.sortDirection = 'asc';
            }
        };
        const formatDate = (date) => {
            if (!date)
                return '';
            const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            };
            const formattedDate = new Date(date).toLocaleDateString('pt-BR', options);
            return formattedDate;
        };
        const formatCurrency = (amount) => {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(amount);
        };
        onMounted(getOrders);
        return {
            state,
            totalPages,
            filteredOrders,
            setCurrentPage,
            sortBy,
            formatDate,
            formatCurrency,
        };
    },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ps-lg-3 ps-xl-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row align-items-center pb-3 pb-md-4 mb-md-1 mb-lg-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-12 col-xl-6 mb-3 mb-md-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("h2 me-3 mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("table align-middle fs-sm table-hover") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("py-3 ps-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.sortBy('id');
                // @ts-ignore
                [sortBy,];
            } }, type: ("button"), ...{ class: ("btn orders-sort fw-bold text-body p-0") }, });
    if (__VLS_ctx.state.sortKey === 'id') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ((['bi bi-sort-' + (__VLS_ctx.state.sortDirection === 'asc' ? 'up' : 'down')])) }, ...{ class: ("fs-lg align-middle ms-1") }, });
        __VLS_styleScopedClasses = (['bi bi-sort-' + (state.sortDirection === 'asc' ? 'up' : 'down')]);
        // @ts-ignore
        [state, state,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("py-3 d-none d-md-table-cell") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.sortBy('date');
                // @ts-ignore
                [sortBy,];
            } }, type: ("button"), ...{ class: ("btn orders-sort fw-bold text-body p-0") }, });
    if (__VLS_ctx.state.sortKey === 'date') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ((['bi bi-sort-' + (__VLS_ctx.state.sortDirection === 'asc' ? 'up' : 'down')])) }, ...{ class: ("fs-lg align-middle ms-1") }, });
        __VLS_styleScopedClasses = (['bi bi-sort-' + (state.sortDirection === 'asc' ? 'up' : 'down')]);
        // @ts-ignore
        [state, state,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("py-3 d-none d-md-table-cell") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.sortBy('status');
                // @ts-ignore
                [sortBy,];
            } }, type: ("button"), ...{ class: ("btn orders-sort fw-bold text-body p-0") }, });
    if (__VLS_ctx.state.sortKey === 'status') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ((['bi bi-sort-' + (__VLS_ctx.state.sortDirection === 'asc' ? 'up' : 'down')])) }, ...{ class: ("fs-lg align-middle ms-1") }, });
        __VLS_styleScopedClasses = (['bi bi-sort-' + (state.sortDirection === 'asc' ? 'up' : 'down')]);
        // @ts-ignore
        [state, state,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("py-3 d-none d-md-table-cell") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.sortBy('totalItems');
                // @ts-ignore
                [sortBy,];
            } }, type: ("button"), ...{ class: ("btn orders-sort fw-bold text-body p-0") }, });
    if (__VLS_ctx.state.sortKey === 'totalItems') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ((['bi bi-sort-' + (__VLS_ctx.state.sortDirection === 'asc' ? 'up' : 'down')])) }, ...{ class: ("fs-lg align-middle ms-1") }, });
        __VLS_styleScopedClasses = (['bi bi-sort-' + (state.sortDirection === 'asc' ? 'up' : 'down')]);
        // @ts-ignore
        [state, state,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("py-3 d-none d-md-table-cell") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.sortBy('totalPrice');
                // @ts-ignore
                [sortBy,];
            } }, type: ("button"), ...{ class: ("btn orders-sort fw-bold text-body p-0") }, });
    if (__VLS_ctx.state.sortKey === 'totalPrice') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ((['bi bi-sort-' + (__VLS_ctx.state.sortDirection === 'asc' ? 'up' : 'down')])) }, ...{ class: ("fs-lg align-middle ms-1") }, });
        __VLS_styleScopedClasses = (['bi bi-sort-' + (state.sortDirection === 'asc' ? 'up' : 'down')]);
        // @ts-ignore
        [state, state,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("py-3 ps-0 d-flex align-items-center justify-content-end pe-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.sortBy('deliveryDate');
                // @ts-ignore
                [sortBy,];
            } }, type: ("button"), ...{ class: ("btn orders-sort fw-bold text-body p-0") }, });
    if (__VLS_ctx.state.sortKey === 'deliveryDate') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ((['bi bi-sort-' + (__VLS_ctx.state.sortDirection === 'asc' ? 'up' : 'down')])) }, ...{ class: ("fs-lg align-middle ms-1") }, });
        __VLS_styleScopedClasses = (['bi bi-sort-' + (state.sortDirection === 'asc' ? 'up' : 'down')]);
        // @ts-ignore
        [state, state,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({ ...{ class: ("text-body-emphasis") }, });
    for (const [order] of __VLS_getVForSourceType((__VLS_ctx.filteredOrders))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((order.id)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("fw-medium pt-2 pb-3 py-md-2 ps-0") }, });
        (order.id);
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("list-unstyled fw-bold text-body m-0 d-md-none") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        (__VLS_ctx.formatDate(order.date));
        // @ts-ignore
        [filteredOrders, formatDate,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("d-flex align-items-center") }, });
        (order.status);
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("fw-medium text-body-emphasis") }, });
        (__VLS_ctx.formatCurrency(order.totalPrice));
        // @ts-ignore
        [formatCurrency,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("fw-medium py-3 d-none d-md-table-cell") }, });
        (__VLS_ctx.formatDate(order.date));
        // @ts-ignore
        [formatDate,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("fw-medium py-3 d-none d-md-table-cell") }, });
        (order.status);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("fw-medium py-3 d-none d-md-table-cell") }, });
        (order.totalItems);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("fw-medium py-3 d-none d-md-table-cell") }, });
        (__VLS_ctx.formatCurrency(order.totalPrice));
        // @ts-ignore
        [formatCurrency,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("py-3 pe-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("list-unstyled m-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        (__VLS_ctx.formatDate(order.deliveryDate));
        // @ts-ignore
        [formatDate,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("pt-3 pb-2 pb-sm-0 mt-2 mt-md-3") }, "aria-label": ("Page navigation example"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("pagination") }, });
    for (const [page] of __VLS_getVForSourceType((__VLS_ctx.totalPages))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("page-item") }, key: ((page)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.setCurrentPage(page);
                    // @ts-ignore
                    [totalPages, setCurrentPage,];
                } }, ...{ class: ("page-link") }, ...{ class: (({ 'active': __VLS_ctx.state.currentPage === page })) }, });
        __VLS_styleScopedClasses = ({ 'active': state.currentPage === page });
        (page);
        // @ts-ignore
        [state,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['ps-lg-3'];
        __VLS_styleScopedClasses['ps-xl-0'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['pb-3'];
        __VLS_styleScopedClasses['pb-md-4'];
        __VLS_styleScopedClasses['mb-md-1'];
        __VLS_styleScopedClasses['mb-lg-2'];
        __VLS_styleScopedClasses['col-md-12'];
        __VLS_styleScopedClasses['col-xl-6'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['mb-md-0'];
        __VLS_styleScopedClasses['h2'];
        __VLS_styleScopedClasses['me-3'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['table'];
        __VLS_styleScopedClasses['align-middle'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['table-hover'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['ps-0'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['orders-sort'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['text-body'];
        __VLS_styleScopedClasses['p-0'];
        __VLS_styleScopedClasses['fs-lg'];
        __VLS_styleScopedClasses['align-middle'];
        __VLS_styleScopedClasses['ms-1'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['d-none'];
        __VLS_styleScopedClasses['d-md-table-cell'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['orders-sort'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['text-body'];
        __VLS_styleScopedClasses['p-0'];
        __VLS_styleScopedClasses['fs-lg'];
        __VLS_styleScopedClasses['align-middle'];
        __VLS_styleScopedClasses['ms-1'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['d-none'];
        __VLS_styleScopedClasses['d-md-table-cell'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['orders-sort'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['text-body'];
        __VLS_styleScopedClasses['p-0'];
        __VLS_styleScopedClasses['fs-lg'];
        __VLS_styleScopedClasses['align-middle'];
        __VLS_styleScopedClasses['ms-1'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['d-none'];
        __VLS_styleScopedClasses['d-md-table-cell'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['orders-sort'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['text-body'];
        __VLS_styleScopedClasses['p-0'];
        __VLS_styleScopedClasses['fs-lg'];
        __VLS_styleScopedClasses['align-middle'];
        __VLS_styleScopedClasses['ms-1'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['d-none'];
        __VLS_styleScopedClasses['d-md-table-cell'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['orders-sort'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['text-body'];
        __VLS_styleScopedClasses['p-0'];
        __VLS_styleScopedClasses['fs-lg'];
        __VLS_styleScopedClasses['align-middle'];
        __VLS_styleScopedClasses['ms-1'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['ps-0'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['justify-content-end'];
        __VLS_styleScopedClasses['pe-0'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['orders-sort'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['text-body'];
        __VLS_styleScopedClasses['p-0'];
        __VLS_styleScopedClasses['fs-lg'];
        __VLS_styleScopedClasses['align-middle'];
        __VLS_styleScopedClasses['ms-1'];
        __VLS_styleScopedClasses['text-body-emphasis'];
        __VLS_styleScopedClasses['fw-medium'];
        __VLS_styleScopedClasses['pt-2'];
        __VLS_styleScopedClasses['pb-3'];
        __VLS_styleScopedClasses['py-md-2'];
        __VLS_styleScopedClasses['ps-0'];
        __VLS_styleScopedClasses['list-unstyled'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['text-body'];
        __VLS_styleScopedClasses['m-0'];
        __VLS_styleScopedClasses['d-md-none'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['fw-medium'];
        __VLS_styleScopedClasses['text-body-emphasis'];
        __VLS_styleScopedClasses['fw-medium'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['d-none'];
        __VLS_styleScopedClasses['d-md-table-cell'];
        __VLS_styleScopedClasses['fw-medium'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['d-none'];
        __VLS_styleScopedClasses['d-md-table-cell'];
        __VLS_styleScopedClasses['fw-medium'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['d-none'];
        __VLS_styleScopedClasses['d-md-table-cell'];
        __VLS_styleScopedClasses['fw-medium'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['d-none'];
        __VLS_styleScopedClasses['d-md-table-cell'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['pe-0'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['justify-content-end'];
        __VLS_styleScopedClasses['position-relative'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['gap-sm-2'];
        __VLS_styleScopedClasses['ms-n2'];
        __VLS_styleScopedClasses['ms-sm-0'];
        __VLS_styleScopedClasses['list-unstyled'];
        __VLS_styleScopedClasses['m-0'];
        __VLS_styleScopedClasses['pt-3'];
        __VLS_styleScopedClasses['pb-2'];
        __VLS_styleScopedClasses['pb-sm-0'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['mt-md-3'];
        __VLS_styleScopedClasses['pagination'];
        __VLS_styleScopedClasses['page-item'];
        __VLS_styleScopedClasses['page-link'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'Requests';
    let __VLS_internalComponent;
}
