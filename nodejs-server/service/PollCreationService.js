'use strict';


/**
 * Get details of poll
 * <h4>Get details of poll</h4> <b>Query string parameters :</b> None <br> <b>Request Body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>PollID</td>       <td>Required</td>       <td>String</td>       <td>Poll ID</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>string</td>       <td>Poll ID</td>     </tr>     <tr>       <td>Name</td>       <td>String</td>       <td>Name of a poll</td>     </tr>     <tr>       <td>URL</td>       <td>string</td>       <td>Poll URL</td>     </tr>     <tr>       <td>Code</td>       <td>String</td>       <td>Code</td>     </tr>     <tr>       <td>ShareLink</td>       <td>string</td>       <td>Link to share Poll</td>     </tr>     <tr>       <td>Question</td>       <td>String</td>       <td>Question</td>     </tr>     <tr>       <td>Status</td>       <td>String</td>       <td>Status</td>     </tr>     <tr>       <td>Options</td>       <td>ArrayList</td>       <td>Array of Answers</td>     </tr>     <tr>       <td>Button</td>       <td>string</td>       <td>Button</td>     </tr>     <tr>       <td>Responses</td>       <td>String</td>       <td>Name of Responses</td>     </tr>     <tr>       <td>CreatedDate</td>       <td>string</td>       <td>Poll Created Date</td>     </tr>     <tr>       <td>LiveDate</td>       <td>String</td>       <td>Poll Live Date</td>     </tr>     <tr>       <td>ModifiedDate</td>       <td>string</td>       <td>Poll Modified Date</td>     </tr>     <tr>       <td>Sequence</td>       <td>string</td>       <td>Sequence</td>     </tr>     <tr>       <td>CSS</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#CSSData\" >CSSData</a></td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Answers</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#AnswerData\" >AnswerData</a></td>       <td>&nbsp;</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * pollID String 
 * returns GetDetailsOfPoll
 **/
