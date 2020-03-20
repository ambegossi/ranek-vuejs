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

export default {
  data() {
    return {
      products: null,
    };
  },
  methods: {
    getProdutos() {
      api.get('/product').then(response => {
        this.products = response.data;
      });
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
