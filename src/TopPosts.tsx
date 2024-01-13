import _ from "lodash";
import Postcard from "./Postcard";
import { useQuery } from "@apollo/client";
import { gql } from "./__generated__/gql";

export type Post = {
  title: string;
  subtitle: string;
  slug: string;
  brief: string;
  coverImageUrl: string;
  publishedDate: Date;
  views: number;
  reactionCount: number;
};


const GET_POSTS = gql(`
  query Publication {
    publication(host: "blog.upperdine.dev") {
      posts(first: 10) {
        edges {
          node {
            title
            subtitle
            slug
            brief
            coverImage {
              url
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
      {_.sortBy(data?.publication?.posts.edges, edge => edge.node.views)
        .reverse()
        .slice(0, 3)
        .map((edge, index) => {
          console.log(data);
          return (
            <Postcard
              post={{
                title: edge.node.title,
                subtitle: edge.node.subtitle ?? "",
                slug: edge.node.slug,
                brief: edge.node.brief,
                coverImageUrl: edge.node.coverImage?.url ?? "",
                publishedDate: new Date(edge.node.publishedAt),
                views: edge.node.views,
                reactionCount: edge.node.reactionCount,
              }}
              key={index}
            />
          );
        })}
    </div>
  );
}
