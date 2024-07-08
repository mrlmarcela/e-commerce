<template>
      <div>
            <canvas ref="chartCanvas"></canvas>
      </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue';
import Chart, { ChartOptions, ChartData } from 'chart.js/auto';

export default defineComponent({
      props: {
            chartType: {
                  type: String as PropType<'bar' | 'line' | 'pie'>,
                  required: true
            },
            chartData: {
                  type: Object as PropType<ChartData>,
                  required: true
            },
            chartOptions: {
                  type: Object as PropType<ChartOptions>,
                  default: () => ({})
            },
            dataLoaded: {
                  type: Boolean,
                  required: true
            }
      },
      setup(props) {
            const chartCanvas = ref<HTMLCanvasElement | null>(null);
            let chartInstance: Chart | null = null;

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
                        } else {
                              console.error('Failed to get 2D context from canvas!');
                        }
                  } else {
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
</script>