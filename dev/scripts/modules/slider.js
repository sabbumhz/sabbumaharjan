AOS.init({
    once: true,
});

new fullpage('#fullpage', {
    licenseKey:"null",
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['Intro', 'Hello!', 'About-Me', 'Academic-Background', 'Work-Experience','Recent-Works','Academic-Projects'],
    navigationTooltips:['Intro', 'Hello!', 'About Me','Academic Background', 'Work Experience','Recent Works', 'Academic Projects'],

    afterLoad: function(){
        $('.fp-table.active .aos-init').addClass('aos-animate');
    },
});
