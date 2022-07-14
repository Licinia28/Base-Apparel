//email validation function
function emailValidation()
{
  let form = document.querySelector("#form");
  let email = document.querySelector("#email").value;
  let displayMessage = document.querySelector("#formMessage");
  let errorMessage = document.querySelector("#error");

  var regularExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(regularExpression.test(email))
    {
      displayMessage.innerHTML = "Email saved successfully";
      displayMessage.style.color = "green";
      form.style.border = "1px solid green";
      errorMessage.style.visibility = "hidden";
    }
    else
    {
      displayMessage.innerHTML = "Invalid email address";
      displayMessage.style.color = "red";
      errorMessage.style.visibility = "visible";
    }
}
