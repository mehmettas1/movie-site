const arrows =document.querySelectorAll(".arrow");
const movieLists =document.querySelectorAll(".movie-list");
console.log(movieLists);


arrows.forEach((arrow,i)=>{
    arrow.addEventListener("click",function(){
       movieLists[i].style.transform=`translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`
    });
})