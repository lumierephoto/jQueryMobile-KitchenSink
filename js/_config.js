//////////////////////////
//
// Config
// Set your app id here.
//
//////////////////////////

if (window.location.host == 'example.mobicreations.net' || window.location.host == 'www.example.mobicreations.net') {
  var gAppID = '155223874595014';
}
//Add your Application ID here
else {
  var gAppID = '155223874595014';
}

if (gAppID == '155223874595014') {
  //alert('You need to enter your App ID in js/_config.js on line 13.');
}

//Initialize the Facebook SDK
FB.init({ 
  appId: gAppID, 
  status: true,
  cookie: true,
  xfbml: true,
  frictionlessRequests: true,
  useCachedDialogs: true,
  oauth: true
});