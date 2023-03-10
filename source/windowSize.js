window.onload = function() {
  sizing();
}
window.onresize = function(){
  sizing();
}
  
function sizing(){
  let widthChange = _EXAMDATA.designInformation.breakPoint[0];

  if(window.innerWidth >Number(_EXAMDATA.designInformation.breakPoint[0].slice(0,-2))){
    widthChange = _EXAMDATA.designInformation.breakPoint[1];
  }
  else if(window.innerWidth >Number(_EXAMDATA.designInformation.breakPoint[1].slice(0,-2))){
    widthChange = _EXAMDATA.designInformation.breakPoint[2];  
  }
  window.document.body.style.width = widthChange;
  root.style.width = widthChange;
}