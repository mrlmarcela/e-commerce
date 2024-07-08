import { defineComponent, ref, onMounted } from 'vue';
import ChartComponent from '../components/ChartComponent.vue';
export default defineComponent({
    components: {
        ChartComponent
    },
    setup() {
        const completedOrders = ref(0);
        const processingOrders = ref(0);
        const cancelledOrders = ref(0);
        const monthlyChartData = ref({
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [{
                    label: 'Vendas realizadas',
                    data: new Array(12).fill(0),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
        });
        const monthlyRevenueChartData = ref({
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [{
                    label: 'Faturamento',
                    data: new Array(12).fill(0),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
        });
        const chartOptions = {
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        };
        const dataLoaded = ref(false);
        const getOrders = async () => {
            try {
                const response = await fetch('http://localhost:3000/orders');
                const data = await response.json();
                completedOrders.value = data.filter((order) => order.status === 'Entregue').length;
                processingOrders.value = data.filter((order) => order.status === 'Em progresso').length;
                cancelledOrders.value = data.filter((order) => order.status === 'Cancelado').length;
                const monthlySales = new Array(12).fill(0);
                const monthlyRevenue = new Array(12).fill(0);
                data.forEach((order) => {
                    const orderDate = new Date(order.date);
                    const month = orderDate.getMonth();
                    if (order.status !== 'Cancelado') {
                        monthlyRevenue[month] += order.totalPrice;
                        monthlySales[month] += 1;
                    }
                });
                monthlyChartData.value.datasets[0].data = monthlySales;
                monthlyRevenueChartData.value.datasets[0].data = monthlyRevenue;
                dataLoaded.value = true;
            }
            catch (error) {
                console.error('Erro ao buscar os pedidos.', error);
            }
        };
        onMounted(() => {
            getOrders();
        });
        return {
            completedOrders,
            processingOrders,
            cancelledOrders,
            monthlyChartData,
            monthlyRevenueChartData,
            chartOptions,
            dataLoaded
        };
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container pb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row g-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row align-items-center pb-3 pb-md-4 mb-md-1 mb-lg-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-12 col-xl-6 mb-3 mb-md-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("h2 me-3 mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row align-items-center justify-content-between g-4 pe-5 me-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 col-md-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex align-items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-content-center align-items-center bg-success text-white rounded-circle") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-check") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ms-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("mb-0 fw-bold") }, });
    (__VLS_ctx.completedOrders);
    // @ts-ignore
    [completedOrders,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-body-secondary mb-0") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 col-md-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex align-items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-content-center align-items-center bg-warning text-white rounded-circle") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-clock") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ms-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("mb-0 fw-bold") }, });
    (__VLS_ctx.processingOrders);
    // @ts-ignore
    [processingOrders,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-body-secondary mb-0") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 col-md-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex align-items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-content-center align-items-center bg-danger text-white rounded-circle") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-x") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ms-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("mb-0") }, });
    (__VLS_ctx.cancelledOrders);
    // @ts-ignore
    [cancelledOrders,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-body-secondary fs-9 mb-0") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6 row g-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card h-100 p-4 pb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row flex-between-center mb-4 g-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("mb-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-body-tertiary lh-sm mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_0 = {}
        .ChartComponent;
    ({}.ChartComponent);
    __VLS_components.ChartComponent;
    // @ts-ignore
    [ChartComponent,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ chartType: (('bar')), chartData: ((__VLS_ctx.monthlyChartData)), chartOptions: ((__VLS_ctx.chartOptions)), dataLoaded: ((__VLS_ctx.dataLoaded)), }));
    const __VLS_2 = __VLS_1({ chartType: (('bar')), chartData: ((__VLS_ctx.monthlyChartData)), chartOptions: ((__VLS_ctx.chartOptions)), dataLoaded: ((__VLS_ctx.dataLoaded)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ chartType: (('bar')), chartData: ((__VLS_ctx.monthlyChartData)), chartOptions: ((__VLS_ctx.chartOptions)), dataLoaded: ((__VLS_ctx.dataLoaded)), }));
    // @ts-ignore
    [monthlyChartData, chartOptions, dataLoaded,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6 row g-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card h-100 p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row flex-between-center mb-4 g-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("mb-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-body-tertiary lh-sm mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_6 = {}
        .ChartComponent;
    ({}.ChartComponent);
    __VLS_components.ChartComponent;
    // @ts-ignore
    [ChartComponent,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ chartType: (('bar')), chartData: ((__VLS_ctx.monthlyRevenueChartData)), chartOptions: ((__VLS_ctx.chartOptions)), dataLoaded: ((__VLS_ctx.dataLoaded)), }));
    const __VLS_8 = __VLS_7({ chartType: (('bar')), chartData: ((__VLS_ctx.monthlyRevenueChartData)), chartOptions: ((__VLS_ctx.chartOptions)), dataLoaded: ((__VLS_ctx.dataLoaded)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ chartType: (('bar')), chartData: ((__VLS_ctx.monthlyRevenueChartData)), chartOptions: ((__VLS_ctx.chartOptions)), dataLoaded: ((__VLS_ctx.dataLoaded)), }));
    // @ts-ignore
    [chartOptions, dataLoaded, monthlyRevenueChartData,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['pb-5'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['g-4'];
        __VLS_styleScopedClasses['col-12'];
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
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['justify-content-between'];
        __VLS_styleScopedClasses['g-4'];
        __VLS_styleScopedClasses['pe-5'];
        __VLS_styleScopedClasses['me-1'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['col-md-auto'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['bg-success'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['rounded-circle'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-check'];
        __VLS_styleScopedClasses['ms-3'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['text-body-secondary'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['col-md-auto'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['bg-warning'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['rounded-circle'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-clock'];
        __VLS_styleScopedClasses['ms-3'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['text-body-secondary'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['col-md-auto'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['bg-danger'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['rounded-circle'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-x'];
        __VLS_styleScopedClasses['ms-3'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['text-body-secondary'];
        __VLS_styleScopedClasses['fs-9'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['col-6'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['g-3'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['h-100'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['pb-0'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['flex-between-center'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['g-3'];
        __VLS_styleScopedClasses['mb-1'];
        __VLS_styleScopedClasses['text-body-tertiary'];
        __VLS_styleScopedClasses['lh-sm'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['col-6'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['g-3'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['h-100'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['flex-between-center'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['g-3'];
        __VLS_styleScopedClasses['mb-1'];
        __VLS_styleScopedClasses['text-body-tertiary'];
        __VLS_styleScopedClasses['lh-sm'];
        __VLS_styleScopedClasses['mb-0'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        ChartComponent
    };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
