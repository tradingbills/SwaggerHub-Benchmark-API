'use strict';


/**
 * Get Export List
 * Export List    Query String Parameters        Key  Required  Description          ReportFor  optional  <ul><li><code>1</code> - Clicks</li><li><code>2</code> - Forwards</li><li><code>3</code> - Bounces</li><li><code>5</code> - Unsubscribe</li><li><code>6</code> - Opens</li><li><code>7</code> - Unopens</li><li><code>8</code> – Clicks For url</li><li><code>11</code> - Individual Survey</li><li><code>12</code> - Opens State Wise</li></ul>    EmailIDoptionalUnique ID (i.e Campaign ID)    IsOverWrite  optional  <ul><li><code>1</code> - OverWrite if List Exists</li><li><code>0</code> - Don't Over Write if List Exists (It will stop process if list found with the same name)</li>    </ul>  LinkNameoptionalName of link    Filter  optional  <ul><li><code>1</code> - Soft Bounces</li><li><code>2</code> - Hard Bounces</li></ul>    RegionoptionalRegion or  State          Response body parameters        KeyTypeDescription      Statusstring1 if successful, -1 if error  ReportTypeTextstringReturns the report type like bounces,SURVEY RESPONDENTS,OPENS etc  ListNamestringList Name    
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

