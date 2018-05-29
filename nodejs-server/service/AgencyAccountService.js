'use strict';


/**
 * Delete Link Account
 * <h4>Delete Link Account</h4> <b>Query string parameters :</b> None  <b>Request Body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Link Account ID</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>     <tr>       <td>Errors</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>   </tbody> </table>
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
 * <h4>Get Link Account Details</h4> <b>Query string parameters :</b> None  <b>Request Body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Link Account ID</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>string</td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientLinkAccountDetail\" >LinkAccountDetail</a></td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>     <tr>       <td>Errors</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>   </tbody> </table>
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
 * <h4>Update Link Account</h4> <b>Query string parameters :</b> None <br>  <b>Request Body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Link Account ID</td>     </tr>     <tr>       <td>Login</td>       <td>Required</td>       <td>string</td>       <td>Login ID</td>     </tr>     <tr>       <td>Password</td>       <td>Required</td>       <td>string</td>       <td>From Email  Address</td>     </tr>     <tr>       <td>Alias</td>       <td>Required</td>       <td>string</td>       <td>From Name</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>string</td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientLinkAccountDetail\" >LinkAccountDetail</a></td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Errors</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
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
 * <h4>Get list of link accounts</h4> <b>Query string parameters :</b> None <br>  <b>Request Body parameters:</b> None <br>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>string</td>       <td>Number of link accounts </td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientLinkAccountDetail\" >LinkAccountDetail</a></td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Errors</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
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
 * <h4>Link Account</h4> <b>Query string parameters :</b> None <br>  <b>Request Body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Login</td>       <td>Required</td>       <td>string</td>       <td>Login ID</td>     </tr>     <tr>       <td>Password</td>       <td>Required</td>       <td>string</td>       <td>From Email  Address</td>     </tr>     <tr>       <td>Alias</td>       <td>Required</td>       <td>string</td>       <td>From Name</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>string</td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientLinkAccountDetail\" >LinkAccountDetail</a></td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Errors</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
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

