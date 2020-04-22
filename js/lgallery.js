
const lg = document.getElementById('lightgallery');

lightGallery(lg, {

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

lg.addEventListener('onBeforeOpen', function(e){
    // alert('append');
    setTimeout(function(){ 
        const lgOuter =document.querySelector(".lg-outer");
        if(lgOuter){
            console.log(lgOuter);
            lgOuter.classList.remove("lg-thumb-open");
            lg.classlist.add("invisible");
        }
    
    }, 3000);
  }, false);


