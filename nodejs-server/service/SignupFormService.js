'use strict';


/**
 * Delete an existing Signup Form
 * Deletes an existing signup form   Query string Parameters :  None     Request Body Parameters :             Parameter   Required   type   Description               {ID}   required   string   ID of the signup Form            Response Body Parameters :             Parameter   type   Description               Response   string   1 if successful, -1 if error         
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
 * Get a details of Signup Form  Query string parameters:None   Request Body parameters:                    Parameter        Required        Type        Description                            ID        Required        string        Signup Form ID                Response Body parameters:                    Parameter        Type        Description                            Status        string        1 if successful, -1 if error                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#SignupFormSignupFormData\">SignupFormData</a>        Details for the signup form                    Errors        ErrorData        Array of errors            
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
 * Update the signup Form     Query String Parameters: None    Request Body Parameters:                    Key        Required        Type        Description                            ID        Required        string        Signup Form ID                    Detail        Required        <a href=\"http://www.benchmarkemail.com/models.htm#SignupFormSignupFormData\" >SignupFormData </a>        Details for the signup form                Response Body Parameters:                    Parameter        Type        Description                            Status        string        1 if successful, -1 if error                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#SignupFormSignupFormData\" >SignupFormData </a>        The details for the signup Form                    Errors        ErrorData        Array of errors            
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
 * Get the code for the signup form button  Query string parameters:                    Parameter        Required        Type        Description                            ID        Required        string        Signup Form ID                Request Body Parameters :                    Parameter        Required        Type        Description                            Language        Optional        string        Language              Response body parameters:                    Parameter        Type        Description                            Status        string        1 if successful, -1 if error                    Data        string        Code for the Signup Form Button            
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
    "Data" : "<!-- BEGIN: Signup Form Button Code from Benchmark Email Ver 2.0 ------>\r  \r  <div align=\"center\">\r  <a href=\"http://lb.benchmarkemail.com//listbuilder/signupnew?rL7EU6XzCdqwGQjY80AtK%252FG6VTMKFmIo1aFTXjeWlL5cfhd4WoyZTOYqVymyouyi\" \r   target=_new><img src=\"\" alt=\"Benchmark Email\" border=0 /></a>\r  </div>\r  \r  <!-- END: Signup Form Button Code from Benchmark Email Ver 2.0 ---------->\r  <!-- BEGIN: Email Marketing By Benchmark Email ------>\r  \r  <div align=\"center\" style=\"padding-top:5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#999999;\">\r  <div align=\"center\" style=\"padding-top:5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#999999;\"><a href=\"//www.benchmarkemail.com\" target=\"_new\" style=\"text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#999999;\">Email Marketing Services</a> by Benchmark</div></div>\r  \r  <!-- END: Email Marketing By Benchmark Email ---------->\r  ",
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
 * Get the code for Preview for the Signup Form  Query string parameters:                    Key        Required        Description                            ID        Required        Signup Form ID                Request Body Parameters :                    Parameter        Required        Type        Description                            Language        Optional        string        Language for the signup Form                    Style        Optional        string        Style CSS if required              Request Body Parameters :                    Parameter        Type        Description                            Status        string        1 if successful, -1 if error                    Data        string        Code for the Signup Form Preview            
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
    "Data" : "<!-- BEGIN: Signup Form Manual Code from Benchmark Email Ver 2.0 ------>\r  \r  \r  <script type=\"text/javascript\">\r  function CheckField989011(fldName, frm){ if ( frm[fldName].length ) { for ( var i = 0, l = frm[fldName].length; i < l; i++ ) {  if ( frm[fldName].type =='select-one' ) { if( frm[fldName][i].selected && i==0 && frm[fldName][i].value == '' ) { return false; }  if ( frm[fldName][i].selected ) { return true; } }  else { if ( frm[fldName][i].checked ) { return true; } }; } return false; } else { if ( frm[fldName].type == \"checkbox\" ) { return ( frm[fldName].checked ); } else if ( frm[fldName].type == \"radio\" ) { return ( frm[fldName].checked ); } else { frm[fldName].focus(); return (frm[fldName].value.length > 0); }} }\r  function rmspaces(x) {var leftx = 0;var rightx = x.length -1;while ( x.charAt(leftx) == ' ') { leftx++; }while ( x.charAt(rightx) == ' ') { --rightx; }var q = x.substr(leftx,rightx-leftx + 1);if ( (leftx == x.length) && (rightx == -1) ) { q =''; } return(q); }\r  function checkfield(data) {if (rmspaces(data) == \"\"){return false;}else {return true;}}\r  function isemail(data) {var flag = false;if (  data.indexOf(\"@\",0)  == -1 || data.indexOf(\"\\\\\",0)  != -1 ||data.indexOf(\"/\",0)  != -1 ||!checkfield(data) ||  data.indexOf(\".\",0)  == -1  ||  data.indexOf(\"@\")  == 0 ||data.lastIndexOf(\".\") < data.lastIndexOf(\"@\") ||data.lastIndexOf(\".\") == (data.length - 1)   ||data.lastIndexOf(\"@\") !=   data.indexOf(\"@\") ||data.indexOf(\",\",0)  != -1 ||data.indexOf(\":\",0)  != -1 ||data.indexOf(\";\",0)  != -1  ) {return flag;} else {var temp = rmspaces(data);if (temp.indexOf(' ',0) != -1) { flag = true; }var d3 = temp.lastIndexOf('.') + 4;var d4 = temp.substring(0,d3);var e2 = temp.length  -  temp.lastIndexOf('.')  - 1;var i1 = temp.indexOf('@');if (  (temp.charAt(i1+1) == '.') || ( e2 < 1 ) ) { flag = true; }return !flag;}}\r  function CheckFieldD989011(fldH, chkDD, chkMM, chkYY, reqd, frm){ var retVal = true; var dt = validDate989011(chkDD, chkMM, chkYY, frm); var nDate = frm[chkMM].value  + \" \" + frm[chkDD].value + \" \" + frm[chkYY].value; if ( dt == null && reqd == 1 ) {\tnDate = \"\"; retVal = false;\t} else if ( (frm[chkDD].value != \"\" || frm[chkMM].value != \"\" || frm[chkYY].value != \"\") && dt == null) { retVal = false; nDate = \"\";} if ( retVal ) {frm[fldH].value = nDate;} return retVal; }\r  function validDate989011(chkDD, chkMM, chkYY, frm) {var objDate = null;\tif ( frm[chkDD].value != \"\" && frm[chkMM].value != \"\" && frm[chkYY].value != \"\" ) {var mSeconds = (new Date(frm[chkYY].value - 0, frm[chkMM].selectedIndex - 1, frm[chkDD].value - 0)).getTime();var objDate = new Date();objDate.setTime(mSeconds);if (objDate.getFullYear() != frm[chkYY].value - 0 || objDate.getMonth()  != frm[chkMM].selectedIndex - 1  || objDate.getDate() != frm[chkDD].value - 0){objDate = null;}}return objDate;}\r  function _checkSubmit989011(frm){\r  if ( !isemail(frm[\"fldEmail\"].value) ) { \r     alert(\"Please enter the Email\");\r     return false;\r  }\r   return true; }\r  </script>\r  <div align=\"center\">\r  <div style=\"display:inline;\" action=\"https://lb.benchmarkemail.com//code/lbform\" method=post name=\"frmLB989011\" accept-charset=\"UTF-8\" onsubmit=\"return _checkSubmit989011(this);\" >\r  <input type=hidden name=successurl value=\"http://www.google.com\" />\r  <input type=hidden name=errorurl value=\"https://lb.benchmarkemail.com//Code/Error\" />\r  <input type=hidden name=token value=\"mFcQnoBFKMRJuds7L%2B39DuZXUawFafLCtNH47%2FtzaqY25INw4ATiAA%3D%3D\" />\r  <input type=hidden name=doubleoptin value=\"\" />\r  <table id=tblFormLogo989011 width=\"220\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" ><td id='tdLogo989011'>\r  \r  <div class=bmform_outer989011 id=tblFormData989011 style=\"width:220px;\" >\r  <div class=bmform_inner989011>\r  <div class=bmform_head989011 id=tdHeader989011>\r  <div class=bm_headetext989011>Join our mailing list</div></div>\r  <div class=bmform_body989011>\r  <div class=bmform_introtxt989011 id=tdIntro989011 >\r  Enter your email address to join our mailing list<br />\r  </div>\r  <div id=tblFieldData989011 style='text-align:left;'>\r  \r  <div class=bmform_frmtext989011>\r  Email <span style='color:#CC0000;font-size:125%;'> *</span> </div>\r  <input type=text class=bmform_frm989011 name=fldEmail maxlength=100 />\r  \r  <div class=bmform_frmtext989011>\r  First Name</div>\r  <input type=text class=bmform_frm989011 name=fldfirstname maxlength=100 />\r  \r  <div class=bmform_frmtext989011>\r  Last Name</div>\r  <input type=text class=bmform_frm989011 name=fldlastname maxlength=100 />\r  </div>\r  \r  <div class=bmform_button989011><input type=\"button\" id=\"btnSubmit\" value=\"Join List\"  krydebug=\"1751\" class=bmform_submit989011 />\r  </div></div>\r  <div class=bmform_footer989011><div class=footer_bdy989011><div class=footer_txt989011></div></div></div>\r  </div></div>\r  <table id=\"tblRequiredField989011\" width=\"220\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" ><td align=right style='font-size:10px;'>\r  * Required Field\r  \r  </div></div>\r  ",
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
 * Get the contact fields of the signup Form  Query string parameters :                    Parameter        Required        Type        Description                            ID        Required        string        Signup Form ID                Request Body parameters:  None    Response body parameters :                    Parameter        Type        Description                            Data        ContactField        Array of contact fields                    Errors        ErrorData        Array of error messages                    Status        string        1 = Successful, -1 Error                    Count        string        Number if fields            
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
 * Copies an existing signup form   Query String Parameters :  None     Request Body Parameters:            Parameter   Required   Type   Description               ID   required   string   ID of the signup Form         Name   required   string   Name of the new signup form            Response Body Parameters:            Parameter   Type   Description               Response   string   ID of the signup Form         
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
 * Gets a list of signup forms in the user's account  Query string parameters :         Parameter  Required  Type  Description          PageNumber  optional  int  Page Number      PageSize  optional  int  Number of records to show per page      Filter  optional  string  Filter text      FilterField  optional  string  The column to filter on <code>lb_name</code> or <code>contact_master_id</code>, <code>default blank</code>      OrderBy  optional  string  The column to sort on <code>name</code>, <code>date</code> or <code>size</code>      SortOrder  optional  string  The column to sort as <code>asc</code> or <code>desc</code>        Response Body Parameters :         Parameter  Type  Description          Count  int  Total number      Status  string  1 if successful, -1 if error      Data  SignupFormListData  Array of signup form data list returned.      
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
      "Name" : "Classic firstName",
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
 * Get the link of the Signup form  Query String Parameters:None   Request Body parameters:                    Parameter        Required        Type        Description                            ID        Required        string        Signup Form ID              Response Body parameters:                    Parameter        Type        Description                            Status        string        1 if successful, -1 if error                    Data        string        URL for the Signup Form                    Errors        ErrorData        Array of errors            
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
 * Creates a new signup form       Body Parameters (to be encoded as a JSON string)            Key   Required   Description               Name   optional   Name of the signup form         Lists   optional   List details as ID and Name   [{\"ID\":\"<code>IDOfTheList</code>\", \"Name\":\"<code>NameOfTheList</code>\"},{\"ID\":\"<code>IDOfTheList</code>\", \"Name\":\"<code>NameOfTheList</code>\"}]            Version   optional   Version of the form<ul><li><code>1</code> Classic Signup Form</li><li><code>2</code> Embed Signup Form</li><li><code>3</code> Popup Signup Form</li></ul>               Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#SignupFormSignupFormData\">SignupFormData</a>Signup Form Data   Errors<a href=\"http://www.benchmarkemail.com/models.htm#SignupFormErrorData\">ErrorData</a>Errors      
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
 * Gets templates for signup form   Query string parameters :             Parameter   Required   Type   Description               Language   optional   string   Language         Filter   optional   int   Template Category ID            Response Body parameters :             Parameter   Type   Description               Count   int   Number of results         Status   String   1 if successful, -1 if error         Data   <a href=\"http://www.benchmarkemail.com/models.htm#SignupFormTemplateData\" >TemplateData</a>   Data         
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
      "Style" : ".bmform_outer{width:220px;}\r  .bmform_inner{width:100%; border:0;}\r  .bmform_head{background-color:#d4b87a; background-repeat:no-repeat; background-image:url(http://www.benchmarkemail.com/images/listbuilder/th6/sk1/images/header.gif);}\r  .bm_headetext{color:#85231b; font-family:Arial, Helvetica, sans-serif; font-size:28px; font-weight:bold; padding:55px 8px 8px 8px;}\r  .bmform_body{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th6/sk1/images/body.png); background-position:bottom; background-repeat:no-repeat; background-color:#d4b87a; color:#000000; font-family: Verdana, Geneva, sans-serif; font-size:11px; padding:5px 12px 12px 12px;}\r  .bmform_introtxt{padding-bottom:12px;}\r  .bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto; font-weight:bold;}\r  .bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px;}\r  .bmform_button{text-align:center; padding-top:15px;}\r  .bmform_submit{background-color: #ae411b; background-repeat: no-repeat; border: 2px solid #ffffff; color: #FFFFFF; font-family: Verdana,sans-serif; font-size: 11px; font-style: normal; font-weight: bold; text-decoration: none; padding:2px 10px 2px 10px; }\r  .bmform_footer{background-color:#bd963e; color: #333333; font-family: Verdana,sans-serif; font-size: 11px; height:10px;}\r  .footer_bdy{}\r  .footer_txt{qfont-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "8",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th2/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th2/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th2_s.gif",
      "Name" : "Seasons",
      "Style" : ".bmform_outer{width:220px;}\r  .bmform_inner{width:100%; border:1px solid #ffffff;}\r  .bmform_head{background-image:none; background-color:#c91313; background-repeat:no-repeat;}\r  .bm_headetext{color:#FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size:19px; padding:8px; font-weight:bold;}\r  .bmform_body{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th2/sk1/images/body.jpg); background-position:bottom; background-repeat:no-repeat; background-color:#ef7520; color:#ffffff; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px; padding-bottom:65px;}\r  .bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:12px;}\r  .bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto; font-weight:bold;}\r  .bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px;}\r  .bmform_button{text-align:left; padding-top:15px;}\r  .bmform_submit{background-color: #3f1312; border: 1px solid #faecdf; color: #FFFFFF; font-family: Verdana,sans-serif; font-size: 11px; font-style: normal; font-weight: bold; text-decoration: none; padding:3px;}\r  .bmform_footer{background-repeat: no-repeat; color: #333333; font-family: Verdana,sans-serif; font-size: 11px; padding: 10px;}\r  .footer_bdy{}\r  .footer_txt{qfont-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "14",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th4/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th4/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th4_s.gif",
      "Name" : "Mailing List",
      "Style" : ".bmform_outer{width:220px;}\r  .bmform_inner{width:100%; border:0;}\r  .bmform_head{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th4/sk1/images/header.gif);  background-color:#dae5ea; background-repeat:no-repeat; padding:12px 8px 12px 50px;}\r  .bm_headetext{color:#618fa5; font-family:Arial, Helvetica, sans-serif; font-size:16px; font-weight:bold;}\r  .bmform_body{background-image:none; background-position:inherit; background-repeat:no-repeat; color:#618fa5; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px; background-color:#dddddd;}\r  .bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:12px;}\r  .bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto; font-weight:bold;}\r  .bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px;}\r  .bmform_button{text-align:center; padding-top:15px;}\r  .bmform_submit{background-color: #0057AC; background-image:url(http://www.benchmarkemail.com/images/listbuilder/th4/sk1/images/button.jpg); background-position: left top; background-repeat: repeat-x; border: 1px solid #757575; color: #FFFFFF; font-family: Verdana,sans-serif; font-size: 14px; font-style: normal; font-weight: normal; text-decoration: none;}\r  .bmform_footer{background-repeat:no-repeat; color: #333333; font-family: Verdana,sans-serif; font-size: 11px; padding: 10px;}\r  .footer_bdy{}\r  .footer_txt{font-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "11",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th3/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th3/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th3_s.gif",
      "Name" : "Balloons",
      "Style" : ".bmform_outer{width:220px;}\r  .bmform_inner{width:100%; border:0;}\r  .bmform_head{background-image:none; background-color:#02394c; background-repeat:no-repeat;}\r  .bm_headetext{color:#FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size:19px; padding:12px 8px 12px 12px; font-weight:bold;}\r  .bmform_body{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th3/sk1/images/body.jpg); background-position:bottom; background-repeat:no-repeat; background-color:#b1e7f7; color:#0c0f11; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px; padding-bottom:65px;}\r  .bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:12px;}\r  .bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration:none; width: auto; font-weight:bold;}\r  .bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px;}\r  .bmform_button{text-align:center; padding-top:15px;}\r  .bmform_submit{background-color: #06b1e6; border: 0px solid #757575; color: #FFFFFF; font-family: Verdana,sans-serif; font-size: 11px; font-style: normal; font-weight: bold; text-decoration: none; padding:3px; }\r  .bmform_footer{background-repeat: no-repeat; color: #333333; font-family: Verdana,sans-serif; font-size: 11px; padding: 10px;}\r  .footer_bdy{}\r  .footer_txt{qfont-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "19",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th7/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th7/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th7_s.gif",
      "Name" : "Big Arrow",
      "Style" : ".bmform_outer{width:220px;}\r  .bmform_inner{width:100%; border:0;}\r  .bmform_head{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th7/sk1/images/header.png); background-repeat:no-repeat; padding:44px 8px 30px 8px;}\r  .bm_headetext{color:#11274c; font-family:Arial, Helvetica, sans-serif; font-size:16px;}\r  .bmform_body{color:#24729a; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px; background-color:#dddddd;}\r  .bmform_introtxt{color:#24729a; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:12px; background-color:#dddddd;}\r  .bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto;}\r  .bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px;}\r  .bmform_button{text-align:center; padding-top:15px;}\r  .bmform_submit{background-color: #3faae0; background-repeat: no-repeat; border: 2px solid #ffffff; color: #FFFFFF; font-family: Verdana,sans-serif; font-size: 11px; font-style: normal; font-weight: bold; text-decoration: none; padding:2px 10px 2px 10px; }\r  .bmform_footer{background-repeat: no-repeat; color: #333333; font-family: Verdana,sans-serif; font-size: 11px; padding: 10px;}"
    }, {
      "ID" : "22",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th8/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th8/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th8_s.gif",
      "Name" : "Twist Arrow",
      "Style" : ".bmform_outer{width:220px;}\r  .bmform_inner{width:100%; border:3px solid #0074bb;}\r  .bmform_head{background-image: url(http://www.benchmarkemail.com/images/listbuilder/th8/sk1/images/header.png); background-position:top right; background-color:#eaeaea; background-repeat:no-repeat; height:85px;}\r  .bm_headetext{color:#005fa4; font-family:Arial, Helvetica, sans-serif; font-size:28px; padding:8px 50px 8px 8px; font-weight:bold;}\r  .bmform_body{background-image:none; background-position:bottom; background-repeat:no-repeat; background-color:#eaeaea; color:#000000; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px;}\r  .bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:12px;}\r  .bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align:left; text-decoration:none; width:auto; font-weight:bold;}\r  .bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:14px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width: 190px; padding:3px;}\r  .bmform_button{text-align:center; padding-top:15px;}\r  .bmform_submit{background-color:#3faae0; background-repeat:no-repeat; border:2px solid #ffffff; color:#FFFFFF; font-family:Verdana,sans-serif; font-size:11px; font-style:normal; font-weight:bold; text-decoration:none; padding:2px 10px 2px 10px; }\r  .bmform_footer{background-color:#eaeaea; background-repeat: no-repeat; color:#000000; font-family:Verdana,sans-serif; font-size:11px; height:1px;}\r  .footer_bdy{}\r  .footer_txt{qfont-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "31",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th9/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th9/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th9_s.gif",
      "Name" : "Default",
      "Style" : ".bmform_outer{width:220px;}\r  .bmform_inner{width:100%; border:1px solid #797a7b;}\r  .bmform_head{background-color:#d0d6d9; height:37px;}\r  .bm_headetext{color:#000000; font-family:Arial, Helvetica, sans-serif; font-size:18px; padding:6px 10px 0 10px; font-weight:bold;}\r  .bmform_body{background-color:#f0f2f3; color:#000000; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px;}\r  .bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:12px;}\r  .bmform_frmtext{padding: 5px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto; font-weight:bold;}\r  .bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:14px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:190px; padding:3px;}\r  .bmform_button{text-align:center; padding-top:15px;}\r  .bmform_submit{}\r  .bmform_footer{}\r  .footer_bdy{}\r  .footer_txt{}"
    }, {
      "ID" : "25",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th10/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th10/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th10_s.gif",
      "Name" : "Steel",
      "Style" : ".bmform_outer{width:220px;}\r  .bmform_inner{width:100%; border:0;}\r  .bmform_head{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th10/sk1/images/header.png); background-color:#0b669f; padding:20px 5px 20px 10px;}\r  .bm_headetext{color:#ffffff; font-family:Arial, Helvetica, sans-serif; font-size:26px;}\r  .bmform_body{background-image:none; background-position:inherit; background-repeat:no-repeat; color:#618fa5; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px; background-color:#e5e5e5;}\r  .bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:6px; color:#000000;}\r  .bmform_frmtext{padding: 10px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto; color:#000000;}\r  .bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px;}\r  .bmform_button{text-align:left; padding-top:15px;}\r  .bmform_submit{background-color: #0083d6; border: 1px solid #757575; color: #FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size: 16px; font-style: normal; font-weight: bold; text-decoration: none; padding:2px 15px 2px 15px;}\r  .bmform_footer{background-repeat:no-repeat; color: #333333; font-family: Verdana,sans-serif; font-size: 11px;}\r  .footer_bdy{}\r  .footer_txt{font-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "28",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th11/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th11/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th11_s.gif",
      "Name" : "Swatches",
      "Style" : ".bmform_outer{width:220px;}\r  .bmform_inner{border:1px solid #b0aeae;}\r  .bmform_head{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th11/sk1/images/header.png); background-position:top; background-repeat:no-repeat; background-color:#c7e2ef; padding:60px 5px 0px 5px;}\r  .bm_headetext{color:#0083d6; font-family:Arial, Helvetica, sans-serif; font-size:22px; text-align:center;}\r  .bmform_body{color:#618fa5; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px; background-color:#c7e2ef;}\r  .bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:6px; color:#000000;}\r  .bmform_frmtext{padding: 10px 0px 3px 0px; display:block; float:none; text-align: left; text-decoration: none; width: auto; color:#000000;}\r  .bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; text-decoration:none; width:auto; width: 190px; border:1px solid #95aab3; padding:2px;}\r  .bmform_button{text-align:left; padding-top:15px;}\r  .bmform_submit{background-color: #0083d6; border: 1px solid #7a8a92; color: #FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size: 16px; font-style: normal; font-weight: bold; text-decoration: none; padding:2px 15px 2px 15px;}\r  .bmform_footer{background-repeat:no-repeat; color: #333333; font-family: Verdana,sans-serif; font-size: 11px; }\r  .footer_bdy{}\r  .footer_txt{font-family:Tahoma, Geneva, sans-serif; font-size:11px; color:#cccccc;}"
    }, {
      "ID" : "36",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th13/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th13/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th13_s.gif",
      "Name" : "Grocer",
      "Style" : ".bmform_outer{width:220px;}\r  .bmform_inner{border:1px solid #9d9d9d;}\r  .bmform_head{background-color:#86ad3e; padding:12px 5px 12px 5px;}\r  .bm_headetext{color:#ffffff; font-family:Arial, Helvetica, sans-serif; font-size:18px; font-weight:bold; text-align:center;}\r  .bmform_body{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th13/sk1/images/body.png); background-position:bottom; background-repeat:no-repeat; color:#447a1d; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px 12px 60px 12px; background-color:#ffffff; text-align:left;}\r  .bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:6px; color:#447a1d;}\r  .bmform_frmtext{padding:10px 0px 3px 0px; display:block; float:none; text-align:left; text-decoration:none; width:auto; color:#447a1d; font-weight:bold;}\r  .bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:14px; font-style:normal; font-weight:normal; text-align:left; width:186px; border:1px solid #d1d1d1; padding:2px;}\r  .bmform_button{text-align:left; padding-top:15px;}\r  .bmform_submit{background-color:#86ad3e; border:1px solid #ffffff; color:#FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size:14px; font-style:normal; font-weight:bold; text-decoration:none; padding:3px 15px 2px 15px;}\r  .bmform_footer{}\r  .footer_bdy{}\r  .footer_txt{}"
    }, {
      "ID" : "39",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th14/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th14/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th14_s.gif",
      "Name" : "Craft",
      "Style" : ".bmform_outer{width:220px;}\r  .bmform_inner{border:1px solid #9d9d9d;}\r  .bmform_head{background-color:#ffb000; padding:12px 5px 12px 5px;}\r  .bm_headetext{color:#ffffff; font-family:Arial, Helvetica, sans-serif; font-size:18px; font-weight:bold; text-align:center;}\r  .bmform_body{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th14/sk1/images/body.png); background-position:bottom; background-repeat:no-repeat; color:#447a1d; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px 12px 60px 12px; background-color:#ffffff; text-align:left;}\r  .bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:6px; color:#123145;}\r  .bmform_frmtext{padding:10px 0px 3px 0px; display:block; float:none; text-align:left; text-decoration:none; width:auto; color:#123145; font-weight:bold;}\r  .bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:14px; font-style:normal; font-weight:normal; text-align:left; width:186px; border:1px solid #d1d1d1; padding:2px;}\r  .bmform_button{text-align:left; padding-top:15px;}\r  .bmform_submit{background-color:#ff9e41; border:1px solid #ffffff; color:#FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size:14px; font-style:normal; font-weight:bold; text-decoration:none; padding:3px 15px 2px 15px;}\r  .bmform_footer{}\r  .footer_bdy{}\r  .footer_txt{}"
    }, {
      "ID" : "42",
      "ImageBar" : "http://www.benchmarkemail.com/images/listbuilder/th15/sk1.gif",
      "ImagePreview" : "http://www.benchmarkemail.com/images/listbuilder/th15/sk1_b.png",
      "ImageSrc" : "http://www.benchmarkemail.com/images/listbuilder/th15_s.gif",
      "Name" : "Entertainment",
      "Style" : ".bmform_outer{width:220px;}\r  .bmform_inner{border:1px solid #9d9d9d;}\r  .bmform_head{background-color:#863636; padding:12px 5px 12px 5px;}\r  .bm_headetext{color:#ffffff; font-family:Arial, Helvetica, sans-serif; font-size:18px; font-weight:bold; text-align:center;}\r  .bmform_body{background-image:url(http://www.benchmarkemail.com/images/listbuilder/th15/sk1/images/body.png); background-position:bottom; background-repeat:no-repeat; color:#447a1d; font-family:Arial, Helvetica, sans-serif; font-size:12px; padding:12px 12px 60px 12px; background-color:#f47311; text-align:left;}\r  .bmform_introtxt{font-family:Arial, Helvetica, sans-serif; font-size:12px; padding-bottom:6px; color:#ffffff;}\r  .bmform_frmtext{padding:10px 0px 3px 0px; display:block; float:none; text-align:left; text-decoration:none; width:auto; color:#ffffff; font-weight:bold;}\r  .bmform_frm{color:#000000; display:block; float:none; font-family:Verdana,sans-serif; font-size:12px; font-style:normal; font-weight:normal; text-align:left; width:186px; border:1px solid #d1d1d1; padding:2px;}\r  .bmform_button{text-align:left; padding-top:15px;}\r  .bmform_submit{background-color:#ff9e41; border:1px solid #ffffff; color:#000000; font-family:Arial, Helvetica, sans-serif; font-size:14px; font-style:normal; font-weight:bold; text-decoration:none; padding:3px 15px 2px 15px;}\r  .bmform_footer{}\r  .footer_bdy{}\r  .footer_txt{}"
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
 * Sending a test email for signup  Query string parameters : None      Request Body parameters:                    Key        Required        Description                            ID        Required        Signup Form ID                    FromEmail        Required        From Email  Address                    FromName        Required        From Name                    ToEmail        Required        Recipient Email Address                    Subject        Required        Subject of the email                    Message        Required        Message in the email                    ConfirmationLink        Required        The link for confirmation of the form                    ClosingMessage        Required        The closing message in the email                Response body parameters :                    Parameter        Type        Description                            Status        string        1 = Successful, -1 Error                    Errors        ErrorData        Array of error            
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

