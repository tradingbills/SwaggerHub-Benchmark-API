'use strict';


/**
 * Get a Campaign List of Engagement
 * <h4>Get a Campaign List of Engagement</h4> <b>Query string parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>PageNumber</td>       <td>Optional</td>       <td>string</td>       <td>Page Number</td>     </tr>     <tr>       <td>PageSize</td>       <td>Optional</td>       <td>string</td>       <td>Number of rows on the page</td>     </tr>     <tr>       <td>OrderBy</td>       <td>Optional</td>       <td>string</td>       <td>Order By Column</td>     </tr>     <tr>       <td>Filter</td>       <td>Optional</td>       <td>string</td>       <td>Filter by name</td>     </tr>     <tr>       <td>SortOrder</td>       <td>Optional</td>       <td>string</td>       <td>ASC or DESC</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>int</td>       <td>Total number</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#EngagementCampaignData\" > CampaignData</a></td>       <td>Array of Campaign list returned.</td>     </tr>   </tbody> </table>
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
      "EmailName" : "Test Pooja",
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
 * <h4>Get Click Contact Count</h4> <b>Query string parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>EmailIDList</td>       <td>Required</td>       <td>string</td>       <td>List of Email ID</td>     </tr>     <tr>       <td>FilterType</td>       <td>Required</td>       <td>string</td>       <td>1 (for Any)</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>int</td>       <td>Total number</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>   </tbody> </table>
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
 * <h4>Get a ClickURLContactCount of Engagement</h4> <b>Query string parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>CampaignURLList</td>       <td>Required</td>       <td>string</td>       <td>Campaign URL List</td>     </tr>     <tr>       <td>ClickAll</td>       <td>Optional</td>       <td>string</td>       <td>&nbsp;</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>retVal</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>   </tbody> </table>
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
 * <h4>Create List of Engagement</h4> <b>Query string parameters :</b> None <br> <b>Request Body Parameters</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>New List Name</th>     </tr>   </thead>   <tbody>     <tr>       <td>ListName</td>       <td>Required</td>       <td>string</td>       <td>New List Name</td>     </tr>     <tr>       <td>Type</td>       <td>Required</td>       <td>string</td>       <td>Type of list</td>     </tr>     <tr>       <td>EmailIDs</td>       <td>Required</td>       <td>string</td>       <td>List of email ID</td>     </tr>     <tr>       <td>BaseType</td>       <td>Required</td>       <td>string</td>       <td>string</td>     </tr>     <tr>       <td>IncludeAll</td>       <td>Required</td>       <td>string</td>       <td>string</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Errors</td>       <td><a href=\"ErrorData\" >ErrorData</a></td>       <td>Total number</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>     <tr>       <td>ContactListID</td>       <td>string</td>       <td>ContactList ID</td>     </tr>   </tbody> </table>
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
 * <h4>Get Non Contact Count</h4> <b>Query string parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>EmailIDList</td>       <td>Required</td>       <td>string</td>       <td>List of Email ID</td>     </tr>     <tr>       <td>FilterType</td>       <td>Required</td>       <td>string</td>       <td>1 (for Any)</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>int</td>       <td>Total number</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>   </tbody> </table>
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
 * <h4>Get Open Contact Count</h4> <b>Query string parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>EmailIDList</td>       <td>Required</td>       <td>string</td>       <td>List of Email ID</td>     </tr>     <tr>       <td>FilterType</td>       <td>Required</td>       <td>string</td>       <td>1 (for Any)</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>int</td>       <td>Total number</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>   </tbody> </table>
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
 * <h4>Get a URLList of Engagement</h4> <b>Query string parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>EmailIDs</td>       <td>Required</td>       <td>string</td>       <td>List of Email Ids</td>     </tr>     <tr>       <td>PageNumber</td>       <td>Optional</td>       <td>string</td>       <td>Page Number</td>     </tr>     <tr>       <td>PageSize</td>       <td>Optional</td>       <td>string</td>       <td>Number of rows on the page</td>     </tr>     <tr>       <td>OrderBy</td>       <td>Optional</td>       <td>string</td>       <td>Order By Column</td>     </tr>     <tr>       <td>Filter</td>       <td>Optional</td>       <td>string</td>       <td>Filter by name</td>     </tr>     <tr>       <td>SortOrder</td>       <td>Optional</td>       <td>string</td>       <td>ASC or DESC</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>int</td>       <td>Total number</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#EngagementClickURLData\" > ClickURLData</a></td>       <td>Array of Click URL list returned.</td>     </tr>   </tbody> </table>
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

