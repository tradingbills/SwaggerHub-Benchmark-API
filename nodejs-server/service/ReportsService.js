'use strict';


/**
 * GET Compare report By  AB Test ID
 * GET Report Details By ABSplit ID  <h4>URL parameters:</h4>  <table>  <tr>    <th>Parameter</th>    <th>Type</th>    <th>Description</th>  </tr>  <tr>    <td>ID</td>    <td>string</td>    <td>ABSplit ID</td>  </tr>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ABTestReportCompareData\">ReportCompareData</a></td><td>Array</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetCompareReportByAbsplitId
 **/
exports.aBSplitCompareByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : [ {
      "ABID" : "39978",
      "Bounces" : "3",
      "Clicks" : "0",
      "EmailID" : "12213383",
      "EmailName" : "",
      "EmailType" : "REMAINDER",
      "Opens" : "0",
      "Sent" : "9",
      "SentOn" : "Thursday 24 August, 2017 11:32 PM",
      "UnSubscribes" : "0",
      "isWinner" : 0
    }, {
      "ABID" : "39978",
      "Bounces" : "1",
      "Clicks" : "0",
      "EmailID" : "12211741",
      "EmailName" : "Aug 24 2017 Email 1",
      "EmailType" : "GROUP_A",
      "Opens" : "0",
      "Sent" : "1",
      "SentOn" : "Thursday 24 August, 2017 05:32 PM",
      "UnSubscribes" : "0",
      "isWinner" : 1
    }, {
      "ABID" : "39978",
      "Bounces" : "1",
      "Clicks" : "0",
      "EmailID" : "12211742",
      "EmailName" : "Aug 24 2017 Email 1",
      "EmailType" : "GROUP_B",
      "Opens" : "0",
      "Sent" : "1",
      "SentOn" : "Thursday 24 August, 2017 05:32 PM",
      "UnSubscribes" : "0",
      "isWinner" : 0
    }, {
      "ABID" : "39978",
      "Bounces" : "5",
      "Clicks" : "0",
      "EmailID" : "",
      "EmailName" : "",
      "EmailType" : "TOTAL",
      "Opens" : "0",
      "Sent" : "11",
      "SentOn" : "",
      "UnSubscribes" : "0",
      "isWinner" : 0
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
 * GET Report Details By  AB Test ID
 * GET Report Details By ABSplit ID  <h4>URL parameters:</h4>  <table>  <tr>    <th>Parameter</th>    <th>Type</th>    <th>Description</th>  </tr>  <tr>    <td>ID</td>    <td>string</td>    <td>Final Unique ID</td>  </tr>  <tr>    <td>ABID</td>    <td>string</td>    <td>ABSplit ID</td>  </tr>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ABTestReportSummaryData\">ReportSummaryData</a></td><td>Array</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * aBID String 
 * returns GetReportDetailsByAbsplitId
 **/
exports.aBSplitReportByIDAndABIDGet = function(authToken,contentType,iD,aBID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "ABEmailID" : "12211741",
      "ABEmailName" : "Aug 24 2017 Email 1 AB Split",
      "Bounces" : 3,
      "CanReUse" : "0",
      "Clicks" : 0,
      "CommunityURL" : "http://community.benchmarkemail.com/users/8731A/newsletter/Aug-24-2017-Email-1-",
      "Complaints" : 0,
      "ContactLists" : [ {
        "ID" : "14553950",
        "IsSegment" : "0",
        "Name" : "mahesh - xlsx",
        "SegmentID" : "0"
      } ],
      "CreatedDate" : "Aug 24, 2017",
      "Forwards" : 0,
      "FromEmail" : "pooja.gorde@gmail.com",
      "FromName" : "寄件人名稱",
      "GroupA" : "12211741",
      "GroupAType" : "WINNER",
      "GroupB" : "12211742",
      "GroupBType" : "LOSER",
      "GroupC" : "",
      "GroupCType" : "",
      "ID" : "12213383",
      "InCommunity" : 0,
      "IsABSplit" : "39978",
      "IsAutoresponder" : "",
      "IsRSS" : "0",
      "IsRSSActive" : "",
      "ModifiedDate" : "Aug 24, 2017",
      "Name" : "Aug 24 2017 Email 1 ",
      "Opens" : 0,
      "RSSSchedule" : "",
      "RSSURL" : "",
      "Recepients" : "",
      "Remainder" : "12213383",
      "ReplyEmail" : "pooja.gorde@gmail.com",
      "ScheduleDate" : "Aug 24 2017, 11:32 PM",
      "Sent" : 9,
      "SentDate" : "",
      "ShareURL" : "http://gfh.bmeurl.co/734A64D",
      "Status" : "2",
      "Subject" : "Aug 24 2017 Email 1",
      "UnOpens" : 6,
      "Unsubscribes" : 0,
      "Version" : "400",
      "Zone" : "IST"
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
 * GET  AB Test Report
 * GET ABSplit Report  <h4>URL body parameter (optional)</h4>    <table>      <tr>        <th>Parameter</th>        <th>Type</th>        <th>Description</th>      </tr>      <tr>        <td>PageNumber</td>        <td>string</td>        <td>Page Number</td>      </tr>      <tr>        <td>PageSize</td>        <td>string</td>        <td>Number of rows on the page</td>      </tr>      <tr>        <td>OrderBy</td>        <td>string</td>        <td>Order By Column Email,count,date</td>      </tr>      <tr>        <td>Filter</td>        <td>string</td>        <td>Filter by template name</td>      </tr>       <tr>        <td>Language</td>        <td>string</td>        <td>Language</td>      </tr>      <tr>        <td>SortOrder</td>        <td>string</td>        <td>ASC or DESC</td>      </tr>    </table>    <h4>Response body parameters:</h4>    <table>      <tr>        <th>Parameter</th>        <th>Type</th>        <th>Description</th>      </tr>      <tr>        <td>Count</td>        <td>int</td>        <td>Total number</td>      </tr>      <tr>        <td>Status</td>        <td>string</td>        <td>1 if successful, -1 if error</td>      </tr>      <tr>        <td>Data</td>        <td><a href='http://www.benchmarkemail.com/models.htm#ABTestReportData'>ReportData</td>        <td>Array of Report Data returned.</td>      </tr>    </table>
 *
 * authToken String 
 * contentType String 
 * returns GetAbsplitReport
 **/
exports.aBSplitReportGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 7,
    "Data" : [ {
      "AbID" : "39978",
      "CommunityURL" : "http://community.benchmarkemail.com/users/pooja%40cybermaxsolutions.com/newsletter/Aug-24-2017-Email-1",
      "CreatedDate" : "Aug 24, 2017",
      "EmailName" : "Aug 24 2017 Email 1",
      "ID" : "12213383",
      "IsFavorite" : "0",
      "ListCount" : "9",
      "ListID" : 14553950,
      "ListName" : "mahesh - xlsx",
      "ModifiedDate" : "Aug 24, 2017",
      "RssURL" : "",
      "ScheduleDate" : "Aug 24, 2017",
      "Status" : "Sent",
      "isSegment" : 0
    }, {
      "AbID" : "39977",
      "CommunityURL" : "http://community.benchmarkemail.com/users/pooja%40cybermaxsolutions.com/newsletter/AB-TEST-3333",
      "CreatedDate" : "Aug 24, 2017",
      "EmailName" : "AB TEST 3333",
      "ID" : "12213359",
      "IsFavorite" : "0",
      "ListCount" : "13",
      "ListID" : 14686702,
      "ListName" : "link test for mark",
      "ModifiedDate" : "Aug 24, 2017",
      "RssURL" : "",
      "ScheduleDate" : "Aug 24, 2017",
      "Status" : "Sent",
      "isSegment" : 0
    }, {
      "AbID" : "39974",
      "CommunityURL" : "http://community.benchmarkemail.com/users/pooja%40cybermaxsolutions.com/newsletter/AB-1234",
      "CreatedDate" : "Aug 24, 2017",
      "EmailName" : "AB 1234",
      "ID" : "12213253",
      "IsFavorite" : "0",
      "ListCount" : "13",
      "ListID" : 14668992,
      "ListName" : "New list 21 march",
      "ModifiedDate" : "Aug 24, 2017",
      "RssURL" : "",
      "ScheduleDate" : "Aug 24, 2017",
      "Status" : "Sent",
      "isSegment" : 0
    }, {
      "AbID" : "33732",
      "CommunityURL" : "http://community.benchmarkemail.com/users/pooja%40cybermaxsolutions.com/newsletter/IE---08-dec",
      "CreatedDate" : "Dec 19, 2016",
      "EmailName" : "IE - 08 dec",
      "ID" : "10992585",
      "IsFavorite" : "0",
      "ListCount" : "18",
      "ListID" : 10501170,
      "ListName" : "15 id",
      "ModifiedDate" : "Dec 19, 2016",
      "RssURL" : "",
      "ScheduleDate" : "Dec 19, 2016",
      "Status" : "Sent",
      "isSegment" : 0
    }, {
      "AbID" : "33721",
      "CommunityURL" : "http://community.benchmarkemail.com/users/pooja%40cybermaxsolutions.com/newsletter/Email-in-IE",
      "CreatedDate" : "Dec 19, 2016",
      "EmailName" : "Email in IE",
      "ID" : "10992584",
      "IsFavorite" : "0",
      "ListCount" : "12",
      "ListID" : 14389923,
      "ListName" : "list create - IE",
      "ModifiedDate" : "Dec 19, 2016",
      "RssURL" : "",
      "ScheduleDate" : "Dec 19, 2016",
      "Status" : "Sent",
      "isSegment" : 0
    }, {
      "AbID" : "33708",
      "CommunityURL" : "http://community.benchmarkemail.com/users/pooja%40cybermaxsolutions.com/newsletter/FF---08-dec",
      "CreatedDate" : "Dec 19, 2016",
      "EmailName" : "FF - 08 dec",
      "ID" : "10992583",
      "IsFavorite" : "0",
      "ListCount" : "36",
      "ListID" : 10501170,
      "ListName" : "15 id",
      "ModifiedDate" : "Dec 19, 2016",
      "RssURL" : "",
      "ScheduleDate" : "Dec 19, 2016",
      "Status" : "Sent",
      "isSegment" : 0
    }, {
      "AbID" : "33709",
      "CommunityURL" : "http://community.benchmarkemail.com/users/pooja%40cybermaxsolutions.com/newsletter/Mahesh---IE",
      "CreatedDate" : "Dec 19, 2016",
      "EmailName" : "Mahesh - IE",
      "ID" : "10992572",
      "IsFavorite" : "0",
      "ListCount" : "45",
      "ListID" : 14408925,
      "ListName" : "XLS",
      "ModifiedDate" : "Dec 19, 2016",
      "RssURL" : "",
      "ScheduleDate" : "Dec 19, 2016",
      "Status" : "Sent",
      "isSegment" : 0
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
 * Get the Results for the  AB Test
 * Update AB split  <h4>URL parameters:</h4>  <table>  <tr>    <th>Parameter</th>    <th>Type</th>    <th>Description</th>  </tr>  <tr>    <td>ID</td>    <td>string</td>    <td>ABSplit ID</td>  </tr>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Results</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ABResult\">ABResult</a></td><td>Array</td></tr>  <tr><td>FinalResult</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ABResultFinal\">ABResultFinal</a></td><td>Array</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetTheResultsForTheAbsplit
 **/
exports.aBSplitResultsByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "FinalResult" : {
      "Bounce" : 3,
      "Click" : 0,
      "ClickScore" : 0,
      "Date" : "8/24/2017 6:02:00 PM",
      "DateLong" : "Thursday 24 August, 2017 11:32 PM IST",
      "Duration" : "8",
      "ID" : "12213383",
      "Open" : 0,
      "OpenScore" : 0,
      "Sent" : 9,
      "Total" : 0,
      "Unsubscribe" : 0
    },
    "Results" : [ {
      "Bounce" : 1,
      "BounceCurrent" : 1,
      "Click" : 0,
      "ClickCurrent" : 0,
      "ClickScore" : 0,
      "ClickScoreCurrent" : 0,
      "Date" : "8/24/2017 12:02:47 PM",
      "DateLong" : "Thursday 24 August, 2017 05:32 PM IST",
      "Duration" : "63d:22h:7m",
      "ID" : "12211741",
      "Open" : 0,
      "OpenCurrent" : 0,
      "OpenScore" : 0,
      "OpenScoreCurrent" : 0,
      "Sent" : 1,
      "SentCurrent" : 1,
      "Status" : "6",
      "TimeElapsed" : "Aug 24, 2017",
      "Total" : 0,
      "TotalCurrent" : 0,
      "Unsubscribe" : 0,
      "UnsubscribeCurrent" : 0
    }, {
      "Bounce" : 1,
      "BounceCurrent" : 1,
      "Click" : 0,
      "ClickCurrent" : 0,
      "ClickScore" : 0,
      "ClickScoreCurrent" : 0,
      "Date" : "8/24/2017 12:02:47 PM",
      "DateLong" : "Thursday 24 August, 2017 05:32 PM IST",
      "Duration" : "63d:22h:7m",
      "ID" : "12211742",
      "Open" : 0,
      "OpenCurrent" : 0,
      "OpenScore" : 0,
      "OpenScoreCurrent" : 0,
      "Sent" : 1,
      "SentCurrent" : 1,
      "Status" : "6",
      "TimeElapsed" : "Aug 24, 2017",
      "Total" : 0,
      "TotalCurrent" : 0,
      "Unsubscribe" : 0,
      "UnsubscribeCurrent" : 0
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
 * Get Summary Report of an Automation
 * Get summary report of an Automation  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>{{AutomationID}}</td>  <td>Required</td>  <td>Automation ID</a>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Count</td><td>Int</td><td>Total count of emails for archive</td></tr>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Name</td><td>String</td><td>Name of Automation</td></tr>  <tr><td>Data</td><td><a href='http://www.benchmarkemail.com/models.htm#AutomationSummaryData'>AutomationSummaryData</a></td><td>Array</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * automationID String 
 * returns GetSummaryReportOfAnAutomation
 **/
exports.automationReportByAutomationIDGet = function(authToken,contentType,automationID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 10,
    "Data" : [ {
      "Bounces" : "0",
      "Clicks" : "0",
      "Complaints" : "0",
      "Days" : "0",
      "ID" : "11356527",
      "Opens" : "4",
      "Sends" : "17",
      "Subject" : "&#36786;&#26310;&#26032;&#24180;&#65292;&#20063;&#34987;&#31281;&#28858;&#20013;&#22283;&#26149;&#31680;&#65292;&#26159;&#20013;&#22283;&#26368;&#37325;&#35201;&#30340;&#20659;&#32113;&#31680;&#26085;",
      "Unsubscribes" : "0"
    }, {
      "Bounces" : "0",
      "Clicks" : "0",
      "Complaints" : "0",
      "Days" : "3",
      "ID" : "11376029",
      "Opens" : "0",
      "Sends" : "0",
      "Subject" : "dfsdf sdfsdf",
      "Unsubscribes" : "0"
    }, {
      "Bounces" : "0",
      "Clicks" : "0",
      "Complaints" : "0",
      "Days" : "3",
      "ID" : "11377141",
      "Opens" : "0",
      "Sends" : "0",
      "Subject" : "dfsdff",
      "Unsubscribes" : "0"
    }, {
      "Bounces" : "0",
      "Clicks" : "0",
      "Complaints" : "0",
      "Days" : "3",
      "ID" : "11386835",
      "Opens" : "0",
      "Sends" : "0",
      "Subject" : "&#12434;&#36991;&#12369;&#12427;&#12383;",
      "Unsubscribes" : "0"
    }, {
      "Bounces" : "0",
      "Clicks" : "0",
      "Complaints" : "0",
      "Days" : "3",
      "ID" : "12453116",
      "Opens" : "0",
      "Sends" : "0",
      "Subject" : "dfsdf sdfsdf",
      "Unsubscribes" : "0"
    }, {
      "Bounces" : "0",
      "Clicks" : "0",
      "Complaints" : "0",
      "Days" : "3",
      "ID" : "12453120",
      "Opens" : "0",
      "Sends" : "0",
      "Subject" : "dfsdf sdfsdf",
      "Unsubscribes" : "0"
    }, {
      "Bounces" : "0",
      "Clicks" : "0",
      "Complaints" : "0",
      "Days" : "3",
      "ID" : "12453271",
      "Opens" : "0",
      "Sends" : "0",
      "Subject" : "Pooja Test",
      "Unsubscribes" : "0"
    }, {
      "Bounces" : "0",
      "Clicks" : "0",
      "Complaints" : "0",
      "Days" : "3",
      "ID" : "12453346",
      "Opens" : "0",
      "Sends" : "0",
      "Subject" : "Test",
      "Unsubscribes" : "0"
    }, {
      "Bounces" : "0",
      "Clicks" : "0",
      "Complaints" : "0",
      "Days" : "3",
      "ID" : "12467501",
      "Opens" : "0",
      "Sends" : "0",
      "Subject" : "Test",
      "Unsubscribes" : "0"
    }, {
      "Bounces" : "0",
      "Clicks" : "0",
      "Complaints" : "0",
      "Days" : "4",
      "ID" : "12453273",
      "Opens" : "0",
      "Sends" : "0",
      "Subject" : "Pooja test API",
      "Unsubscribes" : "0"
    } ],
    "Name" : "automation 10 march",
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
 * Get Reports for Autoresponders
 * Get Reports for Autoresponders <h4>Query String Parameter : </h4> <table> <thead> <tr> <th>Key</th> <th>Required</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>PageNumber</td> <td>optional</td> <td>Page Number</td> </tr> <tr> <td>PageSize</td> <td>optional</td> <td>Number of records to show per page</td> </tr> <tr> <td>Filter</td> <td>optional</td> <td>Filter for automation name</td> </tr> <tr> <td>OrderBy</td> <td>optional</td> <td>Column by which to sort like name,schedule,email,status,date</td> </tr> <tr> <td>SortBy</td> <td>optional</td> <td>The column to sort as <code>asc</code> or <code>desc</code></td> </tr> </tbody> </table> <h4>Response body parameters</h4> <table> <thead> <tr> <th>Key</th><th>Type</th><th>Description</th></tr> </thead> <tbody> <tr><td>Count</td><td>Int</td><td>Total count of emails for archive</td></tr> <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr> <tr><td>Data</td><td><a href='http://www.benchmarkemail.com/models.htm#AutomationData'>AutomationData</a></td><td>Array</td></tr> </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GetReportsForAutoresponders
 **/
exports.automationReportGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 15,
    "Data" : [ {
      "AutomationType" : "1",
      "Automations" : 10,
      "ContactCount" : 6,
      "FromEmail" : "pooja.gorde@gmail.com",
      "FromName" : "寄件人名稱",
      "ID" : "91626",
      "IsSegment" : "",
      "ListID" : "15096080",
      "ListName" : "Test 1",
      "ModifiedDate" : "Oct 14, 2017",
      "Name" : "automation 10 march",
      "SegmentID" : "null",
      "Status" : "1"
    }, {
      "AutomationType" : "1",
      "Automations" : 3,
      "ContactCount" : 4,
      "FromEmail" : "pooja.gorde@gmail.com",
      "FromName" : "Pooja",
      "ID" : "91397",
      "IsSegment" : "",
      "ListID" : "14595342",
      "ListName" : "Mohit Test Suppression List",
      "ModifiedDate" : "Mar 06, 2017",
      "Name" : "date base",
      "SegmentID" : "null",
      "Status" : "1"
    }, {
      "AutomationType" : "2",
      "Automations" : 3,
      "ContactCount" : 1,
      "FromEmail" : "mahesh@cybermaxsolutions.com",
      "FromName" : "Cybermax Solutions",
      "ID" : "91275",
      "IsSegment" : "",
      "ListID" : "14595578",
      "ListName" : "Engage_open91275_130609",
      "ModifiedDate" : "Mar 03, 2017",
      "Name" : "Mohit Test Engagement Automation",
      "SegmentID" : "null",
      "Status" : "1"
    }, {
      "AutomationType" : "1",
      "Automations" : 2,
      "ContactCount" : 7,
      "FromEmail" : "pooja.gorde@gmail.com",
      "FromName" : "Pooja",
      "ID" : "90951",
      "IsSegment" : "",
      "ListID" : "14553794",
      "ListName" : "copy paste",
      "ModifiedDate" : "Feb 24, 2017",
      "Name" : "AR 24 feb",
      "SegmentID" : "null",
      "Status" : "1"
    }, {
      "AutomationType" : "1",
      "Automations" : 1,
      "ContactCount" : 3,
      "FromEmail" : "pooja.gorde@gmail.com",
      "FromName" : "Pooja",
      "ID" : "89835",
      "IsSegment" : "",
      "ListID" : "14483434",
      "ListName" : "Daya List - 19Jan",
      "ModifiedDate" : "Feb 13, 2017",
      "Name" : "Daya-FF (Classic Editor)",
      "SegmentID" : "null",
      "Status" : "1"
    }, {
      "AutomationType" : "1",
      "Automations" : 1,
      "ContactCount" : 6,
      "FromEmail" : "pooja.gorde@gmail.com",
      "FromName" : "Pooja",
      "ID" : "89906",
      "IsSegment" : "",
      "ListID" : "14525571",
      "ListName" : "kiran test",
      "ModifiedDate" : "Feb 03, 2017",
      "Name" : "Kiran IE test",
      "SegmentID" : "null",
      "Status" : "1"
    }, {
      "AutomationType" : "2",
      "Automations" : 1,
      "ContactCount" : 4,
      "FromEmail" : "mahesh@cybermaxsolutions.com",
      "FromName" : "Mahesh - IE - A subscriber opens your email",
      "ID" : "89900",
      "IsSegment" : "",
      "ListID" : "14525366",
      "ListName" : "Engage_open89900_127624",
      "ModifiedDate" : "Feb 03, 2017",
      "Name" : "Mahesh - IE - A subscriber opens your email",
      "SegmentID" : "null",
      "Status" : "1"
    }, {
      "AutomationType" : "1",
      "Automations" : 2,
      "ContactCount" : 1,
      "FromEmail" : "pooja.gorde@gmail.com",
      "FromName" : "Pooja",
      "ID" : "89830",
      "IsSegment" : "",
      "ListID" : "14522495",
      "ListName" : "Kiran 02 Feb Test1",
      "ModifiedDate" : "Feb 02, 2017",
      "Name" : "Kiran Chrome Test1",
      "SegmentID" : "null",
      "Status" : "1"
    }, {
      "AutomationType" : "1",
      "Automations" : 1,
      "ContactCount" : 3,
      "FromEmail" : "pooja.gorde@gmail.com",
      "FromName" : "Pooja",
      "ID" : "89825",
      "IsSegment" : "",
      "ListID" : "14483434",
      "ListName" : "Daya List - 19Jan",
      "ModifiedDate" : "Feb 02, 2017",
      "Name" : "Daya-FF (Automation Thu Feb 02 2017)",
      "SegmentID" : "null",
      "Status" : "1"
    }, {
      "AutomationType" : "1",
      "Automations" : 11,
      "ContactCount" : 3,
      "FromEmail" : "pooja.gorde@gmail.com",
      "FromName" : "Pooja",
      "ID" : "88312",
      "IsSegment" : "",
      "ListID" : "14435742",
      "ListName" : "test1",
      "ModifiedDate" : "Dec 28, 2016",
      "Name" : "Kiran - Dec 28 2016",
      "SegmentID" : "null",
      "Status" : "1"
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
 * GET Campaign History By Email ID
 * <h4>GET Campaign History By Email ID</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailCampaignHistoryData\">CampaignHistoryData</a></td><td>Campaign History Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetCampaignHistoryByEmailId
 **/
exports.emailsCampaignHistoryByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "EmailCount" : "4",
      "SentDate" : "Oct 06 2017, 01:00 PM IST",
      "SentType" : 1
    } ],
    "Error" : [ ],
    "Status" : ""
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
 * GET Save as List
 * <h4>GET Save as List</h4>    <h4>Query String parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>EmailID</td><td>optional</td><td>string</td><td>ID of the EMail</td></tr>  <tr><td>EventID</td><td>optional</td><td>string</td><td>ID of the Event</td></tr>  <tr><td>ABID</td><td>optional</td><td>string</td><td>ID of the AB Test</td></tr>  <tr><td>RType</td><td>optional</td><td>string</td><td>Report Type</td></tr>  <tr><td>LinkName</td><td>optional</td><td>string</td><td>Link Name</td></tr>  <tr><td>Filter</td><td>optional</td><td>string</td><td>Filter</td></tr>  <tr><td>Region</td><td>optional</td><td>string</td><td>Region</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 error</td></tr>  <tr><td>ListName</td><td>string</td><td>List Name</td></tr>  <tr><td>ListDescription</td><td>string</td><td>List Description</td></tr>  <tr><td>ReportTypeText</td><td>string</td><td>Report type</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns GetSaveAsList
 **/
exports.emailsGetSaveAsListGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Error" : [ ],
    "ListDescription" : "Sublist based on Click Report for - &quot;Click Report : Postman Test EMail Campaign&quot;",
    "ListName" : "Click Report : Postman Test EMail Campaign",
    "ReportTypeText" : "CLICKS",
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
 * GET Link Detail By Email ID
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  </tbody>  </table>    <h4>Query String parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>filter</td><td>optional</td><td>int</td><td>ID of the link</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>EmailName</td><td>string</td><td>Email Name</td></tr>  <tr><td>Subject</td><td>int</td><td>Subject</td></tr>  <tr><td>URL</td><td>string</td><td>URL</td></tr>  <tr><td>IsAutoresponder</td><td>string</td><td>Is Autoresponder</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetLinkDetailByEmailId
 **/
exports.emailsLinkDetailByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "EmailName" : "Magical Clicks",
    "IsAutoresponder" : "0",
    "Subject" : "Magical Clicks",
    "URL" : "http://www.google.com"
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
 * GET RSS History By Email ID
 * <h4>GET RSS History By Email ID</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailRSSHistoryData\">RSSHistoryData</a></td><td>RSS History Data</td></tr>  <tr><td>EmailName</td><td>string</td><td>Email Name</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetRssHistoryByEmailId
 **/
exports.emailsRSSHistoryByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 139,
    "Data" : [ {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Oct 26 2017, 06:00 PM",
      "ID" : "12501597",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Oct 25 2017, 06:00 PM",
      "ID" : "12496424",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Oct 24 2017, 06:00 PM",
      "ID" : "12491267",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Oct 23 2017, 06:00 PM",
      "ID" : "12485906",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Oct 22 2017, 06:00 PM",
      "ID" : "12482894",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Oct 21 2017, 06:00 PM",
      "ID" : "12481467",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Oct 19 2017, 06:00 PM",
      "ID" : "12473898",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Oct 18 2017, 06:00 PM",
      "ID" : "12468859",
      "MailSent" : "2",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Oct 17 2017, 06:00 PM",
      "ID" : "12463878",
      "MailSent" : "2",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Oct 16 2017, 06:00 PM",
      "ID" : "12458808",
      "MailSent" : "2",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 15 2017, 06:00 PM",
      "ID" : "11250473",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 14 2017, 06:00 PM",
      "ID" : "11244202",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 13 2017, 06:00 PM",
      "ID" : "11238105",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 12 2017, 06:00 PM",
      "ID" : "11234674",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 11 2017, 06:00 PM",
      "ID" : "11232487",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 10 2017, 06:00 PM",
      "ID" : "11227364",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 09 2017, 06:00 PM",
      "ID" : "11221341",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 08 2017, 06:00 PM",
      "ID" : "11215123",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 07 2017, 06:00 PM",
      "ID" : "11209427",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 06 2017, 06:00 PM",
      "ID" : "11202428",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 05 2017, 06:00 PM",
      "ID" : "11198930",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 04 2017, 06:00 PM",
      "ID" : "11196553",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 03 2017, 06:00 PM",
      "ID" : "11191852",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 02 2017, 06:00 PM",
      "ID" : "11186311",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Feb 01 2017, 06:00 PM",
      "ID" : "11179602",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 31 2017, 06:00 PM",
      "ID" : "11171537",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 30 2017, 06:00 PM",
      "ID" : "11166270",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 29 2017, 06:00 PM",
      "ID" : "11163365",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 28 2017, 06:00 PM",
      "ID" : "11161364",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 27 2017, 06:00 PM",
      "ID" : "11157076",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 26 2017, 06:00 PM",
      "ID" : "11152013",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 25 2017, 06:00 PM",
      "ID" : "11146935",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 24 2017, 06:00 PM",
      "ID" : "11140971",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 23 2017, 06:00 PM",
      "ID" : "11135547",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 22 2017, 06:00 PM",
      "ID" : "11131848",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 21 2017, 06:00 PM",
      "ID" : "11129905",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 20 2017, 06:00 PM",
      "ID" : "11126447",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 19 2017, 06:00 PM",
      "ID" : "11118437",
      "MailSent" : "1",
      "Open" : "1",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 18 2017, 06:00 PM",
      "ID" : "11113237",
      "MailSent" : "1",
      "Open" : "1",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 17 2017, 06:00 PM",
      "ID" : "11107661",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 16 2017, 06:00 PM",
      "ID" : "11102319",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 15 2017, 06:00 PM",
      "ID" : "11098968",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 14 2017, 06:00 PM",
      "ID" : "11096904",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 13 2017, 06:00 PM",
      "ID" : "11092934",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jan 12 2017, 06:00 PM",
      "ID" : "11087506",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Oct 02 2016, 06:00 PM",
      "ID" : "10614191",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Oct 01 2016, 06:00 PM",
      "ID" : "10609791",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 30 2016, 06:00 PM",
      "ID" : "10603202",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 29 2016, 06:00 PM",
      "ID" : "10591411",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 28 2016, 06:00 PM",
      "ID" : "10582762",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 27 2016, 06:00 PM",
      "ID" : "10574057",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 26 2016, 06:00 PM",
      "ID" : "10565305",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 25 2016, 06:00 PM",
      "ID" : "10558771",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 24 2016, 06:00 PM",
      "ID" : "10554409",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 23 2016, 06:00 PM",
      "ID" : "10547853",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 22 2016, 06:00 PM",
      "ID" : "10539262",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 21 2016, 06:00 PM",
      "ID" : "10531632",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 20 2016, 06:00 PM",
      "ID" : "10524327",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 19 2016, 06:00 PM",
      "ID" : "10517430",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 17 2016, 06:00 PM",
      "ID" : "10512115",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 16 2016, 06:00 PM",
      "ID" : "10507845",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 15 2016, 06:00 PM",
      "ID" : "10501850",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 14 2016, 06:00 PM",
      "ID" : "10495746",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 13 2016, 06:00 PM",
      "ID" : "10489297",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 12 2016, 06:00 PM",
      "ID" : "10482850",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 11 2016, 06:00 PM",
      "ID" : "10479365",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 10 2016, 06:00 PM",
      "ID" : "10477376",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Sep 09 2016, 06:00 PM",
      "ID" : "10472645",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 28 2016, 06:00 PM",
      "ID" : "10407018",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 27 2016, 06:00 PM",
      "ID" : "10405085",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 26 2016, 06:00 PM",
      "ID" : "10401011",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 25 2016, 06:00 PM",
      "ID" : "10395034",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 24 2016, 06:00 PM",
      "ID" : "10388998",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 23 2016, 06:00 PM",
      "ID" : "10382891",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 22 2016, 06:00 PM",
      "ID" : "10376460",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 21 2016, 06:00 PM",
      "ID" : "10372730",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 20 2016, 06:00 PM",
      "ID" : "10370778",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "0",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 19 2016, 06:00 PM",
      "ID" : "10366736",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 18 2016, 06:00 PM",
      "ID" : "10361182",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 17 2016, 06:00 PM",
      "ID" : "10355059",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 16 2016, 06:00 PM",
      "ID" : "10348439",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 15 2016, 06:00 PM",
      "ID" : "10342266",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 14 2016, 06:00 PM",
      "ID" : "10339359",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 13 2016, 06:00 PM",
      "ID" : "10337484",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 12 2016, 06:00 PM",
      "ID" : "10333558",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 11 2016, 06:00 PM",
      "ID" : "10327758",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 10 2016, 06:00 PM",
      "ID" : "10321678",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 09 2016, 06:00 PM",
      "ID" : "10315340",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 08 2016, 06:00 PM",
      "ID" : "10308949",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 07 2016, 06:00 PM",
      "ID" : "10305099",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 06 2016, 06:00 PM",
      "ID" : "10302778",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 04 2016, 06:00 PM",
      "ID" : "10292427",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 03 2016, 06:00 PM",
      "ID" : "10285311",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 02 2016, 06:00 PM",
      "ID" : "10278605",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Aug 01 2016, 06:00 PM",
      "ID" : "10271205",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 31 2016, 06:00 PM",
      "ID" : "10267514",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 30 2016, 06:00 PM",
      "ID" : "10265682",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 29 2016, 06:00 PM",
      "ID" : "10261624",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 28 2016, 06:00 PM",
      "ID" : "10256137",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 27 2016, 06:00 PM",
      "ID" : "10250025",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 26 2016, 06:00 PM",
      "ID" : "10243412",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 25 2016, 06:00 PM",
      "ID" : "10236998",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 24 2016, 06:00 PM",
      "ID" : "10233401",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 23 2016, 06:00 PM",
      "ID" : "10231717",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 22 2016, 06:00 PM",
      "ID" : "10227344",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 21 2016, 06:00 PM",
      "ID" : "10220991",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 20 2016, 06:00 PM",
      "ID" : "10213805",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 19 2016, 06:00 PM",
      "ID" : "10207609",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 18 2016, 06:00 PM",
      "ID" : "10201458",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 17 2016, 06:00 PM",
      "ID" : "10198203",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 16 2016, 06:00 PM",
      "ID" : "10196346",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 15 2016, 06:00 PM",
      "ID" : "10191671",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 14 2016, 06:00 PM",
      "ID" : "10185551",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 13 2016, 06:00 PM",
      "ID" : "10178064",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 12 2016, 06:00 PM",
      "ID" : "10170580",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 11 2016, 06:00 PM",
      "ID" : "10163116",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 10 2016, 06:00 PM",
      "ID" : "10158496",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 09 2016, 06:00 PM",
      "ID" : "10155873",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 08 2016, 06:00 PM",
      "ID" : "10151612",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 07 2016, 06:00 PM",
      "ID" : "10143335",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 06 2016, 06:00 PM",
      "ID" : "10136298",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 05 2016, 06:00 PM",
      "ID" : "10125986",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 04 2016, 06:00 PM",
      "ID" : "10120617",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 03 2016, 06:00 PM",
      "ID" : "10116978",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 02 2016, 06:00 PM",
      "ID" : "10114460",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jul 01 2016, 06:00 PM",
      "ID" : "10107659",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jun 30 2016, 06:00 PM",
      "ID" : "10099294",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jun 29 2016, 06:00 PM",
      "ID" : "10089410",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jun 26 2016, 06:00 PM",
      "ID" : "10067441",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jun 25 2016, 06:00 PM",
      "ID" : "10063245",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jun 24 2016, 06:00 PM",
      "ID" : "10057028",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jun 23 2016, 06:00 PM",
      "ID" : "10048808",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jun 22 2016, 06:00 PM",
      "ID" : "10040318",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jun 21 2016, 06:00 PM",
      "ID" : "10032170",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jun 20 2016, 06:00 PM",
      "ID" : "10024076",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jun 19 2016, 06:00 PM",
      "ID" : "10019228",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jun 18 2016, 06:00 PM",
      "ID" : "10016155",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jun 17 2016, 06:00 PM",
      "ID" : "10010425",
      "MailSent" : "1",
      "Open" : "0",
      "Unsubscribe" : "0"
    }, {
      "Bounce" : "1",
      "Click" : "0",
      "Complaint" : "0",
      "Date" : "Jun 16 2016, 06:00 PM",
      "ID" : "10003240",
      "MailSent" : "1",
      "Open" : "1",
      "Unsubscribe" : "0"
    } ],
    "EmailName" : "Jun 16 2016 Email",
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
 * GET AbuseCampaign report By Email ID
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>HotmailISP</td><td>string</td><td>HotmailISP Total</td></tr>  <tr><td>AOLISP</td><td>string</td><td>AOLISP Total</td></tr>  <tr><td>YahooISP</td><td>string</td><td>YahooISP Total</td></tr>  <tr><td>OthersISP</td><td>string</td><td>OtherISP Total</td></tr>  <tr><td>AbuseLinkISP</td><td>string</td><td>AbuseLinkISP Total</td></tr>  <tr><td>Total</td><td>string</td><td>Abuse total</td></tr>  <tr><td>YourComplaintRate</td><td>string</td><td>Abuse Percentage</td></tr>  <tr><td>TotalSent</td><td>string</td><td>Total Mail Sent Number</td></tr>  <tr><td>Subject</td><td>string</td><td>Subject</td></tr>  <tr><td>Emails</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailAbuseCampaignData\">EmailAbuseCampaignData</a></td><td>Email Abuse Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetAbusecampaignReportByEmailId
 **/
exports.emailsReportAbuseCampaignByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "AOLISP" : "0",
    "AbuseLinkISP" : "1",
    "Count" : -1,
    "Emails" : [ {
      "Email" : "test1@cybermaxsolutions.com",
      "ID" : ""
    } ],
    "Error" : [ ],
    "HotmailISP" : "0",
    "IsAutoresponder" : "0",
    "Name" : "TEST Email 1",
    "OthersISP" : "0",
    "Status" : "1",
    "Subject" : "TEST Email 1",
    "Total" : "1",
    "TotalSent" : "15",
    "YahooISP" : "0",
    "YourComplaintRate" : 6.67
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
 * GET Abuse report
 * <h4>GET Abuse report</h4>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>TotalCount</td><td>string</td><td>Abuse Total</td></tr>  <tr><td>Total</td><td>string</td><td>Abuse total</td></tr>  <tr><td>YourComplaintRate</td><td>string</td><td>Abuse Percentage</td></tr>  <tr><td>Emails</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailAbuseData\">EmailAbuseData</a></td><td>Email Abuse Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns GetAbuseReport
 **/
exports.emailsReportAbuseGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "Abuse" : "1",
      "AbusePercent" : 6.67,
      "Date" : "Jan 01, 2017",
      "Email" : "TEST Email 1",
      "ID" : "9683609",
      "Recepient" : "15",
      "ShortEmail" : "TEST Email 1"
    } ],
    "Error" : [ ],
    "Status" : "1",
    "Total" : "996",
    "TotalCount" : "1",
    "YourComplaintRate" : "1.00"
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
 * GET Bounces report By Email ID
 * <h4>GET Bounces report By Email ID</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailBounceData\">EmailBounceData</a></td><td>EMail Bounces Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetBouncesReportByEmailId
 **/
exports.emailsReportBouncesByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "ContactID" : "1423409712",
      "ContactMasterID" : "0",
      "Date" : "Oct 06 2017, 01:14 PM",
      "Email" : "test@cybermaxsolutions.com",
      "Name" : "Test",
      "ReportType" : "4"
    } ],
    "Error" : [ ],
    "IsAutoresponder" : "0",
    "Name" : "Oct 06 2017 Email 1",
    "Status" : "1",
    "Subject" : "With Preview"
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
 * GET Report Details By Email ID
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailReportSummaryData\">ReportSummaryData</a></td><td>Report Summary Data</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetReportDetailsByEmailId
 **/
exports.emailsReportByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "Bounces" : 0,
      "CanReUse" : "1",
      "Clicks" : 1,
      "CommunityURL" : "http://community.benchmarkemail.com/users/<id>/newsletter/Postman-Test-EMail-Campaign",
      "Complaints" : 0,
      "Completed" : 1,
      "ContactLists" : [ {
        "ID" : "15210912",
        "IsSegment" : "0",
        "Name" : "jQuery API Test List",
        "SegmentID" : ""
      } ],
      "CreatedDate" : "Oct 25, 2017",
      "Forwards" : 0,
      "FromEmail" : "test@cybermaxsolutions.com",
      "FromName" : "Test",
      "ID" : "12496233",
      "InCommunity" : 0,
      "IsABSplit" : "0",
      "IsAutoresponder" : "",
      "IsRSS" : "0",
      "IsRSSActive" : "",
      "ModifiedDate" : "Oct 26, 2017",
      "Name" : "Postman Test EMail Campaign",
      "Opens" : 1,
      "RSSSchedule" : "",
      "RSSURL" : "",
      "Recepients" : "",
      "ReplyEmail" : "test@cybermaxsolutions.com",
      "ScheduleDate" : "Oct 26 2017, 11:20 AM",
      "Sent" : 1,
      "SentDate" : "",
      "ShareURL" : "http://bmetrack.bmeurl.co/757A023",
      "Status" : "2",
      "Subject" : "Postman Test EMail Campaign",
      "UnOpens" : 0,
      "Unsubscribes" : 0,
      "Version" : "400",
      "Zone" : "IST"
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
 * GET Click HeatMap By Email ID
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailReportHeatMapData\">ReportHeatMapData</a></td><td>Email Heat Map Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetClickHeatmapByEmailId
 **/
exports.emailsReportClickHeatMapByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 4,
    "Data" : [ {
      "ID" : "123215082",
      "Percent" : "100.00",
      "Sequence" : "1"
    }, {
      "ID" : "123214972",
      "Percent" : "0",
      "Sequence" : "1"
    }, {
      "ID" : "123214973",
      "Percent" : "0",
      "Sequence" : "1"
    }, {
      "ID" : "123214974",
      "Percent" : "0",
      "Sequence" : "1"
    } ],
    "Error" : [ ],
    "Status" : ""
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
 * GET Click Performance By Email ID
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailClickPerformanceData\">EmailClickPerformanceData</a></td><td>Email Click Performance Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetClickPerformanceByEmailId
 **/
exports.emailsReportClickPerformanceByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 2,
    "Data" : [ {
      "Clicks" : "1",
      "TotalClicks" : "2",
      "URL" : "http://www.benchmarkemail.com"
    } ],
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
 * GET Click Performance Details By Email ID
 * <h4>GET Click Performance Details By Email ID</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  </tbody>  </table>    <h4>Query String parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>PageNumber</td><td>optional</td><td>int</td><td>Page number</td></tr>  <tr><td>PageSize</td><td>optional</td><td>int</td><td>Number of records to show per page</td></tr>  <tr><td>OrderBy</td><td>optional</td><td>int</td><td>Field to order by</td></tr>  <tr><td>SortOrder</td><td>optional</td><td>int</td><td>Sort Order, <code>asc</code> or <code>desc</code></td></tr>  <tr><td>sequence</td><td>optional</td><td>string</td><td>Sequence</td></tr>  <tr><td>ClickURL</td><td>optional</td><td>string</td><td>Click URL</td></tr>  <tr><td>linkid</td><td>optional</td><td>string</td><td>ID Link</td></tr>  <tr><td>Language</td><td>optional</td><td>string</td><td>Language</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailClickMapData\">EmailClickMapData</a></td><td>Email Click Map Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetClickPerformanceDetailsByEmailId
 **/
exports.emailsReportClickPerformanceDetailsByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "ContactID" : "2004264986",
      "ContactMasterID" : "15210912",
      "Count" : "2",
      "Date" : "Oct 27 2017, 09:37 AM",
      "Email" : "mohit@cybermaxsolutions.com",
      "Name" : "Mohit "
    } ],
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
 * GET Clicks report By Email ID
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailReportDataGeneric\">ReportDataGeneric</a></td><td>Email Clicks Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetClicksReportByEmailId
 **/
exports.emailsReportClicksByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "ContactID" : "2004264986",
      "ContactMasterID" : "0",
      "Date" : "Oct 27 2017, 09:37 AM",
      "Email" : "test@cybermaxsolutions.com",
      "Name" : "Test "
    } ],
    "Error" : [ ],
    "IsAutoresponder" : "0",
    "Name" : "Postman Test EMail Campaign",
    "Status" : "1",
    "Subject" : "Postman Test EMail Campaign"
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
 * Get Report Download
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  <tr><td>{{RType}}</td><td>required</td><td>string</td><td>Type of report:  <code>1</code> or <code>8</code> Clicks  <code>2</code> Forwards  <code>3</code> Bounces  <code>4</code> Complaints  <code>5</code> Unsubscribes  <code>6</code> Opens  <code>7</code> Unopens  <code>9</code> Soft Bounces  <code>10</code> Hard Bounces  <code>11</code> Survey Respondents  <code>12</code> Opens State</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>ListDescription</td><td>string</td><td>List Description</td></tr>  <tr><td>ContactMasterID</td><td>string</td><td>ID of the list</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailReportDownloadData\">ReportDownloadData</a></td><td>Data</td></tr>  <tr><td>ListName</td><td>string</td><td>List Name</td></tr>  <tr><td>EmailName</td><td>string</td><td>Email Name</td></tr>  <tr><td>EmailSentName</td><td>string</td><td>Email Sent Name</td></tr>  <tr><td>EmailSubject</td><td>string</td><td>Email Subject</td></tr>  <tr><td>MailType</td><td>string</td><td>Mail Type</td></tr>  <tr><td>ReportType</td><td>string</td><td>Report Type</td></tr>  <tr><td>Count</td><td>int</td><td>Count</td></tr>  <tr><td>HasPin</td><td>int</td><td>Has Pin</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * rType String 
 * returns GetReportDownload
 **/
