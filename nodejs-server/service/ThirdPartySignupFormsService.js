'use strict';


/**
 * Get SignupForm  for Magento
 * <h4>Get SignupForm  for Magento</h4> <b>Query String Parameters : </b> <table> <thead> <tr> <th>Parameter</th> <th>Required</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>ID</td> <td>Required</td> <td>int</td> <td>Listbuilder ID</td> </tr> </tbody> </table> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td>string</td>       <td>Data</td>     </tr>     <tr>       <td>ErrorCode</td>       <td>String</td>       <td>Error Code</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
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
    "Data" : "<script type=\"text/javascript\" src=\"//ajax.googleapis.com/ajax/libs/prototype/1.7.1.0/prototype.js\"></script><!-- BEGIN: Benchmark Email Magento Newsletter Replacement Code -->\r\n<script type=\"text/javascript\" >\r\n//<![CDATA[\r\nEvent.observe(window, 'load', function() { $('newsletter-validate-detail').writeAttribute('action','http://lb.benchmarkemail.com//code/lbformMagento?mFcQnoBFKMTKykNc3Zyx9OZXUawFafLCtNH47%252FtzaqY25INw4ATiAA%253D%253D');\r\n$('newsletter').writeAttribute('name', 'fldEmail');\r\n});\r\n//]]>\r\n</script>\r\n<!--End Benchmark Email Magento Newsletter Replacement Code-->",
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
 * <h4>Get Third Party SignupForm Tumbler</h4>  <b>Query String Parameters :  </b> <table> <thead> <tr> <th>Parameter</th> <th>Required</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>ID</td> <td>Required</td> <td>int</td> <td>Listbuilder ID</td> </tr> <tr> <td>Title</td> <td>optional</td> <td>String</td> <td>Title Text</td> </tr> <tr> <td>Language</td> <td>optional</td> <td>string</td> <td>Language</td> </tr> <tr> <td>Subscribe</td> <td>optional</td> <td>string</td> <td>Subscribe Text</td> </tr> <tr> <td>Email</td> <td>optional</td> <td>string</td> <td>Email Text</td> </tr> </tbody> </table> <h4>Response Body Parameters :</h4> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td>string</td>       <td>Data</td>     </tr>     <tr>       <td>ErrorCode</td>       <td>String</td>       <td>Error Code</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
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
    "Data" : "<!-- BEGIN: Benchmark Tumbler Newsletter Code -->\r\n<link rel=\"stylesheet\" href=\"http://www.benchmarkemail.com/style/colorbox.css\" type=\"text/css\" />\r\n<script type=\"text/javascript\" src=\"http://www.benchmarkemail.com/script/jquery-1.7.1.min.js\"></script>\r\n<script type=\"text/javascript\" src=\"http://www.benchmarkemail.com/script/jquery.validate.js\"></script>\r\n<script type=\"text/javascript\" src=\"http://www.benchmarkemail.com/script/jquery.colorbox.js\"></script>\r\n<script type=\"text/javascript\">var tpopup = null; </script>\r\n<script type=\"text/javascript\">\r\n$(document).ready( function($) { \r\nvar newsletter_link = document.createElement('a');\r\nnewsletter_link.setAttribute('href','http://www.benchmarkemail.com/PopupTumbler?mFcQnoBFKMSUiZ%252BMsnO2teZXUawFafLCtNH47%252FtzaqYqkRxJqNVIKr%252F%252FnnISjbyJzwF9AOzfCF%252B6i4VJgibNsA%253D%253D'); \r\nnewsletter_link.setAttribute('class', 'tumblerPopup');\r\nnewsletter_link.setAttribute('id', 'tumblr-signup');\r\nnewsletter_link.setAttribute('style', 'border:none; position:absolute; top:36px;right:3px; z-index:9999;'); \r\nvar newsletter_image = document.createElement('img');\r\nnewsletter_image.setAttribute('src', 'http://www.benchmarkemail.com/images/web4/icn/newsletter.png');\r\nnewsletter_image.setAttribute('style', 'border:none;');\r\nnewsletter_link.appendChild(newsletter_image);  \r\n$('body:first').append(newsletter_link); \r\n$(\".tumblerPopup\").colorbox({ \r\n             top:\"20%\", overlayClose:true, escKey:true, iframe:true, innerWidth:546, innerHeight:200, \r\n             onComplete: function(){} \r\n}); \r\n return false; \r\n});\r\n </script>\r\n<!-- End: Benchmark Tumbler Newsletter Code -->\r\n",
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
 * <h4>Get SignupForm For Unbounce</h4> <b>Query String Parameters : </b> <table> <thead> <tr> <th>Parameter</th> <th>Required</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>ID</td> <td>Required</td> <td>int</td> <td>ContactMaster ID</td> </tr> </tbody> </table> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td>string</td>       <td>Data</td>     </tr>     <tr>       <td>ErrorCode</td>       <td>String</td>       <td>Error Code</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
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

