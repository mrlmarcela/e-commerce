<template>
      <nav class="container my-3 my-md-4" aria-label="breadcrumb">
            <ol class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                  <li class="breadcrumb-item"><router-link to="/">Produtos</router-link></li>
                  <li class="breadcrumb-item active" aria-current="page">{{ product.name }}</li>
            </ol>
      </nav>
      <section class="container">
            <div class="row">
                  <div class="col-md-6 pb-4 pb-md-0 mb-2 mb-sm-3 mb-md-0">
                        <div class="position-relative">
                              <span
                                    class="badge text-bg-danger position-absolute top-0 start-0 z-2 mt-3 mt-sm-4 ms-3 ms-sm-4">Oferta</span>
                              <button type="button"
                                    class="btn btn-icon btn-secondary animate-pulse fs-lg bg-transparent border-0 position-absolute top-0 end-0 z-2 mt-2 mt-sm-3 me-2 me-sm-3"
                                    data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="tooltip-sm"
                                    data-bs-title="Add to Wishlist" aria-label="Add to Wishlist">
                                    <i class="bi bi-heart animate-target"></i>
                              </button>
                              <a class="hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden mb-3 mb-sm-4 mb-md-3 mb-lg-4"
                                    href="https://cea.vtexassets.com/arquivos/ids/58638951-1600-auto?v=638512292849370000&width=1600&height=auto&aspect=true"
                                    data-glightbox="" data-gallery="product-gallery">
                                    <i
                                          class="bi bi-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2"></i>
                                    <div class="ratio hover-effect-target bg-body-tertiary rounded"
                                          style="--cz-aspect-ratio: calc(706 / 636 * 100%)">
                                          <img src="https://cea.vtexassets.com/arquivos/ids/58638951-1600-auto?v=638512292849370000&width=1600&height=auto&aspect=true"
                                                alt="Image">
                                    </div>
                              </a>
                        </div>
                        <div class="collapse d-md-block" id="morePictures">
                              <div class="row row-cols-2 g-3 g-sm-4 g-md-3 g-lg-4 pb-3 pb-sm-4 pb-md-0">
                                    <div class="col">
                                          <a class="hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden"
                                                href="https://cea.vtexassets.com/arquivos/ids/58638953-1600-auto?v=638512292855300000&width=1600&height=auto&aspect=true"
                                                data-glightbox="" data-gallery="product-gallery">
                                                <i
                                                      class="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2"></i>
                                                <div class="ratio hover-effect-target bg-body-tertiary rounded"
                                                      style="--cz-aspect-ratio: calc(342 / 306 * 100%)">
                                                      <img src="https://cea.vtexassets.com/arquivos/ids/58638953-1600-auto?v=638512292855300000&width=1600&height=auto&aspect=true"
                                                            alt="Image">
                                                </div>
                                          </a>
                                    </div>
                                    <div class="col">
                                          <a class="hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden"
                                                href="https://cea.vtexassets.com/arquivos/ids/58638952-1600-auto?v=638512292852930000&width=1600&height=auto&aspect=true"
                                                data-glightbox="" data-gallery="product-gallery">
                                                <i
                                                      class="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2"></i>
                                                <div class="ratio hover-effect-target bg-body-tertiary rounded"
                                                      style="--cz-aspect-ratio: calc(342 / 306 * 100%)">
                                                      <img src="https://cea.vtexassets.com/arquivos/ids/58638952-1600-auto?v=638512292852930000&width=1600&height=auto&aspect=true"
                                                            alt="Image">
                                                </div>
                                          </a>
                                    </div>
                                    <div class="col">
                                          <a class="hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden"
                                                href="https://cea.vtexassets.com/arquivos/ids/58638954-1600-auto?v=638512292859030000&width=1600&height=auto&aspect=true"
                                                data-glightbox="" data-gallery="product-gallery">
                                                <i
                                                      class="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2"></i>
                                                <div class="ratio hover-effect-target bg-body-tertiary rounded"
                                                      style="--cz-aspect-ratio: calc(342 / 306 * 100%)">
                                                      <img src="https://cea.vtexassets.com/arquivos/ids/58638954-1600-auto?v=638512292859030000&width=1600&height=auto&aspect=true"
                                                            alt="Image">
                                                </div>
                                          </a>
                                    </div>
                                    <div class="col">
                                          <a class="hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden"
                                                href="https://cea.vtexassets.com/arquivos/ids/58638955-1600-auto?v=638512292862330000&width=1600&height=auto&aspect=true"
                                                data-glightbox="" data-gallery="product-gallery">
                                                <i
                                                      class="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2"></i>
                                                <div class="ratio hover-effect-target bg-body-tertiary rounded"
                                                      style="--cz-aspect-ratio: calc(342 / 306 * 100%)">
                                                      <img src="https://cea.vtexassets.com/arquivos/ids/58638955-1600-auto?v=638512292862330000&width=1600&height=auto&aspect=true"
                                                            alt="Image">
                                                </div>
                                          </a>
                                    </div>
                              </div>
                        </div>
                        <button type="button" class="btn btn-lg btn-outline-secondary w-100 collapsed d-md-none"
                              data-bs-toggle="collapse" data-bs-target="#morePictures"
                              data-label-collapsed="Show more pictures" data-label-expanded="Show less pictures"
                              aria-expanded="false" aria-controls="morePictures" aria-label="Show / hide pictures">
                              <i class="collapse-toggle-icon ci-chevron-down fs-lg ms-2 me-n2"></i>
                        </button>
                  </div>

                  <div class="col-md-6">
                        <div class="ps-md-4 ps-xl-5">
                              <div class="d-none d-md-flex align-items-center gap-2 text-decoration-none mb-3">
                                    <div class="d-flex gap-1 fs-sm">
                                          <template v-if="product && product.reviews">
                                                <template v-for="(_, index) in Math.floor(product.reviews.averageStars)"
                                                      :key="index">
                                                      <i class="bi bi-star-fill text-warning"></i>
                                                </template>

                                                <template v-if="product.reviews.averageStars % 1 >= 0.5">
                                                      <i class="bi bi-star-half text-warning"></i>
                                                </template>

                                                <template
                                                      v-for="(_, index) in 5 - Math.ceil(product.reviews.averageStars)"
                                                      :key="'empty-star-' + index">
                                                      <i class="bi bi-star text-body-tertiary opacity-75"></i>
                                                </template>
                                          </template>
                                    </div>
                                    <span class="text-body-tertiary fs-sm" v-if="product && product.reviews">
                                          {{ product.reviews.count }} avaliações
                                    </span>
                              </div>

                              <h1 class="h3">{{ product.name }}</h1>

                              <p class="fs-sm mb-0">{{ product.description }}</p>
                              <div class="collapse" id="moreDescription">
                                    <div class="fs-sm pt-3">
                                          <p>Este suéter de tricot chenille é a combinação perfeita de estilo e
                                                conforto, ideal para os dias mais frios. Sua textura macia proporciona
                                                uma sensação aconchegante na pele, enquanto a modelagem reta e o
                                                caimento solto garantem liberdade de movimento e um visual despojado. As
                                                tramas espaçadas adicionam um toque de modernidade, tornando a peça
                                                versátil para diversas ocasiões.</p>
                                          <p class="mb-0">Com um design clássico e atemporal, o suéter apresenta um
                                                decote redondo e mangas longas que mantêm você aquecido sem comprometer
                                                o estilo. O acabamento canelado nos punhos e na barra adiciona um
                                                detalhe elegante e refinado, destacando ainda mais a qualidade do
                                                produto. Este suéter é a escolha ideal para quem busca uma peça
                                                versátil, confortável e cheia de charme para compor looks casuais e
                                                sofisticados.
                                          </p>
                                    </div>
                              </div>

                              <a class="d-inline-block fs-sm fw-medium text-dark-emphasis collapsed mt-1"
                                    href="#moreDescription" data-bs-toggle="collapse" aria-expanded="false"
                                    aria-controls="moreDescription" data-label-collapsed="Leia mais"
                                    data-label-expanded="Mostrar menos" aria-label="Mostrar / esconder descrição"></a>

                              <div class="h4 d-flex align-items-center my-4"
                                    v-if="product.currentPrice !== undefined && product.originalPrice !== undefined">
                                    R$ {{ product.currentPrice.toFixed(2) }}
                                    <del class="fs-sm fw-normal text-body-tertiary ms-2">R$ {{
                                          product.originalPrice.toFixed(2) }}</del>
                              </div>

                              <FormRequest :colors="colors" :selectedColorName="selectedColor" :sizes="sizes"
                                    @select-color="updateSelectedColor" @update-quantity="updateQuantity"
                                    @add-to-cart="addToCart" />

                              <ul class="list-unstyled gap-3 pb-3 pb-lg-4 mb-3">
                                    <li class="d-flex flex-wrap fs-sm">
                                          <span class="d-flex align-items-center fw-medium text-dark-emphasis me-2">
                                                <i class="ci-clock fs-base me-2"></i>
                                                Estimativa de envio:
                                          </span>
                                          {{ getShippingEstimate() }}
                                    </li>
                                    <li class="d-flex flex-wrap fs-sm">
                                          <span class="d-flex align-items-center fw-medium text-dark-emphasis me-2">
                                                <i class="ci-delivery fs-base me-2"></i>
                                                Fretes e devoluções:
                                          </span>
                                          Em todos os pedidos acima de R$750.00
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      </section>
      <section class="container pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5">
            <ul class="nav nav-underline flex-nowrap border-bottom" role="tablist">
                  <li class="nav-item me-md-1" role="presentation">
                        <button type="button" class="nav-link active" id="description-tab" data-bs-toggle="tab"
                              data-bs-target="#description-tab-pane" role="tab" aria-controls="description-tab-pane"
                              aria-selected="true">
                              Descrição
                        </button>
                  </li>
                  <li class="nav-item me-md-1" role="presentation">
                        <button type="button" class="nav-link" id="delivery-tab" data-bs-toggle="tab"
                              data-bs-target="#delivery-tab-pane" role="tab" aria-controls="delivery-tab-pane"
                              aria-selected="false" tabindex="-1">
                              Entrega
                        </button>
                  </li>
            </ul>

            <div class="tab-content pt-4 mt-sm-1 mt-md-3">

                  <div class="tab-pane fade show active" id="description-tab-pane" role="tabpanel"
                        aria-labelledby="description-tab">
                        <div class="row">
                              <div class="col-lg-6 fs-sm">
                                    <ul class="list-unstyled">
                                          <li>Altura da modelo: <span class="text-dark-emphasis fw-semibold">176
                                                      cm</span>
                                          </li>
                                          <li>A modelo está vestindo tamanho: <span
                                                      class="text-dark-emphasis fw-semibold">S/36</span></li>
                                    </ul>
                                    <p>Este suéter de tricot chenille é a combinação perfeita de estilo e conforto,
                                          ideal para os dias mais frios. Sua textura macia proporciona uma sensação
                                          aconchegante na pele, enquanto a modelagem reta e o caimento solto garantem
                                          liberdade de movimento e um visual despojado. As tramas espaçadas adicionam um
                                          toque de modernidade, tornando a peça versátil para diversas ocasiões.
                                    </p>
                                    <p class="pt-3">Com um design clássico e atemporal, o suéter apresenta um decote
                                          redondo e mangas
                                          longas que mantêm você aquecido sem comprometer o estilo. O acabamento
                                          canelado nos punhos e na barra adiciona um detalhe elegante e refinado,
                                          destacando ainda mais a qualidade do produto. Este suéter é a escolha ideal
                                          para quem busca uma peça versátil, confortável e cheia de charme para compor
                                          looks casuais e sofisticados.
                                    </p>
                              </div>
                              <div class="col-lg-6 col-xl-5 offset-xl-1">
                                    <div class="row row-cols-2 g-4 my-0 my-lg-n2">
                                          <div class="col">
                                                <div class="py-md-1 py-lg-2 pe-sm-2">
                                                      <i class="bi bi-feather fs-3 text-body-emphasis mb-2 mb-md-3"></i>
                                                      <h6 class="fs-sm mb-2">Leve</h6>
                                                      <p class="fs-sm mb-0">Projetado com tecidos europeus leves,
                                                            perfeito para a vida em movimento.</p>
                                                </div>
                                          </div>
                                          <div class="col">
                                                <div class="py-md-1 py-lg-2 ps-sm-2">
                                                      <i
                                                            class="bi bi-check-circle fs-3 text-body-emphasis mb-2 mb-md-3"></i>
                                                      <h6 class="fs-sm mb-2">Ajuste perfeito</h6>
                                                      <p class="fs-sm mb-0">Nossas roupas são projetadas para se ajustar
                                                            a qualquer tipo de corpo, encontre seu visual perfeito!</p>
                                                </div>
                                          </div>
                                          <div class="col">
                                                <div class="py-md-1 py-lg-2 pe-sm-2">
                                                      <i class="bi bi-truck fs-3 text-body-emphasis mb-2 mb-md-3"></i>
                                                      <h6 class="fs-sm mb-2">Entrega grátis</h6>
                                                      <p class="fs-sm mb-0">Receba entrega gratuita para
                                                            todos os pedidos acima de R$ 750.</p>
                                                </div>
                                          </div>
                                          <div class="col">
                                                <div class="py-md-1 py-lg-2 ps-sm-2">
                                                      <i
                                                            class="bi bi-feather2 fs-3 text-body-emphasis mb-2 mb-md-3"></i>
                                                      <h6 class="fs-sm mb-2">Sustentabilidade</h6>
                                                      <p class="fs-sm mb-0">Temos orgulho de oferecer garantia vitalícia
                                                            em todos os produtos.</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <div class="tab-pane fade fs-sm" id="delivery-tab-pane" role="tabpanel"
                        aria-labelledby="delivery-tab">
                        <div class="row row-cols-1 row-cols-md-2">
                              <div class="col mb-3 mb-md-0">
                                    <div class="pe-lg-2 pe-xl-3">
                                          <h6>Entrega</h6>
                                          <p>Nós nos esforçamos para entregar seu pedido o mais rápido possível. Nossos
                                                prazos estimados de entrega são os seguintes:</p>
                                          <ul class="list-unstyled">
                                                <li>Entrega padrão: <span class="text-dark-emphasis fw-semibold">dentro
                                                            de 3 a 7 dias úteis</span></li>
                                                <li>Entrega expressa: <span
                                                            class="text-dark-emphasis fw-semibold">dentro de 1
                                                            a 3 dias
                                                            úteis</span></li>
                                          </ul>
                                          <p>Observe que os prazos de entrega podem variar dependendo da sua localização
                                                e de quaisquer promoções ou feriados em andamento. Você pode rastrear
                                                seu pedido usando o número de rastreamento fornecido assim que seu
                                                pacote for despachado.</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </section>
      <div v-if="pedidoRealizado" class="alert alert-success alert-dismissible fade show" role="alert">
            Pedido realizado com sucesso! Você pode acompanhar na aba de pedidos.
            <button type="button" class="btn-close" @click="fecharAlerta" aria-label="Close"></button>
      </div>
