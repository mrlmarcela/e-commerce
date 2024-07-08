<template>
      <div class="container">
            <div class="ps-lg-3 ps-xl-0">
                  <div class="row align-items-center pb-3 pb-md-4 mb-md-1 mb-lg-2">
                        <div class="col-md-4 col-xl-6 mb-3 mb-md-0">
                              <h1 class="h2 me-3 mb-0">Pedidos</h1>
                        </div>
                        <div class="col-md-8 col-xl-6">
                        </div>
                  </div>

                  <div>
                        <table class="table align-middle fs-sm table-hover">
                              <thead>
                                    <tr>
                                          <th scope="col" class="py-3 ps-0">
                                                <button type="button" class="btn orders-sort fw-bold text-body p-0"
                                                      @click="sortBy('id')">Ordem
                                                      <i v-if="state.sortKey === 'id'"
                                                            :class="['bi bi-sort-' + (state.sortDirection === 'asc' ? 'up' : 'down')]"
                                                            class="fs-lg align-middle ms-1"></i>
                                                </button>
                                          </th>
                                          <th scope="col" class="py-3 d-none d-md-table-cell">
                                                <button type="button" class="btn orders-sort fw-bold text-body p-0"
                                                      @click="sortBy('date')">Data
                                                      <i v-if="state.sortKey === 'date'"
                                                            :class="['bi bi-sort-' + (state.sortDirection === 'asc' ? 'up' : 'down')]"
                                                            class="fs-lg align-middle ms-1"></i>
                                                </button>
                                          </th>
                                          <th scope="col" class="py-3 d-none d-md-table-cell">
                                                <button type="button" class="btn orders-sort fw-bold text-body p-0"
                                                      @click="sortBy('status')">Status
                                                      <i v-if="state.sortKey === 'status'"
                                                            :class="['bi bi-sort-' + (state.sortDirection === 'asc' ? 'up' : 'down')]"
                                                            class="fs-lg align-middle ms-1"></i>
                                                </button>
                                          </th>
                                          <th scope="col" class="py-3 d-none d-md-table-cell">
                                                <button type="button" class="btn orders-sort fw-bold text-body p-0"
                                                      @click="sortBy('total')">Total
                                                      <i v-if="state.sortKey === 'total'"
                                                            :class="['bi bi-sort-' + (state.sortDirection === 'asc' ? 'up' : 'down')]"
                                                            class="fs-lg align-middle ms-1"></i>
                                                </button>
                                          </th>
                                          <th scope="col"
                                                class="py-3 ps-0 d-flex align-items-center justify-content-end pe-0">
                                                <button type="button" class="btn orders-sort fw-bold text-body p-0"
                                                      @click="sortBy('deliveryDate')">Data de entrega / Estimativa
                                                      <i v-if="state.sortKey === 'deliveryDate'"
                                                            :class="['bi bi-sort-' + (state.sortDirection === 'asc' ? 'up' : 'down')]"
                                                            class="fs-lg align-middle ms-1"></i>
                                                </button>
                                          </th>
                                    </tr>
                              </thead>
                              <tbody class="text-body-emphasis">
                                    <tr v-for="order in filteredOrders" :key="order.id">
                                          <td class="fw-medium pt-2 pb-3 py-md-2 ps-0">
                                                {{ order.id }}
                                                <ul class="list-unstyled fw-bold text-body m-0 d-md-none">
                                                      <li>{{ formatDate(order.date) }}</li>
                                                      <li class="d-flex align-items-center">
                                                            {{ order.status }}
                                                      </li>
                                                      <li class="fw-medium text-body-emphasis">{{
                                                            formatCurrency(order.total) }}</li>
                                                </ul>
                                          </td>
                                          <td class="fw-medium py-3 d-none d-md-table-cell">{{ formatDate(order.date) }}
                                          </td>
                                          <td class="fw-medium py-3 d-none d-md-table-cell">{{ order.status }}</td>
                                          <td class="fw-medium py-3 d-none d-md-table-cell">{{
                                                formatCurrency(order.total) }}</td>
                                          <td class="py-3 pe-0">
                                                <span
                                                      class="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                                                      <ul class="list-unstyled m-0">
                                                            <li>{{ formatDate(order.deliveryDate) }}</li>
                                                      </ul>
                                                </span>
                                          </td>
                                    </tr>
                              </tbody>
                        </table>
                  </div>

                  <nav class="pt-3 pb-2 pb-sm-0 mt-2 mt-md-3" aria-label="Page navigation example">
                        <ul class="pagination">
                              <li class="page-item" v-for="page in totalPages" :key="page">
                                    <a class="page-link" @click.prevent="setCurrentPage(page)"
                                          :class="{ 'active': currentPage === page }">{{ page }}</a>
                              </li>
                        </ul>
                  </nav>
            </div>
      </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from 'vue';

interface Order {
      id: string;
      date: string;
      status: string;
      total: number;
      deliveryDate: string;
}

export default defineComponent({
      name: 'Orders',
      setup() {
            const state = reactive({
                  orders: [] as Order[],
                  currentPage: 1,
                  pageSize: 10,
                  sortKey: 'date' as keyof Order,
                  sortDirection: 'asc' as 'asc' | 'desc',
            });

            const getOrders = async () => {
                  try {
                        const request = await fetch('http://localhost:3000/orders');
                        const data = await request.json();

                        state.orders = data || [];
                  } catch (error) {
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
                              } else {
                                    return valueA < valueB ? 1 : -1;
                              }
                        });
                  }

                  return sortedOrders.slice(start, end);
            });

            const setCurrentPage = (page: number) => {
                  state.currentPage = page;
            };

            const sortBy = (key: keyof Order) => {
                  if (state.sortKey === key) {
                        state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
                  } else {
                        state.sortKey = key;
                        state.sortDirection = 'asc';
                  }
            };

            const formatDate = (date?: string): string => {
                  if (!date) return '';

                  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                  const formattedDate = new Date(date).toLocaleDateString('pt-BR', options);
                  return formattedDate;
            };

            const formatCurrency = (amount: number): string => {
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
</script>