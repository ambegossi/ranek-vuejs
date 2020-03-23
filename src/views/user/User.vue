<template>
  <section class="user">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{ name: 'User' }">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Shopping' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Sales' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'User-Edit' }">Editar Usuário</router-link>
        </li>
        <li>
          <button @click.prevent="signOut">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'User',
  methods: {
    signOut() {
      this.$store.dispatch('signOutUser');
      this.$router.push('/login');
    },
  },
};
</script>

<style></style>
