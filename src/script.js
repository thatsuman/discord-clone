// // ✅ Working Method 1

// const sideMenu = document.querySelector("#sideMenu");
// const menuBtn = document.querySelector("#menuBtn");
// const closeBtn = document.querySelector("#closeBtn");

// menuBtn.addEventListener("click", function () {
//   sideMenu.style.width = "288px";
// });

// closeBtn.addEventListener("click", function () {
//   sideMenu.style.width = "0";
// });

// -----------------------------------------------------------------

// ✅ Working Method 2: Access element in DOMContentLoaded event listener

document.addEventListener("DOMContentLoaded", () => {
  const sideMenu = document.getElementById("sideMenu");
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");

  console.log(sideMenu); // HTMLButtonElement object

  menuBtn.addEventListener("click", () => {
    console.log(menuBtn);
    sideMenu.style.width = "288px";
  });

  closeBtn.addEventListener("click", () => {
    console.log(closeBtn);
    sideMenu.style.width = "0";
  });
});
