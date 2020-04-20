
const fltrBtn={
    all: document.querySelector(".all"),
    dzukou: document.querySelector(".dzukou"),
    sunset: document.querySelector(".sunset"),
}

var elem = document.querySelector('.grid');

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


var iso = new Isotope( elem, {
  itemSelector: '.grid-item',
  stagger: 50,
  transitionDuration: 300,
  percentPosition: true,
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  },
//   masonry: {
//     columnWidth: '.grid-sizer'}
//   layoutMode: 'fitRows',
// layoutMode: 'packery',
  masonry: {
      columnWidth: 100,
      gutter: 0,
    
    }
});


imagesLoaded( elem ).on( 'progress', function() {
    // layout Isotope after each image loads
    iso.layout();
  });

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

var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  iso.arrange({ filter: filterValue });
  var allItems = iso.getItemElements();
  var displayedItems = iso.getFilteredItemElements();
  console.log(displayedItems, allItems);
});

var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

// to assign checked class to selected filter button
function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}
