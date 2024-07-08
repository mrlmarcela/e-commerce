<template>
      <div>
            <div class="mb-4">
                  <label class="form-label fw-semibold pb-1 mb-2">Cor: <span class="text-body fw-normal">{{
                        selectedColorName }}</span></label>
                  <div class="d-flex flex-wrap">
                        <div v-for="(color, index) in colors" :key="index" @click="selectColor(color)" class="p-2"
                              style="cursor:pointer;">
                              <div
                                    :style="{ backgroundColor: color.code, borderRadius: '50%', width: '40px', height: '40px', border: selectedColorName === color.name ? '2px solid black' : '1px solid #ccc' }">
                              </div>
                        </div>
                  </div>
            </div>

            <div>
                  <label class="form-label fw-semibold pb-1 mb-2">Escolha o Tamanho e Quantidade:</label>
                  <div class="row g-4">
                        <div v-for="(size, index) in sizes" :key="index"
                              class="col-5 d-flex align-items-center justify-content-between">
                              <div class="row">
                                    <div class="fw-semibold col-2 d-flex align-items-center">{{ size.label }}</div>
                                    <div class="col-9">
                                          <div class="d-flex align-items-center gap-2">
                                                <button @click="updateQuantity(index, -1)"
                                                      class="btn btn-outline-secondary btn-sm btn-equal-height">-</button>
                                                <input type="text" v-model="size.quantity"
                                                      class="form-control text-center input-sm" readonly>
                                                <button @click="updateQuantity(index, 1)"
                                                      class="btn btn-outline-secondary btn-sm btn-equal-height">+</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>

            <div class="d-flex gap-3 pb-3 pb-lg-4 mb-3 pt-5">
                  <button type="button" class="btn btn-lg btn-dark w-100" :disabled="!isOrderEnabled"
                        @click="addToCart">Realizar pedido</button>
            </div>
      </div>
</template>

<script>
export default {
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
};
</script>