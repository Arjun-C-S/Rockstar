var myCarousel = document.querySelector('#carouselExampleIndicators')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
  wrap: false
})
function contentChange(val){
    if(val == 1){
        document.getElementById("content-main").innerHTML = "The Criminal Enterprises Now Available";
    }
    else if(val == 2){
        document.getElementById("content-main").innerHTML = "The New Declasse Draugur Out Now";
    }
    else if(val == 3){
        document.getElementById("content-main").innerHTML = "The Criminal Enterprises, Coming July 26";
    }
    else{
        document.getElementById("content-main").innerHTML = "Out Now on PlayStation 5 and Xbox Series X|S";
    }
}

(function(){

    var doc = document.documentElement;
    var w = window;
  
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
  
    var header = document.getElementById('site-header');
  
    var checkScroll = function() {
  
      /*
      ** Find the direction of scroll
      ** 0 - initial, 1 - up, 2 - down
      */
  
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
      
      prevScroll = curScroll;
    };
  
    var toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 52) { 
        
        //replace 52 with the height of your header in px
  
        header.classList.add('hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
      }
    };
    
    window.addEventListener('scroll', checkScroll);
  
  })();