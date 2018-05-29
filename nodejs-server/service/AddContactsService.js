'use strict';


/**
 * Changing list compilation details
 * <h4>Changes file upload compilation</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ListID}}</td><td>required</td><td>string</td><td>ID of the list</td></tr>  </tbody>  </table>    <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Description</td><td>required</td><td>string </td><td>Description</td></tr>  <tr><td>LastTimeUsed</td><td>required</td><td>string</td><td>Details about when list was Last Time Used (select from drop down)</td></tr>  <tr><td>Source</td><td>optional</td><td>string</td><td>Source URL ( If your list comes from a subscription box or Signup Form on your website, enter the URL here.)</td></tr>  <tr><td>FileName</td><td>optional</td><td>string</td><td>File Name</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Errors</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Array of error</td></tr>  </tbody>  </table>
 *
 * body ChangingListCompilationDetailsrequest 
 * authToken String 
 * contentType String 
 * listID String 
 * returns ChangingListCompilationDetails
 **/
exports.contactCompilationByListIDPatch = function(body,authToken,contentType,listID) {
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
 * Update Contact
 * <h4>Update Contact</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody  <tr><td>{{ListID}}</td><td>required</td><td>string</td><td>ID of the list</td></tr>  <tr><td>{{ContactID}}</td><td>required</td><td>string</td><td>ID of the contact</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Data</td><td>required</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactDetailRecord\">ContactDetailRecord</a></td><td>Contact related data</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactDetailRecord\">ContactDetailRecord</a></td><td>Contact Data</td></tr>  <tr><td>Errors</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Error Data</td></tr>  </tbody>  </table>
 *
 * body UpdateContactrequest 
 * authToken String 
 * contentType String 
 * listID String 
 * contactID String 
 * returns UpdateContact
 **/
exports.contactContactDetailsByListIDAndContactIDPatch = function(body,authToken,contentType,listID,contactID) {
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
 * Add Contact
 * <h4>Add Contact</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ListID}}</td><td>required</td><td>string</td><td>ID of the list</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Data</td><td>required</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactDetailRecord\">ContactDetailRecord</a></td><td>Email Addresses</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactDetailRecord\">ContactDetailRecord</a></td><td>Data</td></tr>  <tr><td>Errors</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Errors</td></tr>  </tbody>  </table>
 *
 * body AddContactrequest 
 * authToken String 
 * contentType String 
 * listID String 
 * returns AddContact
 **/
exports.contactContactDetailsByListIDPost = function(body,authToken,contentType,listID) {
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
 * Save email address
 * <h4>Save email address </h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ListID}}</td><td>required</td><td>string</td><td>ID of the list</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>EmailIDs</td><td>required</td><td>string</td><td>Email Addresses</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Message</td><td>string</td><td>Message containing filename,listID etc</td></tr>  <tr><td>Errors</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Error Data</td></tr>  <tr><td>Count</td><td>string</td><td>Total Found</td></tr>  <tr><td>TotalAdded</td><td>string</td><td>Total contacts added</td></tr>  </tbody>  </table>
 *
 * body SaveEmailAddressrequest 
 * authToken String 
 * contentType String 
 * listID String 
 * returns SaveEmailAddress
 **/
exports.contactContactDetailsCSVByListIDPost = function(body,authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : "12",
    "Errors" : [ ],
    "Message" : "Contacts successfully added. Add more contacts below.",
    "Status" : "1",
    "TotalAdded" : "1"
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
 * Save email address which are not verified and uploaded
 * <h4>Save email address which are not verified and uploaded</h4>    <h4>URL parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>ListID</td><td>required</td><td>string</td><td>ID of the list</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Data</td><td>required</td><td>Stream</td><td>File Data</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Message</td><td>string</td><td>Message containing filename,listID etc</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  <tr><td>Count</td><td>string</td><td>Total Found</td></tr>  <tr><td>TotalAdded</td><td>string</td><td>Total contacts added</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns SaveEmailAddressWhichIsOrininal(i.eNotVerified)AndUploaded
 **/
exports.contactContactDetailsCSVUploadByListIDPost = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : "2",
    "Errors" : [ ],
    "Message" : "contact_master_id=15283571&id=44n3j5zd.smi.csv&f=text.csv&m=0&of=text.csv&redir=",
    "Status" : "1",
    "TotalAdded" : "0"
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
 * Save email address which is verified and uploaded
 * <h4>Save email address which is verified and uploaded</h4>    <h4>URL parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>ListID</td><td>required</td><td>string</td><td>ID of the list</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Data</td><td>required</td><td>Stream</td><td>File Data</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Message</td><td>string</td><td>Message containing filename,listID etc</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  <tr><td>Count</td><td>string</td><td>Total Found</td></tr>  <tr><td>TotalAdded</td><td>string</td><td>Total contacts added</td></tr>  </tbody>  </table>
 *
 * data String 
 * authToken String 
 * contentType String 
 * iD String 
 * returns SaveEmailAddressWhichIsVerifiedAndUploaded
 **/
exports.contactContactDetailsCSVUploadVerifiedByIDPost = function(data,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : "2",
    "Errors" : [ ],
    "Message" : "contact_master_id=15283572&id=ulgmpcb0.ofx.csv&f=text.csv&m=0&of=text.csv&redir=",
    "Status" : "1",
    "TotalAdded" : "0"
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
 * Save email address which verified
 * <h4>Save email address which verified</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ListID}}</td><td>required</td><td>string</td><td>ID of the list</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>EmailIDs</td><td>required</td><td>string</td><td>Email Addresses</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Message</td><td>string</td><td>Message containing filename,listID etc</td></tr>  <tr><td>Errors</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Error Data</td></tr>  <tr><td>Count</td><td>string</td><td>Total Found</td></tr>  <tr><td>TotalAdded</td><td>string</td><td>Total contact added</td></tr>  </tbody>  </table>
 *
 * body SaveEmailAddressWhichVerifiedrequest 
 * authToken String 
 * contentType String 
 * listID String 
 * returns SaveEmailAddressWhichVerified
 **/
