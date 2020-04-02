<template>
  <Layout>
    <h1>Produts</h1>
    <h2>
      <g-link class="nav__link" to="/new">New Products</g-link>
    </h2>
  </Layout>
</template>

<script>
// to know more about meta infos https://github.com/nuxt/vue-meta
export default {
  metaInfo: {
    title: "Products",
    meta: [
      { charset: "utf-8" },
      {
        name: "author",
        content: "Guillaume"
      },
      { name: "description", content: "Discover our products" },
      { name: "keywords", content: "Super clothes" }
    ]
  }
};
</script>