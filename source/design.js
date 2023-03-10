// window.scrollTo({ left: 0, top: 20});
root.appendChild(title(_EXAMDATA.teamInformation));
let cnt = 0;
let slideBoxTitle = tagCreate("div",{id : "slideBoxTitle"});

root.appendChild(slideBoxTitle);
styleCreate(slideBoxTitle,{
  height : "80px",
  width : "200px",
  marginTop : "40px",
  marginLeft : "10px",
  fontSize : "40px",
  fontWeight : "800",
  padding : "10px",
  display : "flex",
  justfyContent : "center",
  alignItems : "center",
  border : "6px solid #333",
  borderRadius : "6px",
  backgroundColor : "rgb(220, 220, 220)",
});

slideBoxTitle.textContent = "팀원 소개";

let slideWrap = tagCreate("div",{id : "slideWrap"});
root.appendChild(slideWrap);
styleCreate(slideWrap,{
  width : "100%",
  height : "300px",
  overflow : "hidden",
  marginTop : "10px",
  position : "relative",
  transition : "all 1s"
})
root.style.z

let leftButton = tagCreate("div",{id : "leftButton"});
styleCreate(leftButton,{
  position : "absolute",
  width : "50px",
  height : "50px",
  backgroundColor : "black",
  opacity : "0.3",
  borderRadius : "50%",
  top : "41%",
  left : "5px",
  cursor : "pointer",
  display : "flex",
  justifyContent :"center",
  alignItems :"center",
  fontSize : "30px",
  color : "gray",
  zIndex : "1"
})
slideWrap.appendChild(leftButton);
leftButton.textContent = "<";
let rightButton = tagCreate("div",{id : "rightButton"});
styleCreate(rightButton,{
  position : "absolute",
  width : "50px",
  height : "50px",
  backgroundColor : "black",
  opacity : "0.3",
  borderRadius : "50%",
  top : "41%",
  right : "5px",
  cursor : "pointer",
  display : "flex",
  justifyContent :"center",
  alignItems :"center",
  fontSize : "30px",
  color : "gray",
  zIndex : "1"
})
slideWrap.appendChild(rightButton);
rightButton.textContent = ">";

let dotsWrap = tagCreate("div",{id : "dotsWrap"});
slideWrap.appendChild(dotsWrap)
styleCreate(dotsWrap,{
  position : "absolute",
  left : "50%",
  transform : "translateX(-50%)",
  bottom : "10px",
  display : "flex",
  gap : "10px",
  zIndex : "1"

})


for(let slide = 0; slide<5;slide++){
  let dot = document.createElement("div");
  dot.style.width = "13px";
  dot.style.height = "13px";
  dot.style.borderRadius = "13px";
  dot.style.backgroundColor = "black";
  dot.style.opacity = "0.4";
  // dot.style.cursor = "pointer"
  dot.style.transition = "all ease 0.6s"
  
  dotsWrap.appendChild(dot);
}
let dot = dotsWrap.children;

function dotwide(nth){
  for(let indexWidth = 0; indexWidth<dot.length; indexWidth++){
    if(nth === indexWidth){
      dot[indexWidth].style.width = "70px"
    }else{
      dot[indexWidth].style.width = "13px"
    }
  }
};
dotwide(0)

let slideBox = tagCreate("div",{id : "slideBox"});
slideWrap.appendChild(slideBox)
styleCreate(slideBox,{
  width : "100%",
  height : "300px",
  overflow : "hidden",
  position : "relative",
  transition : "all 1s"
})

let scrollTitle = tagCreate("div",{id : "scrollTitle"});
root.appendChild(scrollTitle)
styleCreate(scrollTitle,{
  height : "80px",
  width : "700px",
  marginTop : "5px",
  marginLeft : "10px",
  fontSize : "20px",
  fontWeight : "800",
  padding : "10px",
  display : "flex",
  justfyContent : "center",
  alignItems : "center",
});
scrollTitle.textContent = "[교육 내용이 궁금하다면 마우스의 스크롤을 사용해보세요 ⬇⬆]";

