//*** Stops pages and address bar from jumping
$(document).bind("mobileinit", function(){
$.extend($.mobile, {
metaViewportContent: "width=device-width, height=device-height, minimum-scale=1, maximum-scale=1"
});
});