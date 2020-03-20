<template>
  <form>
    <input name="search" id="search" type="text" v-model="search" />
    <input
      type="submit"
      id="submit"
      value="Search"
      @click.prevent="searchProducts"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
  methods: {
    searchProducts() {
      this.$router.push({ query: { q: this.search } });
    },
  },
};
</script>

<style></style>
