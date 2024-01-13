import _ from "lodash";
import { gql } from "./__generated__/gql";
import { PublicationQuery } from "./__generated__/graphql";

export const GET_POSTS = gql(`
  query Publication {
    publication(host: "blog.upperdine.dev") {
      posts(first: 10) {
        edges {
          node {
            id
            title
            subtitle
            slug
            brief
            coverImage {
              url
              isAttributionHidden
              isPortrait
            }
            tags {
              slug
            }
            publishedAt
            views
            reactionCount
          }
        }
      }
    }
  }
`);

export function getMostPopularPosts(query?: PublicationQuery) {
  return _.take(
    _.orderBy(
      query?.publication?.posts.edges.map((edge) => edge.node),
      (node) => node.views,
      "desc"
    ),
    3
  );
}
