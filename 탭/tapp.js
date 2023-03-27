const btnList = document.querySelectorAll(".list .btn");
console.log(btnList);

for(let i=0; i<btnList.length; i++) {
  btnList[i].addEventListener("click",onTap);
}
function onTap(e) {
  e.preventDefault();
  for(let i=0; i<btnList.length; i++) {
    btnList[i].parentNode.classList.remove("on");
  }
    e.target.parentNode.classList.add("on");
    console.log(e.target)
  }