import { TwitterCircleFilled, LinkedinFilled, GithubFilled } from "@ant-design/icons";

export default function Profile() {
  return (
    <div className="mb-5">
      <div className="justify-center flex">
        <img
          className="rounded-full"
          src="/pfp.jpg"
          alt="me enjoying the scenery of Zakynthos town"
          width={150}
          height={150}
        />
      </div>
      <div className="justify-center flex mt-5">
        <a href="https://x.com/carltonupp" className="mr-5 text-3xl hover:text-slate-500"><TwitterCircleFilled /></a>
        <a href="https://github.com/carltonupp" className="mr-5 text-3xl hover:text-slate-500"><GithubFilled /></a>
        <a href="https://linkedin.com/in/carltonupp" className="text-3xl hover:text-slate-500"><LinkedinFilled /></a>
      </div>
    </div>
  );
}