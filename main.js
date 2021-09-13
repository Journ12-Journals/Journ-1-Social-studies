function understand(value){
  var toggle = document.querySelector("#checkbox").disabled;
  if(toggle === "false"){
    console.log("Clicked");
    document.querySelector("#checkbox").disabled = true;}
   else{
     console.log("Clicked");
     document.querySelector("#checkbox").disabled = false;}
function next_page(){
window.location = "article.html";
}
