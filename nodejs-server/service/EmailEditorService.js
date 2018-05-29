'use strict';


/**
 * Get Ebay Site List
 * <h4>Get Ebay Site List</h4> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientGenericList\">GenericList</a></td>       <td>Generic List</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GetEbaySiteList
 **/
exports.clientIntegrationsEbaySiteGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : [ {
      "ID" : "16",
      "Value" : "eBay Austria"
    }, {
      "ID" : "123",
      "Value" : "eBay Belgium (Dutch)"
    }, {
      "ID" : "15",
      "Value" : "eBay Australia"
    }, {
      "ID" : "101",
      "Value" : "eBay Italy"
    }, {
      "ID" : "201",
      "Value" : "eBay Hong Kong"
    }, {
      "ID" : "71",
      "Value" : "eBay France"
    }, {
      "ID" : "146",
      "Value" : "eBay Netherlands"
    }, {
      "ID" : "205",
      "Value" : "eBay Ireland"
    }, {
      "ID" : "186",
      "Value" : "eBay Spain"
    }, {
      "ID" : "216",
      "Value" : "eBay Singapore"
    }, {
      "ID" : "77",
      "Value" : "eBay Germany"
    }, {
      "ID" : "203",
      "Value" : "eBay India"
    }, {
      "ID" : "23",
      "Value" : "eBay Belgium (French)"
    }, {
      "ID" : "211",
      "Value" : "eBay Philippines"
    }, {
      "ID" : "210",
      "Value" : "eBay Canada (French)"
    }, {
      "ID" : "100",
      "Value" : "eBay Motors"
    }, {
      "ID" : "3",
      "Value" : "eBay UK"
    }, {
      "ID" : "207",
      "Value" : "eBay Malaysia"
    }, {
      "ID" : "212",
      "Value" : "eBay Poland"
    }, {
      "ID" : "193",
      "Value" : "eBay Switzerland"
    }, {
      "ID" : "2",
      "Value" : "eBay Canada (English)"
    }, {
      "ID" : "0",
      "Value" : "eBay United States"
    } ]
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
 * Get Editor Integration Connection List
 * <h4>Get Integration List</h4> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientGenericList\">GenericList</a></td>       <td>Generic List</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GetIntegrationList
 **/
exports.clientIntegrationsGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : [ {
      "ID" : "surveymonkey",
      "Value" : ""
    }, {
      "ID" : "eventbrite",
      "Value" : "1"
    }, {
      "ID" : "eventbrite1",
      "Value" : "1"
    }, {
      "ID" : "instagram",
      "Value" : ""
    }, {
      "ID" : "facebookevents",
      "Value" : ""
    }, {
      "ID" : "etsy",
      "Value" : ""
    }, {
      "ID" : "etsyStoreName",
      "Value" : ""
    }, {
      "ID" : "etsyStoreID",
      "Value" : ""
    }, {
      "ID" : "ebay",
      "Value" : ""
    }, {
      "ID" : "ebaySellerID",
      "Value" : ""
    }, {
      "ID" : "twitter",
      "Value" : "1"
    }, {
      "ID" : "linkedin",
      "Value" : "1"
    }, {
      "ID" : "pinterest",
      "Value" : "1"
    } ]
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
 * GET Badges List
 * <h4>GET Badges List</h4>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Badge</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailBadge\">Badge</a></td><td>Badge Data</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns GetBadgesList
 **/
exports.emailsBadgesGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Badge" : [ {
      "ID" : "9",
      "ImageURL" : "https://www.benchmarkemail.com/images/web4/misc/emailfooter/opt9.png",
      "Label" : "Medium Gray"
    }, {
      "ID" : "10",
      "ImageURL" : "https://www.benchmarkemail.com/images/web4/misc/emailfooter/opt10.png",
      "Label" : "Benchmark Blue"
    }, {
      "ID" : "11",
      "ImageURL" : "https://www.benchmarkemail.com/images/web4/misc/emailfooter/opt11.png",
      "Label" : "White"
    }, {
      "ID" : "12",
      "ImageURL" : "https://www.benchmarkemail.com/images/web4/misc/emailfooter/opt12.png",
      "Label" : "Dark Gray"
    } ]
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
 * GET Layout list
 * <h4>GET Layout list</h4>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailLayoutListData\">LayoutListData</a></td><td>Layout Data</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns GetLayoutList
 **/
