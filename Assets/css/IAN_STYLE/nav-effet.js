

            // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
            window.onscroll = function() {scrollFunction()};

            function scrollFunction() {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    document.getElementById("navbar").style.padding = "30px 10px";
                    document.getElementById("logo").style.fontSize = "25px";
                } else {
                    document.getElementById("navbar").style.padding = "80px 10px";
                    document.getElementById("logo").style.fontSize = "35px";
                }
                
            }// END OF NAVBAR ANIMATION_________________________________________________________________
            
            // ______________________________________SLIDE EFFECT_______________________________________
            window.onpageshow = function() {IAN()};
            function IAN() {
                $(document).ready(function(){
                    $('[data-toggle="popover"]').popover();  
                    // Add smooth scrolling to all links in navbar + footer link
                    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
                      // Make sure this.hash has a value before overriding default behavior
                      if (this.hash !== "") {
                        // Prevent default anchor click behavior
                        event.preventDefault();
                  
                        // Store hash
                        var hash = this.hash;
                  
                        // Using jQuery's animate() method to add smooth page scroll
                        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                        $('html, body').animate({
                          scrollTop: $(hash).offset().top
                        }, 900, function(){
                     
                          // Add hash (#) to URL when done scrolling (default click behavior)
                          window.location.hash = hash;
                        });
                      } // End if
                    });
                    
                    $(window).scroll(function() {
                      $(".slideanim").each(function(){
                        var pos = $(this).offset().top;
                  
                        var winTop = $(window).scrollTop();
                          if (pos < winTop + 600) {
                            $(this).addClass("slide");
                          }
                      });
                    });
                  })
            }//END OF SLIDE_______________________________________________________________________


        // MOTAL OF LOGIN AND SIGN UP
        var modal = document.getElementById('id01');// LOGIN
        var modal1 = document.getElementById('id02');// SIGN UP
        // When the user clicks anywhere outside of the modal, close it

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        $("#myModal").on("show", function () {
          $("body").addClass("modal-open");
        }).on("hidden", function () {
          $("body").removeClass("modal-open")
        });
        window.onclick = function(event) {
            if (event.target == modal1) {
              modal1.style.display = "none";
            }
          }