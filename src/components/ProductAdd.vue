<template>
  <form class="add-product">
    <label for="name">Nome</label>
    <input id="name" name="name" type="text" v-model="product.name" />
    <label for="price">Preço (R$)</label>
    <input id="price" name="price" type="number" v-model="product.price" />
    <label for="photos">Fotos</label>
    <input id="photos" name="photos" type="file" ref="photos" />
    <label for="description">Descrição</label>
    <textarea
      id="description"
      name="description"
      v-model="product.description"
    ></textarea>
    <input
      class="btn"
      type="button"
      value="Adicionar Produto"
      @click.prevent="addProduct"
    />
  </form>
</template>

<script>
import api from '../services/api';

export default {
  name: 'ProductAdd',
  data() {
    return {
      product: {
        name: '',
        price: '',
        description: '',
        photos: null,
        sold: 'false',
      },
    };
  },
  methods: {
    formatProduct() {
      this.product.user_id = this.$store.state.user.id;
    },
    addProduct() {
      this.formatProduct();
      api.post('/product', this.product).then(() => {
        this.$store.dispatch('getUserProducts');
      });
    },
  },
};
</script>

<style scoped>
.add-product {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>
