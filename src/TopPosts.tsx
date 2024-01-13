import Postcard from "./Postcard";
import { useQuery } from "@apollo/client";
import { Post } from "./__generated__/graphql";
import { GET_POSTS, getMostPopularPosts } from "./api";

export default function TopPosts() {
  const { loading, error, data } = useQuery(GET_POSTS);
  return (
    <div>
      <div className="my-10">
        <h3 className="text-2xl font-bold text-center">Most Popular Posts</h3>
      </div>
      {loading && <p>Loading...</p>}
      {error && <span>Error: {error.message}</span>}
      {getMostPopularPosts(data).map((post, index) => (
        <Postcard post={post as Post} key={index} />
      ))}
    </div>
  );
}
