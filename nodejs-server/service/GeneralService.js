'use strict';


/**
 * Get Export List
 * Export List    <h4>Query String Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>ReportFor</td>  <td>optional</td>  <td><ul><li><code>1</code> - Clicks</li><li><code>2</code> - Forwards</li><li><code>3</code> - Bounces</li><li><code>5</code> - Unsubscribe</li><li><code>6</code> - Opens</li><li><code>7</code> - Unopens</li><li><code>8</code> – Clicks For url</li><li><code>11</code> - Individual Survey</li><li><code>12</code> - Opens State Wise</li></ul></td>  </tr>  <tr><td>EmailID</td><td>optional</td><td>Unique ID (i.e Campaign ID)</td></tr>  <tr>  <td>IsOverWrite</td>  <td>optional</td>  <td><ul><li><code>1</code> - OverWrite if List Exists</li><li><code>0</code> - Don't Over Write if List Exists (It will stop process if list found with the same name)</li></td>  </tr>  </ul>  <tr><td>LinkName</td><td>optional</td><td>Name of link</td></tr>  <tr>  <td>Filter</td>  <td>optional</td>  <td><ul><li><code>1</code> - Soft Bounces</li><li><code>2</code> - Hard Bounces</li></ul></td>  </tr>  <tr><td>Region</td><td>optional</td><td>Region or  State</td></tr>    </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>ReportTypeText</td><td>string</td><td>Returns the report type like bounces,SURVEY RESPONDENTS,OPENS etc</td></tr>  <tr><td>ListName</td><td>string</td><td>List Name</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns GetExportList
 **/
exports.contactExportToListGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ListName" : "Unopened Report : Oct 06 2017 Email 1",
    "ReportTypeText" : "UNOPENS",
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

