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
        <TwitterCircleFilled href="https://x.com/carltonupp" />
        <GithubFilled href="https://github.com/carltonupp" />
        <LinkedinFilled  href="https://linkedin.com/in/carltonupp" />
      </div>
    </div>
  );
}