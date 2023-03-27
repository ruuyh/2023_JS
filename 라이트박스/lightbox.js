// 사진을 클릭했을 때 (이벤트)
// lightbox의 이미지가 클릭한 이미지로 바뀜
// lightbox의 display가 block으로 바뀜
// lightbox 클릭 했을 때 display가 none으로 바뀜 (이벤트)


// 사진을 클릭했을 때 이벤트
// 사진이 여러 개이므로 배열로 가져옴
const pics = document.querySelectorAll(".image-box .pic");
console.log(pics);
const lightbox = document.querySelector("#lightbox");
console.log(lightbox); //현재 html에서는 보이지 않음

// 사진하나에 이벤트를 먼저 확인한 후 반복문으로 추가
for(let i=0; i<pics.length; i++) {
  pics[i].addEventListener("click",showLightbox);
}

// 사진을 클릭했을 때 라이트박스가 보임
function showLightbox(e) { 
  // 이미지 수정
  // data-이름 작성한 값은 dataset을 통해 접근
  let img = e.target.dataset.src;

  // 이미지값을 가져와서 lightbox의 이미지에 추가
  lightbox.firstElementChild.src = img;


  // 라이트박스 보임
  lightbox.style.display = "block";
}

// 라이트박스를 클릭했을 때, 라이트 박스가 없어짐
lightbox.addEventListener("click",function(){
  lightbox.style.display = "none"
})
