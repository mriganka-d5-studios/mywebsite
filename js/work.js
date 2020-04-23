// const fltrBtn = {
//   all: document.querySelector(".all"),
//   dzukou: document.querySelector(".dzukou"),
//   sunset: document.querySelector(".sunset"),
// };

//my workaround
// iso.arrange({ filter: '.sunset' });

//my initial code to handle button click

// const fltrBtnHandler= (param)=>{
//     const fltr = `.${param}`
//     iso.arrange({
//     filter: fltr,
//     sortBy: 'number'
//   })
//   // re-apply filtering, sorting, and layout
//   iso.arrange();
// }

// fltrBtn.all.addEventListener("click", ()=>{
//     fltrBtnHandler("all");
// })

// fltrBtn.dzukou.addEventListener("click", ()=>{
//     fltrBtnHandler("dzukou");
// })
// fltrBtn.sunset.addEventListener("click", ()=>{
//     fltrBtnHandler("sunset");
// })

// in case layout to be refreshed after all the images are loaded
// imagesLoaded( elem, function() {
//     // init Isotope after all images have loaded
//     iso = new Isotope( elem, {
//       itemSelector: '.grid-item',
//       percentPosition: true,
//       masonry: {
//         columnWidth: 100
//       }
//     });
//   });

// addTransitionToGridItems();

// var allItems = iso.getItemElements();
// var displayedItems = iso.getFilteredItemElements();
// // console.log(displayedItems, allItems);

