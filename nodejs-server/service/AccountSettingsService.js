'use strict';


/**
 * Get All Confirmed Email
 * <h4>Get All Confirmed Email</h4> <b>Query string parameters :</b> None <br>  <b>Request Body parameters:</b> None <br>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>string</td>       <td>Total Confirmed Emails</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientConfirmEmailAllData\" >ConfirmEmailAllData</a></td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GetAllConfirmedEmail
 **/
exports.clientConfirmedEmailAllGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 6,
    "Data" : [ {
      "DateValue" : "16 Jan 2017",
      "Email" : "dayashankar@cybermaxsolutions.com",
      "ID" : "879557",
      "IsConfirmed" : "1",
      "ReSend" : "",
      "Sequence" : 1
    }, {
      "DateValue" : "22 Nov 2016",
      "Email" : "kiran@cybermaxsolutions.com",
      "ID" : "861115",
      "IsConfirmed" : "0",
      "ReSend" : "<a href='javascript:show_popup(\"resend\",\"/PopupConfirmEmailResend?ndaHc7%2FNHWw1SgsGRzPBIg%3D%3D\", \"Resend\", 400, 250);'><img src='/images/icons/reuse.png' alt='Resend' border='0' title='Resend'/></a>",
      "Sequence" : 2
    }, {
      "DateValue" : "14 Nov 2016",
      "Email" : "mahesh@cybermaxsolutions.com",
      "ID" : "857914",
      "IsConfirmed" : "1",
      "ReSend" : "",
      "Sequence" : 3
    }, {
      "DateValue" : "11 May 2016",
      "Email" : "pooja.gorde@gmail.com",
      "ID" : "788113",
      "IsConfirmed" : "1",
      "ReSend" : "",
      "Sequence" : 4
    }, {
      "DateValue" : "25 Aug 2015",
      "Email" : "pooja@cybermaxsolutions.com",
      "ID" : "674564",
      "IsConfirmed" : "1",
      "ReSend" : "",
      "Sequence" : 5
    }, {
      "DateValue" : "22 Nov 2016",
      "Email" : "sanket@cybermaxsolutions.com",
      "ID" : "861050",
      "IsConfirmed" : "0",
      "ReSend" : "<a href='javascript:show_popup(\"resend\",\"/PopupConfirmEmailResend?K9R7xf4MAeNHNHYysVoPng%3D%3D\", \"Resend\", 400, 250);'><img src='/images/icons/reuse.png' alt='Resend' border='0' title='Resend'/></a>",
      "Sequence" : 6
    } ],
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
 * Resend Confirm Email
 * <h4>Resend Confirm Email</h4> <b>Query string parameters :</b> None <br>  <b>Request Body parameters:</b>  <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Email</td>       <td>Required</td>       <td>string</td>       <td>Email ID</td>     </tr>   </tbody> </table> <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>string</td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * email String 
 * returns ResendConfirmEmail
 **/
