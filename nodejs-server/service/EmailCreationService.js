'use strict';


/**
 * Get Details for the AB Split
 * Get a list of contacts   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringID of the email            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#ABSplitMasterVariableData\">ABSplitMasterVariableData</a>ABSplit Data   Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Errors   ConfirmationLinkstringThe link for confirmation of the form      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetDetailsForTheAbSplit
 **/
exports.emailsABSplitByIDGet = function(authToken,contentType,iD) {
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
 * Get Details of Email
 * Get Details of Email   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringIDs of the EMail            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Errors   Data<a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a>EMail Data      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetDetailsOfEmail
 **/
exports.emailsByIDGet = function(authToken,contentType,iD) {
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
 * Update the email
 * Update the email   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringID of the email            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         Detailrequired<a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a>EMail Data            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a>EMail Data   Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns UpdateTheEmail
 **/
exports.emailsByIDPatch = function(authToken,contentType,iD) {
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
 * GET Community Category
 * Get a list of contacts      Response body parameters            KeyTypeDescription         Data<a href=\"http://www.benchmarkemail.com/models.htm#ClientGenericList\">GenericList</a>Community Category Data      
 *
 * authToken String 
 * contentType String 
 * returns GetCommunityCategory
 **/
exports.emailsCommunityCategoryGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : [ {
      "ID" : "1",
      "Value" : "Arts"
    }, {
      "ID" : "2",
      "Value" : "Automotive"
    }, {
      "ID" : "3",
      "Value" : "Business"
    }, {
      "ID" : "4",
      "Value" : "Education"
    }, {
      "ID" : "5",
      "Value" : "Entertainment"
    }, {
      "ID" : "6",
      "Value" : "Events"
    }, {
      "ID" : "7",
      "Value" : "Government"
    }, {
      "ID" : "8",
      "Value" : "Health"
    }, {
      "ID" : "9",
      "Value" : "Hobbies"
    }, {
      "ID" : "10",
      "Value" : "Non-Profit"
    }, {
      "ID" : "13",
      "Value" : "Real Estate"
    }, {
      "ID" : "14",
      "Value" : "Religion"
    }, {
      "ID" : "15",
      "Value" : "Shopping"
    }, {
      "ID" : "16",
      "Value" : "Sports"
    }, {
      "ID" : "17",
      "Value" : "Technology"
    }, {
      "ID" : "18",
      "Value" : "Travel"
    }, {
      "ID" : "19",
      "Value" : "Women"
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
 * Create Email
 * Create Email      Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         Detailrequired<a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a>Email Details            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a>EMail Data   Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * returns CreateEmail
 **/
exports.emailsPost = function(authToken,contentType) {
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
 * Schedule RSS Emails
 * Get a list of contacts   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringID of the email            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         Schedulerequiredstring<ul><li><code>1</code> = Every Day</li><li><code>7</code> = Weekly</li><li><code>15</code> = Half Monthly</li><li><code>30</code> = Monthly</li></ul>   ScheduleTimerequiredstringSchedule Time   ScheduleIntervalrequiredstringDays on which it should be allowed to send<ul><li><code>1</code> - Sunday</li><li><code>2</code> - Monday</li><li><code>3</code> - Tuesday</li><li><code>4</code> - Wednesday</li><li><code>5</code> - Thursday</li><li><code>6</code> - Friday</li><li><code>7</code> - Saturday</li></ul>   For every day, <code>1234567</code>   TimeZonerequiredstringTimezone of the schedule            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns ScheduleRssEmails
 **/
exports.emailsRSSScheduleByIDPost = function(authToken,contentType,iD) {
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
 * Get the recipient count for the email
 * Get a list of contacts   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringID of the Email            Response body parameters            KeyTypeDescription         Statusstring1 = Successful, -1 Error   CountintNumber of contacts      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetTheRecipientCountForTheEmail
 **/
exports.emailsRecipientCountByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 4,
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
 * Schedule the email
 * Schedule the email   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringID of the email            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         ScheduleDaterequiredstringSchedule Date   TimeZonerequiredstringTimezone of the schedule date   SendTypeoptionalstringOnly if resend<ul><li><code>2</code> Send to same list</li><li><code>3</code> Send to fixed other contacts (segment)</li></ul>   ListIDoptionalstringOnly if resend   List ID of the contacts to be targetted            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Errors      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns ScheduleTheEmail
 **/
exports.emailsScheduleByIDPost = function(authToken,contentType,iD) {
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
 * SpamCheck
 * SpamCheck   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringID of the email            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Errors   DatastringSpam scrore Data      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns SpamCheck
 **/
exports.emailsSpamByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : "&lt;div class=&quot;pt15 pb10&quot;&gt;&lt;table width=&quot;100%&quot; cellspacing=&quot;0&quot; cellpadding=&quot;3&quot; border=&quot;0&quot;&gt;&lt;tr&gt;&lt;td width=&quot;18%&quot; class=&quot;fs12 b&quot; valign=&quot;top&quot;&gt;Your Score: &lt;/td&gt;&lt;td width=&quot;78%&quot; class=&quot;fs12&quot;&gt;&lt;span class=&quot;fs16 b&quot;&gt; -1&lt;/span&gt; (Emails with a score of 5 or higher are likely to be blocked)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td valign=&quot;top&quot; class=&quot;fs12 b&quot;&gt;Results :&lt;/td&gt;&lt;td class=&quot;fs12 nobold&quot;&gt;&lt;span style=&quot;font-size:16px;font-weight:bold; color:#079000&quot;&gt;Low&lt;/span&gt; - Your email should not be affected by spam filters.&lt;br/&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;&lt;div style=&quot;overflow:auto; height:118px; width:400px;&quot;&gt;&lt;table width=&quot;380&quot; cellspacing=&quot;1&quot; cellpadding=&quot;4&quot; border=&quot;0&quot; bgcolor=&quot;#9c9c9c&quot; class=&quot;fs11&quot;&gt;&lt;tr&gt;&lt;td width=&quot;11%&quot; bgcolor=&quot;#efefef&quot;&gt;&lt;b&gt;Score&lt;/b&gt;&lt;/td&gt;&lt;td width=&quot;89%&quot; bgcolor=&quot;#efefef&quot;&gt;&lt;b&gt;Description&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;",
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
 * Send Email Test
 * Get a list of contacts   URL Parameters            KeyRequiredTypeDescription         {{ID}}requiredstringID of the email            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         EmailsrequiredstringComma separated list of email addresses   MessagerequiredstringEmail Message              Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>EMail History   Data<a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a>EMail Data      
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns SendEmailTest
 **/
exports.emailsTestByIDPost = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Error" : [ ],
    "Status" : "mohit@cybermaxsolutions.com, email@emailDomain.com"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

