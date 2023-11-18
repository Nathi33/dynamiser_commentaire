//Récupération de mes éléments HTML
let form = document.querySelector("form");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let message = document.getElementById("message");
let errorMessage = document.getElementById("error-message");

//Création de mon nouveau commentaire JavaScript en l'intégrant à mon HTML
function createComment() {
  let h3 = document.createElement("h3");
  h3.classList.add("font-medium", "text-gray-900");
  h3.innerText = firstName.value + " " + lastName.value;

  let p = document.createElement("p");
  p.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");
  p.innerText = message.value;

  let newComment = document.createElement("div");
  newComment.classList.add("py-10", "border-t", "border-gray-200");
  newComment.appendChild(h3);
  newComment.appendChild(p);

  let body = document.querySelector("#comment-list");
  body.appendChild(newComment);
}