exports.clientConfirmedEmailByEmailGet = function(authToken,contentType,email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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


/**
 * Send Confirm Email Verification Email
 * <h4>Send Confirm Email Verification Email</h4> <b>Query string parameters :</b> None <br>  <b>Request Body parameters:</b>  <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>EmailIDs</td>       <td>Required</td>       <td>string</td>       <td>Email Address</td>     </tr>   </tbody> </table> <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Errors</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of Error</td>     </tr>     <tr>       <td>FinalString</td>       <td>string</td>       <td>FinalString</td>     </tr>     <tr>       <td>Message</td>       <td>string</td>       <td>Message Text</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>Status</td>     <tr>       <td>Success</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>     </tr>   </tbody> </table>
 *
 * body SendConfirmEmailVerificationEmailrequest 
 * authToken String 
 * contentType String 
 * returns SendConfirmEmailVerificationEmail
 **/
exports.clientConfirmedEmailEmailPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "FinalString" : "",
    "Message" : "",
    "Status" : "",
    "Success" : "1"
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
 * Get List of Confirmed Emails
 * <h4>Get List of Confirmed Emails</h4> <b>Query String Parameters :</b> None <br>  <b>Request Body Parameters:</b> None <br>  <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Emails</td>       <td>string</td>       <td>List of Emails</td>     </tr>     <tr>       <td>Error</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GetListOfConfirmedEmails
 **/
exports.clientConfirmedEmailGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Emails" : [ "dayashankar@cybermaxsolutions.com", "mahesh@cybermaxsolutions.com", "pooja.gorde@gmail.com", "pooja@cybermaxsolutions.com" ],
    "Error" : [ ],
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
 * Get Current email at the time of Reset Email
 * <h4>Get Current email at the time of Reset Email </h4> <b>Query String Parameter : </b> <table> <thead> <tr> <th>Key</th> <th>Required</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>GUID</td> <td>optional</td> <td>Unique ID</td> </tr> </tbody> </table> <b>Response body parameters</b> <table> <thead> <tr> <th>Key</th><th>Type</th><th>Description</th></tr> </thead> <tbody> <tr><td>Email</td><td>String</td><td>Email Address</td></tr> <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr> <tr><td>Errors</td><td><a http://www.benchmarkemail.com/models.htm#ErrorData>ErrorData</a></td><td>Array</td></tr> </tbody> </table>
 *
 * gUID String 
 * authToken String 
 * contentType String 
 * returns GetCurrentEmailAtTheTimeOfResetEmail
 **/
exports.clientEmailResetGet = function(gUID,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Email" : "pooja@cybermaxsolutions.com",
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
 * Send Reset Email
 * <h4>Send Reset Email to change primary email</h4> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>retVal</td>       <td>string</td>       <td>return Value</td>     </tr>     <tr>       <td>Error</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns SendResetEmail
 **/
exports.clientEmailResetLinkPatch = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "Status" : "1",
    "retVal" : ""
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
 * Update/Reset Email
 * <h4>Reset primary email </h4>  <b>URL Parameters (To be encoded as JSON parameter)</b>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>GUID</td>  <td>Required</td>  <td>The ID which is available on the email link send for reset the email</a>  </tr>  <tr>  <td>NewEmail</td>  <td>Required</td>  <td>New Email</a>  </tr>  <tr>  <td>ConfirmEmail</td>  <td>Required</td>  <td>Confirm Email</a>  </tr>  </tbody>  </table>  <b>Response body parameters</b>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Email</td><td>String</td><td>Email Address</td></tr>  <tr><td>Errors</td><td><a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a></td><td>Array</td></tr>  </tbody>  </table>
 *
 * body Update~1resetEmailrequest 
 * authToken String 
 * contentType String 
 * returns Update~1resetEmail
 **/
exports.clientEmailResetPatch = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "Status" : "1",
    "retVal" : ""
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
 * Get Client Filter Domain
 * <h4>Get Client Filter Domain</h4> <b>Query String Parameters :</b> None <br>  <b>Request Body Parameters:</b> None <br>  <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>string</td>       <td>Number of Domains</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientFilterDomain\" >ClientFilterDomain</a></td>       <td>List of Domains</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 Successful, -1 error</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GetClientFilterDomain
 **/
exports.clientFilterDomainGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 2,
    "Data" : [ {
      "AbuseDomain" : "hotmail.com",
      "CreatedDate" : "1/25/2013 7:31:52 PM",
      "ID" : "247343"
    }, {
      "AbuseDomain" : "yahoo.com",
      "CreatedDate" : "1/25/2013 7:31:52 PM",
      "ID" : "247343"
    } ],
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
 * Get Client Details
 * <h4>Get Client Details</h4> <b>Query String Parameters :</b> None <br>  <b>Request Body Parameters:</b> None <br>  <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Response</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientProfileData\" >ProfileData</a></td>       <td>Client Profile data</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GetClientDetails
 **/
exports.clientGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "AllowSubAccounts" : "0",
    "CCExpireDate" : "",
    "CancelDate" : "",
    "CancelDateMDY" : "",
    "ClientStatus" : "Active",
    "ContactCount" : "32224",
    "ContactLimit" : "1715000",
    "Contacts" : "32224",
    "Country" : "IN",
    "Email" : "kiran@cybermaxsolutions.com",
    "EmailLimit" : "1536000000",
    "EmailUsed" : "846",
    "Errors" : [ ],
    "ExpireDate" : "2/17/2022 12:00:00 PM",
    "ExpireDateMDY" : "Feb 17, 2022",
    "FirstName" : "kiran",
    "HasDedicatedIP" : "False",
    "ImageLimit" : "10",
    "ImageUsed" : "0",
    "LastName" : "kolge",
    "ListBased" : "1",
    "ListSize" : "1",
    "Login" : "kiran@cybermaxsolutions.com",
    "PaymentMode" : "Monthly",
    "PhoneNo" : "7666034871",
    "PlanCycle" : "1",
    "RegionCode" : "indiaR",
    "RegionName" : "India Region",
    "Status" : "",
    "SuspendDate" : "",
    "SuspendDateMDY" : "",
    "isAllowed" : "1",
    "isFree" : "0",
    "isPin" : "0"
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
 * Save Website Domain
 * <h4>Provide your domain name to link it to your account</h4> <b>Response Body Parameters : </b> <table> <thead> <tr> <th>Parameter</th> <th>Required</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>CompanyWebsite</td> <td>Required</td> <td>String</td> <td>Company Website like BobsVacations.com</td> </tr> </tbody> </table>
 *
 * body SaveWebsiteDomainrequest 
 * authToken String 
 * contentType String 
 * returns ClientSaveInitSurvey~1provideYourDomainNameToLinkItToYourAccount
 **/
exports.clientInitSurveyPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "3"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Change Password
 * <h4>Change Password</h4> <b>Body Parameters (to be encoded as a JSON string)</b> <table> <thead> <tr> <th>Key</th> <th>Required</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>NewPassword</td> <td>Required</td> <td>New Password</td> </tr> <tr> <td>ConfirmPassword</td> <td>Required</td> <td>Confirm Password</td> </tr> </tbody> </table> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>retVal</td>       <td>string</td>       <td>return Value</td>     </tr>     <tr>       <td>Error</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * body ChangePasswordrequest 
 * authToken String 
 * contentType String 
 * returns ChangePassword
 **/
exports.clientPasswordPatch = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "Status" : "1",
    "retVal" : ""
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
 * Update/Edit Profile
 * <h4>Update/Edit Profile like first name,phone no etc </h4>  <b>URL Parameters (To be encoded as JSON parameter)</b>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>FirstName</td>  <td>Required</td>  <td>First Name</a>  </tr>  <tr>  <td>LastName</td>  <td>Required</td>  <td>Last Name</a>  </tr>  <tr>  <td>PhoneNo</td>  <td>Required</td>  <td>Phone Number</a>  </tr>  </tbody>  </table>  <b>Response body parameters</b>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>retVal</td><td>String</td><td></td></tr>  <tr><td>Errors</td><td><a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a></td><td>Array</td></tr>  </tbody>  </table>
 *
 * body Update~1editProfilerequest 
 * authToken String 
 * contentType String 
 * returns Update~1editProfile
 **/
exports.clientPatch = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "Status" : "1",
    "retVal" : ""
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
 * Get Client Account Settings
 * <h4>Get Client Account Settings</h4> <b>Query String Parameters :</b> None <br>  <b>Request Body Parameters:</b> None <br>  <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Company</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientSettingCompanyData\" >SettingCompanyData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>FooterID</td>       <td>string</td>       <td>Email Footer ID</td>     </tr>     <tr>       <td>FromEmail</td>       <td>string</td>       <td>From Email Address</td>     </tr>     <tr>       <td>FromName</td>       <td>string</td>       <td>From Name</td>     </tr>     <tr>       <td>Language</td>       <td>string</td>       <td>Language</td>     </tr>     <tr>       <td>PermissionPositionHeader</td>       <td>string</td>       <td>Permission Position Header</td>     </tr>     <tr>       <td>SenderID</td>       <td>string</td>       <td>Sender ID</td>     </tr>     <tr>       <td>SignatureEmail</td>       <td>string</td>       <td>Signature Email Address</td>     </tr>     <tr>       <td>SignatureURL</td>       <td>string</td>       <td>Signature URL</td>     </tr>     <tr>       <td>TimeZone</td>       <td>string</td>       <td>Time Zone</td>     </tr>     <tr>       <td>Token</td>       <td>string</td>       <td>API Token</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GetClientAccountSettings
 **/
exports.clientSettingGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Company" : {
      "Address" : "路/街",
      "CategoryID" : "3",
      "City" : "城市",
      "Country" : "India",
      "LogoURL" : "https://images.benchmarkemail.com/client553754/companylogo.jpg",
      "Name" : "組織名稱",
      "Phone" : "",
      "State" : "州/省",
      "Website" : "www.google.com",
      "Zip" : "郵遞區號"
    },
    "FooterID" : "9",
    "FromEmail" : "test@cybermaxsolutions.com",
    "FromName" : "寄件人名稱",
    "Language" : "Chinese",
    "PermissionPositionHeader" : "0",
    "SenderID" : "1",
    "SignatureEmail" : "test@cybermaxsolutions.com",
    "SignatureName" : "郵遞區號",
    "SignatureURL" : "https://images.benchmarkemail.com/client553754/sign.gif",
    "TimeZone" : "IST",
    "Token" : "{{Token}}"
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
 * Update Client Accounts Setting
 * <h4>Update Client Accounts Setting</h4> <b>Query String Parameters :</b> None <br>  <b>Request Body Parameters:</b>  <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Company</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientSettingCompanyData\" >SettingCompanyData</a></td>       <td>Setting Company Data</td>     </tr>     <tr>       <td>Language</td>       <td>string</td>       <td>Language</td>     </tr>     <tr>       <td>PermissionPositionHeader</td>       <td>string</td>       <td>Permission Position Header</td>     </tr>     <tr>       <td>TimeZone</td>       <td>string</td>       <td>Time Zone</td>     </tr>     <tr>       <td>FooterID</td>       <td>string</td>       <td>Email Footer ID</td>     </tr>     <tr>       <td>SenderID</td>       <td>string</td>       <td>Sender ID</td>     </tr>     <tr>       <td>FromName</td>       <td>string</td>       <td>From Name</td>     </tr>     <tr>       <td>FromEmail</td>       <td>string</td>       <td>From Email Address</td>     </tr>     <tr>       <td>SignatureEmail</td>       <td>string</td>       <td>Signature Email</td>     </tr>     <tr>       <td>SignatureName</td>       <td>string</td>       <td>Signature Name</td>     </tr>     <tr>       <td>SignatureURL</td>       <td>string</td>       <td>Signature URL</td>     </tr>   </tbody> </table>  <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Error</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>     <tr>       <td>retVal</td>       <td>string</td>       <td>&nbsp;</td>     </tr>   </tbody> </table>
 *
 * body UpdateClientAccountsSettingrequest 
 * authToken String 
 * contentType String 
 * returns UpdateClientAccountsSetting
 **/
exports.clientSettingPatch = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "Status" : "1",
    "retVal" : ""
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
 * Get Token
 * <h4>Get Token</h4> <b>Query String Parameters :</b> None <br>  <b>Request Body Parameters:</b> None <br>  <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>AuthURL</td>       <td>string</td>       <td>Auth URL</td>     </tr>     <tr>       <td>Name</td>       <td>string</td>       <td>Client Name</td>     </tr>     <tr>       <td>Secret</td>       <td>string</td>       <td>Secret</td>     </tr>     <tr>       <td>Token</td>       <td>string</td>       <td>Token</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * type String 
 * returns GetToken
 **/
exports.clientTokenByTypeGet = function(authToken,contentType,type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "AuthURL" : "http://graph.facebook.com/oauth/authorize?client_id=1605427633049328&scope=read_insights,manage_pages,publish_pages,user_posts,publish_actions&redirect_uri=https://ui.benchmarkemail.com/FacebookAuthorize",
    "Name" : "Anuj Vats",
    "Secret" : "EAAW0ILZCHzvABAAA0gbTXBrBx3ZBl7D71X2RMNMpWTnxg08kDHfInd5lttxpsHxebOabcMPcniIUbyIBqPZBRPtyaqGOLtzEvs4ZBzszVDztJzppYIZAFDzkKjAtqmdnZCizNgJOQFpM9UYVy2mBsz6kDSM9mF27wZD",
    "Token" : "AQCOWBHZoqHSQ2PtJizOH8qNDZlMSLn13xZLqsYRVXDzr1LXG2ZXe99u_iec6bwzDM7jih87nwv4gBKGI0cHtpfQIBdP1g4YSnd01WP7SC4MOwYCxKhrYOkdbyEqQRFHPkV-rYeSXuhUzlVjHNbGmKvoBGMNaqvyy62yLCLuL4iZBF6UJthTRtsLgXCOGVBvwOhMz4hrVd4QD0PVJSYgqNtKG_eJkFYfrRKwNM_23VaoF25_sOwCNqJP3FWw62X"
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
 * Get Token Details
 * <h4>Get Token Details</h4>
 *
 * authToken String 
 * contentType String 
 * type String 
 * returns GetTokenDetails
 **/
exports.clientTokenDetailByTypeGet = function(authToken,contentType,type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : [ ]
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
 * Generate Token
 * <h4>Generate Token</h4> <b>Query String Parameters :</b> None <br>  <b>Request Body Parameters:</b> None <br>  <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>retVal</td>       <td>string</td>       <td>Token</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GenerateToken
 **/
exports.clientTokenPost = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "31D774D7-1FD6-4EE1-ACF5-6A7B1AB6AFCD"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

