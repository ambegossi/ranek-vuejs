<template>
  <section>
    <div v-if="shopping">
      <h2>Compras</h2>
      <div
        class="products-wrapper"
        v-for="(purchase, index) in shopping"
        :key="index"
      >
        <ProductItem v-if="purchase.product" :product="purchase.product">
          <p class="seller"><span>Vendedor: </span>{{ purchase.seller_id }}</p>
        </ProductItem>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import ProductItem from '../../components/ProductItem.vue';
import api from '../../services/api';

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      shopping: null,
    };
  },
  computed: {
    ...mapState(['user', 'login']),
  },
  methods: {
    getShopping() {
      api.get(`/transaction?buyer_id=${this.user.id}`).then(response => {
        this.shopping = response.data;
      });
    },
  },
  watch: {
    login() {
      this.getShopping();
    },
  },
  created() {
    if (this.login) {
      this.getShopping();
    }
  },
};
</script>

<style>
.product-wrapper {
  margin-bottom: 40px;
}

.seller span {
  color: #e80;
}

h2 {
  margin-bottom: 20px;
}
</style>
