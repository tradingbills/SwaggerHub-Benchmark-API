'use strict';


/**
 * Delete the AB Test email
 * Move the email to trash    URL parameters:                     Parameter         Type         Description                       ID         string         ABSplit ID                 Response body parameters:                     Parameter         Type         Description                       Status         string         1 if successful, -1 if error                       Error         <a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>         Return error message            
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns DeleteTheAbTestEmail
 **/
exports.aBSplitByIDDelete = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Get a list of AB Tests
 * Get a Inbox List   URL body parameter                     Parameter         Type         Description                       PageNumber         string         Page Number                       PageSize         string         Number of rows on the page                       OrderBy         string         Order By Column                       Filter         string         Filter by column(Name / date / count / status / schedule)                        FilterType         string         FilterType                       SortOrder         string         ASC or DESC                 Response body parameters:                     Parameter         Type         Description                       Count         int         Total number                       Status         string         1 if successful, -1 if error                       Data         <a href='http://www.benchmarkemail.com/models.htm#ABSplitData'>ABSplitData         Array of ABSplit data list returned.            
 *
 * pageNumber String 
 * pageSize String 
 * filter String 
 * filterType String 
 * orderBy String 
 * sortOrder String 
 * authToken String 
 * contentType String 
 * returns GetAListOfAbsplits
 **/
