import _ from "lodash";

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

export async function recommendedPosts(): Promise<Post[]> {
  return getLastTenPosts().then((posts) =>
    _.sortBy(posts, (post) => post.views)
      .reverse()
      .slice(0, 3)
  );
}

export async function getLastTenPosts(): Promise<Post[]> {
  const query = `query Publication {
        publication(host: "blog.upperdine.dev") {
          posts(first: 10) {
            edges {
              node {
                title
                subtitle
                slug
                brief
                coverImage{
                  url
                }
                tags {
                  slug
                }
                publishedAt
                views
                reactionCount
              }
            }
          }
        }
      }`;

  const response = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const body = await response.json();

  return body.data.publication.posts.edges.map((edge) => {
    return {
      title: edge.node.title,
      subtitle: edge.node.subtitle,
      slug: edge.node.slug,
      brief: edge.node.brief,
      coverImageUrl: edge.node.coverImage.url,
      publishedDate: new Date(edge.node.publishedAt),
      views: edge.node.views,
      reactionCount: edge.node.reactionCount,
    };
  });
}
