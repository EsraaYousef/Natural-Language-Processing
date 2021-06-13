function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("formInputText").value;
  // console.log("----", formText);

  // check what text was put into the form field
  if (Client.validateUrl(formText)) {
    //Fetch request
    fetch("http://localhost:8081/newData", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formText: formText }),
    })
      .then((res) => res.json())
      .then(function (res) {
        //polarity
        if (res.score_tag === "N") {
          document.getElementById("polarity").innerHTML = res.score_tag;
          (" negative.");
        } else if (res.score_tag === "N+") {
          document.getElementById("polarity").innerHTML = " very Negative.";
        } else if (res.score_tag === "P+") {
          document.getElementById("polarity").innerHTML = " very Positive";
        } else if (res.score_tag === "NEU") {
          document.getElementById("polarity").innerHTML = " Neutral.";
        } else if (res.score_tag === "P") {
          document.getElementById("polarity").innerHTML = " Positive.";
        }
        //confidence
        document.getElementById("confidence").innerHTML = res.confidence + "%";
        //agreement
        document.getElementById("agreement").innerHTML = res.agreement;
        //subjectivity
        document.getElementById("subjectivity").innerHTML = res.subjectivity;
        //irony
        document.getElementById("irony").innerHTML = res.irony;
      });
    console.log("::: Form Submitted :::");
  } else {
    alert("Something went wrong with URL ,Please TRY AGAIN");
  }
}

export { handleSubmit };
