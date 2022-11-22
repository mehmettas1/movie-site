const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
console.log(movieLists);

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
 
  if (imageItem - (4 + clickCounter) >= 0) {
    arrow.addEventListener("click", function () {
      clickCounter++;

      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    });
  }else{
    movieLists[i].style.transform="translateX(0)"
  }
});