exports.pollByPollIDGet = function(authToken,contentType,pollID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Answers" : [ ],
    "Button" : "Vote 减笔字",
    "CSS" : {
      "Answer" : {
        "Align" : "",
        "Bgcolor" : "",
        "Color" : "#000000",
        "Font" : "Arial",
        "Size" : "12px"
      },
      "Button" : {
        "Align" : "",
        "Bgcolor" : "",
        "Color" : "",
        "Font" : "",
        "Size" : ""
      },
      "Form" : {
        "BackgroundColor" : "#fdf0bb",
        "BorderColor" : "#777777",
        "Color" : ""
      },
      "Header" : {
        "Align" : "",
        "Bgcolor" : "",
        "Color" : "",
        "Font" : "",
        "Size" : ""
      },
      "Intro" : {
        "Align" : "",
        "Bgcolor" : "",
        "Color" : "",
        "Font" : "",
        "Size" : ""
      },
      "Logo" : {
        "Align" : "",
        "Bgcolor" : "",
        "Color" : "",
        "Font" : "",
        "Size" : ""
      },
      "Question" : {
        "Align" : "",
        "Bgcolor" : "",
        "Color" : "#000000",
        "Font" : "Arial",
        "Size" : "14px"
      },
      "Title" : {
        "Align" : "",
        "Bgcolor" : "",
        "Color" : "",
        "Font" : "",
        "Size" : ""
      }
    },
    "Code" : "<script type='text/javascript' language='JavaScript' src='http://www.benchmarkemail.com/Poll/Start?g=6919&id=553754&w=220&url='></script><noscript>Please enable JavaScript <br /><table cellspacing=0 cellpadding=0 border=0 width=100% style='border: 0px solid #CCCCCC; background: #FFFFFF none repeat scroll 0% 0%;'><tr><td height=30 bgcolor='#dedede' align='center' valign='middle' style=\"padding-top:5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#444444;\">Powered by <a href=\"http://www.benchmarkemail.com/email-marketing/online-surveys\" style=\"color:#444444;text-decoration:none;\" target=_blank>Benchmark</a></td></tr></table></noscript>",
    "CreatedDate" : "10/25/2017 12:30:59 PM",
    "ID" : "6919",
    "LiveDate" : "",
    "ModifiedDate" : "Oct 25, 2017",
    "Name" : "Mar 08 2017 Poll - 减笔字 Copy",
    "Options" : [ "Yes 减笔字", "No 减笔字" ],
    "Question" : "Enter your poll question here - 减笔字",
    "Responses" : 0,
    "Sequence" : 0,
    "ShareLink" : "<a href=\"https://api.addthis.com/oexchange/0.8/forward/facebook/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/facebook.png\" border=\"0\" alt=\"Facebook\"/></a>\r\n<a href=\"https://api.addthis.com/oexchange/0.8/forward/twitter/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/twitter.png\" border=\"0\" alt=\"Twitter\"/></a>\r\n<a href=\"https://api.addthis.com/oexchange/0.8/forward/google_plusone_share/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/google_plusone_share.png\" border=\"0\" alt=\"Google+\"/></a>\r\n<a href=\"https://api.addthis.com/oexchange/0.8/forward/email/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/email.png\" border=\"0\" alt=\"Email\"/></a>\r\n<a href=\"https://www.addthis.com/bookmark.php?source=tbx32nj-1.0&v=300&pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/addthis.png\" border=\"0\" alt=\"Addthis\"/></a>\r\n",
    "Status" : "",
    "URL" : "http://www.benchmarkemail.com/Poll/Vote?g=6919&id=553754&w=220"
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
 * Update Poll
 * <h4>Update Poll</h4> <b>Query String Parameters : </b> None <br> <b>Request Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>PollID</td>       <td>Required</td>       <td>string</td>       <td>Poll ID</td>     </tr>     <tr>       <td>Name</td>       <td>Required</td>       <td>string</td>       <td>Poll Name</td>     </tr>     <tr>       <td>Question</td>       <td>Required</td>       <td>string</td>       <td>Question</td>     </tr>     <tr>       <td>Button</td>       <td>Required</td>       <td>string</td>       <td>Button</td>     </tr>     <tr>       <td>Options</td>       <td>Required</td>       <td>ArrayList</td>       <td>Array of Options</td>     </tr>     <tr>       <td>CSS</td>       <td>Required</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#CSSData\" >CSSData</a></td>       <td>CSS Properties</td>     </tr>   </tbody> </table>  <b>Response Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#PollData\" >PollData</a></td>       <td>Poll Data</td>     </tr>     <tr>       <td>Errors</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#PollErrorData\" >PollErrorData</a></td>       <td>Errors</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = successful, -1 = error</td>     </tr>   </tbody> </table>
 *
 * body UpdatePollrequest 
 * authToken String 
 * contentType String 
 * pollID String 
 * returns UpdatePoll
 **/
exports.pollByPollIDPatch = function(body,authToken,contentType,pollID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "Answers" : [ ],
      "Button" : "Vote 减笔字",
      "CSS" : {
        "Answer" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "#000000",
          "Font" : "Arial",
          "Size" : "12px"
        },
        "Button" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "",
          "Font" : "",
          "Size" : ""
        },
        "Form" : {
          "BackgroundColor" : "#fdf0bb",
          "BorderColor" : "#777777",
          "Color" : ""
        },
        "Header" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "",
          "Font" : "",
          "Size" : ""
        },
        "Intro" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "",
          "Font" : "",
          "Size" : ""
        },
        "Logo" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "",
          "Font" : "",
          "Size" : ""
        },
        "Question" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "#000000",
          "Font" : "Arial",
          "Size" : "14px"
        },
        "Title" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "",
          "Font" : "",
          "Size" : ""
        }
      },
      "Code" : "<script type='text/javascript' language='JavaScript' src='http://www.benchmarkemail.com/Poll/Start?g=6919&id=553754&w=220&url='></script><noscript>Please enable JavaScript <br /><table cellspacing=0 cellpadding=0 border=0 width=100% style='border: 0px solid #CCCCCC; background: #FFFFFF none repeat scroll 0% 0%;'><tr><td height=30 bgcolor='#dedede' align='center' valign='middle' style=\"padding-top:5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#444444;\">Powered by <a href=\"http://www.benchmarkemail.com/email-marketing/online-surveys\" style=\"color:#444444;text-decoration:none;\" target=_blank>Benchmark</a></td></tr></table></noscript>",
      "CreatedDate" : "10/25/2017 12:30:59 PM",
      "ID" : "6919",
      "LiveDate" : "",
      "ModifiedDate" : "Oct 27, 2017",
      "Name" : "Mar 08 2017 Poll - 减笔字 Copy",
      "Options" : [ "Yes 减笔字", "No 减笔字" ],
      "Question" : "Enter your poll question here - 减笔字",
      "Responses" : 0,
      "Sequence" : 0,
      "ShareLink" : "<a href=\"https://api.addthis.com/oexchange/0.8/forward/facebook/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/facebook.png\" border=\"0\" alt=\"Facebook\"/></a>\r\n<a href=\"https://api.addthis.com/oexchange/0.8/forward/twitter/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/twitter.png\" border=\"0\" alt=\"Twitter\"/></a>\r\n<a href=\"https://api.addthis.com/oexchange/0.8/forward/google_plusone_share/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/google_plusone_share.png\" border=\"0\" alt=\"Google+\"/></a>\r\n<a href=\"https://api.addthis.com/oexchange/0.8/forward/email/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/email.png\" border=\"0\" alt=\"Email\"/></a>\r\n<a href=\"https://www.addthis.com/bookmark.php?source=tbx32nj-1.0&v=300&pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/addthis.png\" border=\"0\" alt=\"Addthis\"/></a>\r\n",
      "Status" : "",
      "URL" : "http://www.benchmarkemail.com/Poll/Vote?g=6919&id=553754&w=220"
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
 * Create Poll
 * <h4>Create Poll</h4> <b>Query String Parameters : </b> None <br> <b>Request Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>PollID</td>       <td>Required</td>       <td>string</td>       <td>Poll ID</td>     </tr>     <tr>       <td>Name</td>       <td>Required</td>       <td>string</td>       <td>Poll Name</td>     </tr>     <tr>       <td>Question</td>       <td>Required</td>       <td>string</td>       <td>Question</td>     </tr>     <tr>       <td>Button</td>       <td>Required</td>       <td>string</td>       <td>Button</td>     </tr>     <tr>       <td>Options</td>       <td>Required</td>       <td>ArrayList</td>       <td>Array of Options</td>     </tr>     <tr>       <td>CSS</td>       <td>Required</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#CSSData\" >CSSData</a></td>       <td>CSS Properties</td>     </tr>   </tbody> </table>  <b>Response Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#PollData\" >PollData</a></td>       <td>Poll Data</td>     </tr>     <tr>       <td>Errors</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#PollErrorData\" >PollErrorData</a></td>       <td>Errors</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = successful, -1 = error</td>     </tr>   </tbody> </table>
 *
 * body CreatePollrequest 
 * authToken String 
 * contentType String 
 * returns CreatePoll
 **/
