<template>
      <header class="navbar navbar-expand-lg navbar-sticky bg-body d-block z-fixed p-0">
            <div class="container py-2 py-lg-3">
                  <div class="d-flex align-items-center gap-3">
                        <img src="../assets/img/logo.jpeg" class="d-inline-block align-top mx-3" width="40" height="40"
                              alt="Logo Smart sistemas">
                  </div>
                  <a class="navbar-brand fs-2 py-0 m-0 me-auto me-sm-n5 text-center" href="#">Smart Sistemas</a>

                  <div class="d-flex align-items-center">
                        <button type="button" class="navbar-toggler d-none navbar-stuck-show me-3"
                              data-bs-toggle="collapse" data-bs-target="#stuckNav" aria-controls="stuckNav"
                              aria-expanded="false" aria-label="Toggle navigation in navbar stuck state">
                              <span class="navbar-toggler-icon"></span>
                        </button>

                        <router-link to="/"
                              class="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex"
                              href="account-signin.html">
                              <i class="bi bi-person animate-target"></i>
                              <span class="visually-hidden">Account</span>
                        </router-link>

                        <router-link to="/"
                              class="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-pulse d-none d-md-inline-flex"><i
                                    class="bi bi-heart animate-target"></i>
                              <span class="visually-hidden">Wishlist</span>
                        </router-link>

                        <button type="button"
                              class="btn btn-icon btn-lg fs-xl btn-outline-secondary position-relative border-0 rounded-circle animate-scale"
                              data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart"
                              aria-label="Shopping cart">
                              <router-link to="/"
                                    class="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-pulse d-none d-md-inline-flex">
                                    <span
                                          class="position-absolute top-0 start-100 badge fs-xs text-bg-primary rounded-pill mt-1 ms-n4 z-2">3</span>
                                    <i class="bi bi-bag animate-target me-1"></i>
                              </router-link>
                        </button>
                  </div>
            </div>
      </header>

      <div class="collapse navbar-stuck-hide mt-3" id="stuckNav">
            <div class="container d-flex justify-content-center">
                  <div class="d-lg-flex align-items-center">
                        <router-link to="/" class="nav-link px-5">Home</router-link>
                        <router-link to="/dashboard" class="nav-link px-5">Dashboard</router-link>
                        <router-link to="/requests" class="nav-link px-5">Pedidos</router-link>
                        <router-link to="/details_product" class="nav-link px-5">Produto</router-link>
                  </div>
            </div>
      </div>
</template>

<style scoped>
.nav-link:hover {
      color: #68AB39 !important;
}
</style>
