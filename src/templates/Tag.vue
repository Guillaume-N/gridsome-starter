<template>
  <Layout>
    <h1>#{{ $page.tag.title }}</h1>
    <article
      v-for="edge in $page.tag.belongsTo.edges"
      :key="edge.node.id"
      style="margin-bottom: 2em;"
    >
      <g-image :src="edge.node.cover_image" style="width: 100%;" />
      <h2>
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </h2>
      <p>{{ edge.node.excerpt }}</p>
      <p>Posted: {{ edge.node.date }} - {{ edge.node.timeToRead }} min read</p>
      <div>
        <g-link
          style="padding-rigt: 0.25em;"
          v-for="tag in edge.node.tags"
          :key="tag.id"
          :to="tag.path"
          >#{{ tag.title }}&nbsp;</g-link
        >
      </div>
      <g-link :to="edge.node.path">Read Post</g-link>
    </article>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tag (id: $id) {
      title,
      id,
    belongsTo {
      edges {
        node {
        ... on BlogPost { 
        title, 
      id, 
      excerpt, 
      tags {
        id, title, path
      }, 
      date (format: "D MMMM YYYY"), 
      timeToRead, 
      path, 
      cover_image (width: 500, height: 150, quality: 90)
        }
          }
      }
    }
  }
}
</page-query>
