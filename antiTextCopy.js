//To Add An alert Message Please Do This
//1. Write a Var With Name 'msg' and Function with Name 'ok'
// let msg = "Your Message";
// function ok(){
//   alert(msg);
// }

//Code Writed By LeeDev

//form tags to omit in NS6+:
var omitformtags=["input", "textarea", "select"]
omitformtags=omitformtags.join("|")
function disableselect(e){
if (omitformtags.indexOf(e.target.tagName.toLowerCase())==-1)
return false
}
function reEnable(){
return true
}
if (typeof document.onselectstart!="undefined")
document.onselectstart=new Function ("return false")
else{
document.onmousedown=disableselect
document.onmouseup=reEnable
}

var message="No Copas ya Dek!";
function ok(){
  alert(message)
}

function clickIE4(){
if (event.button==2){
  ok();
return false;
}
}
function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
  ok();
return false;
}
}
}
if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;
}else if (document.all&&!document.getElementById){
document.onmousedown=clickIE4;
}document.oncontextmenu=new Function("ok();return false")
