// Into Animation 
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Backend Developer", "Python Developer"],
    typeSpeed: 100,
    Backspeed: 60,
    loop: true
})
// aside 
const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    totalNavList = navlist.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for (let i = 0; i < totalNavList; i++)
    {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if( navlist[j].querySelector("a").classList.contains("active")){
                addBackSection(j);
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(Window.innerWidth<1200){
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection(){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element){
    for(let i=0; i<totalNavList;i++){
        navlist[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
            navlist[i].querySelector("a").classList.add("active");
    }
}

document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionIndex = this.getAttribute("data-section-index")
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex)
})
const navTogglerBtn = document.querySelector(".nav-toggle"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click", ()=>{
        asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn()
      {
        aside.classList.toggle("open");
        navTogglerBtn.classLis.toggle("open");
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
        }
    }

const navTogglerBtn = document.querySelector(".nav-toggle");
navTogglerBtn.addEventListener("click", ()=>{
    document.querySelector(".aside").classList.toggle("open");
});
// window.addEventListener("scroll", ()=>{
//     if(document.querySelector(".aside").classList.contains("open"))
//     {
//         document.querySelector(".aside").classList.remove("open");
//     }
// })


