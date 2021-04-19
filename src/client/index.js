import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/site.scss";

import imgBrand from "./images/udacity.png";

const homeImg = document.getElementById("home");
homeImg.src = imgBrand;

console.log(checkForName);

alert("I EXIST");
console.log("CHANGE!!");

export { checkForName, handleSubmit };
