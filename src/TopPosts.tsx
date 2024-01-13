import _ from "lodash";
import Postcard from "./Postcard";
import { useQuery } from "@apollo/client";
import { gql } from "./__generated__/gql";
import { Post } from "./__generated__/graphql";

const GET_POSTS = gql(`
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

export default function TopPosts() {
  const { loading, error, data } = useQuery(GET_POSTS);

  return (
    <div>
      <div className="my-10">
        <h3 className="text-2xl font-bold text-center">Most Popular Posts</h3>
        {loading && <p>Loading...</p>}
        {error && <span>Error: {error.message}</span>}
      </div>
      {_.sortBy(data?.publication?.posts.edges, (edge) => edge.node.views)
        .reverse()
        .slice(0, 3)
        .map((edge, index) => (
          <Postcard post={edge.node as Post} key={index} />
        ))}
    </div>
  );
}
