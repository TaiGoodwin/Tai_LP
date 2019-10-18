function getParameterByName(name) {
  var url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function(){
    // Adv pixel
      if (document.cdnParameters.cake_offer_id != '' && typeof document.cdnParameters.cake_offer_id !== 'undefined' && document.cdnParameters.cake_adv_event_id != '' && typeof document.cdnParameters.cake_adv_event_id !== 'undefined' && document.cdnParameters.lp_tracking_prefix != ''  && typeof document.cdnParameters.lp_tracking_prefix !== 'undefined'  ) { //REVIEW: Add check for cake_offer_id AND cake_adv_event_id AND adv_tracking_prefix
        var image = new Image(1,1);
        image.src = "https://in-the-news.org.uk/p.ashx?o="+document.cdnParameters.cake_offer_id+"&e="+document.cdnParameters.cake_adv_event_id+"&f=img&r=" + getParameterByName('ckm_request_id') + '&t='+document.cdnParameters.lp_tracking_prefix+'-' + window.ub.page.variantId + '|' + window.outerWidth + 'x' + window.outerHeight;
      }
    // Adv Pixel

    // 10sec pixel
      if (document.cdnParameters.cake_offer_id != '' && typeof document.cdnParameters.cake_offer_id !== 'undefined' && document.cdnParameters.cake_10s_event_id != '' && typeof document.cdnParameters.cake_10s_event_id !== 'undefined') { //REVIEW: Add check for cake_offer_id AND cake_10s_event_id
        setTimeout(function(){
          var image = new Image(1,1);
          image.src = "https://in-the-news.org.uk/p.ashx?o="+document.cdnParameters.cake_offer_id+"&e="+document.cdnParameters.cake_10s_event_id+"&f=img&r=" + getParameterByName('ckm_request_id');
          },10000);
      }
    // 10sec pixel
});
