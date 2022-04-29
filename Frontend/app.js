document.getElementById("myForm").addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault();

  let myForm = event.target;
  let formData = new FormData(myForm);

  formData.append("time", Date.now());

  for (let key of formData.keys()) {
    console.log(key, formData.get(key));
  }

  let url = "http://localhost:3000/";

  let request = new Request(url, {
    body: formData,
    method: "POST",
  });

  fetch(request)
    .then((response) => response.json())
    .then((data) => {
      console.log("Antwort vom Server:", data);
      myForm.reset();
    })
    .catch((error) => {
      console.warn(error);
    });
}
