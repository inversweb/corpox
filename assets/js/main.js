(function ($) {
    'use strict';
    let device_width = window.innerWidth;
    gsap.registerPlugin(ScrollTrigger);
    var invJs = {
        m: function (e) {
            invJs.d();
            invJs.methods();
        },

        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },
        
        methods: function (e) {
            invJs.backtotopLeft();
            invJs.autoslidertab();
            invJs.odoMeter();
            invJs.portfoliobounceAnimation();
            invJs.preloader();
            invJs.masonryActivation();
            invJs.wowActivation();
            invJs.headerTopActivation();
            invJs.headerSticky();
            invJs.salActive();
            invJs.magnifyPopup();
            invJs.popupMobileMenu();
            invJs.slickSliderActivation();
            invJs.radialProgress();
            invJs.radialProgressOne();
            invJs.contactForm();
            invJs.menuCurrentLink();
            invJs.counterJumpanimation();
            invJs.tmpImageRevel();
            invJs.gsapAnimationImageScale();
            invJs.scrollingText();
            invJs.fonklsAnimation();
            invJs.animationOnHover();
            invJs.jaraLux();
            invJs.searchOpton();
            invJs.lightBoxJs();
            invJs.imageSlideGsap();
            invJs.preloaderWithBannerActivation();
            invJs.ursorAnimate();
        },

        backtotopLeft: function () {
          jQuery(function ($) {

              var scrollTrigger = 100; // show করার জন্য স্ক্রল ট্রিগার
              var shown = false;

              function backToTopHandler() {
                  var scrollTop = $(window).scrollTop();

                  // Show / Hide elements
                  if (scrollTop > scrollTrigger && !shown) {
                      $('.show-on-scroll').addClass('show').removeClass('hide');
                      shown = true;
                  }
                  if (scrollTop <= scrollTrigger && shown) {
                      $('.show-on-scroll').addClass('hide').removeClass('show');
                      shown = false;
                  }

                  // Scroll progress (max height = 100px)
                  var pageHeight = $(document).height() - $(window).height();
                  var progress = (scrollTop / pageHeight) * 100; // % progress
                  var maxHeight = 100; // px
                  var barHeight = (progress / 100) * maxHeight;

                  $(".scrollbar-v").css("height", barHeight + "px");
              }

              // Scroll to top click (float-text + scrollbar-v)
              $('.float-text a, .scrollbar-v').on('click', function (e) {
                  e.preventDefault();
                  $('html, body').stop(true).animate({ scrollTop: 0 }, 700);
              });

              // Scroll listener
              $(window).on('scroll', backToTopHandler);

          });
        },

        autoslidertab: function () {

          $(document).ready(function(){
            function tabChange() {
              var tabs = $(".nav-tabs.splash-nav-tabs > li");
              var active = tabs.find("a.active");
              var next = active.parent("li").next("li").find("a");
              if (next.length === 0) {
                next = tabs.first().find("a").on("click");
              }
              next.tab("show");
            }
            var tabCycle = setInterval(tabChange, 5000);
          })

          $(document).ready(function(){
            function tabChange() {
                var tabs = $(".progress-tabs-activation .nav-tabs .nav-link");
                var active = $(".progress-tabs-activation .nav-tabs .nav-link.active");
                var next = active.next(".progress-tabs-activation .nav-link");

                // when tab item end it will start form 1st
                if (next.length === 0) {
                    next = tabs.first();
                }

                next.tab("show");
            }

            // Change after 5 second
            var tabCycle = setInterval(tabChange, 5000);



          })


          
        },


        portfoliobounceAnimation: function () {

            if (device_width > 991) {
              let jump_items = document.querySelectorAll(".tmp_jump_animation-wrapper .tmp-jump__item");
              
              if (jump_items.length) {
                gsap.set(jump_items, { opacity: 0, scale: 1.15, rotation: 0 });
                gsap.to(jump_items, {
                  scrollTrigger: {
                    trigger: ".tmp_jump_animation-wrapper .tmp-jump__item",
                    start: "top 95%"
                  },
                  opacity: 1.3,
                  scale: 1,
                  duration: 1,
                  ease: "bounce",
                  stagger: 0.3,
                  rotation: 0
                });
              }
            }

        },

        radialProgressOne: function () {
          function radial_animate() {
            $('svg.radial-progress').each(function (index, value) {

              $(this).find($('circle.bar--animated')).removeAttr('style');
              // Get element in Veiw port
              var elementTop = $(this).offset().top;
              var elementBottom = elementTop + $(this).outerHeight();
              var viewportTop = $(window).scrollTop();
              var viewportBottom = viewportTop + $(window).height();

              if (elementBottom > viewportTop && elementTop < viewportBottom) {
                var percent = $(value).data('countervalue');
                var radius = $(this).find($('circle.bar--animated')).attr('r');
                var circumference = 2 * Math.PI * radius;
                var strokeDashOffset = circumference - ((percent * circumference) / 100);
                $(this).find($('circle.bar--animated')).animate({ 'stroke-dashoffset': strokeDashOffset }, 2800);
              }
            });
          }
          // To check If it is in Viewport 
          var $window = $(window);
          function check_if_in_view() {
            $('.countervalue').each(function () {
              if ($(this).hasClass('start')) {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();

                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();

                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                  $(this).removeClass('start');
                  $('.countervalue').text();
                  var myNumbers = $(this).text();
                  if (myNumbers == Math.floor(myNumbers)) {
                    $(this).animate({
                      Counter: $(this).text()
                    }, {
                      duration: 2800,
                      easing: 'swing',
                      step: function (now) {
                        $(this).text(Math.ceil(now) + '%');
                      }
                    });
                  } else {
                    $(this).animate({
                      Counter: $(this).text()
                    }, {
                      duration: 2800,
                      easing: 'swing',
                      step: function (now) {
                        $(this).text(now.toFixed(2) + '$');
                      }
                    });
                  }

                  radial_animate();
                }
              }
            });
          }

          $window.on('scroll', check_if_in_view);
          $window.on('load', check_if_in_view);

        },

        preloader: function () {

          var preload = document.querySelector('#inverweb-load');

          if (preload) {
            var maxTimeout = setTimeout(function () {
              preload.classList.add("loaded"); // max 3 sec por off
            }, 2500);

            window.addEventListener('load', function () {
              clearTimeout(maxTimeout); // max timeout cancel
              preload.classList.add("loaded"); // joto fast load hoy turant off
            });
          }

        },
        
        masonryActivation: function() {
          // Run other animations immediately
          this.initOtherAnimations();
          
          // Wait for window load only for Isotope
          $(window).on('load', function() {
            $('.masonary-wrapper-activation').imagesLoaded(function() {
              var $grid = $('.mesonry-list').isotope({
                percentPosition: true,
                transitionDuration: '0.7s',
                layoutMode: 'masonry',
                masonry: {
                  columnWidth: '.resizer',
                }
              });

              $('.messonry-button').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $(this).siblings('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                $grid.isotope({ filter: filterValue });
              });
              
              // Refresh ScrollTrigger after Isotope
              ScrollTrigger.refresh();
            });
          });
        },

        initOtherAnimations: function() {
          // Initialize all other animations that don't depend
          invJs.wowActivation();
          // all other animations except masonry
        },

        menuCurrentLink: function () {
            var currentPage = location.pathname.split("/"),
            current = currentPage[currentPage.length-1];
            $('.mainmenu li a').each(function(){
                var $this = $(this);
                if($this.attr('href') === current){
                    $this.addClass('active');
                    $this.parents('.has-menu-child-item').addClass('menu-item-open')
                }
            });
        },


        magnifyPopup: function () {
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        },


        popupMobileMenu: function (e) {
          // Open menu
          $('.hamberger-button').on('click', function (e) {
              $('.popup-mobile-menu').addClass('active');
          });

          // Close menu
          $('.close-menu').on('click', function (e) {
              $('.popup-mobile-menu').removeClass('active');
              $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a, .popup-mobile-menu .mainmenu .has-third-lev > a')
                  .siblings('.submenu, .tmp-megamenu')
                  .removeClass('active')
                  .slideUp(400);
              $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a, .popup-mobile-menu .mainmenu .has-third-lev > a')
                  .removeClass('open');
          });

          // Dropdown toggle (2nd + 3rd level)
          $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a, .popup-mobile-menu .mainmenu .has-third-lev > a')
              .on('click', function (e) {
                  e.preventDefault();
                  $(this).siblings('.submenu, .tmp-megamenu')
                      .toggleClass('active')
                      .slideToggle(400);
                  $(this).toggleClass('open');
          });

          // Close when clicking outside or on onepage nav link
          $('.popup-mobile-menu, .popup-mobile-menu .mainmenu.onepagenav li a').on('click', function (e) {
              if (e.target === this) {
                  $('.popup-mobile-menu').removeClass('active');
                  $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a, .popup-mobile-menu .mainmenu .has-third-lev > a')
                      .siblings('.submenu, .tmp-megamenu')
                      .removeClass('active')
                      .slideUp(400);
                  $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a, .popup-mobile-menu .mainmenu .has-third-lev > a')
                      .removeClass('open');
              }
          });

        },
        

        slickSliderActivation: function () {
            $('.testimonial-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                fade: true,
                autoplaySpeed: 2000,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            });

            $('.testimonial-activation-2').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

            $('.slider-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                fade: true,
                autoplaySpeed: 2000,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            });

            $('.slider-activation-2').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                fade: true,
                autoplay: true, 
                autoplaySpeed: 3000,
                pauseOnHover: false,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            });

            $('.tmp-banner-right-carousel').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                adaptiveHeight: true,
                cssEase: 'linear',
                fade: true,
                autoplay: true, 
                autoplaySpeed: 3000,
            });

            $('.brand-carousel-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 1199,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                  ]
            });

            $('.inner-demo-carousel-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                adaptiveHeight: true,
                autoplay: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 1199,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                  ]
            });

        },

        salActive: function () {
            sal({
                threshold: 0.01,
                once: true,
            });
        },

        headerSticky: function () {
          // 🔹 Global Sticky Header for all headers
          $(window).scroll(function () {
              if ($(this).scrollTop() > 250) {
                  $('.header-sticky').addClass('sticky');
              } else {
                  $('.header-sticky').removeClass('sticky');
              }
          });

          // 🔹 Extra Padding Only for header-top-padding header
          $(window).scroll(function () {
              var $header = $('.header-sticky.header-sticky-smooth');

              if ($header.length) {
                  if ($(this).scrollTop() > 250) {
                      var headerHeight = $header.outerHeight();
                      $('body').css('padding-top', headerHeight + 'px');
                  } else {
                      $('body').css('padding-top', '0');
                  }
              }
          });

        },


        wowActivation: function () {
            new WOW().init();
        },

        headerTopActivation: function () {
            $('.bgsection-activation').on('click', function () {
                $('.header-top-news').addClass('deactive')
            })
        },

        radialProgress: function () {
            $('.radial-progress').waypoint(function () {
                $('.radial-progress').easyPieChart({
                    lineWidth: 20,
                    scaleLength: 0,
                    rotate: 0,
                    trackColor: false,
                    lineCap: 'round',
                    size: 220
                });
            }, {
                triggerOnce: true,
                offset: 'bottom-in-view'
            });
        },

        contactForm: function () {
            $('.tmp-dynamic-form').on('submit', function (e) {
				e.preventDefault();
				var _self = $(this);
				var __selector = _self.closest('input,textarea');
				_self.closest('div').find('input,textarea').removeAttr('style');
				_self.find('.error-msg').remove();
				_self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
				var data = $(this).serialize();
				$.ajax({
					url: 'mail.php',
					type: "post",
					dataType: 'json',
					data: data,
					success: function (data) {
						_self.closest('div').find('button[type="submit"]').removeAttr('disabled');
						if (data.code == false) {
							_self.closest('div').find('[name="' + data.field + '"]');
							_self.find('.tmp-btn').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
						} else {
							$('.error-msg').hide();
							$('.form-group').removeClass('focused');
							_self.find('.tmp-btn').after('<div class="success-msg"><p>' + data.success + '</p></div>');
							_self.closest('div').find('input,textarea').val('');

							setTimeout(function () {
								$('.success-msg').fadeOut('slow');
							}, 5000);
						}
					}
				});
			});
        },

        counterJumpanimation: function () {
           gsap.registerPlugin(ScrollTrigger);

          let counters = document.querySelectorAll('.counter_animation .counter__anim');

          if (counters.length) {
              gsap.set(counters, {
                  y: -100,
                  opacity: 0,
              });

              if (device_width < 1023) {
                  const counterArray = gsap.utils.toArray(counters);
                  counterArray.forEach((item) => {
                      let counterTl = gsap.timeline({
                          scrollTrigger: {
                              trigger: item,
                              start: 'top center+=200',
                          }
                      });
                      counterTl.to(item, {
                          y: 0,
                          opacity: 1,
                          ease: 'bounce',
                          duration: 1.5,
                      });
                  });
              } else {
                  gsap.to(counters, {
                      scrollTrigger: {
                          trigger: '.counter_animation',
                          start: 'top center+=300',
                      },
                      y: 0,
                      opacity: 1,
                      ease: 'bounce',
                      duration: 1.5,
                      stagger: {
                          each: 0.3,
                      }
                  });
              }
          }

      
        },

        tmpImageRevel: function (){
            $(document).ready(function () {
                gsap.registerPlugin(ScrollTrigger);
        
                let revealContainers = document.querySelectorAll('.tmp-reveal-one');
        
                revealContainers.forEach((container) => {
                  let image = container.querySelector('.tmp-reveal-image-one');
                  let rts = gsap.timeline({
                    scrollTrigger: {
                      trigger: container,
                      toggleActions: 'restart none none reset',
                      start: 'top 90%',
                      end: 'top 0%',
                    }
                  });
        
                  rts.set(container, {
                    autoAlpha: 1
                  });
                  rts.from(container, 1.5, {
                    xPercent: -100,
                    ease: Power2.out
                  });
                  rts.from(image, 1.5, {
                    xPercent: 100,
                    scale: 1.3,
                    delay: -1.5,
                    ease: Power2.out
                  });
                });
              });
        },

        gsapAnimationImageScale: function (e) {
            $(document).ready(function () {
              let growActive = document.getElementsByClassName('grow-thumbnail');
              if (growActive.length) {
                const growTmp = gsap.timeline({
                  scrollTrigger: {
                    trigger: '.grow-thumbnail',
                    scrub: 1,
                    start: 'top center',
                    end: '+=1000',
                    ease: 'power1.out'
                  }
                });
                growTmp.to('.grow-thumbnail', {
                  duration: 1,
                  scaleX: 1.3
                });
              }
            });
            $(document).ready(function () {
              let growActive = document.getElementsByClassName('grow-thumbnail-1-overlay');
              if (growActive.length) {
                const growTmp = gsap.timeline({
                  scrollTrigger: {
                    trigger: '.grow-thumbnail-1-overlay',
                    scrub: 1,
                    start: 'top 65%',
                    end: '+=300',
                    ease: 'power1.out'
                  }
                });
                growTmp.to('.grow-thumbnail-1-overlay', {
                  duration: 1,
                  scaleX: 0
                });
              }
            });
        },

        scrollingText: function(){
            $(document).ready(function () {
                let scrollingTextTwo = document.getElementsByClassName('scrollingtext-1');
                if (scrollingTextTwo.length) {
                  gsap.registerPlugin(ScrollTrigger);
                  let tl2 = gsap.timeline();
                  tl2.to('.scrollingtext-1', {
                    x: 1000,
                    duration: 10,
                    repeat: -1,
                    ease: 'linear'
                  })
                  let tl = gsap.timeline();
                  tl.to('.scrollingtext-1', {
                    xPercent: 5,
                    scrollTrigger: {
                      trigger: '.scrollingtext-1',
                      scrub: 1
                    }
                  })
                }
            });
        },

        fonklsAnimation: function () {
          let end_animation = document.getElementsByClassName('end');
          if (end_animation.length) {
            let endTl = gsap.timeline({
                repeat: -1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: '.end',
                    start: 'bottom 100%-=30px'
                }
            });
            gsap.set('.end', {
                opacity: 0
            });
            gsap.to('.end', {
                opacity: .1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.end',
                    start: 'bottom 100%-=50px',
                    once: true
                }
            });
            let mySplitText = new SplitText('.end', {
                type: 'words,chars'
            });
            let chars = mySplitText.chars;
            endTl.to(chars, {
                duration: 0.5,
                scaleY: 0.9,
                ease: 'power3.out',
                stagger: 0.04,
                transformOrigin: 'center bottom'
            });
            endTl.to(chars, {
                yPercent: -10,
                ease: 'elastic',
                stagger: 0.03,
                duration: 0.8
            }, 0.5);
            endTl.to(chars, {
                scaleY: 1,
                ease: 'elastic.out(2.5, 0.2)',
                stagger: 0.03,
                duration: 1.5
            }, 0.5);
            endTl.to(chars, {
                ease: 'power2.out',
                stagger: 0.03,
                duration: 0.3
            }, 0.5);
            endTl.to(chars, {
                yPercent: 0,
                ease: 'back',
                stagger: 0.03,
                duration: 0.8
            }, 0.7);
            endTl.to(chars, {
                duration: 1.4,
                stagger: 0.05
            });
          }


        },

        animationOnHover: function () {
          let cards = document.querySelectorAll('.tmponhover');
          cards.forEach((tmpOnHover) => {
            tmpOnHover.onmousemove = function (e) {
              let rect = tmpOnHover.getBoundingClientRect();
              let x = e.clientX - rect.left; // element এর ভিতরে X position
              let y = e.clientY - rect.top;  // element এর ভিতরে Y position
              tmpOnHover.style.setProperty('--x', `${x}px`);
              tmpOnHover.style.setProperty('--y', `${y}px`);
            };
          });
        },

        jaraLux: function (e) {
            $(document).ready(function () {
              // Function to detect if the device is mobile
              function isMobileDevice() {
                return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
              }
      
              // Initialize jarallax only if it's not a mobile device
              if (!isMobileDevice()) {
                $('.jarallax').jarallax();
              } else {
                console.log('Jarallax skipped on mobile devices');
              }
            });
      
        },

        searchOpton:function(){
            $(document).on('click', '#search', function () {
              $(".tmp-search-input-area").addClass("show");
              $("#anywhere-home").addClass("bgshow");
            });
            $(document).on('click', '#close', function () {
              $(".tmp-search-input-area").removeClass("show");
              $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '#anywhere-home', function () {
              $(".tmp-search-input-area").removeClass("show");
              $("#anywhere-home").removeClass("bgshow");
            });
        },

        lightBoxJs: function () {
            lightGallery(document.getElementById('animated-lightbox'), {
                thumbnail: true,
                animateThumb: false,
                showThumbByDefault: false,
                cssEasing: 'linear'
            });

            lightGallery(document.getElementById('animated-lightbox2'), {
                thumbnail: true,
                animateThumb: false,
                showThumbByDefault: false,
                cssEasing: 'linear'
            });

            lightGallery(document.getElementById('animated-lightbox3'), {
                thumbnail: true,
                animateThumb: false,
                showThumbByDefault: false,
                cssEasing: 'linear'
            });
        },

        imageSlideGsap: function () {
            $(document).ready(function () {
              let image_leftright = document.querySelectorAll('.images-left-right-float');
              if (image_leftright.length) {
                gsap.fromTo(
                  ".images-left-right-float",
                  { transform: "translate(0, 0px)" }, // Start position
                  {
                    transform: "translate(-150px, 0px)", // End position
                    scrollTrigger: {
                      start: "top bottom", 
                      end: "bottom top",  
                      scrub: 2,            

                    },
                    ease: "none", // No easing for linear scrolling effect
                  }
                );
              }
             
            });

            
            $(document).ready(function(){
              let image_r = document.querySelectorAll('.images-r');
              if (image_r.length) {
                gsap.to(".images-r", {
                  scrollTrigger:{
                    // trigger: ".images",
                    start: "top bottom", 
                    end: "bottom top", 
                    scrub: 1,
                    // markers: true
                  },
                  x: -150,
                })
              }
          
            });
            $(document).ready(function(){
              let images_2 = document.querySelectorAll('.images-r');
              if (images_2.length) {
                gsap.to(".images-2", {
                  scrollTrigger:{
                    // trigger: ".images",
                    start: "top bottom", 
                    end: "bottom top", 
                    scrub: 1,
                    // markers: true
                  },
                  y: -290,
                })
              }
            
            });
        },

        preloaderWithBannerActivation: function () {



          if ($(".tmp-title-split").length) {
            let staggerAmount = 0.03,
              translateXValue = 20,
              delayValue = 0.1,
              easeType = "power2.out",
              animatedTextElements = document.querySelectorAll(".tmp-title-split");

            animatedTextElements.forEach(element => {
              let animationSplitText = new SplitText(element, { type: "chars, words" });
              gsap.from(animationSplitText.chars, {
                duration: 1,
                delay: delayValue,
                x: translateXValue,
                autoAlpha: 0,
                stagger: staggerAmount,
                ease: easeType,
                scrollTrigger: { trigger: element, start: "top 85%" },
              });
            });
          }
      
        },

        
        odoMeter: function () {
          $(document).ready(function () {
            function isInViewport(element) {
              const rect = element.getBoundingClientRect();
              return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
              );
            }

            function triggerOdometer(element) {
              const $element = $(element);
              if (!$element.hasClass('odometer-triggered')) {
                const countNumber = $element.attr('data-count');
                $element.html(countNumber);
                $element.addClass('odometer-triggered'); // Add a class to prevent re-triggering
              }
            }

            function handleOdometer() {
              $('.odometer').each(function () {
                if (isInViewport(this)) {
                  triggerOdometer(this);
                }
              });
            }

            // Check on page load
            handleOdometer();

            // Check on scroll
            $(window).on('scroll', function () {
              handleOdometer();
            });
          });
        },

        ursorAnimate: function () {
            var myCursor = $('.mouse-cursor');
            if (myCursor.length) {
                if ($('body')) {
                    const e = document.querySelector('.cursor-inner'),
                        t = document.querySelector('.cursor-outer');
                    let n, i = 0,
                        o = !1;
                    window.onmousemove = function (s) {
                        o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
                    }, $('body').on("mouseenter", "a, .cursor-pointer", function () {
                        e.classList.add('cursor-hover'), t.classList.add('cursor-hover')
                    }), $('body').on("mouseleave", "a, .cursor-pointer", function () {
                        $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove('cursor-hover'), t.classList.remove('cursor-hover'))
                    }), e.style.visibility = "visible", t.style.visibility = "visible"
                }
            }
        },




    }

    invJs.m();

})(jQuery, window)


