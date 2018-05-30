'use strict';


/**
 * Delete Link Account
 * Delete Link Account  Query string parameters : None    Request Body parameters:                    Parameter        Required        Type        Description                            ID        Required        string        Link Account ID                Response body parameters :                    Parameter        Type        Description                            Status        string        1 = Successful, -1 Error                    Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error            
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns DeleteLinkAccount
 **/
exports.clientLinkAccountByIDDelete = function(authToken,contentType,iD) {
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
 * Get Link Account Details
 * Get Link Account Details  Query string parameters : None    Request Body parameters:                    Parameter        Required        Type        Description                            ID        Required        string        Link Account ID                Response body parameters :                    Parameter        Type        Description                            Count        string                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientLinkAccountDetail\" >LinkAccountDetail</a>                            Status        string        1 = Successful, -1 Error                    Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error            
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetLinkAccountDetails
 **/
exports.clientLinkAccountByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : "",
    "Data" : {
      "AccountExpire" : "",
      "Alias" : "aditya",
      "ClientID" : "895479",
      "FirstName" : "Aditya",
      "ID" : "248",
      "LastName" : "Aditya",
      "Login" : "adityabme.bench@gmail.com",
      "MailSent" : "",
      "PlanName" : "List Plan 600",
      "Status" : "1"
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
 * Update Link Account
 * Update Link Account  Query string parameters : None      Request Body parameters:                    Parameter        Required        Type        Description                            ID        Required        string        Link Account ID                    Login        Required        string        Login ID                    Password        Required        string        From Email  Address                    Alias        Required        string        From Name                Response body parameters :                    Parameter        Type        Description                            Count        string                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientLinkAccountDetail\" >LinkAccountDetail</a>                            Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error                    Status        string        1 = Successful, -1 Error            
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns UpdateLinkAccount
 **/
exports.clientLinkAccountByIDPatch = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : "",
    "Data" : {
      "AccountExpire" : "",
      "Alias" : "KiranKolge",
      "ClientID" : "680133",
      "FirstName" : "kiran",
      "ID" : "255",
      "LastName" : "kiran",
      "Login" : "kiran@cybermaxsolutions.com",
      "MailSent" : "",
      "PlanName" : "List Plan 1,715,000",
      "Status" : "1"
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
 * Get list of link accounts
 * Get list of link accounts  Query string parameters : None      Request Body parameters: None      Response body parameters :                    Parameter        Type        Description                            Count        string        Number of link accounts                     Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientLinkAccountDetail\" >LinkAccountDetail</a>                            Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error                    Status        string        1 = Successful, -1 Error            
 *
 * authToken String 
 * contentType String 
 * returns GetListOfLinkAccounts
 **/
exports.clientLinkAccountGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : "1",
    "Data" : [ {
      "AccountExpire" : "Feb 17, 2022",
      "Alias" : "kirankolge",
      "ClientID" : "680133",
      "FirstName" : "kiran",
      "ID" : "252",
      "LastName" : "kolge",
      "Login" : "kiran@cybermaxsolutions.com",
      "MailSent" : "",
      "PlanName" : "List Plan 1,715,000",
      "Status" : "1"
    } ],
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
 * Link Account
 * Link Account  Query string parameters : None      Request Body parameters:                    Parameter        Required        Type        Description                            Login        Required        string        Login ID                    Password        Required        string        From Email  Address                    Alias        Required        string        From Name                Response body parameters :                    Parameter        Type        Description                            Count        string                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientLinkAccountDetail\" >LinkAccountDetail</a>                            Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error                    Status        string        1 = Successful, -1 Error            
 *
 * body LinkAccountrequest 
 * authToken String 
 * contentType String 
 * returns LinkAccount
 **/
exports.clientLinkAccountPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : "",
    "Data" : {
      "AccountExpire" : "",
      "Alias" : "kirankolge",
      "ClientID" : "680133",
      "FirstName" : "kiran",
      "ID" : "252",
      "LastName" : "kiran",
      "Login" : "kiran@cybermaxsolutions.com",
      "MailSent" : "",
      "PlanName" : "List Plan 1,715,000",
      "Status" : "1"
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

