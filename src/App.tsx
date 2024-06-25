import Bio from "./Bio";
import Profile from "./Profile";

export function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-700 text-white">
      <header>
        <div className="text-center mt-10">
          <div className="text-5xl">Carlton Upperdine</div>
          <div className="text-3xl my-5">Software Engineer</div>
        </div>
      </header>
      <main className="container mx-auto flex-1">
        <Profile />
        <div className="mx-auto w-10/12 md:w-8/12 xl:w-5/12">
          <Bio />
        </div>
      </main>
    </div>
  );
}
