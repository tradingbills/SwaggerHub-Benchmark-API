'use strict';


/**
 * Delete a Inbox
 * Delete a Inbox    Request Body Parameters:                      Parameter         Required         Type         Description                       ID         Required         string         Inbox ID                 Response Body Parameters:                     Parameter         Type         Description                       Status         string         1 if successful, -1 if error                       Error         <a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>         Return error message            
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns DeleteAInbox
 **/
exports.inboxByIDDelete = function(authToken,contentType,iD) {
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
 * Get a Inbox Master Result
 * Get a Inbox Master Result   Request Body Parameters :                    Parameter         Required         Type         Description                       ID         Required         string         Inbox ID                 Response Body Parameters:                     Parameter         Type         Description                       Status         string         1 if successful, -1 if error                       Error         <a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>         Return error message                       Data         <a href='http://www.benchmarkemail.com/models.htm#InboxMasterData'>InboxMasterData</a>         Return Inbox Master Data                       SpamData         <a href='http://www.benchmarkemail.com/models.htm#InboxSpamData'>InboxSpamData</a>         Return Spam Data                       Summary         <a href='http://www.benchmarkemail.com/models.htm#InboxSummary'>InboxSummary</a>         Return Inbox Summary            
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetAInboxMasterResult
 **/
exports.inboxByIDGet = function(authToken,contentType,iD) {
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
 * Get a Inbox List
 * Get a Inbox List   Query String Parameters :                      Parameter         Required         Type         Description                       Status         Optional         string         Completed (1) Or Not (0)                       PageNumber         Required         string         Page Number                       PageSize         Required         string         Number of rows on the page                       OrderBy         Required         string         Order By Column                       Filter         Optional         string         Filter by name                       SortOrder         Required         string         ASC or DESC                 Response Body Parameters:                     Parameter         Type         Description                       Count         int         Total number                       Status         string         1 if successful, -1 if error                       Data         <a href='http://www.benchmarkemail.com/models.htm#InboxListData'>InboxListData         Array of Inbox list returned.            
 *
 * filter String 
 * pageNumber String 
 * pageSize String 
 * status String 
 * orderBy String 
 * sortOrder String 
 * authToken String 
 * contentType String 
 * returns GetAInboxList
 **/
exports.inboxGet = function(filter,pageNumber,pageSize,status,orderBy,sortOrder,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 15,
    "Data" : [ {
      "CreatedDate" : "Mar 07 2017, 03:54 PM",
      "ID" : "11333014",
      "Status" : "1",
      "TemplateName" : "Badge test",
      "TestCount" : 2,
      "TestID" : "cbf24757-a7cd-439b-984f-55891e540548"
    }, {
      "CreatedDate" : "Mar 06 2017, 03:58 PM",
      "ID" : "11333632",
      "Status" : "1",
      "TemplateName" : "Email Mar 06 2017 222",
      "TestCount" : 1,
      "TestID" : "d4dee4a2-43de-4308-aac9-69c6d6c2f368"
    }, {
      "CreatedDate" : "Mar 03 2017, 04:17 PM",
      "ID" : "11323899",
      "Status" : "1",
      "TemplateName" : "mark - drag drop 02march",
      "TestCount" : 2,
      "TestID" : "f4053f55-f4d3-4e5f-bee6-26db82279baf"
    }, {
      "CreatedDate" : "Mar 03 2017, 03:16 PM",
      "ID" : "11323899",
      "Status" : "1",
      "TemplateName" : "mark - drag drop 02march",
      "TestCount" : 2,
      "TestID" : "65776975-5f69-4155-b969-efe8d53ae332"
    }, {
      "CreatedDate" : "Mar 03 2017, 03:12 PM",
      "ID" : "11323765",
      "Status" : "1",
      "TemplateName" : " Mohit Classic Editor Test Email",
      "TestCount" : 2,
      "TestID" : "12f251cd-8344-47dc-92fe-a358ca031aeb"
    }, {
      "CreatedDate" : "Mar 03 2017, 02:21 PM",
      "ID" : "11118461",
      "Status" : "1",
      "TemplateName" : "firstName classic - IE - NAME",
      "TestCount" : 1,
      "TestID" : "23063a6f-ec6b-4e77-8815-0b119e4eb85e"
    }, {
      "CreatedDate" : "Mar 02 2017, 04:48 PM",
      "ID" : "11317763",
      "Status" : "1",
      "TemplateName" : "firstName - drag drop 02march",
      "TestCount" : 2,
      "TestID" : "6c47764a-2a09-4c38-a88e-6a46514d0c89"
    }, {
      "CreatedDate" : "Nov 11 2016, 12:30 PM",
      "ID" : "10689577",
      "Status" : "1",
      "TemplateName" : "test null list",
      "TestCount" : 2,
      "TestID" : "29ff99c5-e017-439c-b3f0-b38c51e3b7bd"
    }, {
      "CreatedDate" : "Nov 11 2016, 12:28 PM",
      "ID" : "10753448",
      "Status" : "1",
      "TemplateName" : "Oct 28 2016 Email",
      "TestCount" : 2,
      "TestID" : "37c9d7e9-53d5-42b3-9bd4-23f4b45ce6cc"
    }, {
      "CreatedDate" : "Nov 11 2016, 12:16 PM",
      "ID" : "10753448",
      "Status" : "1",
      "TemplateName" : "Oct 28 2016 Email",
      "TestCount" : 2,
      "TestID" : "9d8f6585-bd0b-479f-bcf7-5db490d63073"
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
 * Create a Inbox
 * Create a Inbox   Request Body Parameters :                  Parameter        Required        Type        Description                    EmailID        Required        string        Email ID                    TestID        Required        string        Test ID (ID of the Applications in which the test is required like 0,22)              Response Body Parameters:                  Parameter        Type        Description                    Status        string        1 if successful, -1 if error                    Data        string        The Test ID          
 *
 * body CreateAInboxrequest 
 * authToken String 
 * contentType String 
 * returns CreateAInbox
 **/
exports.inboxPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : "d3819e18-0fa1-470a-90d3-6600bf02b834",
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
 * Get a Inbox Detail Result
 * Get a Inbox Detail Tests       Request Body Parameters :  None         Response body parameters :                     Parameter         Type         <th >Description                       TotalPurchase         int         Total Purchase test                       TotalTest         int         Total tests used                       TotalBalance         int         Total Remaining test                       TestCount         string         Selected test count                       TopTest         string         Popular/top tests (| seperated)                       Status         string         Status of test                       InboxCheckerPrice         string                                Applications         <a href='http://www.benchmarkemail.com/models.htm#InboxApplicationData'>InboxApplicationData</a>         Array            
 *
 * authToken String 
 * contentType String 
 * returns GetAInboxDetailResult
 **/
exports.inboxTestsGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Applications" : [ {
      "ApplicationName" : "Gmail (Explorer)",
      "ID" : "22",
      "Platform" : "#FREE#",
      "Type" : "Free"
    }, {
      "ApplicationName" : "Outlook 2003",
      "ID" : "35",
      "Platform" : "#FREE#",
      "Type" : "Free"
    }, {
      "ApplicationName" : "Apple Mail 8",
      "ID" : "64",
      "Platform" : "Mac OS",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Apple Mail 9",
      "ID" : "80",
      "Platform" : "Mac OS",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Outlook 2011",
      "ID" : "38",
      "Platform" : "Mac OS",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Outlook 2016",
      "ID" : "69",
      "Platform" : "Mac OS",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Android 4.2",
      "ID" : "2",
      "Platform" : "Mobile devices",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Gmail App (Android)",
      "ID" : "62",
      "Platform" : "Mobile devices",
      "Type" : "Email"
    }, {
      "ApplicationName" : "iPad (Retina)",
      "ID" : "65",
      "Platform" : "Mobile devices",
      "Type" : "Email"
    }, {
      "ApplicationName" : "iPad Mini",
      "ID" : "61",
      "Platform" : "Mobile devices",
      "Type" : "Email"
    }, {
      "ApplicationName" : "iPhone 5s (iOS 7)",
      "ID" : "58",
      "Platform" : "Mobile devices",
      "Type" : "Email"
    }, {
      "ApplicationName" : "iPhone 5s (iOS 8)",
      "ID" : "66",
      "Platform" : "Mobile devices",
      "Type" : "Email"
    }, {
      "ApplicationName" : "iPhone 6",
      "ID" : "67",
      "Platform" : "Mobile devices",
      "Type" : "Email"
    }, {
      "ApplicationName" : "iPhone 6 Plus",
      "ID" : "68",
      "Platform" : "Mobile devices",
      "Type" : "Email"
    }, {
      "ApplicationName" : "iPhone 6s",
      "ID" : "81",
      "Platform" : "Mobile devices",
      "Type" : "Email"
    }, {
      "ApplicationName" : "iPhone 6s Plus",
      "ID" : "82",
      "Platform" : "Mobile devices",
      "Type" : "Email"
    }, {
      "ApplicationName" : "AOL Mail (Explorer)",
      "ID" : "3",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "AOL Mail (Chrome)",
      "ID" : "5",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Gmail (Chrome)",
      "ID" : "24",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "GMX.de (Chrome)",
      "ID" : "94",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Google Apps (Chrome)",
      "ID" : "87",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Inbox by Gmail (Chrome)",
      "ID" : "98",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Office 365 (Chrome)",
      "ID" : "91",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Outlook.com (Chrome)",
      "ID" : "42",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Web.de (Chrome)",
      "ID" : "97",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Yahoo! Mail (Chrome)",
      "ID" : "50",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "AOL Mail (Firefox)",
      "ID" : "4",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Gmail (Firefox)",
      "ID" : "23",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "GMX.de (Firefox)",
      "ID" : "93",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Google Apps (Firefox)",
      "ID" : "88",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Inbox by Gmail (Firefox)",
      "ID" : "99",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Office 365 (Firefox)",
      "ID" : "90",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Outlook.com (Firefox)",
      "ID" : "41",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Web.de (Firefox)",
      "ID" : "96",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Yahoo! Mail (Firefox)",
      "ID" : "49",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "GMX.de (Explorer)",
      "ID" : "92",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Google Apps (Explorer)",
      "ID" : "86",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Office 365 (Explorer)",
      "ID" : "89",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Outlook.com (Explorer)",
      "ID" : "40",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Web.de (Explorer)",
      "ID" : "95",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Yahoo! Mail (Explorer)",
      "ID" : "48",
      "Platform" : "Web-based",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Color Blindness",
      "ID" : "13",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Lotus Notes 7",
      "ID" : "30",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Lotus Notes 8",
      "ID" : "31",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Lotus Notes 8.5",
      "ID" : "32",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "IBM Notes 9",
      "ID" : "83",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Outlook 2000",
      "ID" : "33",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Outlook 2002",
      "ID" : "34",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Outlook 2007",
      "ID" : "36",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Outlook 2010",
      "ID" : "37",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Outlook 2013",
      "ID" : "39",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Outlook 2013 120 DPI",
      "ID" : "84",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Outlook 2016",
      "ID" : "85",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Plain Text",
      "ID" : "43",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "Thunderbird 31",
      "ID" : "46",
      "Platform" : "Windows",
      "Type" : "Email"
    }, {
      "ApplicationName" : "AOL Mail",
      "ID" : "21",
      "Platform" : "Desktop",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Gmail",
      "ID" : "19",
      "Platform" : "Desktop",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "GMX",
      "ID" : "55",
      "Platform" : "Desktop",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Mail.com",
      "ID" : "56",
      "Platform" : "Desktop",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Office365",
      "ID" : "71",
      "Platform" : "Desktop",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Outlook.com",
      "ID" : "72",
      "Platform" : "Desktop",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Outlook",
      "ID" : "18",
      "Platform" : "Desktop",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Yahoo! Mail",
      "ID" : "20",
      "Platform" : "Desktop",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Barracuda",
      "ID" : "16",
      "Platform" : "Hosted",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Cloudmark",
      "ID" : "76",
      "Platform" : "Hosted",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "DomainKeys",
      "ID" : "53",
      "Platform" : "Hosted",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "DKIM",
      "ID" : "52",
      "Platform" : "Hosted",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Microsoft Exchange Online Protection",
      "ID" : "77",
      "Platform" : "Hosted",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Google Apps",
      "ID" : "74",
      "Platform" : "Hosted",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Google Inbox",
      "ID" : "73",
      "Platform" : "Hosted",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "MailRoute",
      "ID" : "75",
      "Platform" : "Hosted",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Mail.ru",
      "ID" : "79",
      "Platform" : "Hosted",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "MessageLabs",
      "ID" : "14",
      "Platform" : "Hosted",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Sender ID",
      "ID" : "54",
      "Platform" : "Hosted",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "SpamAssassin",
      "ID" : "17",
      "Platform" : "Hosted",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Sender Policy Framework",
      "ID" : "51",
      "Platform" : "Hosted",
      "Type" : "Spam"
    }, {
      "ApplicationName" : "Web.de",
      "ID" : "78",
      "Platform" : "Hosted",
      "Type" : "Spam"
    } ],
    "InboxCheckerPrice" : "Rs.450.00",
    "Status" : "1",
    "TestCount" : "0",
    "TopTest" : "64|69|62|65|66|67|68|42|50|41|49|40|48|37|39|18|",
    "TotalBalance" : 0,
    "TotalPurchase" : 0,
    "TotalTest" : 0
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

