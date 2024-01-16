import Bio from "./Bio";
import Profile from "./Profile";
import TopPosts from "./TopPosts";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export function App() {
  const currentYear = new Date().getFullYear();
  const apolloClient = new ApolloClient({
    uri: 'https://gql.hashnode.com/',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={apolloClient}>
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
              <Bio />
              <TopPosts />
            </div>
          </main>
          <footer className="bg-sky-900 mt-8 py-4">
            <div className="container mx-auto flex justify-center text-white">
              &copy; {currentYear} Carlton Upperdine
            </div>
          </footer>
        </div>
    </ApolloProvider>
  );
}


