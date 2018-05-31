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

