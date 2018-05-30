'use strict';


/**
 * Get a Campaign List of Engagement
 * Get a Campaign List of Engagement  Query string parameters :                    Parameter        Required        Type        Description                            PageNumber        Optional        string        Page Number                    PageSize        Optional        string        Number of rows on the page                    OrderBy        Optional        string        Order By Column                    Filter        Optional        string        Filter by name                    SortOrder        Optional        string        ASC or DESC                Response body parameters :                    Parameter        Type        Description                            Count        int        Total number                    Status        string        1 = Successful, -1 Error                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#EngagementCampaignData\" > CampaignData</a>        Array of Campaign list returned.            
 *
 * pageNumber String 
 * pageSize String 
 * orderBy String 
 * filter String 
 * sortOrder String 
 * authToken String 
 * contentType String 
 * returns GetACampaignListOfEngagement
 **/
exports.engagementCampaignListGet = function(pageNumber,pageSize,orderBy,filter,sortOrder,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 51,
    "Data" : [ {
      "Clicks" : 0,
      "EmailName" : "Test firstName",
      "ID" : "12263198",
      "MailSent" : 8,
      "Opens" : 0,
      "ScheduleDate" : "Oct 06, 2017",
      "TimeZone" : "IST"
    }, {
      "Clicks" : 0,
      "EmailName" : "Aug 21 2017 Email 1",
      "ID" : "12194338",
      "MailSent" : 5,
      "Opens" : 0,
      "ScheduleDate" : "Aug 24, 2017",
      "TimeZone" : "IST"
    }, {
      "Clicks" : 0,
      "EmailName" : "Aug 24 2017 Email",
      "ID" : "12211505",
      "MailSent" : 11,
      "Opens" : 0,
      "ScheduleDate" : "Aug 24, 2017",
      "TimeZone" : "IST"
    }, {
      "Clicks" : 0,
      "EmailName" : "ISSUE Campaign Copy Copy Copy",
      "ID" : "12210851",
      "MailSent" : 3998,
      "Opens" : 0,
      "ScheduleDate" : "Aug 24, 2017",
      "TimeZone" : "IST"
    }, {
      "Clicks" : 0,
      "EmailName" : "ISSUE Campaign Copy Copy",
      "ID" : "12210437",
      "MailSent" : 3998,
      "Opens" : 0,
      "ScheduleDate" : "Aug 24, 2017",
      "TimeZone" : "IST"
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
 * Get Click Contact Count
 * Get Click Contact Count  Query string parameters :                    Parameter        Required        Type        Description                            EmailIDList        Required        string        List of Email ID                    FilterType        Required        string        1 (for Any)                Response body parameters :                    Parameter        Type        Description                            Count        int        Total number                    Status        string        1 if successful, -1 if error            
 *
 * emailIDList String 
 * filterType String 
 * authToken String 
 * contentType String 
 * returns GetClickContactCount
 **/
exports.engagementClickContactCountGet = function(emailIDList,filterType,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
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
 * Get a ClickURLContactCount of Engagement
 * Get a ClickURLContactCount of Engagement  Query string parameters :                    Parameter        Required        Type        Description                            CampaignURLList        Required        string        Campaign URL List                    ClickAll        Optional        string                        Response body parameters :                    Parameter        Type        Description                            retVal        string        1 if successful, -1 if error            
 *
 * campaignURLList String 
 * clickAll String 
 * authToken String 
 * contentType String 
 * returns GetAClickurlcontactcountOfEngagement
 **/
exports.engagementClickURLContactCountGet = function(campaignURLList,clickAll,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create List of Engagement
 * Create List of Engagement  Query string parameters : None    Request Body Parameters                    Parameter        Required        Type        New List Name                            ListName        Required        string        New List Name                    Type        Required        string        Type of list                    EmailIDs        Required        string        List of email ID                    BaseType        Required        string        string                    IncludeAll        Required        string        string                Response body parameters :                    Parameter        Type        Description                            Errors        <a href=\"ErrorData\" >ErrorData</a>        Total number                    Status        string        1 if successful, -1 if error                    ContactListID        string        ContactList ID            
 *
 * body CreateListOfEngagementrequest 
 * authToken String 
 * contentType String 
 * returns CreateListOfEngagement
 **/
exports.engagementCreateListPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ContactListID" : "15274039",
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
 * Get Non Contact Count
 * Get Non Contact Count  Query string parameters :                    Parameter        Required        Type        Description                            EmailIDList        Required        string        List of Email ID                    FilterType        Required        string        1 (for Any)                Response body parameters :                    Parameter        Type        Description                            Count        int        Total number                    Status        string        1 if successful, -1 if error            
 *
 * emailIDList String 
 * filterType Integer 
 * authToken String 
 * contentType String 
 * returns GetNonContactCount
 **/
exports.engagementNonContactCountGet = function(emailIDList,filterType,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 9,
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
 * Get Open Contact Count
 * Get Open Contact Count  Query string parameters :                    Parameter        Required        Type        Description                            EmailIDList        Required        string        List of Email ID                    FilterType        Required        string        1 (for Any)                Response body parameters :                    Parameter        Type        Description                            Count        int        Total number                    Status        string        1 if successful, -1 if error            
 *
 * emailIDList String 
 * filterType String 
 * authToken String 
 * contentType String 
 * returns GetOpenContactCount
 **/
exports.engagementOpenContactCountGet = function(emailIDList,filterType,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
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
 * Get a URLList of Engagement
 * Get a URLList of Engagement  Query string parameters :                    Parameter        Required        Type        Description                            EmailIDs        Required        string        List of Email Ids                    PageNumber        Optional        string        Page Number                    PageSize        Optional        string        Number of rows on the page                    OrderBy        Optional        string        Order By Column                    Filter        Optional        string        Filter by name                    SortOrder        Optional        string        ASC or DESC                Response body parameters :                    Parameter        Type        Description                            Count        int        Total number                    Status        string        1 = Successful, -1 Error                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#EngagementClickURLData\" > ClickURLData</a>        Array of Click URL list returned.            
 *
 * filter String 
 * emailIDs String 
 * pageNumber String 
 * pageSize String 
 * orderBy String 
 * sortOrder String 
 * authToken String 
 * contentType String 
 * returns GetAUrllistOfEngagement
 **/
exports.engagementURLListGet = function(filter,emailIDs,pageNumber,pageSize,orderBy,sortOrder,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "CampaignID" : "6888011",
      "CampaignName" : "Mohit Code Editor Test Email",
      "ClickThrough" : 2,
      "LinkName" : "http://www.google.com"
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

