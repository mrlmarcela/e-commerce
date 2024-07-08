import { defineComponent, ref, watch } from 'vue';
import Chart from 'chart.js/auto';
export default defineComponent({
    props: {
        chartType: {
            type: String,
            required: true
        },
        chartData: {
            type: Object,
            required: true
        },
        chartOptions: {
            type: Object,
            default: () => ({})
        },
        dataLoaded: {
            type: Boolean,
            required: true
        }
    },
    setup(props) {
        const chartCanvas = ref(null);
        let chartInstance = null;
        const initializeChart = () => {
            if (chartCanvas.value) {
                const ctx = chartCanvas.value.getContext('2d');
                if (ctx) {
                    chartInstance = new Chart(ctx, {
                        type: props.chartType,
                        data: props.chartData,
                        options: {
                            ...props.chartOptions,
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'top',
                                    labels: {
                                        usePointStyle: true
                                    }
                                },
                                ...props.chartOptions.plugins
                            }
                        }
                    });
                }
                else {
                    console.error('Failed to get 2D context from canvas!');
                }
            }
            else {
                console.error('Canvas element not found!');
            }
        };
        watch(() => props.dataLoaded, (newValue) => {
            if (newValue) {
                initializeChart();
            }
        });
        return {
            chartCanvas,
            chartInstance
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({ ref: ("chartCanvas"), });
    // @ts-ignore
    (__VLS_ctx.chartCanvas);
    // @ts-ignore
    [chartCanvas,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