exports.emailsReportDownloadByIDAndRTypeGet = function(authToken,contentType,iD,rType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ContactMasterID" : "15210912",
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
      "FieldLabel" : "Field1",
      "FieldName" : "field_1_name",
      "Sequance" : 1
    }, {
      "FieldLabel" : "Field2",
      "FieldName" : "field_2_name",
      "Sequance" : 2
    }, {
      "FieldLabel" : "Field3",
      "FieldName" : "field_3_name",
      "Sequance" : 3
    }, {
      "FieldLabel" : "Field4",
      "FieldName" : "field_4_name",
      "Sequance" : 4
    }, {
      "FieldLabel" : "Field5",
      "FieldName" : "field_5_name",
      "Sequance" : 5
    }, {
      "FieldLabel" : "Field6",
      "FieldName" : "field_6_name",
      "Sequance" : 6
    }, {
      "FieldLabel" : "Field7",
      "FieldName" : "field_7_name",
      "Sequance" : 7
    }, {
      "FieldLabel" : "Field8",
      "FieldName" : "field_8_name",
      "Sequance" : 8
    }, {
      "FieldLabel" : "Field9",
      "FieldName" : "field_9_name",
      "Sequance" : 9
    }, {
      "FieldLabel" : "Field10",
      "FieldName" : "field_10_name",
      "Sequance" : 10
    }, {
      "FieldLabel" : "Field11",
      "FieldName" : "field_11_name",
      "Sequance" : 11
    }, {
      "FieldLabel" : "Field12",
      "FieldName" : "field_12_name",
      "Sequance" : 12
    }, {
      "FieldLabel" : "Field13",
      "FieldName" : "field_13_name",
      "Sequance" : 13
    }, {
      "FieldLabel" : "Field14",
      "FieldName" : "field_14_name",
      "Sequance" : 14
    }, {
      "FieldLabel" : "Field15",
      "FieldName" : "field_15_name",
      "Sequance" : 15
    }, {
      "FieldLabel" : "Field16",
      "FieldName" : "field_16_name",
      "Sequance" : 16
    }, {
      "FieldLabel" : "Field17",
      "FieldName" : "field_17_name",
      "Sequance" : 17
    }, {
      "FieldLabel" : "Field18",
      "FieldName" : "field_18_name",
      "Sequance" : 18
    }, {
      "FieldLabel" : "Field19",
      "FieldName" : "field_19_name",
      "Sequance" : 19
    }, {
      "FieldLabel" : "Field20",
      "FieldName" : "field_20_name",
      "Sequance" : 20
    }, {
      "FieldLabel" : "Field21",
      "FieldName" : "field_21_name",
      "Sequance" : 21
    }, {
      "FieldLabel" : "Field22",
      "FieldName" : "field_22_name",
      "Sequance" : 22
    }, {
      "FieldLabel" : "Field23",
      "FieldName" : "field_23_name",
      "Sequance" : 23
    }, {
      "FieldLabel" : "Field24",
      "FieldName" : "field_24_name",
      "Sequance" : 24
    } ],
    "EmailName" : "Postman Test EMail Campaign",
    "EmailSentName" : "Postman Test EMail Campaign",
    "EmailSubject" : "Postman Test EMail Campaign",
    "Error" : [ ],
    "HasPin" : 0,
    "ListDescription" : "",
    "ListName" : "jQuery API Test List",
    "MailType" : "Email",
    "ReportType" : "",
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
 * Report Download
 * <h4>Report Download</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  <tr><td>{{RType}}</td><td>required</td><td>string</td><td>Report Type</td></tr>  </tbody>  </table>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Mode</td><td>required</td><td>string</td><td>Mode</td></tr>  <tr><td>Fields</td><td>required</td><td>string</td><td>Fields</td></tr>  <tr><td>PIN</td><td>required</td><td>string</td><td>PIN</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Content</td><td>int</td><td>Content</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * rType String 
 * returns ReportDownload
 **/
