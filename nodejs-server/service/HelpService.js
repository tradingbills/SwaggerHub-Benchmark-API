'use strict';


/**
 * Get List of Help Topic
 * Get List of Help Topic  Query string parameters :                     Parameter        Required        Type        Description                            Filter[URL]        Required        String        URL                    PageNumber        Required        String        Page Number                    PageSize        Required        string        Number of records per page                Response Body Parameters :                    Parameter        Type        Description                            Count        String        Number of Help topic                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#HelpListData\" >HelpListData</a>        List of Help topic                    Status        string        1 = Successful, -1 Error            
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
 *  Email Support/feedback to support    Body Parameters (to be encoded as a JSON string)            Parameter      Required      Type      Description              Subject      Required      string      Subject              Message      Required      string      Your Message              Name      Required      string      Name of Client              Email      Required      string      Email Address of client              UserAgent      Optional      string      User Agent          Response body parameters        KeyTypeDescription      Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Array of errors  Statusstring1 if successful, -1 if error    
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
 * Generate Ticket    Body Parameters (to be encoded as a JSON string)            Parameter      Required      Type      Description              Name      Required      string      Name of a poll to be created          Response body parameters        KeyTypeDescription      Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Array of errors  IDstringTicket Number  Statusstring1 if successful, -1 if error    
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

