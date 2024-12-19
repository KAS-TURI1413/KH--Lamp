const btnE1=document.querySelector(".btn")

btnE1.addEventListener("mouseover" (e)=>){
    //console.log(e.pageX ,e.pageY)
    //console.log(btnE1.offsetLeft,btnE1.offsetTop)
    const X = e.pageX-btnE1.offsetLeft;
    const Y = e.pageY-btnE1.offsetTop;

    btnE1.computedStyleMap.setProperty("--posX",X=+"px")
    btnE1.setAttribute.setProperty("--posY",Y=+"px")

}
