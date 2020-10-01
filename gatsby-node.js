exports.createPages = async ({ actions, graphql, reporter }) => {
  const response = await graphql(`
    query {
      allStrapiArticles {
        nodes {
          slug
        }
      }
    }
  `);
  if (response.errors) {
    reporter.panic("there aren't results", response.errors);
  }

  const articles = response.data.allStrapiArticles.nodes;
  articles.forEach((article) => {
    actions.createPage({
      path: `/blog/${article.slug}`,
      component: require.resolve("./src/components/article/index.js"),
      context: {
        slug: article.slug,
      },
    });
  });
};

module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  const crypto = require(`crypto`);
  if (node.internal.type === "StrapiArticles") {
    const newNode = {
      id: createNodeId(`StrapiArticlesContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || " ",
        type: "StrapiArticleContent",
        mediaType: "text/markdown",
        contentDigest: crypto
          .createHash("md5")
          .update(node.content || " ")
          .digest("hex"),
      },
    };
    actions.createNode(newNode);
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    });
  }
};
