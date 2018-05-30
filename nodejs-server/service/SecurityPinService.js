'use strict';


/**
 * Disable Security PIN
 * Disable Security PIN  Body Parameters (to be encoded as a JSON string)        Key  Required  Description          DisableOldPIN  Required  Old PIN        Response Body Parameters :                    Parameter        Type        Description                            retVal        string        return Value                    Error        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error                    Status        string        1 = Successful, -1 Error            
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
 * Send PIN via email incase you forgot  Response Body Parameters :                    Parameter        Type        Description                            retVal        string        return Value                    Error        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error                    Status        string        1 = Successful, -1 Error            
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
 * Save Security PIN  Body Parameters (to be encoded as a JSON string)        Key  Required  Description          NewPIN  Required  New PIN      ConfirmNewPIN  Required  Confirm New PIN        Response Body Parameters :                    Parameter        Type        Description                            Message        string                              Success        string                            FinalString        string                            Error        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error                    Status        string        1 = Successful, -1 Error            
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
 * Change Security PIN  Body Parameters (to be encoded as a JSON string)        Key  Required  Description          ResetPIN  Required  New PIN      ResetConfirmPIN  Required  Confirm New PIN      ResetOldPIN  Required  Current PIN        Response Body Parameters :                    Parameter        Type        Description                            retVal        string        return Value                    Error        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error                    Status        string        1 = Successful, -1 Error            
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

