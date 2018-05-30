'use strict';


/**
 * Changing list compilation details
 * Changes file upload compilation   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list            Body Parameters (to be encoded as a JSON string)            KeyRequiredTypeDescription         Descriptionrequiredstring Description   LastTimeUsedrequiredstringDetails about when list was Last Time Used (select from drop down)   SourceoptionalstringSource URL ( If your list comes from a subscription box or Signup Form on your website, enter the URL here.)   FileNameoptionalstringFile Name            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Array of error      
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
 * Update Contact   URL Parameters            KeyRequiredTypeDescription      <tbody   {{ListID}}requiredstringID of the list   {{ContactID}}requiredstringID of the contact            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         Datarequired<a href=\"http://www.benchmarkemail.com/models.htm#ContactDetailRecord\">ContactDetailRecord</a>Contact related data            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactDetailRecord\">ContactDetailRecord</a>Contact Data   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error Data      
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
 * Add Contact   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         Datarequired<a href=\"http://www.benchmarkemail.com/models.htm#ContactDetailRecord\">ContactDetailRecord</a>Email Addresses            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactDetailRecord\">ContactDetailRecord</a>Data   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors      
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
 * Save email address    URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         EmailIDsrequiredstringEmail Addresses            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   MessagestringMessage containing filename,listID etc   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error Data   CountstringTotal Found   TotalAddedstringTotal contacts added      
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
 * Save email address which are not verified and uploaded      URL parameters            KeyRequiredTypeDescription         ListIDrequiredstringID of the list            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         DatarequiredStreamFile Data            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   MessagestringMessage containing filename,listID etc   Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Array of errors   CountstringTotal Found   TotalAddedstringTotal contacts added      
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
 * Save email address which is verified and uploaded      URL parameters            KeyRequiredTypeDescription         ListIDrequiredstringID of the list            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         DatarequiredStreamFile Data            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   MessagestringMessage containing filename,listID etc   Error<a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a>Array of errors   CountstringTotal Found   TotalAddedstringTotal contacts added      
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
 * Save email address which verified   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list            Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         EmailIDsrequiredstringEmail Addresses            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   MessagestringMessage containing filename,listID etc   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Error Data   CountstringTotal Found   TotalAddedstringTotal contact added      
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
 * Gets the mapping of the uploaded list against its fields      URL Parameters            Key   Required   Description               {{ListID}}   required   ID of the list         {{FileName}}   required   Name of the file               Response body parameters            Key   Type   Description            Statusstring1 if successful, -1 if error   CountintTotal Count   ColumnCountintColumn Count    EmailFieldColintEmail field column number   IsvalidFileboolTrue / False   Header<a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterFileUploadSingleRow\">ContactMasterFileUploadSingleRow</a>Array of Header   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterFileUploadSingleRow\">ContactMasterFileUploadSingleRow</a>Array of Data   Mapping<a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterFileUploadSingleRow\">ContactMasterFileUploadSingleRow</a>Array of Mapping   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Array of error      
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
 * Changes file mapping   URL Parameters            KeyRequiredTypeDescription         {{ListID}}requiredstringID of the list            Body Parameters (to be encoded as a JSON string)            KeyRequiredTypeDescription         FileNamerequiredstringFile name   OriginalFileNamerequiredstringOriginal File Name   Modeoptionalstring   LoginoptionalstringLogin / username   TokenoptionalstringToken   Datarequired<a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterFileUploadSingleRow\">ContactMasterFileUploadSingleRow</a>Array of Data e.g., [\"email\", \"firstname\"]            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Array of error      
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
 * Create List      Body Parameters (To be passed as a JSON string)            KeyRequiredTypeDescription         Datarequired<a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterRecord\">ContactMasterRecord</a>List Details            Response body parameters            KeyTypeDescription         Statusstring1 if successful, -1 if error   Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Errors   Data<a href=\"http://www.benchmarkemail.com/models.htm#ContactMasterRecord\">ContactMasterRecord</a>List Details      
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

