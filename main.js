const blogContainer = document.getElementById("blog-list");
const postForm = document.getElementById("new-post");

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postArr = data.splice(0, 2);

    postArr.forEach((post) => {
      renderPosts(post);
    });

  });

postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(postForm);
  const postTitle = form.get("title");
  const postBody = form.get("body");

  postForm.reset();

  e.target.title.focus()

  const postData = {
    title: postTitle,
    body: postBody,
  };

  sendData(postData)
});

function sendData(data) {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then(res => res.json())
    .then(data => {
      renderPosts(data);
    })
}

function renderPosts(post) {
  const html = `
      <h3 style='text-transform: capitalize;'>${post.title}</h3>
      <p>${post.body}</p>
      <hr/>
      ${blogContainer.innerHTML}
  `
  blogContainer.innerHTML = html;
}