import Profile from "./Profile";
import { TopPosts } from "./TopPosts";

export function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="bg-sky-900 mb-8 py-4">
        <div className="container mx-auto text-center md:text-left md:flex justify-center text-white text-xl">
          <a href="/" className="basis-1/2">
            <>Carlton Upperdine</>
          </a>
          <div>
            <a href="https://blog.upperdine.dev">
              <>Blog</>
            </a>
          </div>
        </div>
      </header>
      <main className="container mx-auto flex-1">
        <Profile />
        <div className="mx-auto w-10/12 md:w-8/12 xl:w-5/12">
          <div className="mt-5 text-2xl">
            <ul>
              <li className="text-3xl font-bold mb-5 text-center">
                Hello, I&apos;m Carlton!
              </li>
              <li className="mb-5">
                I&apos;m a software engineer based in the UK, having worked in
                the tech industry since 2011.
              </li>
              <li className="mb-5">
                My core languages are C# and TypeScript, but I believe in using
                the right tools for the job.
              </li>
              <li className="mb-5">
                Away from my computer, you&apos;ll find me obsessively watching
                UFC, failing at Latte art, and spending time with my fiancée and
                two cats.
              </li>
              <li>
                Check out my socials and blog for insights and experiences from
                my work as a software engineer. Cheers! 🚀
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="bg-sky-900 mt-8 py-4">
        <div className="container mx-auto flex justify-center text-white">
          &copy; {currentYear} Carlton Upperdine
        </div>
      </footer>
    </div>
  );
}
