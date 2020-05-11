$(document).ready(function() {
  // nav //
  function navRun() {
    const navLinks = document.querySelectorAll("#nav-links li");
    $(".nav-links").toggleClass("open");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index /
          7 +
          0.5}s`;
      }
    });
    $(".burgerLine").toggleClass("toggle");
  }
  $(".burger").on("click", function() {
    navRun();
  });

  // scroll smoothly //
  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault();
    navRun();
    let target = this.hash;
    let $target = $(target);

    $("html, body").animate(
      {
        scrollTop: $target.offset().top
      },
      1000
    );
  });

  // animation - DISABLED //
  /*
  let t1 = new TimelineMax();
  const controller = new ScrollMagic.Controller();

  t1.from(".p1", 0.5, {
    opacity: 0,
    scale: 0.7,
    y: 150,
    ease: Power1.easeInout
  });

  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#projects"
  })
    .setTween(t1)
    .addTo(controller);

  let t2 = new TimelineMax();

  t2.from(".p2", 0.5, {
    opacity: 0,
    scale: 0.7,
    y: 150,
    ease: Power4.easeInout
  });

  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".p1"
  })
    .setTween(t2)
    .addTo(controller);

  let about = new TimelineMax();

  about.from(".aboutFrame", .5, {
    opacity: 0,
    scale: 0.7,
    y: 150,
    ease: Power1.easeInout
  });

  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".fas"
  })
    .setTween(about)
    .addTo(controller);

  let nameEmail = new TimelineMax();

  nameEmail.from(".nameEmail", 0.9, {
    opacity: 0,
    x: -150,
    scale: 0.7,
    ease: Power1.easeInout
  });

  const scene4 = new ScrollMagic.Scene({
    triggerElement: ".contactContainer"
  })
    .setTween(nameEmail)
    .addTo(controller);

  let message = new TimelineMax();

  message.from(".yourMessage", 0.9, {
    opacity: 0,
    x: 150,
    ease: Power1.easeInout
  });

  const scene5 = new ScrollMagic.Scene({
    triggerElement: ".contactContainer"
  })
    .setTween(message)
    .addTo(controller);

  let subButton = new TimelineMax();

  subButton.from(".submitButton", 1.2, {
    opacity: 0,
    y: 200,
    ease: Power1.easeInout
  });

  const scene6 = new ScrollMagic.Scene({
    triggerElement: ".contactContainer"
  })
    .setTween(subButton)
    .addTo(controller);
    */
});
