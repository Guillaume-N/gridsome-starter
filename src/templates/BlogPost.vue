<template>
  <Layout>
    <div>
      <g-image :src="$page.blogPost.cover_image" style="width: 100%" />
    </div>
    <div v-html="$page.blogPost.content" />
  </Layout>
</template>

<page-query>
query($path: String!) {blogPost (path: $path) {
  content,
  cover_image (width: 500, height: 150, quality: 90, blur: 100)
}}
</page-query>
