
const fltrBtn={
    all: document.querySelector(".all"),
    dzukou: document.querySelector(".dzukou"),
    sunset: document.querySelector(".sunset"),
}

var elem = document.querySelector('.grid');
var iso = new Isotope( elem, {
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  masonry: {columnWidth: 100}
});


const fltrBtnHandler= (param)=>{
    const fltr = `.${param}`
    iso.arrange({
    filter: fltr, 
    sortBy: 'number'
  })
  // re-apply filtering, sorting, and layout
  iso.arrange();
}

fltrBtn.all.addEventListener("click", ()=>{
    fltrBtnHandler("all");
})

fltrBtn.dzukou.addEventListener("click", ()=>{
    fltrBtnHandler("dzukou");
})
fltrBtn.sunset.addEventListener("click", ()=>{
    fltrBtnHandler("sunset");
})


