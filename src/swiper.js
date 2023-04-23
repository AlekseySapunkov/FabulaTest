let mql = window.matchMedia('(max-width: 800px)');
let newSwiper = null;
window.addEventListener('resize', () => {
if (mql.matches && newSwiper === null) {          
    newSwiper = new Swiper('.swiper', {
    grabCursor: true,
    init: true
    });
  } else if(!mql.matches && newSwiper !== null) {
      newSwiper.destroy();
      newSwiper = null;
    }
    return
  })