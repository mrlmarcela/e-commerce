<template>
      <div class="container pb-5">
            <div class="row g-4">
                  <div class="col-12">
                        <div class="row align-items-center pb-3 pb-md-4 mb-md-1 mb-lg-2">
                              <div class="col-md-12 col-xl-6 mb-3 mb-md-0">
                                    <h1 class="h2 me-3 mb-0">Dashboard</h1>
                              </div>
                        </div>
                        <div class="row align-items-center justify-content-between g-4 pe-5 me-1">
                              <div class="col-12 col-md-auto">
                                    <div class="d-flex align-items-center">
                                          <div class="d-flex justify-content-center align-items-center bg-success text-white rounded-circle"
                                                style="width: 40px; height: 40px;">
                                                <i class="bi bi-check" style="font-size: 2rem;"></i>
                                          </div>
                                          <div class="ms-3">
                                                <h5 class="mb-0 fw-bold">{{ completedOrders }} pedidos</h5>
                                                <p class="text-body-secondary mb-0" style="font-size: 14px">Entregues
                                                </p>
                                          </div>
                                    </div>
                              </div>
                              <div class="col-12 col-md-auto">
                                    <div class="d-flex align-items-center">
                                          <div class="d-flex justify-content-center align-items-center bg-warning text-white rounded-circle"
                                                style="width: 40px; height: 40px;">
                                                <i class="bi bi-clock" style="font-size: 1.5rem;"></i>
                                          </div>
                                          <div class="ms-3">
                                                <h5 class="mb-0 fw-bold">{{ processingOrders }} pedidos</h5>
                                                <p class="text-body-secondary mb-0" style="font-size: 14px">Em
                                                      processamento</p>
                                          </div>
                                    </div>
                              </div>
                              <div class="col-12 col-md-auto">
                                    <div class="d-flex align-items-center">
                                          <div class="d-flex justify-content-center align-items-center bg-danger text-white rounded-circle"
                                                style="width: 40px; height: 40px;">
                                                <i class="bi bi-x" style="font-size: 2rem;"></i>
                                          </div>
                                          <div class="ms-3">
                                                <h5 class="mb-0">{{ cancelledOrders }} pedidos</h5>
                                                <p class="text-body-secondary fs-9 mb-0" style="font-size: 14px">
                                                      Cancelados</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="col-12 row">
                        <div class="col-6 row g-3">
                              <div class="col-12">
                                    <div class="card h-100 p-4 pb-0">
                                          <div class="row flex-between-center mb-4 g-3">
                                                <div>
                                                      <h4 class="mb-1">Vendas por mês</h4>
                                                      <p class="text-body-tertiary lh-sm mb-0">Vendas por mês do ano
                                                            atual</p>
                                                </div>
                                          </div>
                                          <div>
                                                <ChartComponent :chartType="'bar'" :chartData="monthlyChartData"
                                                      :chartOptions="chartOptions" :dataLoaded="dataLoaded" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div class="col-6 row g-3">
                              <div class="col-12">
                                    <div class="card h-100 p-4">
                                          <div class="row flex-between-center mb-4 g-3">
                                                <div>
                                                      <h4 class="mb-1">Faturamento por mês</h4>
                                                      <p class="text-body-tertiary lh-sm mb-0">Soma dos pedidos
                                                            entregues e em processamento por mês</p>
                                                </div>
                                          </div>
                                          <div>
                                                <ChartComponent :chartType="'bar'" :chartData="monthlyRevenueChartData"
                                                      :chartOptions="chartOptions" :dataLoaded="dataLoaded" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script lang="ts">
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

                        completedOrders.value = data.filter(order => order.status === 'Entregue').length;
                        processingOrders.value = data.filter(order => order.status === 'Em progresso').length;
                        cancelledOrders.value = data.filter(order => order.status === 'Cancelado').length;

                        const monthlySales = new Array(12).fill(0);
                        const monthlyRevenue = new Array(12).fill(0);

                        data.forEach(order => {
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

                  } catch (error) {
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
</script>