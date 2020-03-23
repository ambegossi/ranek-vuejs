<template>
  <section>
    <h2>Endereço da Entrega</h2>
    <UserForm>
      <button class="btn" @click.prevent="checkout">Finalizar Compra</button>
    </UserForm>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import UserForm from './UserForm.vue';
import api from '../services/api';

export default {
  name: 'Checkout',
  components: {
    UserForm,
  },
  props: ['product'],
  computed: {
    ...mapState(['user']),
    buy() {
      return {
        buyer_id: this.user.email,
        seller_id: this.product.user_id,
        product: this.product,
        address: {
          cep: this.user.cep,
          street: this.user.street,
          number: this.user.number,
          district: this.user.district,
          city: this.user.city,
          state: this.user.state,
        },
      };
    },
  },
  methods: {
    createTransaction() {
      return api.post('/transaction', this.buy).then(() => {
        this.$router.push({ name: 'Shopping' });
      });
    },
    async createUser() {
      try {
        await this.$store.dispatch('createUser', this.$store.state.user);
        await this.$store.dispatch('getUser', this.$store.state.user.email);
        await this.createTransaction();
      } catch (error) {
        console.log(error);
      }
    },
    checkout() {
      if (this.$store.state.login) {
        this.createTransaction();
      } else {
        this.createUser();
      }
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}

.btn {
  background: #e80;
}
</style>
