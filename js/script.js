
window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
 
    }, 500);
})

//Portfolio item filter

const filterContainer= document.querySelector(".portfolio-filter"),
      filterbtns=filterContainer.children,
      totalFilterBtn=filterbtns.length,
      portofilioItems=document.querySelectorAll(".portfolio-item"),
      totalportofilioItem=portofilioItems.length;
      

for(let i=0; i<totalFilterBtn; i++)
{
   filterbtns[i].addEventListener("click",function(){
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue=this.getAttribute("data-filter");
    for(let k=0; k<totalportofilioItem;k++){
    if(filterValue === portofilioItems[k].getAttribute("data-category"))
    {
        portofilioItems[k].classList.remove("hide");

        portofilioItems[k].classList.add("show");
    }
    else{
        portofilioItems[k].classList.add("hide");
        portofilioItems[k].classList.remove("show");

   }
   if(filterValue === "all")

   {  
             
    portofilioItems[k].classList.remove("hide");
    portofilioItems[k].classList.add("show");

   }
}
    //console.log(filterValue);

   })
}



// Aside Navbar

const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNav=navList.length,
      allSections=document.querySelectorAll(".section"),
      totalSection=allSections.length;

for(let i=0 ; i< totalNav; i++){
    const a=navList[i].querySelector("a");
    a.addEventListener("click", function(){

        // remove back section class
         removebackSectionClass();

        for(let j=0; j<totalNav; j++)
        {

            if(navList[j].querySelector("a").classList.contains("active"))
            {
                        // Add back section class
                        addBackSectionClass(j);

                //allSections[j].classList.add("back-section");
                }
            navList[j].querySelector("a").classList.remove("active");
        }
    this.classList.add("active");

    showSection(this);

    if(window.innerWidth < 1200)
    {
        asideSectionTogglerBtn();
    }


    })

}

function removebackSectionClass(){
    for(let i=0; i<totalSection; i++)
    {
        allSections[i].classList.remove("back-section");
    }
}

function addBackSectionClass(num){
    allSections[num].classList.add("back-section");
}

function showSection(element){
    for(let i=0; i<totalSection; i++)
    {
        allSections[i].classList.remove("active");
    }
    const target= element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}



function updateNav(element){
    for(let i=0; i<totalNav; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target= element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex=this.getAttribute("data-section-inbox");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removebackSectionClass();
    addBackSectionClass(sectionIndex);
})

const navToggleBtn=document.querySelector(".nav-toggler"),
      aside=document.querySelector(".aside");

      navToggleBtn.addEventListener("click",asideSectionTogglerBtn);
      


function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
        allSections[i].classList.toggle("open");
    }
}