//Set State variable===========================================
const state = {
  layoutCompleted: false,
  defaultFilter: ".dzukou",
  images: [
    // {imgId: "001", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/1thumb.jpg", src: "/img/1.jpg", filterTags: "grid-item dzukou", desc:" White Flowers"},
    // {imgId: "002", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/2thumb.jpg", src: "/img/2.jpg", filterTags: "grid-item sunset", desc:"Brahmaputra Bank"}, 
    {imgId: "001", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/1thumb.jpg", src: "/img/1.jpg", filterTags: "grid-item dzukou", desc:" White Flowers"},
    {imgId: "002", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/2thumb.jpg", src: "/img/2.jpg", filterTags: "grid-item sunset", desc:"Brahmaputra Bank"}, 
    {imgId: "003", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/3thumb.jpg", src: "/img/3.jpg", filterTags: "grid-item sunset", desc:"Phea Phea"}, 
    {imgId: "004", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/4thumb.jpg", src: "/img/4.jpg", filterTags: "grid-item dzukou", desc:"River side"}, 
    {imgId: "005", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/5thumb.jpg", src: "/img/5.jpg", filterTags: "grid-item sunset", desc:"Umiam"}, 
    {imgId: "006", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/6thumb.jpg", src: "/img/6.jpg", filterTags: "grid-item dzukou", desc:"Chandubi"}, 
    {imgId: "007", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/7thumb.jpg", src: "/img/7.jpg", filterTags: "grid-item dzukou", desc:"Chandubi"}, 
    {imgId: "008", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/8thumb.jpg", src: "/img/8.jpg", filterTags: "grid-item dzukou", desc:"Menchuka"}, 
    {imgId: "009", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/9thumb.jpg", src: "/img/9.jpg", filterTags: "grid-item dzukou", desc:"Dainthelan"}, 
    {imgId: "010", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/10thumb.jpg", src: "/img/10.jpg", filterTags: "grid-item sunset", desc:"Ghost Ship"}, 
    {imgId: "011", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/11thumb.jpg", src: "/img/11.jpg", filterTags: "grid-item dzukou", desc:"Baby"}, 
    {imgId: "012", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/12thumb.jpg", src: "/img/12.jpg", filterTags: "grid-item dzukou", desc:"Home Minister"}, 
    {imgId: "013", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/13thumb.jpg", src: "/img/13.jpg", filterTags: "grid-item dzukou", desc:"Bihu"}, 
    {imgId: "014", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/14thumb.jpg", src: "/img/14.jpg", filterTags: "grid-item sunset", desc:"Dhuakhua"}, 
    {imgId: "015", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/15thumb.jpg", src: "/img/15.jpg", filterTags: "grid-item dzukou", desc:"Work"}, 
    {imgId: "016", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/16thumb.jpg", src: "/img/16.jpg", filterTags: "grid-item dzukou", desc:"Panikhaiti"}, 
    {imgId: "017", isInFiltered: 0, alt: "a moment captured!", thumbSrc: "/img/17thumb.jpg", src: "/img/17.jpg", filterTags: "grid-item sunset", desc:"Umiam"}, 
    
  ],  
  domElements: {
    gridContainer: document.querySelector(".grid"),
    lg: document.getElementById('dynamic'),
    btnGrp: document.querySelector(".button-group"),
  },
};

//add items to DOM============================================
const addImagesToDOM = () => {
  state.images.forEach((image) => {
    const markup = `<div id="${image.imgId}" class="${image.filterTags}"><img src="${image.src}" 
                    alt="${image.alt}"></div>`;
    state.domElements.gridContainer.insertAdjacentHTML("beforeend", markup);
  });
  console.log("dom added");
};
addImagesToDOM();

//click event in photos to initialise the lightbox=========================

state.domElements.gridContainer.addEventListener("click", (event) => {
  const initImageId = event.path[1].getAttribute("id");
  let initImageIndex = 0;
  let dynmcMarkup = []  ;
  let ind = -1;

  state.images.forEach(image => {
      if(image.isInFiltered===1){
        const mkup={"src":image.src, 'thumb': image.src, 'subHtml': `<h4>${image.alt}</h4><p>${image.desc}</p>`};
        dynmcMarkup.push(mkup);
        ind= ind+1 ;
        if (image.imgId===initImageId) {initImageIndex = ind} ;            
      }     

  });
  
  state.domElements.lg.removeAttribute("lg-uid");
  
  lightGallery(state.domElements.lg, {
      dynamic: true,
      dynamicEl: dynmcMarkup,
      index: initImageIndex,

      mode:'lg-zoom-out-in',
      download: false,
      hideBarsDelay:1000,
  
      thumbnail:true,
      thumbMargin:10,
      fullScreen:true,
      autoplay:false,
      zoom:true,
      share:true,
      googlePlus:false,
  });

});

//hide the thumbnails after 3 sec, also hide the grid to avoid scrollbar on right==============
state.domElements.lg.addEventListener('onBeforeOpen', function(e){
 
  state.domElements.gridContainer.style.display="none";
  state.domElements.btnGrp.style.display="none";
  setTimeout(function(){ 
      const lgOuter =document.querySelector(".lg-outer");
      if(lgOuter){
          console.log(lgOuter);
          lgOuter.classList.remove("lg-thumb-open");
      }
  }, 3000);
}, false);

//when lightbox closes, making grid visible================================
state.domElements.lg.addEventListener('onBeforeClose', function(e){
           state.domElements.gridContainer.style.removeProperty("display");
           state.domElements.btnGrp.style.removeProperty("display");
 }, false);

//initiate Isotope ===========================================
var iso = new Isotope(state.domElements.gridContainer, {
  itemSelector: ".grid-item",
  stagger: 60,
  transitionDuration: 400,
  percentPosition: true,
  hiddenStyle: {
    opacity: 0,
    transform: "scale(0.001)",
  },
  visibleStyle: {
    opacity: 1,
    transform: "scale(1)",
  },
  masonry: {
    columnWidth: 100,
    gutter: 0,
  },
});

//progressive layout during initial image loads=========================
imagesLoaded(state.domElements.gridContainer).on("progress", function () {
  // layout Isotope after each image loads
  iso.layout();
  console.log("imageloaded.on progress fired!");
});

//add transition class when the arrngement is completed====================
//also update images obj in state for inFiltered

iso.on("arrangeComplete", function (filteredItems) {
  
  console.log("4 on arrangecomplete fired and adding class");

  state.images.forEach((image) => {
    image.isInFiltered = 0;
  })

    filteredItems.forEach((filteredItem) => {
      filteredItem.element.classList.add("transition-griditem");

      const filteredItemID = filteredItem.element.getAttribute("id");

      const indItem = state.images.findIndex((image) => {
        return image.imgId === filteredItemID;
      });

      state.images[indItem].isInFiltered=1;
      // console.log(indItem);
    })

  console.log(state.images);
  console.log(filteredItems);
  console.log("5 classes added and state.images updated");

  state.layoutCompleted = true;
  console.log("6 on arrangecomplete completed and state set to true");
});



//filter items and rearrange on button click===============================
var filtersElem = document.querySelector(".filters-button-group");
filtersElem.addEventListener("click", function (event) {
  console.log("0 clicked....................................");
  console.log(state.layoutCompleted);
  // only work with buttons
  if (state.layoutCompleted) {
    if (!matchesSelector(event.target, "button")) {
      return;
    }
    state.layoutCompleted = false;
    console.log("1 state set to false and about to initiate iso.arrange... ");
    var tranGridItems = document.querySelectorAll(".transition-griditem");
    tranGridItems.forEach((element) => {
      element.classList.remove("transition-griditem");
    });
    console.log("2 transition-griditem class removed");

    var filterValue = event.target.getAttribute("data-filter");
    iso.arrange({ filter: filterValue });
    console.log("3 iso.arrange fired!");
  }
});

//add is-checked class to present filter tag button=========================
var buttonGroups = document.querySelectorAll(".button-group");
for (var i = 0, len = buttonGroups.length; i < len; i++) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
  buttonGroup.addEventListener("click", function (event) {
    // only work with buttons
    if (!matchesSelector(event.target, "button")) {
      return;
    }
    buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
    event.target.classList.add("is-checked");
  });
}

//initialieing....============================================
window.addEventListener("load", (event) => {
  iso.arrange({ filter: `${state.defaultFilter}` });
  console.log("iso.arrange dzukou");
});