exports.pollPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "Answers" : [ ],
      "Button" : "Vote",
      "CSS" : {
        "Answer" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "#000000",
          "Font" : "Arial",
          "Size" : "12px"
        },
        "Button" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "",
          "Font" : "",
          "Size" : ""
        },
        "Form" : {
          "BackgroundColor" : "#fdf0bb",
          "BorderColor" : "#777777",
          "Color" : ""
        },
        "Header" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "",
          "Font" : "",
          "Size" : ""
        },
        "Intro" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "",
          "Font" : "",
          "Size" : ""
        },
        "Logo" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "",
          "Font" : "",
          "Size" : ""
        },
        "Question" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "#000000",
          "Font" : "Arial",
          "Size" : "14px"
        },
        "Title" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "",
          "Font" : "",
          "Size" : ""
        }
      },
      "Code" : "<script type='text/javascript' language='JavaScript' src='http://www.benchmarkemail.com/Poll/Start?g=6929&id=553754&w=220&url='></script><noscript>Please enable JavaScript <br /><table cellspacing=0 cellpadding=0 border=0 width=100% style='border: 0px solid #CCCCCC; background: #FFFFFF none repeat scroll 0% 0%;'><tr><td height=30 bgcolor='#dedede' align='center' valign='middle' style=\"padding-top:5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#444444;\">Powered by <a href=\"http://www.benchmarkemail.com/email-marketing/online-surveys\" style=\"color:#444444;text-decoration:none;\" target=_blank>Benchmark</a></td></tr></table></noscript>",
      "CreatedDate" : "10/27/2017 12:19:43 PM",
      "ID" : "6929",
      "LiveDate" : "",
      "ModifiedDate" : "Oct 27, 2017",
      "Name" : "Oct 26 2017 Poll 1",
      "Options" : [ "Yes", "No" ],
      "Question" : "Enter your poll question here",
      "Responses" : 0,
      "Sequence" : 0,
      "ShareLink" : "<a href=\"https://api.addthis.com/oexchange/0.8/forward/facebook/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6929%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/facebook.png\" border=\"0\" alt=\"Facebook\"/></a>\r\n<a href=\"https://api.addthis.com/oexchange/0.8/forward/twitter/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6929%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/twitter.png\" border=\"0\" alt=\"Twitter\"/></a>\r\n<a href=\"https://api.addthis.com/oexchange/0.8/forward/google_plusone_share/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6929%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/google_plusone_share.png\" border=\"0\" alt=\"Google+\"/></a>\r\n<a href=\"https://api.addthis.com/oexchange/0.8/forward/email/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6929%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/email.png\" border=\"0\" alt=\"Email\"/></a>\r\n<a href=\"https://www.addthis.com/bookmark.php?source=tbx32nj-1.0&v=300&pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6929%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/addthis.png\" border=\"0\" alt=\"Addthis\"/></a>\r\n",
      "Status" : "",
      "URL" : "http://www.benchmarkemail.com/Poll/Vote?g=6929&id=553754&w=220"
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

