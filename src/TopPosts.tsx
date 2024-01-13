import { useQuery } from "@tanstack/react-query";
import { Post, recommendedPosts } from "./api";
import Postcard from "./Postcard";

export default function TopPosts() {
  const { isPending, isError, data, error } = useQuery<Post[]>({
    queryKey: ["topPosts"],
    queryFn: recommendedPosts,
  });

  return (
    <div>
      <div className="my-10">
        <h3 className="text-2xl font-bold text-center">Most Popular Posts</h3>
        {isPending && <p>Loading...</p>}
        {isError && <span>Error: {error.message}</span>}
      </div>
      {data?.map((post, index) => (
        <Postcard post={post} key={index} />
      ))}
    </div>
  );
}
