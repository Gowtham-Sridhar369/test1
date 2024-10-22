/*!
 * Float Labels
 * @version: 3.3.9
 * @author: Paul Ryley (http://geminilabs.io)
 * @url: https://pryley.github.io/float-labels.js
 * @license: MIT
 */
!function(t,r,e){"use strict";var n=function(t,e){this.t=this.e(t)?r.querySelectorAll(t):[t],this.n=[],this.i=e,this.r=[],this.o(),this.destroy=function(){this.u(function(t){t.removeEventListener("reset",this.events.reset),this.s(t)},function(t){this.a(t)})},this.rebuild=function(){this.u(null,function(t){this.l(t,!0)})}};n.prototype={c:{customEvent:null,customLabel:null,customPlaceholder:null,exclude:".no-label",inputRegex:/email|number|password|search|tel|text|url/,prefix:"fl-",prioritize:"label",requiredClass:"required",style:0,transform:"input,select,textarea"},o:function(){var i=this;i.f(),i.u(function(t,e){var n=i.n[e].style;t.addEventListener("reset",i.events.reset),t.classList.add(i.h("form")),n&&t.classList.add(i.h("style-"+n))},function(t){i.l(t)})},f:function(){var t=this;t.events={blur:t.d.bind(t),change:t.v.bind(t),focus:t.p.bind(t),input:t.v.bind(t),reset:t._.bind(t)}},b:function(t){return t?"add":"remove"},m:function(t){var e=this,n=e.y(t);n&&(t.classList.add(e.h(t.tagName.toLowerCase())),e.L(n,t),e.g(n,t),e.w(n,t),e.x(t,"add"),"function"==typeof e.n[e.S].customEvent&&e.n[e.S].customEvent.call(e,t))},T:function(t,e){var n="string"==typeof t?r.createElement(t):t;for(var i in e=e||{})e.hasOwnProperty(i)&&n.setAttribute(i,e[i]);return n},C:function(){var t=[].slice.call(arguments),n=t[0],i=t.slice(1);return Object.keys(i).forEach(function(t){for(var e in i[t])i[t].hasOwnProperty(e)&&(n[e]=i[t][e])}),n},l:function(t,e){var n=this;if(n.P(t)){if(n.j(t)){if(!0!==e)return;n.a(t)}n.m(t)}},y:function(t){var e='label[for="'+t.getAttribute("id")+'"]',n=this.t[this.S].querySelectorAll(e);return 1<n.length&&(n=t.parentNode.querySelectorAll(e)),1===n.length&&n[0]},q:function(t,e){var n=t.textContent.replace("*","").trim(),i=e.getAttribute("placeholder");return(!n||n&&i&&"placeholder"===this.n[this.S].prioritize)&&(n=i),n},x:function(e,n){var i=this.events;["blur","input","focus"].forEach(function(t){"input"!==t||"file"!==e.type&&"SELECT"!==e.nodeName||(t="change"),e[n+"EventListener"](t,i[t])})},j:function(t){return t.parentNode.classList.contains(this.h("wrap"))},e:function(t){return"[object String]"===Object.prototype.toString.call(t)},P:function(t){var e="INPUT"===t.tagName&&!this.n[this.S].inputRegex.test(t.getAttribute("type")),n="SELECT"===t.tagName&&null!==t.getAttribute("multiple");return t.getAttribute("id")&&!e&&!n},u:function(t,e){for(var n=this,i=0;i<n.t.length;++i){if(void 0===n.r[i]){var r=n.C({},n.c,n.i,n.t[i].getAttribute("data-options")),o=":not("+r.exclude.split(/[\s,]+/).join("):not(")+")";n.r[i]=r.transform.replace(/,/g,o+",")+o,n.n[i]=r}var u=n.t[i].querySelectorAll(n.r[i]);n.S=i,"function"==typeof t&&t.call(n,n.t[i],i);for(var s=0;s<u.length;++s)"function"==typeof e&&e.call(n,u[s],i)}},d:function(t){t.target.parentNode.classList.remove(this.h("has-focus"))},v:function(t){t.target.parentNode.classList[this.b(t.target.value.length)](this.h("is-active"))},p:function(t){t.target.parentNode.classList.add(this.h("has-focus"))},_:function(){setTimeout(this.F.bind(this))},h:function(t){return this.n[this.S].prefix+t},s:function(t){var e=this.n[this.S].prefix,n=t.className.split(" ").filter(function(t){return 0!==t.lastIndexOf(e,0)});t.className=n.join(" ").trim()},a:function(t){var e=t.parentNode;if(this.j(t)){for(var n=r.createDocumentFragment();e.firstElementChild;){var i=e.firstElementChild;this.s(i),n.appendChild(i)}e.parentNode.replaceChild(n,e),this.O(t),this.x(t,"remove")}},F:function(){for(var t=this,e=t.t[t.S].querySelectorAll(t.r[t.S]),n=0;n<e.length;++n)e[n].parentNode.classList[t.b("SELECT"===e[n].tagName&&""!==e[n].value)](t.h("is-active"))},O:function(t){var e="data-placeholder",n=t.getAttribute(e);null!==n&&(t.removeAttribute(e),t.setAttribute("placeholder",n))},L:function(t,e){var n=this;t.classList.add(n.h("label")),t.textContent=n.q(t,e),"function"==typeof n.n[n.S].customLabel&&(t.textContent=n.n[n.S].customLabel.call(n,t,e))},g:function(t,e){var n=this,i=e.getAttribute("placeholder");"label"!==n.n[n.S].prioritize&&i||(i&&e.setAttribute("data-placeholder",i),i=n.q(t,e)),"function"==typeof n.n[n.S].customPlaceholder&&(i=n.n[n.S].customPlaceholder.call(n,i,e,t)),"SELECT"===e.tagName?n.R(e,i):e.setAttribute("placeholder",i)},R:function(t,e){var n=t.firstElementChild;n.hasAttribute("value")&&n.value?(t.insertBefore(new Option(e,""),n),!1===t.options[t.selectedIndex].defaultSelected&&(t.selectedIndex=0)):n.setAttribute("value",""),""===n.textContent&&(n.textContent=e)},w:function(t,e){var n=this,i=n.T("div",{class:n.h("wrap")+" "+n.h("wrap-"+e.tagName.toLowerCase())});void 0!==e.value&&e.value.length&&i.classList.add(n.h("is-active")),(null!==e.getAttribute("required")||e.classList.contains(n.n[n.S].requiredClass))&&i.classList.add(n.h("is-required")),e.parentNode.insertBefore(i,e),i.appendChild(t),i.appendChild(e)}},"function"==typeof define&&define.amd?define([],function(){return n}):"object"==typeof module&&module.exports?module.exports=n:t.FloatLabels=n}(window,document);

