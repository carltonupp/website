import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons'

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
      <div className="inline-block align-top pb-5">
        <div className="font-bold text-lg">{post.title}</div>
        <div className="mt-5">
        <FontAwesomeIcon icon={faCalendar} className="text-slate-600 hover:text-sky-900 hover:text-bold" />
          <span className="font-bold ml-5">
            {post.publishedDate.toLocaleDateString()}
          </span>
        </div>
        <div>
        <FontAwesomeIcon icon={faMagnifyingGlass } className="text-slate-600 hover:text-sky-900" />
          <span className="font-bold ml-5">{post.views}</span>
        </div>
        <div>
        <FontAwesomeIcon icon={faHeart} className="text-slate-600 hover:text-sky-900 hover:text-bold" />
          <span className="font-bold ml-5">{post.reactionCount}</span>
        </div>
      </div>
      <hr />
    </div>
  );
}
