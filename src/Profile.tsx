import { SocialIcon } from "react-social-icons";

export default function Profile() {
  const socialLinks = [
    "https://github.com/carltonupp",
    "https://twitter.com/carltonupp",
    "https://linkedin.com/in/carltonupp",
  ];

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
        {socialLinks.map((sl, i) => {
          return (
            <SocialIcon
              className="ml-1 mr-1"
              key={i}
              url={sl}
              data-testid="social-link"
              style={{ height: 30, width: 30 }}
            />
          );
        })}
      </div>
    </div>
  );
}