exports.emailsReportDownloadByIDAndRTypePost = function(authToken,contentType,iD,rType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Content" : " Everything is fine.",
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
 * GET Forwards report By Email ID
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailReportDataGeneric\">ReportDataGeneric</a></td><td>Email Forward Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetForwardsReportByEmailId
 **/
exports.emailsReportForwardsByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "ContactID" : "992349632",
      "ContactMasterID" : "5499417",
      "Date" : "Aug 22 2016, 10:24 AM",
      "Email" : "test@cybermaxsolutions.com",
      "Name" : "No Name"
    } ],
    "Error" : [ ],
    "IsAutoresponder" : "0",
    "Name" : "Aug 08 2016 Email",
    "Status" : "1",
    "Subject" : "Aug 08 2016 Email"
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
 * Get Report
 * <h4>Get Report</h4>    <h4>Query String parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>PageNumber</td><td>optional</td><td>int</td><td>Page number</td></tr>  <tr><td>PageSize</td><td>optional</td><td>int</td><td>Number of records to show per page</td></tr>  <tr><td>ABFilter</td><td>optional</td><td>string</td><td>AB Filter</td></tr>  <tr><td>FilterType</td><td>optional</td><td>string</td><td>Filter Type</td></tr>  <tr><td>Filter</td><td>optional</td><td>string</td><td>Filter</td></tr>  <tr><td>OrderBy</td><td>optional</td><td>int</td><td>Field to order by</td></tr>  <tr><td>SortOrder</td><td>optional</td><td>int</td><td>Sort Order</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailReportSummaryData\">ReportSummaryData</a></td><td>Report Summary data</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns GetReport
 **/
