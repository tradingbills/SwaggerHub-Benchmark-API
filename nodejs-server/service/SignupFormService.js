'use strict';


/**
 * Delete an existing Signup Form
 * <h4>Deletes an existing signup form</h4>  <b>Query string Parameters : </b> None <br>  <b>Request Body Parameters : </b>  <table>  <thead>  <tr>  <th>Parameter</th>  <th>Required</th>  <th>type</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>{ID}</td>  <td>required</td>  <td>string</td>  <td>ID of the signup Form</td>  </tr>  </tbody>  </table>  <b>Response Body Parameters : </b>  <table>  <thead>  <tr>  <th>Parameter</th>  <th>type</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>Response</td>  <td>string</td>  <td>1 if successful, -1 if error</td>  </tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns DeleteAnExistingSignupForm
 **/
exports.signupFormByIDDelete = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a details of Signup Form
 * <h4>Get a details of Signup Form</h4> <b>Query string parameters:</b>None<br> <b>Request Body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Signup Form ID</td>     </tr>   </tbody> </table>  <b>Response Body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SignupFormSignupFormData\">SignupFormData</a></td>       <td>Details for the signup form</td>     </tr>     <tr>       <td>Errors</td>       <td>ErrorData</td>       <td>Array of errors</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetADetailsOfSignupForm
 **/
exports.signupFormByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the Signup Form
 * <h4>Update the signup Form </h4>  <b>Query String Parameters:</b> None  <b>Request Body Parameters:</b> <table>   <thead>     <tr>       <th>Key</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Signup Form ID</td>     </tr>     <tr>       <td>Detail</td>       <td>Required</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SignupFormSignupFormData\" >SignupFormData </a></td>       <td>Details for the signup form</td>     </tr>   </tbody> </table>  <b>Response Body Parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SignupFormSignupFormData\" >SignupFormData </a></td>       <td>The details for the signup Form</td>     </tr>     <tr>       <td>Errors</td>       <td>ErrorData</td>       <td>Array of errors</td>     </tr>   </tbody> </table>
 *
 * body UpdateTheSignupFormrequest 
 * authToken String 
 * contentType String 
 * iD String 
 * returns UpdateTheSignupForm
 **/
