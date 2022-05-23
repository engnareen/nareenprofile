
const links= document.querySelectorAll(".alternate-style"),
    totalLinks = links.length;

function setActiveStyle(color){
for(let i=0 ; i< totalLinks; i++)
{
    if(color === links[i].getAttribute("title"))
    {
        links[i].removeAttribute("disabled");
    }
    else{
        links[i].setAttribute("disabled","true");

    }
}
}


// languages
const lang= document.querySelectorAll(".arabic-style")

for(let i=0 ; i< lang.length; i++)
{
    lang[i].addEventListener("change", function(){
        if(this.value === "ar"){
            document.body.className="ar";
        }
        else{
            document.body.className="eng";

        }
      })

}

// body skin
const bodySkin= document.querySelectorAll(".body-skin"),
      totalbodySkin = bodySkin.length;
      for(let i=0 ; i< totalbodySkin; i++)
      {
          bodySkin[i].addEventListener("change", function(){
            if(this.value === "dark"){
                document.body.className="dark";
            }
            else{
                document.body.className="light";

            }
          })
      }



document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
document.querySelector(".style-switcher").classList.toggle("open");

})