exports.emailsLayoutGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 8,
    "Data" : [ {
      "ID" : "1",
      "Image" : "one-col",
      "Name" : "1 Column"
    }, {
      "ID" : "2",
      "Image" : "onetwo-col",
      "Name" : "1:2 Column"
    }, {
      "ID" : "3",
      "Image" : "onethree-col",
      "Name" : "1:3 Column"
    }, {
      "ID" : "5",
      "Image" : "twoone-col",
      "Name" : "2:1 Column"
    }, {
      "ID" : "4",
      "Image" : "two-col",
      "Name" : "2:2 Column"
    }, {
      "ID" : "6",
      "Image" : "leftsb",
      "Name" : "Left Sidebar"
    }, {
      "ID" : "7",
      "Image" : "rightsb",
      "Name" : "Right Sidebar"
    }, {
      "ID" : "8",
      "Image" : "simplel",
      "Name" : "Simple Layout"
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
 * Delete Scheme
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Scheme</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns DeleteScheme
 **/
exports.emailsSchemeByIDDelete = function(authToken,contentType,iD) {
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
 * Get Scheme
 * <h4>Get Scheme</h4>    <h4>Query String parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Filter</td><td>optional</td><td>string</td><td>Filter, <code>default</code> or <code>saved</code></td></tr>  <tr><td>Language</td><td>optional</td><td>string</td><td>Language</td></tr>  <tr><td>FilterType</td><td>optional</td><td>string</td><td>Filter Type, <code>type</code></td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailSchemeListData\">SchemeListData</a></td><td>Scheme Data</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns GetScheme
 **/
exports.emailsSchemeGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 5,
    "Data" : [ {
      "Colors" : [ "transparen", "transparen", "transparen", "transparen", "#ffffff" ],
      "ID" : "1700",
      "Name" : "Plain"
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
 * Add / Update Scheme
 * <h4>Add / Update Scheme</h4>    <h4>Query String parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Overwrite</td><td>optional</td><td>int</td><td><code>1</code> Overwrite existing scheme  <code>0</code> Don't overwrite existing scheme</td></tr>  <tr><td>Language</td><td>optional</td><td>string</td><td>Language</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Detail</td><td>required</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailSchemeUpdateDetail\">SchemeUpdateDetail</a></td><td>Scheme Details</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailSchemeListData\">SchemeListData</a></td><td>Scheme data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns Add~1UpdateScheme
 **/
exports.emailsSchemePatch = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "Colors" : [ ],
      "ID" : "",
      "Name" : ""
    },
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
 * GET Template By  Template ID
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{TemplateID}}</td><td>required</td><td>string</td><td>IDs of the template</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailTemplateSingleData\">TemplateSingleData</a></td><td>Template</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * templateID String 
 * returns GetTemplateByTemplateId
 **/
exports.emailsTemplateByTemplateIDGet = function(authToken,contentType,templateID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "CategoryID" : "",
      "CategoryName" : "",
      "Content" : "<table width=\"640\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\r\n  <tr valign=\"middle\" align=\"center\"> \r\n    <td height=\"30\" bgcolor=\"<DISPLAY COLOR1.BACKCOLOR>\"> <font face=\"Arial, Helvetica, sans-serif\"><b><font size=\"4\" color=\"<DISPLAY COLOR1.FORECOLOR>\"><DISPLAY TEXT1.TEXT><DISPLAY TEXT1.URL><DISPLAY TEXT1.EDITURL><DISPLAY COLOR1.EDITURL></font></b></font></td>\r\n  </tr>\r\n  <tr valign=\"top\"> \r\n    <td> \r\n      <table width=\"100%\" border=\"0\" cellspacing=\"3\" cellpadding=\"4\">\r\n        <tr valign=\"top\"> \r\n          <td width=\"50%\" bgcolor=\"<DISPLAY COLOR2.BACKCOLOR>\"> \r\n            <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=left>\r\n              <tr> \r\n                <td valign=\"top\"><DISPLAY IMAGE1.IMAGE> <DISPLAY IMAGE1.EDITURL> </td>\r\n              </tr>\r\n            </table>\r\n            <font face='Verdana,Arial, Helvetica,sans-serif' size='2' color=\"<DISPLAY COLOR2.FORECOLOR>\"><DISPLAY TEXT2.TEXT> <DISPLAY TEXT2.URL> <DISPLAY TEXT2.EDITURL> <DISPLAY COLOR2.EDITURL> </font> </td>\r\n          <td width=\"50%\" bgcolor=\"<DISPLAY COLOR3.BACKCOLOR>\"> \r\n            <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=left>\r\n              <tr> \r\n                <td valign=\"top\"><DISPLAY IMAGE2.IMAGE> <DISPLAY IMAGE2.EDITURL> </td>\r\n              </tr>\r\n            </table>\r\n            <font face='Verdana,Arial, Helvetica,sans-serif' size='2' color=\"<DISPLAY COLOR3.FORECOLOR>\"><DISPLAY TEXT3.TEXT> <DISPLAY TEXT3.URL> <DISPLAY TEXT3.EDITURL> <DISPLAY COLOR3.EDITURL> </font> </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  <tr valign=\"top\"> \r\n    <td> \r\n      <table width=\"100%\" border=\"0\" cellspacing=\"3\" cellpadding=\"4\">\r\n        <tr valign=\"top\"> \r\n          <td width=\"50%\" bgcolor=\"<DISPLAY COLOR4.BACKCOLOR>\"> \r\n            <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=left>\r\n              <tr> \r\n                <td valign=\"top\"><DISPLAY IMAGE3.IMAGE> <DISPLAY IMAGE3.EDITURL></td>\r\n              </tr>\r\n            </table>\r\n            <font face='Verdana,Arial, Helvetica,sans-serif' size='2' color=\"<DISPLAY COLOR4.FORECOLOR>\"><DISPLAY TEXT4.TEXT> <DISPLAY TEXT4.URL> <DISPLAY TEXT4.EDITURL> <DISPLAY COLOR4.EDITURL> </font> </td>\r\n          <td width=\"50%\" bgcolor=\"<DISPLAY COLOR5.BACKCOLOR>\"> \r\n            <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=left>\r\n              <tr> \r\n                <td valign=\"top\"><DISPLAY IMAGE4.IMAGE> <DISPLAY IMAGE4.EDITURL></td>\r\n              </tr>\r\n            </table>\r\n            <font face='Verdana,Arial, Helvetica,sans-serif' size='2' color=\"<DISPLAY COLOR5.FORECOLOR>\"><DISPLAY TEXT5.TEXT> <DISPLAY TEXT5.URL> <DISPLAY TEXT5.EDITURL> <DISPLAY COLOR5.EDITURL> </font> </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  <tr valign=\"top\"> \r\n    <td> \r\n      <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">\r\n        <tr valign=\"top\"> \r\n          <td bgcolor=\"<DISPLAY COLOR6.BACKCOLOR>\"> <font face='Verdana,Arial, Helvetica,sans-serif' size='2' color=\"<DISPLAY COLOR6.FORECOLOR>\"><DISPLAY TEXT6.TEXT> <DISPLAY TEXT6.URL> <DISPLAY TEXT6.EDITURL> <DISPLAY COLOR6.EDITURL> </font> </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  <tr valign=\"top\"> \r\n    <td bgcolor=\"<DISPLAY COLOR7.BACKCOLOR>\" align=\"center\"><font face='Verdana,Arial, Helvetica,sans-serif' size='2' color=\"<DISPLAY COLOR7.FORECOLOR>\"><DISPLAY TEXT7.TEXT> <DISPLAY TEXT7.URL> <DISPLAY TEXT7.EDITURL> <DISPLAY COLOR7.EDITURL> </font> </td>\r\n  </tr>\r\n</table>",
      "CreatedBy" : "",
      "ID" : "11",
      "Name" : "Template 6",
      "PreviewImage" : "/images/templates/template6.gif",
      "PreviewLargeImage" : "template6.htm",
      "Type" : "0"
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
 * GET Template Category By Category ID
 * <h4>GET Template Category By Category ID</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{CategoryID}}</td><td>required</td><td>string</td><td>ID of the template category</td></tr>  </tbody>  </table>    <h4>Query String parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Language</td><td>optional</td><td>string</td><td>Language</td></tr>  <tr><td>PageNumber</td><td>optional</td><td>int</td><td>Page number</td></tr>  <tr><td>PageSize</td><td>optional</td><td>int</td><td>Number of records to show per page</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailTemplateData\">TemplateData</a></td><td>Template Data</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * categoryID String 
 * returns GetTemplateCategoryByCategoryId
 **/
exports.emailsTemplateCategoryByCategoryIDGet = function(authToken,contentType,categoryID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 11,
    "Data" : [ {
      "CategoryID" : "46",
      "CategoryName" : "Travel",
      "CreatedBy" : "",
      "ID" : "2859022",
      "Name" : "Travel - Promotion",
      "PreviewImage" : "/images/templates_n/thumbnails/products/travel.gif",
      "PreviewLargeImage" : "https://www.benchmarkemail.com/images/templates_n/thumbnails/products/l_travel.gif",
      "ThirdParty" : "",
      "Type" : "6"
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
 * GET Template Category list
 * <h4>Get a list of contacts</h4>    <h4>Query String parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Language</td><td>optional</td><td>int</td><td>Language</td></tr>  <tr><td>Filter[Version]</td><td>optional</td><td>int</td><td>Version</td></tr>  <tr><td>IsRSS</td><td>optional</td><td>int</td><td>1 if RSS, 0 otherwise</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailTemplateCategoryData\">TemplateCategoryData</a></td><td>Template Data</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns GetTemplateCategoryList
 **/
exports.emailsTemplateCategoryGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 20,
    "Data" : [ {
      "Category" : [ ],
      "Count" : 20,
      "ID" : "10000",
      "IsNew" : 0,
      "Name" : "My Email Layouts"
    }, {
      "Category" : [ ],
      "Count" : 11,
      "ID" : "133",
      "IsNew" : 1,
      "Name" : "Mobile Friendly"
    }, {
      "Category" : [ ],
      "Count" : 12,
      "ID" : "71",
      "IsNew" : 0,
      "Name" : "Associations"
    }, {
      "Category" : [ ],
      "Count" : 27,
      "ID" : "51",
      "IsNew" : 0,
      "Name" : "Blank Templates"
    }, {
      "Category" : [ ],
      "Count" : 20,
      "ID" : "38",
      "IsNew" : 0,
      "Name" : "Cards"
    }, {
      "Category" : [ ],
      "Count" : 16,
      "ID" : "49",
      "IsNew" : 0,
      "Name" : "Education"
    }, {
      "Category" : [ ],
      "Count" : 10,
      "ID" : "52",
      "IsNew" : 0,
      "Name" : "Entertainment"
    }, {
      "Category" : [ ],
      "Count" : 31,
      "ID" : "40",
      "IsNew" : 0,
      "Name" : "Events & Invitations"
    }, {
      "Category" : [ ],
      "Count" : 158,
      "ID" : "39",
      "IsNew" : 0,
      "Name" : "Holiday"
    }, {
      "Category" : [ ],
      "Count" : 31,
      "ID" : "85",
      "IsNew" : 0,
      "Name" : "Industry"
    }, {
      "Category" : [ ],
      "Count" : 48,
      "ID" : "41",
      "IsNew" : 0,
      "Name" : "Newsletters"
    }, {
      "Category" : [ ],
      "Count" : 4,
      "ID" : "42",
      "IsNew" : 0,
      "Name" : "Press Release"
    }, {
      "Category" : [ ],
      "Count" : 46,
      "ID" : "53",
      "IsNew" : 0,
      "Name" : "Products & Promotion"
    }, {
      "Category" : [ ],
      "Count" : 11,
      "ID" : "43",
      "IsNew" : 0,
      "Name" : "Real Estate"
    }, {
      "Category" : [ ],
      "Count" : 7,
      "ID" : "70",
      "IsNew" : 0,
      "Name" : "Religious"
    }, {
      "Category" : [ ],
      "Count" : 10,
      "ID" : "44",
      "IsNew" : 0,
      "Name" : "Restaurant"
    }, {
      "Category" : [ ],
      "Count" : 16,
      "ID" : "72",
      "IsNew" : 0,
      "Name" : "Retail"
    }, {
      "Category" : [ ],
      "Count" : 14,
      "ID" : "45",
      "IsNew" : 0,
      "Name" : "Seasonal"
    }, {
      "Category" : [ ],
      "Count" : 8,
      "ID" : "111",
      "IsNew" : 0,
      "Name" : "Social"
    }, {
      "Category" : [ ],
      "Count" : 11,
      "ID" : "46",
      "IsNew" : 0,
      "Name" : "Travel"
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
 * Get Templates
 * <h4>Get Templates</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  </tbody>  </table>    <h4>Query String parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>PageNumber</td><td>optional</td><td>int</td><td>Page number</td></tr>  <tr><td>PageSize</td><td>optional</td><td>int</td><td>Number of records to show per page</td></tr>  <tr><td>OrderBy</td><td>optional</td><td>int</td><td>Field to order by</td></tr>  <tr><td>SortOrder</td><td>optional</td><td>int</td><td>Sort Order</td></tr>  <tr><td>SearchFilter</td><td>optional</td><td>string</td><td>Filter value</td></tr>  <tr><td>Status</td><td>optional</td><td>string</td><td>Status filter</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailTemplateData\">TemplateData</a></td><td>Template Data</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns GetTemplates
 **/
exports.emailsTemplateGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 210,
    "Data" : [ {
      "CategoryID" : "",
      "CategoryName" : "",
      "CreatedBy" : "",
      "ID" : "207",
      "Name" : "Publication",
      "PreviewImage" : "https://benchmarkemail.com/images/templates_n/new_editor/Templates/Publication/Newsletter/Thumb.png",
      "PreviewLargeImage" : "",
      "ThirdParty" : "",
      "Type" : ""
    }, {
      "CategoryID" : "",
      "CategoryName" : "",
      "CreatedBy" : "",
      "ID" : "276",
      "Name" : "Film Festival",
      "PreviewImage" : "https://benchmarkemail.com/images/templates_n/new_editor/Templates/FilmFestival/Announcement/Thumb.png",
      "PreviewLargeImage" : "",
      "ThirdParty" : "",
      "Type" : ""
    }, {
      "CategoryID" : "",
      "CategoryName" : "",
      "CreatedBy" : "",
      "ID" : "260",
      "Name" : "Offer Code",
      "PreviewImage" : "https://benchmarkemail.com/images/templates_n/new_editor/Templates/OfferCode/Promotion/Thumb.png",
      "PreviewLargeImage" : "",
      "ThirdParty" : "",
      "Type" : ""
    }, {
      "CategoryID" : "",
      "CategoryName" : "",
      "CreatedBy" : "",
      "ID" : "190",
      "Name" : "Crowdfunding",
      "PreviewImage" : "https://benchmarkemail.com/images/templates_n/new_editor/Templates/Crowdfunding/Promotion/Thumb.png",
      "PreviewLargeImage" : "",
      "ThirdParty" : "",
      "Type" : ""
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

