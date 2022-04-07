const elItem = document.querySelectorAll(".game__item");

let count = 0;
elItem.forEach((item) => {
  item.addEventListener("click", (e) =>{
    e.target.children[1].style.display = "block";
    e.target.children[0].style.display = "none";
    e.target.style.backgroundColor = "#eeaf49";
    count++;
    console.log(count);
    if(count % 2 == 1){
      e.target.children[0].style.display = "block";
      e.target.children[1].style.display = "none";
      e.target.style.backgroundColor = "#dd6859";
    }
    // if(count === 9){
    //   alert("Game over");
    // }
  });
});

