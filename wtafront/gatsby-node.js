/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) =>
{
    const { createPage } = actions
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/app/))
    {
        page.matchPath = "/app/*"
        // Update the page.
        createPage(page)
    }
}

// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) =>
// {
//     const { createNodeField } = actions
//     if (node.internal.type === `MarkdownRemark`)
//     {
//         const slug = createFilePath({ node, getNode, basePath: `pages` })
//         createNodeField({
//             node,
//             name: `slug`,
//             value: slug,
//         })
//     }
// }

const path = require("path")

exports.createPages = async ({ graphql, actions }) =>
{
    const { createPage } = actions

    const result = await graphql(`
        {
            allUsers {
            nodes {
                tours {
                    points {
                        id__normalized
                    }
                    id__normalized
                }
                id__normalized
            }
            }
        }
    `)

    // const users = result.data.allUsers.nodes.map(async node =>
    // {
    //     await createPage({
    //         path: `/users/${node.id__normalized}/`,
    //         component: path.resolve("./src/pages/user.js"),
    //         context: {
    //             // Data passed to context is available
    //             // in page queries as GraphQL variables.
    //             url: node.url
    //         }
    //     })
    // })

    // const users = result.data.allUsers.nodes.map(async node =>
    // {
    //     await createPage({
    //         path: `/users/${node.id__normalized}/`,
    //         component: path.resolve("./src/pages/user.js"),
    //         context: {
    //             // Data passed to context is available
    //             // in page queries as GraphQL variables.
    //             url: node.url
    //         }
    //     })
    // })



    return Promise.all(
        result.data.allUsers.nodes.map(async node =>
        {
            await createPage({
                path: `/users/${node.id__normalized}/`,
                component: path.resolve("./src/pages/user.js"),
                context: {
                    // Data passed to context is available
                    // in page queries as GraphQL variables.
                    userId: node.id__normalized
                }
            })


            console.log(node.tours && node.tours.map(tour => (tour.id__normalized)))

            if (node.tours)
            {
                node.tours.map(async tour =>
                {
                    await createPage({
                        path: `/tours/${tour.id__normalized}/`,
                        component: path.resolve("./src/pages/tour.js"),
                        context: {
                            // Data passed to context is available
                            // in page queries as GraphQL variables.
                            tourId: tour.id__normalized
                        }
                    })
                })
            }

            //     tour.points.map(async point =>
            //     {
            //         await createPage({
            //             path: `/point/${point.id__normalized}/`,
            //             component: path.resolve("./src/pages/point.js"),
            //             context: {
            //                 // Data passed to context is available
            //                 // in page queries as GraphQL variables.
            //                 url: node.url
            //             }
            //         })
            //     })
            // })
        })
    )
}

