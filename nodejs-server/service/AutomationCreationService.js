'use strict';


/**
 * Get details of an Automation
 * Get details of an Automation  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>{{AutomationID}}</td>  <td>Required</td>  <td>Automation ID</a>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Data</td><td><a href='http://www.benchmarkemail.com/models.htm#AutomationDetailData'>AutomationDetailData</a></td><td>Array</td></tr>  <tr><td>Errors</td><td><a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a></td><td>Array</td></tr>  </tbody>  </table>
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
 * Create an Automation  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Type</th>  </tr>  </thead>  <tbody>  <tr>  <td>{{AutomationID}}</td>  <td>Required</td>  <td>Automation ID</a>  </tr>  </tbody>  </table>  <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Type</th>  </tr>  </thead>  <tbody>  <tr>  <td>Detail</td>  <td>Required</td>  <td>See for details on <a href='http://www.benchmarkemail.com/models.htm#AutomationDetailData'>AutomationDetailData</a>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Data</td><td><a href='http://www.benchmarkemail.com/models.htm#AutomationDetailData'>AutomationDetailData</a></td><td>Array</td></tr>  <tr><td>Errors</td><td><a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a></td><td>Array</td></tr>  </tbody>  </table>
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
 * Create copy of an Automation email  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>{{AutomationID}}</td>  <td>Required</td>  <td>Automation ID</a>  </tr>  <tr>  <td>{{AutomationDetailID}}</td>  <td>Required</td>  <td>Automation email ID</a>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>AutomationEmailData</td><td><a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a></td><td>Array</td></tr>  </tbody>  </table>
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
 * Create an Automation  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>{{AutomationID}}</td>  <td>Required</td>  <td>Automation ID</a>  </tr>  <tr>  <td>{{AutomationDetailID}}</td>  <td>Required</td>  <td>Automation Email ID</a>  </tr>  </tbody>  </table>  <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>Detail</td>  <td>Required</td>  <td>See for details on <a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Email</td><td><a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a></td><td>Array</td></tr>  <tr><td>Errors</td><td><a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a></td><td>Array</td></tr>  </tbody>  </table>
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
 * Create an Automation  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>{{AutomationID}}</td>  <td>Required</td>  <td>Automation ID</a>  </tr>  </tbody>  </table>  <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Type</th>  </tr>  </thead>  <tbody>  <tr>  <td>Detail</td>  <td>Required</td>  <td>See for details on <a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Email</td><td><a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a></td><td>Array</td></tr>  <tr><td>Errors</td><td><a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a></td><td>Array</td></tr>  </tbody>  </table>
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
 * Update email content for an Automation  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>{{AutomationID}}</td>  <td>Required</td>  <td>Automation ID</a>  </tr>  <tr>  <td>{{AutomationDetailID}}</td>  <td>Required</td>  <td>Automation Email ID</a>  </tr>  </tbody>  </table>  <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Type</th>  </tr>  </thead>  <tbody>  <tr>  <td>Detail</td>  <td>Required</td>  <td>See for details on <a href='http://www.benchmarkemail.com/models.htm#EmailData'>EmailData</a>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Email</td><td><a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a></td><td>Array</td></tr>  <tr><td>Errors</td><td><a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a></td><td>Array</td></tr>  </tbody>  </table>
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
 * Create email content for an Automation  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>{{AutomationID}}</td>  <td>Required</td>  <td>Automation ID</a>  </tr>  <tr>  <td>{{AutomationDetailID}}</td>  <td>Required</td>  <td>Automation Email ID</a>  </tr>  </tbody>  </table>  <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Type</th>  </tr>  </thead>  <tbody>  <tr>  <td>Detail</td>  <td>Required</td>  <td>See for details on <a href='http://www.benchmarkemail.com/models.htm#EmailData'>EmailData</a>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Email</td><td><a href='http://www.benchmarkemail.com/models.htm#AutomationEmailData'>AutomationEmailData</a></td><td>Array</td></tr>  <tr><td>Errors</td><td><a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a></td><td>Array</td></tr>  </tbody>  </table>
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
 * Create an Automation  <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Type</th>  </tr>  </thead>  <tbody>  <tr>  <td>Detail</td>  <td>Required</td>  <td>See for details on <a href= 'http://www.benchmarkemail.com/models.htm#AutomationDetailData'>AutomationDetailData</a></td>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Data</td><td><a href='http://www.benchmarkemail.com/models.htm#AutomationDetailData'>AutomationDetailData</a></td><td>Array</td></tr>  <tr><td>Errors</td><td><a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a></td><td>Array</td></tr>  </tbody>  </table>
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

