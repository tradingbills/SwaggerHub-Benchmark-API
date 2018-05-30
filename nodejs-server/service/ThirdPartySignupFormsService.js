'use strict';


/**
 * Get SignupForm  for Magento
 * Get SignupForm  for Magento  Query String Parameters :         Parameter  Required  Type  Description          ID  Required  int  Listbuilder ID        Response Body Parameters :                    Parameter        Type        Description                            Data        string        Data                    ErrorCode        String        Error Code                    Status        string        1 = Successful, -1 Error            
 *
 * iD String 
 * authToken String 
 * contentType String 
 * returns GetSignupformForMagento
 **/
exports.clientIntegrationsSignupFormMagentoGet = function(iD,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : "<script type=\"text/javascript\" src=\"//ajax.googleapis.com/ajax/libs/prototype/1.7.1.0/prototype.js\"></script><!-- BEGIN: Benchmark Email Magento Newsletter Replacement Code -->\r  <script type=\"text/javascript\" >\r  //<![CDATA[\r  Event.observe(window, 'load', function() { $('newsletter-validate-detail').writeAttribute('action','http://lb.benchmarkemail.com//code/lbformMagento?mFcQnoBFKMTKykNc3Zyx9OZXUawFafLCtNH47%252FtzaqY25INw4ATiAA%253D%253D');\r  $('newsletter').writeAttribute('name', 'fldEmail');\r  });\r  //]]>\r  </script>\r  <!--End Benchmark Email Magento Newsletter Replacement Code-->",
    "ErrorCode" : "",
    "Status" : "1"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get SignupForm Tumbler
 * Get Third Party SignupForm Tumbler    Query String Parameters :          Parameter  Required  Type  Description          ID  Required  int  Listbuilder ID      Title  optional  String  Title Text      Language  optional  string  Language      Subscribe  optional  string  Subscribe Text      Email  optional  string  Email Text        Response Body Parameters :                    Parameter        Type        Description                            Data        string        Data                    ErrorCode        String        Error Code                    Status        string        1 = Successful, -1 Error            
 *
 * iD String 
 * title String 
 * subscribe String 
 * email String 
 * language String 
 * authToken String 
 * contentType String 
 * returns GetSignupformForTumbler
 **/
exports.clientIntegrationsSignupFormTumblerGet = function(iD,title,subscribe,email,language,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : "<!-- BEGIN: Benchmark Tumbler Newsletter Code -->\r  <link rel=\"stylesheet\" href=\"http://www.benchmarkemail.com/style/colorbox.css\" type=\"text/css\" />\r  <script type=\"text/javascript\" src=\"http://www.benchmarkemail.com/script/jquery-1.7.1.min.js\"></script>\r  <script type=\"text/javascript\" src=\"http://www.benchmarkemail.com/script/jquery.validate.js\"></script>\r  <script type=\"text/javascript\" src=\"http://www.benchmarkemail.com/script/jquery.colorbox.js\"></script>\r  <script type=\"text/javascript\">var tpopup = null; </script>\r  <script type=\"text/javascript\">\r  $(document).ready( function($) { \r  var newsletter_link = document.createElement('a');\r  newsletter_link.setAttribute('href','http://www.benchmarkemail.com/PopupTumbler?mFcQnoBFKMSUiZ%252BMsnO2teZXUawFafLCtNH47%252FtzaqYqkRxJqNVIKr%252F%252FnnISjbyJzwF9AOzfCF%252B6i4VJgibNsA%253D%253D'); \r  newsletter_link.setAttribute('class', 'tumblerPopup');\r  newsletter_link.setAttribute('id', 'tumblr-signup');\r  newsletter_link.setAttribute('style', 'border:none; position:absolute; top:36px;right:3px; z-index:9999;'); \r  var newsletter_image = document.createElement('img');\r  newsletter_image.setAttribute('src', 'http://www.benchmarkemail.com/images/web4/icn/newsletter.png');\r  newsletter_image.setAttribute('style', 'border:none;');\r  newsletter_link.appendChild(newsletter_image);  \r  $('body:first').append(newsletter_link); \r  $(\".tumblerPopup\").colorbox({ \r               top:\"20%\", overlayClose:true, escKey:true, iframe:true, innerWidth:546, innerHeight:200, \r               onComplete: function(){} \r  }); \r   return false; \r  });\r   </script>\r  <!-- End: Benchmark Tumbler Newsletter Code -->\r  ",
    "ErrorCode" : "",
    "Status" : "1"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get SignupForm For Unbounce
 * Get SignupForm For Unbounce  Query String Parameters :         Parameter  Required  Type  Description          ID  Required  int  ContactMaster ID        Response Body Parameters :                    Parameter        Type        Description                            Data        string        Data                    ErrorCode        String        Error Code                    Status        string        1 = Successful, -1 Error            
 *
 * iD String 
 * authToken String 
 * contentType String 
 * returns GetSignupformForUnbounce
 **/
exports.clientIntegrationsSignupFormUnbounceGet = function(iD,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : "http://www.benchmarkemail.com/integration/unbounce/4gcr%2FApPM0I%2BU2bszJyvrueGExx%2BgJrGDnYNlzjdYSViw2JIYnUAEfOLD8Wxth7K",
    "ErrorCode" : "",
    "Status" : "1"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