</template>
<script>

import FormRequest from '../components/FormRequest.vue';

export default {
      components: {
            FormRequest
      },
      data() {
            return {
                  pedidoRealizado: false,
                  product: {},
                  selectedColor: 'Verde',
                  colors: [
                        { name: 'Verde', code: '#1C3A2B' },
                        { name: 'Branco', code: '#ffffff' },
                  ],
                  sizes: [
                        { label: 'P', quantity: 0 },
                        { label: 'M', quantity: 0 },
                        { label: 'G', quantity: 0 },
                        { label: 'GG', quantity: 0 },
                        { label: 'EG', quantity: 0 },
                        { label: 'EXG', quantity: 0 }
                  ]
            };
      }, mounted() {
            this.getProductDetails();
      },
      methods: {
            getProductDetails() {
                  const productId = '1';
                  fetch(`http://localhost:3000/products/${productId}`)
                        .then(response => response.json())
                        .then(data => {
                              this.product = data;
                        })
                        .catch(error => {
                              console.error('Erro ao buscar o produto:', error);
                        });
            },

            selectColor(color) {
                  this.selectedColorName = color.name;
            },

            updateSelectedColor(colorName) {
                  this.selectedColor = colorName;
            },

            updateQuantity(index, change) {
                  this.sizes[index].quantity += change;
            },

            getShippingEstimate() {
                  let currentDate = new Date();

                  let workingDaysToAdd = 7;
                  let deliveryDate = this.addWorkingDays(currentDate, workingDaysToAdd);

                  let formattedDeliveryDate = `${deliveryDate.getDate()} - ${deliveryDate.getDate() + 6} ${this.getMonthName(deliveryDate.getMonth())}, ${deliveryDate.getFullYear()}`;

                  return formattedDeliveryDate;
            },

            addWorkingDays(date, daysToAdd) {
                  let count = 0;
                  while (count < daysToAdd) {
                        date.setDate(date.getDate() + 1);

                        if (date.getDay() !== 0 && date.getDay() !== 6) {
                              count++;
                        }
                  }
                  return date;
            },

            getMonthName(monthIndex) {
                  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                  return monthNames[monthIndex];
            },

            addToCart() {
                  const today = new Date();
                  const id = `${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getDate().toString().padStart(2, '0')}-${this.getNextOrderId()}`;

                  let totalItems = 0;
                  let totalPrice = 0;
                  this.sizes.forEach(size => {
                        totalItems += size.quantity;
                        totalPrice += size.quantity * this.product.currentPrice;
                  });

                  const deliveryDate = this.getShippingEstimate();

                  const data = {
                        id: id,
                        date: today.toISOString().split('T')[0],
                        status: "Em progresso",
                        totalItems: totalItems,
                        totalPrice: totalPrice.toFixed(2),
                        deliveryDate: deliveryDate
                  };

                  fetch('http://localhost:3000/orders', {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                  })
                        .then(response => {
                              if (response.ok) {
                                    alert('Pedido realizado! Você será redirecionado para a aba pedidos em 3 segundos.');
                                    setTimeout(() => {
                                          this.$router.push('/requests');
                                    }, 3000);
                              } else {
                                    alert('Houve um erro e não conseguimos processar sua solicitação.');
                              }
                        })
                        .catch(error => {
                              console.error('Erro ao adicionar ao carrinho:', error);
                        });
            },

            getNextOrderId() {
                  const randomId = Math.floor(Math.random() * 1000) + 1;
                  return randomId.toString();
            },

            getShippingEstimate() {
                  let currentDate = new Date();
                  let workingDaysToAdd = 7;
                  let deliveryDate = this.addWorkingDays(currentDate, workingDaysToAdd);
                  return deliveryDate.toISOString().split('T')[0];
            },

            addWorkingDays(date, daysToAdd) {
                  let count = 0;
                  while (count < daysToAdd) {
                        date.setDate(date.getDate() + 1);
                        if (date.getDay() !== 0 && date.getDay() !== 6) {
                              count++;
                        }
                  }

                  return date;
            }
      }
};
</script>