exports.emailsReportGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 210,
    "Data" : [ {
      "Bounces" : 0,
      "CanReUse" : "1",
      "Clicks" : 1,
      "CommunityURL" : "http://community.benchmarkemail.com/users/<hex-client-id>/newsletter/Postman-Test-EMail-Campaign",
      "Complaints" : 0,
      "Completed" : 1,
      "ContactLists" : [ {
        "ID" : "15210912",
        "IsSegment" : "0",
        "Name" : "jQuery API Test List",
        "SegmentID" : ""
      }, {
        "ID" : "15279518",
        "IsSegment" : "0",
        "Name" : "Resend Test List",
        "SegmentID" : "0"
      } ],
      "CreatedDate" : "Oct 25, 2017",
      "Forwards" : 0,
      "FromEmail" : "",
      "FromName" : "Test",
      "ID" : "12496233",
      "InCommunity" : 0,
      "IsABSplit" : "",
      "IsAutoresponder" : "",
      "IsRSS" : "0",
      "IsRSSActive" : "",
      "ModifiedDate" : "Oct 28, 2017",
      "Name" : "Postman Test EMail Campaign",
      "Opens" : 1,
      "RSSSchedule" : "",
      "RSSURL" : "",
      "Recepients" : "",
      "ReplyEmail" : "",
      "ScheduleDate" : "Oct 26, 2017",
      "Sent" : 1,
      "SentDate" : "",
      "ShareURL" : "http://bmetrack.bmeurl.co/757A023",
      "Status" : "2",
      "Subject" : "Postman Test EMail Campaign",
      "UnOpens" : 0,
      "Unsubscribes" : 0,
      "Version" : "400",
      "Zone" : "IST"
    }, {
      "Bounces" : 0,
      "CanReUse" : "1",
      "Clicks" : 0,
      "CommunityURL" : "http://community.benchmarkemail.com/users/<hex-client-id>/newsletter/Missing-Image",
      "Complaints" : 0,
      "Completed" : 1,
      "ContactLists" : [ {
        "ID" : "15210912",
        "IsSegment" : "0",
        "Name" : "jQuery API Test List",
        "SegmentID" : ""
      } ],
      "CreatedDate" : "Oct 06, 2017",
      "Forwards" : 0,
      "FromEmail" : "",
      "FromName" : "Test",
      "ID" : "12421012",
      "InCommunity" : 0,
      "IsABSplit" : "",
      "IsAutoresponder" : "",
      "IsRSS" : "0",
      "IsRSSActive" : "",
      "ModifiedDate" : "Oct 06, 2017",
      "Name" : "Missing Image",
      "Opens" : 1,
      "RSSSchedule" : "",
      "RSSURL" : "",
      "Recepients" : "",
      "ReplyEmail" : "",
      "ScheduleDate" : "Oct 06, 2017",
      "Sent" : 1,
      "SentDate" : "",
      "ShareURL" : "http://bmetrack.bmeurl.co/74D6689",
      "Status" : "2",
      "Subject" : "Missing Image",
      "UnOpens" : 0,
      "Unsubscribes" : 0,
      "Version" : "400",
      "Zone" : "IST"
    }, {
      "Bounces" : 0,
      "CanReUse" : "1",
      "Clicks" : 0,
      "CommunityURL" : "http://community.benchmarkemail.com/users/<hex-client-id>/newsletter/Oct-06-2017-Email-4",
      "Complaints" : 0,
      "Completed" : 1,
      "ContactLists" : [ {
        "ID" : "15210912",
        "IsSegment" : "0",
        "Name" : "jQuery API Test List",
        "SegmentID" : ""
      } ],
      "CreatedDate" : "Oct 06, 2017",
      "Forwards" : 0,
      "FromEmail" : "",
      "FromName" : "Test",
      "ID" : "12420955",
      "InCommunity" : 0,
      "IsABSplit" : "",
      "IsAutoresponder" : "",
      "IsRSS" : "0",
      "IsRSSActive" : "",
      "ModifiedDate" : "Oct 06, 2017",
      "Name" : "Oct 06 2017 Email 4",
      "Opens" : 1,
      "RSSSchedule" : "",
      "RSSURL" : "",
      "Recepients" : "",
      "ReplyEmail" : "",
      "ScheduleDate" : "Oct 06, 2017",
      "Sent" : 1,
      "SentDate" : "",
      "ShareURL" : "http://bmetrack.bmeurl.co/74D64FA",
      "Status" : "2",
      "Subject" : "Oct 06 2017 Email 4",
      "UnOpens" : 0,
      "Unsubscribes" : 0,
      "Version" : "400",
      "Zone" : "IST"
    }, {
      "Bounces" : 1,
      "CanReUse" : "1",
      "Clicks" : 0,
      "CommunityURL" : "http://community.benchmarkemail.com/users/<hex-client-id>/newsletter/Oct-06-2017-Email-1",
      "Complaints" : 0,
      "Completed" : 1,
      "ContactLists" : [ {
        "ID" : "14098947",
        "IsSegment" : "0",
        "Name" : "Test Email Campaign List",
        "SegmentID" : ""
      } ],
      "CreatedDate" : "Oct 06, 2017",
      "Forwards" : 0,
      "FromEmail" : "",
      "FromName" : "Test",
      "ID" : "12420506",
      "InCommunity" : 0,
      "IsABSplit" : "",
      "IsAutoresponder" : "",
      "IsRSS" : "0",
      "IsRSSActive" : "",
      "ModifiedDate" : "Oct 06, 2017",
      "Name" : "Oct 06 2017 Email 1",
      "Opens" : 2,
      "RSSSchedule" : "",
      "RSSURL" : "",
      "Recepients" : "",
      "ReplyEmail" : "",
      "ScheduleDate" : "Oct 06, 2017",
      "Sent" : 4,
      "SentDate" : "",
      "ShareURL" : "http://bmetrack.bmeurl.co/74D538E",
      "Status" : "2",
      "Subject" : "With Preview",
      "UnOpens" : 1,
      "Unsubscribes" : 0,
      "Version" : "400",
      "Zone" : "IST"
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
 * GET Opens Report
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailOpenData\">EmailOpenData</a></td><td>Email Open Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetOpensReport
 **/
exports.emailsReportOpensByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "ContactID" : "2004264986",
      "ContactMasterID" : "15210912",
      "Date" : "Oct 27 2017, 09:37 AM",
      "Device" : "Desktop, Win 8.1",
      "Email" : "test@cybermaxsolutions.com",
      "Name" : "Test "
    } ],
    "Error" : [ ],
    "IsAutoresponder" : "0",
    "Name" : "Postman Test EMail Campaign",
    "Status" : "1",
    "Subject" : "Postman Test EMail Campaign"
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
 * GET Opens Hourly Report By Email ID
 * <h4>GET Opens Hourly Report By Email ID</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailOpensHourlyData\">EmailOpensHourlyData</a></td><td>Email Open Hourly Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetOpensHourlyReportByEmailId
 **/
exports.emailsReportOpensHourlyByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 30,
    "Data" : [ {
      "Clicks" : "0",
      "Date" : "2017-10-26 10:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-26 11:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-26 12:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-26 13:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-26 14:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-26 15:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-26 16:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-26 17:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-26 18:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-26 19:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-26 20:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-26 21:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-26 22:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-26 23:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 00:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 01:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 02:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 03:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 04:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 05:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 06:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 07:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 08:30",
      "Opens" : "0"
    }, {
      "Clicks" : "1",
      "Date" : "2017-10-27 09:30",
      "Opens" : "1"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 10:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 11:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 12:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 13:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 14:30",
      "Opens" : "0"
    }, {
      "Clicks" : "0",
      "Date" : "2017-10-27 15:30",
      "Opens" : "0"
    } ],
    "Error" : [ ],
    "Status" : ""
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
 * GET Opens Location Report By Email ID and CountryCode
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  <tr><td>{{CountryCode}}</td><td>required</td><td>string</td><td>Country Code</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailOpensLocationData\">EmailOpensLocationData</a></td><td>Email Open Location Data</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  <tr><td>Map</td><td>string</td><td>Map</td></tr>  <tr><td>Name</td><td>string</td><td>Name</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * countryCode String 
 * returns GetOpensLocationReportByEmailIdAndCountrycode
 **/
