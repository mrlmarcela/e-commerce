<template>
  <div id="app">

    <body class="container">
      <Header />
      <div class="pt-5">
        <!-- Apenas para exemplo, você pode adaptar para sua rota específica -->
        <router-view />
      </div>
    </body>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  components: {
    Header
  },
  setup() {
    const router = useRouter();

    onMounted(() => {
      router.push('/dashboard');
    });
  }
}
</script>
