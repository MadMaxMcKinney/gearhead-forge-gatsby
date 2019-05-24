const { createFilePath } = require('gatsby-source-filesystem');
const path = require(`path`);

// Runs during the node creation stage of the build
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    // Check if the node being made is a markdownremark node, we are going to append a new field on it
    if (node.internal.type === `MarkdownRemark`) {
        // This slug is generated from a helper function provided via the plugin filesystem
        const slug = createFilePath({
            node: node,
            getNode: getNode,
            basePath: 'pages',
        });
        // Method that actually adds the new field "slug" to every markdown node
        createNodeField({
            node: node,
            name: 'slug',
            value: slug,
        });
    }
};

// Runs during page creation state of the build
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    // Using graphql as a function here "()" will return a promise we can act on
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/article.jsx`),
                context: {
                    // Data passed to context is available
                    // in page queries as GraphQL variables.
                    slug: node.fields.slug,
                },
            });
        });
    });
};
