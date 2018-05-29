'use strict';


/**
 * Delete the Webhooks
 * <h4>Delete webhooks</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ListID}}</td><td>required</td><td>string</td><td>ID of the list</td></tr>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the webhook</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Error Code</td></tr>  </tbody>  </table>
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
 * <h4>Update webhook data</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ListID}}</td><td>required</td><td>string</td><td>ID of the list</td></tr>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the webhook</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Data</td><td>required</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactWebhooksRecord\">WebhooksRecord</a></td><td>Details of the webhook</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Error Code</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactWebhooksRecord\">WebhooksRecord</a></td><td>Data</td></tr>  </tbody>  </table>
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
 * <h4>Create New Webhook</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ListID}}</td><td>required</td><td>string</td><td>ID of the list</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Data</td><td>required</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactWebhooksRecord\">WebhooksRecord</a></td><td>Details of the webhook</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactWebhooksRecord\">WebhooksRecord</a></td><td>Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Error Code</td></tr>  </tbody>  </table>
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

