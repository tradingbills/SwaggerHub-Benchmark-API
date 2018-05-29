'use strict';


/**
 * Get Details for the AB Test
 * Get Details for the AB Split  <h4>URL parameter :</h4>  <table>      <tr>        <th>Parameter</th>        <th>Type</th>        <th>Description</th>      </tr>      <tr>        <td>ID</td>        <td>string</td>        <td>ABSplit ID</td>      </tr>    </table>    <h4>Response body parameters:</h4>    <table>      <tr>        <th>Parameter</th>        <th>Type</th>        <th>Description</th>      </tr>      <tr>        <td>Status</td>        <td>string</td>        <td>1 if successful, -1 if error</td>      </tr>      <tr>        <td>Error</td>        <td><a href='http://www.benchmarkemail.com/models.htm#ErrorData'>ErrorData</a></td>        <td>Return error message</td>      </tr>      <tr>        <td>Data</td>        <td><a href='http://www.benchmarkemail.com/models.htm#ABSplitMasterVariableData'>ABSplitMasterVariableData</a></td>        <td>Return AB data</td>      </tr>    </table>
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
 * Update AB split  <h4>URL parameters:</h4>  <table>  <tr>    <th>Parameter</th>    <th>Type</th>    <th>Description</th>  </tr>  <tr>    <td>ID</td>    <td>string</td>    <td>ABSplit ID</td>  </tr>  </table>  <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>Name</td>  <td>Required</td>  <td>Name of AB test</td>  </tr>  <tr>  <td>Type</td>  <td>Required</td>  <td>Test type (like 1,2,3,4) <code>1.From Name / Subject Line Test</code> <code>2.Campaign vs. Campaign Test</code> <code>3.Multiple Variable Test</code> <code>4.Delivery Time Test</code></td>  </tr>  <tr>  <td>Count</td>  <td>Required</td>  <td>Count of variants either 2 or 3</td>  </tr>  <tr><td>Variables</td><td>Array</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ABSplitVariableData\">ABSplitVariableData</a></td></tr>  <tr><td>IncludeList</td><td>Array</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ABSplitListData\">ABSplitListData</a></td></tr>  <tr><td>ExcludeList</td><td>Array</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ABSplitListData\">ABSplitListData</a></td></tr>  <tr><td>Rules</td><td>Array</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ABSplitMasterRulesData\">ABSplitMasterRulesData</a></td></tr>  <tr>  <td>Percent</td>  <td>Required</td>  <td>Percent</td>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Error</td><td>Array</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td></tr>  <tr><td>ID</td><td>String</td><td>ABSplit ID</td></tr>  <tr><td>Detail</td><td>String</td><td></td></tr>  </tbody>  </table>
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
 * Create AB split  <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>Name</td>  <td>Required</td>  <td>Name of AB test</td>  </tr>  <tr>  <td>Type</td>  <td>Required</td>  <td>Test type (like 1,2,3,4) <code>1.From Name / Subject Line Test</code> <code>2.Campaign vs. Campaign Test</code> <code>3.Multiple Variable Test</code> <code>4.Delivery Time Test</code></td>  </tr>  <tr>  <td>Count</td>  <td>Required</td>  <td>Count of variants either 2 or 3</td>  </tr>  <tr>  <td>Percent</td>  <td>Required</td>  <td>Percent</td>  </tr>  <tr><td>Variables</td><td>Array</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ABSplitVariableData\">ABSplitVariableData</a></td></tr>  <tr><td>IncludeList</td><td>Array</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ABSplitListData\">ABSplitListData</a></td></tr>  <tr><td>ExcludeList</td><td>Array</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ABSplitListData\">ABSplitListData</a></td></tr>  <tr><td>Rules</td><td>Array</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ABSplitMasterRulesData\">ABSplitMasterRulesData</a></td></tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Array</td></tr>  <tr><td>ID</td><td>String</td><td>ABSplit ID</td></tr>  <tr><td>Detail</td><td>String</td><td></td></tr>  </tbody>  </table>
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

