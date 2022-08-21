window.onload = function(){
    declareEvents()
}

function declareEvents(){
let more_Information = document.querySelector("#id_details_show");


if (more_Information != null) {
    more_Information.addEventListener("click", () => {
      let details = document.querySelector("#id_more");
      if(details.classList.contains("d-none")){
        details.classList.remove("d-none");
        more_Information.innerHTML = "Show less.."
        more_Information.style.color = "white"
      }
      else{
        details.classList.add("d-none");
        more_Information.innerHTML = "read more.."
        more_Information.style.color = "white"
      }
    })
  }
}