'use strict';


/**
 * Get Plan Information
 * <h4>Get Client's Plan Information</h4> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Addon</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientAddonResult\" >AddonResult</a></td>       <td>&nbsp;</td>     </tr>     <tr>       <td>EmailPlan</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientEmailPlanResult\" >EmailPlanResult</a></td>       <td>List of errors</td>     </tr>     <tr>     <tr>       <td>EventPlan</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientEventPlanResult\" >EventPlanResult</a></td>       <td>List of errors</td>     </tr>     <tr>       <td>ActiveContacts</td>       <td>string</td>       <td>Active Contacts</td>     </tr>      <tr>       <td>AccountContacts</td>       <td>string</td>       <td>Account Contacts</td>     </tr>      <tr>       <td>TotalContacts</td>       <td>string</td>       <td>Total Contacts</td>     </tr>      <tr>       <td>ContactsPercent</td>       <td>string</td>       <td>Contacts Percent</td>     </tr>      <tr>       <td>IsDedicated</td>       <td>string</td>       <td>1 = Is Dedicated, 0 = Not Dedicated</td>     </tr>      <tr>       <td>IsManual</td>       <td>string</td>       <td>1 = Is Manual, 0 = Not Manual</td>     </tr>      <tr>       <td>CreditAmount</td>       <td>string</td>       <td>Credit Amount</td>     </tr>      <tr>       <td>CanUpgrade</td>       <td>string</td>       <td>Can Upgrade</td>     </tr>      <tr>       <td>CurrencyCode</td>       <td>string</td>       <td>Currency Code</td>     </tr>      <tr>       <td>CurrencyPrefix</td>       <td>string</td>       <td>Currency Prefix</td>     </tr>      <tr>       <td>ClientCountry</td>       <td>string</td>       <td>Client Country</td>     </tr>      <tr>       <td>HasCard</td>       <td>string</td>       <td>Has Card</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GetPlanInformation
 **/
exports.clientPlanGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "AccountContacts" : "359394",
    "ActiveContacts" : "359394",
    "Addon" : {
      "AdditionalIPCount" : "4",
      "CurrentImage" : "4",
      "HasAdditionalIP" : "1",
      "HasImageHosting" : "0",
      "IPCancellationDate" : "",
      "IPCancellationDateMDY" : "",
      "IPExpireDate" : "30 Sep 2027",
      "IPExpireDateMDY" : "Sep 30, 2027",
      "IPExpired" : "0",
      "IPPrice" : "Rs.1,800.00",
      "ImageCancellationDate" : "",
      "ImageCancellationDateMDY" : "",
      "ImageExpireDate" : "",
      "ImageExpireDateMDY" : "",
      "ImageExpired" : "0",
      "ImageHostingPrice" : "Rs.150.00",
      "ImagePercent" : "40",
      "InboxBalance" : "0",
      "InboxPrice" : "Rs.450.00",
      "TotalImage" : "10"
    },
    "CanUpgrade" : "1",
    "ClientCountry" : "IN",
    "ContactsPercent" : "85",
    "CreditAmount" : "0",
    "CurrencyCode" : "Rs.",
    "CurrencyPrefix" : "Rs.",
    "EmailPlan" : {
      "Annual" : "",
      "CancellationDate" : "",
      "CancellationDateMDY" : "",
      "CurrentEmail" : "64,924",
      "CurrentLimit" : "0",
      "EmailDiscountAmount" : "",
      "EmailDiscountName" : "",
      "EmailDiscountPercent" : "",
      "EmailLimit" : "5950000",
      "EmailPercent" : "0",
      "ExpireDate" : "30 Sep 2027",
      "ExpireDateMDY" : "Sep 30, 2027",
      "FutureAddOn" : "",
      "FutureDate" : "",
      "FutureIsAnnualPlan" : "",
      "FuturePlanID" : "",
      "FuturePlanName" : "",
      "HasCancelled" : "0",
      "HasFuture" : "0",
      "IsExpired" : "0",
      "IsFreePlan" : "0",
      "IsListBased" : "1",
      "IsUnLimited" : "0",
      "OverageAmount" : "0.02",
      "PlanID" : "293",
      "PlanName" : "List Plan 425,000",
      "PlanPrice" : "111168",
      "StartDate" : "07 May 2016",
      "StartDateMDY" : "May 07, 2016",
      "TotalEmail" : "809,200,000"
    },
    "EventPlan" : {
      "CancellationDate" : "",
      "CancellationDateMDY" : "",
      "CurrentEvent" : "0",
      "EventPercent" : "0",
      "ExpireDate" : "10/12/2017 5:19:46 AM",
      "ExpireDateMDY" : "Oct 12, 2017",
      "FutureDate" : "",
      "FutureIsAnnualPlan" : "",
      "FuturePlanID" : "",
      "FuturePlanName" : "",
      "HasCancelled" : "0",
      "HasFuture" : "0",
      "IsExpired" : "1",
      "IsFreePlan" : "1",
      "IsUnLimited" : "0",
      "PlanID" : "10",
      "PlanName" : "Unlimited Events",
      "PlanPrice" : "",
      "TotalEvent" : "1000"
    },
    "HasCard" : "1",
    "IsDedicated" : "0",
    "IsManual" : "0",
    "TotalContacts" : "425000"
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
 * Get Profile Details
 * <h4>Get Client's Profile Details</h4> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Responce</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientProfileDetails\" >ClientProfileDetails</a></td>       <td>Array</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GetProfileDetails
 **/
