// API endpoint for jacobprice.pw, exposing JSON from the wordpress backend
const BASE_URL = process.env.BASE_URL;

// fetch the posts from WP and return JSON
export async function getPosts() {
  const postsRes = await fetch(BASE_URL + "/posts?_embed");
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

export async function getProjects() {
  const projectsRes = await fetch(BASE_URL + "/projects?_embed");
  const projects = await projectsRes.json();
  return projects;
}

export async function getProject(slug) {
  const projects = await getProjects();
  const projectArray = projects.filter((project) => project.slug == slug);
  const project = projectArray.length > 0 ? projectArray[0] : null;
  return project;
}
// Return the slugs so the paths can be generated
// datatypes in wp are called posts, the type in this case may be events, posts (blog), etc.
export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
    case "projects":
      elements = await getProjects();
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
