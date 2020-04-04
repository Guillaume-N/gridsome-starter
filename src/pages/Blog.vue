<template>
  <Layout>
    <h1>Blog</h1>
    <article
      v-for="edge in $static.allBlogPost.edges"
      :key="edge.node.id"
      style="margin-bottom: 2em"
    >
      <g-image :src="edge.node.cover_image" style="width: 100%" />
      <h2>
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </h2>
      <p>{{ edge.node.excerpt }}</p>
      <p>Posted: {{ edge.node.date }} - {{ edge.node.timeToRead }} min read</p>
      <div>
        <span
          style="padding-rigt: .25em;"
          v-for="tag in edge.node.tags"
          :key="tag"
          >#{{ tag }}
        </span>
      </div>
      <g-link :to="edge.node.path">Read Post</g-link>
    </article>
  </Layout>
</template>

<static-query>
{
  allBlogPost  {
    edges {
    node {
      title, 
      id, 
      excerpt, 
      tags, 
      date (format: "D MMMM YYYY"), 
      timeToRead, 
      path, 
      cover_image (width: 500, height: 150, quality: 90)
      }
    }
  }
}
</static-query>
