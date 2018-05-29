'use strict';


/**
 * Disable Security PIN
 * <h4>Disable Security PIN</h4> <b>Body Parameters (to be encoded as a JSON string)</b> <table> <thead> <tr> <th>Key</th> <th>Required</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>DisableOldPIN</td> <td>Required</td> <td>Old PIN</td> </tr> </tbody> </table> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>retVal</td>       <td>string</td>       <td>return Value</td>     </tr>     <tr>       <td>Error</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * body DisableSecurityPinrequest 
 * authToken String 
 * contentType String 
 * returns DisableSecurityPin
 **/
exports.clientPINDisablePost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "Status" : "1",
    "retVal" : ""
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
 * Send PIN via email incase you forgot
 * <h4>Send PIN via email incase you forgot</h4> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>retVal</td>       <td>string</td>       <td>return Value</td>     </tr>     <tr>       <td>Error</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns SendPinViaEmailIncaseYouForgot
 **/
exports.clientPINEmailPost = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "Status" : "1",
    "retVal" : "1"
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
 * Save Security PIN
 * <h4>Save Security PIN</h4> <b>Body Parameters (to be encoded as a JSON string)</b> <table> <thead> <tr> <th>Key</th> <th>Required</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>NewPIN</td> <td>Required</td> <td>New PIN</td> </tr> <tr> <td>ConfirmNewPIN</td> <td>Required</td> <td>Confirm New PIN</td> </tr> </tbody> </table> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Message</td>       <td>string</td>       <td></td>     </tr>       <tr>       <td>Success</td>       <td>string</td>       <td></td>     </tr>     <tr>       <td>FinalString</td>       <td>string</td>       <td></td>     </tr>     <tr>       <td>Error</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * body SaveSecurityPinrequest 
 * authToken String 
 * contentType String 
 * returns SaveSecurityPin
 **/
exports.clientPINPatch = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "FinalString" : "",
    "Message" : "",
    "Status" : "1",
    "Success" : ""
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
 * Change Security PIN
 * <h4>Change Security PIN</h4> <b>Body Parameters (to be encoded as a JSON string)</b> <table> <thead> <tr> <th>Key</th> <th>Required</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>ResetPIN</td> <td>Required</td> <td>New PIN</td> </tr> <tr> <td>ResetConfirmPIN</td> <td>Required</td> <td>Confirm New PIN</td> </tr> <tr> <td>ResetOldPIN</td> <td>Required</td> <td>Current PIN</td> </tr> </tbody> </table> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>retVal</td>       <td>string</td>       <td>return Value</td>     </tr>     <tr>       <td>Error</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * body ChangeSecurityPinrequest 
 * authToken String 
 * contentType String 
 * returns ChangeSecurityPin
 **/
exports.clientPINPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ],
    "Status" : "1",
    "retVal" : "1"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

