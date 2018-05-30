'use strict';


/**
 * Delete the Webhooks
 * Delete webhooks   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list   {{ID}}requiredstringID of the webhook            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error Code      
 *
 * authToken String 
 * contentType String 
 * listID String 
 * iD String 
 * returns DeleteTheWebhooks
 **/
exports.contactWebhooksByListIDAndIDDelete = function(authToken,contentType,listID,iD) {
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
 * Update Webhook
 * Update webhook data   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list   {{ID}}requiredstringID of the webhook            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         Datarequired<a href=\"http://www.benchmarkemail.com/models.htm#ContactWebhooksRecord\">WebhooksRecord</a>Details of the webhook            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error Code   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactWebhooksRecord\">WebhooksRecord</a>Data      
 *
 * body UpdateWebhookrequest 
 * authToken String 
 * contentType String 
 * listID String 
 * iD String 
 * returns UpdateWebhook
 **/
exports.contactWebhooksByListIDAndIDPatch = function(body,authToken,contentType,listID,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "CleanedAddress" : "0",
      "ClientUrl" : "http://www.benchmarkemail.com",
      "ContactMasterID" : "15242968",
      "EmailChanged" : "0",
      "ID" : "2931",
      "ProfileUpdates" : "1",
      "Subscribes" : "1",
      "Unsubscribes" : "1"
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
 * Create Webhook
 * Create New Webhook   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         Datarequired<a href=\"http://www.benchmarkemail.com/models.htm#ContactWebhooksRecord\">WebhooksRecord</a>Details of the webhook            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactWebhooksRecord\">WebhooksRecord</a>Data   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error Code      
 *
 * body CreateWebhookrequest 
 * authToken String 
 * contentType String 
 * listID String 
 * returns CreateWebhook
 **/
exports.contactWebhooksByListIDPost = function(body,authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "CleanedAddress" : "1",
      "ClientUrl" : "http://www.benchmarkemail.com",
      "ContactMasterID" : "15242968",
      "EmailChanged" : "1",
      "ID" : "2931",
      "ProfileUpdates" : "0",
      "Subscribes" : "0",
      "Unsubscribes" : "0"
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