$(document).foundation();

$(document).ready(function() {
	
	// ############# GENERIC FORM HANDLERS #############
	// HTML5VALIDATION
	jQuery.fn.extend({
		html5ValidateForm: function() {
			var $this = $(this),
				$valid = true;

			$.each($this.find(':input'), function(index, element) {
				var $field = $(this),
					$fieldValid = true;

				if (!$field[0].validity.valid) {
					$valid = false;
					$fieldValid = false;
				}
				if (($field[0].nodeName.toLowerCase() == 'select') && ($field[0].selectedIndex < 0)) {
					$valid = false;
					$fieldValid = false;
				}
				$field.toggleInputError(!$fieldValid);
			});
			
			if (!$valid) {
				$this.addClass('invalid');
			} else {
				$this.removeClass('invalid');
			}

			return $this;
		}

	});
	// REMOVE INVALID CLASS ON BLUR
	$('body').on('blur', 'input, select', function() {
		var $this = $(this);
		if (navigator.userAgent.match(/MSIE 9/) !== null || navigator.userAgent.match(/MSIE 8/) !== null) {
			if ($this[0].hasAttribute('required') && $this[0].value === '') {
				$this.addClass('invalid');
			} else {
				$this.removeClass('invalid');
			}
		} else {
			if ($this[0].validity.valid) {
				if (($this[0].nodeName.toLowerCase() == 'select') && ($this[0].selectedIndex < 0)) {
					$this.addClass('invalid');
				} else {
					$this.removeClass('invalid');
				}
			} else {
				$this.addClass('invalid');
			}
		}
	});

	$.fn.toggleInputError = function(erred) {
		this.toggleClass('invalid', erred);
		this.parent().toggleClass('invalid', erred);
		return this;
	};

	// TODO: not inline-form-wrapper
	$('button[type="submit"]').prepend('<div class="pending-spinner"><i class="fas fa-cog fa-spin"></i> Loading</div>');
	
	$('body').on('submit', '.inline-form-wrapper form, #Base7FoundationForm_CheckoutForm', function(e) {
		var $button = $(this).find('button[type="submit"]'),
			$form = $(this);
		
		$form.removeAttr('data-ready');
		
		if ($button.hasClass('pending')) {
			return false;
		}

		$form.removeClass('invalid');
		$button.addClass('pending');
		$form.html5ValidateForm();
		
		if ($form.find('div.formaddress-enteraddress').length !== 0) {
			if (($form.find('div.formaddress-enteraddress .address-selected').length === 0) || ($form.find('.formaddress-address').val() == '')) {
				$form.find('input.formaddress-enteraddress').addClass('invalid');
				$form.addClass('invalid');
			}
		
    		if ($form.find('input.formaddress-enteraddress').hasClass('invalid')) {
    		    $form.addClass('invalid');
    		    alert('Please ensure you select your address from the list provided');
    		}
		}
		
		if ($form.hasClass('invalid')) {
			$([document.documentElement, document.body]).animate({
				scrollTop: $form.find('.invalid').first().offset().top - 30
			}, 1000);
			
			setTimeout(function() {
				$form.removeClass('invalid');
			}, 1000);
			$button.removeClass('pending').removeClass('verified');
			return false;
		} else {
			$button.removeClass('pending').addClass('verified');
			if ($form.find('.nocaptcha').length !== 0) {
				nocaptcha_handleCaptcha($form[0], $form[0].submit.bind($form[0]));
			} else {
				return true;
			}
		}
		return false;
	});
	
	
	$('body').on('submit', '#Base7FoundationForm_NewsletterSubscriptionForm', function(e) {
		var $button = $(this).find('button[type="submit"]'),
			$form = $(this);
		
		if ($form.find('.nocaptcha').length !== 0) {
			nocaptcha_handleCaptcha($form[0], $form[0].submit.bind($form[0]));
		} else {
			return true;
		}
		return false;
	});

	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
	};
	
	if ($('#Base7FoundationForm_PurchaseForm_ProductVariationID > li').length === 1) {
		$('#Base7FoundationForm_PurchaseForm_ProductVariationID').hide();
	}
	
	$('.card-class-Product .cart-apply').on('click', function(e) {
		e.preventDefault();
		var $this = $(this);
		$.ajax($this.attr('href')).done(function(resp) {
			$('#productModal .modal-inner').html(resp);
			$('#Base7FoundationForm_PurchaseForm_ProductVariationID :radio').trigger('change');
			if ($('#Base7FoundationForm_PurchaseForm_ProductVariationID > li').length === 1) {
				$('#Base7FoundationForm_PurchaseForm_ProductVariationID').hide();
			}
			$('#productModal').foundation('open');
		});
	});

	if ($('body').hasClass('LandingPage')) {
		var facebookCard = getUrlParameter('card');
		if (facebookCard == 'phone') {
			$('#row-phone').insertBefore('#row-lounge');
		}
		if (facebookCard == 'washing-machine') {
			$('#row-washing-machine').insertBefore('#row-lounge');
		}
		if (facebookCard == 'fridge') {
			$('#row-fridge').insertBefore('#row-lounge');
		}
	}
	
	/* Banner */
	$('.banner-images').slick({
		"slidesToShow": 1, 
		"slidesToScroll": 1, 
		"autoplay": true,
		"autoplaySpeed": 7000,
		"speed": 1000,
		"arrows": false,
		"dots": false
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.banner-thumbnail').removeClass('selected');
		$('.banner-thumbnail:eq(' + nextSlide + ')').addClass('selected');
	});
	
	$('.banner-thumbnail').on('click', function(e) {
		$('.banner-images').slick('slickGoTo', $(this).index());
	});
	
	$('[data-autoslick]').slick();
	
	/* Product Slick */
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		infinite: true,
		asNavFor: (($('.slider-nav.linked').length > 0) ? '.slider-nav' : false),
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>'
	});
	
	$('.slider-for').on('eChange', function(event, slick, currentSlide, nextSlide){
		
	});
	
	if ($('.slider-nav.linked').length > 0) {
		$('.slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			focusOnSelect: true,
			arrows: false,
			responsive: [
			{
			  breakpoint: 640,
			  settings: {
				vertical: true,
				slidesToShow: 3
			  }
			}
		  ]
		});
	} else {
		$('div[data-slide]').click(function(e) {
			e.preventDefault();
			var $slideno = $(this).data('slide');
			$('.slider-for').slick('slickGoTo', $slideno - 1);
		});
	}
	
	$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
		if (typeof newSize === 'undefined') {
			newSize = Foundation.MediaQuery.current;
		}
		if (newSize == 'small') {
			$('.product-images .slider-for img').each(function(e) {
				var $this = $(this);
				$this.parent().trigger('zoom.destroy');
			});
		} else {
			$('.product-images .slider-for img').each(function(e) {
				var $this = $(this);
				$this.parent().zoom({ url: $this.parent().attr('data-href') });
			});
		}
	}).trigger('changed.zf.mediaquery');
	
	$('body').on('change', '#Base7FoundationForm_PurchaseForm_ProductVariationID :radio', function(e) {
		e.preventDefault();
		var $variationHolder = $('#Base7FoundationForm_PurchaseForm_ProductVariationID'),
			$variation = $variationHolder.find(':checked'),
			$list = $('ul.product-pricing > li input[value^="' + $variation.val() + '_"]');
		
		$('ul.product-pricing > li').hide().find('input').attr('disabled', 'disabled').removeAttr('checked');
		$list.each(function(index, element) {
			$(this).removeAttr('disabled').removeAttr('checked');
			$(this).closest('li').show();
		});
		var $lastItem = $('ul.product-pricing :radio:not(:disabled):last');
		$lastItem.attr('checked', 'checked');
		$('.purchase-form-price').html($lastItem.closest('li').find('.price').html());
	});
	
	$('#Base7FoundationForm_PurchaseForm_ProductVariationID :radio:not(:disabled):last').trigger('change');
	
	$('body').on('change', 'ul.product-pricing :radio', function(e) {
		$('.purchase-form-price').html($('ul.product-pricing :radio:checked').closest('li').find('.price').html());
	});
	
	$('body').on('submit', '#Base7FoundationForm_PurchaseForm', function(e) {
		var $form = $(this);
		e.preventDefault();
		
		$.ajax({
			type: "POST",
			url: $form.attr('action'),
			data: $form.serialize(),
			success: (function(resp) {
				var $drawer = $('[cart-drawer]');
				$drawer.find('.product-image').html(resp.ProductImage);
				$drawer.find('.product-info').html(resp.ProductInfo);
				$drawer.find('.qty').html(resp.ProductQuantity);
				$drawer.addClass('open');
				$('[data-cart-count]').html(resp.CartItemCount);
				
				if (resp.CartItemCount > 0) {
					$('[data-cart-count]').show();
				} else {
					$('[data-cart-count]').hide();
				}
				
				$('#productModal .modal-inner').html('');
				$('#productModal').foundation('close');
			}),
			dataType: 'json'
		});
	});
	
	$('body').on('click', "[data-close-drawer]", function() {
		var $drawer = $(this).closest('.drawer');
		$drawer.removeClass('open');
	});
	
	$('body').on('change', '.cart-row [data-quantity]', function(e) {
		$.ajax({
			type: "POST",
			url: '/products/changequantity',
			data: { OrderItemID : $(this).closest('.cart-row').attr('data-id'), 'Quantity' : $(this).val() },
			success: (function(resp) {
                if (resp.Result == 'Error') {
                    location.reload();
                } else {
                    populateCart(resp.Response);
                }
			}),
			dataType: 'json'
		});
	});
	
	$('body').on('click', '.cart-row [data-remove-cart-item]', function(e) {
		e.preventDefault();
		if (confirm('Are you sure you wish to remove this product from your cart?')) {
			$.ajax({
				type: "POST",
				url: '/products/changequantity',
				data: { OrderItemID : $(this).closest('.cart-row').attr('data-id'), 'Quantity' : 0 },
				success: (function(resp) {
                    if (resp.Result == 'Error') {
                        location.reload();
                    } else {
                        populateCart(resp.Response);
                    }
				}),
				dataType: 'json'
			});
		}
	});
	
	function populateCart(data) {
		$('[data-cart-count]').html(data.CartItemCount);
		
		if (data.CartItemCount == 0) {
			location.reload();
		} else {
			$('[data-cart-count]').show();
		}
		
		if (data.CartItemCount == 0) {
			$('[data-cart-count]').hide();
		} else {
			$('[data-cart-count]').show();
		}
		
		var $template = $('.cart-row').first().clone();
		
		$.each(data.OrderItems, function(index) {
			var $item = $template.clone(),
				row = data.OrderItems[index];
			
			$($item).attr('data-id', row.ID);
			$('[data-image]', $item).attr('src', row.Image);
			$('[data-product-link]', $item).attr('href', row.Product.Link);
			$('[data-title]', $item).html(row.Product.Title);
			if (row.ProductVariation) {
				$('[data-variation]', $item).html(row.ProductVariation.Title).show();
			} else {
				$('[data-variation]', $item).html(row.Product.Title).hide();
			}
			$('[data-unit-price]', $item).html(row.UnitPrice);
			$('[data-price-title]', $item).html(row.Months);
			$('[data-quantity]', $item).val(row.Quantity);
			$('[data-total]', $item).html(row.CalculatedTotal);
			
			$('tr[data-id=' + row.ID + ']').replaceWith($item);
		});
		
		$.each(data.Removed, function(index) {
			$('tr[data-id=' + data.Removed[index].ID + ']').replaceWith('<tr data-id=' + data.Removed[index].ID + '"><td colspan="' + $template.find('td').length + '">Removed <a href="' + data.Removed[index].Link + '">' + data.Removed[index].Title + '</a> from your cart.</td></tr>');
		});
		
		if (data.CartItemCount == 0) {
			$('[data-no-results]').show();
			$('[data-cart-table]').hide();
			$('[data-checkout-button]').hide();
		}
		
		$('[data-cart-total]').html(data.CartTotal);
	}
	
	$('.request-callback-submit').on('click', function(e) {
		$('#callback-modal .modal-inner').html('<h2>Thank you</h2><p>One of our friendly team will contact you shortly.</p>');
	});


	$('.card-CartItem .add').click(function () {
		$(this).prev().val(+$(this).prev().val() + 1).trigger('change');
	});
	$('.sub').click(function () {
		if ($(this).next().val() > 1) {
			if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1).trigger('change');
		}
	});

	var el = document.getElementById('item-sortable');
	if (el) {
		var sortable = Sortable.create(el, {
			onUpdate: function(e) {
				$(e.srcElement).find('.LandingPageItem').each(function(index) {
					var $id = $(this).attr('data-minimap');
					var $item = $('#item-' + $id);
					$item.parent().append($item);
				});

				var $items = [],
					$i = 0;
				$(e.to).find('.LandingPageItem').each(function(e) {
					$items.push([$(this).attr('data-id'), $i ]);
					$i++;
				});

				$.ajax({
					type: "POST",
					url: $(e.srcElement).attr('data-sorturl'),
					data: { 'Item' : JSON.stringify($items) },
					success: (function(e) {

					})
				});
			}
		});
	}

	function setupManageLandingPage() {
		$('.landing-page-manage-row').each(function(e) {
			var $this = $(this);
			if ($this.find('input.added').is(':checked')) {
				$this.find('.checkbox.status').show();
			} else {
				$this.find('.checkbox.status').hide();
			}
		});
	}

	$('body').on('change', '.landing-page-manage-row input.added', function(e) {
		var $this = $(this),
			$row = $this.closest('.landing-page-manage-row');
		//add to landing page

		if (!$this.is(':checked')) {
			$.ajax({
				type: 'get',
				url: $this.attr('data-removeurl'),
				success: function (resp) {
					if (resp == '1') {
						$row.find('.checkbox.status').hide();
					}
					return resp;
				}
			});
		} else {
			$.ajax({
				type: 'get',
				url: $this.attr('data-addurl'),
				success: function (resp) {
					if (resp == '1') {
						$row.find('.checkbox.status').show();
					}
					return resp;
				}
			});
		}
	});

	$('body').on('change', '.landing-page-manage-row input.status', function(e) {
		var $this = $(this),
			$row = $this.closest('.landing-page-manage-row');

		if (!$this.is(':checked')) {
			$.ajax({
				type: 'get',
				url: $this.attr('data-deactivateurl'),
				success: function (resp) {
					return resp;
				}
			});
		} else {
			$.ajax({
				type: 'get',
				url: $this.attr('data-activateurl'),
				success: function (resp) {
					if (resp == '1') {
						$row.find('.checkbox.status').show();
					}
					return resp;
				}
			});
		}
	});


	$('.landing-page-admin .toggle-button').on('click', function(e) {
		if ($('body').hasClass('admin-open')) {
			$('body').removeClass('admin-open');
		} else {
			$('body').addClass('admin-open');
		}
	});

	var $editItemModal = $('#editItemModal');
	$editItemModal.on('closed.zf.reveal', function () {
		window.location.reload();
	});

	function updatePreview($type) {
		var $form = $('#Base7FoundationForm_' + $type + 'ItemForm');
		$.ajax({
			type: 'get',
			url: $('.landing-page-admin').attr('data-previewurl'),
			data: $('#Base7FoundationForm_' + $type + 'ItemForm').serialize(),
			success: function (resp) {
				$('.item-preview').html(resp);

				var $input = $('#Base7FoundationForm_' + $type + 'ItemForm_Image');
				if ($input[0].files && $input[0].files[0]) {
					var reader = new FileReader();

					reader.onload = function(e) {
						$('.heximage').attr('src', e.target.result);
					}

					reader.readAsDataURL($input[0].files[0]);
				}
			}
		});
	}

	$('.copy-button').on('click', function(e) {
		var $temp = $('<input>');
		$('body').append($temp);
		$temp.val($(this).attr('data-href')).select();
		document.execCommand("copy");
		$temp.remove();
	});

	$editItemModal.on('open.zf.reveal', function () {
	  $(document).foundation();
		$("select[name='Type']").first().trigger('change');
		$R('textarea.wysiwyg', {
		callbacks: {
			keyup: function(html)
			{
				updatePreview('Edit');
			}
		}});
	});

	$('.edit-button').on('click', function(e) {
		e.preventDefault();
		$.ajax($(this).attr('href')).done(function(resp){
			$editItemModal.html(resp).foundation('open');
		});
	});

	$('.manage-button').on('click', function(e) {
		e.preventDefault();
		$.ajax($(this).attr('href')).done(function(resp) {
			$editItemModal.html(resp);
			setupManageLandingPage();
			$editItemModal.foundation('open');
		});
	});

	var $addItemModal = $('#addItemModal');
	$addItemModal.on('open.zf.reveal', function () {
	  $(document).foundation();
		$("select[name='Type']").first().trigger('change');
		$R('textarea.wysiwyg', {
		callbacks: {
			keyup: function(html)
			{
				updatePreview('Add');
			}
		}});
	});

	$('.add-button').on('click', function(e) {
		e.preventDefault();
		$.ajax($(this).attr('href')).done(function(resp){
			$addItemModal.html(resp).foundation('open');
		});
	});

	$('body').on('change', "select[name='Type']", function(e) {
		var $this = $(this);

		$('div.fieldholder-small.item-field').each(function() {
			var $holder = $(this),
				$field = $holder.find('.item-field');
			if (typeof $field.attr('data-required') === typeof undefined) {
				$field.attr('data-required', ($field.attr('required') == 'required' ? 'required' : '0'));
			}

			if ($field.hasClass('s-' + $this.val())) {
				if ($field.attr('data-required') != '0') {
					$field.attr('required', 'required');
				} else {
					$field.removeAttr('required');
				}
				$holder.show();
			} else {
				//$field.attr('data-required', $field.attr('required'));
				$field.removeAttr('required');
				$holder.hide();
			}
		});
	});

	$('body').on('change', '#Base7FoundationForm_AddItemForm :input', function(e) {
		updatePreview('Add');
	});


	$('body').on('change', '#Base7FoundationForm_EditItemForm :input', function(e) {
		updatePreview('Edit');
	});

	$('body').on('click', '.add-existing-item', function(e) {
		e.preventDefault();

		var $this = $(this);
		$.ajax({
			type: 'get',
			url: $this.attr('href'),
			data: { 'ItemID' : $this.attr('data-id') },
			success: function (resp) {
				$('.landing-page-item-snippet[data-id="' + $this.attr('data-id') + '"]').addClass('is-on-page');
				$('.add-existing-item').hide();
				return;
			}
		});
	});

	$('body').on('click', '.landing-page-item-snippet', function() {
		var $this = $(this);
		$.ajax({
			type: 'get',
			url: $this.attr('data-previewurl'),
			success: function (resp) {
				$('.item-preview').html(resp);
				$('.add-existing-item').attr('data-id', $this.attr('data-id'));
				$('.add-existing-item').show();
				return;
			}
		});
	});

	var floatlabels = new FloatLabels('form.inline-labels, .inline-form-wrapper form', {
		style: 2,
		transform: 'input, select, textarea',
		customPlaceholder: function( placeholderText, el, labelEl ) {
			if ($(el).attr('required') == 'required') {
				return placeholderText + '*';
			} else {
				return placeholderText;
			}
		}
	});

});