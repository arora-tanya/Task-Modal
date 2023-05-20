const dragArea = document.querySelector(".drag-area");
let button = document.querySelector(".button");
let input = document.querySelector("input");
let file;

button.onclick = () => {
  input.click();
};

let checklist = document.querySelector(".checklist");
let task = document.querySelector(".addTask");

checklist.addEventListener("click", () => {
  if (task.style.display === "none") {
    task.style.display = "flex";
  } else {
    task.style.display = "none";
  }
});

let link = document.querySelector("#comment");
let form = document.querySelector(".comment-form");

link.addEventListener("click", () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

let tag = document.querySelector(".scroll_dropdown");
let scroll = document.querySelector(".scrollable-menu");

tag.addEventListener("click", () => {
  if (scroll.style.display === "none") {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
});

let link2 = document.querySelector("#remind");
let form2 = document.querySelector(".remind-form");

link2.addEventListener("click", () => {
  if (form2.style.display === "none") {
    form2.style.display = "block";
  } else {
    form2.style.display = "none";
  }
});

let members = document.querySelector(".members");
let searchBox = document.querySelector(".form-outline");

members.addEventListener("click", () => {
  if (searchBox.style.display === "none") {
    searchBox.style.display = "block";
  } else {
    searchBox.style.display = "none";
  }
});

let followers = document.querySelector(".followers");
let followers_content = document.querySelector(".content");

followers.addEventListener("click", () => {
  if (followers_content.style.display === "none") {
    followers_content.style.display = "block";
  } else {
    followers_content.style.display = "none";
  }
});

input.addEventListener("change", function () {
  file = this.files[0];
  dragArea.classList.add("active");
  displayFile();
});

dragArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  //console.log("File is inside the drag area");
  dragArea.classList.add("active");
});

dragArea.addEventListener("dragleave", () => {
  //console.log("File left the drag area");
  dragArea.classList.remove("active");
});

dragArea.addEventListener("drop", (event) => {
  event.preventDefault();
  // console.log("The file is dropped in drag area");
  file = event.dataTransfer.files[0];
  //console.log(file);
  displayFile();
});

function displayFile() {
  let fileType = file.type;
  //console.log(fileType);
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let fileURL = fileReader.result;
      //console.log(fileURL);
      let imgTag = `<img src="${fileURL}" alt="">`;
      dragArea.innerHTML = imgTag;
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This file is not an image");
    dragArea.classList.remove("active");
  }
}
