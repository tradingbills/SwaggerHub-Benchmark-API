'use strict';


/**
 * Get details of poll
 * Get details of poll  Query string parameters : None    Request Body parameters:                    Parameter        Required        Type        Description                            PollID        Required        String        Poll ID                Response body parameters :                    Parameter        Type        Description                            ID        string        Poll ID                    Name        String        Name of a poll                    URL        string        Poll URL                    Code        String        Code                    ShareLink        string        Link to share Poll                    Question        String        Question                    Status        String        Status                    Options        ArrayList        Array of Answers                    Button        string        Button                    Responses        String        Name of Responses                    CreatedDate        string        Poll Created Date                    LiveDate        String        Poll Live Date                    ModifiedDate        string        Poll Modified Date                    Sequence        string        Sequence                    CSS        <a href=\"http://www.benchmarkemail.com/models.htm#CSSData\" >CSSData</a>                            Answers        <a href=\"http://www.benchmarkemail.com/models.htm#AnswerData\" >AnswerData</a>                    
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
    "Code" : "<script type='text/javascript' language='JavaScript' src='http://www.benchmarkemail.com/Poll/Start?g=6919&id=553754&w=220&url='></script><noscript>Please enable JavaScript <br /><table cellspacing=0 cellpadding=0 border=0 width=100% style='border: 0px solid #CCCCCC; background: #FFFFFF none repeat scroll 0% 0%;'><td height=30 bgcolor='#dedede' align='center' valign='middle' style=\"padding-top:5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#444444;\">Powered by <a href=\"http://www.benchmarkemail.com/email-marketing/online-surveys\" style=\"color:#444444;text-decoration:none;\" target=_blank>Benchmark</a></noscript>",
    "CreatedDate" : "10/25/2017 12:30:59 PM",
    "ID" : "6919",
    "LiveDate" : "",
    "ModifiedDate" : "Oct 25, 2017",
    "Name" : "Mar 08 2017 Poll - 减笔字 Copy",
    "Options" : [ "Yes 减笔字", "No 减笔字" ],
    "Question" : "Enter your poll question here - 减笔字",
    "Responses" : 0,
    "Sequence" : 0,
    "ShareLink" : "<a href=\"https://api.addthis.com/oexchange/0.8/forward/facebook/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/facebook.png\" border=\"0\" alt=\"Facebook\"/></a>\r  <a href=\"https://api.addthis.com/oexchange/0.8/forward/twitter/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/twitter.png\" border=\"0\" alt=\"Twitter\"/></a>\r  <a href=\"https://api.addthis.com/oexchange/0.8/forward/google_plusone_share/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/google_plusone_share.png\" border=\"0\" alt=\"Google+\"/></a>\r  <a href=\"https://api.addthis.com/oexchange/0.8/forward/email/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/email.png\" border=\"0\" alt=\"Email\"/></a>\r  <a href=\"https://www.addthis.com/bookmark.php?source=tbx32nj-1.0&v=300&pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/addthis.png\" border=\"0\" alt=\"Addthis\"/></a>\r  ",
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
 * Update Poll  Query String Parameters :  None    Request Body Parameters :                     Parameter        Required        Type        Description                            PollID        Required        string        Poll ID                    Name        Required        string        Poll Name                    Question        Required        string        Question                    Button        Required        string        Button                    Options        Required        ArrayList        Array of Options                    CSS        Required        <a href=\"http://www.benchmarkemail.com/models.htm#CSSData\" >CSSData</a>        CSS Properties                Response Body Parameters :                     Parameter        Type        Description                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#PollData\" >PollData</a>        Poll Data                    Errors        <a href=\"http://www.benchmarkemail.com/models.htm#PollErrorData\" >PollErrorData</a>        Errors                    Status        string        1 = successful, -1 = error            
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
      "Code" : "<script type='text/javascript' language='JavaScript' src='http://www.benchmarkemail.com/Poll/Start?g=6919&id=553754&w=220&url='></script><noscript>Please enable JavaScript <br /><table cellspacing=0 cellpadding=0 border=0 width=100% style='border: 0px solid #CCCCCC; background: #FFFFFF none repeat scroll 0% 0%;'><td height=30 bgcolor='#dedede' align='center' valign='middle' style=\"padding-top:5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#444444;\">Powered by <a href=\"http://www.benchmarkemail.com/email-marketing/online-surveys\" style=\"color:#444444;text-decoration:none;\" target=_blank>Benchmark</a></noscript>",
      "CreatedDate" : "10/25/2017 12:30:59 PM",
      "ID" : "6919",
      "LiveDate" : "",
      "ModifiedDate" : "Oct 27, 2017",
      "Name" : "Mar 08 2017 Poll - 减笔字 Copy",
      "Options" : [ "Yes 减笔字", "No 减笔字" ],
      "Question" : "Enter your poll question here - 减笔字",
      "Responses" : 0,
      "Sequence" : 0,
      "ShareLink" : "<a href=\"https://api.addthis.com/oexchange/0.8/forward/facebook/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/facebook.png\" border=\"0\" alt=\"Facebook\"/></a>\r  <a href=\"https://api.addthis.com/oexchange/0.8/forward/twitter/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/twitter.png\" border=\"0\" alt=\"Twitter\"/></a>\r  <a href=\"https://api.addthis.com/oexchange/0.8/forward/google_plusone_share/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/google_plusone_share.png\" border=\"0\" alt=\"Google+\"/></a>\r  <a href=\"https://api.addthis.com/oexchange/0.8/forward/email/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/email.png\" border=\"0\" alt=\"Email\"/></a>\r  <a href=\"https://www.addthis.com/bookmark.php?source=tbx32nj-1.0&v=300&pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6919%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/addthis.png\" border=\"0\" alt=\"Addthis\"/></a>\r  ",
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
 * Create Poll  Query String Parameters :  None    Request Body Parameters :                     Parameter        Required        Type        Description                            PollID        Required        string        Poll ID                    Name        Required        string        Poll Name                    Question        Required        string        Question                    Button        Required        string        Button                    Options        Required        ArrayList        Array of Options                    CSS        Required        <a href=\"http://www.benchmarkemail.com/models.htm#CSSData\" >CSSData</a>        CSS Properties                Response Body Parameters :                     Parameter        Type        Description                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#PollData\" >PollData</a>        Poll Data                    Errors        <a href=\"http://www.benchmarkemail.com/models.htm#PollErrorData\" >PollErrorData</a>        Errors                    Status        string        1 = successful, -1 = error            
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
      "Code" : "<script type='text/javascript' language='JavaScript' src='http://www.benchmarkemail.com/Poll/Start?g=6929&id=553754&w=220&url='></script><noscript>Please enable JavaScript <br /><table cellspacing=0 cellpadding=0 border=0 width=100% style='border: 0px solid #CCCCCC; background: #FFFFFF none repeat scroll 0% 0%;'><td height=30 bgcolor='#dedede' align='center' valign='middle' style=\"padding-top:5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#444444;\">Powered by <a href=\"http://www.benchmarkemail.com/email-marketing/online-surveys\" style=\"color:#444444;text-decoration:none;\" target=_blank>Benchmark</a></noscript>",
      "CreatedDate" : "10/27/2017 12:19:43 PM",
      "ID" : "6929",
      "LiveDate" : "",
      "ModifiedDate" : "Oct 27, 2017",
      "Name" : "Oct 26 2017 Poll 1",
      "Options" : [ "Yes", "No" ],
      "Question" : "Enter your poll question here",
      "Responses" : 0,
      "Sequence" : 0,
      "ShareLink" : "<a href=\"https://api.addthis.com/oexchange/0.8/forward/facebook/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6929%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/facebook.png\" border=\"0\" alt=\"Facebook\"/></a>\r  <a href=\"https://api.addthis.com/oexchange/0.8/forward/twitter/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6929%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/twitter.png\" border=\"0\" alt=\"Twitter\"/></a>\r  <a href=\"https://api.addthis.com/oexchange/0.8/forward/google_plusone_share/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6929%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/google_plusone_share.png\" border=\"0\" alt=\"Google+\"/></a>\r  <a href=\"https://api.addthis.com/oexchange/0.8/forward/email/offer?pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6929%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/email.png\" border=\"0\" alt=\"Email\"/></a>\r  <a href=\"https://www.addthis.com/bookmark.php?source=tbx32nj-1.0&v=300&pco=tbxnj-1.0&url=http%3a%2f%2fwww.benchmarkemail.com%2fPoll%2fVote%3fg%3d6929%26id%3d553754%26w%3d220&pubid=ra-53c6c70362546511&ct=1\" target=\"_blank\"><img src=\"https://cache.addthiscdn.com/icons/v2/thumbs/32x32/addthis.png\" border=\"0\" alt=\"Addthis\"/></a>\r  ",
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