exports.clientProfileDetailsGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Business_city" : "&#22478;&#24066;",
    "Business_country" : "India",
    "Business_phone" : "",
    "Business_state" : "&#32068;&#32340;&#21517;&#31281;",
    "Client_Products" : "EML P, EVT",
    "Company" : "&#32068;&#32340;&#21517;&#31281;",
    "Country_code" : "IN",
    "ELanguage" : "Chinese Traditional",
    "Language" : "english",
    "Modified_date" : "25/Oct/2017",
    "Phone" : "2518 6315",
    "address" : "&#36335;/&#34903;",
    "allow_sub_accounts" : "0",
    "bounces" : "60",
    "category" : "Business",
    "cc_expire_date" : "1/2024",
    "client_id" : "553754",
    "client_rating" : "-1.67",
    "client_status" : "Active",
    "confirmed" : "1",
    "contact_count" : "359394",
    "created_date" : "25/Aug/2015",
    "email" : "pooja@cybermaxsolutions.com",
    "emails_sent" : "1315",
    "experience" : "",
    "first_name" : "Pooja",
    "has_dedicated_ip" : "True",
    "last_name" : "Gorde",
    "list_size" : "1",
    "login" : "pooja@cybermaxsolutions.com",
    "opens" : "16",
    "origin_url" : "/Register",
    "paid_or_free" : "Paid",
    "payment_mode" : "Monthly",
    "plan_id" : "293",
    "plan_name" : "List Plan 425,000",
    "region_code" : "indiaR",
    "region_name" : "India Region",
    "state" : "州/省",
    "zip" : "&#37109;&#36958;&#21312;&#34399;"
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
 * Get Sub-Account balance
 * <h4>Get Sub-Account balance</h4> <b>Query string parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Sub-Account holder client ID</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Response</td>       <td>int</td>       <td>Plan Limit</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns Get subAccount balance
 **/
exports.clientSubAccountBalanceByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : 375000
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Sub-Account Details
 * <h4>Get Sub-Account Details</h4> <b>Query string parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Client ID</td>     </tr>   </tbody> </table> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientSubAccountDetail\" >SubAccountDetail</a></td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Errors</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>List of errors</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns Get subAccount details
 **/
