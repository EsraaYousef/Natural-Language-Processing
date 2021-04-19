const formdata = new FormData();
formdata.append("key", "69942adf61e35335158000bc9ba38b1e");
formdata.append("txt", "Nice webpack sessions");
formdata.append("lang", "en");

function handleSubmit(event) {
  event.preventDefault();
  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);
  console.log("::: Form Submitted :::");

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("results").innerHTML =
        data.status.remaining_credits;
    })
    .catch((error) => console.log("fetching error", error));
}
export { handleSubmit };
