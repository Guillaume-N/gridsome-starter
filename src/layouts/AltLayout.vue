<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link exact to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link exact class="nav__link" to="/">Home</g-link>
        <g-link exact class="nav__link" to="/about">About</g-link>
        <g-link exact class="nav__link" to="/products">Products</g-link>
        <g-link exact class="nav__link" to="/blog">Blog</g-link>
      </nav>
    </header>
    <slot />
    <Footer v-if="showFooter" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: { Footer },
  props: ["showFooter"],
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.body {
  background: #f3f7f9;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.active {
  color: #ff6666;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
