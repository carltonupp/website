import { useEffect, useState } from "react";
import { Post, getLastTenPosts } from "./api";
import Postcard from "./Postcard";

export function App() {
  const [posts, setPosts] = useState([] as Post[]);

  useEffect(() => {
    if (posts.length < 1) {
      getLastTenPosts().then((p) => setPosts(p));
    }
  });

  return (
    <div className="flex flex-col min-h-screen font-mono">
      <header className="bg-sky-900 mb-8 py-10">
        <div className="container mx-auto text-center md:text-left md:flex justify-center text-white text-xl">
          Carlton Upperdine
        </div>
      </header>
      <main>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {posts.map((post, i) => (
              <Postcard key={i} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
