// API endpoint for jacobprice.pw, exposing JSON from the wordpress backend
const BASE_URL = 'https://wp.jacobprice.pw/wp-json/wp/v2';

// fetch the posts from WP and return JSON
export async function getPosts() {
  const postsRes = await fetch(BASE_URL + '/posts?_embed');
  const posts = await postsRes.json();
  return posts;
}

// Return post object
export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

// Return the slugs so the paths can be generated
// datatypes in wp are called posts, the type in this case may be events, posts (blog), etc.
export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case 'posts':
      elements = await getPosts();
      break;
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}