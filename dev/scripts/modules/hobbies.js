// scroller by flickity
import Flickity from 'flickity';

class Flick {
  constructor() {
    this.sectionFlick();
    this.resizeEvents();
  }

  destroyFlick(elm) {
    var destroyFlick = new Flickity(elm);
    destroyFlick.destroy();
  }

  sectionFlick() {
    var galleryElems = document.querySelectorAll('.flickyJs');
    for (var i = 0, len = galleryElems.length; i < len; i++) {
      var galleryElem = galleryElems[i];
      this.destroyFlick(galleryElem);
      var flickity = new Flickity(galleryElem, {
        // options
        groupCells: 'true',
        pageDots: false,
        cellAlign: 'left',
        buttons: false,
        freeScroll: true,
        contain: true
      });
    }

  }

  resizeEvents() {
    $(window).on('resize', () => {
      this.sectionFlick();
    });
  }
}

export default Flick;
new Flick();