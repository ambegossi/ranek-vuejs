<template>
  <form>
    <input
      name="search"
      id="search"
      type="text"
      v-model="search"
      placeholder="Buscar..."
    />
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

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#search {
  width: 100%;
  padding: 20px;
  border: none;
}

#search:focus,
#search:hover {
  transform: scale(1.1);
}

#submit {
  width: 62px;
  height: 62px;
  background: url('../assets/search.svg') no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>
