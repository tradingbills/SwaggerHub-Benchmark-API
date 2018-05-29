'use strict';


/**
 * Get download segment data
 * <h4>Get download segment data</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>IDs of the segment</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 error</td></tr>  <tr><td>SegmentName</td><td>string</td><td>Name of segment</td></tr>  <tr><td>SegmentDescription</td><td>string</td><td>Segment Description</td></tr>  <tr><td>ContactMasterID</td><td>string</td><td>List ID</td></tr>  <tr><td>Error</td><td>ErrorData</td><td>Array of errors</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>HasPin</td><td>int</td><td>1=Has Security Pin </td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactSegmentDownloadData\">SegmentDownloadData</a></td><td>Array of segment download data</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetDownloadSegmentData
 **/
exports.contactSegmentDownloadByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ContactMasterID" : "14614074",
    "Count" : 1,
    "Data" : [ {
      "FieldLabel" : "Email",
      "FieldName" : "email",
      "Sequance" : 1
    }, {
      "FieldLabel" : "Email Type",
      "FieldName" : "emailtype",
      "Sequance" : 2
    }, {
      "FieldLabel" : "First Name",
      "FieldName" : "firstname",
      "Sequance" : 3
    }, {
      "FieldLabel" : "Middle Name",
      "FieldName" : "middlename",
      "Sequance" : 4
    }, {
      "FieldLabel" : " Last Name",
      "FieldName" : "lastname",
      "Sequance" : 5
    }, {
      "FieldLabel" : "Address",
      "FieldName" : "field_1_name",
      "Sequance" : 1
    }, {
      "FieldLabel" : "City",
      "FieldName" : "field_2_name",
      "Sequance" : 2
    }, {
      "FieldLabel" : "State",
      "FieldName" : "field_3_name",
      "Sequance" : 3
    }, {
      "FieldLabel" : "Zip",
      "FieldName" : "field_4_name",
      "Sequance" : 4
    }, {
      "FieldLabel" : "Country",
      "FieldName" : "field_5_name",
      "Sequance" : 5
    }, {
      "FieldLabel" : "Phone",
      "FieldName" : "field_6_name",
      "Sequance" : 6
    }, {
      "FieldLabel" : "Fax",
      "FieldName" : "field_7_name",
      "Sequance" : 7
    }, {
      "FieldLabel" : "Cell Phone",
      "FieldName" : "field_8_name",
      "Sequance" : 8
    }, {
      "FieldLabel" : "Company Name",
      "FieldName" : "field_9_name",
      "Sequance" : 9
    }, {
      "FieldLabel" : "Job Title",
      "FieldName" : "field_10_name",
      "Sequance" : 10
    }, {
      "FieldLabel" : "Business Phone",
      "FieldName" : "field_11_name",
      "Sequance" : 11
    }, {
      "FieldLabel" : "Business Fax",
      "FieldName" : "field_12_name",
      "Sequance" : 12
    }, {
      "FieldLabel" : "Business Address",
      "FieldName" : "field_13_name",
      "Sequance" : 13
    }, {
      "FieldLabel" : "Business City",
      "FieldName" : "field_14_name",
      "Sequance" : 14
    }, {
      "FieldLabel" : "Business State",
      "FieldName" : "field_15_name",
      "Sequance" : 15
    }, {
      "FieldLabel" : "Business Zip",
      "FieldName" : "field_16_name",
      "Sequance" : 16
    }, {
      "FieldLabel" : "Business Country",
      "FieldName" : "field_17_name",
      "Sequance" : 17
    }, {
      "FieldLabel" : "Notes",
      "FieldName" : "field_18_name",
      "Sequance" : 18
    }, {
      "FieldLabel" : "Date 1",
      "FieldName" : "field_19_name",
      "Sequance" : 19
    }, {
      "FieldLabel" : "Date 2",
      "FieldName" : "field_20_name",
      "Sequance" : 20
    }, {
      "FieldLabel" : "Extra 3",
      "FieldName" : "field_21_name",
      "Sequance" : 21
    }, {
      "FieldLabel" : "Extra 4",
      "FieldName" : "field_22_name",
      "Sequance" : 22
    }, {
      "FieldLabel" : "Extra 5",
      "FieldName" : "field_23_name",
      "Sequance" : 23
    }, {
      "FieldLabel" : "Extra 6",
      "FieldName" : "field_24_name",
      "Sequance" : 24
    } ],
    "Error" : [ ],
    "HasPin" : 0,
    "SegmentDescription" : "Segment based on Contact List \"Test List 4000\"",
    "SegmentName" : "Test List 4000 - Segment",
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
 * Get Segment List
 * <h4>Get Segment List</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ListID}}</td><td>required</td><td>string</td><td>ID of the list</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactRecord\">ContactRecord</a></td><td>Segment Data</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns GetSegmentList
 **/
