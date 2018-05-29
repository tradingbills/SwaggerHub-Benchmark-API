'use strict';


/**
 * Delete an image
 * <h4>Delete an image</h4> <b>Query string parameters : </b> None <br> <b>Request Body Parameters : </b> <table>   <tr>     <th>Parameter</th>     <th>Required</th>     <th>Type</th>     <th>Description</th>   </tr>   <tr>     <td>ImageID</td>     <td>Required</td>     <td>string</td>     <td>Image ID</td>   </tr> </table> <b>Response Body Parameters : </b> <table>   <tr>     <th>Parameter</th>     <th>Type</th>     <th>Description</th>   </tr>   <tr>     <td>Response</td>     <td>int</td>     <td>1 if Success, -1 if error</td>   </tr> </table>
 *
 * authToken String 
 * contentType String 
 * imageID String 
 * returns DeleteAnImage
 **/
exports.imagesByImageIDDelete = function(authToken,contentType,imageID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get image details
 * <h4>Get image details</h4> <b>Query string parameters : </b> None <br> <b>Request Body Parameter</b>   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>     <tr>       <td>ImageID</td>       <td>Required</td>       <td>string</td>       <td>Image ID</td>     </tr>   </table> <b>Response body parameters : </b> <table>   <tr>     <th>Parameter</th>     <th>Type</th>     <th>Description</th>   </tr>   <tr>     <td>Height</td>     <td>int</td>     <td>Height of a image</td>   </tr>   <tr>     <td>ID</td>     <td>string</td>     <td>Image ID</td>   </tr>   <tr>     <td>Name</td>     <td>string</td>     <td>Name of image</td>   </tr>   <tr>     <td>Size</td>     <td>int</td>     <td>Size of image</td>   </tr>   <tr>     <td>Type</td>     <td>string</td>     <td>Type of image</td>   </tr>   <tr>     <td>URL</td>     <td>string</td>     <td>URL</td>   </tr>   <tr>     <td>Width</td>     <td>int</td>     <td>Width of a image</td>   </tr> </table>
 *
 * authToken String 
 * contentType String 
 * imageID String 
 * returns GetImageDetails
 **/
exports.imagesByImageIDGet = function(authToken,contentType,imageID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Height" : 353,
    "ID" : "4144772",
    "Name" : "2E_71.jpg",
    "Size" : 19068,
    "Type" : "jpg",
    "URL" : "http://images.benchmarkemail.com/client553754/image4144772.jpg",
    "Width" : 353
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
 * Update an image
 * <h4>Update an image</h4> <b>Query string parameters : </b> <table>   <tr>     <th>Parameter</th>     <th>Required</th>     <th>Type</th>     <th>Description</th>   </tr>   <tr>     <td>ImageID</td>     <td>Required</td>     <td>string</td>     <td>Image ID</td>   </tr> </table> <b>Request Body Parameters : </b> <table>   <tr>     <th>Parameter</th>     <th>Required</th>     <th>Type</th>     <th>Description</th>   </tr>   <tr>     <td>ImageURL</td>     <td>Required</td>     <td>string</td>     <td>Image URL</td>   </tr> </table> <b>Response Body Parameters : </b> <table>   <tr>     <th>Parameter</th>     <th>Type</th>     <th>Description</th>   </tr>   <tr>     <td>Response</td>     <td>int</td>     <td>1 if Success, -1 if error</td>   </tr> </table>
 *
 * authToken String 
 * contentType String 
 * imageID String 
 * returns UpdateAnImage
 **/
exports.imagesByImageIDPatch = function(authToken,contentType,imageID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Upload Logo Image
 * <h4>Upload Logo Image</h4> <b>Query string parameters : </b> None <br>  <b>Response Body Parameters : </b>   <table>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>     <tr>       <td>Data</td>       <td>Required</td>       <td>File</td>       <td>Image file to be uploaded</td>     </tr>     <tr>       <td>ImageType</td>       <td>Required</td>       <td>string</td>       <td>Type of a image</td>     </tr>     <tr>       <td>Extra</td>       <td>Required</td>       <td>string</td>       <td>listbuilder ID</td>     </tr>   </table>   <b>Response body parameters : </b>   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">     <tr>       <th class=\"w_para\">Parameter</th>       <th class=\"w_type\">Type</th>       <th class=\"w_desc\">Description</th>     </tr>     <tr>       <td>Detail</td>       <td>string</td>       <td>Image URL</td>     </tr>     <tr>       <td>Error</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of videos returned.</td>     </tr>     <tr>       <td>ID</td>       <td>string</td>       <td>Image ID</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>   </table>
 *
 * data String Image file to be uploaded.
 * authToken String 
 * contentType String 
 * imageType String 
 * extra String 
 * returns UploadLogoImage
 **/
exports.imagesByImageTypeAndExtraPost = function(data,authToken,contentType,imageType,extra) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Detail" : "https://images.benchmarkemail.com/client212208/lb995921.jpg",
    "Error" : [ ],
    "ID" : "1",
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
 * Copy image to sub-account
 * <h4>Copy image to sub-account</h4> <b>Query string parameters : </b> <table>   <tr>     <th>Parameter</th>     <th>Required</th>     <th>Type</th>     <th>Description</th>   </tr>   <tr>     <td>ImageID</td>     <td>Required</td>     <td>string</td>     <td>Image ID</td>   </tr> </table> <b>Request Body Parameters : </b> <table>   <tr>     <th>Parameter</th>     <th>Required</th>     <th>Type</th>     <th>Description</th>   </tr>   <tr>     <td>Clients</td>     <td>Required</td>     <td>string</td>     <td>Client ID</td>   </tr> </table> <b>Response Body Parameters : </b> <table>   <tr>     <th>Parameter</th>     <th>Type</th>     <th>Description</th>   </tr>   <tr>     <td>Response</td>     <td>int</td>     <td>1 if Success, -1 if error</td>   </tr> </table>
 *
 * authToken String 
 * contentType String 
 * imageID String 
 * returns Copy image to subAccount
 **/
exports.imagesCopyByImageIDPost = function(authToken,contentType,imageID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of images
 * <h4>Get a list of images</h4> <b>Query string parameters : </b>   <table>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>     <tr>       <td>Filter</td>       <td>Optional</td>       <td>int</td>       <td>Filterr</td>     </tr>     <tr>       <td>PageNumber</td>       <td>Required</td>       <td>int</td>       <td>Page Number</td>     </tr>     <tr>       <td>PageSize</td>       <td>Required</td>       <td>int</td>       <td>Number of rows on the page</td>     </tr>     <tr>       <td>OrderBy</td>       <td>Required</td>       <td>string</td>       <td>Order By Column</td>     </tr>     <tr>       <td>SortOrder</td>       <td>Optional</td>       <td>string</td>       <td>ASC or DESC</td>     </tr>   </table>   <b>Response body parameters : </b>   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">     <tr>       <th class=\"w_para\">Parameter</th>       <th class=\"w_type\">Type</th>       <th class=\"w_desc\">Description</th>     </tr>     <tr>       <td>Count</td>       <td>int</td>       <td>Total number of videos</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>     <tr>       <td>Data</td>       <td>Array</td>       <td>Array of videos returned.</td>     </tr>   </table>
 *
 * filter String 
 * pageNumber String 
 * pageSize String 
 * orderBy String 
 * sortOrder String 
 * authToken String 
 * contentType String 
 * returns GetAListOfImages
 **/
exports.imagesGet = function(filter,pageNumber,pageSize,orderBy,sortOrder,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 32,
    "Data" : [ {
      "Height" : 872,
      "ID" : "4166035",
      "Name" : "image4080725.jpg",
      "Size" : 228434,
      "Type" : "",
      "URL" : "http://images.benchmarkemail.com/client553754/image4166035.jpg",
      "Width" : 600
    }, {
      "Height" : 353,
      "ID" : "4144772",
      "Name" : "2E_71.jpg",
      "Size" : 19068,
      "Type" : "",
      "URL" : "http://images.benchmarkemail.com/client553754/image4144772.jpg",
      "Width" : 353
    }, {
      "Height" : 353,
      "ID" : "4144771",
      "Name" : "2E_18.jpg",
      "Size" : 20948,
      "Type" : "",
      "URL" : "http://images.benchmarkemail.com/client553754/image4144771.jpg",
      "Width" : 353
    }, {
      "Height" : 40,
      "ID" : "4144632",
      "Name" : "2.gif",
      "Size" : 9204,
      "Type" : "",
      "URL" : "http://images.benchmarkemail.com/client553754/image4144632.gif",
      "Width" : 180
    }, {
      "Height" : 40,
      "ID" : "3974383",
      "Name" : "5.gif",
      "Size" : 4220,
      "Type" : "",
      "URL" : "http://images.benchmarkemail.com/client553754/image3974383.gif",
      "Width" : 180
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
 * Get list of Giphy images
 * <h4>Get list of Giphy images</h4> <b>Query string parameters : </b>  <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>PageNumber</td>       <td>Optional</td>       <td>string</td>       <td>Page Number</td>     </tr>     <tr>       <td>PageSize</td>       <td>Optional</td>       <td>string</td>       <td>Number of records per page</td>     </tr>     <tr>       <td>Filter</td>       <td>Optional</td>       <td>string</td>       <td>Filter</td>     </tr>   </tbody> </table> <b>Request body parameters : </b> None <br> <b>Response body parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Status</td>       <td>string</td>       <td>Status</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#GiphyImageData\" >GiphyImageData</a></td>       <td>Giphy Image Data</td>     </tr>   </tbody> </table>
 *
 * pageNumber String 
 * pageSize String 
 * filter String 
 * authToken String 
 * contentType String 
 * returns GetListOfGiphyImages
 **/
exports.imagesGiphyImagesListGet = function(pageNumber,pageSize,filter,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : [ {
      "Height" : "480",
      "ID" : "26DoaWaPME4Mk0pXi",
      "OriginalURL" : "https://media1.giphy.com/media/26DoaWaPME4Mk0pXi/giphy.gif",
      "Width" : "480"
    }, {
      "Height" : "395",
      "ID" : "xT9IgFdOH1g5SLu7Ti",
      "OriginalURL" : "https://media3.giphy.com/media/xT9IgFdOH1g5SLu7Ti/giphy.gif",
      "Width" : "430"
    }, {
      "Height" : "270",
      "ID" : "xT9Igg8tUkouWKzK9i",
      "OriginalURL" : "https://media0.giphy.com/media/xT9Igg8tUkouWKzK9i/giphy.gif",
      "Width" : "480"
    }, {
      "Height" : "525",
      "ID" : "l2QE1ZiZk7mG6qm5y",
      "OriginalURL" : "https://media3.giphy.com/media/l2QE1ZiZk7mG6qm5y/giphy.gif",
      "Width" : "700"
    }, {
      "Height" : "460",
      "ID" : "l1J9r6IKLYQT7mfVm",
      "OriginalURL" : "https://media2.giphy.com/media/l1J9r6IKLYQT7mfVm/giphy.gif",
      "Width" : "460"
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
 * Upload an Image
 * <h4>Upload an Image</h4> <b>Query string parameters : </b> None <br>  <b>Response Body Parameters : </b>   <table>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>     <tr>       <td>Data</td>       <td>Required</td>       <td>File</td>       <td>Image file to be uploaded</td>     </tr>   </table>   <b>Response body parameters : </b>   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">     <tr>       <th class=\"w_para\">Parameter</th>       <th class=\"w_type\">Type</th>       <th class=\"w_desc\">Description</th>     </tr>     <tr>       <td>Detail</td>       <td>string</td>       <td>Image URL</td>     </tr>     <tr>       <td>Error</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of videos returned.</td>     </tr>     <tr>       <td>ID</td>       <td>string</td>       <td>Image ID</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>   </table>
 *
 * data String Image File to be uploaded
 * authToken String 
 * contentType String 
 * returns UploadAnImage
 **/
exports.imagesPost = function(data,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Detail" : "http://images.benchmarkemail.com/client212208/image4984813.jpg",
    "Error" : [ ],
    "ID" : "4984813",
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
 * Get account summary
 * <h4>Get account summary</h4> <b>Query string parameters : </b> None <br> <b>Request body parameters : </b> None <br> <b>Response body parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>FreePlan</td>       <td>int</td>       <td>1 = FreePlan, 0 = PaidPlan</td>     </tr>     <tr>       <td>Limit</td>       <td>int</td>       <td>Total Space</td>     </tr>     <tr>       <td>PremiumClient</td>       <td>int</td>       <td>1 = hasImageHosting else 0</td>     </tr>     <tr>       <td>Used</td>       <td>int</td>       <td>Used Space</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GetAccountSummary
 **/
exports.imagesSummaryGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "FreePlan" : 0,
    "Limit" : 10,
    "PremiumClient" : 0,
    "Used" : 4
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

