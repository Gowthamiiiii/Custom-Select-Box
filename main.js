
// choosing selected option and storing it in varibles
// similary for options
const data_selected = document.querySelector(".selected");
const optionswrapper = document.querySelector(".options-wrapper");
const List_options = document.querySelectorAll(".option");


// onclick updating the dropdown data
data_selected.addEventListener("click", () => {
  optionswrapper.classList.toggle("active");
});


// showing a modal on selection
function showModal(var1, var2) {
  var modal = document.querySelector(".modal");
  var variable1 = document.querySelector("#variable1");
  var variable2 = document.querySelector("#variable2");
  // one variable is value and other is id
  variable1.innerHTML = var1;
  variable2.innerHTML = var2;
  modal.style.display = "block";

  var closeButton = document.querySelector(".close");
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });
}

// loop through each option and add listeners to them 
List_options.forEach(opt => {
  opt.addEventListener("click", () => {
    // Get the id and value attributes of the clicked element
    const id = opt.querySelector("input").id;
    const value = opt.querySelector("input").value;
    showModal(value, id);
    // Set the selected element's text to the label text of the clicked element
    data_selected.innerHTML = opt.querySelector("label").innerHTML;

    // Remove the "active" class from the options wrapper
    optionswrapper.classList.remove("active");

    // Do something with the id and value attributes
    console.log("id:", id);
    console.log("value:", value);
  });
});