exports.contactSegmentListsByListIDGet = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "ContactCount" : 0,
      "CreatedDate" : "",
      "ID" : "196587",
      "Name" : "Test List 4000 - Segment",
      "Status" : ""
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


/**
 * Creating segment from contact IDs
 * <h4>Creates segment from contact IDs</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ListID}}</td><td>required</td><td>ID of the list</td></tr>  </tbody>  </table>    <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>ContactIDs</td><td>required</td><td>IDs of the contacts to be inserted</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Data</td><td>string</td><td>Segment ID</td></tr>  </tbody>  </table>
 *
 * body CreatingSegmentFromContactIdsrequest 
 * authToken String 
 * contentType String 
 * listID String 
 * returns CreatingSegmentFromContactIds
 **/
exports.contactSegmentsByListIDPost = function(body,authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : "224640",
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
 * Delete Segment
 * <h4>Deletes an existing segment</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>required</td><td>{{SegmentID}}</td><td>string</td><td>ID of the segment</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Array of error</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * segmentID String 
 * returns DeleteSegment
 **/
exports.contactSegmentsBySegmentIDDelete = function(authToken,contentType,segmentID) {
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
 * Get segment by ID
 * <h4>Get an existing segment by ID</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{SegmentID}}</td><td>required</td><td>string</td><td>ID of the segment</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total Count</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactSegmentsRecord\">SegmentsRecord</a></td><td>Errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * segmentID String 
 * returns GetSegmentById
 **/
exports.contactSegmentsBySegmentIDGet = function(authToken,contentType,segmentID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "ClientID" : "<client-id>",
      "ContactCount" : 1098,
      "ContactMasterID" : "14614074",
      "CreatedDate" : "Mar 25 2017, 10:21 AM",
      "Criteria" : [ {
        "ConditionText" : "\"starts test\"",
        "FieldText" : "Email",
        "FieldType" : "0",
        "ID" : "2495108"
      } ],
      "Description" : "Segment based on Contact List Test List 4000",
      "ID" : "196587",
      "ListName" : "Test List 4000",
      "ModifiedDate" : "Oct 12 2017, 01:55 PM",
      "Name" : "Test List 4000 - Segment"
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
 * Update Segment
 * <h4>Update Segment</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{SegmentID}}</td><td>required</td><td>string</td><td>ID of the segment</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Data</td><td>optional</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactSegmentMasterDataRecord\">SegmentMasterDataRecord</a></td><td>Degment related data</td></tr>  </tbody>  </table>
 *
 * body UpdateSegmentrequest 
 * authToken String 
 * contentType String 
 * segmentID String 
 * returns UpdateSegment
 **/
exports.contactSegmentsBySegmentIDPatch = function(body,authToken,contentType,segmentID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "ContactMasterID" : "14614074",
      "Description" : "Segment based on Contact List \"Test List 4000\"",
      "ID" : "196587",
      "Name" : "Test List 4000 - Segment"
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
 * Delete the Segment Criteria
 * <h4>Delete Segment</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{SegmentID}}</td><td>required</td><td>string</td><td>ID of the segment</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>ErrorData</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Error Code</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * segmentID String 
 * returns DeleteTheSegmentCriteria
 **/
exports.contactSegmentsCriteriaBySegmentIDDelete = function(authToken,contentType,segmentID) {
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
 * Create Criteria
 * <h4>Create a new Segments Criteria</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{SegmentID}}</td><td>required</td><td>string</td><td>ID of the segment</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Criteria</td><td>required</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactSegmentMasterDataRecord\">SegmentMasterDataRecord</a></td><td>  Criteria  eg.  [{\"field\": \"Email\",\"fieldtype\": \"0\",\"condition\": [\"starts san\"]}]  </td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Title</td><td>string</td><td> </td></tr>  <tr><td>Detail</td><td>string</td><td></td></tr>  <tr><td>ErrorData</td><td>string</td><td>Error Code</td></tr>  </tbody>  </table>
 *
 * body CreateCriteriarequest 
 * authToken String 
 * contentType String 
 * segmentID String 
 * returns CreateCriteria
 **/
exports.contactSegmentsCriteriaBySegmentIDPost = function(body,authToken,contentType,segmentID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Detail" : "",
    "ErrorCode" : "",
    "Status" : "1",
    "Title" : ""
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
 * Getting a list of segments
 * <h4>Get Segments</h4>      <h4>Query String parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>PageNumber</td><td>optional</td><td>int </td><td>Page Number</td></tr>  <tr><td>PageSize</td><td>required</td><td>int </td><td>Number of rows on the page</td></tr>  <tr><td>Filter</td><td>required</td><td>string </td><td>Filter value</td></tr>  <tr><td>OrderBy</td><td>required</td><td>string </td><td>Order By Column (<code>Name</code> / <code>date</code>)</td></tr>  <tr><td>SortOrder</td><td>required</td><td>string </td><td><code>ASC</code> or <code>DESC</code></td></tr>  </tbody>  </table>      <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total Count</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactSegmentsRecord\">SegmentsRecord</a></td><td>Errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns GettingAListOfSegments
 **/
exports.contactSegmentsGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 5,
    "Data" : [ {
      "ContactCount" : 2,
      "Description" : "Segment based on Contact List  \"Boolean Signup Form Test List\"",
      "ID" : "201973",
      "ListName" : "Boolean Signup Form Test List",
      "Name" : "Boolean Signup Form Test List - Segment"
    }, {
      "ContactCount" : 2,
      "Description" : "Segment based on Contact List \"Cybermax BME All\"",
      "ID" : "196588",
      "ListName" : "Cybermax BME All",
      "Name" : "Cybermax BME All - Segment"
    }, {
      "ContactCount" : 1098,
      "Description" : "Segment based on Contact List Test List 4000",
      "ID" : "196587",
      "ListName" : "Test List 4000",
      "Name" : "Test List 4000 - Segment"
    }, {
      "ContactCount" : 0,
      "Description" : "Segment based on Contact List  \"Test Segment List\"",
      "ID" : "165054",
      "ListName" : "Test Segment List",
      "Name" : "Test Segment List - Segment"
    }, {
      "ContactCount" : 2,
      "Description" : "Segment based on Contact List  \"Sample Contact List\"",
      "ID" : "131593",
      "ListName" : "Sample Contact List",
      "Name" : "Mohit Segment"
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


/**
 * Get Segment Auto Generate Name
 * <h4>Get Segment Auto Generate Name</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ListID}}</td><td>required</td><td>string</td><td>ID of the list</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Data</td><td>String</td><td>Segment Name</td></tr>  <tr><td>ErrorData</td><td>String</td><td>Error Code</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * listID String 
 * returns GetSegmentAutoGenerateName
 **/
exports.contactSegmentsNameByListIDGet = function(authToken,contentType,listID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : "Targeted EMailing List Modified - Segment",
    "ErrorCode" : "",
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
 * Get Segment Details
 * <h4>Get Segment Details</h4> <h4>URL Parameters</h4> <table> <thead> <tr> <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr> </thead> <tbody> <tr><td>{{SegmentID}}</td><td>required</td><td>string</td><td>ID of the segment</td></tr> </tbody> </table>  <h4>Query String Parameters</h4> <table> <thead> <tr> <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr> </thead> <tbody> <tr><td>PageNumber</td><td>optional</td><td>int</td><td>Page Number</td></tr> <tr><td>PageSize</td><td>optional</td><td>int</td><td>Number of rows on the page</td></tr> <tr><td>OrderBy</td><td>optional</td><td>string</td><td>Order By column like email,date</td></tr> <tr><td>SortOrder</td><td>optional</td><td>String </td><td>ASC or DESC</td></tr> <tr><td>SearchFilter</td><td>optional</td><td>string</td><td>Filter value</td></tr> <tr><td>SearchType</td><td>optional</td><td>string</td><td> 1 - starts with<br /> 2 - is exactly equal to<br /> 3 - contains<br /> 4 - ends with</td></tr> <tr><td>SearchField</td><td>optional</td><td>String</td><td>Email Name</td></tr>  </tbody> </table>  <h4>Response body parameters</h4> <table> <thead> <tr> <th>Key</th><th>Type</th><th>Description</th></tr> </thead> <tbody> <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr> <tr><td>Count</td><td>int</td><td>Total Count</td></tr> <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ContactSegmentDetailsRecord\">SegmentDetailsRecord</a></td><td>Array of Data</td></tr> </tbody> </table>
 *
 * pageNumber String 
 * pageSize Integer 
 * orderBy String 
 * sortOrder String 
 * searchFilter String 
 * searchType String 
 * searchField String 
 * authToken String 
 * contentType String 
 * segmentID String 
 * returns GetSegmentDetails
 **/
exports.contactSegmentsSegmentDetailsBySegmentIDGet = function(pageNumber,pageSize,orderBy,sortOrder,searchFilter,searchType,searchField,authToken,contentType,segmentID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1098,
    "Data" : [ {
      "ContactMasterID" : "14614074",
      "Email" : "test@cybermaxsolutions.com",
      "ID" : "1761801439",
      "ModifiedDate" : "Mar 11, 2017"
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

