'use strict';


/**
 * Deleting videos
 * <h4>Deleting videos</h4> <b>Query string parameters : </b> None <br /> <b>Request Body parameters : </b> <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> <tr>   <th class=\"w_para\">Parameter</th>   <th class=\"w_required\">Required</th>   <th class=\"w_type\">Type</th>   <th class=\"w_desc\">Description</th> </tr> <tr>   <td>VideoID</td>   <td>Required</td>   <td>string</td>   <td>ID of the video (can be comma seperated multiple too)</td> </tr> </table> <b>Response Body parameters : </b> <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> <tr>   <th class=\"w_para\">Parameter</th>   <th class=\"w_type\">Type</th>   <th class=\"w_desc\">Description</th> </tr> <tr>   <td>Return Value</td>   <td>string</td>   <td>1 for Success, -1 for failure</td> </tr> </table>
 *
 * authToken String 
 * contentType String 
 * videoID String 
 * returns DeletingVideos
 **/
exports.videoByVideoIDDelete = function(authToken,contentType,videoID) {
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
 * Getting video details
 * <h4>Getting video details</h4> <b>Query string parameters : </b> None <br /> <b>Request Body parameters : </b> <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> <tr>   <th class=\"w_para\">Parameter</th>   <th class=\"w_required\">Required</th>   <th class=\"w_type\">Type</th>   <th class=\"w_desc\">Description</th> </tr> <tr>   <td>VideoID</td>   <td>Required</td>   <td>string</td>   <td>ID of the video</td> </tr> </table> <b>Response Body parameters : </b> <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> <tr>   <th class=\"w_para\">Parameter</th>   <th class=\"w_type\">Type</th>   <th class=\"w_desc\">Description</th> </tr> <tr>   <td>Status</td>   <td>string</td>   <td>1 for Success, -1 for failure</td> </tr> <tr>   <td>Data</td>   <td><a href=\"http://www.benchmarkemail.com/models.htm#VideoData\" >VideoData</a></td>   <td>Array of videos returned.</td> </tr> </table>
 *
 * authToken String 
 * contentType String 
 * videoID String 
 * returns GettingVideoDetails
 **/
exports.videoByVideoIDGet = function(authToken,contentType,videoID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "Createddatetime" : "10/17/2017 5:35:06 AM",
      "Description" : "SUBSCRIBE MY CHANNEL FOR LATEST UPDATES OF IPL 2017.",
      "Embed" : "&lt;OBJECT  type=&quot;application/x-shockwave-flash&quot; codebase=&quot;http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0&quot;  WIDTH=&quot;1280&quot; HEIGHT=&quot;720&quot; data=&quot;http://www.youtube.com/v/bhSYIbovgbI?fs=1&quot;&gt;  &lt;PARAM NAME=movie VALUE=&quot;http://www.youtube.com/v/bhSYIbovgbI?fs=1&quot;&gt; &lt;PARAM NAME=quality VALUE=high&gt; &lt;PARAM NAME=allowfullscreen VALUE=true&gt; &lt;PARAM NAME=allowscriptaccess VALUE=always&gt;  &lt;param name=&quot;wmode&quot; value=&quot;opaque&quot; /&gt;    &lt;param name=&quot;scale&quot; value=&quot;showAll&quot; /&gt; &lt;EMBED src=&quot;http://www.youtube.com/v/bhSYIbovgbI?fs=1&quot; quality=high bgcolor=#FFFFFF  WIDTH=&quot;1280&quot; HEIGHT=&quot;720&quot; TYPE=&quot;application/x-shockwave-flash&quot;  PLUGINSPAGE=&quot;http://www.macromedia.com/go/getflashplayer&quot;&gt;&lt;/EMBED&gt;&lt;/OBJECT&gt;",
      "Errors" : [ ],
      "Height" : "720",
      "ID" : "76273",
      "Image" : "http://images.benchmarkemail.com/client553754/video_76273.jpg",
      "Name" : "Sourav Ganguly Hits 3 Sixes out of stadium",
      "Src" : "http://www.youtube.com/v/bhSYIbovgbI?fs=1",
      "Width" : "1280"
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
 * Sharing video
 * <h4>Sharing video</h4> <b>Query string parameters : </b>  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> <tr>   <th class=\"w_para\">Parameter</th>   <th class=\"w_required\">Required</th>   <th class=\"w_type\">Type</th>   <th class=\"w_desc\">Description</th> </tr> <tr>   <td>VideoID</td>   <td>Required</td>   <td>string</td>   <td>ID of the video</td> </tr> </table> <b>Request Body parameters : </b> <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> <tr>   <th class=\"w_para\">Parameter</th>   <th class=\"w_required\">Required</th>   <th class=\"w_type\">Type</th>   <th class=\"w_desc\">Description</th> </tr> <tr>   <td>Clients</td>   <td>Required</td>   <td>string</td>   <td>Sub account client IDs</td> </tr> </table> <b>Response Body parameters : </b> <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> <tr>   <th class=\"w_para\">Parameter</th>   <th class=\"w_type\">Type</th>   <th class=\"w_desc\">Description</th> </tr> <tr>   <td>Return Value</td>   <td>string</td>   <td>Returns 1</td> </tr> </table>
 *
 * body SharingVideorequest 
 * authToken String 
 * contentType String 
 * videoID String 
 * returns SharingVideo
 **/
exports.videoCopyByVideoIDPost = function(body,authToken,contentType,videoID) {
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
 * Get a list of videos
 * <h4>Get a list of videos</h4> <b>Query string parameters : </b>   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">     <tr>       <th class=\"w_para\">Parameter</th>       <th class=\"w_required\">Required</th>       <th class=\"w_type\">Type</th>       <th class=\"w_desc\">Description</th>     </tr>     <tr>       <td>Filter</td>       <td>Optional</td>       <td>int</td>       <td>Filter</td>     </tr>     <tr>       <td>PageNumber</td>       <td>Required</td>       <td>int</td>       <td>Page Number</td>     </tr>     <tr>       <td>PageSize</td>       <td>Required</td>       <td>int</td>       <td>Number of rows on the page</td>     </tr>     <tr>       <td>OrderBy</td>       <td>Required</td>       <td>string</td>       <td>Order By Column</td>     </tr>     <tr>       <td>SortOrder</td>       <td>Optional</td>       <td>string</td>       <td>ASC or DESC</td>     </tr>   </table>   <b>Response body parameters : </b>   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">     <tr>       <th class=\"w_para\">Parameter</th>       <th class=\"w_type\">Type</th>       <th class=\"w_desc\">Description</th>     </tr>     <tr>       <td>Count</td>       <td>int</td>       <td>Total number of videos</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#VideoData\" >VideoData</a></td>       <td>Array of videos returned.</td>     </tr>   </table>
 *
 * filter String 
 * pageNumber String 
 * pageSize String 
 * orderBy String 
 * sortOrder String 
 * authToken String 
 * contentType String 
 * returns GetAListOfVideos
 **/
exports.videoGet = function(filter,pageNumber,pageSize,orderBy,sortOrder,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 7,
    "Data" : [ {
      "Createddatetime" : "1/20/2017 5:34:17 AM",
      "Description" : "",
      "Embed" : "&lt;OBJECT  type=&quot;application/x-shockwave-flash&quot; codebase=&quot;http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0&quot;  WIDTH=&quot;480&quot; HEIGHT=&quot;360&quot; data=&quot;http://www.youtube.com/v/gSAKBQKnguY?fs=1&quot;&gt;  &lt;PARAM NAME=movie VALUE=&quot;http://www.youtube.com/v/gSAKBQKnguY?fs=1&quot;&gt; &lt;PARAM NAME=quality VALUE=high&gt; &lt;PARAM NAME=allowfullscreen VALUE=true&gt; &lt;PARAM NAME=allowscriptaccess VALUE=always&gt;  &lt;param name=&quot;wmode&quot; value=&quot;opaque&quot; /&gt;    &lt;param name=&quot;scale&quot; value=&quot;showAll&quot; /&gt; &lt;EMBED src=&quot;http://www.youtube.com/v/gSAKBQKnguY?fs=1&quot; quality=high bgcolor=#FFFFFF  WIDTH=&quot;480&quot; HEIGHT=&quot;360&quot; TYPE=&quot;application/x-shockwave-flash&quot;  PLUGINSPAGE=&quot;http://www.macromedia.com/go/getflashplayer&quot;&gt;&lt;/EMBED&gt;&lt;/OBJECT&gt;",
      "Errors" : [ ],
      "Height" : "360",
      "ID" : "61598",
      "Image" : "http://images.benchmarkemail.com/client553754/video_61598.jpg",
      "Name" : "So Sorry: PM Modi on Balam Pitchkari",
      "Src" : "http://www.youtube.com/v/gSAKBQKnguY?fs=1",
      "Width" : "480"
    }, {
      "Createddatetime" : "1/20/2017 5:34:00 AM",
      "Description" : "",
      "Embed" : "&lt;OBJECT  type=&quot;application/x-shockwave-flash&quot; codebase=&quot;http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0&quot;  WIDTH=&quot;480&quot; HEIGHT=&quot;360&quot; data=&quot;http://www.youtube.com/v/gSAKBQKnguY?fs=1&quot;&gt;  &lt;PARAM NAME=movie VALUE=&quot;http://www.youtube.com/v/gSAKBQKnguY?fs=1&quot;&gt; &lt;PARAM NAME=quality VALUE=high&gt; &lt;PARAM NAME=allowfullscreen VALUE=true&gt; &lt;PARAM NAME=allowscriptaccess VALUE=always&gt;  &lt;param name=&quot;wmode&quot; value=&quot;opaque&quot; /&gt;    &lt;param name=&quot;scale&quot; value=&quot;showAll&quot; /&gt; &lt;EMBED src=&quot;http://www.youtube.com/v/gSAKBQKnguY?fs=1&quot; quality=high bgcolor=#FFFFFF  WIDTH=&quot;480&quot; HEIGHT=&quot;360&quot; TYPE=&quot;application/x-shockwave-flash&quot;  PLUGINSPAGE=&quot;http://www.macromedia.com/go/getflashplayer&quot;&gt;&lt;/EMBED&gt;&lt;/OBJECT&gt;",
      "Errors" : [ ],
      "Height" : "360",
      "ID" : "61597",
      "Image" : "http://images.benchmarkemail.com/client553754/video_61597.jpg",
      "Name" : "So Sorry: PM Modi on Balam Pitchkari",
      "Src" : "http://www.youtube.com/v/gSAKBQKnguY?fs=1",
      "Width" : "480"
    }, {
      "Createddatetime" : "1/17/2017 12:02:00 PM",
      "Description" : "पाकिस्तान एक तरफ तो भारत के साथ मीठी वार्ता करता है वहीं दूसरी ओर देश में आतंकी भेजता है. देखें पाकिस्तान के इस चतुराई का किस तरह दिया मोदी ने जवाब. Subscrib...",
      "Embed" : "&lt;OBJECT  type=&quot;application/x-shockwave-flash&quot; codebase=&quot;http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0&quot;  WIDTH=&quot;480&quot; HEIGHT=&quot;360&quot; data=&quot;http://www.youtube.com/v/Rtd5oj_w_nM?fs=1&quot;&gt;  &lt;PARAM NAME=movie VALUE=&quot;http://www.youtube.com/v/Rtd5oj_w_nM?fs=1&quot;&gt; &lt;PARAM NAME=quality VALUE=high&gt; &lt;PARAM NAME=allowfullscreen VALUE=true&gt; &lt;PARAM NAME=allowscriptaccess VALUE=always&gt;  &lt;param name=&quot;wmode&quot; value=&quot;opaque&quot; /&gt;    &lt;param name=&quot;scale&quot; value=&quot;showAll&quot; /&gt; &lt;EMBED src=&quot;http://www.youtube.com/v/Rtd5oj_w_nM?fs=1&quot; quality=high bgcolor=#FFFFFF  WIDTH=&quot;480&quot; HEIGHT=&quot;360&quot; TYPE=&quot;application/x-shockwave-flash&quot;  PLUGINSPAGE=&quot;http://www.macromedia.com/go/getflashplayer&quot;&gt;&lt;/EMBED&gt;&lt;/OBJECT&gt;",
      "Errors" : [ ],
      "Height" : "360",
      "ID" : "61387",
      "Image" : "http://images.benchmarkemail.com/client553754/video_61387.jpg",
      "Name" : "So Sorry: पाकिस्तान की चतुराई, मोदी को रास न आई",
      "Src" : "http://www.youtube.com/v/Rtd5oj_w_nM?fs=1",
      "Width" : "480"
    }, {
      "Createddatetime" : "1/17/2017 12:01:41 PM",
      "Description" : "पाकिस्तान एक तरफ तो भारत के साथ मीठी वार्ता करता है वहीं दूसरी ओर देश में आतंकी भेजता है. देखें पाकिस्तान के इस चतुराई का किस तरह दिया मोदी ने जवाब. Subscrib...",
      "Embed" : "&lt;OBJECT  type=&quot;application/x-shockwave-flash&quot; codebase=&quot;http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0&quot;  WIDTH=&quot;480&quot; HEIGHT=&quot;360&quot; data=&quot;http://www.youtube.com/v/Rtd5oj_w_nM?fs=1&quot;&gt;  &lt;PARAM NAME=movie VALUE=&quot;http://www.youtube.com/v/Rtd5oj_w_nM?fs=1&quot;&gt; &lt;PARAM NAME=quality VALUE=high&gt; &lt;PARAM NAME=allowfullscreen VALUE=true&gt; &lt;PARAM NAME=allowscriptaccess VALUE=always&gt;  &lt;param name=&quot;wmode&quot; value=&quot;opaque&quot; /&gt;    &lt;param name=&quot;scale&quot; value=&quot;showAll&quot; /&gt; &lt;EMBED src=&quot;http://www.youtube.com/v/Rtd5oj_w_nM?fs=1&quot; quality=high bgcolor=#FFFFFF  WIDTH=&quot;480&quot; HEIGHT=&quot;360&quot; TYPE=&quot;application/x-shockwave-flash&quot;  PLUGINSPAGE=&quot;http://www.macromedia.com/go/getflashplayer&quot;&gt;&lt;/EMBED&gt;&lt;/OBJECT&gt;",
      "Errors" : [ ],
      "Height" : "360",
      "ID" : "61386",
      "Image" : "http://images.benchmarkemail.com/client553754/video_61386.jpg",
      "Name" : "So Sorry: पाकिस्तान की चतुराई, मोदी को रास न आई",
      "Src" : "http://www.youtube.com/v/Rtd5oj_w_nM?fs=1",
      "Width" : "480"
    }, {
      "Createddatetime" : "10/27/2016 11:39:04 AM",
      "Description" : "",
      "Embed" : "&lt;iframe src=&quot;http://fast.wistia.net/embed/iframe/mx6akqf067&quot; allowtransparency=&quot;true&quot; frameborder=&quot;0&quot; scrolling=&quot;no&quot; class=&quot;wistia_embed&quot; name=&quot;wistia_embed&quot; width=&quot;230&quot; height=&quot;186&quot;&gt;&lt;/iframe&gt;",
      "Errors" : [ ],
      "Height" : "186",
      "ID" : "57163",
      "Image" : "http://images.benchmarkemail.com/client553754/video_57163.jpg",
      "Name" : "1st Email Overview EN",
      "Src" : "http://fast.wistia.net/embed/iframe/mx6akqf067",
      "Width" : "230"
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
 * Uploading videos
 * <h4>Uploading videos</h4> <b>Query string parameters : </b> None <br /> <b>Request Body parameters : </b>   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">     <tr>       <th class=\"w_para\">Parameter</th>       <th class=\"w_required\">Required</th>       <th class=\"w_type\">Type</th>       <th class=\"w_desc\">Description</th>     </tr>     <tr>       <td>VideoUrl</td>       <td>Required</td>       <td>string</td>       <td>URL of a video</td>     </tr>   </table>   <b>Response body parameters : </b>   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">     <tr>       <th class=\"w_para\">Parameter</th>       <th class=\"w_type\">Type</th>       <th class=\"w_desc\">Description</th>     </tr>     <tr>       <td>Errors</td>       <td>List</td>       <td>Contains Field, Code andMessage of the error</td>     </tr>     <tr>       <td>ID</td>       <td>string</td>       <td>Video ID</td>     </tr>     <tr>       <td>Name</td>       <td>string</td>       <td>Name of a video</td>     </tr>     <tr>       <td>Description</td>       <td>string</td>       <td>Video description</td>     </tr>     <tr>       <td>Embed</td>       <td>string</td>       <td>Embed</td>     </tr>     <tr>       <td>Height</td>       <td>string</td>       <td>Height</td>     </tr>     <tr>       <td>Width</td>       <td>string</td>       <td>Width</td>     </tr>     <tr>       <td>Image</td>       <td>string</td>       <td>Image URL</td>     </tr>     <tr>       <td>Createddatetime</td>       <td>string</td>       <td>Date Created</td>     </tr>     <tr>       <td>Src</td>       <td>string</td>       <td>Source URL</td>     </tr>   </table>
 *
 * body UploadingVideosrequest 
 * authToken String 
 * contentType String 
 * returns UploadingVideos
 **/
exports.videoPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Createddatetime" : "10/17/2017 5:59:32 AM",
    "Description" : "SUBSCRIBE MY CHANNEL FOR LATEST UPDATES OF IPL 2017.",
    "Embed" : "&lt;OBJECT  type=&quot;application/x-shockwave-flash&quot; codebase=&quot;http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0&quot;  WIDTH=&quot;1280&quot; HEIGHT=&quot;720&quot; data=&quot;http://www.youtube.com/v/bhSYIbovgbI?fs=1&quot;&gt;  &lt;PARAM NAME=movie VALUE=&quot;http://www.youtube.com/v/bhSYIbovgbI?fs=1&quot;&gt; &lt;PARAM NAME=quality VALUE=high&gt; &lt;PARAM NAME=allowfullscreen VALUE=true&gt; &lt;PARAM NAME=allowscriptaccess VALUE=always&gt;  &lt;param name=&quot;wmode&quot; value=&quot;opaque&quot; /&gt;    &lt;param name=&quot;scale&quot; value=&quot;showAll&quot; /&gt; &lt;EMBED src=&quot;http://www.youtube.com/v/bhSYIbovgbI?fs=1&quot; quality=high bgcolor=#FFFFFF  WIDTH=&quot;1280&quot; HEIGHT=&quot;720&quot; TYPE=&quot;application/x-shockwave-flash&quot;  PLUGINSPAGE=&quot;http://www.macromedia.com/go/getflashplayer&quot;&gt;&lt;/EMBED&gt;&lt;/OBJECT&gt;",
    "Errors" : [ ],
    "Height" : "720",
    "ID" : "76280",
    "Image" : "http://images.benchmarkemail.com/client553754/video_76280.jpg",
    "Name" : "Sourav Ganguly Hits 3 Sixes out of stadium",
    "Src" : "http://www.youtube.com/v/bhSYIbovgbI?fs=1",
    "Width" : "1280"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