exports.emailsReportOpensLocationByIDAndCountryCodeGet = function(authToken,contentType,iD,countryCode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 37,
    "Data" : [ {
      "Code" : "IN_AN",
      "HasDrillDown" : "0",
      "Name" : "ANDAMAN AND NICOBAR ISLANDS",
      "Opens" : "0"
    }, {
      "Code" : "IN_AP",
      "HasDrillDown" : "0",
      "Name" : "ANDHRA PRADESH",
      "Opens" : "0"
    }, {
      "Code" : "IN_AR",
      "HasDrillDown" : "0",
      "Name" : "ARUNACHAL PRADESH",
      "Opens" : "0"
    }, {
      "Code" : "IN_AS",
      "HasDrillDown" : "0",
      "Name" : "ASSAM",
      "Opens" : "0"
    }, {
      "Code" : "IN_BR",
      "HasDrillDown" : "0",
      "Name" : "BIHAR",
      "Opens" : "0"
    }, {
      "Code" : "IN_CH",
      "HasDrillDown" : "0",
      "Name" : "CHANDIGARH",
      "Opens" : "0"
    }, {
      "Code" : "IN_CT",
      "HasDrillDown" : "0",
      "Name" : "CHHATTISGARH",
      "Opens" : "0"
    }, {
      "Code" : "IN_DD",
      "HasDrillDown" : "0",
      "Name" : "DAMAN AND DIU",
      "Opens" : "0"
    }, {
      "Code" : "IN_DL",
      "HasDrillDown" : "0",
      "Name" : "DELHI",
      "Opens" : "0"
    }, {
      "Code" : "IN_DN",
      "HasDrillDown" : "0",
      "Name" : "DADRA AND NAGAR HAVELI",
      "Opens" : "0"
    }, {
      "Code" : "IN_GA",
      "HasDrillDown" : "0",
      "Name" : "GOA",
      "Opens" : "0"
    }, {
      "Code" : "IN_GJ",
      "HasDrillDown" : "0",
      "Name" : "GUJARAT",
      "Opens" : "0"
    }, {
      "Code" : "IN_HP",
      "HasDrillDown" : "0",
      "Name" : "HIMACHAL PRADESH",
      "Opens" : "0"
    }, {
      "Code" : "IN_HR",
      "HasDrillDown" : "0",
      "Name" : "HARYANA",
      "Opens" : "0"
    }, {
      "Code" : "IN_JH",
      "HasDrillDown" : "0",
      "Name" : "JHARKHAND",
      "Opens" : "0"
    }, {
      "Code" : "IN_JK",
      "HasDrillDown" : "0",
      "Name" : "JAMMU AND KASHMIR",
      "Opens" : "0"
    }, {
      "Code" : "IN_KA",
      "HasDrillDown" : "0",
      "Name" : "KARNATAKA",
      "Opens" : "0"
    }, {
      "Code" : "IN_KL",
      "HasDrillDown" : "0",
      "Name" : "KERALA",
      "Opens" : "0"
    }, {
      "Code" : "IN_LD",
      "HasDrillDown" : "0",
      "Name" : "LAKSHADWEEP",
      "Opens" : "0"
    }, {
      "Code" : "IN_MH",
      "HasDrillDown" : "0",
      "Name" : "MAHARASHTRA",
      "Opens" : "0"
    }, {
      "Code" : "IN_ML",
      "HasDrillDown" : "0",
      "Name" : "MEGHALAYA",
      "Opens" : "0"
    }, {
      "Code" : "IN_MN",
      "HasDrillDown" : "0",
      "Name" : "MANIPUR",
      "Opens" : "0"
    }, {
      "Code" : "IN_MP",
      "HasDrillDown" : "0",
      "Name" : "MADHYA PRADESH",
      "Opens" : "0"
    }, {
      "Code" : "IN_MZ",
      "HasDrillDown" : "0",
      "Name" : "MIZORAM",
      "Opens" : "0"
    }, {
      "Code" : "IN_NL",
      "HasDrillDown" : "0",
      "Name" : "NAGALAND",
      "Opens" : "0"
    }, {
      "Code" : "IN_OR",
      "HasDrillDown" : "0",
      "Name" : "ORISSA",
      "Opens" : "0"
    }, {
      "Code" : "IN_PB",
      "HasDrillDown" : "0",
      "Name" : "PUNJAB",
      "Opens" : "0"
    }, {
      "Code" : "IN_PY",
      "HasDrillDown" : "0",
      "Name" : "PONDICHERRY",
      "Opens" : "0"
    }, {
      "Code" : "IN_PY",
      "HasDrillDown" : "0",
      "Name" : "PUDUCHERRY",
      "Opens" : "0"
    }, {
      "Code" : "IN_RJ",
      "HasDrillDown" : "0",
      "Name" : "RAJASTHAN",
      "Opens" : "0"
    }, {
      "Code" : "IN_SK",
      "HasDrillDown" : "0",
      "Name" : "SIKKIM",
      "Opens" : "0"
    }, {
      "Code" : "IN_TN",
      "HasDrillDown" : "0",
      "Name" : "TAMIL NADU",
      "Opens" : "0"
    }, {
      "Code" : "IN_TR",
      "HasDrillDown" : "0",
      "Name" : "TRIPURA",
      "Opens" : "0"
    }, {
      "Code" : "IN_UP",
      "HasDrillDown" : "0",
      "Name" : "UTTAR PRADESH",
      "Opens" : "0"
    }, {
      "Code" : "IN_UT",
      "HasDrillDown" : "0",
      "Name" : "UTTARAKHAND",
      "Opens" : "0"
    }, {
      "Code" : "IN_UT",
      "HasDrillDown" : "0",
      "Name" : "UTTARANCHAL",
      "Opens" : "0"
    }, {
      "Code" : "IN_WB",
      "HasDrillDown" : "0",
      "Name" : "WEST BENGAL",
      "Opens" : "1"
    } ],
    "Error" : [ ],
    "Map" : "<map map_file=\"maps/india.swf\" tl_long=\"68.144974\" tl_lat=\"36.930858\" br_long=\"97.384362\" br_lat=\"6.743626\" zoom=\"90%\" zoom_x=\"40%\" zoom_y=\"4.5%\">",
    "Name" : "INDIA",
    "Status" : ""
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
 * GET Opens Location Report
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailOpensLocationData\">EmailOpensLocationData</a></td><td>Email Open Location Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetOpensLocationReport
 **/
exports.emailsReportOpensLocationByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "Code" : "AF",
      "HasDrillDown" : "0",
      "Name" : "AFGHANISTAN",
      "Opens" : "0"
    }, {
      "Code" : "AX",
      "HasDrillDown" : "0",
      "Name" : "ALAND ISLANDS",
      "Opens" : "0"
    }, {
      "Code" : "AL",
      "HasDrillDown" : "1",
      "Name" : "ALBANIA",
      "Opens" : "0"
    }, {
      "Code" : "DZ",
      "HasDrillDown" : "0",
      "Name" : "ALGERIA",
      "Opens" : "0"
    }, {
      "Code" : "AS",
      "HasDrillDown" : "0",
      "Name" : "AMERICAN SAMOA",
      "Opens" : "0"
    }, {
      "Code" : "AD",
      "HasDrillDown" : "1",
      "Name" : "ANDORRA",
      "Opens" : "0"
    }, {
      "Code" : "AO",
      "HasDrillDown" : "0",
      "Name" : "ANGOLA",
      "Opens" : "0"
    }, {
      "Code" : "AI",
      "HasDrillDown" : "0",
      "Name" : "ANGUILLA",
      "Opens" : "0"
    }, {
      "Code" : "AQ",
      "HasDrillDown" : "0",
      "Name" : "ANTARCTICA",
      "Opens" : "0"
    }, {
      "Code" : "AG",
      "HasDrillDown" : "0",
      "Name" : "ANTIGUA AND BARBUDA",
      "Opens" : "0"
    }, {
      "Code" : "AR",
      "HasDrillDown" : "1",
      "Name" : "ARGENTINA",
      "Opens" : "0"
    }, {
      "Code" : "AM",
      "HasDrillDown" : "1",
      "Name" : "ARMENIA",
      "Opens" : "0"
    }, {
      "Code" : "AW",
      "HasDrillDown" : "0",
      "Name" : "ARUBA",
      "Opens" : "0"
    }, {
      "Code" : "AU",
      "HasDrillDown" : "1",
      "Name" : "AUSTRALIA",
      "Opens" : "0"
    }, {
      "Code" : "AT",
      "HasDrillDown" : "1",
      "Name" : "AUSTRIA",
      "Opens" : "0"
    }, {
      "Code" : "AZ",
      "HasDrillDown" : "1",
      "Name" : "AZERBAIJAN",
      "Opens" : "0"
    }, {
      "Code" : "BS",
      "HasDrillDown" : "0",
      "Name" : "BAHAMAS",
      "Opens" : "0"
    }, {
      "Code" : "BH",
      "HasDrillDown" : "1",
      "Name" : "BAHRAIN",
      "Opens" : "0"
    }, {
      "Code" : "BD",
      "HasDrillDown" : "1",
      "Name" : "BANGLADESH",
      "Opens" : "0"
    }, {
      "Code" : "BB",
      "HasDrillDown" : "0",
      "Name" : "BARBADOS",
      "Opens" : "0"
    }, {
      "Code" : "BY",
      "HasDrillDown" : "1",
      "Name" : "BELARUS",
      "Opens" : "0"
    }, {
      "Code" : "BE",
      "HasDrillDown" : "1",
      "Name" : "BELGIUM",
      "Opens" : "0"
    }, {
      "Code" : "BZ",
      "HasDrillDown" : "0",
      "Name" : "BELIZE",
      "Opens" : "0"
    }, {
      "Code" : "BJ",
      "HasDrillDown" : "0",
      "Name" : "BENIN",
      "Opens" : "0"
    }, {
      "Code" : "BM",
      "HasDrillDown" : "0",
      "Name" : "BERMUDA",
      "Opens" : "0"
    }, {
      "Code" : "BT",
      "HasDrillDown" : "1",
      "Name" : "BHUTAN",
      "Opens" : "0"
    }, {
      "Code" : "BO",
      "HasDrillDown" : "1",
      "Name" : "BOLIVIA",
      "Opens" : "0"
    }, {
      "Code" : "BQ",
      "HasDrillDown" : "0",
      "Name" : "Bonaire, Sint Eustatius and Saba",
      "Opens" : "0"
    }, {
      "Code" : "BA",
      "HasDrillDown" : "0",
      "Name" : "BOSNIA AND HERZEGOVINA",
      "Opens" : "0"
    }, {
      "Code" : "BW",
      "HasDrillDown" : "0",
      "Name" : "BOTSWANA",
      "Opens" : "0"
    }, {
      "Code" : "BV",
      "HasDrillDown" : "0",
      "Name" : "BOUVET ISLAND",
      "Opens" : "0"
    }, {
      "Code" : "BR",
      "HasDrillDown" : "1",
      "Name" : "BRAZIL",
      "Opens" : "0"
    }, {
      "Code" : "IO",
      "HasDrillDown" : "0",
      "Name" : "BRITISH INDIAN OCEAN TERRITORY",
      "Opens" : "0"
    }, {
      "Code" : "BN",
      "HasDrillDown" : "0",
      "Name" : "BRUNEI DARUSSALAM",
      "Opens" : "0"
    }, {
      "Code" : "BG",
      "HasDrillDown" : "1",
      "Name" : "BULGARIA",
      "Opens" : "0"
    }, {
      "Code" : "BF",
      "HasDrillDown" : "0",
      "Name" : "BURKINA FASO",
      "Opens" : "0"
    }, {
      "Code" : "BI",
      "HasDrillDown" : "0",
      "Name" : "BURUNDI",
      "Opens" : "0"
    }, {
      "Code" : "KH",
      "HasDrillDown" : "0",
      "Name" : "CAMBODIA",
      "Opens" : "0"
    }, {
      "Code" : "CM",
      "HasDrillDown" : "0",
      "Name" : "CAMEROON",
      "Opens" : "0"
    }, {
      "Code" : "CA",
      "HasDrillDown" : "1",
      "Name" : "CANADA",
      "Opens" : "0"
    }, {
      "Code" : "CV",
      "HasDrillDown" : "0",
      "Name" : "CAPE VERDE",
      "Opens" : "0"
    }, {
      "Code" : "KY",
      "HasDrillDown" : "0",
      "Name" : "CAYMAN ISLANDS",
      "Opens" : "0"
    }, {
      "Code" : "CF",
      "HasDrillDown" : "0",
      "Name" : "CENTRAL AFRICAN REPUBLIC",
      "Opens" : "0"
    }, {
      "Code" : "TD",
      "HasDrillDown" : "0",
      "Name" : "CHAD",
      "Opens" : "0"
    }, {
      "Code" : "CL",
      "HasDrillDown" : "1",
      "Name" : "CHILE",
      "Opens" : "0"
    }, {
      "Code" : "CN",
      "HasDrillDown" : "1",
      "Name" : "CHINA",
      "Opens" : "0"
    }, {
      "Code" : "CO",
      "HasDrillDown" : "1",
      "Name" : "COLOMBIA",
      "Opens" : "0"
    }, {
      "Code" : "KM",
      "HasDrillDown" : "0",
      "Name" : "COMOROS",
      "Opens" : "0"
    }, {
      "Code" : "CG",
      "HasDrillDown" : "0",
      "Name" : "CONGO",
      "Opens" : "0"
    }, {
      "Code" : "CD",
      "HasDrillDown" : "0",
      "Name" : "CONGO -  THE DEMOCRATIC REPUBLIC OF THE",
      "Opens" : "0"
    }, {
      "Code" : "CK",
      "HasDrillDown" : "0",
      "Name" : "COOK ISLANDS",
      "Opens" : "0"
    }, {
      "Code" : "CR",
      "HasDrillDown" : "0",
      "Name" : "COSTA RICA",
      "Opens" : "0"
    }, {
      "Code" : "CI",
      "HasDrillDown" : "0",
      "Name" : "COTE D'IVOIRE",
      "Opens" : "0"
    }, {
      "Code" : "HR",
      "HasDrillDown" : "1",
      "Name" : "CROATIA",
      "Opens" : "0"
    }, {
      "Code" : "CU",
      "HasDrillDown" : "0",
      "Name" : "CUBA",
      "Opens" : "0"
    }, {
      "Code" : "CY",
      "HasDrillDown" : "1",
      "Name" : "CYPRUS",
      "Opens" : "0"
    }, {
      "Code" : "CZ",
      "HasDrillDown" : "1",
      "Name" : "CZECH REPUBLIC",
      "Opens" : "0"
    }, {
      "Code" : "DK",
      "HasDrillDown" : "1",
      "Name" : "DENMARK",
      "Opens" : "0"
    }, {
      "Code" : "DJ",
      "HasDrillDown" : "0",
      "Name" : "DJIBOUTI",
      "Opens" : "0"
    }, {
      "Code" : "DM",
      "HasDrillDown" : "0",
      "Name" : "DOMINICA",
      "Opens" : "0"
    }, {
      "Code" : "DO",
      "HasDrillDown" : "0",
      "Name" : "DOMINICAN REPUBLIC",
      "Opens" : "0"
    }, {
      "Code" : "EC",
      "HasDrillDown" : "1",
      "Name" : "ECUADOR",
      "Opens" : "0"
    }, {
      "Code" : "EG",
      "HasDrillDown" : "0",
      "Name" : "EGYPT",
      "Opens" : "0"
    }, {
      "Code" : "SV",
      "HasDrillDown" : "0",
      "Name" : "EL SALVADOR",
      "Opens" : "0"
    }, {
      "Code" : "GQ",
      "HasDrillDown" : "0",
      "Name" : "EQUATORIAL GUINEA",
      "Opens" : "0"
    }, {
      "Code" : "ER",
      "HasDrillDown" : "0",
      "Name" : "ERITREA",
      "Opens" : "0"
    }, {
      "Code" : "EE",
      "HasDrillDown" : "1",
      "Name" : "ESTONIA",
      "Opens" : "0"
    }, {
      "Code" : "ET",
      "HasDrillDown" : "0",
      "Name" : "ETHIOPIA",
      "Opens" : "0"
    }, {
      "Code" : "FK",
      "HasDrillDown" : "0",
      "Name" : "FALKLAND ISLANDS (MALVINAS)",
      "Opens" : "0"
    }, {
      "Code" : "FO",
      "HasDrillDown" : "0",
      "Name" : "FAROE ISLANDS",
      "Opens" : "0"
    }, {
      "Code" : "FJ",
      "HasDrillDown" : "0",
      "Name" : "FIJI",
      "Opens" : "0"
    }, {
      "Code" : "FI",
      "HasDrillDown" : "1",
      "Name" : "FINLAND",
      "Opens" : "0"
    }, {
      "Code" : "FR",
      "HasDrillDown" : "1",
      "Name" : "FRANCE",
      "Opens" : "0"
    }, {
      "Code" : "GF",
      "HasDrillDown" : "1",
      "Name" : "FRENCH GUIANA",
      "Opens" : "0"
    }, {
      "Code" : "PF",
      "HasDrillDown" : "0",
      "Name" : "FRENCH POLYNESIA",
      "Opens" : "0"
    }, {
      "Code" : "TF",
      "HasDrillDown" : "0",
      "Name" : "FRENCH SOUTHERN TERRITORIES",
      "Opens" : "0"
    }, {
      "Code" : "GA",
      "HasDrillDown" : "0",
      "Name" : "GABON",
      "Opens" : "0"
    }, {
      "Code" : "GM",
      "HasDrillDown" : "0",
      "Name" : "GAMBIA",
      "Opens" : "0"
    }, {
      "Code" : "GE",
      "HasDrillDown" : "1",
      "Name" : "GEORGIA",
      "Opens" : "0"
    }, {
      "Code" : "DE",
      "HasDrillDown" : "1",
      "Name" : "GERMANY",
      "Opens" : "0"
    }, {
      "Code" : "GH",
      "HasDrillDown" : "0",
      "Name" : "GHANA",
      "Opens" : "0"
    }, {
      "Code" : "GI",
      "HasDrillDown" : "0",
      "Name" : "GIBRALTAR",
      "Opens" : "0"
    }, {
      "Code" : "GB",
      "HasDrillDown" : "1",
      "Name" : "GREAT BRITAIN",
      "Opens" : "0"
    }, {
      "Code" : "GR",
      "HasDrillDown" : "1",
      "Name" : "GREECE",
      "Opens" : "0"
    }, {
      "Code" : "GL",
      "HasDrillDown" : "0",
      "Name" : "GREENLAND",
      "Opens" : "0"
    }, {
      "Code" : "GD",
      "HasDrillDown" : "0",
      "Name" : "GRENADA",
      "Opens" : "0"
    }, {
      "Code" : "GP",
      "HasDrillDown" : "0",
      "Name" : "GUADELOUPE",
      "Opens" : "0"
    }, {
      "Code" : "GU",
      "HasDrillDown" : "0",
      "Name" : "GUAM",
      "Opens" : "0"
    }, {
      "Code" : "GT",
      "HasDrillDown" : "0",
      "Name" : "GUATEMALA",
      "Opens" : "0"
    }, {
      "Code" : "GG",
      "HasDrillDown" : "0",
      "Name" : "GUERNSEY",
      "Opens" : "0"
    }, {
      "Code" : "GN",
      "HasDrillDown" : "0",
      "Name" : "GUINEA",
      "Opens" : "0"
    }, {
      "Code" : "GW",
      "HasDrillDown" : "0",
      "Name" : "GUINEA-BISSAU",
      "Opens" : "0"
    }, {
      "Code" : "GY",
      "HasDrillDown" : "1",
      "Name" : "GUYANA",
      "Opens" : "0"
    }, {
      "Code" : "HT",
      "HasDrillDown" : "0",
      "Name" : "HAITI",
      "Opens" : "0"
    }, {
      "Code" : "HM",
      "HasDrillDown" : "0",
      "Name" : "HEARD ISLAND AND MCDONALD ISLANDS",
      "Opens" : "0"
    }, {
      "Code" : "VA",
      "HasDrillDown" : "0",
      "Name" : "HOLY SEE (VATICAN CITY STATE)",
      "Opens" : "0"
    }, {
      "Code" : "HN",
      "HasDrillDown" : "0",
      "Name" : "HONDURAS",
      "Opens" : "0"
    }, {
      "Code" : "HK",
      "HasDrillDown" : "1",
      "Name" : "HONG KONG",
      "Opens" : "0"
    }, {
      "Code" : "HU",
      "HasDrillDown" : "1",
      "Name" : "HUNGARY",
      "Opens" : "0"
    }, {
      "Code" : "IS",
      "HasDrillDown" : "1",
      "Name" : "ICELAND",
      "Opens" : "0"
    }, {
      "Code" : "IN",
      "HasDrillDown" : "1",
      "Name" : "INDIA",
      "Opens" : "1"
    }, {
      "Code" : "ID",
      "HasDrillDown" : "1",
      "Name" : "INDONESIA",
      "Opens" : "0"
    }, {
      "Code" : "IR",
      "HasDrillDown" : "0",
      "Name" : "IRAN -  ISLAMIC REPUBLIC OF",
      "Opens" : "0"
    }, {
      "Code" : "IQ",
      "HasDrillDown" : "0",
      "Name" : "IRAQ",
      "Opens" : "0"
    }, {
      "Code" : "IE",
      "HasDrillDown" : "1",
      "Name" : "IRELAND",
      "Opens" : "0"
    }, {
      "Code" : "IM",
      "HasDrillDown" : "0",
      "Name" : "ISLE OF MAN",
      "Opens" : "0"
    }, {
      "Code" : "IL",
      "HasDrillDown" : "1",
      "Name" : "ISRAEL",
      "Opens" : "0"
    }, {
      "Code" : "IT",
      "HasDrillDown" : "1",
      "Name" : "ITALY",
      "Opens" : "0"
    }, {
      "Code" : "JM",
      "HasDrillDown" : "1",
      "Name" : "JAMAICA",
      "Opens" : "0"
    }, {
      "Code" : "JP",
      "HasDrillDown" : "1",
      "Name" : "JAPAN",
      "Opens" : "0"
    }, {
      "Code" : "JE",
      "HasDrillDown" : "0",
      "Name" : "JERSEY",
      "Opens" : "0"
    }, {
      "Code" : "JO",
      "HasDrillDown" : "1",
      "Name" : "JORDAN",
      "Opens" : "0"
    }, {
      "Code" : "KZ",
      "HasDrillDown" : "0",
      "Name" : "KAZAKHSTAN",
      "Opens" : "0"
    }, {
      "Code" : "KE",
      "HasDrillDown" : "0",
      "Name" : "KENYA",
      "Opens" : "0"
    }, {
      "Code" : "KI",
      "HasDrillDown" : "0",
      "Name" : "KIRIBATI",
      "Opens" : "0"
    }, {
      "Code" : "KP",
      "HasDrillDown" : "0",
      "Name" : "KOREA -  DEMOCRATIC PEOPLE'S REPUBLIC OF",
      "Opens" : "0"
    }, {
      "Code" : "KR",
      "HasDrillDown" : "0",
      "Name" : "KOREA -  REPUBLIC OF",
      "Opens" : "0"
    }, {
      "Code" : "KW",
      "HasDrillDown" : "1",
      "Name" : "KUWAIT",
      "Opens" : "0"
    }, {
      "Code" : "KG",
      "HasDrillDown" : "0",
      "Name" : "KYRGYZSTAN",
      "Opens" : "0"
    }, {
      "Code" : "LA",
      "HasDrillDown" : "1",
      "Name" : "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
      "Opens" : "0"
    }, {
      "Code" : "LV",
      "HasDrillDown" : "1",
      "Name" : "LATVIA",
      "Opens" : "0"
    }, {
      "Code" : "LB",
      "HasDrillDown" : "1",
      "Name" : "LEBANON",
      "Opens" : "0"
    }, {
      "Code" : "LS",
      "HasDrillDown" : "0",
      "Name" : "LESOTHO",
      "Opens" : "0"
    }, {
      "Code" : "LR",
      "HasDrillDown" : "0",
      "Name" : "LIBERIA",
      "Opens" : "0"
    }, {
      "Code" : "LY",
      "HasDrillDown" : "0",
      "Name" : "LIBYAN ARAB JAMAHIRIYA",
      "Opens" : "0"
    }, {
      "Code" : "LI",
      "HasDrillDown" : "0",
      "Name" : "LIECHTENSTEIN",
      "Opens" : "0"
    }, {
      "Code" : "LT",
      "HasDrillDown" : "1",
      "Name" : "LITHUANIA",
      "Opens" : "0"
    }, {
      "Code" : "LU",
      "HasDrillDown" : "1",
      "Name" : "LUXEMBOURG",
      "Opens" : "0"
    }, {
      "Code" : "MO",
      "HasDrillDown" : "0",
      "Name" : "MACAO",
      "Opens" : "0"
    }, {
      "Code" : "MK",
      "HasDrillDown" : "0",
      "Name" : "MACEDONIA -  THE FORMER YUGOSLAV REPUBLIC OF",
      "Opens" : "0"
    }, {
      "Code" : "MG",
      "HasDrillDown" : "0",
      "Name" : "MADAGASCAR",
      "Opens" : "0"
    }, {
      "Code" : "MW",
      "HasDrillDown" : "0",
      "Name" : "MALAWI",
      "Opens" : "0"
    }, {
      "Code" : "MY",
      "HasDrillDown" : "1",
      "Name" : "MALAYSIA",
      "Opens" : "0"
    }, {
      "Code" : "MV",
      "HasDrillDown" : "0",
      "Name" : "MALDIVES",
      "Opens" : "0"
    }, {
      "Code" : "ML",
      "HasDrillDown" : "0",
      "Name" : "MALI",
      "Opens" : "0"
    }, {
      "Code" : "MT",
      "HasDrillDown" : "0",
      "Name" : "MALTA",
      "Opens" : "0"
    }, {
      "Code" : "MH",
      "HasDrillDown" : "0",
      "Name" : "MARSHALL ISLANDS",
      "Opens" : "0"
    }, {
      "Code" : "MQ",
      "HasDrillDown" : "0",
      "Name" : "MARTINIQUE",
      "Opens" : "0"
    }, {
      "Code" : "MR",
      "HasDrillDown" : "0",
      "Name" : "MAURITANIA",
      "Opens" : "0"
    }, {
      "Code" : "MU",
      "HasDrillDown" : "0",
      "Name" : "MAURITIUS",
      "Opens" : "0"
    }, {
      "Code" : "YT",
      "HasDrillDown" : "0",
      "Name" : "MAYOTTE",
      "Opens" : "0"
    }, {
      "Code" : "MX",
      "HasDrillDown" : "1",
      "Name" : "MEXICO",
      "Opens" : "0"
    }, {
      "Code" : "FM",
      "HasDrillDown" : "0",
      "Name" : "MICRONESIA -  FEDERATED STATES OF",
      "Opens" : "0"
    }, {
      "Code" : "MD",
      "HasDrillDown" : "0",
      "Name" : "MOLDOVA -  REPUBLIC OF",
      "Opens" : "0"
    }, {
      "Code" : "MC",
      "HasDrillDown" : "0",
      "Name" : "MONACO",
      "Opens" : "0"
    }, {
      "Code" : "MN",
      "HasDrillDown" : "1",
      "Name" : "MONGOLIA",
      "Opens" : "0"
    }, {
      "Code" : "ME",
      "HasDrillDown" : "0",
      "Name" : "MONTENEGRO",
      "Opens" : "0"
    }, {
      "Code" : "MS",
      "HasDrillDown" : "0",
      "Name" : "MONTSERRAT",
      "Opens" : "0"
    }, {
      "Code" : "MA",
      "HasDrillDown" : "0",
      "Name" : "MOROCCO",
      "Opens" : "0"
    }, {
      "Code" : "MZ",
      "HasDrillDown" : "1",
      "Name" : "MOZAMBIQUE",
      "Opens" : "0"
    }, {
      "Code" : "MM",
      "HasDrillDown" : "0",
      "Name" : "MYANMAR",
      "Opens" : "0"
    }, {
      "Code" : "NA",
      "HasDrillDown" : "0",
      "Name" : "NAMIBIA",
      "Opens" : "0"
    }, {
      "Code" : "NR",
      "HasDrillDown" : "0",
      "Name" : "NAURU",
      "Opens" : "0"
    }, {
      "Code" : "NP",
      "HasDrillDown" : "1",
      "Name" : "NEPAL",
      "Opens" : "0"
    }, {
      "Code" : "NL",
      "HasDrillDown" : "1",
      "Name" : "NETHERLANDS",
      "Opens" : "0"
    }, {
      "Code" : "AN",
      "HasDrillDown" : "0",
      "Name" : "NETHERLANDS ANTILLES",
      "Opens" : "0"
    }, {
      "Code" : "NC",
      "HasDrillDown" : "0",
      "Name" : "NEW CALEDONIA",
      "Opens" : "0"
    }, {
      "Code" : "NZ",
      "HasDrillDown" : "1",
      "Name" : "NEW ZEALAND",
      "Opens" : "0"
    }, {
      "Code" : "NI",
      "HasDrillDown" : "1",
      "Name" : "NICARAGUA",
      "Opens" : "0"
    }, {
      "Code" : "NE",
      "HasDrillDown" : "0",
      "Name" : "NIGER",
      "Opens" : "0"
    }, {
      "Code" : "NG",
      "HasDrillDown" : "1",
      "Name" : "NIGERIA",
      "Opens" : "0"
    }, {
      "Code" : "NU",
      "HasDrillDown" : "0",
      "Name" : "NIUE",
      "Opens" : "0"
    }, {
      "Code" : "NF",
      "HasDrillDown" : "0",
      "Name" : "NORFOLK ISLAND",
      "Opens" : "0"
    }, {
      "Code" : "MP",
      "HasDrillDown" : "0",
      "Name" : "NORTHERN MARIANA ISLANDS",
      "Opens" : "0"
    }, {
      "Code" : "NO",
      "HasDrillDown" : "1",
      "Name" : "NORWAY",
      "Opens" : "0"
    }, {
      "Code" : "OM",
      "HasDrillDown" : "1",
      "Name" : "OMAN",
      "Opens" : "0"
    }, {
      "Code" : "PK",
      "HasDrillDown" : "1",
      "Name" : "PAKISTAN",
      "Opens" : "0"
    }, {
      "Code" : "PW",
      "HasDrillDown" : "0",
      "Name" : "PALAU",
      "Opens" : "0"
    }, {
      "Code" : "PA",
      "HasDrillDown" : "0",
      "Name" : "PANAMA",
      "Opens" : "0"
    }, {
      "Code" : "PG",
      "HasDrillDown" : "0",
      "Name" : "PAPUA NEW GUINEA",
      "Opens" : "0"
    }, {
      "Code" : "PY",
      "HasDrillDown" : "1",
      "Name" : "PARAGUAY",
      "Opens" : "0"
    }, {
      "Code" : "PE",
      "HasDrillDown" : "1",
      "Name" : "PERU",
      "Opens" : "0"
    }, {
      "Code" : "PH",
      "HasDrillDown" : "1",
      "Name" : "PHILIPPINES",
      "Opens" : "0"
    }, {
      "Code" : "PN",
      "HasDrillDown" : "0",
      "Name" : "PITCAIRN",
      "Opens" : "0"
    }, {
      "Code" : "PL",
      "HasDrillDown" : "1",
      "Name" : "POLAND",
      "Opens" : "0"
    }, {
      "Code" : "PT",
      "HasDrillDown" : "1",
      "Name" : "PORTUGAL",
      "Opens" : "0"
    }, {
      "Code" : "PR",
      "HasDrillDown" : "0",
      "Name" : "PUERTO RICO",
      "Opens" : "0"
    }, {
      "Code" : "QA",
      "HasDrillDown" : "1",
      "Name" : "QATAR",
      "Opens" : "0"
    }, {
      "Code" : "RE",
      "HasDrillDown" : "0",
      "Name" : "REUNION",
      "Opens" : "0"
    }, {
      "Code" : "RO",
      "HasDrillDown" : "1",
      "Name" : "ROMANIA",
      "Opens" : "0"
    }, {
      "Code" : "RU",
      "HasDrillDown" : "1",
      "Name" : "RUSSIAN FEDERATION",
      "Opens" : "0"
    }, {
      "Code" : "RW",
      "HasDrillDown" : "0",
      "Name" : "RWANDA",
      "Opens" : "0"
    }, {
      "Code" : "KN",
      "HasDrillDown" : "0",
      "Name" : "SAINT KITTS AND NEVIS",
      "Opens" : "0"
    }, {
      "Code" : "LC",
      "HasDrillDown" : "0",
      "Name" : "SAINT LUCIA",
      "Opens" : "0"
    }, {
      "Code" : "VC",
      "HasDrillDown" : "0",
      "Name" : "SAINT VINCENT AND THE GRENADINES",
      "Opens" : "0"
    }, {
      "Code" : "WS",
      "HasDrillDown" : "0",
      "Name" : "SAMOA",
      "Opens" : "0"
    }, {
      "Code" : "SM",
      "HasDrillDown" : "0",
      "Name" : "SAN MARINO",
      "Opens" : "0"
    }, {
      "Code" : "ST",
      "HasDrillDown" : "0",
      "Name" : "SAO TOME AND PRINCIPE",
      "Opens" : "0"
    }, {
      "Code" : "SA",
      "HasDrillDown" : "1",
      "Name" : "SAUDI ARABIA",
      "Opens" : "0"
    }, {
      "Code" : "SN",
      "HasDrillDown" : "0",
      "Name" : "SENEGAL",
      "Opens" : "0"
    }, {
      "Code" : "RS",
      "HasDrillDown" : "1",
      "Name" : "SERBIA",
      "Opens" : "0"
    }, {
      "Code" : "CS",
      "HasDrillDown" : "0",
      "Name" : "SERBIA AND MONTENEGRO",
      "Opens" : "0"
    }, {
      "Code" : "SC",
      "HasDrillDown" : "0",
      "Name" : "SEYCHELLES",
      "Opens" : "0"
    }, {
      "Code" : "SL",
      "HasDrillDown" : "0",
      "Name" : "SIERRA LEONE",
      "Opens" : "0"
    }, {
      "Code" : "SG",
      "HasDrillDown" : "1",
      "Name" : "SINGAPORE",
      "Opens" : "0"
    }, {
      "Code" : "SK",
      "HasDrillDown" : "0",
      "Name" : "SLOVAKIA",
      "Opens" : "0"
    }, {
      "Code" : "SI",
      "HasDrillDown" : "0",
      "Name" : "SLOVENIA",
      "Opens" : "0"
    }, {
      "Code" : "SB",
      "HasDrillDown" : "0",
      "Name" : "SOLOMON ISLANDS",
      "Opens" : "0"
    }, {
      "Code" : "SO",
      "HasDrillDown" : "0",
      "Name" : "SOMALIA",
      "Opens" : "0"
    }, {
      "Code" : "ZA",
      "HasDrillDown" : "1",
      "Name" : "SOUTH AFRICA",
      "Opens" : "0"
    }, {
      "Code" : "GS",
      "HasDrillDown" : "0",
      "Name" : "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
      "Opens" : "0"
    }, {
      "Code" : "ES",
      "HasDrillDown" : "1",
      "Name" : "SPAIN",
      "Opens" : "0"
    }, {
      "Code" : "LK",
      "HasDrillDown" : "0",
      "Name" : "SRI LANKA",
      "Opens" : "0"
    }, {
      "Code" : "SD",
      "HasDrillDown" : "0",
      "Name" : "SUDAN",
      "Opens" : "0"
    }, {
      "Code" : "SR",
      "HasDrillDown" : "1",
      "Name" : "SURINAME",
      "Opens" : "0"
    }, {
      "Code" : "SZ",
      "HasDrillDown" : "0",
      "Name" : "SWAZILAND",
      "Opens" : "0"
    }, {
      "Code" : "SE",
      "HasDrillDown" : "1",
      "Name" : "SWEDEN",
      "Opens" : "0"
    }, {
      "Code" : "CH",
      "HasDrillDown" : "1",
      "Name" : "SWITZERLAND",
      "Opens" : "0"
    }, {
      "Code" : "SY",
      "HasDrillDown" : "1",
      "Name" : "SYRIAN ARAB REPUBLIC",
      "Opens" : "0"
    }, {
      "Code" : "TW",
      "HasDrillDown" : "1",
      "Name" : "TAIWAN",
      "Opens" : "0"
    }, {
      "Code" : "TJ",
      "HasDrillDown" : "1",
      "Name" : "TAJIKISTAN",
      "Opens" : "0"
    }, {
      "Code" : "TZ",
      "HasDrillDown" : "0",
      "Name" : "TANZANIA -  UNITED REPUBLIC OF",
      "Opens" : "0"
    }, {
      "Code" : "TH",
      "HasDrillDown" : "1",
      "Name" : "THAILAND",
      "Opens" : "0"
    }, {
      "Code" : "TL",
      "HasDrillDown" : "0",
      "Name" : "TIMOR-LESTE",
      "Opens" : "0"
    }, {
      "Code" : "TG",
      "HasDrillDown" : "0",
      "Name" : "TOGO",
      "Opens" : "0"
    }, {
      "Code" : "TK",
      "HasDrillDown" : "0",
      "Name" : "TOKELAU",
      "Opens" : "0"
    }, {
      "Code" : "TO",
      "HasDrillDown" : "0",
      "Name" : "TONGA",
      "Opens" : "0"
    }, {
      "Code" : "TT",
      "HasDrillDown" : "0",
      "Name" : "TRINIDAD AND TOBAGO",
      "Opens" : "0"
    }, {
      "Code" : "TN",
      "HasDrillDown" : "0",
      "Name" : "TUNISIA",
      "Opens" : "0"
    }, {
      "Code" : "TR",
      "HasDrillDown" : "1",
      "Name" : "TURKEY",
      "Opens" : "0"
    }, {
      "Code" : "TM",
      "HasDrillDown" : "1",
      "Name" : "TURKMENISTAN",
      "Opens" : "0"
    }, {
      "Code" : "TC",
      "HasDrillDown" : "0",
      "Name" : "TURKS AND CAICOS ISLANDS",
      "Opens" : "0"
    }, {
      "Code" : "TV",
      "HasDrillDown" : "0",
      "Name" : "TUVALU",
      "Opens" : "0"
    }, {
      "Code" : "UG",
      "HasDrillDown" : "0",
      "Name" : "UGANDA",
      "Opens" : "0"
    }, {
      "Code" : "UA",
      "HasDrillDown" : "1",
      "Name" : "UKRAINE",
      "Opens" : "0"
    }, {
      "Code" : "AE",
      "HasDrillDown" : "1",
      "Name" : "UNITED ARAB EMIRATES",
      "Opens" : "0"
    }, {
      "Code" : "UK",
      "HasDrillDown" : "0",
      "Name" : "UNITED KINGDOM",
      "Opens" : "0"
    }, {
      "Code" : "US",
      "HasDrillDown" : "1",
      "Name" : "UNITED STATES",
      "Opens" : "0"
    }, {
      "Code" : "UM",
      "HasDrillDown" : "0",
      "Name" : "UNITED STATES MINOR OUTLYING ISLANDS",
      "Opens" : "0"
    }, {
      "Code" : "UY",
      "HasDrillDown" : "1",
      "Name" : "URUGUAY",
      "Opens" : "0"
    }, {
      "Code" : "UZ",
      "HasDrillDown" : "1",
      "Name" : "UZBEKISTAN",
      "Opens" : "0"
    }, {
      "Code" : "VU",
      "HasDrillDown" : "0",
      "Name" : "VANUATU",
      "Opens" : "0"
    }, {
      "Code" : "VE",
      "HasDrillDown" : "1",
      "Name" : "VENEZUELA",
      "Opens" : "0"
    }, {
      "Code" : "VN",
      "HasDrillDown" : "1",
      "Name" : "VIET NAM",
      "Opens" : "0"
    }, {
      "Code" : "VG",
      "HasDrillDown" : "0",
      "Name" : "VIRGIN ISLANDS -  BRITISH",
      "Opens" : "0"
    }, {
      "Code" : "VI",
      "HasDrillDown" : "0",
      "Name" : "VIRGIN ISLANDS -  U.S.",
      "Opens" : "0"
    }, {
      "Code" : "WF",
      "HasDrillDown" : "0",
      "Name" : "WALLIS AND FUTUNA",
      "Opens" : "0"
    }, {
      "Code" : "YE",
      "HasDrillDown" : "1",
      "Name" : "YEMEN",
      "Opens" : "0"
    }, {
      "Code" : "ZM",
      "HasDrillDown" : "0",
      "Name" : "ZAMBIA",
      "Opens" : "0"
    }, {
      "Code" : "ZW",
      "HasDrillDown" : "0",
      "Name" : "ZIMBABWE",
      "Opens" : "0"
    } ],
    "Error" : [ ],
    "Status" : ""
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
 * Getting opens by country and region
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  <tr><td>{{Country}}</td><td>required</td><td>string</td><td>Country</td></tr>  <tr><td>{{Region}}</td><td>required</td><td>string</td><td>Region</td></tr>  </tbody>  </table>    <h4>Query String parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Language</td><td>optional</td><td>string</td><td>Language</td></tr>  <tr><td>PageNumber</td><td>optional</td><td>int</td><td>Page number</td></tr>  <tr><td>PageSize</td><td>optional</td><td>int</td><td>Number of records to show per page</td></tr>  <tr><td>Filter</td><td>optional</td><td>int</td><td>Filter</td></tr>  <tr><td>OrderBy</td><td>optional</td><td>int</td><td>Field to order by, <code>email</code>, <code>data</code></td></tr>  <tr><td>SortOrder</td><td>optional</td><td>int</td><td>Sort Order, <code>asc</code> or <code>desc</code></td></tr>  <tr><td>AbID</td><td>optional</td><td>string</td><td>ID of AB Test</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailOpenRegionData\">EmailOpenRegionData</a></td><td>Opens Region</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  <tr><td>Subject</td><td>string</td><td>Subject</td></tr>  <tr><td>Name</td><td>string</td><td>Name</td></tr>  <tr><td>IsAutoresponder</td><td>string</td><td>Whether the email is an autoresponder or not</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * country String 
 * region String 
 * returns GettingOpensByCountryAndRegion
 **/
