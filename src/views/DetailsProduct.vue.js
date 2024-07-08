import FormRequest from '../components/FormRequest.vue';
export default (await import('vue')).defineComponent({
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
                totalPrice: parseFloat(totalPrice.toFixed(2)),
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
                }
                else {
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("container my-3 my-md-4") }, "aria-label": ("breadcrumb"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({ ...{ class: ("breadcrumb") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("breadcrumb-item") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), }));
    const __VLS_2 = __VLS_1({ to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/"), }));
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("breadcrumb-item") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/"), }));
    const __VLS_8 = __VLS_7({ to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ to: ("/"), }));
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("breadcrumb-item active") }, "aria-current": ("page"), });
    (__VLS_ctx.product.name);
    // @ts-ignore
    [product,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-6 pb-4 pb-md-0 mb-2 mb-sm-3 mb-md-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("position-relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("badge text-bg-danger position-absolute top-0 start-0 z-2 mt-3 mt-sm-4 ms-3 ms-sm-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("button"), ...{ class: ("btn btn-icon btn-secondary animate-pulse fs-lg bg-transparent border-0 position-absolute top-0 end-0 z-2 mt-2 mt-sm-3 me-2 me-sm-3") }, "data-bs-toggle": ("tooltip"), "data-bs-placement": ("top"), "data-bs-custom-class": ("tooltip-sm"), "data-bs-title": ("Add to Wishlist"), "aria-label": ("Add to Wishlist"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-heart animate-target") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden mb-3 mb-sm-4 mb-md-3 mb-lg-4") }, href: ("https://cea.vtexassets.com/arquivos/ids/58638951-1600-auto?v=638512292849370000&width=1600&height=auto&aspect=true"), "data-glightbox": (""), "data-gallery": ("product-gallery"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ratio hover-effect-target bg-body-tertiary rounded") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("https://cea.vtexassets.com/arquivos/ids/58638951-1600-auto?v=638512292849370000&width=1600&height=auto&aspect=true"), alt: ("Image"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("collapse d-md-block") }, id: ("morePictures"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row row-cols-2 g-3 g-sm-4 g-md-3 g-lg-4 pb-3 pb-sm-4 pb-md-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden") }, href: ("https://cea.vtexassets.com/arquivos/ids/58638953-1600-auto?v=638512292855300000&width=1600&height=auto&aspect=true"), "data-glightbox": (""), "data-gallery": ("product-gallery"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ratio hover-effect-target bg-body-tertiary rounded") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("https://cea.vtexassets.com/arquivos/ids/58638953-1600-auto?v=638512292855300000&width=1600&height=auto&aspect=true"), alt: ("Image"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden") }, href: ("https://cea.vtexassets.com/arquivos/ids/58638952-1600-auto?v=638512292852930000&width=1600&height=auto&aspect=true"), "data-glightbox": (""), "data-gallery": ("product-gallery"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ratio hover-effect-target bg-body-tertiary rounded") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("https://cea.vtexassets.com/arquivos/ids/58638952-1600-auto?v=638512292852930000&width=1600&height=auto&aspect=true"), alt: ("Image"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden") }, href: ("https://cea.vtexassets.com/arquivos/ids/58638954-1600-auto?v=638512292859030000&width=1600&height=auto&aspect=true"), "data-glightbox": (""), "data-gallery": ("product-gallery"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ratio hover-effect-target bg-body-tertiary rounded") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("https://cea.vtexassets.com/arquivos/ids/58638954-1600-auto?v=638512292859030000&width=1600&height=auto&aspect=true"), alt: ("Image"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden") }, href: ("https://cea.vtexassets.com/arquivos/ids/58638955-1600-auto?v=638512292862330000&width=1600&height=auto&aspect=true"), "data-glightbox": (""), "data-gallery": ("product-gallery"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ratio hover-effect-target bg-body-tertiary rounded") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("https://cea.vtexassets.com/arquivos/ids/58638955-1600-auto?v=638512292862330000&width=1600&height=auto&aspect=true"), alt: ("Image"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("button"), ...{ class: ("btn btn-lg btn-outline-secondary w-100 collapsed d-md-none") }, "data-bs-toggle": ("collapse"), "data-bs-target": ("#morePictures"), "data-label-collapsed": ("Show more pictures"), "data-label-expanded": ("Show less pictures"), "aria-expanded": ("false"), "aria-controls": ("morePictures"), "aria-label": ("Show / hide pictures"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("collapse-toggle-icon ci-chevron-down fs-lg ms-2 me-n2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ps-md-4 ps-xl-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-none d-md-flex align-items-center gap-2 text-decoration-none mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex gap-1 fs-sm") }, });
    if (__VLS_ctx.product && __VLS_ctx.product.reviews) {
        for (const [_, index] of __VLS_getVForSourceType((Math.floor(__VLS_ctx.product.reviews.averageStars)))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-star-fill text-warning") }, });
            // @ts-ignore
            [product, product, product,];
        }
        if (__VLS_ctx.product.reviews.averageStars % 1 >= 0.5) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-star-half text-warning") }, });
            // @ts-ignore
            [product,];
        }
        for (const [_, index] of __VLS_getVForSourceType((5 - Math.ceil(__VLS_ctx.product.reviews.averageStars)))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-star text-body-tertiary opacity-75") }, });
            // @ts-ignore
            [product,];
        }
    }
    if (__VLS_ctx.product && __VLS_ctx.product.reviews) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-body-tertiary fs-sm") }, });
        (__VLS_ctx.product.reviews.count);
        // @ts-ignore
        [product, product, product,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("h3") }, });
    (__VLS_ctx.product.name);
    // @ts-ignore
    [product,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("fs-sm mb-0") }, });
    (__VLS_ctx.product.description);
    // @ts-ignore
    [product,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("collapse") }, id: ("moreDescription"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fs-sm pt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("d-inline-block fs-sm fw-medium text-dark-emphasis collapsed mt-1") }, href: ("#moreDescription"), "data-bs-toggle": ("collapse"), "aria-expanded": ("false"), "aria-controls": ("moreDescription"), "data-label-collapsed": ("Leia mais"), "data-label-expanded": ("Mostrar menos"), "aria-label": ("Mostrar / esconder descrição"), });
    if (__VLS_ctx.product.currentPrice !== undefined && __VLS_ctx.product.originalPrice !== undefined) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h4 d-flex align-items-center my-4") }, });
        (__VLS_ctx.product.currentPrice.toFixed(2));
        __VLS_elementAsFunction(__VLS_intrinsicElements.del, __VLS_intrinsicElements.del)({ ...{ class: ("fs-sm fw-normal text-body-tertiary ms-2") }, });
        (__VLS_ctx.product.originalPrice.toFixed(2));
        // @ts-ignore
        [product, product, product, product,];
    }
    // @ts-ignore
    const __VLS_12 = {}
        .FormRequest;
    ({}.FormRequest);
    __VLS_components.FormRequest;
    // @ts-ignore
    [FormRequest,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onSelectColor': {} }, ...{ 'onUpdateQuantity': {} }, ...{ 'onAddToCart': {} }, colors: ((__VLS_ctx.colors)), selectedColorName: ((__VLS_ctx.selectedColor)), sizes: ((__VLS_ctx.sizes)), }));
    const __VLS_14 = __VLS_13({ ...{ 'onSelectColor': {} }, ...{ 'onUpdateQuantity': {} }, ...{ 'onAddToCart': {} }, colors: ((__VLS_ctx.colors)), selectedColorName: ((__VLS_ctx.selectedColor)), sizes: ((__VLS_ctx.sizes)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ ...{ 'onSelectColor': {} }, ...{ 'onUpdateQuantity': {} }, ...{ 'onAddToCart': {} }, colors: ((__VLS_ctx.colors)), selectedColorName: ((__VLS_ctx.selectedColor)), sizes: ((__VLS_ctx.sizes)), }));
    let __VLS_18;
    const __VLS_19 = {
        onSelectColor: (__VLS_ctx.updateSelectedColor)
    };
    const __VLS_20 = {
        onUpdateQuantity: (__VLS_ctx.updateQuantity)
    };
    const __VLS_21 = {
        onAddToCart: (__VLS_ctx.addToCart)
    };
    // @ts-ignore
    [colors, selectedColor, sizes, updateSelectedColor, updateQuantity, addToCart,];
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    let __VLS_15;
    let __VLS_16;
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("list-unstyled gap-3 pb-3 pb-lg-4 mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("d-flex flex-wrap fs-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("d-flex align-items-center fw-medium text-dark-emphasis me-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ci-clock fs-base me-2") }, });
    (__VLS_ctx.getShippingEstimate());
    // @ts-ignore
    [getShippingEstimate,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("d-flex flex-wrap fs-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("d-flex align-items-center fw-medium text-dark-emphasis me-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ci-delivery fs-base me-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("container pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("nav nav-underline flex-nowrap border-bottom") }, role: ("tablist"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item me-md-1") }, role: ("presentation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("button"), ...{ class: ("nav-link active") }, id: ("description-tab"), "data-bs-toggle": ("tab"), "data-bs-target": ("#description-tab-pane"), role: ("tab"), "aria-controls": ("description-tab-pane"), "aria-selected": ("true"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item me-md-1") }, role: ("presentation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("button"), ...{ class: ("nav-link") }, id: ("delivery-tab"), "data-bs-toggle": ("tab"), "data-bs-target": ("#delivery-tab-pane"), role: ("tab"), "aria-controls": ("delivery-tab-pane"), "aria-selected": ("false"), tabindex: ("-1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-content pt-4 mt-sm-1 mt-md-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane fade show active") }, id: ("description-tab-pane"), role: ("tabpanel"), "aria-labelledby": ("description-tab"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-lg-6 fs-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("list-unstyled") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-dark-emphasis fw-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-dark-emphasis fw-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("pt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-lg-6 col-xl-5 offset-xl-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row row-cols-2 g-4 my-0 my-lg-n2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("py-md-1 py-lg-2 pe-sm-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-feather fs-3 text-body-emphasis mb-2 mb-md-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({ ...{ class: ("fs-sm mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("fs-sm mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("py-md-1 py-lg-2 ps-sm-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-check-circle fs-3 text-body-emphasis mb-2 mb-md-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({ ...{ class: ("fs-sm mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("fs-sm mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("py-md-1 py-lg-2 pe-sm-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-truck fs-3 text-body-emphasis mb-2 mb-md-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({ ...{ class: ("fs-sm mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("fs-sm mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("py-md-1 py-lg-2 ps-sm-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-feather2 fs-3 text-body-emphasis mb-2 mb-md-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({ ...{ class: ("fs-sm mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("fs-sm mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane fade fs-sm") }, id: ("delivery-tab-pane"), role: ("tabpanel"), "aria-labelledby": ("delivery-tab"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row row-cols-1 row-cols-md-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col mb-3 mb-md-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pe-lg-2 pe-xl-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("list-unstyled") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-dark-emphasis fw-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-dark-emphasis fw-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    if (__VLS_ctx.pedidoRealizado) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("alert alert-success alert-dismissible fade show") }, role: ("alert"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.fecharAlerta) }, type: ("button"), ...{ class: ("btn-close") }, "aria-label": ("Close"), });
        // @ts-ignore
        [pedidoRealizado, fecharAlerta,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['my-3'];
        __VLS_styleScopedClasses['my-md-4'];
        __VLS_styleScopedClasses['breadcrumb'];
        __VLS_styleScopedClasses['breadcrumb-item'];
        __VLS_styleScopedClasses['breadcrumb-item'];
        __VLS_styleScopedClasses['breadcrumb-item'];
        __VLS_styleScopedClasses['active'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['col-md-6'];
        __VLS_styleScopedClasses['pb-4'];
        __VLS_styleScopedClasses['pb-md-0'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['mb-sm-3'];
        __VLS_styleScopedClasses['mb-md-0'];
        __VLS_styleScopedClasses['position-relative'];
        __VLS_styleScopedClasses['badge'];
        __VLS_styleScopedClasses['text-bg-danger'];
        __VLS_styleScopedClasses['position-absolute'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['start-0'];
        __VLS_styleScopedClasses['z-2'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['mt-sm-4'];
        __VLS_styleScopedClasses['ms-3'];
        __VLS_styleScopedClasses['ms-sm-4'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-icon'];
        __VLS_styleScopedClasses['btn-secondary'];
        __VLS_styleScopedClasses['animate-pulse'];
        __VLS_styleScopedClasses['fs-lg'];
        __VLS_styleScopedClasses['bg-transparent'];
        __VLS_styleScopedClasses['border-0'];
        __VLS_styleScopedClasses['position-absolute'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['end-0'];
        __VLS_styleScopedClasses['z-2'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['mt-sm-3'];
        __VLS_styleScopedClasses['me-2'];
        __VLS_styleScopedClasses['me-sm-3'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-heart'];
        __VLS_styleScopedClasses['animate-target'];
        __VLS_styleScopedClasses['hover-effect-scale'];
        __VLS_styleScopedClasses['hover-effect-opacity'];
        __VLS_styleScopedClasses['position-relative'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['mb-sm-4'];
        __VLS_styleScopedClasses['mb-md-3'];
        __VLS_styleScopedClasses['mb-lg-4'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-zoom-in'];
        __VLS_styleScopedClasses['hover-effect-target'];
        __VLS_styleScopedClasses['fs-3'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['position-absolute'];
        __VLS_styleScopedClasses['top-50'];
        __VLS_styleScopedClasses['start-50'];
        __VLS_styleScopedClasses['translate-middle'];
        __VLS_styleScopedClasses['opacity-0'];
        __VLS_styleScopedClasses['z-2'];
        __VLS_styleScopedClasses['ratio'];
        __VLS_styleScopedClasses['hover-effect-target'];
        __VLS_styleScopedClasses['bg-body-tertiary'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['collapse'];
        __VLS_styleScopedClasses['d-md-block'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['row-cols-2'];
        __VLS_styleScopedClasses['g-3'];
        __VLS_styleScopedClasses['g-sm-4'];
        __VLS_styleScopedClasses['g-md-3'];
        __VLS_styleScopedClasses['g-lg-4'];
        __VLS_styleScopedClasses['pb-3'];
        __VLS_styleScopedClasses['pb-sm-4'];
        __VLS_styleScopedClasses['pb-md-0'];
        __VLS_styleScopedClasses['col'];
        __VLS_styleScopedClasses['hover-effect-scale'];
        __VLS_styleScopedClasses['hover-effect-opacity'];
        __VLS_styleScopedClasses['position-relative'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['ci-zoom-in'];
        __VLS_styleScopedClasses['hover-effect-target'];
        __VLS_styleScopedClasses['fs-3'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['position-absolute'];
        __VLS_styleScopedClasses['top-50'];
        __VLS_styleScopedClasses['start-50'];
        __VLS_styleScopedClasses['translate-middle'];
        __VLS_styleScopedClasses['opacity-0'];
        __VLS_styleScopedClasses['z-2'];
        __VLS_styleScopedClasses['ratio'];
        __VLS_styleScopedClasses['hover-effect-target'];
        __VLS_styleScopedClasses['bg-body-tertiary'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['col'];
        __VLS_styleScopedClasses['hover-effect-scale'];
        __VLS_styleScopedClasses['hover-effect-opacity'];
        __VLS_styleScopedClasses['position-relative'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['ci-zoom-in'];
        __VLS_styleScopedClasses['hover-effect-target'];
        __VLS_styleScopedClasses['fs-3'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['position-absolute'];
        __VLS_styleScopedClasses['top-50'];
        __VLS_styleScopedClasses['start-50'];
        __VLS_styleScopedClasses['translate-middle'];
        __VLS_styleScopedClasses['opacity-0'];
        __VLS_styleScopedClasses['z-2'];
        __VLS_styleScopedClasses['ratio'];
        __VLS_styleScopedClasses['hover-effect-target'];
        __VLS_styleScopedClasses['bg-body-tertiary'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['col'];
        __VLS_styleScopedClasses['hover-effect-scale'];
        __VLS_styleScopedClasses['hover-effect-opacity'];
        __VLS_styleScopedClasses['position-relative'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['ci-zoom-in'];
        __VLS_styleScopedClasses['hover-effect-target'];
        __VLS_styleScopedClasses['fs-3'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['position-absolute'];
        __VLS_styleScopedClasses['top-50'];
        __VLS_styleScopedClasses['start-50'];
        __VLS_styleScopedClasses['translate-middle'];
        __VLS_styleScopedClasses['opacity-0'];
        __VLS_styleScopedClasses['z-2'];
        __VLS_styleScopedClasses['ratio'];
        __VLS_styleScopedClasses['hover-effect-target'];
        __VLS_styleScopedClasses['bg-body-tertiary'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['col'];
        __VLS_styleScopedClasses['hover-effect-scale'];
        __VLS_styleScopedClasses['hover-effect-opacity'];
        __VLS_styleScopedClasses['position-relative'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['ci-zoom-in'];
        __VLS_styleScopedClasses['hover-effect-target'];
        __VLS_styleScopedClasses['fs-3'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['position-absolute'];
        __VLS_styleScopedClasses['top-50'];
        __VLS_styleScopedClasses['start-50'];
        __VLS_styleScopedClasses['translate-middle'];
        __VLS_styleScopedClasses['opacity-0'];
        __VLS_styleScopedClasses['z-2'];
        __VLS_styleScopedClasses['ratio'];
        __VLS_styleScopedClasses['hover-effect-target'];
        __VLS_styleScopedClasses['bg-body-tertiary'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-lg'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['w-100'];
        __VLS_styleScopedClasses['collapsed'];
        __VLS_styleScopedClasses['d-md-none'];
        __VLS_styleScopedClasses['collapse-toggle-icon'];
        __VLS_styleScopedClasses['ci-chevron-down'];
        __VLS_styleScopedClasses['fs-lg'];
        __VLS_styleScopedClasses['ms-2'];
        __VLS_styleScopedClasses['me-n2'];
        __VLS_styleScopedClasses['col-md-6'];
        __VLS_styleScopedClasses['ps-md-4'];
        __VLS_styleScopedClasses['ps-xl-5'];
        __VLS_styleScopedClasses['d-none'];
        __VLS_styleScopedClasses['d-md-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['text-decoration-none'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-star-fill'];
        __VLS_styleScopedClasses['text-warning'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-star-half'];
        __VLS_styleScopedClasses['text-warning'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-star'];
        __VLS_styleScopedClasses['text-body-tertiary'];
        __VLS_styleScopedClasses['opacity-75'];
        __VLS_styleScopedClasses['text-body-tertiary'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['h3'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['collapse'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['pt-3'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['d-inline-block'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['fw-medium'];
        __VLS_styleScopedClasses['text-dark-emphasis'];
        __VLS_styleScopedClasses['collapsed'];
        __VLS_styleScopedClasses['mt-1'];
        __VLS_styleScopedClasses['h4'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['fw-normal'];
        __VLS_styleScopedClasses['text-body-tertiary'];
        __VLS_styleScopedClasses['ms-2'];
        __VLS_styleScopedClasses['list-unstyled'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['pb-3'];
        __VLS_styleScopedClasses['pb-lg-4'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['fw-medium'];
        __VLS_styleScopedClasses['text-dark-emphasis'];
        __VLS_styleScopedClasses['me-2'];
        __VLS_styleScopedClasses['ci-clock'];
        __VLS_styleScopedClasses['fs-base'];
        __VLS_styleScopedClasses['me-2'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['fw-medium'];
        __VLS_styleScopedClasses['text-dark-emphasis'];
        __VLS_styleScopedClasses['me-2'];
        __VLS_styleScopedClasses['ci-delivery'];
        __VLS_styleScopedClasses['fs-base'];
        __VLS_styleScopedClasses['me-2'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['pt-5'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['mt-sm-3'];
        __VLS_styleScopedClasses['mt-lg-4'];
        __VLS_styleScopedClasses['mt-xl-5'];
        __VLS_styleScopedClasses['nav'];
        __VLS_styleScopedClasses['nav-underline'];
        __VLS_styleScopedClasses['flex-nowrap'];
        __VLS_styleScopedClasses['border-bottom'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['me-md-1'];
        __VLS_styleScopedClasses['nav-link'];
        __VLS_styleScopedClasses['active'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['me-md-1'];
        __VLS_styleScopedClasses['nav-link'];
        __VLS_styleScopedClasses['tab-content'];
        __VLS_styleScopedClasses['pt-4'];
        __VLS_styleScopedClasses['mt-sm-1'];
        __VLS_styleScopedClasses['mt-md-3'];
        __VLS_styleScopedClasses['tab-pane'];
        __VLS_styleScopedClasses['fade'];
        __VLS_styleScopedClasses['show'];
        __VLS_styleScopedClasses['active'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['col-lg-6'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['list-unstyled'];
        __VLS_styleScopedClasses['text-dark-emphasis'];
        __VLS_styleScopedClasses['fw-semibold'];
        __VLS_styleScopedClasses['text-dark-emphasis'];
        __VLS_styleScopedClasses['fw-semibold'];
        __VLS_styleScopedClasses['pt-3'];
        __VLS_styleScopedClasses['col-lg-6'];
        __VLS_styleScopedClasses['col-xl-5'];
        __VLS_styleScopedClasses['offset-xl-1'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['row-cols-2'];
        __VLS_styleScopedClasses['g-4'];
        __VLS_styleScopedClasses['my-0'];
        __VLS_styleScopedClasses['my-lg-n2'];
        __VLS_styleScopedClasses['col'];
        __VLS_styleScopedClasses['py-md-1'];
        __VLS_styleScopedClasses['py-lg-2'];
        __VLS_styleScopedClasses['pe-sm-2'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-feather'];
        __VLS_styleScopedClasses['fs-3'];
        __VLS_styleScopedClasses['text-body-emphasis'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['mb-md-3'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['col'];
        __VLS_styleScopedClasses['py-md-1'];
        __VLS_styleScopedClasses['py-lg-2'];
        __VLS_styleScopedClasses['ps-sm-2'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-check-circle'];
        __VLS_styleScopedClasses['fs-3'];
        __VLS_styleScopedClasses['text-body-emphasis'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['mb-md-3'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['col'];
        __VLS_styleScopedClasses['py-md-1'];
        __VLS_styleScopedClasses['py-lg-2'];
        __VLS_styleScopedClasses['pe-sm-2'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-truck'];
        __VLS_styleScopedClasses['fs-3'];
        __VLS_styleScopedClasses['text-body-emphasis'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['mb-md-3'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['col'];
        __VLS_styleScopedClasses['py-md-1'];
        __VLS_styleScopedClasses['py-lg-2'];
        __VLS_styleScopedClasses['ps-sm-2'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-feather2'];
        __VLS_styleScopedClasses['fs-3'];
        __VLS_styleScopedClasses['text-body-emphasis'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['mb-md-3'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['tab-pane'];
        __VLS_styleScopedClasses['fade'];
        __VLS_styleScopedClasses['fs-sm'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['row-cols-1'];
        __VLS_styleScopedClasses['row-cols-md-2'];
        __VLS_styleScopedClasses['col'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['mb-md-0'];
        __VLS_styleScopedClasses['pe-lg-2'];
        __VLS_styleScopedClasses['pe-xl-3'];
        __VLS_styleScopedClasses['list-unstyled'];
        __VLS_styleScopedClasses['text-dark-emphasis'];
        __VLS_styleScopedClasses['fw-semibold'];
        __VLS_styleScopedClasses['text-dark-emphasis'];
        __VLS_styleScopedClasses['fw-semibold'];
        __VLS_styleScopedClasses['alert'];
        __VLS_styleScopedClasses['alert-success'];
        __VLS_styleScopedClasses['alert-dismissible'];
        __VLS_styleScopedClasses['fade'];
        __VLS_styleScopedClasses['show'];
        __VLS_styleScopedClasses['btn-close'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        FormRequest
    };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
