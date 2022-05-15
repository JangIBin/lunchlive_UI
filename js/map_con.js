function halfSize(){
    map1.style.width="50%";
    map1.style.height="100%";
    map2.style.width="50%";
    map2.style.height="100%";
    map1.style.transition=".5s";
    map2.style.transition=".5s";
}
function defaultSize(){
    map1.style.width="100%";
    map1.style.height="100%";
    map2.style.width="0";
    map2.style.height="0";
    div2.style.transition=".5s";
    map1.style.transition=".5s";
    map2.style.transition=".5s";
}