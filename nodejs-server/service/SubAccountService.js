'use strict';


/**
 * Get Plan Information
 * Get Client's Plan Information  Response Body Parameters :                    Parameter        Type        Description                            Addon        <a href=\"http://www.benchmarkemail.com/models.htm#ClientAddonResult\" >AddonResult</a>                            EmailPlan        <a href=\"http://www.benchmarkemail.com/models.htm#ClientEmailPlanResult\" >EmailPlanResult</a>        List of errors                          EventPlan        <a href=\"http://www.benchmarkemail.com/models.htm#ClientEventPlanResult\" >EventPlanResult</a>        List of errors                    ActiveContacts        string        Active Contacts                     AccountContacts        string        Account Contacts                     TotalContacts        string        Total Contacts                     ContactsPercent        string        Contacts Percent                     IsDedicated        string        1 = Is Dedicated, 0 = Not Dedicated                     IsManual        string        1 = Is Manual, 0 = Not Manual                     CreditAmount        string        Credit Amount                     CanUpgrade        string        Can Upgrade                     CurrencyCode        string        Currency Code                     CurrencyPrefix        string        Currency Prefix                     ClientCountry        string        Client Country                     HasCard        string        Has Card            
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
 * Get Client's Profile Details  Response Body Parameters :                    Parameter        Type        Description                            Responce        <a href=\"http://www.benchmarkemail.com/models.htm#ClientProfileDetails\" >ClientProfileDetails</a>        Array            
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
    "email" : "email@emailDomain.com",
    "emails_sent" : "1315",
    "experience" : "",
    "first_name" : "firstName",
    "has_dedicated_ip" : "True",
    "last_name" : "lastName",
    "list_size" : "1",
    "login" : "email@emailDomain.com",
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
 * Get Sub-Account balance  Query string parameters :                    Parameter        Required        Type        Description                            ID        Required        string        Sub-Account holder client ID                Response body parameters :                    Parameter        Type        Description                            Response        int        Plan Limit            
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
 * Get Sub-Account Details  Query string parameters :                    Parameter        Required        Type        Description                            ID        Required        string        Client ID              Response Body Parameters :                    Parameter        Type        Description                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientSubAccountDetail\" >SubAccountDetail</a>                            Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        List of errors                    Status        string        1 = Successful, -1 Error            
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
      "EmailAddress" : "firstName27oct@cybermaxsolutions.com",
      "FirstName" : "firstName",
      "HasAllowCC" : "1",
      "ID" : "683120",
      "LastName" : "lastName",
      "Login" : "firstName27oct",
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
 * Update Sub Account  Query String Parameter:                    Parameter        Required        Type        Description                            ID        Required        string        Sub Account ID              URL parameters (to be encoded as JSON in body) :                    Parameter        Required        Type        Description                             Detail        Required        <a href=\"http://www.benchmarkemail.com/models.htm#ClientSubAccountDetail\">SubAccountDetail</a>        Sub Account Detail Array              Response Body Parameters :                    Parameter        Type        Description                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientSubAccountDetail\" >SubAccountDetail</a>                            Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        List of errors                    Status        string        1 = Successful, -1 Error            
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
 * Get Sub-Accounts  Query string parameters : None      Response Body Parameters :                    Parameter        Type        Description                            Count        String        Number of Sub-Accounts                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientDetail\" >ClientDetail</a>                            Status        string        1 = Successful, -1 Error                    HasInbox        string                            HasClientAccounts        string                            HasDates        string                            UniqueCount        string                    
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
      "FirstName" : "firstName",
      "ID" : "683120",
      "InboxAlloted" : "0",
      "InboxUsed" : "0",
      "LastName" : "lastName",
      "Login" : "firstName27oct",
      "Name" : "firstName lastName",
      "PlanID" : "",
      "PlanName" : "List Plan 2,500"
    }, {
      "Active" : "1",
      "ActiveContacts" : "359394",
      "CampaignsSent" : "1024",
      "FirstName" : "firstName",
      "ID" : "553754",
      "InboxAlloted" : "0",
      "InboxUsed" : "0",
      "LastName" : "lastName",
      "Login" : "email@emailDomain.com",
      "Name" : "firstName lastName",
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
 * Get Sub-Account history details  Query string parameters :                    Parameter        Required        Type        Description                            ID        Required        string        History ID                    StartDate        Required        string        Billing cycle start date                    EndDate        Required        string        Billing cycle End Date                Response body parameters :                    Parameter        Type        Description                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientSubAccountCampaign\" >SubAccountCampaign</a>        Array of error                    Status        string        1 = Successful, -1 Error            
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
 * Get Sub-Account History  Query string parameters : None      Response Body Parameters :                    Parameter        Type        Description                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientDate\" >ClientDate</a>                            Status        string        1 = Successful, -1 Error            
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
 * Add/Remove inbox tests from Sub-Account  Request Body parameters:                    Parameter        Required        Type        Description                            ID        Required        string        Sub-Account holder Client ID                    Tests        Required        int                        Response body parameters :                    Parameter        Type        Description                            Buy        string        Available Tests to Buy                    Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error                    Status        string        1 = Successful, -1 Error                    SubAccountBuy        string        Number of tests Sub-Account Buyed                    SubAccountID        string        Sub-Account holder Client ID                    SubAccountUsed        string                            Used        string        Number of tests used by Sub-Account            
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
 * Get Sub-Accounts plan list  Request Body parameters:                    Parameter        Required        Type        Description                            ID        Required        string        Sub-Account holder client ID                Response body parameters :                    Parameter        Type        Description                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientSubAccountPlan\" >SubAccountPlan</a>        List of plans                    Status        string        1 = Successful, -1 Error            
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
 * Create Sub-Account  URL parameters (to be encoded as JSON in body) :                    Parameter        Required        Type        Description                             Detail        Required        SubAccountDetail        Sub Account Detail Array              Response Body Parameters :                    Parameter        Type        Description                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#ClientSubAccountDetail\" >SubAccountDetail</a>                            Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        List of errors                    Status        string        1 = Successful, -1 Error            
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
 * Change Sub-Account status  Query string parameters : None      Request Body parameters:                    Parameter        Required        Type        Description                            Status        Required        string        1 to activate, 0 to deactivate                Response body parameters :                    Parameter        Type        Description                            Errors        <a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\" >ErrorData</a>        Array of error                    Status        string        1 = Successful, -1 Error            
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

