'use strict';


/**
 * Delete the selected contacts from current lists
 * <h4>Delete the selected contacts from current lists </h4>  <h4>Request body  parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Search</td><td>required</td><td>string</td><td>Search value like email address</td></tr>  <tr><td>Filter</td><td>required</td><td>string</td><td>Filter value</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ListID}}</td><td>optional</td><td>string</td><td>ID of the list</td></tr>  <tr><td>{{ContactID}}</td><td>optional</td><td>string</td><td>ID of the contact</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Errors</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Error Data</td></tr>  </tbody>  </table>
 *
 * search String 
 * filter String 
 * body DeleteTheSelectedContactsFromCurrentListsrequest 
 * authToken String 
 * contentType String 
 * returns DeleteTheSelectedContactsFromCurrentLists
 **/
exports.contactContactDetailsDelete = function(search,filter,body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Error" : [ ],
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
 * Search Contacts
 * <h4>Search Contacts</h4>  <h4>Query String parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>SearchFilter</td><td>optional</td><td>string </td><td>Search Filter</td></tr>  <tr><td>Search</td><td>required</td><td>string </td><td>Email Address you want to search</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactSearchRecord\">ContactSearchRecord</a></td><td>Data</td></tr>  <tr><td>Count</td><td>int</td><td>Total count</td></tr>  </tbody>  </table>
 *
 * searchFilter String EQ equals OR EB starts with
 * search String email address to search for
 * authToken String 
 * contentType String application/json
 * returns SearchContacts
 **/
exports.contactContactDetailsGet = function(searchFilter,search,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 4,
    "Data" : [ {
      "ContactMasterID" : "15112393",
      "Email" : "test02@cybermaxsolutions.com",
      "FirstName" : "Test2",
      "ID" : "1950474841",
      "IsMasterUnsubScribe" : 0,
      "LastName" : "Test2",
      "ListName" : "Benchmark Tech Support Test List"
    }, {
      "ContactMasterID" : "15242968",
      "Email" : "test02@cybermaxsolutions.com",
      "FirstName" : "",
      "ID" : "2039133647",
      "IsMasterUnsubScribe" : 0,
      "LastName" : "",
      "ListName" : "Targeted EMailing List Modified"
    }, {
      "ContactMasterID" : "15257848",
      "Email" : "test02@cybermaxsolutions.com",
      "FirstName" : "",
      "ID" : "2039912369",
      "IsMasterUnsubScribe" : 0,
      "LastName" : "",
      "ListName" : "Test Source List"
    }, {
      "ContactMasterID" : "15257899",
      "Email" : "test02@cybermaxsolutions.com",
      "FirstName" : "",
      "ID" : "2040815886",
      "IsMasterUnsubScribe" : 0,
      "LastName" : "",
      "ListName" : "New Target List"
    } ],
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