exports.clientSubAccountByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "AllowCC" : "0",
      "EmailAddress" : "mahesh27oct@cybermaxsolutions.com",
      "FirstName" : "mahesh",
      "HasAllowCC" : "1",
      "ID" : "683120",
      "LastName" : "guhagarkar",
      "Login" : "mahesh27oct",
      "Password" : "**********",
      "Phone" : "2516314",
      "PlanID" : "398",
      "Status" : ""
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
 * Update Sub Account
 * <h4>Update Sub Account</h4> <b>Query String Parameter:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Sub Account ID</td>     </tr>   </tbody> </table> <b>URL parameters (to be encoded as JSON in body) :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>      <tr>       <td>Detail</td>       <td>Required</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientSubAccountDetail\">SubAccountDetail</a></td>       <td>Sub Account Detail Array</td>     </tr>   </tbody> </table> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientSubAccountDetail\" >SubAccountDetail</a></td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Errors</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>List of errors</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * body UpdateSubAccountrequest 
 * authToken String 
 * contentType String 
 * iD String 
 * returns UpdateSubAccount
 **/
exports.clientSubAccountByIDPatch = function(body,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "AllowCC" : "0",
      "EmailAddress" : "",
      "FirstName" : "",
      "HasAllowCC" : "1",
      "ID" : "0",
      "LastName" : "",
      "Login" : "",
      "Password" : "**********",
      "Phone" : "",
      "PlanID" : "",
      "Status" : ""
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
 * Get Sub-Accounts
 * <h4>Get Sub-Accounts</h4> <b>Query string parameters :</b> None <br>  <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>String</td>       <td>Number of Sub-Accounts</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientDetail\" >ClientDetail</a></td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>     <tr>       <td>HasInbox</td>       <td>string</td>       <td>&nbsp;</td>     </tr>     <tr>       <td>HasClientAccounts</td>       <td>string</td>       <td>&nbsp;</td>     </tr>     <tr>       <td>HasDates</td>       <td>string</td>       <td>&nbsp;</td>     </tr>     <tr>       <td>UniqueCount</td>       <td>string</td>       <td>&nbsp;</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns Get subAccounts
 **/
exports.clientSubAccountGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 2,
    "Data" : [ {
      "Active" : "1",
      "ActiveContacts" : "559",
      "CampaignsSent" : "0",
      "FirstName" : "mahesh",
      "ID" : "683120",
      "InboxAlloted" : "0",
      "InboxUsed" : "0",
      "LastName" : "guhagarkar",
      "Login" : "mahesh27oct",
      "Name" : "mahesh guhagarkar",
      "PlanID" : "",
      "PlanName" : "List Plan 2,500"
    }, {
      "Active" : "1",
      "ActiveContacts" : "359394",
      "CampaignsSent" : "1024",
      "FirstName" : "Pooja",
      "ID" : "553754",
      "InboxAlloted" : "0",
      "InboxUsed" : "0",
      "LastName" : "Gorde",
      "Login" : "pooja@cybermaxsolutions.com",
      "Name" : "Pooja Gorde",
      "PlanID" : "",
      "PlanName" : ""
    } ],
    "HasClientAccounts" : "1",
    "HasDates" : "0",
    "HasInbox" : "1",
    "Status" : "1",
    "UniqueCount" : "359953"
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
 * Get Sub-Account history details
 * <h4>Get Sub-Account history details</h4> <b>Query string parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>History ID</td>     </tr>     <tr>       <td>StartDate</td>       <td>Required</td>       <td>string</td>       <td>Billing cycle start date</td>     </tr>     <tr>       <td>EndDate</td>       <td>Required</td>       <td>string</td>       <td>Billing cycle End Date</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientSubAccountCampaign\" >SubAccountCampaign</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * iD String 
 * startDate String 
 * endDate String 
 * authToken String 
 * contentType String 
 * historyID String 
 * returns Get subAccount history details
 **/
exports.clientSubAccountHistoryByHistoryIDGet = function(iD,startDate,endDate,authToken,contentType,historyID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : [ {
      "CampaignSent" : "0",
      "ID" : "683120"
    }, {
      "CampaignSent" : "888",
      "ID" : "553754"
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
 * Get Sub-Account History
 * <h4>Get Sub-Account History</h4> <b>Query string parameters :</b> None <br>  <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientDate\" >ClientDate</a></td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns Get subAccount history
 **/
exports.clientSubAccountHistoryGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : [ {
      "EndDate" : "Sep 30, 2027",
      "ID" : "7629427",
      "StartDate" : "May 07, 2016"
    }, {
      "EndDate" : "Oct 03, 2017",
      "ID" : "6816900",
      "StartDate" : "May 07, 2016"
    }, {
      "EndDate" : "Jul 13, 2017",
      "ID" : "6816864",
      "StartDate" : "May 07, 2016"
    }, {
      "EndDate" : "Jul 13, 2017",
      "ID" : "6816857",
      "StartDate" : "May 07, 2016"
    }, {
      "EndDate" : "Jul 13, 2017",
      "ID" : "6816848",
      "StartDate" : "May 07, 2016"
    }, {
      "EndDate" : "Jul 13, 2017",
      "ID" : "5056217",
      "StartDate" : "May 07, 2016"
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
 * Add/Remove inbox tests from Sub-Account
 * <h4>Add/Remove inbox tests from Sub-Account</h4> <b>Request Body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Sub-Account holder Client ID</td>     </tr>     <tr>       <td>Tests</td>       <td>Required</td>       <td>int</td>       <td>&nbsp;</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Buy</td>       <td>string</td>       <td>Available Tests to Buy</td>     </tr>     <tr>       <td>Errors</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>     <tr>       <td>SubAccountBuy</td>       <td>string</td>       <td>Number of tests Sub-Account Buyed</td>     </tr>     <tr>       <td>SubAccountID</td>       <td>string</td>       <td>Sub-Account holder Client ID</td>     </tr>     <tr>       <td>SubAccountUsed</td>       <td>string</td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Used</td>       <td>string</td>       <td>Number of tests used by Sub-Account</td>     </tr>   </tbody> </table>
 *
 * body Add~1remove inbox tests from subAccountrequest 
 * authToken String 
 * contentType String 
 * iD String 
 * returns Add~1remove inbox tests from subAccount
 **/
exports.clientSubAccountInboxByIDPost = function(body,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Buy" : "248",
    "Errors" : [ ],
    "Status" : "1",
    "SubAccountBuy" : "2",
    "SubAccountID" : "899655",
    "SubAccountUsed" : "0",
    "Used" : "0"
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
 * Get Sub-Accounts plan list
 * <h4>Get Sub-Accounts plan list</h4> <b>Request Body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Sub-Account holder client ID</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientSubAccountPlan\" >SubAccountPlan</a></td>       <td>List of plans</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetPlanList
 **/
exports.clientSubAccountPlanListByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : [ {
      "EmailLimit" : "0",
      "ID" : "396",
      "ListLimit" : "600",
      "Name" : "List Plan 600"
    }, {
      "EmailLimit" : "0",
      "ID" : "397",
      "ListLimit" : "1000",
      "Name" : "List Plan 1,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "389",
      "ListLimit" : "1500",
      "Name" : "List Plan 1,500"
    }, {
      "EmailLimit" : "0",
      "ID" : "398",
      "ListLimit" : "2500",
      "Name" : "List Plan 2,500"
    }, {
      "EmailLimit" : "0",
      "ID" : "391",
      "ListLimit" : "3500",
      "Name" : "List Plan 3,500"
    }, {
      "EmailLimit" : "0",
      "ID" : "399",
      "ListLimit" : "5000",
      "Name" : "List Plan 5000"
    }, {
      "EmailLimit" : "0",
      "ID" : "392",
      "ListLimit" : "7500",
      "Name" : "List Plan 7,500"
    }, {
      "EmailLimit" : "0",
      "ID" : "400",
      "ListLimit" : "10000",
      "Name" : "List Plan 10,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "393",
      "ListLimit" : "15000",
      "Name" : "List Plan 15,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "401",
      "ListLimit" : "20000",
      "Name" : "List Plan 20,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "394",
      "ListLimit" : "25000",
      "Name" : "List Plan 25,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "123",
      "ListLimit" : "30000",
      "Name" : "List Plan 30,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "402",
      "ListLimit" : "30000",
      "Name" : "List Plan 30,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "276",
      "ListLimit" : "35000",
      "Name" : "List Plan 35,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "277",
      "ListLimit" : "40000",
      "Name" : "List Plan 40,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "278",
      "ListLimit" : "45000",
      "Name" : "List Plan 45,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "403",
      "ListLimit" : "50000",
      "Name" : "List Plan 50,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "279",
      "ListLimit" : "55000",
      "Name" : "List Plan 55,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "271",
      "ListLimit" : "60000",
      "Name" : "List Plan 60,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "281",
      "ListLimit" : "65000",
      "Name" : "List Plan 65,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "282",
      "ListLimit" : "70000",
      "Name" : "List Plan 70,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "404",
      "ListLimit" : "75000",
      "Name" : "List Plan 75,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "283",
      "ListLimit" : "80000",
      "Name" : "List Plan 80,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "284",
      "ListLimit" : "85000",
      "Name" : "List Plan 85,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "285",
      "ListLimit" : "90000",
      "Name" : "List Plan 90,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "286",
      "ListLimit" : "95000",
      "Name" : "List Plan 95,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "405",
      "ListLimit" : "100000",
      "Name" : "List Plan 100,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "275",
      "ListLimit" : "125000",
      "Name" : "List Plan 125,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "406",
      "ListLimit" : "150000",
      "Name" : "List Plan 150,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "288",
      "ListLimit" : "175000",
      "Name" : "List Plan 175,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "407",
      "ListLimit" : "200000",
      "Name" : "List Plan 200,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "289",
      "ListLimit" : "225000",
      "Name" : "List Plan 225,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "408",
      "ListLimit" : "250000",
      "Name" : "List Plan 250,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "290",
      "ListLimit" : "275000",
      "Name" : "List Plan 275,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "409",
      "ListLimit" : "300000",
      "Name" : "List Plan 300,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "291",
      "ListLimit" : "325000",
      "Name" : "List Plan 325,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "410",
      "ListLimit" : "350000",
      "Name" : "List Plan 350,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "292",
      "ListLimit" : "375000",
      "Name" : "List Plan 375,000"
    }, {
      "EmailLimit" : "0",
      "ID" : "411",
      "ListLimit" : "400000",
      "Name" : "List Plan 400,000"
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
 * Create Sub-Account
 * <h4>Create Sub-Account</h4> <b>URL parameters (to be encoded as JSON in body) :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>      <tr>       <td>Detail</td>       <td>Required</td>       <td>SubAccountDetail</td>       <td>Sub Account Detail Array</td>     </tr>   </tbody> </table> <b>Response Body Parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ClientSubAccountDetail\" >SubAccountDetail</a></td>       <td>&nbsp;</td>     </tr>     <tr>       <td>Errors</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>List of errors</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * body Create subAccountrequest 
 * authToken String 
 * contentType String 
 * returns Create subAccount
 **/
exports.clientSubAccountPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "AllowCC" : "0",
      "EmailAddress" : "test@21273.com",
      "FirstName" : "test172",
      "HasAllowCC" : "1",
      "ID" : "902751",
      "LastName" : "37re",
      "Login" : "test@21723.com",
      "Password" : "**********",
      "Phone" : "35346346",
      "PlanID" : "396",
      "Status" : ""
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
 * Change Sub-Account status
 * <h4>Change Sub-Account status</h4> <b>Query string parameters :</b> None <br>  <b>Request Body parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Status</td>       <td>Required</td>       <td>string</td>       <td>1 to activate, 0 to deactivate</td>     </tr>   </tbody> </table>  <b>Response body parameters :</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Errors</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a></td>       <td>Array of error</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 = Successful, -1 Error</td>     </tr>   </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns Change subAccount status
 **/
exports.clientSubAccountStatusByIDPatch = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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

