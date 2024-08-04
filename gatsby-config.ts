import type { GatsbyConfig } from "gatsby";
import { buildSchema } from "graphql";
import fs from "fs";
import { createHttpLink, from } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";

const retryLink = new RetryLink({
  delay: {
    initial: 100,
    max: 2000,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error, operation) =>
      Boolean(error) && ![500, 400].includes(error.statusCode),
  },
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Leetcode Playground",
    siteUrl: "https://www.yourdomain.tld"
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Leetcode",
        fieldName: "leetcode",
        url: "https://leetcode.com/graphql",
        createSchema: async () => {
          const sdl = fs
            .readFileSync(`${__dirname}/leetcode.gql`)
            .toString()
          return buildSchema(sdl)
        },
        createLink: (pluginOptions: { url: string }) =>
          from([retryLink, createHttpLink({ uri: pluginOptions.url })]),
        // Additional options to pass to node-fetch
        // fetchOptions: {},
      },
    },
    "gatsby-plugin-postcss"
  ],
};

export default config;
