module.exports = {
  siteMetadata: {
    title: `Yay!Walker`,
    description: `User submitted walking tours`,
    author: `Trevor Smith-Holbourn`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "http://localhost:3000/api/v1/all", // on "gatsby develop"
          production: "https://aqueous-fortress-10362.herokuapp.com/api/v1/all" // on "gatsby build"
        },
        imageKeys: ["avatar_url", "img_url", "picture_url"],
        rootKey: "users",
        schemas: {
          users: `
            name: String
            bio: String
            avatar_url: String
            tours:[tours]
          `,
          tours: `
            name: String
            description: String
            user_id: Int
            img_url: String
            points: [points]
          `,
          points: `
            lat: Float
            long: Float
            text: String
            order: Int
            tour_id: Int
            picture_url: String
          `
        }
      }
    },
    // {
    //   resolve: "gatsby-source-custom-api",
    //   options: {
    //     url: {
    //       development: "http://localhost:3000/api/v1/users", // on "gatsby develop"
    //       production: "https://my-remote-api.com" // on "gatsby build"
    //     },
    //     imageKeys: ["avatar_url"],
    //     rootKey: "users",
    //     schemas: {
    //       users: `
    //         name: String
    //         bio: String
    //         avatar_url: String
    //       `
    //     }
    //   }
    // },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "http://localhost:3000/api/v1/tours", // on "gatsby develop"
          production: "https://aqueous-fortress-10362.herokuapp.com/api/v1/tours" // on "gatsby build"
        },
        imageKeys: ["img_url"],
        rootKey: "tours",
        schemas: {
          tours: `
            user_id: Int
            name: String
            img_url: String
          `
        }
      }
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "http://localhost:3000/api/v1/points", // on "gatsby develop"
          production: "https://aqueous-fortress-10362.herokuapp.com/api/v1/points" // on "gatsby build"
        },
        imageKeys: ["picture_url"],
        rootKey: "points",
        schemas: {
          tours: `
              tour_id: Int
              lat: Float
              long: Float
              order: Int
              text: String
              picture_url: String
          `
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}