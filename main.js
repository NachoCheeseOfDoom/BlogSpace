const blogContainer = document.getElementById("blog-list");
const newPost = document.getElementById("new-post");
newPost.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(newPost);
  const postTitle = form.get("title");
  const postBody = form.get("body");

  const postData = {
    title: postTitle,
    body: postBody,
  };

  console.log(postData);
});

fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    const postArr = data.splice(0, 5);
    html = "";
    postArr.forEach((post) => {
      html += `
      <h3 style='text-transform: capitalize;'>${post.title}</h3>
      <p>${post.body}</p>
      <hr/>
      `;
    });
    blogContainer.innerHTML = html;
  });
