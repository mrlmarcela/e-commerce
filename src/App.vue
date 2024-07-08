<template>

  <div id="app">

    <body class="container">
      <Header />
      <div class="pt-5">
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