'use strict';


/**
 * Deleting videos
 * Deleting videos  Query string parameters :  None <br />  Request Body parameters :   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">      <th class=\"w_para\">Parameter    <th class=\"w_required\">Required    <th class=\"w_type\">Type    <th class=\"w_desc\">Description        VideoID    Required    string    ID of the video (can be comma seperated multiple too)      Response Body parameters :   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">      <th class=\"w_para\">Parameter    <th class=\"w_type\">Type    <th class=\"w_desc\">Description        Return Value    string    1 for Success, -1 for failure    
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
 * Getting video details  Query string parameters :  None <br />  Request Body parameters :   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">      <th class=\"w_para\">Parameter    <th class=\"w_required\">Required    <th class=\"w_type\">Type    <th class=\"w_desc\">Description        VideoID    Required    string    ID of the video      Response Body parameters :   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">      <th class=\"w_para\">Parameter    <th class=\"w_type\">Type    <th class=\"w_desc\">Description        Status    string    1 for Success, -1 for failure        Data    <a href=\"http://www.benchmarkemail.com/models.htm#VideoData\" >VideoData</a>    Array of videos returned.    
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
 * Sharing video  Query string parameters :    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">      <th class=\"w_para\">Parameter    <th class=\"w_required\">Required    <th class=\"w_type\">Type    <th class=\"w_desc\">Description        VideoID    Required    string    ID of the video      Request Body parameters :   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">      <th class=\"w_para\">Parameter    <th class=\"w_required\">Required    <th class=\"w_type\">Type    <th class=\"w_desc\">Description        Clients    Required    string    Sub account client IDs      Response Body parameters :   <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">      <th class=\"w_para\">Parameter    <th class=\"w_type\">Type    <th class=\"w_desc\">Description        Return Value    string    Returns 1    
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
 * Get a list of videos  Query string parameters :     <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">              <th class=\"w_para\">Parameter        <th class=\"w_required\">Required        <th class=\"w_type\">Type        <th class=\"w_desc\">Description                    Filter        Optional        int        Filter                    PageNumber        Required        int        Page Number                    PageSize        Required        int        Number of rows on the page                    OrderBy        Required        string        Order By Column                    SortOrder        Optional        string        ASC or DESC              Response body parameters :     <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">              <th class=\"w_para\">Parameter        <th class=\"w_type\">Type        <th class=\"w_desc\">Description                    Count        int        Total number of videos                    Status        string        1 if successful, -1 if error                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#VideoData\" >VideoData</a>        Array of videos returned.          
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
 * Uploading videos  Query string parameters :  None <br />  Request Body parameters :     <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">              <th class=\"w_para\">Parameter        <th class=\"w_required\">Required        <th class=\"w_type\">Type        <th class=\"w_desc\">Description                    VideoUrl        Required        string        URL of a video              Response body parameters :     <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">              <th class=\"w_para\">Parameter        <th class=\"w_type\">Type        <th class=\"w_desc\">Description                    Errors        List        Contains Field, Code andMessage of the error                    ID        string        Video ID                    Name        string        Name of a video                    Description        string        Video description                    Embed        string        Embed                    Height        string        Height                    Width        string        Width                    Image        string        Image URL                    Createddatetime        string        Date Created                    Src        string        Source URL          
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

