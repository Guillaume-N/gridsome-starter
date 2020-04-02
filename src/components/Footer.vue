<template>
  <footer>
    Copyright {{getCurrentYear}} by
    <a :href="href">Guillaume</a>
  </footer>
</template>

<script>
export default {
  data: () => ({
    href: "https://google.fr/"
  }),
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
footer {
  text-align: center;
  color: #00a672;
  letter-spacing: 0.5px;
  padding: 20px;
}
</style>