exports.signupFormByIDPatch = function(body,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the code for the Signup Form button
 * <h4>Get the code for the signup form button</h4> <b>Query string parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Signup Form ID</td>     </tr>   </tbody> </table>  <b>Request Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Language</td>       <td>Optional</td>       <td>string</td>       <td>Language</td>     </tr>   </tbody> </table> <b>Response body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>     <tr>       <td>Data</td>       <td>string</td>       <td>Code for the Signup Form Button</td>     </tr>   </tbody> </table>
 *
 * language String 
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetTheCodeForTheSignupFormButton
 **/
exports.signupFormCodeButtonByIDGet = function(language,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : "<!-- BEGIN: Signup Form Button Code from Benchmark Email Ver 2.0 ------>\r\n\r\n<div align=\"center\">\r\n<a href=\"http://lb.benchmarkemail.com//listbuilder/signupnew?rL7EU6XzCdqwGQjY80AtK%252FG6VTMKFmIo1aFTXjeWlL5cfhd4WoyZTOYqVymyouyi\" \r\n target=_new><img src=\"\" alt=\"Benchmark Email\" border=0 /></a>\r\n</div>\r\n\r\n<!-- END: Signup Form Button Code from Benchmark Email Ver 2.0 ---------->\r\n<!-- BEGIN: Email Marketing By Benchmark Email ------>\r\n\r\n<div align=\"center\" style=\"padding-top:5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#999999;\">\r\n<div align=\"center\" style=\"padding-top:5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#999999;\"><a href=\"//www.benchmarkemail.com\" target=\"_new\" style=\"text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#999999;\">Email Marketing Services</a> by Benchmark</div></div>\r\n\r\n<!-- END: Email Marketing By Benchmark Email ---------->\r\n",
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
 * Get the code for Preview for the Signup Form
 * <h4>Get the code for Preview for the Signup Form</h4> <b>Query string parameters:</b> <table>   <thead>     <tr>       <th>Key</th>       <th>Required</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>Signup Form ID</td>     </tr>   </tbody> </table>  <b>Request Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Language</td>       <td>Optional</td>       <td>string</td>       <td>Language for the signup Form</td>     </tr>     <tr>       <td>Style</td>       <td>Optional</td>       <td>string</td>       <td>Style CSS if required</td>     </tr>   </tbody> </table> <b>Request Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>     <tr>       <td>Data</td>       <td>string</td>       <td>Code for the Signup Form Preview</td>     </tr>   </tbody> </table>
 *
 * language String 
 * style String 
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetTheCodeForPreviewForTheSignupForm
 **/
exports.signupFormCodePreviewByIDGet = function(language,style,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : "<!-- BEGIN: Signup Form Manual Code from Benchmark Email Ver 2.0 ------>\r\n\r\n\r\n<script type=\"text/javascript\">\r\nfunction CheckField989011(fldName, frm){ if ( frm[fldName].length ) { for ( var i = 0, l = frm[fldName].length; i < l; i++ ) {  if ( frm[fldName].type =='select-one' ) { if( frm[fldName][i].selected && i==0 && frm[fldName][i].value == '' ) { return false; }  if ( frm[fldName][i].selected ) { return true; } }  else { if ( frm[fldName][i].checked ) { return true; } }; } return false; } else { if ( frm[fldName].type == \"checkbox\" ) { return ( frm[fldName].checked ); } else if ( frm[fldName].type == \"radio\" ) { return ( frm[fldName].checked ); } else { frm[fldName].focus(); return (frm[fldName].value.length > 0); }} }\r\nfunction rmspaces(x) {var leftx = 0;var rightx = x.length -1;while ( x.charAt(leftx) == ' ') { leftx++; }while ( x.charAt(rightx) == ' ') { --rightx; }var q = x.substr(leftx,rightx-leftx + 1);if ( (leftx == x.length) && (rightx == -1) ) { q =''; } return(q); }\r\nfunction checkfield(data) {if (rmspaces(data) == \"\"){return false;}else {return true;}}\r\nfunction isemail(data) {var flag = false;if (  data.indexOf(\"@\",0)  == -1 || data.indexOf(\"\\\\\",0)  != -1 ||data.indexOf(\"/\",0)  != -1 ||!checkfield(data) ||  data.indexOf(\".\",0)  == -1  ||  data.indexOf(\"@\")  == 0 ||data.lastIndexOf(\".\") < data.lastIndexOf(\"@\") ||data.lastIndexOf(\".\") == (data.length - 1)   ||data.lastIndexOf(\"@\") !=   data.indexOf(\"@\") ||data.indexOf(\",\",0)  != -1 ||data.indexOf(\":\",0)  != -1 ||data.indexOf(\";\",0)  != -1  ) {return flag;} else {var temp = rmspaces(data);if (temp.indexOf(' ',0) != -1) { flag = true; }var d3 = temp.lastIndexOf('.') + 4;var d4 = temp.substring(0,d3);var e2 = temp.length  -  temp.lastIndexOf('.')  - 1;var i1 = temp.indexOf('@');if (  (temp.charAt(i1+1) == '.') || ( e2 < 1 ) ) { flag = true; }return !flag;}}\r\nfunction CheckFieldD989011(fldH, chkDD, chkMM, chkYY, reqd, frm){ var retVal = true; var dt = validDate989011(chkDD, chkMM, chkYY, frm); var nDate = frm[chkMM].value  + \" \" + frm[chkDD].value + \" \" + frm[chkYY].value; if ( dt == null && reqd == 1 ) {\tnDate = \"\"; retVal = false;\t} else if ( (frm[chkDD].value != \"\" || frm[chkMM].value != \"\" || frm[chkYY].value != \"\") && dt == null) { retVal = false; nDate = \"\";} if ( retVal ) {frm[fldH].value = nDate;} return retVal; }\r\nfunction validDate989011(chkDD, chkMM, chkYY, frm) {var objDate = null;\tif ( frm[chkDD].value != \"\" && frm[chkMM].value != \"\" && frm[chkYY].value != \"\" ) {var mSeconds = (new Date(frm[chkYY].value - 0, frm[chkMM].selectedIndex - 1, frm[chkDD].value - 0)).getTime();var objDate = new Date();objDate.setTime(mSeconds);if (objDate.getFullYear() != frm[chkYY].value - 0 || objDate.getMonth()  != frm[chkMM].selectedIndex - 1  || objDate.getDate() != frm[chkDD].value - 0){objDate = null;}}return objDate;}\r\nfunction _checkSubmit989011(frm){\r\nif ( !isemail(frm[\"fldEmail\"].value) ) { \r\n   alert(\"Please enter the Email\");\r\n   return false;\r\n}\r\n return true; }\r\n</script>\r\n<div align=\"center\">\r\n<div style=\"display:inline;\" action=\"https://lb.benchmarkemail.com//code/lbform\" method=post name=\"frmLB989011\" accept-charset=\"UTF-8\" onsubmit=\"return _checkSubmit989011(this);\" >\r\n<input type=hidden name=successurl value=\"http://www.google.com\" />\r\n<input type=hidden name=errorurl value=\"https://lb.benchmarkemail.com//Code/Error\" />\r\n<input type=hidden name=token value=\"mFcQnoBFKMRJuds7L%2B39DuZXUawFafLCtNH47%2FtzaqY25INw4ATiAA%3D%3D\" />\r\n<input type=hidden name=doubleoptin value=\"\" />\r\n<table id=tblFormLogo989011 width=\"220\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" ><tr><td id='tdLogo989011'></td></tr></table>\r\n\r\n<div class=bmform_outer989011 id=tblFormData989011 style=\"width:220px;\" >\r\n<div class=bmform_inner989011>\r\n<div class=bmform_head989011 id=tdHeader989011>\r\n<div class=bm_headetext989011>Join our mailing list</div></div>\r\n<div class=bmform_body989011>\r\n<div class=bmform_introtxt989011 id=tdIntro989011 >\r\nEnter your email address to join our mailing list<br />\r\n</div>\r\n<div id=tblFieldData989011 style='text-align:left;'>\r\n\r\n<div class=bmform_frmtext989011>\r\nEmail <span style='color:#CC0000;font-size:125%;'> *</span> </div>\r\n<input type=text class=bmform_frm989011 name=fldEmail maxlength=100 />\r\n\r\n<div class=bmform_frmtext989011>\r\nFirst Name</div>\r\n<input type=text class=bmform_frm989011 name=fldfirstname maxlength=100 />\r\n\r\n<div class=bmform_frmtext989011>\r\nLast Name</div>\r\n<input type=text class=bmform_frm989011 name=fldlastname maxlength=100 />\r\n</div>\r\n\r\n<div class=bmform_button989011><input type=\"button\" id=\"btnSubmit\" value=\"Join List\"  krydebug=\"1751\" class=bmform_submit989011 />\r\n</div></div>\r\n<div class=bmform_footer989011><div class=footer_bdy989011><div class=footer_txt989011></div></div></div>\r\n</div></div>\r\n<table id=\"tblRequiredField989011\" width=\"220\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" ><tr><td align=right style='font-size:10px;'>\r\n* Required Field\r\n</td></tr></table>\r\n</div></div>\r\n",
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
 * Get the contact fields of the Signup Form
 * <h4>Get the contact fields of the signup Form</h4> <b>Query string parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Signup Form ID</td>     </tr>   </tbody> </table>  <b>Request Body parameters:</b> None  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td>ContactField</td>       <td>Array of contact fields</td>     </tr>     <tr>       <td>Errors</td>       <td>ErrorData</td>       <td>Array of error messages</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>     <tr>       <td>Count</td>       <td>string</td>       <td>Number if fields</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetTheContactFieldsOfTheSignupForm
 **/
exports.signupFormContactFieldsByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 28,
    "Data" : [ {
      "Column" : "Email",
      "Extra" : [ ],
      "IsEmail" : "1",
      "IsIncluded" : "1",
      "IsRequired" : "1",
      "Label" : "Email",
      "Name" : "Email",
      "Order" : 1
    }, {
      "Column" : "firstname",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "1",
      "IsRequired" : "0",
      "Label" : "First Name",
      "Name" : "First Name",
      "Order" : 2
    }, {
      "Column" : "lastname",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "1",
      "IsRequired" : "0",
      "Label" : "Last Name",
      "Name" : "Last Name",
      "Order" : 3
    }, {
      "Column" : "middlename",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Middle Name",
      "Order" : 100
    }, {
      "Column" : "field1",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Address",
      "Order" : 100
    }, {
      "Column" : "field2",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "City",
      "Order" : 100
    }, {
      "Column" : "field3",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "State",
      "Order" : 100
    }, {
      "Column" : "field4",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Zip",
      "Order" : 100
    }, {
      "Column" : "field5",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Country",
      "Order" : 100
    }, {
      "Column" : "field6",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Phone",
      "Order" : 100
    }, {
      "Column" : "field7",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Fax",
      "Order" : 100
    }, {
      "Column" : "field8",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Cell Phone",
      "Order" : 100
    }, {
      "Column" : "field9",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Company Name",
      "Order" : 100
    }, {
      "Column" : "field10",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Job Title",
      "Order" : 100
    }, {
      "Column" : "field11",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Business Phone",
      "Order" : 100
    }, {
      "Column" : "field12",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Business Fax",
      "Order" : 100
    }, {
      "Column" : "field13",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Business Address",
      "Order" : 100
    }, {
      "Column" : "field14",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Business City",
      "Order" : 100
    }, {
      "Column" : "field15",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Business State",
      "Order" : 100
    }, {
      "Column" : "field16",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Business Zip",
      "Order" : 100
    }, {
      "Column" : "field17",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Business Country",
      "Order" : 100
    }, {
      "Column" : "field18",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Notes",
      "Order" : 100
    }, {
      "Column" : "field19",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Date 1",
      "Order" : 100
    }, {
      "Column" : "field20",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Date 2",
      "Order" : 100
    }, {
      "Column" : "field21",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Extra 3",
      "Order" : 100
    }, {
      "Column" : "field22",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Extra 4",
      "Order" : 100
    }, {
      "Column" : "field23",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Extra 5",
      "Order" : 100
    }, {
      "Column" : "field24",
      "Extra" : [ ],
      "IsEmail" : "0",
      "IsIncluded" : "0",
      "IsRequired" : "0",
      "Label" : "",
      "Name" : "Extra 6",
      "Order" : 100
    } ],
    "Errors" : [ ],
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
 * Copy an existing Signup Form
 * <h4>Copies an existing signup form</h4>  <b>Query String Parameters : </b> None <br>  <b>Request Body Parameters:</b>  <table>  <thead>  <tr>  <th>Parameter</th>  <th>Required</th>  <th>Type</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>ID</td>  <td>required</td>  <td>string</td>  <td>ID of the signup Form</td>  </tr>  <tr>  <td>Name</td>  <td>required</td>  <td>string</td>  <td>Name of the new signup form</td>  </tr>  </tbody>  </table>  <b>Response Body Parameters:</b>  <table>  <thead>  <tr>  <th>Parameter</th>  <th>Type</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>Response</td>  <td>string</td>  <td>ID of the signup Form</td>  </tr>  </tbody>  </table>
 *
 * body CopyAnExistingSignupFormrequest 
 * authToken String 
 * contentType String 
 * iD String 
 * returns CopyAnExistingSignupForm
 **/
exports.signupFormCopyByIDPost = function(body,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "989011"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets a list of Signup Forms
 * <h4>Gets a list of signup forms in the user's account</h4> <b>Query string parameters : </b> <table> <thead> <tr> <th>Parameter</th> <th>Required</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>PageNumber</td> <td>optional</td> <td>int</td> <td>Page Number</td> </tr> <tr> <td>PageSize</td> <td>optional</td> <td>int</td> <td>Number of records to show per page</td> </tr> <tr> <td>Filter</td> <td>optional</td> <td>string</td> <td>Filter text</td> </tr> <tr> <td>FilterField</td> <td>optional</td> <td>string</td> <td>The column to filter on <code>lb_name</code> or <code>contact_master_id</code>, <code>default blank</code></td> </tr> <tr> <td>OrderBy</td> <td>optional</td> <td>string</td> <td>The column to sort on <code>name</code>, <code>date</code> or <code>size</code></td> </tr> <tr> <td>SortOrder</td> <td>optional</td> <td>string</td> <td>The column to sort as <code>asc</code> or <code>desc</code></td> </tr> </tbody> </table> <b>Response Body Parameters : </b> <table> <thead> <tr> <th>Parameter</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>Count</td> <td>int</td> <td>Total number</td> </tr> <tr> <td>Status</td> <td>string</td> <td>1 if successful, -1 if error</td> </tr> <tr> <td>Data</td> <td>SignupFormListData</td> <td>Array of signup form data list returned.</td> </tr> </tbody> </table>
 *
 * pageNumber String 
 * pageSize String 
 * filter String 
 * filterField String 
 * orderBy String 
 * sortOrder String 
 * authToken String 
 * contentType String 
 * returns GetsAListOfSignupFormsAvailableInTheUser'sAccount
 **/
exports.signupFormGet = function(pageNumber,pageSize,filter,filterField,orderBy,sortOrder,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 83,
    "Data" : [ {
      "CreatedDate" : "Sep 22, 2017",
      "ID" : "981025",
      "Lists" : [ {
        "ID" : "15096080",
        "Name" : "Test 1"
      } ],
      "Name" : "FB Signup Form for 1953777941546244",
      "Status" : "",
      "Version" : ""
    }, {
      "CreatedDate" : "Sep 13, 2017",
      "ID" : "977872",
      "Lists" : [ {
        "ID" : "15096080",
        "Name" : "Test 1"
      } ],
      "Name" : "Sep 13 2017 Signup Form",
      "Status" : "",
      "Version" : ""
    }, {
      "CreatedDate" : "Jun 26, 2017",
      "ID" : "861346",
      "Lists" : [ {
        "ID" : "14875499",
        "Name" : "Jun 22 2017 List 3"
      } ],
      "Name" : "Jun 26 2017 Signup Form 1",
      "Status" : "",
      "Version" : ""
    }, {
      "CreatedDate" : "Jun 26, 2017",
      "ID" : "861339",
      "Lists" : [ {
        "ID" : "14875499",
        "Name" : "Jun 22 2017 List 3"
      } ],
      "Name" : "Jun 26 2017 Signup Form",
      "Status" : "",
      "Version" : ""
    }, {
      "CreatedDate" : "Jun 22, 2017",
      "ID" : "860001",
      "Lists" : [ {
        "ID" : "14864954",
        "Name" : "dsadsad"
      } ],
      "Name" : "Classic mahesh",
      "Status" : "",
      "Version" : ""
    } ],
    "Errors" : [ ],
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
 * Get the link of the Signup form
 * <h4>Get the link of the Signup form</h4> <b>Query String Parameters:</b>None<br> <b>Request Body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Signup Form ID</td>     </tr>   </tbody> </table> <b>Response Body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>     <tr>       <td>Data</td>       <td>string</td>       <td>URL for the Signup Form</td>     </tr>     <tr>       <td>Errors</td>       <td>ErrorData</td>       <td>Array of errors</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetTheLinkOfTheSignupForm
 **/
exports.signupFormLinkByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : "http://lb.benchmarkemail.com//listbuilder/signupnew?rL7EU6XzCdqwGQjY80AtK%252FG6VTMKFmIo1aFTXjeWlL7b4jB0jmIliuYqVymyouyi",
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
 * Creating a Signup Form
 * <h4>Creates a new signup form </h4>    <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>Name</td>  <td>optional</td>  <td>Name of the signup form</td>  </tr>  <tr>  <td>Lists</td>  <td>optional</td>  <td>List details as ID and Name  [{\"ID\":\"<code>IDOfTheList</code>\", \"Name\":\"<code>NameOfTheList</code>\"},{\"ID\":\"<code>IDOfTheList</code>\", \"Name\":\"<code>NameOfTheList</code>\"}]  </td>  </tr>  <tr>  <td>Version</td>  <td>optional</td>  <td>Version of the form<ul><li><code>1</code> Classic Signup Form</li><li><code>2</code> Embed Signup Form</li><li><code>3</code> Popup Signup Form</li></ul></td>  </tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#SignupFormSignupFormData\">SignupFormData</a></td><td>Signup Form Data</td></tr>  <tr><td>Errors</td><td><a href=\"http://www.benchmarkemail.com/models.htm#SignupFormErrorData\">ErrorData</a></td><td>Errors</td></tr>  </tbody>  </table>
 *
 * body CreatingASignupFormrequest 
 * authToken String 
 * contentType String 
 * returns CreatingASignupForm
 **/
exports.signupFormPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get templates for Signup Form (Classic Only)
 * <h4>Gets templates for signup form</h4>  <b>Query string parameters : </b>  <table>  <thead>  <tr>  <th>Parameter</th>  <th>Required</th>  <th>Type</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>Language</td>  <td>optional</td>  <td>string</td>  <td>Language</td>  </tr>  <tr>  <td>Filter</td>  <td>optional</td>  <td>int</td>  <td>Template Category ID</td>  </tr>  </tbody>  </table>  <b>Response Body parameters : </b>  <table>  <thead>  <tr>  <th>Parameter</th>  <th>Type</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>Count</td>  <td>int</td>  <td>Number of results</td>  </tr>  <tr>  <td>Status</td>  <td>String</td>  <td>1 if successful, -1 if error</td>  </tr>  <tr>  <td>Data</td>  <td><a href=\"http://www.benchmarkemail.com/models.htm#SignupFormTemplateData\" >TemplateData</a></td>  <td>Data</td>  </tr>  </tbody>  </table>
 *
 * language String 
 * filter String 
 * authToken String 
 * contentType String 
 * returns GetTemplatesForSignupForm
 **/
exports.signupFormTemplateGet = function(language,filter,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 12,
    "Data" : [ {
      "ID" : "4",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th6/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th6/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th6_s.gif",
      "Name" : "Stripes",
      "Style" : ".bmform_outer{width:220px;}\r\n.bmform_inner{width:100%; border:0;}\r\n.bmform_head{background-color:#d4b87a; background-repeat:no-repeat; background-image:url(http://www.benchmarkemail.com/images/listbuilder/th6/sk1/images/header.gif);}\r\n.bm_headetext{color:#85231b; font-family:Arial, Helvetica, sans-serif; font-size:28px; font-weight:bold; padding:55px 8px 8px 8px;}\r\n.bmform_body{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th6/sk1/images/body.png); background-position:bottom; background-repeat:no-repeat; background-color:#d4b87a; color:#000000; font-family: Verdana, Geneva, sans-serif; font-size:11px; padding:5px 12px 12px 12px;}\r\n.bmform_introtxt{padding-bottom:12px;}\r\n.bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto; font-weight:bold;}\r\n.bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px;}\r\n.bmform_button{text-align:center; padding-top:15px;}\r\n.bmform_submit{background-color: #ae411b; background-repeat: no-repeat; border: 2px solid #ffffff; color: #FFFFFF; font-family: Verdana,sans-serif; font-size: 11px; font-style: normal; font-weight: bold; text-decoration: none; padding:2px 10px 2px 10px; }\r\n.bmform_footer{background-color:#bd963e; color: #333333; font-family: Verdana,sans-serif; font-size: 11px; height:10px;}\r\n.footer_bdy{}\r\n.footer_txt{qfont-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "8",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th2/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th2/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th2_s.gif",
      "Name" : "Seasons",
      "Style" : ".bmform_outer{width:220px;}\r\n.bmform_inner{width:100%; border:1px solid #ffffff;}\r\n.bmform_head{background-image:none; background-color:#c91313; background-repeat:no-repeat;}\r\n.bm_headetext{color:#FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size:19px; padding:8px; font-weight:bold;}\r\n.bmform_body{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th2/sk1/images/body.jpg); background-position:bottom; background-repeat:no-repeat; background-color:#ef7520; color:#ffffff; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px; padding-bottom:65px;}\r\n.bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:12px;}\r\n.bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto; font-weight:bold;}\r\n.bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px;}\r\n.bmform_button{text-align:left; padding-top:15px;}\r\n.bmform_submit{background-color: #3f1312; border: 1px solid #faecdf; color: #FFFFFF; font-family: Verdana,sans-serif; font-size: 11px; font-style: normal; font-weight: bold; text-decoration: none; padding:3px;}\r\n.bmform_footer{background-repeat: no-repeat; color: #333333; font-family: Verdana,sans-serif; font-size: 11px; padding: 10px;}\r\n.footer_bdy{}\r\n.footer_txt{qfont-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "14",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th4/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th4/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th4_s.gif",
      "Name" : "Mailing List",
      "Style" : ".bmform_outer{width:220px;}\r\n.bmform_inner{width:100%; border:0;}\r\n.bmform_head{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th4/sk1/images/header.gif);  background-color:#dae5ea; background-repeat:no-repeat; padding:12px 8px 12px 50px;}\r\n.bm_headetext{color:#618fa5; font-family:Arial, Helvetica, sans-serif; font-size:16px; font-weight:bold;}\r\n.bmform_body{background-image:none; background-position:inherit; background-repeat:no-repeat; color:#618fa5; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px; background-color:#dddddd;}\r\n.bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:12px;}\r\n.bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto; font-weight:bold;}\r\n.bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px;}\r\n.bmform_button{text-align:center; padding-top:15px;}\r\n.bmform_submit{background-color: #0057AC; background-image:url(http://www.benchmarkemail.com/images/listbuilder/th4/sk1/images/button.jpg); background-position: left top; background-repeat: repeat-x; border: 1px solid #757575; color: #FFFFFF; font-family: Verdana,sans-serif; font-size: 14px; font-style: normal; font-weight: normal; text-decoration: none;}\r\n.bmform_footer{background-repeat:no-repeat; color: #333333; font-family: Verdana,sans-serif; font-size: 11px; padding: 10px;}\r\n.footer_bdy{}\r\n.footer_txt{font-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "11",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th3/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th3/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th3_s.gif",
      "Name" : "Balloons",
      "Style" : ".bmform_outer{width:220px;}\r\n.bmform_inner{width:100%; border:0;}\r\n.bmform_head{background-image:none; background-color:#02394c; background-repeat:no-repeat;}\r\n.bm_headetext{color:#FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size:19px; padding:12px 8px 12px 12px; font-weight:bold;}\r\n.bmform_body{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th3/sk1/images/body.jpg); background-position:bottom; background-repeat:no-repeat; background-color:#b1e7f7; color:#0c0f11; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px; padding-bottom:65px;}\r\n.bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:12px;}\r\n.bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration:none; width: auto; font-weight:bold;}\r\n.bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px;}\r\n.bmform_button{text-align:center; padding-top:15px;}\r\n.bmform_submit{background-color: #06b1e6; border: 0px solid #757575; color: #FFFFFF; font-family: Verdana,sans-serif; font-size: 11px; font-style: normal; font-weight: bold; text-decoration: none; padding:3px; }\r\n.bmform_footer{background-repeat: no-repeat; color: #333333; font-family: Verdana,sans-serif; font-size: 11px; padding: 10px;}\r\n.footer_bdy{}\r\n.footer_txt{qfont-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "19",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th7/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th7/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th7_s.gif",
      "Name" : "Big Arrow",
      "Style" : ".bmform_outer{width:220px;}\r\n.bmform_inner{width:100%; border:0;}\r\n.bmform_head{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th7/sk1/images/header.png); background-repeat:no-repeat; padding:44px 8px 30px 8px;}\r\n.bm_headetext{color:#11274c; font-family:Arial, Helvetica, sans-serif; font-size:16px;}\r\n.bmform_body{color:#24729a; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px; background-color:#dddddd;}\r\n.bmform_introtxt{color:#24729a; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:12px; background-color:#dddddd;}\r\n.bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto;}\r\n.bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px;}\r\n.bmform_button{text-align:center; padding-top:15px;}\r\n.bmform_submit{background-color: #3faae0; background-repeat: no-repeat; border: 2px solid #ffffff; color: #FFFFFF; font-family: Verdana,sans-serif; font-size: 11px; font-style: normal; font-weight: bold; text-decoration: none; padding:2px 10px 2px 10px; }\r\n.bmform_footer{background-repeat: no-repeat; color: #333333; font-family: Verdana,sans-serif; font-size: 11px; padding: 10px;}"
    }, {
      "ID" : "22",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th8/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th8/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th8_s.gif",
      "Name" : "Twist Arrow",
      "Style" : ".bmform_outer{width:220px;}\r\n.bmform_inner{width:100%; border:3px solid #0074bb;}\r\n.bmform_head{background-image: url(http://www.benchmarkemail.com/images/listbuilder/th8/sk1/images/header.png); background-position:top right; background-color:#eaeaea; background-repeat:no-repeat; height:85px;}\r\n.bm_headetext{color:#005fa4; font-family:Arial, Helvetica, sans-serif; font-size:28px; padding:8px 50px 8px 8px; font-weight:bold;}\r\n.bmform_body{background-image:none; background-position:bottom; background-repeat:no-repeat; background-color:#eaeaea; color:#000000; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px;}\r\n.bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:12px;}\r\n.bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align:left; text-decoration:none; width:auto; font-weight:bold;}\r\n.bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:14px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width: 190px; padding:3px;}\r\n.bmform_button{text-align:center; padding-top:15px;}\r\n.bmform_submit{background-color:#3faae0; background-repeat:no-repeat; border:2px solid #ffffff; color:#FFFFFF; font-family:Verdana,sans-serif; font-size:11px; font-style:normal; font-weight:bold; text-decoration:none; padding:2px 10px 2px 10px; }\r\n.bmform_footer{background-color:#eaeaea; background-repeat: no-repeat; color:#000000; font-family:Verdana,sans-serif; font-size:11px; height:1px;}\r\n.footer_bdy{}\r\n.footer_txt{qfont-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "31",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th9/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th9/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th9_s.gif",
      "Name" : "Default",
      "Style" : ".bmform_outer{width:220px;}\r\n.bmform_inner{width:100%; border:1px solid #797a7b;}\r\n.bmform_head{background-color:#d0d6d9; height:37px;}\r\n.bm_headetext{color:#000000; font-family:Arial, Helvetica, sans-serif; font-size:18px; padding:6px 10px 0 10px; font-weight:bold;}\r\n.bmform_body{background-color:#f0f2f3; color:#000000; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px;}\r\n.bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:12px;}\r\n.bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto; font-weight:bold;}\r\n.bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:14px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:190px; padding:3px;}\r\n.bmform_button{text-align:center; padding-top:15px;}\r\n.bmform_submit{}\r\n.bmform_footer{}\r\n.footer_bdy{}\r\n.footer_txt{}"
    }, {
      "ID" : "25",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th10/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th10/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th10_s.gif",
      "Name" : "Steel",
      "Style" : ".bmform_outer{width:220px;}\r\n.bmform_inner{width:100%; border:0;}\r\n.bmform_head{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th10/sk1/images/header.png); background-color:#0b669f; padding:20px 5px 20px 10px;}\r\n.bm_headetext{color:#ffffff; font-family:Arial, Helvetica, sans-serif; font-size:26px;}\r\n.bmform_body{background-image:none; background-position:inherit; background-repeat:no-repeat; color:#618fa5; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px; background-color:#e5e5e5;}\r\n.bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:6px; color:#000000;}\r\n.bmform_frmtext{padding: 10px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto; color:#000000;}\r\n.bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px;}\r\n.bmform_button{text-align:left; padding-top:15px;}\r\n.bmform_submit{background-color: #0083d6; border: 1px solid #757575; color: #FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size: 16px; font-style: normal; font-weight: bold; text-decoration: none; padding:2px 15px 2px 15px;}\r\n.bmform_footer{background-repeat:no-repeat; color: #333333; font-family: Verdana,sans-serif; font-size: 11px;}\r\n.footer_bdy{}\r\n.footer_txt{font-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "28",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th11/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th11/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th11_s.gif",
      "Name" : "Swatches",
      "Style" : ".bmform_outer{width:220px;}\r\n.bmform_inner{border:1px solid #b0aeae;}\r\n.bmform_head{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th11/sk1/images/header.png); background-position:top; background-repeat:no-repeat; background-color:#c7e2ef; padding:60px 5px 0px 5px;}\r\n.bm_headetext{color:#0083d6; font-family:Arial, Helvetica, sans-serif; font-size:22px; text-align:center;}\r\n.bmform_body{color:#618fa5; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px; background-color:#c7e2ef;}\r\n.bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:6px; color:#000000;}\r\n.bmform_frmtext{padding: 10px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto; color:#000000;}\r\n.bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px; border:1px solid #95aab3; padding:2px;}\r\n.bmform_button{text-align:left; padding-top:15px;}\r\n.bmform_submit{background-color: #0083d6; border: 1px solid #7a8a92; color: #FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size: 16px; font-style: normal; font-weight: bold; text-decoration: none; padding:2px 15px 2px 15px;}\r\n.bmform_footer{background-repeat:no-repeat; color: #333333; font-family: Verdana,sans-serif; font-size: 11px; }\r\n.footer_bdy{}\r\n.footer_txt{font-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "36",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th13/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th13/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th13_s.gif",
      "Name" : "Grocer",
      "Style" : ".bmform_outer{width:220px;}\r\n.bmform_inner{border:1px solid #9d9d9d;}\r\n.bmform_head{background-color:#86ad3e; padding:12px 5px 12px 5px;}\r\n.bm_headetext{color:#ffffff; font-family:Arial, Helvetica, sans-serif; font-size:18px; font-weight:bold; text-align:center;}\r\n.bmform_body{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th13/sk1/images/body.png); background-position:bottom; background-repeat:no-repeat; color:#447a1d; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px 12px 60px 12px; background-color:#ffffff; text-align:left;}\r\n.bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:6px; color:#447a1d;}\r\n.bmform_frmtext{padding:10px 0px 3px 0px; display:block; float:none; text-align:left; text-decoration:none; width:auto; color:#447a1d; font-weight:bold;}\r\n.bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:14px; font-style:normal; font-weight:normal; text-align:left; width:186px; border:1px solid #d1d1d1; padding:2px;}\r\n.bmform_button{text-align:left; padding-top:15px;}\r\n.bmform_submit{background-color:#86ad3e; border:1px solid #ffffff; color:#FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size:14px; font-style:normal; font-weight:bold; text-decoration:none; padding:3px 15px 2px 15px;}\r\n.bmform_footer{}\r\n.footer_bdy{}\r\n.footer_txt{}"
    }, {
      "ID" : "39",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th14/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th14/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th14_s.gif",
      "Name" : "Craft",
      "Style" : ".bmform_outer{width:220px;}\r\n.bmform_inner{border:1px solid #9d9d9d;}\r\n.bmform_head{background-color:#ffb000; padding:12px 5px 12px 5px;}\r\n.bm_headetext{color:#ffffff; font-family:Arial, Helvetica, sans-serif; font-size:18px; font-weight:bold; text-align:center;}\r\n.bmform_body{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th14/sk1/images/body.png); background-position:bottom; background-repeat:no-repeat; color:#447a1d; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px 12px 60px 12px; background-color:#ffffff; text-align:left;}\r\n.bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:6px; color:#123145;}\r\n.bmform_frmtext{padding:10px 0px 3px 0px; display:block; float:none; text-align:left; text-decoration:none; width:auto; color:#123145; font-weight:bold;}\r\n.bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:14px; font-style:normal; font-weight:normal; text-align:left; width:186px; border:1px solid #d1d1d1; padding:2px;}\r\n.bmform_button{text-align:left; padding-top:15px;}\r\n.bmform_submit{background-color:#ff9e41; border:1px solid #ffffff; color:#FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size:14px; font-style:normal; font-weight:bold; text-decoration:none; padding:3px 15px 2px 15px;}\r\n.bmform_footer{}\r\n.footer_bdy{}\r\n.footer_txt{}"
    }, {
      "ID" : "42",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th15/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th15/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th15_s.gif",
      "Name" : "Entertainment",
      "Style" : ".bmform_outer{width:220px;}\r\n.bmform_inner{border:1px solid #9d9d9d;}\r\n.bmform_head{background-color:#863636; padding:12px 5px 12px 5px;}\r\n.bm_headetext{color:#ffffff; font-family:Arial, Helvetica, sans-serif; font-size:18px; font-weight:bold; text-align:center;}\r\n.bmform_body{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th15/sk1/images/body.png); background-position:bottom; background-repeat:no-repeat; color:#447a1d; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px 12px 60px 12px; background-color:#f47311; text-align:left;}\r\n.bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:6px; color:#ffffff;}\r\n.bmform_frmtext{padding:10px 0px 3px 0px; display:block; float:none; text-align:left; text-decoration:none; width:auto; color:#ffffff; font-weight:bold;}\r\n.bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; width:186px; border:1px solid #d1d1d1; padding:2px;}\r\n.bmform_button{text-align:left; padding-top:15px;}\r\n.bmform_submit{background-color:#ff9e41; border:1px solid #ffffff; color:#000000; font-family:Arial, Helvetica, sans-serif; font-size:14px; font-style:normal; font-weight:bold; text-decoration:none; padding:3px 15px 2px 15px;}\r\n.bmform_footer{}\r\n.footer_bdy{}\r\n.footer_txt{}"
    } ],
    "Errors" : [ ],
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
 * Sending a test email for signup
 * <h4>Sending a test email for signup</h4> <b>Query string parameters :</b> None <br>  <b>Request Body parameters:</b> <table>   <thead>     <tr>       <th>Key</th>       <th>Required</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>Signup Form ID</td>     </tr>     <tr>       <td>FromEmail</td>       <td>Required</td>       <td>From Email  Address</td>     </tr>     <tr>       <td>FromName</td>       <td>Required</td>       <td>From Name</td>     </tr>     <tr>       <td>ToEmail</td>       <td>Required</td>       <td>Recipient Email Address</td>     </tr>     <tr>       <td>Subject</td>       <td>Required</td>       <td>Subject of the email</td>     </tr>     <tr>       <td>Message</td>       <td>Required</td>       <td>Message in the email</td>     </tr>     <tr>       <td>ConfirmationLink</td>       <td>Required</td>       <td>The link for confirmation of the form</td>     </tr>     <tr>       <td>ClosingMessage</td>       <td>Required</td>       <td>The closing message in the email</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>     <tr>       <td>Errors</td>       <td>ErrorData</td>       <td>Array of error</td>     </tr>   </tbody> </table>
 *
 * body SendingATestEmailForSignuprequest 
 * authToken String 
 * contentType String 
 * iD String 
 * returns SendingATestEmailForSignup
 **/
exports.signupFormTestByIDPost = function(body,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Detail" : "",
    "Error" : [ ],
    "ID" : "",
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