exports.aBSplitGet = function(pageNumber,pageSize,filter,filterType,orderBy,sortOrder,authToken,contentType) {
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
 * Update the AB Test Status
 * Update the ABSplit Status   URL parameters:           Parameter     Type     Description           ID     string     ABSplit ID         Body Parameters (to be encoded as a JSON string)            Key   Required   Description               Status   Required   Status of AB test like draft/START/SCHEDULE/AUTOMATIC/SUSPEND/RESCHEDULE etc         Winner   String   Winner like 1(For A),2(For B),3(For C)         Date   String   Date      TimeZoneStringTimeZone</a>         Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Array   IDStringABSplit ID   Data<a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a>Array      
 *
 * body UpdateTheAbTestStatusrequest 
 * authToken String 
 * contentType String 
 * iD String 
 * returns UpdateTheAbsplitStatus
 **/
exports.aBSplitStatusByIDPatch = function(body,authToken,contentType,iD) {
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


/**
 * Delete an Automation
 * Delete an automation   URL Parameters            Key   Required   Description               {{AutomationID}}   Required   Automation ID            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>      
 *
 * authToken String 
 * contentType String 
 * automationID String 
 * returns DeleteAnAutomation
 **/
exports.automationByAutomationIDDelete = function(authToken,contentType,automationID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Create copy of exiting Automation
 * Create copy of an Automation   URL Parameters            Key   Required   Description               {{AutomationID}}   Required   Automation ID</a>            Body Parameters (to be encoded as a JSON string)            Key   Required   Description               {{Name}}   Required   Name of the new automation</a>            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   IDStringID of the new Automation   Errors<a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>Array      
 *
 * body CreateCopyOfExitingAutomationrequest 
 * authToken String 
 * contentType String 
 * automationID String 
 * returns CreateCopyOfExitingAutomation
 **/
exports.automationCopyByAutomationIDPost = function(body,authToken,contentType,automationID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Detail" : "",
    "Error" : [ ],
    "ID" : "103516",
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
 * Delete an Automation Email
 * Delete an Automation Email    URL Parameters            Key   Required   Description               {{AutomationID}}   Required   Automation ID</a>         {{AutomationDetailID}}   Required   Automation Email ID</a>            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   Errors<a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>Array      
 *
 * authToken String 
 * contentType String 
 * automationID String 
 * automationDetailID String 
 * returns DeleteAnAutomationEmail
 **/
exports.automationEmailsByAutomationIDAndAutomationDetailIDDelete = function(authToken,contentType,automationID,automationDetailID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Copy email in an Automation
 * Create copy of an Automation email   URL Parameters            Key   Required   Description               {{AutomationID}}   Required   Automation ID</a>         {{AutomationDetailID}}   Required   Automation email ID</a>            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   IDStringID of the new Automation Email   Errors<a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>Array      
 *
 * authToken String 
 * contentType String 
 * automationID String 
 * automationDetailID String 
 * returns CopyEmailInAnAutomation
 **/
exports.automationEmailsByAutomationIDAndAutomationDetailIDPost = function(authToken,contentType,automationID,automationDetailID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Detail" : "",
    "Error" : [ ],
    "ID" : "164732",
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
 * Get list of automation
 * Get a list of automation  Query String Parameter :         Key  Required  Description          PageNumber  optional  Page Number      PageSize  optional  Number of records to show per page      Filter  optional  Filter for automation name      OrderBy  optional  Column by which to sort like name,schedule,email,status,date      SortOrder  optional  The column to sort as <code>asc</code> or <code>desc</code>        Response body parameters        KeyTypeDescription      CountIntTotal count of emails for archive  StatusString1 if success, -1 if error  Data<a href='http://www.benchmarkemail.com/models.htm#AutomationData'>AutomationData</a>Array    
 *
 * pageNumber String 
 * pageSize String 
 * filter String 
 * orderBy String 
 * sortOrder String 
 * authToken String 
 * contentType String 
 * returns GetListOfAutomation
 **/
exports.automationGet = function(pageNumber,pageSize,filter,orderBy,sortOrder,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 54,
    "Data" : [ {
      "AutomationType" : "1",
      "Automations" : 9,
      "ContactCount" : 6,
      "FromEmail" : "firstName.lastName@gmail.com",
      "FromName" : "寄件人名稱",
      "ID" : "91626",
      "IsSegment" : "0",
      "ListID" : "15096080",
      "ListName" : "Test 1",
      "ModifiedDate" : "Oct 14 2017, 12:36 PM",
      "Name" : "automation 10 march",
      "SegmentID" : "null",
      "Status" : "1"
    }, {
      "AutomationType" : "1",
      "Automations" : 0,
      "ContactCount" : 2,
      "FromEmail" : "firstName.lastName@gmail.com",
      "FromName" : "寄件人名稱",
      "ID" : "103338",
      "IsSegment" : "0",
      "ListID" : "14762587",
      "ListName" : "1231111",
      "ModifiedDate" : "Oct 13 2017, 04:42 PM",
      "Name" : "Oct 13 2017 Automation test Copy Copy",
      "SegmentID" : "null",
      "Status" : "0"
    }, {
      "AutomationType" : "1",
      "Automations" : 0,
      "ContactCount" : 2,
      "FromEmail" : "firstName.lastName@gmail.com",
      "FromName" : "寄件人名稱",
      "ID" : "103337",
      "IsSegment" : "0",
      "ListID" : "14762587",
      "ListName" : "1231111",
      "ModifiedDate" : "Oct 13 2017, 04:40 PM",
      "Name" : "Oct 13 2017 Automation test Copy",
      "SegmentID" : "null",
      "Status" : "0"
    }, {
      "AutomationType" : "1",
      "Automations" : 0,
      "ContactCount" : 2,
      "FromEmail" : "firstName.lastName@gmail.com",
      "FromName" : "寄件人名稱",
      "ID" : "103322",
      "IsSegment" : "0",
      "ListID" : "14762587",
      "ListName" : "1231111",
      "ModifiedDate" : "Oct 13 2017, 02:24 PM",
      "Name" : "Oct 13 2017 Automation test",
      "SegmentID" : "null",
      "Status" : "0"
    }, {
      "AutomationType" : "1",
      "Automations" : 0,
      "ContactCount" : 6,
      "FromEmail" : "firstName.lastName@gmail.com",
      "FromName" : "寄件人名稱",
      "ID" : "103320",
      "IsSegment" : "0",
      "ListID" : "15096080",
      "ListName" : "Test 1",
      "ModifiedDate" : "Oct 13 2017, 10:57 AM",
      "Name" : "Oct 13 2017 Automation",
      "SegmentID" : "null",
      "Status" : "0"
    }, {
      "AutomationType" : "1",
      "Automations" : 0,
      "ContactCount" : 3,
      "FromEmail" : "firstName.lastName@gmail.com",
      "FromName" : "寄件人名稱",
      "ID" : "95199",
      "IsSegment" : "0",
      "ListID" : "14698481",
      "ListName" : "Resend Mark",
      "ModifiedDate" : "May 22 2017, 03:25 PM",
      "Name" : "May 22 2017 Automation",
      "SegmentID" : "null",
      "Status" : "0"
    }, {
      "AutomationType" : "1",
      "Automations" : 0,
      "ContactCount" : 2,
      "FromEmail" : "firstName.lastName@gmail.com",
      "FromName" : "寄件人名稱",
      "ID" : "91768",
      "IsSegment" : "0",
      "ListID" : "14602995",
      "ListName" : "聯絡人群組名稱",
      "ModifiedDate" : "Mar 14 2017, 04:25 PM",
      "Name" : "Mar 14 2017 Automation",
      "SegmentID" : "null",
      "Status" : "0"
    }, {
      "AutomationType" : "1",
      "Automations" : 3,
      "ContactCount" : 4,
      "FromEmail" : "firstName.lastName@gmail.com",
      "FromName" : "firstName",
      "ID" : "91397",
      "IsSegment" : "0",
      "ListID" : "14595342",
      "ListName" : "Mohit Test Suppression List",
      "ModifiedDate" : "Mar 06 2017, 12:48 PM",
      "Name" : "date base",
      "SegmentID" : "null",
      "Status" : "1"
    }, {
      "AutomationType" : "2",
      "Automations" : 3,
      "ContactCount" : 0,
      "FromEmail" : "firstName@cybermaxsolutions.com",
      "FromName" : "Cybermax Solutions",
      "ID" : "91275",
      "IsSegment" : "0",
      "ListID" : "14595578",
      "ListName" : "",
      "ModifiedDate" : "Mar 03 2017, 04:50 PM",
      "Name" : "Mohit Test Engagement Automation",
      "SegmentID" : "null",
      "Status" : "1"
    }, {
      "AutomationType" : "1",
      "Automations" : 2,
      "ContactCount" : 7,
      "FromEmail" : "firstName.lastName@gmail.com",
      "FromName" : "firstName",
      "ID" : "90951",
      "IsSegment" : "0",
      "ListID" : "14553794",
      "ListName" : "copy paste",
      "ModifiedDate" : "Feb 24 2017, 03:34 PM",
      "Name" : "AR 24 feb",
      "SegmentID" : "null",
      "Status" : "1"
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
 * Get Archive Domain Name
 * Get Archive Domain Name  Query String Parameters : None      Request Body Parameters: None      Response Body Parameters :                    Parameter        Type        Description                            DomainName        string        Domain Name            
 *
 * authToken String 
 * contentType String 
 * returns GetArchiveDomainName
 **/
exports.clientArchiveDomainGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "firstNamelastName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Community Domain
 * Get Community Domain  Query String Parameters : None      Request Body Parameters: None      Response Body Parameters :                    Parameter        Type        Description                            DomainName        string        Domain Name            
 *
 * authToken String 
 * contentType String 
 * returns GetCommunityDomain
 **/
exports.clientCommunityDomainGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "firstName_lastName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get DMARC List
 * Get DMarc List  Query String Parameters : None      Request Body Parameters: None      Response Body Parameters :                    Parameter        Type        Description                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientGenericList\" >GenericList</a>        Generic List            
 *
 * authToken String 
 * contentType String 
 * returns GetDmarcList
 **/
exports.clientDMarcGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : [ {
      "ID" : "126",
      "Value" : "126"
    }, {
      "ID" : "aol",
      "Value" : "aol"
    }, {
      "ID" : "cox",
      "Value" : "cox"
    }, {
      "ID" : "foxmail",
      "Value" : "foxmail"
    }, {
      "ID" : "gmail",
      "Value" : "gmail"
    }, {
      "ID" : "hotmail",
      "Value" : "hotmail"
    }, {
      "ID" : "mail.com",
      "Value" : "mail.com"
    }, {
      "ID" : "me",
      "Value" : "me"
    }, {
      "ID" : "nokiamail",
      "Value" : "nokiamail"
    }, {
      "ID" : "rocketmail",
      "Value" : "rocketmail"
    }, {
      "ID" : "yahoo",
      "Value" : "yahoo"
    }, {
      "ID" : "ymail",
      "Value" : "ymail"
    } ]
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
 * Get List Upload Terms
 * Get List Upload Terms  Response Body Parameters :                    Parameter        Type        Description                          Status        String        1=successfull,-1 not success                    Error        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>        Array of error                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientListUploadTerms\">ClientListUploadTerms</a>        Array of ClientListUploadTerms            
 *
 * authToken String 
 * contentType String 
 * returns GetListUploadTerms
 **/
exports.clientListUploadTermsGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "Agree" : "1",
      "AgreeDate" : "Oct 31, 2017"
    },
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
 * Get Notification
 * Get Notification  Response body parameters :                    Parameter        Type        Description                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientNotificationData\" >NotificationData</a>        Array                    Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array                    Status        string        1 = Successful, -1 Error            
 *
 * authToken String 
 * contentType String 
 * returns GetNotification
 **/
exports.clientNotificationGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : [ {
      "Body" : "Your Benchmark Email account expired 2 days ago days ago. To upgrade or renew your account, <a href=\"/RenewPlan\">click here</a>.",
      "CreatedDateMDY" : "Sep 18, 2017",
      "Icon" : "notice",
      "Title" : "Account Expired"
    }, {
      "Body" : "Your first few campaigns will be sent in small batches up to <span class=\"green b\">50000</span> contacts. Don't worry, it happens automatically. This may result in slower send times initially. This limit is to establish proper reputation with email service providers. After your first campaigns have been sent, this limit will be not be necessary.</span>",
      "CreatedDateMDY" : "Apr 26, 2017",
      "Icon" : "notice",
      "Title" : "Welcome High Volume Sender"
    }, {
      "Body" : "Your Benchmark Email account expired 21 days ago days ago. To renew your account, <a href=\"/RenewPlan\">click here</a>.",
      "CreatedDateMDY" : "Oct 16, 2015",
      "Icon" : "hand",
      "Title" : "Account Expired"
    }, {
      "Body" : "Please <a href=\"/VerifyDomain\">click here</a> and enter your domain name.  We use this information to ensure that your links are easily noticed by your customers or subscribers, thereby increasing your click rate.",
      "CreatedDateMDY" : "Aug 25, 2015",
      "Icon" : "bell",
      "Title" : "Enter Your Domain Name"
    }, {
      "Body" : "You cannot send any email campaigns until this is done.  <span class=\"nobold\">Please check your inbox for the verification email, or <a href=\"/ConfirmedEmails\" class=\"linkblue\">verify another email address</a>.</span>",
      "CreatedDateMDY" : "Aug 25, 2015",
      "Icon" : "notice",
      "Title" : "Verify Your Email"
    } ],
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
 * Get Clients Rating Range
 * Get Clients Rating Range                    Parameter        Type        Description                            MinRating        String        Min Rating                     MaxRating        string        Max Rating            
 *
 * authToken String 
 * contentType String 
 * returns GetClientsRatingRange
 **/
exports.clientRatingRangeGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "MaxRating" : "245.38",
    "MinRating" : "-81.67"
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
 * Check if Responsive
 * Check if Responsive   Response body parameters :                    Parameter        Type        Description                            IsResponsive        String        0=Not,1 =Responsive                     Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array                    Status        string        1 = Successful, -1 Error            
 *
 * authToken String 
 * contentType String 
 * returns CheckIfResponsive
 **/
exports.clientResponsiveGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "IsResponsive" : "0",
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
 * Set Responsive
 * Set Responsive  Body Parameters (to be encoded as a JSON string)        Key  Required  Description          IsResponsive  Required  Is Responsive=1,Not = 0         Response body parameters :                    Parameter        Type        Description                            IsResponsive        String        0=Not,1 =Responsive                     Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array                    Status        string        1 = Successful, -1 Error            
 *
 * body SetResponsiverequest 
 * authToken String 
 * contentType String 
 * returns SetResponsive
 **/
exports.clientResponsivePatch = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "IsResponsive" : "0",
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
 * Get ActiveCount
 * Get ActiveCount      Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   CountintTotal count      
 *
 * authToken String 
 * contentType String 
 * returns GetActivecount
 **/
exports.contactActiveCountGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 162,
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
 * Get contact lists
 * Get contact lists   URL Parameters            KeyRequiredTypeDescription         {{ListIDs}}requiredstringIDs of the lists            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterRecord\">ContactMasterRecord</a>List Detail   CountintTotal number      
 *
 * authToken String 
 * contentType String 
 * listIDs String 
 * returns GetContactLists
 **/
exports.contactAllByListIDsGet = function(authToken,contentType,listIDs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 2,
    "Data" : [ {
      "ActiveContactCount" : "5",
      "CreatedDateTime" : "Sep 08 2017, 05:34 PM",
      "Description" : "Welcome test",
      "Field10Name" : "State",
      "Field10Type" : "1",
      "Field11Name" : "Country",
      "Field11Type" : "1",
      "Field12Name" : "Continent",
      "Field12Type" : "1",
      "Field13Name" : "Planet",
      "Field13Type" : "1",
      "Field14Name" : "Galaxy",
      "Field14Type" : "1",
      "Field15Name" : "BirthDate",
      "Field15Type" : "4",
      "Field16Name" : "Allowed",
      "Field16Type" : "3",
      "Field17Name" : "Field 17",
      "Field17Type" : "1",
      "Field18Name" : "Field 18",
      "Field18Type" : "1",
      "Field19Name" : "Field 19",
      "Field19Type" : "1",
      "Field1Name" : "Phone No.",
      "Field1Type" : "1",
      "Field20Name" : "Field 20",
      "Field20Type" : "1",
      "Field21Name" : "Field 21",
      "Field21Type" : "1",
      "Field22Name" : "Field 22",
      "Field22Type" : "1",
      "Field23Name" : "Field 23",
      "Field23Type" : "1",
      "Field24Name" : "Field 24",
      "Field24Type" : "1",
      "Field2Name" : "Mobile No.",
      "Field2Type" : "1",
      "Field3Name" : "Room No.",
      "Field3Type" : "1",
      "Field4Name" : "Floor",
      "Field4Type" : "1",
      "Field5Name" : "Building",
      "Field5Type" : "1",
      "Field6Name" : "Street",
      "Field6Type" : "1",
      "Field7Name" : "City",
      "Field7Type" : "1",
      "Field8Name" : "Taluka",
      "Field8Type" : "1",
      "Field9Name" : "District",
      "Field9Type" : "1",
      "FirstnameLabel" : "First Name",
      "ID" : "15192333",
      "IsMasterUnsubscribe" : "0",
      "LastnameLabel" : "Last Name",
      "MiddlenameLabel" : "Middle Name",
      "Name" : "Test List 1"
    }, {
      "ActiveContactCount" : "0",
      "CreatedDateTime" : "Sep 13 2017, 05:22 PM",
      "Description" : "This list is Created by Indominus Rex",
      "Field10Name" : "State",
      "Field10Type" : "1",
      "Field11Name" : "Country",
      "Field11Type" : "1",
      "Field12Name" : "Continent",
      "Field12Type" : "1",
      "Field13Name" : "Planet",
      "Field13Type" : "1",
      "Field14Name" : "Galaxy",
      "Field14Type" : "1",
      "Field15Name" : "BirthDate",
      "Field15Type" : "4",
      "Field16Name" : "Allowed",
      "Field16Type" : "3",
      "Field17Name" : "Field 17",
      "Field17Type" : "1",
      "Field18Name" : "Field 18",
      "Field18Type" : "1",
      "Field19Name" : "Dinosour Type",
      "Field19Type" : "1",
      "Field1Name" : "Phone No.",
      "Field1Type" : "1",
      "Field20Name" : "Field 20",
      "Field20Type" : "1",
      "Field21Name" : "Field 21",
      "Field21Type" : "1",
      "Field22Name" : "Field 22",
      "Field22Type" : "1",
      "Field23Name" : "Field 23",
      "Field23Type" : "1",
      "Field24Name" : "Field 24",
      "Field24Type" : "1",
      "Field2Name" : "Mobile No.",
      "Field2Type" : "1",
      "Field3Name" : "Room No.",
      "Field3Type" : "1",
      "Field4Name" : "Floor",
      "Field4Type" : "1",
      "Field5Name" : "Building",
      "Field5Type" : "1",
      "Field6Name" : "Street",
      "Field6Type" : "1",
      "Field7Name" : "City",
      "Field7Type" : "1",
      "Field8Name" : "Taluka",
      "Field8Type" : "1",
      "Field9Name" : "District",
      "Field9Type" : "1",
      "FirstnameLabel" : "First Name",
      "ID" : "15201061",
      "IsMasterUnsubscribe" : "0",
      "LastnameLabel" : "Last Name",
      "MiddlenameLabel" : "Middle Name",
      "Name" : "Test List 2"
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
 * Get contact audit history
 * Get contact audit history   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list            Query String parameters            KeyRequiredTypeDescription         PageNumberoptionalintPage number   PageSizeoptionalintNumber of records to show per page   OrderByoptionalintField to order by   SortOrderoptionalintSort Order, <code>asc</code> or <code>desc</code>            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   CountintTotal count   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactAuditHistoryRecord\">AuditHistoryRecord</a>Audit history data   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns GetContactAuditHistory
 **/
exports.contactAuditHistoryByListIDGet = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 2,
    "Data" : [ {
      "ApprovedBatchSize" : "0",
      "BadEmails" : "0",
      "BatchID" : "8dd4843b-20aa-42ee-9872-d43c78c84106",
      "BatchSize" : "0",
      "CreatedDate" : "Oct 17, 2017",
      "Duplicates" : "1",
      "FileName" : "text.csv",
      "FilteredKeyword" : "0",
      "FilteredOther" : "1",
      "ID" : "1",
      "JsonData" : "",
      "ListAudited" : "1",
      "RoleBased" : "0",
      "SyntaxError" : "0",
      "TotalBatchSize" : "1",
      "Unsubscribes" : "0"
    }, {
      "ApprovedBatchSize" : "1",
      "BadEmails" : "0",
      "BatchID" : "aa1abf41-64ff-4ec6-8758-1b235c9ca967",
      "BatchSize" : "0",
      "CreatedDate" : "Oct 17, 2017",
      "Duplicates" : "0",
      "FileName" : "text.csv",
      "FilteredKeyword" : "0",
      "FilteredOther" : "0",
      "ID" : "2",
      "JsonData" : "",
      "ListAudited" : "1",
      "RoleBased" : "0",
      "SyntaxError" : "0",
      "TotalBatchSize" : "1",
      "Unsubscribes" : "0"
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
 * Get contact audit history detail
 * Get contact audit history detail   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list   {{BatchID}}requiredstringID of the batch   {{GroupID}}requiredstringID of the group            Query String parameters            KeyRequiredTypeDescription         PageNumberoptionalintPage number   PageSizeoptionalintNumber of records to show per page   OrderByoptionalintField to order by   SortOrderoptionalintSort Order, <code>asc</code> or <code>desc</code>            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   CountintTotal count   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactAuditHistoryDetailsRecord\">AuditHistoryDetailsRecord</a>Audit History   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * batchID String 
 * groupID String 
 * returns GetContactAuditHistoryDetail
 **/
exports.contactAuditHistoryDetailsGroupIDByListIDAndBatchIDGet = function(authToken,contentType,listID,batchID,groupID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "Date" : "Oct 10, 2016",
      "Email" : "test @cybermaxsolutions.com",
      "ID" : "1"
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
 * Delete list
 * Delete Single List   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error Code      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns DeleteList
 **/
exports.contactByListIDDelete = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Get contact lists detail
 * Get contact lists detail   URL Parameters            KeyRequiredTypeDescription         {{ListIDs}}requiredstringIDs of the lists            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterRecord\">ContactMasterRecord</a>List Data      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns GetContactListsDetail
 **/
exports.contactByListIDGet = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "ActiveContactCount" : "9",
      "CreatedDateTime" : "Oct 06 2017, 05:44 PM",
      "Description" : "This list is modified",
      "Field10Name" : "Job Title",
      "Field10Type" : "1",
      "Field11Name" : "Business Phone",
      "Field11Type" : "1",
      "Field12Name" : "Business Fax",
      "Field12Type" : "1",
      "Field13Name" : "Business Address",
      "Field13Type" : "1",
      "Field14Name" : "Business City",
      "Field14Type" : "1",
      "Field15Name" : "Business State",
      "Field15Type" : "1",
      "Field16Name" : "Business Zip",
      "Field16Type" : "1",
      "Field17Name" : "Business Country",
      "Field17Type" : "1",
      "Field18Name" : "Notes",
      "Field18Type" : "1",
      "Field19Name" : "Date 1",
      "Field19Type" : "4",
      "Field1Name" : "Address",
      "Field1Type" : "1",
      "Field20Name" : "Date 2",
      "Field20Type" : "4",
      "Field21Name" : "Text",
      "Field21Type" : "1",
      "Field22Name" : "Age",
      "Field22Type" : "2",
      "Field23Name" : "Indian",
      "Field23Type" : "3",
      "Field24Name" : "Modified On",
      "Field24Type" : "4",
      "Field2Name" : "City",
      "Field2Type" : "1",
      "Field3Name" : "State",
      "Field3Type" : "1",
      "Field4Name" : "Zip",
      "Field4Type" : "1",
      "Field5Name" : "Country",
      "Field5Type" : "1",
      "Field6Name" : "Phone",
      "Field6Type" : "1",
      "Field7Name" : "Fax",
      "Field7Type" : "1",
      "Field8Name" : "Cell Phone",
      "Field8Type" : "1",
      "Field9Name" : "Company Name",
      "Field9Type" : "1",
      "FirstnameLabel" : "First Name",
      "ID" : "15242968",
      "IsMasterUnsubscribe" : "0",
      "LastnameLabel" : "Last Name",
      "MiddlenameLabel" : "Middle Name",
      "Name" : "Targeted EMailing List Modified"
    },
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
 * Modify Contact List
 * Modifies an existing contact list   URL Parameters            Key   Required   Description               {{ListID}}   required   ID of the contact list         <br />   Body Parameters (To be passed as a JSON string)               KeyRequiredDescription                 NameoptionalList Name       DescriptionoptionalList Description       FirstnameLabeloptionalText for FirstName       MiddlenameLabeloptionalText for Middlename       LastnameLabeloptionalText for Lastname       Field1NameoptionalText for Field1Name       Field1TypeoptionalType for Field1Type       Field2NameoptionalText for Field2Name       Field2TypeoptionalType for Field2Type       Field3NameoptionalText for Field3Name       Field3TypeoptionalType for Field3Type       Field4NameoptionalText for Field4Name       Field4TypeoptionalType for Field4Type       Field5NameoptionalText for Field5Name       Field5TypeoptionalType for Field5Type       Field6NameoptionalText for Field6Name       Field6TypeoptionalType for Field6Type       Field7NameoptionalText for Field7Name       Field7TypeoptionalType for Field7Type       Field8NameoptionalText for Field8Name       Field8TypeoptionalType for Field8Type       Field9NameoptionalText for Field9Name       Field9TypeoptionalType for Field9Type       Field10NameoptionalText for Field10Name       Field10TypeoptionalType for Field10Type       Field11NameoptionalText for Field11Name       Field11TypeoptionalType for Field11Type       Field12NameoptionalText for Field12Name       Field12TypeoptionalType for Field12Type       Field13NameoptionalText for Field13Name       Field13TypeoptionalType for Field13Type       Field14NameoptionalText for Field14Name       Field14TypeoptionalType for Field14Type       Field15NameoptionalText for Field15Name       Field15TypeoptionalType for Field15Type       Field16NameoptionalText for Field16Name       Field16TypeoptionalType for Field16Type       Field17NameoptionalText for Field17Name       Field17TypeoptionalType for Field17Type       Field18NameoptionalText for Field18Name       Field18TypeoptionalType for Field18Type       Field19NameoptionalText for Field19Name       Field19TypeoptionalType for Field19Type       Field20NameoptionalText for Field20Name       Field20TypeoptionalType for Field20Type       Field21NameoptionalText for Field21Name       Field21TypeoptionalType for Field21Type       Field22NameoptionalText for Field22Name       Field22TypeoptionalType for Field22Type       Field23NameoptionalText for Field23Name       Field23TypeoptionalType for Field23Type       Field24NameoptionalText for Field24Name       Field24TypeoptionalType for Field24Type              For fields 1 to 24,  use the following codes for the field type   <ul>     <li><code>1</code> - Alphanumeric</li>     <li><code>2</code> - Numeric</li>     <li><code>3</code> - True / False</li>     <li><code>4</code> - Date</li>   </ul>         Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   DataContactMasterRecordData of Contact List   ErrorArray of ErrorDataArray of errors      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns ModifyContactList
 **/
exports.contactByListIDPatch = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "ActiveContactCount" : "3",
      "CreatedDateTime" : "Oct 16 2017, 05:49 PM",
      "Description" : "This list is modified",
      "Field10Name" : "Job Title",
      "Field10Type" : "1",
      "Field11Name" : "Business Phone",
      "Field11Type" : "1",
      "Field12Name" : "Business Fax",
      "Field12Type" : "1",
      "Field13Name" : "Business Address",
      "Field13Type" : "1",
      "Field14Name" : "Business City",
      "Field14Type" : "1",
      "Field15Name" : "Business State",
      "Field15Type" : "1",
      "Field16Name" : "Business Zip",
      "Field16Type" : "1",
      "Field17Name" : "Business Country",
      "Field17Type" : "1",
      "Field18Name" : "Notes",
      "Field18Type" : "1",
      "Field19Name" : "Date 1",
      "Field19Type" : "4",
      "Field1Name" : "Address",
      "Field1Type" : "1",
      "Field20Name" : "Date 2",
      "Field20Type" : "4",
      "Field21Name" : "Extra 3",
      "Field21Type" : "1",
      "Field22Name" : "Extra 4",
      "Field22Type" : "1",
      "Field23Name" : "Extra 5",
      "Field23Type" : "1",
      "Field24Name" : "Registered user",
      "Field24Type" : "3",
      "Field2Name" : "City",
      "Field2Type" : "1",
      "Field3Name" : "State",
      "Field3Type" : "1",
      "Field4Name" : "Zip",
      "Field4Type" : "1",
      "Field5Name" : "Country",
      "Field5Type" : "1",
      "Field6Name" : "Phone",
      "Field6Type" : "1",
      "Field7Name" : "Fax",
      "Field7Type" : "1",
      "Field8Name" : "Cell Phone",
      "Field8Type" : "1",
      "Field9Name" : "Company Name",
      "Field9Type" : "1",
      "FirstnameLabel" : "First Name",
      "ID" : "15257899",
      "IsMasterUnsubscribe" : "0",
      "LastnameLabel" : "Last Name",
      "MiddlenameLabel" : "Middle Name",
      "Name" : "New Target List"
    },
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
 * Clean List
 * Cleans the specified list  URL Parameters        Key  Required  Description          {{CleanListID}}  required  ID of the contact list to be cleaned          Body Parameters (to be encoded as a JSON string)        Key  Required  Description          HardBounces  required  1 if hard bounces are to be cleaned, 0 otherwise      SoftBounces  required  1 if soft bounces are to be cleaned, 0 otherwise      ConfirmedBounces  required  1 if confirmed bounces are to be cleaned, 0 otherwise      Unsubscribes  required  1 if unsubscribes are to be cleaned, 0 otherwise      FilterDomain  required  1 if filtered domains are to be cleaned, 0 otherwise      NotOpenedCampaigns  required  1 if contacts who have not opened campaign are to be cleaned, 0 otherwise      Remove  required  1 the cleaned contacts are to be deleted from the list, 0 if they are to be moved to a new list          Response body parameters        Key  Type  Description          Status  string  1 if successful, -1 if error      Errors  ErrorData  Errors if any      Message  string  Current status of list      
 *
 * body CleanListrequest 
 * authToken String 
 * contentType String 
 * cleanListID String 
 * returns CleanList
 **/
exports.contactCleanByCleanListIDPost = function(body,authToken,contentType,cleanListID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "Message" : "Clean list successfully created. - (Test Email Campaign List - Unopened+FilteredDomains)",
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
 * Get the clean count
 * Gets the clean count   URL Parameters            Key   Required   Description               {{ListID}}   required   ID of the contact ID               Query String Parameters            Key   Required   Description               ct   required   Clean Type         ctc   required   Clean Type Count               Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   CountintTotal Count      
 *
 * ct String 
 * ctc String 
 * authToken String 
 * contentType String 
 * listID String 
 * returns GetTheCleanCount
 **/
exports.contactCleanCountByListIDGet = function(ct,ctc,authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 10,
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
 * Compare contacts
 * Compares contacts  Response: 1 if successful, -1 if error  URL Parameters        Key  Required  Description          {{ListIDs}}  required  IDs of the lists          Response body parameters        KeyTypeDescription      Statusstring1 if successful, -1 if error    
 *
 * authToken String 
 * contentType String 
 * listIDs String 
 * returns CompareContacts
 **/
exports.contactCompareByListIDsGet = function(authToken,contentType,listIDs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Delete the selected contacts from ALL lists from Contact Details page
 * Delete the selected contacts from ALL lists from Contact Details page    URL Parameters            KeyRequiredTypeDescription      <tbody   {{ListID}}requiredstringID of the list   {{ContactID}}requiredstringID of the contact            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error Data      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * contactID String 
 * returns DeleteTheSelectedContactsFromAllListsFromContactDetailsPage
 **/
exports.contactContactDetailsAllByListIDAndContactIDDelete = function(authToken,contentType,listID,contactID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Delete the selected contacts from ALL lists
 * Delete the selected contacts from ALL lists      Request body  parameters            KeyRequiredTypeDescription         SearchoptionalstringSearch value like email address   FilteroptionalstringFilter value            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list   {{ContactID}}requiredstringID of the contact            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error Data      
 *
 * body DeleteTheSelectedContactsFromAllListsrequest 
 * authToken String 
 * contentType String 
 * returns DeleteTheSelectedContactsFromAllLists
 **/
exports.contactContactDetailsAllDelete = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * DELETE Contact only from search contact page
 * Delete Contact only from search contact page   URL Parameters            KeyRequiredTypeDescription      <tbody   {{ContactID}}requiredstringID of the contact            Request body  parameters            KeyRequiredTypeDescription         SearchoptionalstringSearch value            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error Data      
 *
 * authToken String 
 * contentType String 
 * contactID String 
 * returns DeleteContactOnlyFromSearchContactPage
 **/
exports.contactContactDetailsByContactIDDelete = function(authToken,contentType,contactID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Delete the selected contacts from current list from contact details page
 * Delete the selected contacts from current list from contact details page   URL Parameters            KeyRequiredTypeDescription      <tbody   {{ListID}}requiredstringID of the list   {{ContactID}}requiredstringID of the contact            Request body  parameters            KeyRequiredTypeDescription         SearchoptionalstringSearch value like email address   FilteroptionalstringFilter value            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error Data      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * contactID String 
 * returns DeleteTheSelectedContactsFromCurrentListFromContactDetailsPage
 **/
exports.contactContactDetailsByListIDAndContactIDDelete = function(authToken,contentType,listID,contactID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Get Contact Details
 * Get Contact Details   URL Parameters            KeyRequiredTypeDescription      <tbody   {{ListID}}requiredstringID of the list   {{ContactID}}requiredstringID of the contact            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactDetailRecord\">ContactDetailRecord</a>Contact Data      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * iD String 
 * returns GetContactDetails
 **/
exports.contactContactDetailsByListIDAndIDGet = function(authToken,contentType,listID,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "ContactMasterID" : "15259441",
      "Email" : "test@cybermaxsolutions.com",
      "EmailPerm" : "null",
      "EmailType" : "2",
      "Field1" : "",
      "Field10" : "",
      "Field11" : "",
      "Field12" : "",
      "Field13" : "",
      "Field14" : "",
      "Field15" : "",
      "Field16" : "",
      "Field17" : "",
      "Field18" : "",
      "Field19" : "",
      "Field2" : "",
      "Field20" : "",
      "Field21" : "",
      "Field22" : "",
      "Field23" : "",
      "Field24" : "",
      "Field3" : "",
      "Field4" : "",
      "Field5" : "",
      "Field6" : "",
      "Field7" : "",
      "Field8" : "",
      "Field9" : "",
      "FirstName" : "",
      "Flag" : "",
      "ID" : "2040826674",
      "IPAddress" : "null",
      "LastName" : "",
      "MiddleName" : "",
      "Optin" : "",
      "OptinDate" : "",
      "OptinIP" : "",
      "Status" : ""
    },
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
 * Get Filtered Contacts
 * Get Filtered Contacts   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list            Query String parameters            KeyRequiredTypeDescription         SearchFilteroptionalstring Search value   SearchTypeoptionalstring<code>1</code> - Starts    <code>2</code> - exact    <code>3</code> - contains    <code>4</code> - end   SearchFieldoptionalstringSearch field (like <code>email</code>, <code>name</code>, <code>address</code>, <code>date1</code>, <code>date2</code> etc)   FilteroptionalstringFilter contact   <code>2</code> - unsubscribe   <code>5</code> - hard bounce   <code>100</code> – all other contacts except unsubscribe and hard bounce   PageNumberoptionalintPage Number   PageSizeoptionalintNumber of pages   OrderByoptionalstrinlastNamer by <code>email</code>, <code>firstname</code>, <code>lastname</code>, <code>date</code>   SortOrderoptionalint<code>Desc</code> or <code>ASC</code>            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactItemRecord\">ContactItemRecord</a>Data   CountintTotal count      
 *
 * searchFilter String 
 * searchType String 
 * searchField String 
 * filter String 
 * pageNumber String 
 * pageSize String 
 * orderBy String 
 * sortOrder String 
 * authToken String 
 * contentType String 
 * listID String 
 * returns GetFilteredContacts
 **/
exports.contactContactDetailsByListIDGet = function(searchFilter,searchType,searchField,filter,pageNumber,pageSize,orderBy,sortOrder,authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 10,
    "Data" : [ {
      "ContactMasterID" : "15242968",
      "CreatedDate" : "Oct 14, 2017",
      "Email" : "test_modified@cybermaxsolutions.com",
      "EmailType" : "",
      "FirstName" : "",
      "ID" : "2039133643",
      "LastName" : "",
      "MiddleName" : "",
      "ReSend" : "",
      "UpdatedDate" : "Oct 14, 2017"
    }, {
      "ContactMasterID" : "15242968",
      "CreatedDate" : "Oct 14, 2017",
      "Email" : "test00@cybermaxsolutions.com",
      "EmailType" : "",
      "FirstName" : "",
      "ID" : "2039133645",
      "LastName" : "",
      "MiddleName" : "",
      "ReSend" : "",
      "UpdatedDate" : "Oct 14, 2017"
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
 * Delete the selected contacts from current lists
 * Delete the selected contacts from current lists    Request body  parameters            KeyRequiredTypeDescription         SearchrequiredstringSearch value like email address   FilterrequiredstringFilter value            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         {{ListID}}optionalstringID of the list   {{ContactID}}optionalstringID of the contact            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error Data      
 *
 * search String 
 * filter String 
 * body DeleteTheSelectedContactsFromCurrentListsrequest 
 * authToken String 
 * contentType String 
 * returns DeleteTheSelectedContactsFromCurrentLists
 **/
exports.contactContactDetailsDelete = function(search,filter,body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Search Contacts
 * Search Contacts   Query String parameters            KeyRequiredTypeDescription         SearchFilteroptionalstring Search Filter   Searchrequiredstring Email Address you want to search            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactSearchRecord\">ContactSearchRecord</a>Data   CountintTotal count      
 *
 * searchFilter String 
 * search String 
 * authToken String 
 * contentType String 
 * returns SearchContacts
 **/
exports.contactContactDetailsGet = function(searchFilter,search,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 4,
    "Data" : [ {
      "ContactMasterID" : "15112393",
      "Email" : "test02@cybermaxsolutions.com",
      "FirstName" : "Test2",
      "ID" : "1950474841",
      "IsMasterUnsubScribe" : 0,
      "LastName" : "Test2",
      "ListName" : "Benchmark Tech Support Test List"
    }, {
      "ContactMasterID" : "15242968",
      "Email" : "test02@cybermaxsolutions.com",
      "FirstName" : "",
      "ID" : "2039133647",
      "IsMasterUnsubScribe" : 0,
      "LastName" : "",
      "ListName" : "Targeted EMailing List Modified"
    }, {
      "ContactMasterID" : "15257848",
      "Email" : "test02@cybermaxsolutions.com",
      "FirstName" : "",
      "ID" : "2039912369",
      "IsMasterUnsubScribe" : 0,
      "LastName" : "",
      "ListName" : "Test Source List"
    }, {
      "ContactMasterID" : "15257899",
      "Email" : "test02@cybermaxsolutions.com",
      "FirstName" : "",
      "ID" : "2040815886",
      "IsMasterUnsubScribe" : 0,
      "LastName" : "",
      "ListName" : "New Target List"
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
 * Get Contact Import Status
 * Get Contact Import Status      Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   ImportTypestringImport Type   ContactFoundstringContact Found Count   ContactIncreasestring   CountintTotal count   ListIDsstringList ID   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactImportStatusRecord\">ContactImportStatusRecord</a>Array of Data      
 *
 * authToken String 
 * contentType String 
 * returns GetContactImportStatus
 **/
exports.contactContactImportStatusGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ContactFound" : "0",
    "ContactIncrease" : "0",
    "Count" : 0,
    "Data" : [ ],
    "ImportType" : "0",
    "ListIDs" : "",
    "Status" : "-1"
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
 * Get contact history
 * Get contact history   URL Parameters            KeyRequiredTypeDescription         {{EMail}}requiredstringEMail Address            Query String parameters            KeyRequiredTypeDescription         PageNumberoptionalintPage number   PageSizeoptionalintNumber of records to show per page   OrderByoptionalintField to order by   SortOrderoptionalintSort Order, <code>asc</code> or <code>desc</code>            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   CountintTotal count   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactEmailHistoryRecord\">EmailHistoryRecord</a>EMail History      
 *
 * authToken String 
 * contentType String 
 * eMail String 
 * returns GetContactHistory
 **/
exports.contactContactReportHistoryByEMailGet = function(authToken,contentType,eMail) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 18,
    "Data" : [ {
      "Clicks" : "0",
      "Forwards" : "0",
      "ID" : "0",
      "Opens" : "0",
      "Schedule" : "Oct 19, 2017",
      "TemplateName" : "Jun 16 2016 Email Oct 19 2017"
    }, {
      "Clicks" : "0",
      "Forwards" : "0",
      "ID" : "0",
      "Opens" : "0",
      "Schedule" : "Oct 18, 2017",
      "TemplateName" : "Jun 16 2016 Email Oct 18 2017"
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
 * Get contact history
 * Get contact history   URL Parameters            KeyRequiredTypeDescription         {{EMailID}}requiredstringEMail Address            Query String parameters            KeyRequiredTypeDescription         PageNumberoptionalintPage number   PageSizeoptionalintNumber of records to show per page   OrderByoptionalintField to order by   SortOrderoptionalintSort Order            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   CountintTotal count   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactAuditHistoryRecord\">AuditHistoryRecord</a>Audit history data   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error      
 *
 * authToken String 
 * contentType String 
 * eMailID String 
 * returns GetContactHistory
 **/
exports.contactContactReportHistoryByEMailIDGet = function(authToken,contentType,eMailID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 22,
    "Data" : [ {
      "Clicks" : "0",
      "Forwards" : "0",
      "ID" : "0",
      "Opens" : "0",
      "Schedule" : "Oct 17, 2017",
      "TemplateName" : "Jun 16 2016 Email Oct 17 2017"
    }, {
      "Clicks" : "0",
      "Forwards" : "0",
      "ID" : "0",
      "Opens" : "0",
      "Schedule" : "Oct 16, 2017",
      "TemplateName" : "Jun 16 2016 Email Oct 16 2017"
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
 * Get the contact summary
 * Get summary details of a contact list  URL Parameters        Key  Required  Description          {{ListID}}  required  ID of the contact list          Response body parameters        KeyTypeDescription      Statusstring1 if successful, -1 if error  DataContactSummaryRecordArray of data  ErrorErrorDataArray of errors    
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns GetTheContactSummary
 **/
exports.contactContactSummaryByListIDGet = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "ActiveContactCount" : "12",
      "BounceContactCount" : "0",
      "HardContactCount" : "0",
      "NotOptinContactCount" : "0",
      "OptinContactCount" : "0",
      "SoftContactCount" : "0",
      "UnsubscribeContactCount" : "2"
    },
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
 * Copy Contacts
 * Copy Contacts   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list   {{ContactID}}requiredstringID of the contact            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * contactID String 
 * returns CopyContacts
 **/
exports.contactCopyContactsByListIDAndContactIDPost = function(authToken,contentType,listID,contactID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Copy Bulk Contacts
 * Copy Bulk Contacts      Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         TargetListIDsrequiredstringTarget List ID   ContactIDsrequiredstringComma separated list of Contact IDs            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * returns CopyBulkContacts
 **/
exports.contactCopyContactsPost = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Get Contacts Count
 * Get Contacts Count   URL Parameters            KeyRequiredTypeDescription         {{ListIDs}}requiredstringIDs of the lists   {{SegmentIDs}}requiredstringIDs of the segments            Query String parameters            KeyRequiredTypeDescription         ExcludeListIDsoptionalintIDs of the lists to exclude   ExcludeSegmentIDsoptionalintIDs of the segments to exclude            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   CountintTotal count      
 *
 * authToken String 
 * contentType String 
 * listIDs String 
 * segmentIDs String 
 * returns GetContactsCount
 **/
exports.contactCountByListIDsAndSegmentIDsGet = function(authToken,contentType,listIDs,segmentIDs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 3899,
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
 * Delete List
 * Delete List   URL Parameters            KeyRequiredTypeDescription         {{ListIDs}}requiredstringIDs of the lists            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * listIDs String 
 * returns DeleteList
 **/
exports.contactDeleteListByListIDsDelete = function(authToken,contentType,listIDs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Delete List Check
 * Get a list of contacts   URL Parameters            KeyRequiredTypeDescription         {{ListIDs}}requiredstringIDs of the lists            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * listIDs String 
 * returns DeleteListCheck
 **/
exports.contactDeleteListCheckByListIDsGet = function(authToken,contentType,listIDs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Error" : "null",
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
 * Delete Trash List
 * Get a list of contacts   URL Parameters            KeyRequiredTypeDescription         {{ListIDs}}requiredstringIDs of the lists            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * listIDs String 
 * returns DeleteTrashList
 **/
exports.contactDeleteTrashListByListIDsDelete = function(authToken,contentType,listIDs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Get Download report
 * Get a list of contacts   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringIDs of the lists            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 error   ListNamestringName of List   ListDescriptionstringList Description   ContactMasterIDstringList ID   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Array of errors   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactDownloadData\">DownloadData</a>Array of data   CountintTotal count   HasPinint1= Has security pin      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetDownloadReport
 **/
exports.contactDownloadByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ContactMasterID" : "",
    "Count" : 1,
    "Data" : [ {
      "FieldLabel" : "Email",
      "FieldName" : "email",
      "Sequance" : 1
    }, {
      "FieldLabel" : "Email Type",
      "FieldName" : "emailtype",
      "Sequance" : 2
    }, {
      "FieldLabel" : "First Name",
      "FieldName" : "firstname",
      "Sequance" : 3
    }, {
      "FieldLabel" : "Middle Name",
      "FieldName" : "middlename",
      "Sequance" : 4
    }, {
      "FieldLabel" : " Last Name",
      "FieldName" : "lastname",
      "Sequance" : 5
    }, {
      "FieldLabel" : "Address",
      "FieldName" : "field_1_name",
      "Sequance" : 1
    }, {
      "FieldLabel" : "City",
      "FieldName" : "field_2_name",
      "Sequance" : 2
    }, {
      "FieldLabel" : "State",
      "FieldName" : "field_3_name",
      "Sequance" : 3
    }, {
      "FieldLabel" : "Zip",
      "FieldName" : "field_4_name",
      "Sequance" : 4
    }, {
      "FieldLabel" : "Country",
      "FieldName" : "field_5_name",
      "Sequance" : 5
    }, {
      "FieldLabel" : "Phone",
      "FieldName" : "field_6_name",
      "Sequance" : 6
    }, {
      "FieldLabel" : "Fax",
      "FieldName" : "field_7_name",
      "Sequance" : 7
    }, {
      "FieldLabel" : "Cell Phone",
      "FieldName" : "field_8_name",
      "Sequance" : 8
    }, {
      "FieldLabel" : "Company Name",
      "FieldName" : "field_9_name",
      "Sequance" : 9
    }, {
      "FieldLabel" : "Job Title",
      "FieldName" : "field_10_name",
      "Sequance" : 10
    }, {
      "FieldLabel" : "Business Phone",
      "FieldName" : "field_11_name",
      "Sequance" : 11
    }, {
      "FieldLabel" : "Business Fax",
      "FieldName" : "field_12_name",
      "Sequance" : 12
    }, {
      "FieldLabel" : "Business Address",
      "FieldName" : "field_13_name",
      "Sequance" : 13
    }, {
      "FieldLabel" : "Business City",
      "FieldName" : "field_14_name",
      "Sequance" : 14
    }, {
      "FieldLabel" : "Business State",
      "FieldName" : "field_15_name",
      "Sequance" : 15
    }, {
      "FieldLabel" : "Business Zip",
      "FieldName" : "field_16_name",
      "Sequance" : 16
    }, {
      "FieldLabel" : "Business Country",
      "FieldName" : "field_17_name",
      "Sequance" : 17
    }, {
      "FieldLabel" : "Notes",
      "FieldName" : "field_18_name",
      "Sequance" : 18
    }, {
      "FieldLabel" : "Date 1",
      "FieldName" : "field_19_name",
      "Sequance" : 19
    }, {
      "FieldLabel" : "Date 2",
      "FieldName" : "field_20_name",
      "Sequance" : 20
    }, {
      "FieldLabel" : "Extra 3",
      "FieldName" : "field_21_name",
      "Sequance" : 21
    }, {
      "FieldLabel" : "Extra 4",
      "FieldName" : "field_22_name",
      "Sequance" : 22
    }, {
      "FieldLabel" : "Extra 5",
      "FieldName" : "field_23_name",
      "Sequance" : 23
    }, {
      "FieldLabel" : "Extra 6",
      "FieldName" : "field_24_name",
      "Sequance" : 24
    }, {
      "FieldLabel" : "Optin IP",
      "FieldName" : "optin_ip",
      "Sequance" : 25
    }, {
      "FieldLabel" : "Date 1",
      "FieldName" : "createddatetime",
      "Sequance" : 26
    }, {
      "FieldLabel" : "Date 2",
      "FieldName" : "updateddatetime",
      "Sequance" : 27
    } ],
    "Error" : [ ],
    "HasPin" : 0,
    "ListDescription" : "",
    "ListName" : "New Test Split List 12",
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
 * Download report
 * Download report   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringIDs of the list            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         PINrequiredstring4 digit Security Pin            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors   ContentstringIf success then return message says   *\"Everything is fine\"*      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns DownloadReport
 **/
exports.contactDownloadByIDPost = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Content" : " Everything is fine.",
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
 * Get Export List
 * Export List      Query String Parameters            Key   Required   Description               ReportFor   optional   <ul><li><code>1</code> - Clicks</li><li><code>2</code> - Forwards</li><li><code>3</code> - Bounces</li><li><code>5</code> - Unsubscribe</li><li><code>6</code> - Opens</li><li><code>7</code> - Unopens</li><li><code>8</code> – Clicks For url</li><li><code>11</code> - Individual Survey</li><li><code>12</code> - Opens State Wise</li></ul>      EmailIDoptionalUnique ID (i.e Campaign ID)      IsOverWrite   optional   <ul><li><code>1</code> - OverWrite if List Exists</li><li><code>0</code> - Don't Over Write if List Exists (It will stop process if list found with the same name)</li>      </ul>   LinkNameoptionalName of link      Filter   optional   <ul><li><code>1</code> - Soft Bounces</li><li><code>2</code> - Hard Bounces</li></ul>      RegionoptionalRegion or  State               Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   ReportTypeTextstringReturns the report type like bounces,SURVEY RESPONDENTS,OPENS etc   ListNamestringList Name      
 *
 * authToken String 
 * contentType String 
 * returns GetExportList
 **/
exports.contactExportToListGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ListName" : "Unopened Report : Oct 06 2017 Email 1",
    "ReportTypeText" : "UNOPENS",
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
 * Get contact lists attributes
 * Get contact lists attributes   URL Parameters            KeyRequiredTypeDescription         {{ListIDs}}requiredstringIDs of the lists            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   DataStringData   CountintTotal count   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns GetContactListsAttributes
 **/
exports.contactFieldsByListIDGet = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 29,
    "Data" : [ "email", "firstname", "lastname", "middlename", "emailtype", "Address", "City", "State", "Zip", "Country", "Phone", "Fax", "Cell Phone", "Company Name", "Job Title", "Business Phone", "Business Fax", "Business Address", "Business City", "Business State", "Business Zip", "Business Country", "Notes", "Date 1", "Date 2", "Text", "Age", "Indian", "Modified On" ],
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
 * Get a list of contacts
 * Get a list of contacts      Query String parameters            KeyRequiredTypeDescription         PageNumberoptionalintPage number   PageSizeoptionalintNumber of records to show per page   OrderByoptionalstringField to order by, <code>email</code>, <code>date</code>, <code>count</code>, <code>schedule</code>   SortOrderoptionalstringSort Order, <code>asc</code> or <code>desc</code>   SearchFilteroptionalstringFilter value   StatusoptionalstringStatus filter            Response body parameters            KeyTypeDescription         CountintTotal number   Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactFullRecord\">ContactFullRecord</a>EMail History      
 *
 * authToken String 
 * contentType String 
 * returns GetAListOfContacts
 **/
exports.contactGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 102,
    "Data" : [ {
      "AllowDelete" : "1",
      "ContactCount" : 0,
      "CreatedDate" : "Oct 17, 2017",
      "ID" : "15259556",
      "IsImporting" : "0",
      "IsMasterUnsubscribe" : "0",
      "ListAudited" : "1",
      "ListDescription" : "Test Email Campaign List - Unopened+FilteredDomains",
      "ListImportV3" : "0",
      "ModifiedDate" : "Oct 17, 2017",
      "Name" : "Test Email Campaign List - Unopened+FilteredDomains",
      "NameShort" : "Test Email Campaign List - Unopened+FilteredDomain",
      "PermissionPassList" : "0",
      "Segments" : [ ],
      "Status" : ""
    }, {
      "AllowDelete" : "1",
      "ContactCount" : 0,
      "CreatedDate" : "Oct 16, 2017",
      "ID" : "15257849",
      "IsImporting" : "0",
      "IsMasterUnsubscribe" : "0",
      "ListAudited" : "1",
      "ListDescription" : "Test Target List",
      "ListImportV3" : "0",
      "ModifiedDate" : "Oct 17, 2017",
      "Name" : "Test Target List",
      "NameShort" : "Test Target List",
      "PermissionPassList" : "0",
      "Segments" : [ ],
      "Status" : ""
    }, {
      "AllowDelete" : "1",
      "ContactCount" : 8,
      "CreatedDate" : "Oct 16, 2017",
      "ID" : "15257848",
      "IsImporting" : "0",
      "IsMasterUnsubscribe" : "0",
      "ListAudited" : "1",
      "ListDescription" : "Test Source List",
      "ListImportV3" : "0",
      "ModifiedDate" : "Oct 17, 2017",
      "Name" : "Test Source List",
      "NameShort" : "Test Source List",
      "PermissionPassList" : "0",
      "Segments" : [ ],
      "Status" : ""
    }, {
      "AllowDelete" : "1",
      "ContactCount" : 2,
      "CreatedDate" : "Oct 06, 2017",
      "ID" : "15242896",
      "IsImporting" : "0",
      "IsMasterUnsubscribe" : "0",
      "ListAudited" : "1",
      "ListDescription" : "Test 1",
      "ListImportV3" : "0",
      "ModifiedDate" : "Oct 17, 2017",
      "Name" : "Test 1",
      "NameShort" : "Test 1",
      "PermissionPassList" : "0",
      "Segments" : [ ],
      "Status" : ""
    }, {
      "AllowDelete" : "1",
      "ContactCount" : 1,
      "CreatedDate" : "Sep 19, 2017",
      "ID" : "15210912",
      "IsImporting" : "0",
      "IsMasterUnsubscribe" : "0",
      "ListAudited" : "1",
      "ListDescription" : "jQuery API Test List",
      "ListImportV3" : "0",
      "ModifiedDate" : "Oct 17, 2017",
      "Name" : "jQuery API Test List",
      "NameShort" : "jQuery API Test List",
      "PermissionPassList" : "0",
      "Segments" : [ ],
      "Status" : ""
    }, {
      "AllowDelete" : "1",
      "ContactCount" : 31112,
      "CreatedDate" : "Sep 14, 2017",
      "ID" : "15202989",
      "IsImporting" : "0",
      "IsMasterUnsubscribe" : "0",
      "ListAudited" : "1",
      "ListDescription" : "Sep 13 2017 Test Upload List 2",
      "ListImportV3" : "1",
      "ModifiedDate" : "Oct 17, 2017",
      "Name" : "Sep 13 2017 Test Upload List 2",
      "NameShort" : "Sep 13 2017 Test Upload List 2",
      "PermissionPassList" : "0",
      "Segments" : [ ],
      "Status" : ""
    }, {
      "AllowDelete" : "1",
      "ContactCount" : 31412,
      "CreatedDate" : "Sep 14, 2017",
      "ID" : "15202975",
      "IsImporting" : "0",
      "IsMasterUnsubscribe" : "0",
      "ListAudited" : "1",
      "ListDescription" : "Sep 13 2017 Test Upload List 1",
      "ListImportV3" : "1",
      "ModifiedDate" : "Oct 17, 2017",
      "Name" : "Sep 13 2017 Test Upload List 1",
      "NameShort" : "Sep 13 2017 Test Upload List 1",
      "PermissionPassList" : "0",
      "Segments" : [ ],
      "Status" : ""
    }, {
      "AllowDelete" : "1",
      "ContactCount" : 31111,
      "CreatedDate" : "Sep 14, 2017",
      "ID" : "15202923",
      "IsImporting" : "0",
      "IsMasterUnsubscribe" : "0",
      "ListAudited" : "1",
      "ListDescription" : "Sep 13 2017 Test Upload List",
      "ListImportV3" : "1",
      "ModifiedDate" : "Oct 17, 2017",
      "Name" : "Sep 13 2017 Test Upload List",
      "NameShort" : "Sep 13 2017 Test Upload List",
      "PermissionPassList" : "0",
      "Segments" : [ ],
      "Status" : ""
    }, {
      "AllowDelete" : "1",
      "ContactCount" : 0,
      "CreatedDate" : "Sep 08, 2017",
      "ID" : "15192327",
      "IsImporting" : "0",
      "IsMasterUnsubscribe" : "0",
      "ListAudited" : "1",
      "ListDescription" : "Sep 08 2017 Test List",
      "ListImportV3" : "0",
      "ModifiedDate" : "Oct 17, 2017",
      "Name" : "Sep 08 2017 Test List",
      "NameShort" : "Sep 08 2017 Test List",
      "PermissionPassList" : "0",
      "Segments" : [ ],
      "Status" : ""
    }, {
      "AllowDelete" : "1",
      "ContactCount" : 7,
      "CreatedDate" : "Aug 09, 2017",
      "ID" : "15112393",
      "IsImporting" : "0",
      "IsMasterUnsubscribe" : "0",
      "ListAudited" : "1",
      "ListDescription" : "Benchmark Tech Support Test List",
      "ListImportV3" : "1",
      "ModifiedDate" : "Oct 17, 2017",
      "Name" : "Benchmark Tech Support Test List",
      "NameShort" : "Benchmark Tech Support Test List",
      "PermissionPassList" : "0",
      "Segments" : [ ],
      "Status" : ""
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
 * Get signup form list
 * Get signup form list      Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   CountintTotal number   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactSignupFormRecord\">SignupFormRecord</a>Signup Form Data      
 *
 * authToken String 
 * contentType String 
 * returns GetSignupFormList
 **/
exports.contactListbuilderListGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 80,
    "Data" : [ {
      "ID" : "706013",
      "Name" : "Account Settings ES Selected"
    }, {
      "ID" : "677605",
      "Name" : "Apr 20 2016 Signup Form"
    }, {
      "ID" : "971207",
      "Name" : "Aug 23 2017 Signup Form"
    }, {
      "ID" : "765398",
      "Name" : "Automation Test  Signup Form"
    }, {
      "ID" : "857007",
      "Name" : "Boolean Signup Form"
    }, {
      "ID" : "758495",
      "Name" : "Dec 02 2016  Signup Form 1"
    }, {
      "ID" : "758493",
      "Name" : "Dec 02 2016 Signup Form"
    }, {
      "ID" : "625936",
      "Name" : "Dec 15 2015  Signup Form 1"
    }, {
      "ID" : "625931",
      "Name" : "Dec 15 2015 Signup Form"
    }, {
      "ID" : "765393",
      "Name" : "Dec 22 2016 Signup Form"
    }, {
      "ID" : "738252",
      "Name" : "English Classic Signup Form"
    }, {
      "ID" : "736317",
      "Name" : "FB Test Signup Form 1"
    }, {
      "ID" : "679741",
      "Name" : "FB Test Signup Form 2"
    }, {
      "ID" : "679747",
      "Name" : "FB Test Signup Form 3"
    }, {
      "ID" : "736320",
      "Name" : "FB Test Signup Form 4"
    }, {
      "ID" : "736312",
      "Name" : "FB Test Signup Form 5"
    }, {
      "ID" : "679740",
      "Name" : "FB test Signup Form"
    }, {
      "ID" : "831338",
      "Name" : "Go Green Classic Signup Form"
    }, {
      "ID" : "826756",
      "Name" : "Go Green Signup Form"
    }, {
      "ID" : "776002",
      "Name" : "Jan 23 2017  Signup Form No HTTPS"
    }, {
      "ID" : "775999",
      "Name" : "Jan 23 2017 Signup Form"
    }, {
      "ID" : "776022",
      "Name" : "Jan 24 2017  Signup Form 1"
    }, {
      "ID" : "776453",
      "Name" : "Jan 24 2017  Signup Form 2"
    }, {
      "ID" : "776011",
      "Name" : "Jan 24 2017 Signup Form"
    }, {
      "ID" : "706014",
      "Name" : "Jul 09 2016 Solicitud de Admisión"
    }, {
      "ID" : "712758",
      "Name" : "Jul 27 2016  Signup Form 1"
    }, {
      "ID" : "712759",
      "Name" : "Jul 27 2016  Signup Form 2"
    }, {
      "ID" : "712757",
      "Name" : "Jul 27 2016 Signup Form"
    }, {
      "ID" : "692681",
      "Name" : "Jun 03 2016 Signup Form"
    }, {
      "ID" : "560551",
      "Name" : "Jun 23 2015 Signup Form"
    }, {
      "ID" : "700801",
      "Name" : "Jun 25 2016 Signup Form"
    }, {
      "ID" : "986554",
      "Name" : "Jurassic World"
    }, {
      "ID" : "986572",
      "Name" : "Test Signup Form 6"
    }, {
      "ID" : "661092",
      "Name" : "Mar 10 2016 Signup Form"
    }, {
      "ID" : "976003",
      "Name" : "Mohit Test Signup Form"
    }, {
      "ID" : "976016",
      "Name" : "Mohit Test Signup Form 1"
    }, {
      "ID" : "976426",
      "Name" : "My Copy Form"
    }, {
      "ID" : "736304",
      "Name" : "Oct 03 2016 Signup Form"
    }, {
      "ID" : "738248",
      "Name" : "Test Signup Form 7"
    }, {
      "ID" : "738249",
      "Name" : "Oct 08 2016 Signup Form"
    }, {
      "ID" : "986540",
      "Name" : "Oct 10 2017 Signup Form"
    }, {
      "ID" : "742439",
      "Name" : "Oct 20 2016 Signup Classic Form"
    }, {
      "ID" : "742492",
      "Name" : "Oct 20 2016 Signup Classic Form 1"
    }, {
      "ID" : "742431",
      "Name" : "Oct 20 2016 Signup Embed Form"
    }, {
      "ID" : "742414",
      "Name" : "Oct 20 2016 Signup Popup Form"
    }, {
      "ID" : "742417",
      "Name" : "Oct 20 2016 Signup Popup Form 1"
    }, {
      "ID" : "742426",
      "Name" : "Oct 20 2016 Signup Popup Form 2"
    }, {
      "ID" : "745036",
      "Name" : "Oct 27 2016 Classic Signup Form"
    }, {
      "ID" : "745035",
      "Name" : "Oct 27 2016 Embedded Signup Form"
    }, {
      "ID" : "986546",
      "Name" : "Rest API Signup Form V1"
    }, {
      "ID" : "986547",
      "Name" : "Rest API Signup Form V2"
    }, {
      "ID" : "544060",
      "Name" : "Sample Signup Form"
    }, {
      "ID" : "976399",
      "Name" : "Sep 08 2017 Signup Form"
    }, {
      "ID" : "976411",
      "Name" : "Sep 08 2017 Signup Form 1"
    }, {
      "ID" : "976412",
      "Name" : "Sep 08 2017 Signup Form 2"
    }, {
      "ID" : "976428",
      "Name" : "Sep 08 2017 Signup Form 2 Copied"
    }, {
      "ID" : "976410",
      "Name" : "Sep 08 2017 Signup Form Copy"
    }, {
      "ID" : "976413",
      "Name" : "Sep 08 2017 Signup Form New Via API"
    }, {
      "ID" : "976422",
      "Name" : "Sep 08 2017 Signup Form New Via API Copy Modified"
    }, {
      "ID" : "976414",
      "Name" : "Sep 08 2017 Signup Form Rest API Test"
    }, {
      "ID" : "976415",
      "Name" : "Sep 08 2017 Signup Form Rest API Test Copy"
    }, {
      "ID" : "732178",
      "Name" : "Sep 21 2016  Signup Form 1"
    }, {
      "ID" : "732247",
      "Name" : "Sep 21 2016  Signup Form 2"
    }, {
      "ID" : "732179",
      "Name" : "Sep 21 2016  Signup Form Embed"
    }, {
      "ID" : "732167",
      "Name" : "Sep 21 2016 Signup Form"
    }, {
      "ID" : "732643",
      "Name" : "Sep 22 2016 Signup Form"
    }, {
      "ID" : "732601",
      "Name" : "Sep 22 2016 Signup Form Popup"
    }, {
      "ID" : "734701",
      "Name" : "Sep 28 2016  Signup Form Classic"
    }, {
      "ID" : "734710",
      "Name" : "Sep 28 2016  Signup Form Embeded"
    }, {
      "ID" : "734713",
      "Name" : "Sep 28 2016  Signup FormPopup"
    }, {
      "ID" : "734684",
      "Name" : "Sep 28 2016 Signup Form"
    }, {
      "ID" : "983357",
      "Name" : "Sep 29 2017 Signup Popup Form"
    }, {
      "ID" : "667653",
      "Name" : "Signup Test"
    }, {
      "ID" : "706017",
      "Name" : "SourceSiteES"
    }, {
      "ID" : "669907",
      "Name" : "Test 409141 Signup Form"
    }, {
      "ID" : "669932",
      "Name" : "Test 409141 Signup Form Copy"
    }, {
      "ID" : "857395",
      "Name" : "Test Boolean Signup Form"
    }, {
      "ID" : "989019",
      "Name" : "Test Classic Signup Form"
    }, {
      "ID" : "971209",
      "Name" : "Test Embed"
    }, {
      "ID" : "826682",
      "Name" : "Test Popup Signup Form"
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
 * Get signup form list
 * Get a list of contacts   URL Parameters            KeyRequiredTypeDescription         {{ListIDs}}requiredstringIDs of the lists            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   CountintTotal number   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactSignupFormRecord\">SignupFormRecord</a>Signup Form Data      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns GetSignupFormList
 **/
exports.contactListbuilderListsByListIDGet = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 4,
    "Data" : [ {
      "ID" : "986572",
      "Name" : "Test Signup Form 1"
    }, {
      "ID" : "986554",
      "Name" : "Test Signup Form 2"
    }, {
      "ID" : "986547",
      "Name" : "Test Signup Form 3"
    }, {
      "ID" : "986546",
      "Name" : "Test Signup Form 4"
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
 * Merge contacts into Existing List
 * Merge contacts into Existing List   URL Parameters            KeyRequiredTypeDescription         {{ListIDs}}requiredstringIDs of the lists            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         TargetListIDoptionalstringTarget list ID            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   ExtrastringNew Contact ID   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
 *
 * body MergeContactsIntoExistingListrequest 
 * authToken String 
 * contentType String 
 * listIDs String 
 * returns MergeContactsIntoExistingList
 **/
exports.contactMergeIntoExistingListByListIDsPost = function(body,authToken,contentType,listIDs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Error" : [ ],
    "Extra" : "15257849",
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
 * Merge contacts into new list
 * Merge contacts into new list   URL Parameters            KeyRequiredTypeDescription         {{ListIDs}}requiredstringIDs of the lists            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         NewListrequiredstringNew list name            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   ExtrastringNew Contact ID   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * listIDs String 
 * returns MergeContactsIntoNewList
 **/
exports.contactMergeIntoListNewListByListIDsPost = function(authToken,contentType,listIDs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Error" : [ ],
    "Extra" : "15268897",
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
 * Get contact Merge List
 * Get contact Merge List   URL Parameters            KeyRequiredTypeDescription         {{ListIDs}}requiredstringIDs of the lists            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterRecordSmall\">ContactMasterRecordSmall</a>List Data   CountintTotal Count      
 *
 * authToken String 
 * contentType String 
 * listIDs String 
 * returns GetContactMergeList
 **/
exports.contactMergeListsByListIDsGet = function(authToken,contentType,listIDs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 2,
    "Data" : [ {
      "ID" : "15201061",
      "Name" : "List 1"
    }, {
      "ID" : "15192333",
      "Name" : "List 2"
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
 * Move Bulk Contacts
 * Move Bulk Contacts   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         TargetListIDsrequiredstringTarget List ID   ContactIDsrequiredstringContact IDs            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
 *
 * body MoveBulkContactsrequest 
 * authToken String 
 * contentType String 
 * listID String 
 * returns MoveBulkContacts
 **/
exports.contactMoveContactsByListIDPost = function(body,authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Move Contacts
 * Move Contacts   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list   {{TargetListIDs}}requiredstringID of the target list where the contact is to be moved   {{ContactIDs}}requiredstringID of the Contact            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * targetListID String 
 * contactIDs String 
 * returns MoveContacts
 **/
exports.contactMoveContactsContactIDsByListIDAndTargetListIDPost = function(authToken,contentType,listID,targetListID,contactIDs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Move Contacts to Do Not Contact (i.e Master Unsubscribe list)
 * Move Contacts to Do Not Contact (i.e Master Unsubscribe list)   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list   {{ContactIDs}}requiredstringID of the Contact            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * contactID String 
 * returns MoveContactsToDoNotContact(i.eMasterUnsubscribeList)
 **/
exports.contactMoveToDNCByListIDAndContactIDDelete = function(authToken,contentType,listID,contactID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Resend Email
 * Resend Email   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list            Post Parameters            KeyRequiredTypeDescription         {{ContactID}}requiredstringIDs of the contact            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns ResendEmail
 **/
exports.contactResendEmailsByListIDPost = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Restore Trash List
 * Restore Trash List   URL Parameters            KeyRequiredTypeDescription         {{ListIDs}}requiredstringIDs of the lists            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * listIDs String 
 * returns RestoreTrashList
 **/
exports.contactRestoreTrashListByListIDsPatch = function(authToken,contentType,listIDs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Error" : "null",
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
 * Share Lists with SubAccounts
 * Share Lists with SubAccounts   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list   {{ClientIDs}}requiredstringClient ID of the sub-accounts with whom to share            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * clientIDs String 
 * returns ShareListsWithSubaccounts
 **/
exports.contactShareListsByListIDAndClientIDsPost = function(authToken,contentType,listID,clientIDs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Split contacts into new list
 * Split contacts into new list   URL Parameters            KeyRequiredTypeDescription         {{ListIDs}}requiredstringIDs of the lists            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         NewListrequiredstringNew list name   LimitrequiredstringLimit            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   ExtrastringNew Contact ID   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns SplitContactsIntoNewList
 **/
exports.contactSplitIntoListNewListByListIDPost = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Error" : [ ],
    "Extra" : "15268963",
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
 * Delete Trash List
 * Delete Trash List   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error Code      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns DeleteTrashList
 **/
exports.contactTrashByListIDDelete = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Get TrashCount
 * Get a list of contacts      Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   CountintTotal count      
 *
 * authToken String 
 * contentType String 
 * returns GetTrashcount
 **/
exports.contactTrashCountGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 29,
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
 * Get UniqueCount
 * Get UniqueCount      Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   CountintTotal count      
 *
 * authToken String 
 * contentType String 
 * returns GetUniquecount
 **/
exports.contactUniqueCountGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 84256,
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
 * Get Webhooks
 * Get a list of webhooks in the specified list   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   CountintTotal Count   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactWebhooksRecord\">WebhooksRecord</a>Array of Data      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns GetWebhooks
 **/
exports.contactWebhooksByListIDGet = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 0,
    "Data" : [ ],
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
 * Delete ABSplit Campaign
 * Delete ABSplit Campaign      URL parameters            KeyRequiredTypeDescription         IDoptionalstringID of the email            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Array of errors      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns DeleteAbsplitCampaign
 **/
exports.emailsABSplitByIDDelete = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Delete the email
 * Delete the email   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringIDs of the email            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Error      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns DeleteTheEmail
 **/
exports.emailsByIDDelete = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Copy an existing email
 * Copy an existing email   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringID of the email            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         NamerequiredstringName of the new email            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Errors   Data<a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a>EMail Data      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns CopyAnExistingEmail
 **/
exports.emailsByIDPost = function(authToken,contentType,iD) {
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
 * Add Email to Community
 * Get a list of contacts   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringID of the email            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         CommunityrequiredstringCommunity   CategoryIDrequiredstringCategory ID   TagsrequiredstringTags            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   CountintTotal number      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns AddEmailToCommunity
 **/
exports.emailsCommunityByIDPatch = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 0,
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
 * GET Community Email By ID
 * Get a list of contacts   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringID of the Email            Response body parameters            KeyTypeDescription         IDstringID   CommunityNamestringCommunity Name   TagNamestringTag Name   CategoryNamestringCategory Name   CategoryIDstringCategory ID      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetCommunityEmailById
 **/
exports.emailsCommunityGetEmailByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "CategoryID" : "",
    "CategoryName" : "",
    "CommunityName" : "Sep 30 2016 Email 1",
    "ID" : "",
    "IsCommunity" : "0",
    "TagName" : ""
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
 * Get a list of emails
 * Get a list of emails      Query String parameters            KeyRequiredTypeDescription         PageNumberoptionalintPage number   PageSizeoptionalintNumber of records to show per page   OrderByoptionalintField to order by, <code>email</code>, <code>date</code>, <code>count</code>, <code>schedule</code>   SortOrderoptionalintSort Order, <code>asc</code> or <code>desc</code>   FilteroptionalstringFilter value   FilterTypeoptionalstringFilter Type   StatusoptionalstringStatus   ExcludeEmailIDoptionalstringExclude Email ID            Response body parameters            KeyTypeDescription         CountintTotal number   Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#EmailListData\">EmailListData</a>EMail History      
 *
 * authToken String 
 * contentType String 
 * returns GetAListOfEmails(with'excludeemailid'Parameter)
 **/
exports.emailsGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 335,
    "Data" : [ {
      "ContactLists" : [ ],
      "CreatedDate" : "Feb 14, 2018",
      "EmailType" : "DD",
      "FromEmail" : "",
      "FromName" : "Mohit (Cybermax Solutions)",
      "ID" : "12963629",
      "IsRSS" : "0",
      "IsRSSActive" : "",
      "ModifiedDate" : "Mar 01, 2018",
      "Name" : "Text Test Email Copy",
      "RSSSchedule" : "",
      "RSSURL" : "",
      "ReplyEmail" : "",
      "ReviewReason" : "",
      "ScheduleDate" : "",
      "Status" : "-1",
      "StatusText" : "Incomplete",
      "Subject" : "Text Test Email",
      "Version" : "400",
      "Zone" : "IST"
    }, {
      "ContactLists" : [ ],
      "CreatedDate" : "Feb 28, 2018",
      "EmailType" : "DD",
      "FromEmail" : "",
      "FromName" : "Mohit (Cybermax Solutions)",
      "ID" : "13020674",
      "IsRSS" : "0",
      "IsRSSActive" : "",
      "ModifiedDate" : "Feb 28, 2018",
      "Name" : "Chinese UTM Links Email",
      "RSSSchedule" : "",
      "RSSURL" : "",
      "ReplyEmail" : "",
      "ReviewReason" : "",
      "ScheduleDate" : "",
      "Status" : "-1",
      "StatusText" : "Incomplete",
      "Subject" : "Chinese UTM Links Email",
      "Version" : "400",
      "Zone" : "IST"
    }, {
      "ContactLists" : [ ],
      "CreatedDate" : "Feb 28, 2018",
      "EmailType" : "DD",
      "FromEmail" : "",
      "FromName" : "Mohit (Cybermax Solutions)",
      "ID" : "13020657",
      "IsRSS" : "0",
      "IsRSSActive" : "",
      "ModifiedDate" : "Feb 28, 2018",
      "Name" : "Chinese UTM Email",
      "RSSSchedule" : "",
      "RSSURL" : "",
      "ReplyEmail" : "",
      "ReviewReason" : "",
      "ScheduleDate" : "Feb 28 2018, 10:15 AM",
      "Status" : "4",
      "StatusText" : "Sending",
      "Subject" : "Chinese UTM Email",
      "Version" : "400",
      "Zone" : "IST"
    }, {
      "ContactLists" : [ ],
      "CreatedDate" : "Feb 27, 2018",
      "EmailType" : "DD",
      "FromEmail" : "",
      "FromName" : "Mohit (Cybermax Solutions)",
      "ID" : "13016850",
      "IsRSS" : "0",
      "IsRSSActive" : "",
      "ModifiedDate" : "Feb 27, 2018",
      "Name" : "UTM Special Email",
      "RSSSchedule" : "",
      "RSSURL" : "",
      "ReplyEmail" : "",
      "ReviewReason" : "",
      "ScheduleDate" : "Feb 27 2018, 06:15 PM",
      "Status" : "4",
      "StatusText" : "Sending",
      "Subject" : "UTM Special Email",
      "Version" : "400",
      "Zone" : "IST"
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
 * Get the Preview for the email
 * Get a list of contacts      Query String parameters            KeyRequiredTypeDescription         EmailAddressoptionalstringEmail Address   HTMLContentoptionalstringHTML Content   TextContentoptionalstringText Content            Response body parameters            KeyTypeDescription         EmailData<a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a>Details with email content for preview      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetThePreviewForTheEmail
 **/
exports.emailsPreviewByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "AddressCity" : "",
    "AddressLine" : "",
    "AddressState" : "",
    "AddressZip" : "",
    "Badge" : "null",
    "CSSCode" : "null",
    "CampaignID" : "null",
    "CanResend" : "null",
    "CommunityCategoryID" : "null",
    "CommunityTags" : "null",
    "ContactLists" : "null",
    "CreatedDate" : "Oct 25, 2017",
    "EmailType" : "",
    "ExcludeContactLists" : "null",
    "FooterFlags" : "null",
    "FooterLink" : "null",
    "FooterSent" : "null",
    "FromEmail" : "mohit@cybermaxsolutions.com",
    "FromName" : "Test",
    "GoogleAnalyticsCampaign" : "",
    "HasArchive" : "null",
    "HasCommunity" : "null",
    "HasPermissionReminderMessage" : "null",
    "HasShareURL" : "null",
    "HasWebpageVersion" : "0",
    "HeaderMessage" : "null",
    "ID" : "12496260",
    "InboxPreviewText" : "null",
    "InternationalAddress" : "Kailash Cmplx, Mumbai, Maharashtra  400079, India",
    "IsABSplit" : "null",
    "IsAutoresponder" : "0",
    "IsEmailLayout" : "null",
    "IsHVSClient" : "null",
    "IsInternationalAddress" : "null",
    "IsManualText" : "null",
    "IsRSS" : "null",
    "IsRSSActive" : "null",
    "IsResend" : "null",
    "Language" : "null",
    "LayoutID" : "null",
    "ModifiedDate" : "Oct 25, 2017",
    "Name" : "Postman Test EMail Campaign Modified",
    "Offset" : "null",
    "OriginalVersion" : "null",
    "PermissionPosition" : "null",
    "PermissionReminderMessage" : "",
    "PreDMARCFromEmail" : "null",
    "RSSInterval" : "null",
    "RSSSchedule" : "null",
    "RSSURL" : "null",
    "ReSendType" : "null",
    "ReplyEmail" : "mohit@cybermaxsolutions.com",
    "RescheduleDate" : "null",
    "RescheduleListID" : "null",
    "ScheduleDate" : "null",
    "SchemeID" : "null",
    "ShareURL" : "null",
    "SocialFacebook" : "null",
    "SocialFacebookID" : "null",
    "SocialTweet" : "null",
    "Status" : "-1",
    "StatusText" : "Incomplete",
    "Subject" : "Postman Test EMail Campaign",
    "TemplateCode" : "null",
    "TemplateContent" : "<!DOCTYPE html>    \r  <html>    \r  <head>    \r  <meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\">    \r  <style type=\"text/css\">    \r  /*** BMEMBF Start ***/    \r  [name=bmeMainBody]{min-height:1000px;}    \r  @media only screen and (max-width: 480px){table.blk, table.tblText, .bmeHolder, .bmeHolder1, table.bmeMainColumn{width:100% !important;} }        \r  @media only screen and (max-width: 480px){.bmeImageCard table.bmeCaptionTable td.tblCell{padding:0px 20px 20px 20px !important;} }        \r  @media only screen and (max-width: 480px){.bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td.tblCell{padding:20px 20px 0 20px !important;} }        \r  @media only screen and (max-width: 480px){table.bmeCaptionTable td.tblCell{padding:10px !important;} }        \r  @media only screen and (max-width: 480px){table.tblGtr{ padding-bottom:20px !important;} }        \r  @media only screen and (max-width: 480px){td.blk_container, .blk_parent, .bmeLeftColumn, .bmeRightColumn, .bmeColumn1, .bmeColumn2, .bmeColumn3, .bmeBody{display:table !important;max-width:600px !important;width:100% !important;} }        \r  @media only screen and (max-width: 480px){table.container-table, .bmeheadertext, .container-table { width: 95% !important; } }        \r  @media only screen and (max-width: 480px){.mobile-footer, .mobile-footer a{ font-size: 13px !important; line-height: 18px !important; } .mobile-footer{ text-align: center !important; } table.share-tbl { padding-bottom: 15px; width: 100% !important; } table.share-tbl td { display: block !important; text-align: center !important; width: 100% !important; } }        \r  @media only screen and (max-width: 480px){td.bmeShareTD, td.bmeSocialTD{width: 100% !important; } }        \r  @media only screen and (max-width: 480px){td.tdBoxedTextBorder{width: auto !important;}}    \r  @media only screen and (max-width: 480px){table.blk, table[name=tblText], .bmeHolder, .bmeHolder1, table[name=bmeMainColumn]{width:100% !important;} }    \r  @media only screen and (max-width: 480px){.bmeImageCard table.bmeCaptionTable td[name=tblCell]{padding:0px 20px 20px 20px !important;} }    \r  @media only screen and (max-width: 480px){.bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td[name=tblCell]{padding:20px 20px 0 20px !important;} }    \r  @media only screen and (max-width: 480px){table.bmeCaptionTable td[name=tblCell]{padding:10px !important;} }    \r  @media only screen and (max-width: 480px){table[name=tblGtr]{ padding-bottom:20px !important;} }    \r  @media only screen and (max-width: 480px){td.blk_container, .blk_parent, [name=bmeLeftColumn], [name=bmeRightColumn], [name=bmeColumn1], [name=bmeColumn2], [name=bmeColumn3], [name=bmeBody]{display:table !important;max-width:600px !important;width:100% !important;} }    \r  @media only screen and (max-width: 480px){table[class=container-table], .bmeheadertext, .container-table { width: 95% !important; } }    \r  @media only screen and (max-width: 480px){.mobile-footer, .mobile-footer a{ font-size: 13px !important; line-height: 18px !important; } .mobile-footer{ text-align: center !important; } table[class=\"share-tbl\"] { padding-bottom: 15px; width: 100% !important; } table[class=\"share-tbl\"] td { display: block !important; text-align: center !important; width: 100% !important; } }    \r  @media only screen and (max-width: 480px){td[name=bmeShareTD], td[name=bmeSocialTD]{width: 100% !important; } }    \r  @media only screen and (max-width: 480px){td[name=tdBoxedTextBorder]{width: auto !important;}}    \r  @media only screen and (max-width: 480px){.bmeImageCard table.bmeImageTable{height: auto !important; width:100% !important; padding:20px !important;clear:both; float:left !important; border-collapse: separate;} }    \r  @media only screen and (max-width: 480px){.bmeMblInline table.bmeImageTable{height: auto !important; width:100% !important; padding:10px !important;clear:both;} }    \r  @media only screen and (max-width: 480px){.bmeMblInline table.bmeCaptionTable{width:100% !important; clear:both;} }    \r  @media only screen and (max-width: 480px){table.bmeImageTable{height: auto !important; width:100% !important; padding:10px !important;clear:both; } }    \r  @media only screen and (max-width: 480px){table.bmeCaptionTable{width:100% !important;  clear:both;} }    \r  @media only screen and (max-width: 480px){table.bmeImageContainer{width:100% !important; clear:both; float:left !important;} }    \r  @media only screen and (max-width: 480px){table.bmeImageTable td{padding:0px !important; height: auto; } }    \r  @media only screen and (max-width: 480px){td.bmeImageContainerRow{padding:0px !important;}}    \r  @media only screen and (max-width: 480px){img.mobile-img-large{width:100% !important; height:auto !important;} }    \r  @media only screen and (max-width: 480px){img.bmeRSSImage{max-width:320px; height:auto !important;}}    \r  @media only screen and (min-width: 640px){img.bmeRSSImage{max-width:600px !important; height:auto !important;} }    \r  @media only screen and (max-width: 480px){.trMargin img{height:10px;} }    \r  @media only screen and (max-width: 480px){div.bmefooter, div.bmeheader{ display:block !important;} }    \r  @media only screen and (max-width: 480px){.tdPart{ width:100% !important; clear:both; float:left !important; } }    \r  @media only screen and (max-width: 480px){table.blk_parent1, table.tblPart {width: 100% !important; } }    \r  @media only screen and (max-width: 480px){.tblLine{min-width: 100% !important;}}     \r  @media only screen and (max-width: 480px){.bmeMblCenter img { margin: 0 auto; } }       \r  @media only screen and (max-width: 480px){.bmeMblCenter, .bmeMblCenter div, .bmeMblCenter span  { text-align: center !important; text-align: -webkit-center !important; } }    \r  @media only screen and (max-width: 480px){.bmeNoBr br, .bmeImageGutterRow, .bmeMblStackCenter .bmeShareItem .tdMblHide { display: none !important; } }    \r  @media only screen and (max-width: 480px){.bmeMblInline table.bmeImageTable, .bmeMblInline table.bmeCaptionTable, td.bmeMblInline { clear: none !important; width:50% !important; } }    \r  @media only screen and (max-width: 480px){.bmeMblInlineHide, .bmeShareItem .trMargin { display: none !important; } }    \r  @media only screen and (max-width: 480px){.bmeMblInline table.bmeImageTable img, .bmeMblShareCenter.tblContainer.mblSocialContain, .bmeMblFollowCenter.tblContainer.mblSocialContain{width: 100% !important; } }    \r  @media only screen and (max-width: 480px){.bmeMblStack> .bmeShareItem{width: 100% !important; clear: both !important;} }    \r  @media only screen and (max-width: 480px){.bmeShareItem{padding-top: 10px !important;} }    \r  @media only screen and (max-width: 480px){.tdPart.bmeMblStackCenter, .bmeMblStackCenter .bmeFollowItemIcon {padding:0px !important; text-align: center !important;} }    \r  @media only screen and (max-width: 480px){.bmeMblStackCenter> .bmeShareItem{width: 100% !important;} }    \r  @media only screen and (max-width: 480px){ td.bmeMblCenter {border: 0 none transparent !important;}}    \r  @media only screen and (max-width: 480px){.bmeLinkTable.tdPart td{padding-left:0px !important; padding-right:0px !important; border:0px none transparent !important;padding-bottom:15px !important;height: auto !important;}}    \r  @media only screen and (max-width: 480px){.tdMblHide{width:10px !important;} }    \r  @media only screen and (max-width: 480px){.bmeShareItemBtn{display:table !important;}}    \r  @media only screen and (max-width: 480px){.bmeMblStack td {text-align: left !important;}}    \r  @media only screen and (max-width: 480px){.bmeMblStack .bmeFollowItem{clear:both !important; padding-top: 10px !important;}}    \r  @media only screen and (max-width: 480px){.bmeMblStackCenter .bmeFollowItemText{padding-left: 5px !important;}}    \r  @media only screen and (max-width: 480px){.bmeMblStackCenter .bmeFollowItem{clear:both !important;align-self:center; float:none !important; padding-top:10px;margin: 0 auto;}}    \r  @media only screen and (max-width: 480px){    \r  .tdPart> table{width:100% !important;}    \r  }    \r  @media only screen and (max-width: 480px){.tdPart>table.bmeLinkContainer{ width:auto !important; }}    \r  @media only screen and (max-width: 480px){.tdPart.mblStackCenter>table.bmeLinkContainer{ width:100% !important;}}     \r  .blk_parent:first-child, .blk_parent{float:left;}    \r  .blk_parent:last-child{float:right;}    \r  /*** BMEMBF END ***/    \r      \r  /* Background color settings=====================================*/    \r  \ttable[name=\"bmeMainBody\"], body{   \t\tbackground-color: #e6e6e8;   \t}    \r                  /* Preheader settings=====================================*/    \r  \t/* Preheader background color */    \r       \ttd[name=\"bmePreHeader\"]{         \t\tbackground-color:#e6e6e8; \t}    \r              /* Header settings=====================================*/    \r  \t/* Header background color */    \r       \ttd[name=\"bmeHeader\"]{   \t\tbackground: #ffffff;  \t}    \r    /* Content/Body settings=====================================*/    \r  \t/* Content background color */    \r        \ttd[name=\"bmeBody\"], table[name=\"bmeBody\"]{      \t\tbackground-color:#ffffff;  \t}    \r                    /* Body 2 settings - COPY SETTINGS FROM CONTENT/BODY=====================================*/    \r  \t/* Body 2 background color */    \r  \ttd[name=\"bmePreFooter\"]{      \t\tbackground-color:#ffffff;  \t}    \r              /* Footer settings=====================================*/    \r  \t/* Footer background color */    \r       \ttd[name=\"bmeFooter\"]{      \t\tbackground-color:#e6e6e8;  \t}    \r            /* Default Settings for fonts for blocks=====================================*/    \r  \ttd[name=\"tblCell\"], .blk{      \t\tfont-family: initial;       \t\tfont-weight: normal;       \t\tfont-size: initial;  \t}    \r   table[name=\"blk_blank\"] td[name=\"tblCell\"]{font-family: Arial, Helvetica, sans-serif;font-size: 14px;}    \r      \r  </style>    \r  </head>    \r  <body marginheight=0 marginwidth=0 topmargin=0 leftmargin=0 style=\"height: 100% !important; margin: 0; padding: 0; width: 100% !important;min-width: 100%;\">    \r      \r  <table name=\"bmeMainBody\" style=\"background-color: rgb(230, 230, 232);\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" bgcolor=\"#e6e6e8\"><td width=\"100%\" valign=\"top\" align=\"center\">    \r  <table name=\"bmeMainColumnParentTable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td name=\"bmeMainColumnParent\">     \r  <table name=\"bmeMainColumn\" class=\"bmeHolder bmeMainColumn\" style=\"max-width: 600px; overflow: visible;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\">    <td class=\"blk_container bmeHolder\" name=\"bmePreHeader\" style=\"background-color: rgb(230, 230, 232); color: rgb(102, 102, 102);   \" width=\"100%\" valign=\"top\" bgcolor=\"#e6e6e8\" align=\"center\"> <td class=\"bmeHolder\" name=\"bmeMainContentParent\" style=\"border-color: rgb(102, 102, 102); border-radius: 5px; border-collapse: separate; border-spacing: 0px;\" width=\"100%\" valign=\"top\" align=\"center\">     \r  <table name=\"bmeMainContent\" style=\"border-radius: 5px; border-collapse: separate;border-spacing: 0px; overflow: hidden;\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\"> <td class=\"blk_container bmeHolder\" name=\"bmeHeader\" style=\"background-color: rgb(255, 255, 255);   \" width=\"100%\" valign=\"top\" bgcolor=\"#ffffff\" align=\"center\"><div id=\"dv_2\" class=\"blk_wrapper\" style=\"\">    \r  <table class=\"blk\" name=\"blk_image\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">    \r  <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td class=\"bmeImage\" style=\"padding: 20px; border-collapse: collapse;\" align=\"center\">    \r      \r  </div>   <td class=\"blk_container bmeHolder bmeBody\" name=\"bmeBody\" style=\"background-color: rgb(255, 255, 255); color: rgb(56, 56, 56);   \" width=\"100%\" valign=\"top\" bgcolor=\"#ffffff\" align=\"center\"><div id=\"dv_3\" class=\"blk_wrapper\" style=\"\">    \r  <table class=\"blk\" name=\"blk_text\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">    \r  <table class=\"bmeContainerRow\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td class=\"tdPart\" valign=\"top\" align=\"center\">    \r  <table name=\"tblText\" style=\"float:left;\" class=\"tblText\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td name=\"tblCell\" style=\"padding: 20px; font-size: 30px; font-weight: 400; font-family: Arial,Helvetica,sans-serif; color: rgb(56, 56, 56); text-align: left;\" class=\"tblCell\" valign=\"top\" align=\"left\"><div style=\"line-height: 150%;\"><strong>Heading 1</strong></div>    \r      \r      \r  </div>  <div id=\"dv_4\" class=\"blk_wrapper\" style=\"\">    \r  <table class=\"blk\" name=\"blk_text\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">    \r  <table class=\"bmeContainerRow\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td class=\"tdPart\" valign=\"top\" align=\"center\">    \r  <table name=\"tblText\" style=\"float:left;\" class=\"tblText\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td name=\"tblCell\" style=\"padding: 10px 20px; font-size: 14px; font-weight: 400; font-family: Arial,Helvetica,sans-serif; color: rgb(56, 56, 56); text-align: left;\" class=\"tblCell\" valign=\"top\" align=\"left\"><div style=\"line-height: 150%;\">This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.</div>    \r      \r      \r  </div>  <div id=\"dv_5\" class=\"blk_wrapper\" style=\"\">    \r  <table class=\"blk\" name=\"blk_button\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td width=\"20\"><td align=\"center\">    \r  <table class=\"tblContainer\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td height=\"10\"><td align=\"left\">    \r  <table class=\"bmeButton\" style=\"border-collapse: separate;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td class=\"bmeButtonText\" style=\"border-collapse:seperate;border-radius:5px; border-width:0; border-style:none; border-color:transparent;background-color:#72C2A1; text-align: center;padding-top:20px;padding-bottom:20px; padding-left:40px; padding-right:40px;font-weight:bold;\"><span style=\"font-family:Arial, Verdana; font-size:14px;color:#FFFFFF;\">    \r  <a target=\"_blank\" style=\"color:#FFFFFF;text-decoration:none;\">Button</a></span>    \r  <td height=\"10\">    \r  <td width=\"20\">    \r  </div>   <td class=\"blk_container bmeHolder\" name=\"bmePreFooter\" style=\"background-color: rgb(255, 255, 255);   \" width=\"100%\" valign=\"top\" bgcolor=\"#ffffff\" align=\"center\"><div id=\"dv_6\" class=\"blk_wrapper\" style=\"\">    \r  <table name=\"blk_divider\" class=\"blk\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td style=\"padding-top:10px; padding-bottom:10px;padding-left:20px;padding-right:20px;\" class=\"tblCellMain\">    \r  <table style=\"border-top: 1px solid rgb(225, 225, 225); min-width: 1px;\" class=\"tblLine\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><span></span>    \r      \r  </div>  <div id=\"dv_7\" class=\"blk_wrapper\" style=\"\">    \r  <table style=\"\" name=\"blk_social_follow\" class=\"blk\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td style=\"padding:0px 0px 10px 0px;\" class=\"tblCellMain\">    \r  <table style=\"float:left;\" class=\"tblContainer\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td class=\"tdItemContainer\" style=\"padding: 0px 20px;\">    \r  <table style=\"table-layout: auto;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td valign=\"top\"><!--[if gte mso 6]><td align=\"left\" valign=\"top\"><![endif]-->    \r  <table style=\"float: left; display: block;\" type=\"facebook\" class=\"bmeFollowItem\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td style=\"padding-right:5px;padding-top:5px;height:30px;\" class=\"bmeFollowItemIcon\" width=\"24\" align=\"left\">    \r  <a target=\"_blank\" style=\"display: inline-block;background-color: rgb(53, 91, 161);border-radius: 0px;border-style: none; border-width: 0px; border-color: transparent;\" href=\"http://bmetrack.bmetrack.com/c/l?u=757A31F&e=BEAD84&c=7F681&t=1&l=79F540DE&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&seq=1\" target=_blank><img alt=\"Facebook\"    \r   src=\"https://ui.benchmarkemail.com/images/editor/socialicons/fb_btn.png\" style=\"max-width: 57px; display:block;\" height=\"24\" width=\"24\" border=\"0\"></a>    \r  <!--[if gte mso 6]><td align=\"left\" valign=\"top\"><![endif]-->    \r  <table style=\"float: left; display: block;\" type=\"googleplus\" class=\"bmeFollowItem\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td style=\"padding-right:5px;padding-top:5px;height:30px;\" class=\"bmeFollowItemIcon\" width=\"24\" align=\"left\">    \r  <a target=\"_blank\" style=\"display: inline-block;background-color: rgb(214, 73, 46);border-radius: 0px;border-style: none; border-width: 0px; border-color: transparent;\" href=\"http://bmetrack.bmetrack.com/c/l?u=757A320&e=BEAD84&c=7F681&t=1&l=79F540DE&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&seq=1\" target=_blank><img alt=\"Google Plus\"    \r   src=\"https://ui.benchmarkemail.com/images/editor/socialicons/gp_btn.png\" style=\"max-width: 57px; display:block;\" height=\"24\" width=\"24\" border=\"0\"></a>    \r  <!--[if gte mso 6]><td align=\"left\" valign=\"top\"><![endif]-->    \r  <table style=\"float: left; display: block;\" type=\"twitter\" class=\"bmeFollowItem\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td style=\"padding-right:5px;padding-top:5px;height:30px;\" class=\"bmeFollowItemIcon\" width=\"24\" align=\"left\">    \r  <a target=\"_blank\" style=\"display: inline-block;background-color: rgb(50, 203, 255);border-radius: 0px;border-style: none; border-width: 0px; border-color: transparent;\" href=\"http://bmetrack.bmetrack.com/c/l?u=757A321&e=BEAD84&c=7F681&t=1&l=79F540DE&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&seq=1\" target=_blank><img alt=\"Twitter\"    \r   src=\"https://ui.benchmarkemail.com/images/editor/socialicons/tw_btn.png\" style=\"max-width: 57px; display:block;\" height=\"24\" width=\"24\" border=\"0\"></a>    \r      \r      \r      \r  </div>       \r     <td class=\"blk_container bmeHolder\" name=\"bmeFooter\" style=\"background-color: rgb(230, 230, 232); color: rgb(102, 102, 102);   \" width=\"100%\" valign=\"top\" bgcolor=\"#e6e6e8\" align=\"center\"><div id=\"dv_9\" class=\"blk_wrapper\" style=\"\">    \r  <table class=\"blk\" name=\"blk_footer\" style=\"\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td name=\"tblCell\" class=\"tblCell\" style=\"padding:20px;\" valign=\"top\" align=\"left\">    \r  <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td name=\"bmeBadgeText\" style=\"text-align:left; word-break: break-all;\" align=\"left\"><span id=\"spnFooterText\" style=\"font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px; line-height: 140%;\">This message was sent to mohit@cybermaxsolutions.com by mohit@cybermaxsolutions.com    \r   Kailash Cmplx, Mumbai, Maharashtra  400079, India</span>    \r       \r   <span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px; line-height: 140%;\"><span href=http://bmetrack.bmetrack.com/c/su?e=BEAD84&c=7F681&t=1&l=79F540DE&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=><img    \r   src=\"https://www.benchmarkemail.com/images/verified.png\" alt=\"Unsubscribe from all mailings\" title=\"Unsubscribe from all mailings\" border=\"0\"></span>     \r  <a class=bmefootertext  target=_new  href=\"http://bmetrack.bmetrack.com/c/su?e=BEAD84&c=7F681&t=1&l=79F540DE&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=\"  style=\"color:inherit;text-decoration:underline;\">Unsubscribe</a>   |     \r  <a class=bmefootertext  target=_new  href=\"http://bmetrack.bmetrack.com/c/s?e=BEAD84&c=7F681&t=1&l=79F540DE&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=\"  style=\"color:inherit;text-decoration:underline;\">Manage Subscription</a>   |      \r  <a class=bmefootertext  target=_new  href=\"http://bmetrack.bmetrack.com/c/f?e=BEAD84&c=7F681&t=1&l=79F540DE&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=\"  style=\"color:inherit;text-decoration:underline;\">Forward Email</a>  |      \r  <a class=bmefootertext  target=_new  href=\"http://bmetrack.bmetrack.com/Abuse?e=BEAD84&c=7F681&t=1&l=79F540DE&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=\"  style=\"color:inherit;text-decoration:underline;\">Report Abuse</a>    \r   </span><td name=\"bmeBadgeImage\" style=\"text-align: left; padding-top: 20px; word-break: break-all;\" align=\"left\">    \r  <a href=\"http://www.benchmarkemail.com/es?p=500289\" target=\"_new\"><img    \r   src=\"https://www.benchmarkemail.com/images/web4/misc/emailfooter/opt9.png\"  border=0 /></a>    \r      \r  </div>     \r      \r      \r      \r  <!-- /Test Path -->    \r  </body>    \r  </html><img    \r   src='http://bmetrack.bmetrack.com/c/o?e=BEAD84&c=7F681&t=1&l=79F540DE&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=' alt='' border=0 style=\"display:none;\" height=1 width=1>",
    "TemplateID" : "null",
    "TemplateSaved" : "",
    "TemplateText" : "    Heading 1    This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.    This message was sent to test@benchmarkemail.com by mohit@cybermaxsolutions.com  Kailash Cmplx, Mumbai, Maharashtra  400079, India    Unsubscribe| Manage Subscription| Forward Email| Report Abuse            \r      \r  This message was sent to mohit@cybermaxsolutions.com by mohit@cybermaxsolutions.com    \r      \r  You can modify/update your subscription via the link below.    \r      \r  Unsubscribe from all mailings    \r  http://bmetrack.bmetrack.com/c/su?e=BEAD84&c=7F681&t=1&l=79F540DE&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=    \r      \r  Manage Subscription    \r  http://bmetrack.bmetrack.com/c/s?e=BEAD84&c=7F681&t=1&l=79F540DE&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=    \r      \r  Forward Email    \r  http://bmetrack.bmetrack.com/c/f?e=BEAD84&c=7F681&t=1&l=79F540DE&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=    \r      \r  Report Abuse    \r  http://bmetrack.bmetrack.com/Abuse?e=BEAD84&c=7F681&t=1&l=79F540DE&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=    \r      \r  Kailash Cmplx, Mumbai, Maharashtra  400079, India    \r      \r  Email Marketing    \r  benchmarkemail.com    \r   [http://bmetrack.bmetrack.com]    \r      \r      \r  This is a Test Email only.    \r  ",
    "TemplateUsedName" : "null",
    "TimeStamp" : "null",
    "TimeZone" : "null",
    "ToEmail" : "mohit@cybermaxsolutions.com",
    "Version" : "null",
    "WebpageVersion" : "null",
    "Zone" : "null"
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
 * Share Template to sub accounts
 * Share Template to sub accounts   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringID of the Email            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         SubAccountrequiredstringComma separated list of client IDs of sub-accounts            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns ShareTemplateToSubAccounts
 **/
exports.emailsShareTemplateByIDPost = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Permenantly delete an email from Trash
 * Permenantly delete an email from Trash   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringIDs of the email            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Error      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns PermenantlyDeleteAnEmailFromTrash
 **/
exports.emailsTrashByIDDelete = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Restore an email from Trash
 * Get a list of contacts   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringIDs of the email            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a>EMail Data   Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Error      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns RestoreAnEmailFromTrash
 **/
exports.emailsTrashByIDPost = function(authToken,contentType,iD) {
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
 * Delete a poll
 * Delete a poll  Query string parameters :  None    Request Body Parameters :             Parameter      Required      Type      Description              PollID      Required      string      Poll ID        Response Body Parameters :             Parameter      Type      Description              Response      int      ID of a deleted poll      
 *
 * authToken String 
 * contentType String 
 * pollID String 
 * returns DeleteAPoll
 **/
exports.pollByPollIDDelete = function(authToken,contentType,pollID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "6920"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Copy a poll
 * Copy a poll  Query string parameters :             Parameter      Required      Type      Description              PollID      Required      string      Poll ID        Request Body Parameters :             Parameter      Required      Type      Description              Name      Required      string      Name of a poll to be created        Response Body Parameters :             Parameter      Type      Description              Response      int      New poll ID      
 *
 * body CopyAPollrequest 
 * authToken String 
 * contentType String 
 * pollID String 
 * returns CopyAPoll
 **/
exports.pollCopyByPollIDPost = function(body,authToken,contentType,pollID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "6920"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get list of Polls.
 * Get list of Polls.  Query string parameters :                   Parameter        Required        Type        Description                    Filter        Optional        int        Filterr                    PageNumber        Required        int        Page Number                    PageSize        Required        int        Number of rows on the page                    OrderBy        Required        string        Order By Column                    SortOrder        Optional        string        ASC or DESC                    Status        Optional        string        Status              Response body parameters :                   Parameter        Type        Description                    Count        int        Total number of polls                    Status        string        1 if successful, -1 if error                    Data        Array        Array of Polls returned.          
 *
 * filter String 
 * pageNumber String 
 * pageSize String 
 * orderBy String 
 * sortOrder String 
 * status String 
 * authToken String 
 * contentType String 
 * returns GetListOfPolls.
 **/
exports.pollGet = function(filter,pageNumber,pageSize,orderBy,sortOrder,status,authToken,contentType) {
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
 * Get preview of a poll
 * Get preview of a poll  Query string parameters : None    Request Body parameters:                    Parameter        Required        Type        Description                            PollID        Required        String        Poll ID                Response body parameters :                    Parameter        Type        Description                            retVal        string        Preview code            
 *
 * authToken String 
 * contentType String 
 * pollID String 
 * returns GetPreviewOfAPoll
 **/
exports.pollRenderByPollIDGet = function(authToken,contentType,pollID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "<table name=\"pollcontainer\" cellspacing=0 cellpadding=0 border=0 width=220  style=\"background-color:#fdf0bb;border: 1px solid #777777;\" ><td align=left><div style=\"border-bottom: 1px solid #B7B7B7; padding: 0.5em; color:#000000; font-family: Arial;font-size: 14px;\" name='pollqst'>Enter your poll question here - 减笔字</div><td align=left><div name=opt1 style=\"border-bottom: 1px solid #B7B7B7; padding: 0.5em;\"><input name=\"pollanswer\" type=radio value=1 id='ctrl1'  /><span><label  for='ctrl1' class='pollans' name='pollans1'>Yes 减笔字</label></span></div><td align=left><div name=opt2 style=\"border-bottom: 1px solid #B7B7B7; padding: 0.5em;\"><input name=\"pollanswer\" type=radio value=2 id='ctrl2'  /><span><label  for='ctrl2' class='pollans' name='pollans2'>No 减笔字</label></span></div><td align=left><div name=opt3 style=\"border-bottom: 1px solid #B7B7B7; padding: 0.5em;display:none;\"><input name=\"pollanswer\" type=radio value=3 id='ctrl3'  /><span><label for='ctrl3' class='pollans' name='pollans3'></label></span></div><div name=opt4 style=\"border-bottom: 1px solid #B7B7B7; padding: 0.5em;display:none;\"><input name=\"pollanswer\" type=radio value=4 id='ctrl4'  /><span><label  for='ctrl4' class='pollans' name='pollans4'></label></span></div><div name=opt5 style=\"border-bottom: 1px solid #B7B7B7; padding: 0.5em;display:none;\"><input name=\"pollanswer\" type=radio value=5 id='ctrl5'  /><span><label  for='ctrl5' class='pollans' name='pollans5'></label></span></div><td align=left height=35><div style=\"border-bottom: 0px solid #B7B7B7; padding: 0.5em;\"><span style=\"padding-top: 10px; padding-bottom: 5px;\"><input type=button name=SubmitPoll id=btnSubmit style=\"font-size: 12px; font-family: Arial; padding-left: 10px; padding-right: 10px; color: #000000;font-weight:bold;\" value=\"Vote 减笔字\" /></span></div><td align=left><div align=left style='border-top: 0px solid #FFFFFF; font-family: Arial; font-size: 10pt; color: #000000;'><table cellspacing=0 cellpadding=0 border=0 width=100% style='border: 0px solid #CCCCCC; background: #FFFFFF none repeat scroll 0% 0%;'><td height=30 bgcolor='#dedede' align='center' valign='middle' style=\"padding-top:5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#444444;\">Powered by <a href=\"http://www.benchmarkemail.com/email-marketing/online-surveys\" style=\"color:#444444;text-decoration:none;\" target=_blank>Benchmark</a></div>"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Survey
 * Delete a Survey  Query string Parameters :  None    Request Body Parameters :                     Parameter        Required        Type        Description                            ID        Required        string        Survey ID                Response Body Parameters :                     Parameter        Type        Description                            Response        string        Deleted Survey ID if successful else error            
 *
 * body DeleteASurveyrequest 
 * authToken String 
 * contentType String 
 * iD String 
 * returns DeleteASurvey
 **/
exports.surveyByIDDelete = function(body,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "894738"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Copy a Survey
 * Copy a Survey  Query String Parameters :  None    Request Body Parameters :                     Parameter        Required        Type        Description                            ID        Required        string        Survey ID                    Name        Required        string        Survey Name              Response Body Parameters:                    Parameter        Type        Description                            Response        string        New Survey ID if successful, else error            
 *
 * body CopyASurveyrequest 
 * authToken String 
 * contentType String 
 * iD String 
 * returns CopyASurvey
 **/
exports.surveyCopyByIDPost = function(body,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "894738"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of survey
 * Get a list of survey  Query string parameters:            Parameter      Required      Type      Description                      PageNumber        Optional        int        Page Number                    PageSize        Optional        int        Number of rows on the page                    OrderBy        Optional        string        Order By Column                    Filter        Optional        string        Filter by survey name                    SortOrder        Optional        string        ASC or DESC                Response Body Parameters:            Parameter      Type      Description                      Count        int        Total number                    Status        string        1 if successful, -1 if error                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#SurveyListData\" >SurveyListData</a>        Array of survey list returned.            
 *
 * pageNumber String 
 * pageSize String 
 * orderBy String 
 * filter String 
 * sortOrder String 
 * authToken String 
 * contentType String 
 * returns GetAListOfSurvey
 **/
exports.surveyGet = function(pageNumber,pageSize,orderBy,filter,sortOrder,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 39,
    "Data" : [ {
      "CreatedDate" : "Oct 16, 2017",
      "Description" : "",
      "ID" : "894150",
      "Intro" : "",
      "LiveDate" : "",
      "Logourl" : "",
      "ModifiedDate" : "Oct 16, 2017",
      "Name" : "Oct 16 2017 Survey",
      "QuestionCount" : 0,
      "Status" : "0",
      "Successurl" : "www.google.com",
      "Title" : "",
      "URL" : "http://surveys.benchmarkemail.com//Survey/Start?id=894150&s=553754"
    }, {
      "CreatedDate" : "Oct 14, 2017",
      "Description" : "",
      "ID" : "893726",
      "Intro" : "Please take our quick and easy survey.",
      "LiveDate" : "",
      "Logourl" : "",
      "ModifiedDate" : "Oct 16, 2017",
      "Name" : "Oct 16 2017 Survey9",
      "QuestionCount" : 2,
      "Status" : "0",
      "Successurl" : "www.google.com",
      "Title" : "Survey",
      "URL" : "http://surveys.benchmarkemail.com//Survey/Start?id=893726&s=553754"
    }, {
      "CreatedDate" : "Mar 07, 2017",
      "Description" : "",
      "ID" : "716624",
      "Intro" : "Please take our quick and easy survey.",
      "LiveDate" : "10/13/2017 10:08:54 AM",
      "Logourl" : "",
      "ModifiedDate" : "Oct 16, 2017",
      "Name" : "Oct 14 2017",
      "QuestionCount" : 7,
      "Status" : "1",
      "Successurl" : "www.google.com",
      "Title" : "Survey",
      "URL" : "http://surveys.benchmarkemail.com//Survey/Start?id=716624&s=553754"
    }, {
      "CreatedDate" : "Oct 14, 2017",
      "Description" : "",
      "ID" : "893724",
      "Intro" : "Please take our quick and easy survey.",
      "LiveDate" : "",
      "Logourl" : "",
      "ModifiedDate" : "Oct 14, 2017",
      "Name" : "Oct 14 2017 Survey8",
      "QuestionCount" : 0,
      "Status" : "0",
      "Successurl" : "www.google.com",
      "Title" : "Survey",
      "URL" : "http://surveys.benchmarkemail.com//Survey/Start?id=893724&s=553754"
    }, {
      "CreatedDate" : "Oct 14, 2017",
      "Description" : "",
      "ID" : "893723",
      "Intro" : "Please take our quick and easy survey.",
      "LiveDate" : "",
      "Logourl" : "",
      "ModifiedDate" : "Oct 14, 2017",
      "Name" : "Oct 14 2017 Survey7",
      "QuestionCount" : 0,
      "Status" : "0",
      "Successurl" : "www.google.com",
      "Title" : "Survey",
      "URL" : "http://surveys.benchmarkemail.com//Survey/Start?id=893723&s=553754"
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
 * Update status of the survey
 * Update status of the survey  Query string parameters :  None    Request Body Parameters:                    Parameter        Required        Type        Description                            ID        Required        string        Survey ID                    Status        Required        string        1 Active, 0 Inactive, 3 Reactivate              Response Body Parameters :                     Parameter        Type        Description                            Response        string        1 if successful, -2 if error            
 *
 * authToken String 
 * contentType String 
 * iD String 
 * status String 
 * returns UpdateStatusOfTheSurvey
 **/
exports.surveyStatusUpdateByIDAndStatusPatch = function(authToken,contentType,iD,status) {
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

