(function () {
  var js = '';
  js += "window.lock = false;";
  js += "var xy = document.getElementById('pow_xs_XieyiCheck');";
  js += "if (xy) {";
  js += "  xy.checked = true;";
  js += "  window.touzi();";
  js += "} else {";
  js += "  console.log('no xy found');";
  js += "  if (jQuery) {";
  js += "    var cjcheck = window.setInterval(function () {";
  js += "      var cjbtn = $('.Dlb_conList_right.Dlb_cj').filter(function () { return $(this).find('input').val() >= 10000; }).find('.Dlb_cjBtn').first();";
  js += "      if (cjbtn.length) {";
  js += "        window.clearInterval(cjcheck);";
  js += "        cjbtn.click();";
  js += "        setTimeout(function () { jQuery('#msgDiv14 .pow_xs_Sub').click(); }, 200);";
  js += "        setTimeout(function () { jQuery('#msgDiv10 .pow_xs_Sub').click(); }, 400);";
  js += "      }";
  js += "    }, 500);";
  js += "  }";
  js += "}";
  var script = document.createElement('script');
  script.appendChild(document.createTextNode(js));
  document.body.appendChild(script);
})();
