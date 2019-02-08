var windowWidth = $(window).width();
// Coming soon dots
  var dots = 0;

  function type(){
    if(dots < 3){
        $('.comingsoon').append('.');
        dots++;
    } else {
        $('.comingsoon').html('Coming Soon');
        dots = 0;
    }
  };
// End. Coming soon dots

// Logo Parallax
  var logo = document.getElementById('logo');
  var parallax = new Parallax(logo);
// End. Logo Parallax

// Document loadfunction
  $( window ).load(function() {
    // fade loading div when loaded is complete
      $('.loading').addClass('animated fadeOut');
      window.setTimeout(function (){
        $('.loading').hide();
      }, 1000);

    // Draw LogoLine
      $('.logoLine').delay(1250).animate({width:'350px'}, 250);

    // Appear scroll
      $('.scrollHolder').delay(1400).addClass('animated fadeIn').queue(function(){
        $('.scrollHolder').show();
        $(this).dequeue();
      });
  });
// End. Document loadfunction

// Document ready function
  $(document).ready(function(){
    
    // portrait only
        if($('.portraitOnly').is(':visible')){
          $('body').addClass('noScroll');
        } else {
          $('body').removeClass('noScroll');
        }

      $(window).on("orientationchange",function(){
        if($('.portraitOnly').is(':visible')){
          $('body').removeClass('noScroll');
        } else {
          $('body').addClass('noScroll');
          windowWidth = $(window).width();
        }
      });
    // End. portrait only

    // set the parallax divs
      var rellax = new Rellax();

    // Call dots
      setInterval (type, 1000);

    // ====== FUNCTIONS WHEN SECTION IS REACHED ======
      var aboutMeOffset = $('#aboutMe').offset().top - 30;
      var projectsOffset = $('#projects').offset().top - 30;
      var contactOffset = $('#contact').offset().top - 30;

      $(window).on('scroll', function() {
        $(function(){
          var y_scroll_pos = window.pageYOffset;
          // menu class changes
          if(y_scroll_pos >= contactOffset){
            $('.menuHolder').addClass('contactMenu');
            $('.menuHolder').removeClass('aboutMeMenu');
            $('.menuHolder').removeClass('projectsMenu');
            $('.menuHolder .menu .menuLink a').removeClass('menuActive');
            $('.menuHolder .menu .menuLink a#contactMenuButton').addClass('menuActive');
            $('section.contact .contentRight .greenLine').addClass('showLine');
            if(windowWidth >= 1024){
              // About me photo NOT fixed
                $('.photoHolder').removeClass('photoFixed');
                $('.photoElementsHolder').removeClass('photoFixed');
            }
          } else if(y_scroll_pos >= projectsOffset){
            $('.menuHolder').removeClass('aboutMeMenu');
            $('.menuHolder').removeClass('contactMenu');
            $('.menuHolder').addClass('projectsMenu');
            $('.menuHolder .menu .menuLink a').removeClass('menuActive');
            $('.menuHolder .menu .menuLink a#projectsMenuButton').addClass('menuActive');
            $('.projectsHolder .projectLine#line01').addClass('animated fadeIn').delay(100).queue(function(){
              $(this).css('opacity', '1');
              $(this).dequeue();
              $(this).queue(function(){
                $('.projectsHolder .projectLine#line02').addClass('animated fadeIn').delay(100).queue(function(){
                  $(this).css('opacity', '1');
                  $(this).dequeue();
                });
              
              });
            });
              if(windowWidth >= 640){
                // About me photo NOT fixed
                  $('.photoHolder').removeClass('photoFixed');
                  $('.photoElementsHolder').removeClass('photoFixed');
                // load layoutImg when section is reached --- Tablet and Desktop ---
                  $('.projectDetailsSeeMore#ecadeirasDetails .content .layoutImg').css("background-image", "url('./images/projects/screens-ecadeiras.png')");
                  $('.projectDetailsSeeMore#alcacuzDetails .content .layoutImg').css("background-image", "url('./images/projects/screens-alcacuz.png')");
                  $('.projectDetailsSeeMore#menpathDetails .content .layoutImg').css("background-image", "url('./images/projects/screens-menpath.png')");
                  $('.projectDetailsSeeMore#hidrofluxoDetails .content .layoutImg').css("background-image", "url('./images/projects/screens-hidrofluxo.png')");
                  $('.projectDetailsSeeMore#awapeDetails .content .layoutImg').css("background-image", "url('./images/projects/screens-awape.png')");
                  $('.projectDetailsSeeMore#whiplashDetails .content .layoutImg').css("background-image", "url('./images/projects/screens-whiplash.png')");
                // End. load layoutImg when section is reached --- Tablet and Desktop ---
              } else {
                // load layoutImg when section is reached --- Smartphone ---
                  $('.projectDetailsSeeMore#ecadeirasDetails .content .layoutImg').css("background-image", "url('./images/projects/screens-mobile-ecadeiras.png')");
                  $('.projectDetailsSeeMore#alcacuzDetails .content .layoutImg').css("background-image", "url('./images/projects/screens-mobile-alcacuz.png')");
                  $('.projectDetailsSeeMore#menpathDetails .content .layoutImg').css("background-image", "url('./images/projects/screens-mobile-menpath.png')");
                  $('.projectDetailsSeeMore#hidrofluxoDetails .content .layoutImg').css("background-image", "url('./images/projects/screens-mobile-hidrofluxo.png')");
                  $('.projectDetailsSeeMore#awapeDetails .content .layoutImg').css("background-image", "url('./images/projects/screens-mobile-awape.png')");
                  $('.projectDetailsSeeMore#whiplashDetails .content .layoutImg').css("background-image", "url('./images/projects/screens-mobile-whiplash.png')");
                // End. load layoutImg when section is reached --- Smartphone ---
              }
          } else if(y_scroll_pos >= aboutMeOffset){
            $('.menuHolder').removeClass('projectsMenu');
            $('.menuHolder').removeClass('contactMenu');
            $('.menuHolder').addClass('aboutMeMenu');
            $('.menuHolder .menu .menuLink a').removeClass('menuActive');
            $('.menuHolder .menu .menuLink a#aboutMeMenuButton').addClass('menuActive');
            $('section.aboutMe .contentRight .greenLine').addClass('showLine');
            $('.secondaryText .cities').addClass('animated fadeInUp').delay(200).queue(function(){
              $('.secondaryText .graduation').addClass('animated fadeInUp');
              $('.secondaryText .skills').addClass('animated fadeInUp');
              $('.secondaryText .cv').addClass('animated fadeInUp');
              $(this).dequeue();
            });
            // About me photo fixed
              if(windowWidth >= 640){
                $('.photoHolder').addClass('photoFixed');
                $('.photoElementsHolder').addClass('photoFixed');
              }
          } else {
            $('.menuHolder').removeClass('projectsMenu');
            $('.menuHolder').removeClass('aboutMeMenu');
            $('.menuHolder .menu .menuLink a').removeClass('menuActive');
            // About me photo NOT fixed
              if(windowWidth >= 640){
                $('.photoHolder').removeClass('photoFixed');
                $('.photoElementsHolder').removeClass('photoFixed');
              }
          }
        });
      });
    // ====== END. FUNCTIONS WHEN SECTION IS REACHED ======

    // ======= MENU ========
      $(function(){
        //scroll to internal link
        $('nav a[href^="#"]').on('click', function(e) {
          e.preventDefault();
          var id = $(this).attr('href'),
          targetOffset = $(id).offset().top - 15;
          $('html, body').animate({
            scrollTop: targetOffset
          }, 500);        
        });
      });
    // ======= END. MENU ========

    // ======= PROJECTS FUNCTIONS ========
      // see more on each project
        $(function(){
          $('.projectRect').each(function(){
            $(this).hover(function() { // function on hover
              $('.projectSeeMoreHolder', this).addClass('actived');
              $(this).delay(300).queue(function() {
                $('.seeMoreText', this).addClass('actived');
                $('.seeMoreBorder#horBorder', this).addClass('actived');
                $('.seeMoreBorder#verBorder', this).addClass('actived');
                $(this).dequeue();
              });
            }, function() { // function on exit hover
                $('.seeMoreText', this).removeClass('actived');
                $('.seeMoreBorder#horBorder', this).removeClass('actived');
                $('.seeMoreBorder#verBorder', this).removeClass('actived');
              $(this).delay(150).queue(function() {
                $('.projectSeeMoreHolder', this).removeClass('actived');
                $(this).dequeue();
              });
            });
            $(this).click(function(){
            var parentId = $(this).closest('.project').attr('id');
            var projectDetail = $('#'+parentId+'Details');
            projectDetail.addClass('actived');
            $('.projectDetailsClose').show();
            $('.projectDetailsFirula').show();
            });
          });
          // hide Details of projects
            // by clicking on the close button
            $('.projectDetailsClose').click(function(){
              $('.projectDetailsSeeMore').removeClass('actived');
              $(this).hide();
            });
            // by clicking outside the div
            $(document).mouseup(function (e){
              var container = $(".projectDetailsSeeMore");
              if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
              {
                  container.removeClass('actived');
                  $('.projectDetailsClose').hide();
              }
            });
          // End. functions to hide Details of projects
        });
      // End. see more on each project
    // ======= END. PROJECTS FUNCTIONS ========

    // ======= CONTACT FUNCTIONS ========
      // contacts info
        // text from the contact section
          if(windowWidth >= 1024){
            $('section.contact .contentLeft .text .text').html("You can find me on these contacts info below, or just fill the contact form on the side and I’ll reply directly to your e-mail.<span>How does that sound?</span>");
          } else {
            $('section.contact .contentLeft .text .text').html("You can find me on these contacts info below, or just fill the contact form at the bottom of the page and I’ll reply directly to your e-mail. <span>How does that sound?</span>");
          }
        // End. text from the contact section

        // hover on contacts info
          $('li.contact').each(function(){
            $('a', this).hover(function(){
              $(this).closest('li.contact').addClass('actived');
            }, function(){
              $(this).closest('li.contact').removeClass('actived');
            });
          });
        // End. hover on contacts info
      // End. contacts info
        
      // contact form functions

        // Mask on phone input
          $(":input").inputmask({
            showMaskOnHover: false,
            showMaskOnFocus: false
          });
        // End. Mask on phone input

        // Input validations
          $("#contact_form input[required=true], #contact_form textarea[required=true]").each(function(){
            $(this).focusout(function(){
              if(!$.trim($(this).val())){ //if this field is empty 
                $(this).addClass('notFilled');
              } else {
                $(this).removeClass('notFilled');
              }

              //check invalid email
                var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
                if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                  $(this).addClass('notFilled');     
                // } else {
                //   $(this).removeClass('notFilled');
                }
            });
          });
        // End. Input validations

        // click on send button
        $("#submit_btn").click(function() {
          var inputFields = $('#contact_form input[required=true], #contact_form textarea[required=true]');

          var nameLength = $('input#name').val().length;
          var emailLength = $('input#email').val().length;
          var messageLength = $('textarea#message').val().length;
          var requiredFieldsLength = nameLength + emailLength + messageLength;
          if (requiredFieldsLength === 0){
            inputFields.addClass('notFilled');
          }
          if ( !inputFields.hasClass('notFilled') ) {
            //everything looks good! proceed...
            //get input field values data to be sent to server
            
            $('.spinner').show();

              post_data = {
                'user_name'     : $('input[name=personName]').val(), 
                'user_email'    : $('input[name=email]').val(), 
                'phone_number'    : $('input[name=phone2]').val(), 
                'subject'       : $('input[name=subject]').val(), 
                'msg'         : $('textarea[name=message]').val()
              };
              console.log('TCL: post_data', post_data)
                
            //Ajax post data to server
              $.post('/contactMe.php', post_data, function(response){  
								console.log('TCL: response', response)
                if(response.type == 'error'){ //load json data from server and output message     
                  output = '<div class="error"><div class="messageText"><span>Hello '+ post_data['user_name'] +'</span>Really sorry about that...<div class="phrase">Could you try to send the message one more time, please? :(</div></div></div>';
                }else{
                  $('.spinner').hide();
                  output = '<div class="success"><div class="messageText"><span>Hello '+ post_data['user_name'] +',</span>Thank you for your message.<div class="phrase">We will reply to you as soon as possible</div></div></div>';
                  //reset values in all input fields
                  $("#contact_form  input[required=true], #contact_form textarea[required=true]").val(''); 
                  $("#contact_form #contact_body").slideUp(); //hide form after success
                }
                $("#contact_form #contact_results").hide().html(output).slideDown();
              }, 'json');
          } else {
            console.log('error');
            inputFields.addClass('notFilled');
          }
          //reset previously set border colors and hide all message on .keyup()
            $("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function() { 
                $(this).css('border-color',''); 
                $("#result").slideUp();
            });
        });
      // End. click on send button

      // continue highlighted if the input OR textarea is filled
        $('.contact label input').each(function(){
          $(this).focusout(function(){
            inputValue = $(this).val().length;
            if(inputValue > 0){
              $(this).addClass('inputFilled');
            } else{
              $(this).removeClass('inputFilled');
            }
          });
        });

        $('.contact label textarea').each(function(){
          $(this).focusout(function(){
            inputValue = $(this).val().length;
            if(inputValue > 0){
              $(this).addClass('inputFilled');
            } else{
              $(this).removeClass('inputFilled');
            }
          });
        });
      // End. continue highlighted if the input OR textarea is filled

        // Hover and click animations
         // labels
            $('section.contact label').each(function(){
              var thisLabel = $(this);
              $('.label-text', thisLabel).click(function(){
                $('input', thisLabel).focus();
              });
              $('.label-text', thisLabel).hover(function(){
                $('input', thisLabel).addClass('hover');
              }, function(){
                $('input', thisLabel).removeClass('hover');
              });
            });
          // End. labels

          // Textarea
            $('section.contact label#messageField').each(function(){
              $('.label-text', this).click(function(){
                $('section.contact label#messageField textarea').focus();
              });
              $('.label-text', this).hover(function(){
                $('section.contact label#messageField textarea').addClass('hover');
              }, function(){
                $('section.contact label#messageField textarea').removeClass('hover');
              });
            });
          // End. Textarea
        // End. Hover and click animations
      // End. contact form functions
    // ======= END. CONTACT FUNCTIONS ========
  });
// End. Document ready function