exports.emailsReportOpensRegionByIDAndCountryGet = function(authToken,contentType,iD,country,region) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "ContactID" : "2004264986",
      "ContactMasterID" : "15210912",
      "Date" : "Oct 27 2017, 09:37 AM",
      "Email" : "test@cybermaxsolutions.com",
      "Name" : "Test "
    } ],
    "Error" : [ ],
    "IsAutoresponder" : "0",
    "Name" : "Postman Test EMail Campaign",
    "Status" : "1",
    "Subject" : "Postman Test EMail Campaign"
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
 * GET Social Performance
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the EMail</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>FacebookShareCount</td><td>int</td><td>Facebook Share number</td></tr>  <tr><td>FacebookLikeCount</td><td>int</td><td>Facebook Like number</td></tr>  <tr><td>TwitterCount</td><td>int</td><td>Twitter number</td></tr>  <tr><td>LinkedInCount</td><td>int</td><td>LinkedIn number</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetSocialPerformance
 **/
exports.emailsReportSocialPerformanceByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "FacebookLikeCount" : 2,
    "FacebookShareCount" : 1,
    "LinkedInCount" : 1,
    "Status" : "1",
    "TwitterCount" : 2
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
 * GET Unopens report By Email ID
 * <h4>Get a list of contacts</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailUnopenedData\">EmailUnopenedData</a></td><td>Email Unopened Data</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetUnopensReportByEmailId
 **/
