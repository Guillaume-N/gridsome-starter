<template>
  <Layout>
    <h1>Blog</h1>
    <article v-for="edge in $static.allBlogPost.edges" :key="edge.node.id">
      <div v-html="edge.node.content"></div>
    </article>
  </Layout>
</template>

<static-query>
{allBlogPost {edges {node {content, id}}}}
</static-query>
