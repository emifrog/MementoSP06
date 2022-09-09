$('.search-open').click(function(){
	$('.search-inline').show('slow', function(){
	});
});

$('.search-close').click(function(){
	$('.search-inline').hide('slow', function(){
	});
});



/* SCROLL TO TOP */
$('.totop').tottTop({
	scrollTop: 300
});

$(document).delegate('.vousetes', "change", function() {
	var element = $(this).find('option:selected');
	var entr = element.attr("data-entr");
 	if(entr==1){
		$(".form-entreprise-particulier").html($(".form-entreprise-morceau").html());
	}else{
		if(entr==2){
			$(".form-entreprise-particulier").html($(".form-dmd-emploi-morceau").html());
		}else{
				if(entr==3){
						$(".form-entreprise-particulier").html($(".form-etudiant-alternant-morceau").html());
				}else{
					if(entr==4){
						$(".form-entreprise-particulier").html($(".form-salarie-morceau").html());
						}else{
						$(".form-entreprise-particulier").html($(".form-particulier-morceau").html());
						}
				}

		}
	}
});


$(document).delegate('#inscrit_ecole', "change", function() {
	if($(this).val() == 1){
			$(".siouiinscrit").html('<input type="text" class="form-control"    name="nom_ecole" placeholder="Si oui laquelle ?"  required>');
	}else{
			$(".siouiinscrit").html("");
	}
});

$(document).delegate('.vousetesa', "change", function() {
	var element = $(this).find('option:selected');
	var entr = element.attr("data-entr");
 	if(entr==1){
		$(".form-entreprise-particulier").html($(".form-entreprise-morceau").html());
	}else{
			$(".form-entreprise-particulier").html($(".form-particulier-alt-morceau").html());
	}
});


$(".modalload").click(function(){
	var bg = $(this).attr('data-bg');
	$.ajax({
			url : $(this).attr('data-url'),
			type : 'GET',
			dataType : 'html',
			success : function(code_html, statut){
				$(".formodal").html(code_html);
				$("#lamodal").modal('show');
				$(".fond-modal").removeClass (function (index, className) {
					    return (className.match (/\bbg-\S+/g) || []).join(' ');
					});
				if(bg){
					$(".fond-modal").addClass("bg-modal "+ bg);
				}else{
					$(".fond-modal").addClass("bg-modal bg-img");
				}
				$('form input[type="text"].bfh-phone, form input[type="tel"].bfh-phone, span.bfh-phone').each(function(){var $phone;$phone=$(this);$phone.bfhphone($phone.data())});

			}
	 });
});




 $( "input[name='Referer']" ).each(function() {$( this ).val( document.referrer );});
/* RECEVOIR DOCUMENTATION SCROOL */
$(window).scroll(function() {
	if ($(this).scrollTop()<500 || $(this).scrollTop() > $(document).height() - $(window).height() - 200 )
	{
		$('.section-recevoir-une-documentation').fadeOut();
	}
	else
	{
		$('.section-recevoir-une-documentation').fadeIn();
	}

});

/* FORMULAIRE BOOTSTRAP */
(function() {
	'use strict';
	window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
	form.addEventListener('submit', function(event) {
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		form.classList.add('was-validated');
	}, false);
});
}, false);
})();


/* Pour referral hash id */
//get Parametre
function getParameter(theParameter) {
  var params = window.location.search.substr(1).split('&');
  for (var i = 0; i < params.length; i++) {
    var p=params[i].split('=');
     if (p[0] == theParameter) {
      return decodeURIComponent(p[1]);
    }
  }
  return false;
}

function getCookie(cname) {
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0)==' ') c = c.substring(1);
  if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
}
return "";
}


function set_referral_hash_in_form(hash){
	if(hash != ""){
		$( "input[name='referral_hash']" ).val(hash );
	}

}

referral_hash =  getParameter('referral_hash');
if(referral_hash != false){
	// j'ai un hash je le stock
	var d = new Date();
	d.setTime(d.getTime() + (70*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = 'referral_hash_ck' + "=" + referral_hash + ";path=/;" + expires;
	set_referral_hash_in_form(getCookie('referral_hash_ck'));
}else{
	// pas de params on regarde si cookie
	set_referral_hash_in_form(getCookie('referral_hash_ck'));
}


$('#close-search').click(function () {
		$('.nav-item').each(function (index) {
				$(this).show()
		})
		$("#wrapper-search").animate({width: '60%'}, 300 ).hide();
		$('#open-search').show()
		$('#input-search').val('');
});

$('#open-search').click(function (e) {
		$('#open-search').hide()
		$('.nav-item').each(function (index) {
				$(this).hide()
		})
		$('#wrapper-search').animate({width: '90%'}, 300 ).show()
		$('#input-search').focus();
});

$('#close-search-mobile').click(function () {
		$('#button-menu').show()
		$('.nav-item').each(function (index) {
				$(this).show()
		})
		$("#wrapper-search-mobile").animate({width: '20%'}, 300 ).hide();
		$('#search-open-mobile').show()
		$('#input-search-mobile').val('');
});

$('#search-open-mobile').click(function (e) {
		e.preventDefault();
		$('#button-menu').hide()
		$('#search-open-mobile').hide()
		$('.nav-item').each(function (index) {
				$(this).hide()
		})
		$('#wrapper-search-mobile').animate({width: '50%'}, 300 ).show()
		$('#input-search-mobile').focus();
});

$(document).delegate('.tosfdc', "submit", function() {
	$(this).find('button[type="submit"]').replaceWith( '<p style="color: #000000;font-size: 16px;"><i class="fas fa-circle-notch fa-spin"></i>Votre demande est en cours de traitement</p>' );
	var val_input = $(this).find("[name='Request_Url']").val();
	var val_query = window.location.toString();
	var queryInput = val_input.split("?");
	var querystring = val_query.split("?");
	if (queryInput.length == 1 && querystring.length > 1) {
			$(this).find("[name='Request_Url']").val($(this).find("[name='Request_Url']").val()+"?"+querystring[1]);
	}
});



function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}

// pour animation placeholder
var i = 0;
var txt = 'Rechercher une formation'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
	if(i== 0){
		document.querySelector(".quicksearch").placeholder  ="";
	}
  if (i < txt.length) {
    document.querySelector(".quicksearch").placeholder  += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else{
		i = 0
		  setTimeout(typeWriter, 2000);
	}
}
$( document ).ready(function() {
	if(	document.querySelector(".quicksearch")){
		  typeWriter();
	}
});

var get_utm = function(){
  var self = window.location.toString();
  var querystring = self.split("?");
  if (querystring.length > 1) {
   $( "a" ).each(function( ) {
		 $(this).attr("href",$(this).attr("href")+"?"+querystring[1]);
  	});
  }
}

setTimeout(function(){get_utm();}, 1000);
