// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Guillaume",
  siteDescription: "Personal blog",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: "abcde",
        accessToken: "abcde",
        host: "cdn.contentful.com",
        environment: "master",
        typeName: "Contentful",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "./blog/posts/**/*.md",
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: "Tag",
            route: "/tags/:id",
            create: true,
          },
        },
      },
    },
  ],
  templates: {
    BlogPost: "/posts/:title",
  },
};
