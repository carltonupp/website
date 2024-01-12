import { Post } from "./api";

type PostcardProps = {
  post: Post;
};

export default function Postcard({ post }: PostcardProps) {
  function navigate() {
    window.location.href = `https://blog.upperdine.dev/${post.slug}`;
  }

  return (
    <div className="cursor-pointer mb-5" onClick={navigate}>
      <img
        className="rounded-lg md:w-60 inline-block mr-5 mb-2"
        src={post.coverImageUrl}
      />
      <div className="inline-block align-top">
        <div className="font-bold text-lg">{post.title}</div>
        <div className="mt-5">
          📅
          <span className="font-bold ml-5">
            {post.publishedDate.toLocaleDateString()}
          </span>
        </div>
        <div>
          🔎
          <span className="font-bold ml-5">{post.views}</span>
        </div>
        <div>
          ❤️
          <span className="font-bold ml-5">{post.reactionCount}</span>
        </div>
      </div>
      <hr />
    </div>
  );
}
