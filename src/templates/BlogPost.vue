<template>
  <Layout>
    <div v-html="$page.blogPost.content" />
  </Layout>
</template>

<page-query>
query($path: String!) {blogPost (path: $path) {
  content
}}
</page-query>
