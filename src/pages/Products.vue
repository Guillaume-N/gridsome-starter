<template>
  <Layout>
    <h1>Produts</h1>
    <h2>
      <div
        style="text-align: center;"
        v-for="edge in $page.allContentfulProduct.edges"
        :key="edge.node.id"
      >
        <h2 style="margin-bottom: 0.25em;">{{edge.node.name}}</h2>
        <span>{{edge.node.price}}</span>
        <g-image
          :src="edge.node.image.file.url"
          style="width: 100%; height: 300px; object-fit: contain"
          :alt="edge.node.image.title"
        />
        <p>{{edge.node.description}}</p>
      </div>
      <g-link class="nav__link" to="/new">New Products</g-link>
    </h2>
    <Pager :info="$page.allContentfulProduct.pageInfo" linkClass="pager" />
  </Layout>
</template>

<page-query>
query ($page: Int)
{allContentfulProduct (perPage: 2, page: $page) @paginate { 
  pageInfo {
    totalPages, currentPage
  }
  edges { node { id, name, price, description, image {title, file {url}}}} }}
</page-query>

<script>
import { Pager } from "gridsome";
// to know more about meta infos https://github.com/nuxt/vue-meta
export default {
  components: {
    Pager
  },
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

<style scoped>
.pager {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  padding: 40px 20px;
}
</style>
