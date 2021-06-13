function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("formInputText").value;

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
        console.log(res);
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
        } else if (res.score_tag === "") {
          document.getElementById("polarity").innerHTML = " ";
        }
        //confidence
        if (res.confidence === null) {
          document.getElementById("confidence").innerHTML = "";
        } else if (res.confidence == "") {
          document.getElementById("confidence").innerHTML = "";
        } else {
          document.getElementById("confidence").innerHTML =
            res.confidence + "%";
        }
        //agreement
        if (res.agreement === "DISAGREEMENT") {
          document.getElementById("agreement").innerHTML = " is Disagreement";
        } else if (res.agreement === "AGREEMENT") {
          document.getElementById("agreement").innerHTML = " is Agreement";
        } else if (res.agreement === "") {
          document.getElementById("agreement").innerHTML = "";
        }
        //subjectivity
        if (res.subjectivity === "OBJECTIVE") {
          document.getElementById("subjectivity").innerHTML = " is Objective";
        } else if (res.subjectivity === "SUBJECTIVE") {
          document.getElementById("subjectivity").innerHTML = " is Subjective";
        }
        //irony
        if (res.irony === "NONIRONIC") {
          document.getElementById("irony").innerHTML = "is Not Ironic";
        } else if (res.irony === "IRONIC") {
          document.getElementById("irony").innerHTML = "is Ironic";
        } else if (res.irony === null) {
          document.getElementById("irony").innerHTML = "";
        }
      });
    console.log("::: Form Submitted :::");
  } else {
    alert("Something went wrong with URL, Please TRY AGAIN");
  }
}

export { handleSubmit };
