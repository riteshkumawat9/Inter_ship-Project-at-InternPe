let InputTap = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;
        if (value == "=") {
      InputTap = eval(InputTap);
      document.querySelector("input").value = InputTap;
    } 
        else if (value == "AC") {
      InputTap = "";
      document.querySelector("input").value = InputTap;
    }
        else {
      InputTap += value;
      document.querySelector("input").value = InputTap;
    //   console.log(e.target);
    }
  });
});
