<template>

  <div id="app">

    <body class="container">
      <Header />
      <div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 pt-5">
        <router-view />
      </div>
    </body>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>