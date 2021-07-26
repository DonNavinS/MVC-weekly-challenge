async function commentForm(event) {
  console.log(event);
  event.preventDefault();
  const comment_content = document
    .querySelector('textarea[name="comment-content"]')
    .value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment_content) {
    const response = await fetch("/api/comment", {
      method: "post",
      body: JSON.stringify({
        post_id,
        comment_content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log(comment_content);
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}
console.log(document.querySelector(".comment-form"));
document.querySelector(".comment-form").addEventListener("submit", commentForm);
