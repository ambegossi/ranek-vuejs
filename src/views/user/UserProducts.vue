<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProductAdd />
    <h2>Seus Produtos</h2>
    <transition-group v-if="user_products" name="list" tag="ul">
      <li v-for="(product, index) in user_products" :key="index">
        <ProductItem :product="product">
          <p>{{ product.description }}</p>
        </ProductItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProductAdd from '../../components/ProductAdd.vue';
import ProductItem from '../../components/ProductItem.vue';

export default {
  name: 'UserProducts',
  components: {
    ProductAdd,
    ProductItem,
  },
  computed: {
    ...mapState(['login', 'user', 'user_products']),
  },
  methods: {
    ...mapActions(['getUserProducts']),
  },
  watch: {
    login() {
      this.getUserProducts();
    },
  },
  created() {
    if (this.login) {
      this.getUserProducts();
    }
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
</style>
