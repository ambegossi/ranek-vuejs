<template>
  <section class="products-container">
    <div v-for="product in products" :key="product.id">
      <img
        v-if="product.photos"
        :src="product.photos[0].src"
        :alt="product.photos[0].title"
      />
      <p class="price">{{ product.price }}</p>
      <h2 class="title">{{ product.name }}</h2>
      <p>{{ product.description }}</p>
    </div>
  </section>
</template>

<script>
import api from '../services/api';
import serialize from '../util/serialize';

export default {
  data() {
    return {
      products: null,
      productsPerPage: 9,
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);

      return `/product?_limit=${this.productsPerPage}${query}`;
    },
  },
  methods: {
    getProdutos() {
      api.get(this.url).then(response => {
        this.products = response.data;
      });
    },
  },
  watch: {
    url() {
      this.getProdutos();
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
