'use strict';


/**
 * Delete an image
 * Delete an image  Query string parameters :  None    Request Body Parameters :             Parameter      Required      Type      Description              ImageID      Required      string      Image ID        Response Body Parameters :             Parameter      Type      Description              Response      int      1 if Success, -1 if error      
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
 * Get image details  Query string parameters :  None    Request Body Parameter    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">              Parameter        Required        Type        Description                    ImageID        Required        string        Image ID            Response body parameters :             Parameter      Type      Description              Height      int      Height of a image              ID      string      Image ID              Name      string      Name of image              Size      int      Size of image              Type      string      Type of image              URL      string      URL              Width      int      Width of a image      
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
 * Update an image  Query string parameters :             Parameter      Required      Type      Description              ImageID      Required      string      Image ID        Request Body Parameters :             Parameter      Required      Type      Description              ImageURL      Required      string      Image URL        Response Body Parameters :             Parameter      Type      Description              Response      int      1 if Success, -1 if error      
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
 * Upload Logo Image  Query string parameters :  None      Response Body Parameters :                   Parameter        Required        Type        Description                    Data        Required        File        Image file to be uploaded                    ImageType        Required        string        Type of a image                    Extra        Required        string        listbuilder ID              Response body parameters :     <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">              <th class=\"w_para\">Parameter        <th class=\"w_type\">Type        <th class=\"w_desc\">Description                    Detail        string        Image URL                    Error        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of videos returned.                    ID        string        Image ID                    Status        string        1 if successful, -1 if error          
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
 * Copy image to sub-account  Query string parameters :             Parameter      Required      Type      Description              ImageID      Required      string      Image ID        Request Body Parameters :             Parameter      Required      Type      Description              Clients      Required      string      Client ID        Response Body Parameters :             Parameter      Type      Description              Response      int      1 if Success, -1 if error      
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
 * Get a list of images  Query string parameters :                   Parameter        Required        Type        Description                    Filter        Optional        int        Filterr                    PageNumber        Required        int        Page Number                    PageSize        Required        int        Number of rows on the page                    OrderBy        Required        string        Order By Column                    SortOrder        Optional        string        ASC or DESC              Response body parameters :     <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">              <th class=\"w_para\">Parameter        <th class=\"w_type\">Type        <th class=\"w_desc\">Description                    Count        int        Total number of videos                    Status        string        1 if successful, -1 if error                    Data        Array        Array of videos returned.          
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
 * Get list of Giphy images  Query string parameters :                      Parameter        Required        Type        Description                            PageNumber        Optional        string        Page Number                    PageSize        Optional        string        Number of records per page                    Filter        Optional        string        Filter              Request body parameters :  None    Response body parameters :                     Parameter        Type        Description                            Status        string        Status                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#GiphyImageData\" >GiphyImageData</a>        Giphy Image Data            
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
 * Upload an Image  Query string parameters :  None      Response Body Parameters :                   Parameter        Required        Type        Description                    Data        Required        File        Image file to be uploaded              Response body parameters :     <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">              <th class=\"w_para\">Parameter        <th class=\"w_type\">Type        <th class=\"w_desc\">Description                    Detail        string        Image URL                    Error        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of videos returned.                    ID        string        Image ID                    Status        string        1 if successful, -1 if error          
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
 * Get account summary  Query string parameters :  None    Request body parameters :  None    Response body parameters :                     Parameter        Type        Description                            FreePlan        int        1 = FreePlan, 0 = PaidPlan                    Limit        int        Total Space                    PremiumClient        int        1 = hasImageHosting else 0                    Used        int        Used Space            
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

