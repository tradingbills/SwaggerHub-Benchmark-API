'use strict';


/**
 * Get All Confirmed Email
 * Get All Confirmed Email  Query string parameters : None      Request Body parameters: None      Response body parameters :                    Parameter        Type        Description                            Count        string        Total Confirmed Emails                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientConfirmEmailAllData\" >ConfirmEmailAllData</a>                            Status        string        1 = Successful, -1 Error            
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
      "Email" : "firstName@cybermaxsolutions.com",
      "ID" : "857914",
      "IsConfirmed" : "1",
      "ReSend" : "",
      "Sequence" : 3
    }, {
      "DateValue" : "11 May 2016",
      "Email" : "firstName.lastName@gmail.com",
      "ID" : "788113",
      "IsConfirmed" : "1",
      "ReSend" : "",
      "Sequence" : 4
    }, {
      "DateValue" : "25 Aug 2015",
      "Email" : "email@emailDomain.com",
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
 * Resend Confirm Email  Query string parameters : None      Request Body parameters:                     Parameter        Required        Type        Description                            Email        Required        string        Email ID              Response body parameters :                    Parameter        Type        Description                            ID        string                            Status        string        1 = Successful, -1 Error            
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
 * Send Confirm Email Verification Email  Query string parameters : None      Request Body parameters:                     Parameter        Required        Type        Description                            EmailIDs        Required        string        Email Address              Response body parameters :                    Parameter        Type        Description                            Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of Error                    FinalString        string        FinalString                    Message        string        Message Text                    Status        string        Status              Success        string        1 = Successful, -1 Error                  
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
 * Get List of Confirmed Emails  Query String Parameters : None      Request Body Parameters: None      Response Body Parameters :                    Parameter        Type        Description                            Emails        string        List of Emails                    Error        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error                    Status        string        1 = Successful, -1 Error            
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
    "Emails" : [ "dayashankar@cybermaxsolutions.com", "firstName@cybermaxsolutions.com", "firstName.lastName@gmail.com", "email@emailDomain.com" ],
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
 * Get Current email at the time of Reset Email   Query String Parameter :         Key  Required  Description          GUID  optional  Unique ID        Response body parameters        KeyTypeDescription      EmailStringEmail Address  StatusString1 if success, -1 if error  Errors<a http://www.benchmarkemail.com/models.htm#ErrorData>ErrorData</a>Array    
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
    "Email" : "email@emailDomain.com",
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
 * Send Reset Email to change primary email  Response Body Parameters :                    Parameter        Type        Description                            retVal        string        return Value                    Error        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error                    Status        string        1 = Successful, -1 Error            
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
 * Reset primary email    URL Parameters (To be encoded as JSON parameter)            Key   Required   Description               GUID   Required   The ID which is available on the email link send for reset the email</a>         NewEmail   Required   New Email</a>         ConfirmEmail   Required   Confirm Email</a>            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   EmailStringEmail Address   Errors<a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>Array      
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
 * Get Client Filter Domain  Query String Parameters : None      Request Body Parameters: None      Response Body Parameters :                    Parameter        Type        Description                            Count        string        Number of Domains                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientFilterDomain\" >ClientFilterDomain</a>        List of Domains                    Status        string        1 Successful, -1 error            
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
 * Get Client Details  Query String Parameters : None      Request Body Parameters: None      Response Body Parameters :                    Parameter        Type        Description                            Response        <a href=\"http://www.benchmarkemail.com/models.htm#ClientProfileData\" >ProfileData</a>        Client Profile data            
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
 * Provide your domain name to link it to your account  Response Body Parameters :         Parameter  Required  Type  Description          CompanyWebsite  Required  String  Company Website like BobsVacations.com      
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
 * Change Password  Body Parameters (to be encoded as a JSON string)        Key  Required  Description          NewPassword  Required  New Password      ConfirmPassword  Required  Confirm Password        Response Body Parameters :                    Parameter        Type        Description                            retVal        string        return Value                    Error        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error                    Status        string        1 = Successful, -1 Error            
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
 * Update/Edit Profile like first name,phone no etc    URL Parameters (To be encoded as JSON parameter)            Key   Required   Description               FirstName   Required   First Name</a>         LastName   Required   Last Name</a>         PhoneNo   Required   Phone Number</a>            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   retValString   Errors<a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>Array      
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
 * Get Client Account Settings  Query String Parameters : None      Request Body Parameters: None      Response Body Parameters :                    Parameter        Type        Description                            Company        <a href=\"http://www.benchmarkemail.com/models.htm#ClientSettingCompanyData\" >SettingCompanyData</a>        Array of error                    FooterID        string        Email Footer ID                    FromEmail        string        From Email Address                    FromName        string        From Name                    Language        string        Language                    PermissionPositionHeader        string        Permission Position Header                    SenderID        string        Sender ID                    SignatureEmail        string        Signature Email Address                    SignatureURL        string        Signature URL                    TimeZone        string        Time Zone                    Token        string        API Token            
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
 * Update Client Accounts Setting  Query String Parameters : None      Request Body Parameters:                     Parameter        Type        Description                            Company        <a href=\"http://www.benchmarkemail.com/models.htm#ClientSettingCompanyData\" >SettingCompanyData</a>        Setting Company Data                    Language        string        Language                    PermissionPositionHeader        string        Permission Position Header                    TimeZone        string        Time Zone                    FooterID        string        Email Footer ID                    SenderID        string        Sender ID                    FromName        string        From Name                    FromEmail        string        From Email Address                    SignatureEmail        string        Signature Email                    SignatureName        string        Signature Name                    SignatureURL        string        Signature URL                Response Body Parameters :                    Parameter        Type        Description                            Error        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error                    Status        string        1 = Successful, -1 Error                    retVal        string                    
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
 * Get Token  Query String Parameters : None      Request Body Parameters: None      Response Body Parameters :                    Parameter        Type        Description                            AuthURL        string        Auth URL                    Name        string        Client Name                    Secret        string        Secret                    Token        string        Token            
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
 * Get Token Details
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
 * Generate Token  Query String Parameters : None      Request Body Parameters: None      Response Body Parameters :                    Parameter        Type        Description                            retVal        string        Token            
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

