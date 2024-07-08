<template>
      <div class="container mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="flex flex-col md:flex-row">
                  <div class="w-full md:w-1/2 p-6 flex justify-center items-center">
                        <img src="https://images.tcdn.com.br/img/img_prod/1171125/conjuntoshort_e_saia_e_tomara_que_caia_7047_2599_variacao_30835_1_a75927eac30534c0186504122dde66b4.jpg"
                              alt="V06 Vestido" class="max-w-full h-auto rounded-lg">
                  </div>

                  <div class="w-full md:w-1/2 p-6 flex flex-col justify-between">
                        <div>
                              <h1 class="text-2xl font-semibold text-gray-800 mb-2">V06 Vestido</h1>
                              <span class="text-sm text-gray-600">Ref: 01507</span>
                              <div class="mt-4">
                                    <div class="flex items-center gap-2 mb-2">
                                          <span class="text-yellow-500">⭐⭐</span>
                                          <a href="#reviews" class="text-blue-500">(20 avaliações)</a>
                                    </div>
                                    <div class="mb-2">
                                          <h2 class="text-lg font-semibold text-gray-800">Escolha a Cor:</h2>
                                          <div class="flex gap-2">
                                                <button class="color-button bg-white" title="Branco"
                                                      @click="selectColor('branco')"></button>
                                                <button class="color-button bg-black" title="Preto"
                                                      @click="selectColor('preto')"></button>
                                                <button class="color-button bg-red-500" title="Vermelho"
                                                      @click="selectColor('vermelho')"></button>
                                          </div>
                                    </div>
                                    <div>
                                          <h2 class="text-lg font-semibold text-gray-800">Escolha o Tamanho e
                                                Quantidade:</h2>
                                          <div class="grid grid-cols-2 gap-4">
                                                <div v-for="(size, index) in sizes" :key="index"
                                                      class="flex items-center justify-between">
                                                      <div class="font-semibold">{{ size.label }}</div>
                                                      <div class="flex items-center gap-2">
                                                            <button @click="updateQuantity(index, -1)"
                                                                  class="quantity-button">-</button>
                                                            <input type="text" v-model="size.quantity"
                                                                  class="w-12 text-center border border-gray-300 rounded-md"
                                                                  readonly>
                                                            <button @click="updateQuantity(index, 1)"
                                                                  class="quantity-button">+</button>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div class="mt-4">
                              <button @click="addToCart()" class="add-to-cart btn">Adicionar ao carrinho</button>
                              <button @click="notifyMe()" class="notify-me btn">Avisar-me quando disponível</button>
                              <div class="product-description mt-4">
                                    <h3 class="text-lg font-semibold text-gray-800">Descrição</h3>
                                    <p>V06 vestido</p>
                              </div>
                              <div class="product-composition mt-4">
                                    <h3 class="text-lg font-semibold text-gray-800">Composição</h3>
                                    <p>V06 vestido</p>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script>
export default {
      name: 'DetailsProduct',
      data() {
            return {
                  sizes: [
                        { label: 'P', quantity: 0 },
                        { label: 'M', quantity: 0 },
                        { label: 'G', quantity: 0 },
                        { label: 'GG', quantity: 0 },
                        { label: 'EG', quantity: 0 },
                        { label: 'EXG', quantity: 0 }
                  ]
            };
      },
      methods: {
            updateQuantity(index, increment) {
                  const newSize = this.sizes[index].quantity + increment;
                  if (newSize >= 0) {
                        this.sizes[index].quantity = newSize;
                  }
            },
            addToCart() {
                  alert("Produto adicionado ao carrinho!");
            },
            notifyMe() {
                  alert("Você será notificado quando este produto estiver disponível.");
            },
            selectColor(color) {
                  const allRows = document.querySelectorAll('.size-quantity-row');
                  allRows.forEach(row => {
                        if (row.dataset.color === color) {
                              row.classList.remove('hidden');
                        } else {
                              row.classList.add('hidden');
                        }
                  });
            }
      },
      mounted() {
            this.selectColor('vermelho');
      }
};
</script>