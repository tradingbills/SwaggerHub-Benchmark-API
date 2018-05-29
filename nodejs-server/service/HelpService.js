'use strict';


/**
 * Get List of Help Topic
 * <h4>Get List of Help Topic</h4> <b>Query string parameters :</b>  <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Filter[URL]</td>       <td>Required</td>       <td>String</td>       <td>URL</td>     </tr>     <tr>       <td>PageNumber</td>       <td>Required</td>       <td>String</td>       <td>Page Number</td>     </tr>     <tr>       <td>PageSize</td>       <td>Required</td>       <td>string</td>       <td>Number of records per page</td>     </tr>   </tbody> </table>  <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>String</td>       <td>Number of Help topic</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#HelpListData\" >HelpListData</a></td>       <td>List of Help topic</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * filter[URL] String 
 * pageNumber String 
 * pageSize String 
 * authToken String 
 * contentType String 
 * returns GetListOfHelpTopic
 **/
exports.helpGet = function(filter[URL],pageNumber,pageSize,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 5,
    "Data" : [ {
      "ID" : "194",
      "Sequence" : 0,
      "Topic" : "How do I personalize the subject line of my email?",
      "URL" : "https://ui.benchmarkemail.com/help-FAQ/answer/How-do-i-personalize-the-subject-line-of-my-email"
    }, {
      "ID" : "298",
      "Sequence" : 0,
      "Topic" : "Why is my email campaign \"Under Review\"?",
      "URL" : "https://ui.benchmarkemail.com/help-FAQ/answer/why-is-my-email-campaign-under-review"
    }, {
      "ID" : "156",
      "Sequence" : 0,
      "Topic" : "Can I Add Google Analytics Tracking To My Email Campaigns?",
      "URL" : "https://ui.benchmarkemail.com/help-FAQ/answer/Can-I-Add-Google-Analytics-Tracking-To-My-Email-Campaigns"
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
 * Email Support/feedback to support
 * <h4> Email Support/feedback to support</h4>  <h4>Body Parameters (to be encoded as a JSON string)</h4> <table>   <tr>     <th>Parameter</th>     <th>Required</th>     <th>Type</th>     <th>Description</th>   </tr>   <tr>     <td>Subject</td>     <td>Required</td>     <td>string</td>     <td>Subject</td>   </tr>   <tr>     <td>Message</td>     <td>Required</td>     <td>string</td>     <td>Your Message</td>   </tr>   <tr>     <td>Name</td>     <td>Required</td>     <td>string</td>     <td>Name of Client</td>   </tr>   <tr>     <td>Email</td>     <td>Required</td>     <td>string</td>     <td>Email Address of client</td>   </tr>   <tr>     <td>UserAgent</td>     <td>Optional</td>     <td>string</td>     <td>User Agent</td>   </tr> </table>  <h4>Response body parameters</h4> <table> <thead> <tr> <th>Key</th><th>Type</th><th>Description</th></tr> </thead> <tbody> <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr> <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr> </tbody> </table>
 *
 * body EmailSupport~1feedbackToSupportrequest 
 * authToken String 
 * contentType String 
 * returns EmailSupport~1feedbackToSupport
 **/
exports.helpPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Generate Ticket
 * <h4>Generate Ticket</h4>  <b>Body Parameters (to be encoded as a JSON string)</b> <table>   <tr>     <th>Parameter</th>     <th>Required</th>     <th>Type</th>     <th>Description</th>   </tr>   <tr>     <td>Name</td>     <td>Required</td>     <td>string</td>     <td>Name of a poll to be created</td>   </tr> </table>  <h4>Response body parameters</h4> <table> <thead> <tr> <th>Key</th><th>Type</th><th>Description</th></tr> </thead> <tbody> <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr> <tr><td>ID</td><td>string</td><td>Ticket Number</td></tr> <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr> </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GenerateTicket
 **/
exports.helpTicketPost = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "ID" : "{{TicketNumber}}",
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