exports.contactContactDetailsCSVVerifiedByListIDPost = function(body,authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : "1",
    "Errors" : [ ],
    "Message" : "Contacts successfully added. Add more contacts below.",
    "Status" : "1",
    "TotalAdded" : "1"
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
 * Get list mapping
 * Gets the mapping of the uploaded list against its fields    <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>{{ListID}}</td>  <td>required</td>  <td>ID of the list</td>  </tr>  <tr>  <td>{{FileName}}</td>  <td>required</td>  <td>Name of the file</td>  </tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Type</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total Count</td></tr>  <tr><td>ColumnCount</td><td>int</td><td>Column Count </td></tr>  <tr><td>EmailFieldCol</td><td>int</td><td>Email field column number</td></tr>  <tr><td>IsvalidFile</td><td>bool</td><td>True / False</td></tr>  <tr><td>Header</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterFileUploadSingleRow\">ContactMasterFileUploadSingleRow</a></td><td>Array of Header</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterFileUploadSingleRow\">ContactMasterFileUploadSingleRow</a></td><td>Array of Data</td></tr>  <tr><td>Mapping</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterFileUploadSingleRow\">ContactMasterFileUploadSingleRow</a></td><td>Array of Mapping</td></tr>  <tr><td>Errors</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Array of error</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * listID String 
 * fileName String 
 * returns GetListMapping
 **/
exports.contactMappingByListIDAndFileNameGet = function(authToken,contentType,listID,fileName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ColumnCount" : 3,
    "Count" : 1,
    "Data" : [ {
      "Field" : [ "test@cybermaxsolutions.com", "Test", "Test" ]
    } ],
    "EmailFieldCol" : 0,
    "Errors" : [ ],
    "Header" : {
      "Field" : [ "Email Address", "First Name", "Last Name" ]
    },
    "IsvalidFile" : true,
    "Mapping" : {
      "Field" : [ "email", "firstname", "lastname" ]
    },
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
 * Change mapping
 * <h4>Changes file mapping</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ListID}}</td><td>required</td><td>string</td><td>ID of the list</td></tr>  </tbody>  </table>    <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>FileName</td><td>required</td><td>string</td><td>File name</td></tr>  <tr><td>OriginalFileName</td><td>required</td><td>string</td><td>Original File Name</td></tr>  <tr><td>Mode</td><td>optional</td><td>string</td><td></td></tr>  <tr><td>Login</td><td>optional</td><td>string</td><td>Login / username</td></tr>  <tr><td>Token</td><td>optional</td><td>string</td><td>Token</td></tr>  <tr><td>Data</td><td>required</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterFileUploadSingleRow\">ContactMasterFileUploadSingleRow</a></td><td>Array of Data e.g., [\"email\", \"firstname\"]</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Errors</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Array of error</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns ChangeMapping
 **/
exports.contactMappingByListIDPatch = function(authToken,contentType,listID) {
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
 * Create List
 * <h4>Create List</h4>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Data</td><td>required</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterRecord\">ContactMasterRecord</a></td><td>List Details</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Errors</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Errors</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterRecord\">ContactMasterRecord</a></td><td>List Details</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns CreateList
 **/
exports.contactPost = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "ActiveContactCount" : "0",
      "CreatedDateTime" : "Oct 20 2017, 03:29 PM",
      "Description" : "Rest API Creation 1",
      "Field10Name" : "Job Title",
      "Field10Type" : "1",
      "Field11Name" : "Business Phone",
      "Field11Type" : "1",
      "Field12Name" : "Business Fax",
      "Field12Type" : "1",
      "Field13Name" : "Business Address",
      "Field13Type" : "1",
      "Field14Name" : "Business City",
      "Field14Type" : "1",
      "Field15Name" : "Business State",
      "Field15Type" : "1",
      "Field16Name" : "Business Zip",
      "Field16Type" : "1",
      "Field17Name" : "Business Country",
      "Field17Type" : "1",
      "Field18Name" : "Notes",
      "Field18Type" : "1",
      "Field19Name" : "Date 1",
      "Field19Type" : "4",
      "Field1Name" : "Address",
      "Field1Type" : "1",
      "Field20Name" : "Date 2",
      "Field20Type" : "4",
      "Field21Name" : "Extra 3",
      "Field21Type" : "1",
      "Field22Name" : "Extra 4",
      "Field22Type" : "1",
      "Field23Name" : "Extra 5",
      "Field23Type" : "1",
      "Field24Name" : "Extra 6",
      "Field24Type" : "1",
      "Field2Name" : "City",
      "Field2Type" : "1",
      "Field3Name" : "State",
      "Field3Type" : "1",
      "Field4Name" : "Zip",
      "Field4Type" : "1",
      "Field5Name" : "Country",
      "Field5Type" : "1",
      "Field6Name" : "Phone",
      "Field6Type" : "1",
      "Field7Name" : "Fax",
      "Field7Type" : "1",
      "Field8Name" : "Cell Phone",
      "Field8Type" : "1",
      "Field9Name" : "Company Name",
      "Field9Type" : "1",
      "FirstnameLabel" : "First Name",
      "ID" : "15266225",
      "IsMasterUnsubscribe" : "0",
      "LastnameLabel" : "Last Name",
      "MiddlenameLabel" : "Middle Name",
      "Name" : "Rest API Creation 1"
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

