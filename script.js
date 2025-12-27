//your JS code here. If required.
const form = document.getElementById("form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  const age = ageInput.value;
  const name = nameInput.value;

  // Validation
  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }

  // Promise logic
  const votePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  votePromise
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});
