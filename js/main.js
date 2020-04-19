
// import Filterizr from 'filterizr';
//import * as PIXI from 'pixi.js';

//The main render function

const renderEffect = function (){
  let app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
    });
     
    document.body.querySelector(".disp").appendChild(app.view);
  
    let img = new PIXI.Sprite.from("/img/Nohkalikai.jpg");
    console.log(`${location.pathname} img/Nohkalikai.jpg`);
    img.width = window.innerWidth;
    img.height = window.innerHeight;
    app.stage.addChild(img);
  
    let depthMap = new PIXI.Sprite.from("/img/Nohkalikai-map.jpg");
    depthMap.width = window.innerWidth;
    depthMap.height = window.innerHeight;
    app.stage.addChild(depthMap);
  
    let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
    //displacementFilter.resolution=1;
    app.stage.filters = [displacementFilter];
  
    window.onmousemove = function (e) {
      displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 20;
      displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 20;
    };
  }


  // resize handling
  const resizeHandler1 = ()=>{
    console.log(window.innerHeight);
    console.log(window.innerHeight);
  }
 
//initial rendering
window.addEventListener('load', ()=>{

  renderEffect()
  
// const nav=document.getElementById('demo');

// console.log(nav);

// nav.addEventListener('click', () => {
//   let timeline2 = new TimelineMax()
//   console.log('clicked');
//   timeline2
//       .set('.grid', {
//           display: 'grid'
//       })
//       .to('demo', 3, {
//           y: 400,
//           scale: 1.1,
//           ease: Expo.easeInOut
//       })

//     })
    
  
    })


 //resize event 
window.addEventListener('resize', ()=>{
  let can=document.getElementById("disp");
  can.childNodes[0].remove();
  renderEffect();
});


  
  
// resizeHandler() {
  //   this.windowWidth = window.innerWidth;
  //   this.windowHeight = window.innerHeight;
  //   this.width = this.container.offsetWidth;
  //   // this.height = this.width/this.aspect;
  //   this.height = this.container.offsetHeight;
  
  //   this.canvas.width = this.width*this.ratio;
  //   this.canvas.height = this.height*this.ratio;
  //   this.canvas.style.width = this.width + 'px';
  //   this.canvas.style.height = this.height + 'px';
  //   let a1,a2;
  //   if(this.height/this.width<this.imageAspect) {
  //     a1 = 1;
  //     a2 = (this.height/this.width) / this.imageAspect;
  //   } else{
  //     a1 = (this.width/this.height) * this.imageAspect ;
  //     a2 = 1;
  //   }
  //   this.uResolution.set( this.width, this.height, a1, a2 );
  //   this.uRatio.set( 1/this.ratio );
  //   this.uThreshold.set( this.hth, this.vth );
  //   this.gl.viewport( 0, 0, this.width*this.ratio, this.height*this.ratio );
  // }

// resize() {
//   this.resizeHandler();
//   window.addEventListener( 'resize', this.resizeHandler.bind(this) );
// }




//************************************************ */
//WORK PAGE RELATED//


