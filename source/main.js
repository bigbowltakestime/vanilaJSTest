
let root = document.createElement("div");
window.document.body.appendChild(root);
window.document.body.style.height = "110vh";
window.document.body.style.margin = "auto";


window.document.body.style.display = "flex";
window.document.body.style.justifyContent = "center";

root.style.width = "100%"

function tagCreate(tType,props){
  let element = document.createElement(tType);
  for(let i in props){
    element[i] = props[i];
  }
  return element;
};

function styleCreate(obj,styleOb){
  for(i in styleOb){
    obj.style[i] = styleOb[i];
  }
}

function title(teamInfo){
 let titleWrap = tagCreate("div",{id : "title"});
 styleCreate(titleWrap,{
  width : "100%",
  height : "100px",
  backgroundColor : "rgb(240, 240, 240)",
  border : `10px solid ${_EXAMDATA.designInformation.colorSet[1]}`,
  borderRadius : "20px",
  margin : "auto",
  marginTop : "40px",

  display : "flex",
  flexDirection : "row",
  alignItems : "center",
  justifyContent : "space-between",
  padding : "20px",
  position : "relative",
  color : "black",
  fontSize : "50px",
  fontWeight : "600",
  overflow : "hidden",
  transition : "all 0.6s",
  cursor : "pointer"
  })
  titleWrap.innerHTML = `<p> ${teamInfo["teamName"]} </p>
  <p> 팀장 : ${teamInfo["teamManager"]} [팀명 뜻이 궁금하다면 마우스 커서를 올려주세요]</p>`;
  
  titleWrap.children[1].style.fontSize = "17px";
  let titleslide = tagCreate("div",{id : "titleSlide"});
  styleCreate(titleslide,{
    width : "100%",
    height : "100px",
    backgroundColor : _EXAMDATA.designInformation.colorSet[1],
    border : `10px solid ${_EXAMDATA.designInformation.colorSet[1]}`,
    margin : "auto",
    display : "flex",
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "center",
    gap : "10px",
    padding : "20px",
    position : "absolute",
    color : "white",
    fontSize : "33px",
    fontWeight : "600",
    left : "-0%",
    top : "-100px",
    transition : "all 0.3s"

    })
    titleslide.textContent = teamInfo["teamNameStory"]
    titleWrap.appendChild(titleslide)
    titleWrap.addEventListener("mouseover",()=>{
      titleslide.style.top = "-10px";
    });
    titleWrap.addEventListener("mouseout",()=>{
      titleslide.style.top = "-100px"

    });


  return titleWrap
}


function nameCard(memberInfo){
  let nameCardWrap = document.createElement("div");
  styleCreate(nameCardWrap,{
    width : "100%",
    height : "300px",
    backgroundColor : _EXAMDATA.designInformation.colorSet[2],
    border : `20px solid ${_EXAMDATA.designInformation.colorSet[0]}`,
    borderRadius : "20px",
    margin : "auto",
    // marginTop : "200px",
    position:"absolute",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    gap : "20px",
    padding : "20px"
  })
  nameCardWrap.appendChild(tagCreate("div",{id : "name"}))
  nameCardWrap.appendChild(tagCreate("div",{id : "info"}))
  for(let i of nameCardWrap.children){
    styleCreate(i,{
      width : "90%",
      backgroundColor : "rgb(230, 230, 230)",
      borderRadius : "5px",
      margin : "auto",
      display : "flex",
      flexDirection : "column",
      alignItems : "center",
      justifyContent : "center",
      fontSize : "30px",
      fontWeight : "600",
      gap : "10px"
    })
  }
  nameCardWrap.children[0].style.flex = "1"
  nameCardWrap.children[1].style.flex = "3"
  nameCardWrap.children[0].textContent = memberInfo["name"]
  nameCardWrap.children[1].style.fontSize = "18px"
  nameCardWrap.children[1].innerHTML = `<p> 번호 : ${memberInfo["memberNumber"]} </p>
  <p> 직위 : ${memberInfo["teamPosition"]} </p>
  <p> Github : ${memberInfo["githubAddress"]} </p>`;
  return nameCardWrap
}



function subjectWindow(innerSubject){
  let subjectWrap = tagCreate("div",{id : "subject"});
  styleCreate(subjectWrap,{
    width : "100%",
    height : "100px",
    backgroundColor : "black",
    border : `10px solid black`,
    borderRadius : "20px",
    margin : "auto",
    marginTop : "10px",

    display : "flex",
    flexDirection : "row",
    justifyContent : "center",
    alignItems : "center",
    padding : "20px",
    position : "relative",
    color : "white",
    fontSize : "33px",
    fontWeight : "600",
    overflow : "hidden",
    transition : "all 0.6s"
  })
  subjectWrap.textContent = innerSubject;
  return subjectWrap;
}

