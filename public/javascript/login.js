async function signupForm(event) {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (email && username && password) {
    await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    }).then((response) => console.log(response));
  }
}

document.querySelector(".signup-form").addEventListener("submit", signupForm);
