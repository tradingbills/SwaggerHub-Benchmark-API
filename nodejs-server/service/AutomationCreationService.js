'use strict';


/**
 * Get details of an Automation
 * Get details of an Automation   URL Parameters            Key   Required   Description               {{AutomationID}}   Required   Automation ID</a>            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   Data<a href='http://www.benchmarkemail.com/models.htm#AutomationDetailData'>AutomationDetailData</a>Array   Errors<a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>Array      
 *
 * authToken String 
 * contentType String 
 * automationID String 
 * returns GetDetailsOfAnAutomation
 **/
exports.automationByAutomationIDGet = function(authToken,contentType,automationID) {
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
 * Update an Automation
 * Create an Automation   URL Parameters            Key   Required   Type               {{AutomationID}}   Required   Automation ID</a>            Body Parameters (to be encoded as a JSON string)            Key   Required   Type               Detail   Required   See for details on <a href='http://www.benchmarkemail.com/models.htm#AutomationDetailData'>AutomationDetailData</a>            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   Data<a href='http://www.benchmarkemail.com/models.htm#AutomationDetailData'>AutomationDetailData</a>Array   Errors<a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>Array      
 *
 * body UpdateAnAutomationrequest 
 * authToken String 
 * contentType String 
 * automationID String 
 * returns UpdateAnAutomation
 **/
exports.automationByAutomationIDPatch = function(body,authToken,contentType,automationID) {
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
 * Get details for an Automation Email
 * Create copy of an Automation email   URL Parameters            Key   Required   Description               {{AutomationID}}   Required   Automation ID</a>         {{AutomationDetailID}}   Required   Automation email ID</a>            Response body parameters            KeyTypeDescription         AutomationEmailData<a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a>Array      
 *
 * authToken String 
 * contentType String 
 * automationID String 
 * automationDetailID String 
 * returns GetDetailsForAnAutomationEmail
 **/
exports.automationEmailsByAutomationIDAndAutomationDetailIDGet = function(authToken,contentType,automationID,automationDetailID) {
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
 * Update Email in Automation
 * Create an Automation   URL Parameters            Key   Required   Description               {{AutomationID}}   Required   Automation ID</a>         {{AutomationDetailID}}   Required   Automation Email ID</a>            Body Parameters (to be encoded as a JSON string)            Key   Required   Description               Detail   Required   See for details on <a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a>            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   Email<a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a>Array   Errors<a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>Array      
 *
 * body UpdateEmailInAutomationrequest 
 * authToken String 
 * contentType String 
 * automationID String 
 * automationDetailID String 
 * returns UpdateEmailInAutomation
 **/
exports.automationEmailsByAutomationIDAndAutomationDetailIDPatch = function(body,authToken,contentType,automationID,automationDetailID) {
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
 * Add Email in Automation
 * Create an Automation   URL Parameters            Key   Required   Description               {{AutomationID}}   Required   Automation ID</a>            Body Parameters (to be encoded as a JSON string)            Key   Required   Type               Detail   Required   See for details on <a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a>            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   Email<a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a>Array   Errors<a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>Array      
 *
 * body AddEmailInAutomationrequest 
 * authToken String 
 * contentType String 
 * automationID String 
 * returns AddEmailInAutomation
 **/
exports.automationEmailsByAutomationIDPost = function(body,authToken,contentType,automationID) {
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
 * Update Email Content for an Automation
 * Update email content for an Automation   URL Parameters            Key   Required   Description               {{AutomationID}}   Required   Automation ID</a>         {{AutomationDetailID}}   Required   Automation Email ID</a>            Body Parameters (to be encoded as a JSON string)            Key   Required   Type               Detail   Required   See for details on <a href='http://www.benchmarkemail.com/models.htm#EmailData'>EmailData</a>            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   Email<a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a>Array   Errors<a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>Array      
 *
 * body UpdateEmailContentForAnAutomationrequest 
 * authToken String 
 * contentType String 
 * automationID String 
 * automationDetailID String 
 * no response value expected for this operation
 **/
exports.automationEmailsContentByAutomationIDAndAutomationDetailIDPatch = function(body,authToken,contentType,automationID,automationDetailID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create Email Content for an Automation
 * Create email content for an Automation   URL Parameters            Key   Required   Description               {{AutomationID}}   Required   Automation ID</a>         {{AutomationDetailID}}   Required   Automation Email ID</a>            Body Parameters (to be encoded as a JSON string)            Key   Required   Type               Detail   Required   See for details on <a href='http://www.benchmarkemail.com/models.htm#EmailData'>EmailData</a>            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   Email<a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a>Array   Errors<a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>Array      
 *
 * body CreateEmailContentForAnAutomationrequest 
 * authToken String 
 * contentType String 
 * automationID String 
 * automationDetailID String 
 * returns CreateEmailContentForAnAutomation
 **/
exports.automationEmailsContentByAutomationIDAndAutomationDetailIDPost = function(body,authToken,contentType,automationID,automationDetailID) {
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
 * Create an Automation
 * Create an Automation   Body Parameters (to be encoded as a JSON string)            Key   Required   Type               Detail   Required   See for details on <a href= 'http://www.benchmarkemail.com/models.htm#AutomationDetailData'>AutomationDetailData</a>            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   Data<a href='http://www.benchmarkemail.com/models.htm#AutomationDetailData'>AutomationDetailData</a>Array   Errors<a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>Array      
 *
 * body CreateAnAutomationrequest 
 * authToken String 
 * contentType String 
 * returns CreateAnAutomation
 **/
exports.automationPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

