'use strict';


/**
 * Get Details for the AB Test
 * Get Details for the AB Split   URL parameter :                   Parameter         Type         Description                       ID         string         ABSplit ID                 Response body parameters:                     Parameter         Type         Description                       Status         string         1 if successful, -1 if error                       Error         <a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a>         Return error message                       Data         <a href='http://www.benchmarkemail.com/models.htm#ABSplitMasterVariableData'>ABSplitMasterVariableData</a>         Return AB data            
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetDetailsForTheAbSplit
 **/
exports.aBSplitByIDGet = function(authToken,contentType,iD) {
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
 * Update the AB Test
 * Update AB split   URL parameters:           Parameter     Type     Description           ID     string     ABSplit ID         Body Parameters (to be encoded as a JSON string)            Key   Required   Description               Name   Required   Name of AB test         Type   Required   Test type (like 1,2,3,4) <code>1.From Name / Subject Line Test</code> <code>2.Campaign vs. Campaign Test</code> <code>3.Multiple Variable Test</code> <code>4.Delivery Time Test</code>         Count   Required   Count of variants either 2 or 3      VariablesArray<a href=\"http://www.benchmarkemail.com/models.htm#ABSplitVariableData\">ABSplitVariableData</a>   IncludeListArray<a href=\"http://www.benchmarkemail.com/models.htm#ABSplitListData\">ABSplitListData</a>   ExcludeListArray<a href=\"http://www.benchmarkemail.com/models.htm#ABSplitListData\">ABSplitListData</a>   RulesArray<a href=\"http://www.benchmarkemail.com/models.htm#ABSplitMasterRulesData\">ABSplitMasterRulesData</a>      Percent   Required   Percent            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   ErrorArray<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>   IDStringABSplit ID   DetailString      
 *
 * body UpdateTheAbTestrequest 
 * authToken String 
 * contentType String 
 * iD String 
 * returns UpdateTheAbsplit
 **/
exports.aBSplitByIDPatch = function(body,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Detail" : "",
    "Error" : [ ],
    "ID" : "40979",
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
 * Create AB Test
 * Create AB split   Body Parameters (to be encoded as a JSON string)            Key   Required   Description               Name   Required   Name of AB test         Type   Required   Test type (like 1,2,3,4) <code>1.From Name / Subject Line Test</code> <code>2.Campaign vs. Campaign Test</code> <code>3.Multiple Variable Test</code> <code>4.Delivery Time Test</code>         Count   Required   Count of variants either 2 or 3         Percent   Required   Percent      VariablesArray<a href=\"http://www.benchmarkemail.com/models.htm#ABSplitVariableData\">ABSplitVariableData</a>   IncludeListArray<a href=\"http://www.benchmarkemail.com/models.htm#ABSplitListData\">ABSplitListData</a>   ExcludeListArray<a href=\"http://www.benchmarkemail.com/models.htm#ABSplitListData\">ABSplitListData</a>   RulesArray<a href=\"http://www.benchmarkemail.com/models.htm#ABSplitMasterRulesData\">ABSplitMasterRulesData</a>         Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   Error<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Array   IDStringABSplit ID   DetailString      
 *
 * body CreateAbTestrequest 
 * authToken String 
 * contentType String 
 * returns CreateAbSplit
 **/
exports.aBSplitPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Detail" : "",
    "Error" : [ ],
    "ID" : "40979",
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

