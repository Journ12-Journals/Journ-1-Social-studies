
function understand(value){
  if(document.getElementById("checkbox").disabled === false){
        document.getElementById("checkbox").disabled = "true";
  }
  if(document.getElementById("checkbox").disabled === true){
    document.getElementById("checkbox").disabled = "false";
  }

function understand(){
  var able = document.getElementById("checkbox").disabled;
  console.log(able)
}
function next_page(){
window.location = "article.html";
}