exports.emailsReportUnopensByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "ContactID" : "2023901284",
      "ContactMasterID" : "15235471",
      "Email" : "test@cybermaxsolutions.com",
      "IsAutoresponder" : "",
      "Name" : "No Name"
    } ],
    "Error" : [ ],
    "IsAutoresponder" : "0",
    "Name" : "Test Mail Rest 10",
    "Status" : "1",
    "Subject" : "Test Mail Rest"
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
 * GET Unsubscribe report By Email ID
 * <h4>GET Unsubscribe report By Email ID</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 if error</td></tr>  <tr><td>Count</td><td>int</td><td>Total number</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailUnsubscribeData\">EmailUnsubscribeData</a></td><td>Email Unsubscribe Data</td></tr>  <tr><td>Summary</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailUnsubscribeReasonCountData\">UnsubscribeReasonCountData</a></td><td>Unsubscribe Reasons</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetUnsubscribeReportByEmailId
 **/
exports.emailsReportUnsubscribesByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "ContactID" : "",
      "ContactMasterID" : "0",
      "Date" : "Aug 26 2016, 12:40 PM",
      "Email" : "test@cybermaxsolutions.com",
      "Name" : "No Name",
      "Reason" : ""
    } ],
    "Error" : [ ],
    "IsAutoresponder" : "0",
    "Name" : "Test EMail Campaign",
    "Status" : "1",
    "Subject" : "Test EMail Campaign",
    "Summary" : {
      "CountReason1" : "0",
      "CountReason2" : "0",
      "CountReason3" : "0",
      "CountReason4" : "0",
      "CountReason5" : "0",
      "CountReasonUnspecified" : "1"
    }
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
 * Save as List
 * <h4>Save as List</h4>    <h4>Body Parameters (To be passed as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>EmailID</td><td>optional</td><td>string</td><td>Email ID</td></tr>  <tr><td>EventID</td><td>optional</td><td>string</td><td>Event ID</td></tr>  <tr><td>ABID</td><td>optional</td><td>string</td><td>AB ID</td></tr>  <tr><td>RType</td><td>optional</td><td>string</td><td>Report Type</td></tr>  <tr><td>LinkName</td><td>optional</td><td>string</td><td>LinkName</td></tr>  <tr><td>Filter</td><td>optional</td><td>string</td><td>Filter</td></tr>  <tr><td>Region</td><td>optional</td><td>string</td><td>Region</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>string</td><td>1 if successful, -1 error</td></tr>  <tr><td>ListName</td><td>string</td><td>List Name</td></tr>  <tr><td>ListDescription</td><td>string</td><td>List Description</td></tr>  <tr><td>ReportTypeText</td><td>string</td><td>Report type</td></tr>  <tr><td>Error</td><td><a href=\"http://www.benchmarkemail.com/models.htm#EmailErrorData\">ErrorData</a></td><td>Array of errors</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns SaveAsList
 **/
exports.emailsSaveAsListPatch = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Error" : [ ],
    "ListDescription" : "Sublist based on Open Report for - &quot;Open Report : Jul 21 2017 Email&quot;",
    "ListName" : "Open Report : Jul 21 2017 Email",
    "ReportTypeText" : "OPENS",
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
 * GET URL List By Email ID
 * <h4>GET URL List By Email ID</h4>  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>{{ID}}</td><td>required</td><td>string</td><td>ID of the Email</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Data</td><td>required</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ClientGenericList\">GenericList</a></td><td>URL Data</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetUrlListByEmailId
 **/
exports.emailsURLListByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : [ {
      "ID" : "1",
      "Value" : "http://bmetrack.bmetrack.com/c/v/9tSN8Jgb1CYDIfCjIiaoiH6yspH2SW1N%2FJQn6LmyqPo%3D"
    }, {
      "ID" : "2",
      "Value" : "http://www.facebook.com"
    }, {
      "ID" : "3",
      "Value" : "http://plus.google.com"
    }, {
      "ID" : "4",
      "Value" : "http://twitter.com"
    }, {
      "ID" : "5",
      "Value" : "[ViewWebURL]"
    }, {
      "ID" : "6",
      "Value" : "[ConfirmURL]"
    }, {
      "ID" : "7",
      "Value" : "[UnsubscribeURL]"
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
 * Get Poll response report
 * <h4>Get Poll response report</h4> <b>Query string parameters :</b> None <br> <b>Request Body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>PollID</td>       <td>Required</td>       <td>String</td>       <td>Poll ID</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>string</td>       <td>Poll ID</td>     </tr>     <tr>       <td>Name</td>       <td>String</td>       <td>Name of a poll</td>     </tr>     <tr>       <td>URL</td>       <td>string</td>       <td>Poll URL</td>     </tr>     <tr>       <td>Code</td>       <td>String</td>       <td>Code</td>     </tr>     <tr>       <td>ShareLink</td>       <td>string</td>       <td>Link to share Poll</td>     </tr>     <tr>       <td>Question</td>       <td>String</td>       <td>Question</td>     </tr>     <tr>       <td>Status</td>       <td>String</td>       <td>Status</td>     </tr>     <tr>       <td>Options</td>       <td>ArrayList</td>       <td>Array of Answers</td>     </tr>     <tr>       <td>Button</td>       <td>string</td>       <td>Button</td>     </tr>     <tr>       <td>Responses</td>       <td>String</td>       <td>Name of Responses</td>     </tr>     <tr>       <td>CreatedDate</td>       <td>string</td>       <td>Poll Created Date</td>     </tr>     <tr>       <td>LiveDate</td>       <td>String</td>       <td>Poll Live Date</td>     </tr>     <tr>       <td>ModifiedDate</td>       <td>string</td>       <td>Poll Modified Date</td>     </tr>     <tr>       <td>Sequence</td>       <td>string</td>       <td>Sequence</td>     </tr>     <tr>       <td>CSS</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#CSSData\" >CSSData</a></td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Answers</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#AnswerData\" >AnswerData</a></td>       <td>&nbsp;</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * pollID String 
 * returns GetPollResponseReport
 **/
exports.pollResponseByPollIDGet = function(authToken,contentType,pollID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Report Answer Comment in Survey
 * <h4>Get Report Answer Comment in Survey</h4> <b>Query string parameters : </b> <table> <thead> <tr> <th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr> </thead> <tbody> <tr><td>QuestionID</td><td>required</td><td>int</td><td>ID of the question</td></tr> </tbody> </table> <b>Request Body parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>SurveyID</td>       <td>Required</td>       <td>string</td>       <td>SurveyID</td>     </tr>   </tbody> </table> <b>Response body parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Name</td>       <td>string</td>       <td>Survey Name</td>     </tr>     <tr>       <td>Answers</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyCommentAnswers\" >SurveyCommentAnswers</a></td>       <td>Answers</td>     </tr>   </tbody> </table>
 *
 * questionID String 
 * authToken String 
 * contentType String 
 * surveyID String 
 * returns GetReportAnswerCommentInSurvey
 **/
exports.surveyReportAnswerCommentBySurveyIDGet = function(questionID,authToken,contentType,surveyID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Answers" : [ {
      "Comment" : "Cool",
      "Email" : "test@cybermaxsolutions.com"
    } ],
    "Name" : "Test Survey"
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
 * Get ReportAnswerOther in Survey
 * <h4>Get ReportAnswerOther in Survey</h4> <b>Query string parameters : </b> <table>   <thead>     <tr>       <th>Key</th><th>Required</th><th>Type</th><th>Description</th>     </tr>   </thead>   <tbody>     <tr><td>QuestionID</td><td>required</td><td>int</td><td>ID of the question</td></tr>   </tbody> </table> <b>Request Body parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>SurveyID</td>       <td>Required</td>       <td>string</td>       <td>SurveyID</td>     </tr>   </tbody> </table> <b>Response body parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Name</td>       <td>string</td>       <td>Survey Name</td>     </tr>     <tr>       <td>Answers</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyCommentAnswers\" >SurveyCommentAnswers</a></td>       <td>Answers</td>     </tr>   </tbody> </table>
 *
 * questionID String 
 * authToken String 
 * contentType String 
 * surveyID String 
 * returns GetReportanswerotherInSurvey
 **/
exports.surveyReportAnswerOtherBySurveyIDGet = function(questionID,authToken,contentType,surveyID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Answers" : [ {
      "Answer" : "Testing Reply",
      "Email" : "test@cybermaxsolutions.com"
    } ],
    "Name" : "Test Survey"
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
 * Get Report Answer Text in Survey
 * <h4>Get Report Answer Text in Survey</h4> <b>Query string parameters : </b> <table>   <thead>     <tr>       <th>Key</th><th>Required</th><th>Type</th><th>Description</th>     </tr>   </thead>   <tbody>     <tr><td>QuestionID</td><td>required</td><td>int</td><td>ID of the question</td></tr>   </tbody> </table> <b>Request Body Parameters : </b> <table >   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>SurveyID</td>       <td>Required</td>       <td>string</td>       <td>Survey ID</td>     </tr>   </tbody> </table>  <b>Response Body Parameters : </b> <table >   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Responses</td>       <td>int</td>       <td>Responses</td>     </tr>     <tr>       <td>Name</td>       <td>string</td>       <td>Survey Name</td>     </tr>     <tr>       <td>Question</td>       <td>string</td>       <td>Survey ID</td>     </tr>     <tr>       <td>Answers</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyTextAnswers\" >SurveyTextAnswers</a></td>       <td>Questions</td>     </tr>   </tbody> </table>
 *
 * questionID String 
 * authToken String 
 * contentType String 
 * surveyID String 
 * returns GetReportAnswerTextInSurvey
 **/
exports.surveyReportAnswerTextBySurveyIDGet = function(questionID,authToken,contentType,surveyID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Answers" : [ {
      "Answer" : "Cool",
      "Email" : "test1@cybermaxsolutions.com"
    }, {
      "Answer" : "Cool",
      "Email" : "test2@cybermaxsolutions.com"
    } ],
    "Name" : "Test Survey",
    "Question" : "How are you?",
    "Responses" : 2
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
 * Get Report detail of Survey
 * <h4>Get Report detail of Survey</h4> <b>Query string parameters : </b> None <br> <b>Request Body Parameters : </b> <table >   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>SurveyID</td>       <td>Required</td>       <td>string</td>       <td>Survey ID</td>     </tr>   </tbody> </table>  <b>Response Body Parameters : </b> <table >   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>QuestionCount</td>       <td>int</td>       <td>Count of questio</td>     </tr>     <tr>       <td>Responses</td>       <td>int</td>       <td>Responses</td>     </tr>     <tr>       <td>Name</td>       <td>string</td>       <td>Survey Name</td>     </tr>     <tr>       <td>ID</td>       <td>string</td>       <td>Survey ID</td>     </tr>     <tr>       <td>Questions</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyReportQuestion\" >SurveyReportQuestion</a></td>       <td>Questions</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * surveyID String 
 * returns GetReportDetailOfSurvey
 **/
exports.surveyReportDetailBySurveyIDGet = function(authToken,contentType,surveyID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ID" : "716624",
    "Name" : "Oct 14 2017",
    "QuestionCount" : 7,
    "Questions" : [ {
      "Answers" : [ {
        "Answer" : "少於6個月",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "介於6個月　～　1年",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "介於1年 ～　3年",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "介於3年 ～　5年",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "5年以上",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "#OTHERS#",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "#NORESPONSE#",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      } ],
      "CommentCount" : 0,
      "Question" : "請問您使用我們的服務時間?",
      "QuestionID" : "677823",
      "QuestionType" : "2",
      "ResponseRatio" : "0",
      "Sequence" : 1,
      "Total" : 0
    }, {
      "Answers" : [ {
        "Answer" : "填寫服務項目",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "填寫服務項目",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "填寫服務項目",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "填寫服務項目",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "填寫服務項目",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "#OTHERS#",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "#NORESPONSE#",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      } ],
      "CommentCount" : 0,
      "Question" : "您最常使用哪一類型的服務?",
      "QuestionID" : "677824",
      "QuestionType" : "2",
      "ResponseRatio" : "0",
      "Sequence" : 2,
      "Total" : 0
    }, {
      "Answers" : [ {
        "Answer" : "少於一次",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "每年一次",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "每年二到三次",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "每年四次",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "每年五次或更多",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "#OTHERS#",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "#NORESPONSE#",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      } ],
      "CommentCount" : 0,
      "Question" : "每年使用我們的服務次數為何?",
      "QuestionID" : "677825",
      "QuestionType" : "2",
      "ResponseRatio" : "0",
      "Sequence" : 3,
      "Total" : 0
    }, {
      "Answers" : [ {
        "Answer" : "#INDIVIDUAL#",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      } ],
      "CommentCount" : 0,
      "Question" : "我們想了解您的意見與看法。我們應該如何改進服務品質?",
      "QuestionID" : "677826",
      "QuestionType" : "5",
      "ResponseRatio" : "0",
      "Sequence" : 4,
      "Total" : 0
    }, {
      "Answers" : [ {
        "Answer" : "行政部門",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "會計部門",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "業務部門",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "諮詢/顧問部門",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "工程部門",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "財務部門",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "人力資源部門",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "行銷/銷售部門",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "公關部門",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "策略部門",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "#OTHERS#",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      }, {
        "Answer" : "#NORESPONSE#",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      } ],
      "CommentCount" : 0,
      "Question" : "您的工作部門?",
      "QuestionID" : "677827",
      "QuestionType" : "4",
      "ResponseRatio" : "0",
      "Sequence" : 5,
      "Total" : 0
    }, {
      "Answers" : [ {
        "Answer" : "#INDIVIDUAL#",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      } ],
      "CommentCount" : 0,
      "Question" : "?",
      "QuestionID" : "704679",
      "QuestionType" : "1",
      "ResponseRatio" : "0",
      "Sequence" : 6,
      "Total" : 0
    }, {
      "Answers" : [ {
        "Answer" : "#INDIVIDUAL#",
        "Comment" : "",
        "Imgwidth" : 0,
        "ResponseRatio" : "0",
        "Responses" : 0
      } ],
      "CommentCount" : 0,
      "Question" : "???",
      "QuestionID" : "704680",
      "QuestionType" : "1",
      "ResponseRatio" : "0",
      "Sequence" : 7,
      "Total" : 0
    } ],
    "Responses" : 0,
    "hideEmail" : false
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
 * Get full report of Survey
 * <h4>Get a Full report Of Survey</h4> <b>Query String Parameters:</b> None <br> <b>Request Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>SurveyID</td>       <td>Required</td>       <td>string</td>       <td>Survey ID</td>     </tr>   </tbody> </table> <b>Response Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Name</td>       <td>string</td>       <td>Survey Name</td>     </tr>     <tr>       <td>Responses</td>       <td>string</td>       <td></td>     </tr>     <tr>       <td>Columns</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyColumns\" >SurveyColumns</a></td>       <td></td>     </tr>     <tr>       <td>Answers</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyCompileAnswers\" >SurveyCompileAnswers</a></td>       <td></td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * surveyID String 
 * returns GetAFullReportOfSurvey
 **/
exports.surveyReportFullBySurveyIDGet = function(authToken,contentType,surveyID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Answers" : [ {
      "Answers" : [ {
        "Data" : "test1@cybermaxsolutions.com"
      }, {
        "Data" : "Cool"
      }, {
        "Data" : " / Cool"
      }, {
        "Data" : "Nov 12 2016, 12:45 PM"
      } ]
    }, {
      "Answers" : [ {
        "Data" : "test2@cybermaxsolutions.com"
      }, {
        "Data" : "0,Testing Reply"
      }, {
        "Data" : ""
      }, {
        "Data" : "Oct 18 2017, 11:33 AM"
      } ]
    }, {
      "Answers" : [ {
        "Data" : "test3@cybermaxsolutions.com"
      }, {
        "Data" : "Cool"
      }, {
        "Data" : ""
      }, {
        "Data" : "Nov 12 2016, 12:44 PM"
      } ]
    } ],
    "Columns" : [ {
      "ColumnName" : "#EMAIL#"
    }, {
      "ColumnName" : "1.How are you?"
    } ],
    "Name" : "Test Survey",
    "Responses" : 3,
    "hideEmail" : false
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
 * Get Individual Question Result Detail in Survey
 * <h4>Get Individual Question Result Detail in Survey</h4> <b>Query string parameters : </b> None <br> <b>Request Body Parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>SurveyID</td>       <td>Required</td>       <td>string</td>       <td>Survey ID</td>     </tr>     <tr>       <td>EmailID</td>       <td>Required</td>       <td>string</td>       <td>Email Address</td>     </tr>   </tbody> </table> <b>Response Body Parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>     <tr>       <td>Name</td>       <td>string</td>       <td>Name of a Survey</td>     </tr>     <tr>       <td>Email</td>       <td>string</td>       <td>Email Address</td>     </tr>     <tr>       <td>SurveyID</td>       <td>string</td>       <td>Survey ID</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyIndividualQuestion\" >SurveyIndividualQuestion</a></td>       <td></td>     </tr>     <tr>       <td>Errors</td>       <td>ErrorData</td>       <td>Error messages</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * surveyID String 
 * emailID String 
 * returns GetIndividualQuestionResultDetailInSurvey
 **/
exports.surveyReportIndividualBySurveyIDAndEmailIDGet = function(authToken,contentType,surveyID,emailID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : [ {
      "Answers" : [ {
        "Answer" : "Okay",
        "Comment" : "",
        "Email" : "",
        "ResponseDate" : "",
        "Responses" : 0,
        "hasOther" : ""
      }, {
        "Answer" : "Fine",
        "Comment" : "",
        "Email" : "",
        "ResponseDate" : "",
        "Responses" : 0,
        "hasOther" : ""
      }, {
        "Answer" : "Good",
        "Comment" : "",
        "Email" : "",
        "ResponseDate" : "",
        "Responses" : 0,
        "hasOther" : ""
      }, {
        "Answer" : "Better",
        "Comment" : "",
        "Email" : "",
        "ResponseDate" : "",
        "Responses" : 0,
        "hasOther" : ""
      }, {
        "Answer" : "Best",
        "Comment" : "",
        "Email" : "",
        "ResponseDate" : "",
        "Responses" : 0,
        "hasOther" : ""
      }, {
        "Answer" : "Great",
        "Comment" : "",
        "Email" : "",
        "ResponseDate" : "",
        "Responses" : 0,
        "hasOther" : ""
      }, {
        "Answer" : "Cool",
        "Comment" : "",
        "Email" : "",
        "ResponseDate" : "",
        "Responses" : 1,
        "hasOther" : ""
      }, {
        "Answer" : "",
        "Comment" : "",
        "Email" : "",
        "ResponseDate" : "",
        "Responses" : 0,
        "hasOther" : "1"
      } ],
      "Name" : "",
      "Question" : "How are you?",
      "QuestionID" : "661833",
      "Responses" : 0,
      "Sequence" : 1
    } ],
    "Email" : "test@cybermaxsolutions.com",
    "Errors" : [ ],
    "ID" : "",
    "Name" : "Test Survey",
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
 * Get Report of Survey Individual Result
 * <h4>Get Report of Survey Individual Result</h4> <b>Query string parameters : </b> <table>   <thead>     <tr>       <th>Key</th><th>Required</th><th>Type</th><th>Description</th>     </tr>   </thead>   <tbody>     <tr><td>PageNumber</td><td>optional</td><td>int</td><td>Page number</td></tr>     <tr><td>PageSize</td><td>optional</td><td>int</td><td>Number of records to show per page</td></tr>     <tr><td>Filter</td><td>optional</td><td>string</td><td>Filter</td></tr>     <tr><td>OrderBy</td><td>optional</td><td>int</td><td>Field to order by, <code>date</code>, <code>email</code></td></tr>     <tr><td>SortOrder</td><td>optional</td><td>int</td><td>Sort Order, <code>asc</code> or <code>desc</code></td></tr>   </tbody> </table>  <b>Request Body Parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>SurveyID</td>       <td>Required</td>       <td>string</td>       <td>SurveyID</td>     </tr>   </tbody> </table> <b>Response Body Parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>Int</td>       <td></td>     </tr>     <tr>       <td>Responses</td>       <td>Int</td>       <td></td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>     <tr>       <td>Name</td>       <td>string</td>       <td>Survey Name</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyIndividualAnswers\" >SurveyIndividualAnswers </a></td>       <td>Data</td>     </tr>   </tbody> </table>
 *
 * pageNumber String 
 * pageSize String 
 * filter String 
 * orderBy String 
 * sortOrder String 
 * authToken String 
 * contentType String 
 * surveyID String 
 * returns GetReportOfSurveyIndividualResult
 **/
exports.surveyReportIndividualBySurveyIDGet = function(pageNumber,pageSize,filter,orderBy,sortOrder,authToken,contentType,surveyID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 3,
    "Data" : [ {
      "Answer" : "",
      "Comment" : "",
      "Email" : "test1@cybermaxsolutions.com",
      "ResponseDate" : "Nov 12, 2016",
      "Responses" : 0,
      "hasOther" : ""
    }, {
      "Answer" : "",
      "Comment" : "",
      "Email" : "test2@cybermaxsolutions.com",
      "ResponseDate" : "Nov 12, 2016",
      "Responses" : 0,
      "hasOther" : ""
    }, {
      "Answer" : "",
      "Comment" : "",
      "Email" : "test3@cybermaxsolutions.com",
      "ResponseDate" : "Oct 18, 2017",
      "Responses" : 0,
      "hasOther" : ""
    } ],
    "Name" : "Test Survey",
    "Responses" : 3,
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
 * Get Report List of Survey
 * <h4>Get Report List of Survey</h4> <b>Query string parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>     </thead>     <tbody>     <tr>       <td>PageNumber</td>       <td>Optional</td>       <td>int</td>       <td>Page Number</td>     </tr>     <tr>       <td>PageSize</td>       <td>Optional</td>       <td>int</td>       <td>Number of rows on the page</td>     </tr>     <tr>       <td>OrderBy</td>       <td>Optional</td>       <td>string</td>       <td>Order By Column</td>     </tr>     <tr>       <td>Filter</td>       <td>Optional</td>       <td>string</td>       <td>Filter by survey name</td>     </tr>     <tr>       <td>SortOrder</td>       <td>Optional</td>       <td>string</td>       <td>Sequence of order asc/desc</td>     </tr>   </tbody> </table>  <b>Response body parameters : </b> <table >   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>     </thead>     <tbody>     <tr>       <td>Count</td>       <td>int</td>       <td>Total number</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyData\" >SurveyData</a></td>       <td>Array of list returned.</td>     </tr>   </tbody> </table>
 *
 * pageNumber String 
 * pageSize String 
 * orderBy String 
 * filter String 
 * sortOrder String 
 * authToken String 
 * contentType String 
 * returns GetReportListOfSurvey
 **/
exports.surveyReportListGet = function(pageNumber,pageSize,orderBy,filter,sortOrder,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

