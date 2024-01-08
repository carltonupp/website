type Post = {
    title: string;
    slug: string;
    coverImageUrl: string;
}

export async function getLastTenPosts(): Promise<Post[]> {
    const query = `query Publication {
        publication(host: "blog.upperdine.dev") {
            posts(first: 10) {
                edges {
                    node {
                        title,
                        slug,
                        coverImage{
                          url
                        }
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

    return body.data.publication.posts.edges.map(edge => {
        return {
            title: edge.node.title,
            slug: edge.node.slug,
            coverImageUrl: edge.node.coverImage.url,
        };
    })
}
