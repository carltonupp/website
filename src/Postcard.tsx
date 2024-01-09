import { Post } from "./api";

type PostcardProps = {
  post: Post;
};

export default function Postcard({ post }: PostcardProps) {

    
function navigate() {
    window.location.href = `https://blog.upperdine.dev/${post.slug}`
}

  return (
    <div className="w-60 inline-block align-top ml-5 cursor-pointer border-b-4" onClick={navigate}>
      <img className="rounded-lg" src={post.coverImageUrl} />
      <div className="font-bold text-center">{post.title}</div>
      <hr />
    </div>
  );
}
