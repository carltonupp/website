import { useEffect, useState } from "react"
import { Post, getLastTenPosts } from "./api";

export function App() {

  const [ posts, setPosts ] = useState([] as Post[]);

  useEffect(() => {
    getLastTenPosts().then(p => setPosts(p));
  })

  return (
    <div className="flex flex-col min-h-screen font-mono">
      <header className="bg-sky-900 mb-8 py-10">
        <div className="container mx-auto text-center md:text-left md:flex justify-center text-white text-xl">
          Carlton Upperdine
        </div>
      </header>
      <main>
        { posts.map(post => {
          return (
            <div className="w-40">
              <img src={post.coverImageUrl} />
              <div>{post.title}</div>
            </div>
          );
        })}
      </main>
    </div>
  )
}

export default App