let before = nameCard(_EXAMDATA.teamInformation.teamAllMember[4]);
let now = nameCard(_EXAMDATA.teamInformation.teamAllMember[0]);
let old = nameCard(_EXAMDATA.teamInformation.teamAllMember[1]);

before.style.left = "-100%";
now.style.left = "0%";
old.style.left = "100%";

slideBox.appendChild(before);
slideBox.appendChild(now);
slideBox.appendChild(old);

let slideCnt = 1;

leftButton.addEventListener("click",()=>{
  slideBox.children[0].style.transition = "all ease 1s"
  slideBox.children[1].style.transition = "all ease 1s"
  slideBox.children[2].style.transition = "all ease 1s"
  slideBox.lastChild.remove()
  slideBox.children[0].style.left = "0%";
  slideBox.children[1].style.left = "100%";
  let newOne = nameCard(_EXAMDATA.teamInformation.teamAllMember[slideCnt - 1]);
  newOne.style.left = "-100%";
  slideBox.prepend(newOne);
  
  dotwide(slideCnt);
  slideCnt --;
  slideCnt = Math.abs(slideCnt)%5;

})
rightButton.addEventListener("click",()=>{
  slideBox.children[0].style.transition = "all ease 1s"
  slideBox.children[1].style.transition = "all ease 1s"
  slideBox.children[2].style.transition = "all ease 1s"
  slideBox.firstChild.remove()
  slideBox.children[1].style.left = "0%";
  slideBox.children[0].style.left = "-100%";
  let newOne = nameCard(_EXAMDATA.teamInformation.teamAllMember[slideCnt + 1]);
  newOne.style.left = "100%";
  slideBox.appendChild(newOne);
  dotwide(slideCnt);
  slideCnt ++;
  slideCnt %= 5;
})



setInterval(()=>{
  slideBox.children[0].style.transition = "all ease 1s"
  slideBox.children[1].style.transition = "all ease 1s"
  slideBox.children[2].style.transition = "all ease 1s"
  slideBox.firstChild.remove()
  slideBox.children[0].style.left = "-100%";
  slideBox.children[1].style.left = "0%";
  let newOne = nameCard(_EXAMDATA.teamInformation.teamAllMember[slideCnt]);
  newOne.style.left = "100%";
  slideBox.appendChild(newOne);
  dotwide(slideCnt);
  slideCnt ++;
  slideCnt %= 5;


},7000)

window.addEventListener('scroll', function(){

  if(window.scrollY<19 || window.scrollY>21){
    if(cnt<1540 && window.scrollY - 20 > 0){
      cnt += Math.abs(window.scrollY - 20);
    }else if(cnt>0 && window.scrollY - 20 < 0){
      cnt -= Math.abs(window.scrollY - 20) * 4;
    }
    window.scrollTo({ left: 0, top: 20});
  }
  
  // root.appendChild(subjectWindow(_EXAMDATA.trainingInformation.subject[0]));
  for(let i = 0; i < _EXAMDATA.trainingInformation.subject.length; i ++){
    let oddNum = (i + 1) * 2 - 1;
    if( cnt > 90 * oddNum - 20 && cnt < 90 * oddNum - 10 && root.children.length < 5){
      let subjectBox = subjectWindow(_EXAMDATA.trainingInformation.subject[i]);
      root.appendChild(subjectBox);
      subjectBox.animate([
        {opacity: 0, transform : "translate(0px, -4px)"},
        {opacity: 1, transform : "translate(0px, 0px)"},
      ],600);
    }


    if( cnt > 90 * oddNum + 80 && cnt < 90 * oddNum + 100 && root.children.length > 4){
      root.lastChild.remove();
    }

  }
  console.log(cnt)

}
);