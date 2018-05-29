'use strict';


/**
 * Get Details for the AB Split
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ABSplitMasterVariableData\">ABSplitMasterVariableData</a></td><td>ABSplit Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Errors</td></tr>  <tr><td>ConfirmationLink</td><td>string</td><td>The link for confirmation of the form</td></tr>  </tbody>  </table>
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
 * <h4>Get Details of Email</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>IDs of the EMail</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Errors</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a></td><td>EMail Data</td></tr>  </tbody>  </table>
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
 * <h4>Update the email</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the email</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Detail</td><td>required</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a></td><td>EMail Data</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a></td><td>EMail Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Errors</td></tr>  </tbody>  </table>
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
 * <h4>Get a list of contacts</h4>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ClientGenericList\">GenericList</a></td><td>Community Category Data</td></tr>  </tbody>  </table>
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
 * <h4>Create Email</h4>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Detail</td><td>required</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a></td><td>Email Details</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a></td><td>EMail Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Errors</td></tr>  </tbody>  </table>
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
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the email</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Schedule</td><td>required</td><td>string</td><td><ul><li><code>1</code> = Every Day</li><li><code>7</code> = Weekly</li><li><code>15</code> = Half Monthly</li><li><code>30</code> = Monthly</li></ul></td></tr>  <tr><td>ScheduleTime</td><td>required</td><td>string</td><td>Schedule Time</td></tr>  <tr><td>ScheduleInterval</td><td>required</td><td>string</td><td>Days on which it should be allowed to send<ul><li><code>1</code> - Sunday</li><li><code>2</code> - Monday</li><li><code>3</code> - Tuesday</li><li><code>4</code> - Wednesday</li><li><code>5</code> - Thursday</li><li><code>6</code> - Friday</li><li><code>7</code> - Saturday</li></ul>  For every day, <code>1234567</code></td></tr>  <tr><td>TimeZone</td><td>required</td><td>string</td><td>Timezone of the schedule</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Errors</td></tr>  </tbody>  </table>
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
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 = Successful, -1 Error</td></tr>  <tr><td>Count</td><td>int</td><td>Number of contacts</td></tr>  </tbody>  </table>
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
 * <h4>Schedule the email</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the email</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>ScheduleDate</td><td>required</td><td>string</td><td>Schedule Date</td></tr>  <tr><td>TimeZone</td><td>required</td><td>string</td><td>Timezone of the schedule date</td></tr>  <tr><td>SendType</td><td>optional</td><td>string</td><td>Only if resend<ul><li><code>2</code> Send to same list</li><li><code>3</code> Send to fixed other contacts (segment)</li></ul></td></tr>  <tr><td>ListID</td><td>optional</td><td>string</td><td>Only if resend  List ID of the contacts to be targetted</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Errors</td></tr>  </tbody>  </table>
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
 * <h4>SpamCheck</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Errors</td></tr>  <tr><td>Data</td><td>string</td><td>Spam scrore Data</td></tr>  </tbody>  </table>
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
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the email</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Emails</td><td>required</td><td>string</td><td>Comma separated list of email addresses</td></tr>  <tr><td>Message</td><td>required</td><td>string</td><td>Email Message  </td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>EMail History</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailData\">EmailData</a></td><td>EMail Data</td></tr>  </tbody>  </table>
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
    "Status" : "mohit@cybermaxsolutions.com, pooja@cybermaxsolutions.com"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

