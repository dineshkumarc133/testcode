jQuery(document).ready(function(){

 
    /*$.ajax({
        url: "https://geolocation-db.com/jsonp",
        jsonpCallback: "callback",
        dataType: "jsonp",
        success: function(location) {
            console.log(location);
            if(location.country_code !== 'US') {
                chkcountry = false;
                $('.next_batch_ships.for_american_users').hide();
            }else{
                $('.next_batch_ships.for_nonamerican_users').hide();
            }
        }
    });*/
  
    // Ip Address Code end 
    setTimeout(function() {
        $(".OffersBlock.OffersBlock__ActiveOffer").trigger('click');
        $(".radio__grid__option.offeractive").trigger('click');
    }, 2000);
    $(".OffersBlock.cstm_4.variant_selection_last").click(function(){
        $(this).parent().addClass('varint_lasst_select');
    });
    $(".OffersBlock.cstm_2").click(function(){
        $(this).parent().removeClass('varint_lasst_select');
    });
    $(".OffersBlock.cstm_1").click(function(){
        $(this).parent().removeClass('varint_lasst_select');
    });
    $(".WidgetComponent__Container.WidgetContainer .OffersBlock__Container .OffersBlock").each(function(){
        $(this).click(function(){
            if ($(this).is(':first-child')) {
                $(".testing_date sm").css("display","none");
            }else{
                $(".testing_date sm").css("display","block");
            }
        });
    });


    // var array_value = [77, 81, 86, 82, 88, 93, 89, 95, 100, 105, 101, 107, 113, 109, 115, 120, 125, 127, 133, 128, 134, 130, 136, 142, 137, 143, 148, 144, 150, 156, 152, 158, 154, 160, 155, 161, 157, 153, 149, 145, 141, 147, 143, 139, 135, 131, 127, 123, 119, 125, 121, 117, 113, 119, 115, 111, 107, 103, 99, 105, 101, 97, 93, 89, 95, 91, 87, 83, 79];
    // var index = 0;
    // function showNextValue() {
    //     var value = array_value[index];
    //     var div = document.querySelector('.live_vistor');
    //     var fade_cls = document.querySelector('.fade_cstm_value');
   
    //     fade_cls.classList.remove('fade_new_cstm');
    //     fade_cls.classList.add('fade_new');

    //     setTimeout(function() {
    //         fade_cls.classList.add('fade_new_cstm'); 
    //         fade_cls.classList.remove('fade_new');
    //         div.innerHTML = value;
    //     }, 200);
    //     index = (index + 1) % array_value.length;
    // }
    // setInterval(showNextValue, 5000);


    // var array_value_three = [77, 81, 86, 82, 88, 93, 89, 95, 100, 105, 101, 107, 113, 109, 115, 120, 125, 127, 133, 128, 134, 130, 136, 142, 137, 143, 148, 144, 150, 156, 152, 158, 154, 160, 155, 161, 157, 153, 149, 145, 141, 147, 143, 139, 135, 131, 127, 123, 119, 125, 121, 117, 113, 119, 115, 111, 107, 103, 99, 105, 101, 97, 93, 89, 95, 91, 87, 83, 79];
    // var index_three = 0;

    // function showNextValue3() {
    //     var value = array_value_three[index_three];
    //     var div = document.querySelector('.live_vistor_mob');
    //     var fade_cls = document.querySelector('.new_fade_cls');

    //     if (fade_cls) {
    //         fade_cls.classList.remove('fade_new_cstm');
    //         fade_cls.classList.add('fade_new');
    //         setTimeout(function() {
    //             fade_cls.classList.add('fade_new_cstm');
    //             fade_cls.classList.remove('fade_new');
    //             if (div) {
    //                 div.innerHTML = value;
    //             } 
    //         }, 200);
    //     } 
    //     index_three = (index_three + 1) % array_value_three.length;
    // }
    // setInterval(showNextValue3, 5000);
  
    // document.addEventListener('DOMContentLoaded', function() {
    //     var array_value_two = [20, 24, 21, 25, 28, 26, 30, 34, 31, 36, 33, 38, 35, 40, 37, 42, 45, 42, 47, 44, 49, 46, 51, 48, 53, 50, 54, 51, 46, 43, 38, 35, 30, 27, 22, 19, 14, 11, 16, 13, 18, 15, 20, 17, 22, 19, 24, 21, 26];
    //     var index_two = 0;

    //     function showNextValue2() {
    //         var value = array_value_two[index_two];
    //         var div = document.querySelector('.live_vistor_cart');
    //         var fade_cls = document.querySelector('.new_fade_cls');
    //         // Ensure elements are found
    //         if (div && fade_cls) {
    //             // Update the classes for fading effect
    //             fade_cls.classList.remove('fade_new_cstm');
    //             fade_cls.classList.add('fade_new');
    //             setTimeout(function() {
    //                 fade_cls.classList.add('fade_new_cstm'); 
    //                 fade_cls.classList.remove('fade_new');
    //                 // Update the div's innerHTML with the new value
    //                 div.innerHTML = value;
    //             }, 200);
    //             // Increment the index, wrapping around to the start if necessary
    //             index_two = (index_two + 1) % array_value_two.length;
    //         } 
    //     }
    //     // Set an interval to update the value every 5 seconds
    //     setInterval(showNextValue2, 5000);
    // });

    $(document).on("click",".header__nav__bag__container ",function() {
        setTimeout(function() {
            if ($('.cart__empty-msg').length){
                $(".cart_text_product").css("display","none");
            }else{
                $(".cart_text_product").css("display","block");
            }
        }, 2000);
    });


    $(document).on("click", ".ButtonBlockButton.variant-action-button", function () {
        setTimeout(function () {
            $( ".price_shop" ).load(window.location.href + " .price_shop" );
        }, 3000);
        setTimeout(function () {
            var min_cart_footer_lenght=$(".cart__body .cart__items .cart_items_wrapper").length;    
            if(min_cart_footer_lenght >0){
                $(".mini-cart__footer").removeClass('hide');
            }
        }, 2000);
    });

    $(document).on("click", ".product__quantity-wrapper", function () {
        setTimeout(function () {
            $( ".price_shop" ).load(window.location.href + " .price_shop" );
        }, 3000);
        setTimeout(function () {
            var min_cart_footer_lenght=$(".cart__body .cart__items .cart_items_wrapper").length;    
            if(min_cart_footer_lenght >0){
                $(".mini-cart__footer").removeClass('hide');
            }
        }, 2000);
    });
    $(document).on("click", "button.add-to-cart.btn", function () {
        setTimeout(function () {
            $( ".price_shop" ).load(window.location.href + " .price_shop" );
        }, 3000);
        setTimeout(function () {
            var min_cart_footer_lenght=$(".cart__body .cart__items .cart_items_wrapper").length;    
            if(min_cart_footer_lenght >0){
                $(".mini-cart__footer").removeClass('hide');
            }
        }, 2000);
    });
 
    $(document).ready(function() {
        var targetDiv = $('.side-content--reverse'); // Replace 'your-target-div' with the ID of the div you want to target
        var className = 'slider_line_reverse'; // Replace 'your-class' with the class name you want to add
        $(window).scroll(function() {
            var scrollPosition = $(this).scrollTop();
            var targetDivPosition = targetDiv.offset().top;
            var targetDivHeight = targetDiv.outerHeight();
            var scrollThreshold = targetDivPosition;
            // Calculate the position when the class should be removed (bottom of the target div)
            var bottomThreshold = targetDivPosition + targetDivHeight;
            // Check if the user has scrolled to the target div or below it
            if (scrollPosition >= scrollThreshold && scrollPosition <= bottomThreshold) {
                targetDiv.addClass(className);
            } else {
                targetDiv.removeClass(className);
            }
        });
    });

    $(document).ready(function() {
        var targetDiv = $('.side-content-not-reverse');
        var className = 'slider_line_notreverse';
        $(window).scroll(function() {
            var scrollPosition = $(this).scrollTop();
            var targetDivPosition = targetDiv.offset().top;
            var targetDivHeight = targetDiv.outerHeight();
            var scrollThreshold = targetDivPosition;
            // Calculate the position when the class should be removed (bottom of the target div)
            var bottomThreshold = targetDivPosition + targetDivHeight;
            // Check if the user has scrolled to the target div or below it
            if (scrollPosition >= scrollThreshold && scrollPosition <= bottomThreshold) {
                targetDiv.addClass(className);
            } else {
                targetDiv.removeClass(className);
            }
        });
    });

    var QtyInput = (function () {
        var $qtyInputs = $(".qty-input");
        if (!$qtyInputs.length) {
            return;
        }
        var $inputs = $qtyInputs.find(".product-qty");
        var $countBtn = $qtyInputs.find(".qty-count");
        var qtyMin = parseInt($inputs.attr("min"));
        var qtyMax = parseInt($inputs.attr("max"));
        $inputs.change(function () {
            var $this = $(this);
            var $minusBtn = $this.siblings(".qty-count--minus");
            var $addBtn = $this.siblings(".qty-count--add");
            var qty = parseInt($this.val());
            if (isNaN(qty) || qty <= qtyMin) {
                $this.val(qtyMin);
                $minusBtn.attr("disabled", true);
            } else {
                $minusBtn.attr("disabled", false);
                if(qty >= qtyMax){
				    $this.val(qtyMax);
				    $addBtn.attr('disabled', true);
                } else {
                    $this.val(qty);
                    $addBtn.attr('disabled', false);
                }
            }
        });
        $countBtn.click(function () {
            var operator = this.dataset.action;
            var $this = $(this);
            var $input = $this.siblings(".product-qty");
            var qty = parseInt($input.val());
            if (operator == "add") {
                console.log("2222222");
                qty += 1;
                if (qty >= qtyMin + 1) {
                    $this.siblings(".qty-count--minus").attr("disabled", false);
                }
                if (qty == 5 || qty == 6 || qty == 7 || qty == 8 || qty == 9 || qty == 10){
                    setTimeout(function() {
                        $("#myRadioButton").removeAttr('id');
                        $(".radio__grid__option.varint"+qty+" .content_wrapping .product_inner_content input[type='radio']").attr('id', 'myRadioButton');
                        var radioButton = document.getElementById("myRadioButton");
                        radioButton.click();
                        $(".radio__grid__option.last.varint4").addClass("offeractive");
                        if (qty == 10){
                            $("p.support_message").css("display","block");
                        }

                        var selectedOption = document.querySelector(".radio__grid__option.varint"+qty+" .content_wrapping .product_inner_content input[type='radio']").parentElement;
                        var selPri = selectedOption.querySelector('.select_option_v2 .w-70 .price').getAttribute('each_price');
                        var cmPri = selectedOption.querySelector('.select_option_v2 .w-70 .price').getAttribute('compare_price');
                        document.querySelector('.selected_option_price').textContent = selPri;
                        document.querySelector('.selected_option_cmp_price').textContent = cmPri;
                    }, 500);
                }
                if (qty >= qtyMax) {
                    $(".support_message").css("display","block");
				    $this.attr("disabled", true);
			    }
            } else {
                console.log("11111");
                qty = qty <= qtyMin ? qtyMin : (qty -= 1);
                $(".support_message").css("display","none");
                    if (qty == 4) {
				    $this.attr("disabled", true);
			    }
                if (qty == 5 || qty == 6 || qty == 7 || qty == 8 || qty == 9 || qty == 10){
                    setTimeout(function() {
                        $("#myRadioButton").removeAttr('id');
                        $(".radio__grid__option.varint"+qty+" .content_wrapping .product_inner_content input[type='radio']").attr('id', 'myRadioButton');
                        var radioButton = document.getElementById("myRadioButton");
                        radioButton.click();
                        $(".radio__grid__option.last.varint4").addClass("offeractive");
                        if (qty == 10){
                            $("p.support_message").css("display","block");
                        }
                        var selectedOption = document.querySelector(".radio__grid__option.varint"+qty+" .content_wrapping .product_inner_content input[type='radio']").parentElement;
                        var selPri = selectedOption.querySelector('.select_option_v2 .w-70 .price').getAttribute('each_price');
                        var cmPri = selectedOption.querySelector('.select_option_v2 .w-70 .price').getAttribute('compare_price');
                        document.querySelector('.selected_option_price').textContent = selPri;
                        document.querySelector('.selected_option_cmp_price').textContent = cmPri;
                    }, 500);
                }
                if (qty < qtyMax) {
				    $this.siblings(".qty-count--add").attr("disabled", false);
                }
            }
            if(qty == 4){
                var selectedOption = document.querySelector(".radio__grid__option.varint"+qty+" .content_wrapping .product_inner_content input[type='radio']").parentElement;
                var selPri = selectedOption.querySelector('.select_option_v2 .w-70 .price').getAttribute('each_price');
                var cmPri = selectedOption.querySelector('.select_option_v2 .w-70 .price').getAttribute('compare_price');
                document.querySelector('.selected_option_price').textContent = selPri;
                console.log("clicked 4");
                document.querySelector('.selected_option_cmp_price').textContent = cmPri;
            }
            console.log(qty);
            $input.val(qty);
	   });
    })();

    $(".radio__grid.product_option_b .radio__grid__option").each(function(){
        $(this).click(function(){
            $(this).addClass('offeractive');
            $(this).siblings().removeClass('offeractive');
            $(this).find("input[type='radio']").attr('id', 'myRadioButton');
            $(this).siblings().find("input[type='radio']").removeAttr('id', 'myRadioButton');
            $("p.support_message").css("display","none");
            var radioButton = document.getElementById("myRadioButton");
            radioButton.click();
            var cr_par = $('#myRadioButton').parents('.radio__grid__option');
            if(cr_par.hasClass('varint3') || cr_par.hasClass('varint2') || cr_par.hasClass('varint1') || cr_par.hasClass('varint4')){
                var selectedOption = $(this).find('.select_option_v2 .w-70 .price').attr('each_price');
                var selectedcmpOption = $(this).find('.select_option_v2 .w-70 .price').attr('compare_price');
               $('.selected_option_price').text(selectedOption);    
               $('.selected_option_cmp_price').text(selectedcmpOption);    
            }
        });
    });

    // free shipping text 
    $(".radio__grid.product_option_b .radio__grid__option").each(function(){
        if ($(this).is(':first-child')) {
            $(this).click(function(){
                $(".free_shipping_text_prd").remove();
                // console.log('not_first_child');
                $(".testing_date sm").css("display","none");
            });
        }else {
            $(this).click(function(){
                $(".free_shipping_text_prd").remove();
                $(".testing_date sm").css("display","block");
            });
        }
        if ($(this).hasClass("OffersBlock__ActiveOffer")) {
            $(".testing_date sm").css("display","block");
        }
        if ($(this).is(':first-child') && $(this).hasClass("OffersBlock__ActiveOffer")) {
            $(".free_shipping_text_prd").remove();
            $(".testing_date sm").css("display","none");
        }  
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $('.header__container.header__container--small').addClass("fixed-header");
        } else {
            $('.header__container.header__container--small').removeClass("fixed-header");
        }
    });

    // comment by R
    $(".product-faq-section .set").each(function(){
        $(this).click(function(){
            $(this).toggleClass('active').siblings().removeClass('active');
        });
    });
    $(document).on("click", ".product__quantity-wrapper", function () {
        function removeProduct() {
            setTimeout(function() {
                var itemCount = $(".mini-cart .cart__body .cart_items_wrapper .cart__item").length;
                if (itemCount == 1) {
                    console.log(2);
                    var title_name = $(".mini-cart .cart__body .cart__items p.cart__item__title").text();
                    var trim_title = $.trim(title_name);
                    if (trim_title == '1 Bonus Loop Lasso EVO (60% OFF)') {
                        fetch('/cart/change.js', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                id: '43626076307605', // Replace with the variant ID of the product you want to remove
                                quantity: 0, // Set the quantity to 0 to remove the product
                            }),
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            $(".cart__items").load(window.location.href + " .cart__items");
                            $(".mini-cart__footer").load(window.location.href + " .mini-cart__footer");
                            // After removing the product, check the length
                            var itemCount = $(".mini-cart .cart__body .cart_items_wrapper .cart__item").length;
                            if (itemCount == 1) {
                                console.log(2);
                                var title_name = $(".mini-cart .cart__body .cart__items p.cart__item__title").text();
                                var trim_title = $.trim(title_name);
                                if (trim_title == '1 Bonus Loop Lasso EVO (60% OFF)') {
                                    $("span.mini-cart__action__checkout").css("pointer-events", "none");
                                    console.log(3);
                                    location.reload();
                                } else {
                                    console.log('not_hurra');
                                }
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                    }else if (trim_title == '1 Bonus Loop Lasso EVO (40% OFF)') {
                        fetch('/cart/change.js', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                id: '43813561073813', // Replace with the variant ID of the product you want to remove
                                quantity: 0, // Set the quantity to 0 to remove the product
                            }),
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            $(".cart__items").load(window.location.href + " .cart__items");
                            $(".mini-cart__footer").load(window.location.href + " .mini-cart__footer");
                            // After removing the product, check the length
                            var itemCount = $(".mini-cart .cart__body .cart_items_wrapper .cart__item").length;
                            if (itemCount == 1) {
                                console.log(2);
                                var title_name = $(".mini-cart .cart__body .cart__items p.cart__item__title").text();
                                var trim_title = $.trim(title_name);
                                if (trim_title == '1 Bonus Loop Lasso EVO (40% OFF)') {
                                    $("span.mini-cart__action__checkout").css("pointer-events", "none");
                                    console.log(3);
                                    location.reload();
                                } else {
                                    console.log('not_hurra');
                                }
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                    }
                }                
            }, 3500);
        }
  
        function removeNanoProduct(){
            setTimeout(function() {
                var product_count = $(".mini-cart .cart__body .cart_items_wrapper .cart__item").length;
                if (product_count == 1) {
                    var title_name = $(".mini-cart .cart__body .cart__items p.cart__item__title").text();
                    var trim_title = $.trim(title_name);
                    console.log(trim_title);
                    if (trim_title == '1 Bonus Loop Lasso NANO (50% OFF)') {
                        $(".product__quantity-wrapper button.qty-control.qty-down").trigger('click');
                    }
                }
            }, 3000);
        }

        function removeNanoProducttwo(){
            setTimeout(function() {
                var product_count = $(".mini-cart .cart__body .cart_items_wrapper .cart__item").length;
                if (product_count == 1) {
                    var title_name = $(".mini-cart .cart__body .cart__items p.cart__item__title").text();
                    var trim_title = $.trim(title_name);
                    console.log(trim_title);
                    if (trim_title == '1 Bonus Loop Lasso NANO (35% OFF)') {
                        $(".product__quantity-wrapper button.qty-control.qty-down").trigger('click');
                    }
                }
            }, 3000);
        }
        removeProduct();
        removeNanoProduct();
        removeNanoProducttwo();
    });

    if ($('#timer')[0]) {
        alert('dfsd');
        // Function to calculate the time remaining until 12 AM PST
        function getTimeRemaining() {
            const now = new Date();
            const targetTime = new Date();
            // Set the target time to 12 AM PST
            targetTime.setUTCHours(8, 0, 0, 0); // 8 corresponds to 12 AM PST
            // Calculate the time difference
            let timeRemaining = targetTime - now;
            // If the target time has passed, set it to the next day
            if (timeRemaining <= 0) {
                targetTime.setDate(targetTime.getDate() + 1);
                timeRemaining = targetTime - now;
            }
            // Calculate hours, minutes, and seconds
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            return {
                total: timeRemaining,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        }
        // Function to update the countdown timer
        function updateTimer() {
            const timerElement = document.getElementById('timer');
            const time = getTimeRemaining();
            // Display the time remaining
            timerElement.textContent = `- ENDS IN: ${time.hours}:${time.minutes}:${time.seconds}`;
            // If the target time has passed, set up the timer for the next day
            if (time.total <= 0) {
                updateTimer();
            }
        }
        // Update the timer every second
        setInterval(updateTimer, 1000);
        // Initial call to set up the timer
        updateTimer();
    }

    setTimeout(function() {
        $("form#slf-form[action='https://track.sendlane.com/track/form/submission/eyJkb21haW4iOiJsb29wbGFzc28iLCJmb3JtX2lkIjoiMmQ4N2M0NTctMjEwYy00MzY3LTg1ZWQtNjRlZDIwNWUxNjAwIn0='] button#slf-close:first-child").replaceWith('<span class="close-icon close_icons_cstm" style="color: rgb(255, 255, 255); font-size: 2rem; -webkit-text-stroke-width: thin;">×</span>');
    }, 3000);

    $(document).on('click', ".amazon_button_prd", function () {
        $(".cstm_trigger_active").removeClass('cstm_trigger_active');
    });
    $(document).on('click', ".close_icons_cstm", function () {
        $(this).parent().parent().parent().addClass('cstm_trigger_active');
    });
});



//logo Slider


          



