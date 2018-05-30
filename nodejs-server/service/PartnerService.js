'use strict';


/**
 * Get Partner Commission Level 1 List
 * Get Partner Commission Level 1 List  Query string parameters :                     Parameter        Required        Type        Description                            imonth        Required        String        Month                    iyear        Required        String        Year                    Sort        Required        string                        Response Body Parameters :                    Parameter        Type        Description                            Count        String        Number of Commission List                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#PartnerCommissionsLevel1ListData\" >PartnerCommissionsLevel1ListData</a>        Partner Commission Level 1 Data                    Status        string        1 = Successful, -1 Error            
 *
 * imonth String 
 * iyear String 
 * sort String 
 * authToken String 
 * contentType String 
 * returns GetCommissionLevel1List
 **/
exports.partnerCommissionLevel1ListGet = function(imonth,iyear,sort,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "Amount" : "$19.95",
      "ClientName" : "<a href='/Partner/Level2?client_id=3467' class = 'linkdarkblue underline' >Fred Manning</a>",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "Sequence" : 1
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
 * Get Partner Commission Level 2 List
 * Get Partner Commission Level 2 List  Query string parameters :                     Parameter        Required        Type        Description                            Client ID        Required        String        Client ID                Response Body Parameters :                    Parameter        Type        Description                            ClientName        String        Name of Client                    Count        String        Count                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#PartnerCommissionsLevel2ListData\" >PartnerCommissionsLevel2ListData</a>        Partner Commission Level 2 Data                    Status        string        1 = Successful, -1 Error            
 *
 * client_id String 
 * authToken String 
 * contentType String 
 * returns GetPartnerCommissionLevel2List
 **/
exports.partnerCommissionLevel2ListGet = function(client_id,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ClientName" : "Fred Manning",
    "Count" : 51,
    "Data" : [ {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Nov 30 2008",
      "Sequence" : 1
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Dec 30 2008",
      "Sequence" : 2
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Jan 31 2009",
      "Sequence" : 3
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Feb 28 2009",
      "Sequence" : 4
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Mar 29 2009",
      "Sequence" : 5
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Apr 29 2009",
      "Sequence" : 6
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "May 30 2009",
      "Sequence" : 7
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Jul 1 2009",
      "Sequence" : 8
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Aug 2 2009",
      "Sequence" : 9
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Sep 3 2009",
      "Sequence" : 10
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Oct 4 2009",
      "Sequence" : 11
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Nov 5 2009",
      "Sequence" : 12
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Dec 6 2009",
      "Sequence" : 13
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Jan 7 2010",
      "Sequence" : 14
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Feb 8 2010",
      "Sequence" : 15
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Mar 9 2010",
      "Sequence" : 16
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Apr 9 2010",
      "Sequence" : 17
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "May 10 2010",
      "Sequence" : 18
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Jun 10 2010",
      "Sequence" : 19
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Jul 11 2010",
      "Sequence" : 20
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Aug 11 2010",
      "Sequence" : 21
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Sep 11 2010",
      "Sequence" : 22
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Oct 11 2010",
      "Sequence" : 23
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Nov 11 2010",
      "Sequence" : 24
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Dec 11 2010",
      "Sequence" : 25
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Jan 11 2011",
      "Sequence" : 26
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Feb 11 2011",
      "Sequence" : 27
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Mar 11 2011",
      "Sequence" : 28
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Apr 11 2011",
      "Sequence" : 29
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "May 11 2011",
      "Sequence" : 30
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Jun 11 2011",
      "Sequence" : 31
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Jul 11 2011",
      "Sequence" : 32
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Aug 11 2011",
      "Sequence" : 33
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Sep 11 2011",
      "Sequence" : 34
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Oct 11 2011",
      "Sequence" : 35
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Nov 11 2011",
      "Sequence" : 36
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Dec 11 2011",
      "Sequence" : 37
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Jan 11 2012",
      "Sequence" : 38
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Feb 11 2012",
      "Sequence" : 39
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Mar 11 2012",
      "Sequence" : 40
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Apr 11 2012",
      "Sequence" : 41
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "May 11 2012",
      "Sequence" : 42
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Jun 11 2012",
      "Sequence" : 43
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Jul 11 2012",
      "Sequence" : 44
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Aug 11 2012",
      "Sequence" : 45
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Sep 11 2012",
      "Sequence" : 46
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Oct 11 2012",
      "Sequence" : 47
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Nov 11 2012",
      "Sequence" : 48
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Dec 11 2012",
      "Sequence" : 49
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Jan 11 2013",
      "Sequence" : 50
    }, {
      "Amount" : "$19.95",
      "CommissionAmount" : "$4.99",
      "CommissionPercent" : "25%",
      "PayDate" : "Feb 11 2013",
      "Sequence" : 51
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
 * Get Commission List
 * Get Commission List  Query string parameters : None      Request Body parameters: None      Response Body Parameters :                    Parameter        Type        Description                            Count        String        Number of Commission List                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#PartnerCommissionsListData\" >PartnerCommissionsListData</a>        List of Partner Commissions Data                    Status        string        1 = Successful, -1 Error            
 *
 * authToken String 
 * contentType String 
 * returns GetCommissionList
 **/
exports.partnerCommissionListGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "Amount" : "$0.00",
      "BilledAccounts" : "1",
      "CommissionAmount" : "$0.00",
      "CommissionPercent" : "0%",
      "Current" : "1",
      "ID" : "",
      "Level" : "March2009",
      "New" : "0",
      "Sequence" : 1
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
 * Get Profile Details
 * Get Profile Details  Query String Parameters :  None      Request Body Parameters :  None      Response Body Parameter :                     Parameter        Type        Description                            Response        <a href=\"http://www.benchmarkemail.com/models.htm#PartnerProfileData\" > ProfileData </a>        Partner Profile Details            
 *
 * authToken String 
 * contentType String 
 * returns GetProfileDetails880
 **/
exports.partnerProfileGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ACHPayable" : "",
    "BankAccountNumber" : "",
    "BankRoutingNumber" : "",
    "CheckPayable" : "",
    "CompanyAddress" : "Kailash Cmplx111",
    "CompanyCity" : "Mumbai",
    "CompanyCountry" : "India",
    "CompanyName" : "cybermax",
    "CompanyPhone" : "25186314",
    "CompanyState" : "Mah",
    "CompanyZip" : "400079",
    "FirstName" : "Rohit 1",
    "LastName" : "Mishra",
    "MinimumNonUS" : "",
    "MinimumUS" : "",
    "PartnerAddress" : "",
    "PartnerCity" : "",
    "PartnerState" : "",
    "PartnerZip" : "",
    "PayPalEmail" : "",
    "PayPalName" : "",
    "TaxID" : "",
    "isACHPayable" : 0,
    "isUSResidents" : 1
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
 * Update Profile Details
 * Update Profile Details  Query String Parameters :  None      Request Body Parameters :                     Parameter        Type        Description                            Detail        <a href=\"http://www.benchmarkemail.com/models.htm#PartnerProfileUpdate\" > ProfileUpdate </a>        Partner Profile Details                Response Body Parameter :                     Parameter        Type        Description                            Errors        <a href=\"http://www.benchmarkemail.com/models.htm#PartnerErrorData\" > ErrorData </a>        List of errors                    status        string        1 = sucess, -1 = error            
 *
 * body UpdateProfileDetailsrequest 
 * authToken String 
 * contentType String 
 * returns UpdateProfileDetails
 **/
exports.partnerProfilePatch = function(body,authToken,contentType) {
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


/**
 * Get Referrals Level 1 List
 * Get Referrals Level 1 List  Query string parameters :                     Parameter        Required        Type        Description                            imonth        Required        String        Month                    iyear        Required        String        Year                    Sort        Required        string                        Response Body Parameters :                    Parameter        Type        Description                            Count        String        Number of Commission List                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#PartnerReferralsLevel1ListData\" >PartnerReferralsLevel1ListData</a>        Partner Referrals Level 1 Data                    Status        string        1 = Successful, -1 Error            
 *
 * imonth String 
 * iyear String 
 * sort String 
 * authToken String 
 * contentType String 
 * returns GetReferralsLevel1List
 **/
exports.partnerReferralsLevel1ListGet = function(imonth,iyear,sort,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "ClientName" : "Sophie Walters",
      "PlanName" : "Plan 600",
      "Sequence" : 1,
      "SignupDate" : "Nov 13, 2005"
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
 * Get Referrals List
 * Get referrals list  Query string parameters : None      Request Body parameters: None      Response Body Parameters :                    Parameter        Type        Description                            Count        String        Number of Commission List                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#PartnerReferralsListData\" >PartnerReferralsListData</a>        List of Partner PartnerReferrals Data                    Status        string        1 = Successful, -1 Error            
 *
 * authToken String 
 * contentType String 
 * returns GetReferralsList
 **/
exports.partnerReferralsListGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1,
    "Data" : [ {
      "Level1" : "<a href='/Partner/ReportSignup1?imonth=11&iyear=2005&sort=1' class = 'linkdarkblue underline' >November 2005</a>",
      "Sequence" : 1,
      "lblFree" : "0",
      "lblPaid" : "1",
      "lblTotal" : "1"
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
 * Get Web Page Ads Detail
 * Get Web Page Ads Detail  Query string parameters : None      Request Body parameters: None      Response Body Parameters :                    Parameter        Type        Description                            ID        String                            ClientID        string        Client ID                    HtmlResponse        string        HTML Code            
 *
 * authToken String 
 * contentType String 
 * returns GetWebPageAdsDetail
 **/
exports.partnerWebPageAdsDetailGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ClientID" : "43893",
    "HtmlResponse" : "<!DOCTYPE html><html>    <head>        <meta content=\"text/html; charset=utf-8\" http-equiv=\"Content-Type\">        <title>Benchmark Email</title>                <link href=\"http://www.benchmarkemail.com/style/reset.css\" rel=\"stylesheet\" type=\"text/css\" />        <style>\t\t\tbody {\t\t\t\tbackground: #fff;\t\t\t\tcolor: #343b40;\t\t\t\tfont-family: \"Helvetica Neue\", Helvetica, Arial, \"&#12498;&#12521;&#12462;&#12494;&#35282;&#12468; Pro W3\",\"Hiragino Kaku Gothic Pro\",\"Osaka\",'meiryo','&#12513;&#12452;&#12522;&#12458;','ms pgothic','ms p&#12468;&#12471;&#12483;&#12463;',\"&#24494;&#36575;&#27491;&#40657;&#39636;\", \"Microsoft JhengHei\", sans-serif;\t\t\t\tfont-size:16px;\t\t\t\tfont-smoothing: antialiased;\t\t\t}\t\t\th1 {\t\t\t\tdisplay: block;\t\t\t\ttext-indent: -99999px;\t\t\t\tbackground-position: 0 0;\t\t\t\twidth: 166px;\t\t\t\theight: 38px;\t\t\t\tfloat: left;\t\t\t}\t\t\th2 {\t\t\t\tfont-size: 36px;\t\t\t\tline-height: 36px;\t\t\t\tfont-weight: bold;\t\t\t\tcolor: #3c464d;\t\t\t}\t\t\th3 {\t\t\t\tfont-size: 24px;\t\t\t\tline-height: 36px;\t\t\t}\t\t\tp {\t\t\t\tfont-size: 14px;\t\t\t\tline-height: 26px;\t\t\t}\t\t\th1, .templates-icon, .wpa-email-blackberry, .wpa-email-gmail, .wpa-email-outlook-2003, .wpa-email-outlook-2013, .wpa-email-yahoo, .footer-social-yt:after, .footer-social-fb:after, .footer-social-tw:after, .footer-social-gp:after{\t\t\t\tbackground: url(http://www.benchmarkemail.com/images/wpa/wpa-sprites.png) no-repeat;\t\t\t}\t\t\t.wpa-email-blackberry{\t\t\t\tbackground-position: -100px -208px ;\t\t\t\twidth: 90px;\t\t\t\theight: 57px;\t\t\t}\t\t\t.wpa-email-gmail{\t\t\t\tbackground-position: -100px -75px ;\t\t\t\twidth: 90px;\t\t\t\theight: 57px;\t\t\t}\t\t\t.wpa-email-outlook-2003{\t\t\t\tbackground-position: 0 -208px ;\t\t\t\twidth: 90px;\t\t\t\theight: 57px;\t\t\t}\t\t\t.wpa-email-outlook-2013{\t\t\t\tbackground-position: -100px -143px ;\t\t\t\twidth: 90px;\t\t\t\theight: 57px;\t\t\t}\t\t\t.wpa-email-yahoo{\t\t\t\tbackground-position: 0 -143px ;\t\t\t\twidth: 90px;\t\t\t\theight: 57px;\t\t\t}\t\t\t.wide-section-container {\t\t\t\twidth: 100%;\t\t\t}\t\t\t.wide-section {\t\t\t\tposition: relative;\t\t\t\tmargin: 0 auto;\t\t\t\twidth: 840px;\t\t\t\tpadding: 0 20px;\t\t\t}\t\t\theader {\t\t\t\tbackground: #3c464e;\t\t\t\tpadding: 15px 0 10px;\t\t\t}\t\t\t.plan {\t\t\t\tdisplay: inline-block;\t\t\t\tcolor: #fff;\t\t\t\tbackground: #72c2a1;\t\t\t\tpadding: 10px 25px;\t\t\t\tfont-size: 18px;\t\t\t\tborder-radius: 4px;\t\t\t\tfloat: right;\t\t\t\tmargin: 0;\t\t\t\ttext-decoration: none;\t\t\t}\t\t\t.plan:hover {\t\t\t\tbackground: #3ec28b;\t\t\t}\t\t\t.cover {\t\t\t\tpadding-top: 30px;\t\t\t\ttext-align: center;\t\t\t\tbackground: url(http://www.benchmarkemail.com/images/wpa/wpa-cover.jpg) no-repeat center -200px fixed;\t\t\t\tbackground-size: cover;\t\t\t\toverflow: hidden;\t\t\t}\t\t\t.templates {\t\t\t\tpadding: 40px 0 55px;\t\t\t\ttext-align: center;\t\t\t}\t\t\t.cover h3 {\t\t\t\tmargin-bottom: 30px;\t\t\t}\t\t\t.templates h3 {\t\t\t\tdisplay: inline-block;\t\t\t\twidth: 400px;\t\t\t\tmargin-left: 45px;\t\t\t\ttext-align: left;\t\t\t\tvertical-align: middle;\t\t\t}\t\t\t.templates-icon {\t\t\t\tdisplay: inline-block;\t\t\t\tbackground-position: 0 -49px ;\t\t\t\twidth: 82px;\t\t\t\theight: 86px;\t\t\t\tvertical-align: middle;\t\t\t}\t\t\t.clearfix:after {\t\t\t\tdisplay: block;\t\t\t\tcontent:\"\";\t\t\t\theight: 0;\t\t\t\tclear: both;\t\t\t}\t\t\t.abtesting {\t\t\t\tpadding: 40px 0 55px;\t\t\t\tbackground: #f5f5f7;\t\t\t}\t\t\t.abtesting h3 {\t\t\t\tdisplay: inline-block;\t\t\t\twidth: 400px;\t\t\t\tmargin: 45px 0 0 50px;\t\t\t}\t\t\t.inboxchecker {\t\t\t\tpadding: 45px 0 55px;\t\t\t}\t\t\t.inboxchecker h3 {\t\t\t\tdisplay: inline-block;\t\t\t\twidth: 375px;\t\t\t\tmargin: 35px 50px 0 20px;\t\t\t\tvertical-align: top;\t\t\t}\t\t\t.abtesting .window, .inboxchecker .window {\t\t\t\tdisplay: inline-block;\t\t\t\twidth: 360px;\t\t\t\tmin-height: 215px;\t\t\t\tborder-top-left-radius: 5px;\t\t\t\tborder-top-right-radius: 5px;\t\t\t\tbox-shadow: 0px 1px 8px rgba(0,0,0,0.1);\t\t\t\tvertical-align: top;\t\t\t\tbackground: #fff;\t\t\t}\t\t\t.abtesting .window {\t\t\t\tmargin-left: 20px;\t\t\t}\t\t\t.abtesting .windowtop, .inboxchecker .windowtop {\t\t\t\tposition: relative;\t\t\t\theight: 12px;\t\t\t\tbackground: #c9cdd2;\t\t\t\tborder-top-left-radius: 5px;\t\t\t\tborder-top-right-radius: 5px;\t\t\t}\t\t\t.abtesting .windowtop:after, .inboxchecker .windowtop:after {\t\t\t\tfont-family: serif;\t\t\t\tposition: absolute;\t\t\t\tdisplay: block;\t\t\t\tcontent:\"...\";\t\t\t\tcolor: #f5f5f7;\t\t\t\tfont-size: 40px;\t\t\t\tline-height: 12px;\t\t\t\ttop: -11px;\t\t\t\tleft: 3px;\t\t\t\tletter-spacing: -2px;\t\t\t}\t\t\t.abtesting .windowcontent {\t\t\t\tpadding: 15px 10px 20px;\t\t\t\twidth: 340px;\t\t\t}\t\t\t.inboxchecker .windowcontent {\t\t\t\tpadding: 15px 30px 20px;\t\t\t\twidth: 300px;\t\t\t}\t\t\t.ab-window-test-type {\t\t\t\tborder-bottom: 1px solid #e0e4e7;\t\t\t}\t\t\t.ab-window-test-type {\t\t\t\tpadding: 5px 0 20px;\t\t\t}\t\t\t.ab-window-test-results {\t\t\t\tpadding: 10px 0 0;\t\t\t}\t\t\t.ab-window-test-type > span {\t\t\t\tfont-size: 18px;\t\t\t}\t\t\t.ab-window-col {\t\t\t\tdisplay: inline-block;\t\t\t\tmargin: 0 0 0 5%;\t\t\t\tvertical-align: middle;\t\t\t\twidth: 35%;\t\t\t}\t\t\t.vs {\t\t\t\twidth: 10%;\t\t\t}\t\t\t.ab-window-col:last-child {\t\t\t\tmargin-right: 0;\t\t\t}\t\t\t.ab-window-test-results .ab-window-col {\t\t\t\tfont-size: 14px;\t\t\t\tline-height: 18px;\t\t\t}\t\t\t.ab-window-test-results .vs {\t\t\t\tfont-size: 18px;\t\t\t}\t\t\t.ab-window-col .ab-window-btn {\t\t\t\tbackground: #c8cdd1;\t\t\t\tborder-radius: 3px;\t\t\t\tcolor: #fff;\t\t\t\tdisplay: inline-block;\t\t\t\tfont-size: 12px;\t\t\t\tmargin-top: 35px;\t\t\t\tpadding: 5px 10px;\t\t\t\ttext-align: center;\t\t\t}\t\t\t.emailclient-wrapper {\t\t\t\twidth: 300px;\t\t\t}\t\t\t.emailclient-wrapper:first-child {\t\t\t\tmargin-bottom: 20px;\t\t\t}\t\t\t.emailclient-container {\t\t\t\tfloat: left;\t\t\t\tmargin-right: 15px;\t\t\t}\t\t\t.emailclient-container p {\t\t\t\tfont-size: 10px;\t\t\t\tline-height: 15px;\t\t\t\tpadding-bottom: 2px;\t\t\t\tfont-weight: bold;\t\t\t\tcolor: #555555;\t\t\t\ttext-align: center;\t\t\t}\t\t\t.last {\t\t\t\tfloat: left;\t\t\t\tmargin-right: 0;\t\t\t}\t\t\t.signup {\t\t\t\tpadding: 55px 0 65px;\t\t\t\tbackground: url('http://www.benchmarkemail.com/images/wpa/wpa-pattern.png') repeat;\t\t\t\ttext-align: center;\t\t\t}\t\t\t.signup h3 {\t\t\t\tfont-size: 36px;\t\t\t\tcolor: #fff;\t\t\t\tfont-weight: bold;\t\t\t\tmargin-bottom: 25px;\t\t\t}\t\t\t.signup .signup-textfield {\t\t\t\tborder: 3px solid #d7d7d7;\t\t\t\tbox-shadow: none;\t\t\t\tborder-radius: 8px;\t\t\t\tcolor: #525e66;\t\t\t\tfont-size: 18px;\t\t\t\tmargin-right: 10px;\t\t\t\tpadding: 8px 10px;\t\t\t\tvertical-align: top;\t\t\t\twidth: 160px;\t\t\t\theight: 31px;\t\t\t\tline-height: 31px;\t\t\t\tvertical-align: middle;\t\t\t}\t\t\t.startnow {\t\t\t\tcursor: pointer;\t\t\t\tdisplay: inline-block;\t\t\t\tpadding: 18px 40px;\t\t\t\ttext-align: center;\t\t\t\tbackground: #72c2a1;\t\t\t\tborder: none;\t\t\t\tfont-size: 24px;\t\t\t\tline-height: 24px;\t\t\t\tcolor: #fff;\t\t\t\tborder-radius: 5px;\t\t\t\tvertical-align: middle;\t\t\t\tfont-weight: normal;\t\t\t}\t\t\t.startnow:hover {\t\t\t\tbackground: #3ec28b;\t\t\t}\t\t\t.startnow:active {\t\t\t\tbox-shadow: inset 0 2px 0px rgba(0,0,0,0.2);\t\t\t}\t\t\tfooter {\t\t\t\tpadding: 30px 0 65px;\t\t\t}\t\t\tfooter p{\t\t\t\tfloat: left;\t\t\t\tline-height: 14px;\t\t\t\tmargin-left: 20px;\t\t\t}\t\t\t.footer-social {\t\t\t\tfloat: right;\t\t\t\tmargin-right: 20px;\t\t\t}\t\t\t.footer-social li {\t\t\t\tfloat: left;\t\t\t}\t\t\t.footer-social li a {\t\t\t\tbackground: #b3bbc1;\t\t\t\tborder-radius: 100%;\t\t\t\tdisplay: block;\t\t\t\tmargin-left: 15px;\t\t\t\tpadding: 15px 25px;\t\t\t\tposition: relative;\t\t\t\ttext-indent: -99999px;\t\t\t\ttransition: background 0.2s ease-in;\t\t\t\twhite-space: nowrap;\t\t\t\tline-height: 20px;\t\t\t}\t\t\t.footer-social li a:after {\t\t\t\tcontent: '';\t\t\t\tdisplay: block;\t\t\t\tposition: absolute;\t\t\t}\t\t\t.footer-social-yt:after {\t\t\t\tbackground-position: -203px 0;\t\t\t\twidth: 27px;\t\t\t\theight: 20px;\t\t\t\ttop: 15px;\t\t\t\tleft: 11px;\t\t\t}\t\t\t.footer-social li a.footer-social-yt:hover {\t\t\t\tbackground: #ce332d;\t\t\t}\t\t\t.footer-social-fb:after {\t\t\t\tbackground-position: -216px -114px ;\t\t\t\twidth: 14px;\t\t\t\theight: 26px;\t\t\t\ttop: 12px;\t\t\t\tleft: 17px;\t\t\t}\t\t\t.footer-social li a.footer-social-fb:hover {\t\t\t\tbackground: #3b5998;\t\t\t}\t\t\t.footer-social-tw:after {\t\t\t\tbackground-position: -206px -33px ;\t\t\t\twidth: 24px;\t\t\t\theight: 20px;\t\t\t\ttop: 15px;\t\t\t\tleft: 14px;\t\t\t}\t\t\t.footer-social li a.footer-social-tw:hover {\t\t\t\tbackground: #2daddc;\t\t\t}\t\t\t.footer-social-gp:after {\t\t\t\tbackground-position: -199px -71px ;\t\t\t\twidth: 31px;\t\t\t\theight: 31px;\t\t\t\ttop: 9px;\t\t\t\tleft: 13px;\t\t\t}\t\t\t.footer-social li a.footer-social-gp:hover {\t\t\t\tbackground: #e54933;\t\t\t}\t\t\t.device-wrap {\t\t\t\tposition: relative;\t\t\t\twidth: 100%;\t\t\t\theight: 315px;\t\t\t}\t\t\t.device-window-wrap {\t\t\t\tposition: absolute;\t\t\t\tleft: 170px;\t\t\t\tbottom: 0;\t\t\t}\t\t\t.device-mobile-wrap {\t\t\t\tposition: absolute;\t\t\t\tleft: 545px;\t\t\t\tbottom: 0;\t\t\t}\t\t\t.device-window {\t\t\t\tfloat: left;\t\t\t\twidth: 440px;\t\t\t\theight: 310px;\t\t\t\tborder-radius: 5px;\t\t\t\tbox-shadow: 0px 2px 8px rgba(0,0,0,0.2);\t\t\t\tposition: relative;\t\t\t\t\t}\t\t\t.device-mobile {\t\t\t\tfloat: left;\t\t\t\twidth: 130px;\t\t\t\theight: 215px;\t\t\t\tpadding: 35px 5px 0 5px;\t\t\t\tborder-top: 3px solid #efefef;\t\t\t\tborder-left: 3px solid #efefef;\t\t\t\tborder-right: 3px solid #efefef;\t\t\t\tbackground-color: #f5f5f7;\t\t\t\tborder-radius: 20px 20px 0 0;\t\t\t\tbox-shadow: 0px 2px 20px rgba(0,0,0,0.3);\t\t\t\tz-index: 10;\t\t\t\tposition: relative;\t\t\t}\t\t\t.device-mobile:before {\t\t\t\tposition: absolute;\t\t\t\tcontent: \"\";\t\t\t\twidth: 4px; \t\t\t\theight: 4px; \t\t\t\tleft: 66px;\t\t\t\ttop: 5px;\t\t\t\tborder-radius: 100%;\t\t\t\tbackground-color: #0f0b08;\t\t\t\tborder: 2px solid #e4e4e4;\t\t\t}\t\t\t.power-button {\t\t\t\tposition: absolute;\t\t\t\twidth: 25px; \t\t\t\theight: 3px; \t\t\t\tright: 18px;\t\t\t\ttop: -6px;\t\t\t\tbackground-color: #f7f7f8;\t\t\t\tborder-left: 1px solid #d9d9d9;\t\t\t\tbox-shadow: -1px -1px 2px rgba(0,0,0,0.1), inset 0 0 1px rgba(0,0,0,0.1);\t\t\t}\t\t\t.side-buttons span{\t\t\t\tposition: absolute;\t\t\t\twidth: 1px; \t\t\t\theight: 12px; \t\t\t\tleft: -5px;\t\t\t\ttop: 65px;\t\t\t\tbackground-color: #e6e6e4;\t\t\t\tborder-left: 1px solid #d9d9d9;\t\t\t\tbox-shadow: -1px 2px 2px rgba(0,0,0,0.1), inset 0 0 1px rgba(0,0,0,0.1);\t\t\t}\t\t\t.side-buttons span:first-child {\t\t\t\tleft: -5px;\t\t\t\ttop: 38px;\t\t\t\theight: 15px;\t\t\t}\t\t\t.side-buttons span:last-child {\t\t\t\tleft: -5px;\t\t\t\ttop: 85px;\t\t\t}\t\t\t.speaker-grill {\t\t\t\tposition: absolute;\t\t\t\twidth: 26px; \t\t\t\theight: 3px; \t\t\t\tleft: 55px;\t\t\t\ttop: 20px;\t\t\t\tborder-radius: 5px;\t\t\t\tbackground-color: #667279;\t\t\t\tborder: 2px solid #e4e4e4;\t\t\t}\t\t\t.device-window-top {\t\t\t\tdisplay: block;\t\t\t\twidth: 100%;\t\t\t\theight: 12px;\t\t\t\tbackground-color: #e6e6e8;\t\t\t\tposition: relative;\t\t\t\tborder-radius: 5px 5px 0 0;\t\t\t}\t\t</style>        <script src=\"http://www.benchmarkemail.com/script/prefixfree.min.js\"></script>\t\t<!--[if lt IE 9]>\t\t\t<script src=\"https://html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\t\t\t<script src=\"/script/selectivizr-min.js\"></script>\t\t<![endif]-->\t\t<script src=\"http://www.benchmarkemail.com/script/jquery-1.7.1.min.js\"></script>\t    <script>\t        $(document).keypress(function (event) {\t            var keycode = (event.keyCode ? event.keyCode : event.which);\t            if (keycode == '13') {\t                $(\"#frm_submit_new\").click();\t            }\t        });\t    </script>\t    <script>\t        var PrefixURL = \"http://www.benchmarkemail.com\";\t        $(document).ready(function () {\t            $(\"#frm_submit_new\").click(function () {\t                var fname = ($(\"#frm_first_name\").val() != '' && $(\"#frm_first_name\").val() != $(\"#frm_first_name\").attr(\"placeholder\")) ? $(\"#frm_first_name\").val() : '';\t                var lname = ($(\"#frm_last_name\").val() != '' && $(\"#frm_last_name\").val() != $(\"#frm_last_name\").attr(\"placeholder\")) ? $(\"#frm_last_name\").val() : '';\t                var emailval = ($(\"#frm_email_new\").val() != '' && $(\"#frm_email_new\").val() != $(\"#frm_email_new\").attr(\"placeholder\")) ? $(\"#frm_email_new\").val() : '';\t                var partnerid = $(\"#prt_partner_id\").val();\t                if (typeof (partnerid) == \"undefined\") { partnerid = \"\"; }\t                var submitmode = $(\"#submitmode\").val();\t                if (typeof (submitmode) == \"undefined\") { submitmode = \"\"; }\t                if (fname != '' || lname != '' || emailval != '')\t                    window.location = PrefixURL + \"/Register?prt=\" + partnerid + \"&smode=\" + submitmode + \"&frm_fname=\" + encodeURIComponent(fname) + \"&frm_lname=\" + encodeURIComponent(lname) + \"&frm_email=\" + encodeURIComponent(emailval);\t                else\t                    window.location = PrefixURL + \"/Register?prt=\" + partnerid + \"&smode=\" + submitmode;\t            });\t            $(\"#frm_email_new\").keypress(function (event) {\t                var keycode = (event.keyCode ? event.keyCode : event.which);\t                if (keycode == '13') {\t                    $(\"#frm_submit_new\").click();\t                }\t            });\t        });\t\t</script>    </head>    <body>        <header class=\"wide-section-container\">\t\t\t<div class=\"wide-section clearfix\">\t\t\t\t<h1 href=\"http://www.benchmarkemail.com\" class=\"logo\">Benchmark</h1>\t\t\t\t<a href=\"http://www.benchmarkemail.com/Register?prt=43893\" class=\"plan\">Free 2k Plan</a>\t\t\t\t<!-- Include any needed partner reference like partner id as hidden tags -->\t\t\t</div>\t\t</header>        <section class=\"wide-section-container cover\">\t\t\t<div class=\"wide-section\">\t\t\t\t<h2>The Best Email Marketing Tool</h2>\t\t\t\t<h3>Use Benchmark to create and send email campaigns</h3>\t\t\t\t<div class=\"device-wrap\">\t\t\t\t\t<div class=\"device-window-wrap\">\t\t\t\t\t\t<div class=\"device-window\"><div class=\"device-window-top\"></div><img src=\"http://www.benchmarkemail.com/images/wpa/wpa-window.jpg\" alt=\"desktop template\" width=\"440\" height=\"300\" /></div>\t\t\t\t\t</div>\t\t\t\t\t<div class=\"device-mobile-wrap\">\t\t\t\t\t\t<div class=\"device-mobile\">\t\t\t\t\t\t\t<span class=\"speaker-grill\"></span>\t\t\t\t\t\t\t<div class=\"power-button\"></div>\t\t\t\t\t\t\t<div class=\"side-buttons\"><span></span><span></span><span></span></div>\t\t\t\t\t\t\t<img src=\"http://www.benchmarkemail.com/images/wpa/wpa-mobile.jpg\" alt=\"mobile template\" width=\"130\" height=\"215\" />\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>\t\t</section>        <section class=\"wide-section-container templates\">\t\t\t<div class=\"wide-section\">\t\t\t\t<div class=\"templates-icon\"></div>\t\t\t\t<h3>With 400+ Email templates your design is ready for any occasion.</h3>\t\t\t</div>\t\t</section>        <section class=\"wide-section-container abtesting\">\t\t\t<div class=\"wide-section\">\t\t\t\t\t\t\t<div class=\"window\">\t\t\t\t\t<div class=\"windowtop\"></div>\t\t\t\t\t<div class=\"windowcontent\">\t\t\t\t\t\t<div class=\"ab-window-test-type clearfix\">\t\t\t\t\t\t\t<span class=\"ab-window-col\">Test Group A</span>\t\t\t\t\t\t\t<span class=\"ab-window-col vs\">v.s.</span>\t\t\t\t\t\t\t<span class=\"ab-window-col\">Test Group B</span>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class=\"ab-window-test-results clearfix\">\t\t\t\t\t\t\t<span class=\"ab-window-col\">Free Shipping Today! <span class=\"ab-window-btn\">Pick as winner</span></span>\t\t\t\t\t\t\t<span class=\"ab-window-col vs\">v.s.</span>\t\t\t\t\t\t\t<span class=\"ab-window-col\">Order now for Free Shipping. <span class=\"ab-window-btn\">Pick as winner</span></span>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t\t<h3>Learn what engages your customers through split A / B testing. It&#8217;s like having your own crystal ball.</h3>\t\t\t</div>\t\t</section>        <section class=\"wide-section-container inboxchecker\">\t\t\t<div class=\"wide-section\">\t\t\t\t\t\t\t<h3>With Inbox Checker, see what your design looks like in all email clients before it&#8217;s delivered.</h3>\t\t\t\t<div class=\"window\">\t\t\t\t\t<div class=\"windowtop\"></div>\t\t\t\t\t<div class=\"windowcontent\">\t\t\t\t\t\t<div class=\"emailclient-wrapper clearfix\">\t\t\t\t\t\t\t<div class=\"emailclient-container\">\t\t\t\t\t\t\t\t<p>Gmail (Explorer)</p>\t\t\t\t\t\t\t\t<div class=\"wpa-email-gmail\"></div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<div class=\"emailclient-container\">\t\t\t\t\t\t\t\t<p>Gmail (Chrome)</p>\t\t\t\t\t\t\t\t<div class=\"wpa-email-gmail\"></div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<div class=\"emailclient-container last\">\t\t\t\t\t\t\t\t<p>Outlook 2013</p>\t\t\t\t\t\t\t\t<div class=\"wpa-email-outlook-2013\"></div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class=\"emailclient-wrapper clearfix\">\t\t\t\t\t\t\t<div class=\"emailclient-container\">\t\t\t\t\t\t\t\t<p>Yahoo! Mail</p>\t\t\t\t\t\t\t\t<div class=\"wpa-email-yahoo\"></div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<div class=\"emailclient-container\">\t\t\t\t\t\t\t\t<p>Outlook 2013</p>\t\t\t\t\t\t\t\t<div class=\"wpa-email-outlook-2003\"></div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<div class=\"emailclient-container last\">\t\t\t\t\t\t\t\t<p>Blackberry 4 OS</p>\t\t\t\t\t\t\t\t<div class=\"wpa-email-blackberry\"></div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>\t\t</section>        <section class=\"wide-section-container signup\">\t\t\t<div class=\"wide-section\">\t\t\t\t\t\t\t<h3>Create your first email with Benchmark</h3>\t\t\t\t\t<input type=\"text\" onFocus=\"if(this.value=='First Name')this.value='';\" placeholder=\"First Name\" value=\"First Name\" class=\"signup-textfield\" id=\"frm_first_name\" />\t\t\t\t\t<input type=\"text\" onFocus=\"if(this.value=='Last Name')this.value='';\" placeholder=\"Last Name\" value=\"Last Name\" class=\"signup-textfield\" id=\"frm_last_name\" />\t\t\t\t\t<input type=\"text\" onFocus=\"if(this.value=='Email Address')this.value='';\" placeholder=\"Email Address\" value=\"Email Address\" class=\"signup-textfield\" id=\"frm_email_new\" />\t\t\t\t\t\t\t\t\t<input type=\"submit\" value=\"Start Now\" class=\"startnow\" id=\"frm_submit_new\">\t\t\t\t\t<!-- Include any needed partner reference like partner id as hidden tags -->                    <input type=\"hidden\" value=\"43893\" id=\"prt_partner_id\" name=\"prt_partner_id\">                    <input type=\"hidden\" value=\"webad\" id=\"submitmode\" name=\"submitmode\">\t\t\t</div>\t\t</section>        <footer class=\"wide-section-container\">\t\t\t<div class=\"wide-section clearfix\">\t\t\t\t\t\t\t<p>Copyright &#169; 2017 Benchmark Internet Group</p>\t\t\t\t<ul class=\"footer-social\">                    <li><a target=\"_blank\" title=\"Follow us on Youtube\" class=\"footer-social-yt\" href=\"https://www.youtube.com/benchmarkemail\">Youtube</a></li><li><a target=\"_blank\" title=\"Follow us on Facebook\" class=\"footer-social-fb\" href=\"http://www.facebook.com/BenchmarkEmail\">Facebook</a></li><li><a target=\"_blank\" title=\"Follow us on Twitter\" class=\"footer-social-tw\" href=\"http://twitter.com/benchmarkemail\">Twitter</a></li><li><a target=\"_blank\" title=\"Follow us on Google Plus\" class=\"footer-social-gp\" href=\"https://plus.google.com/b/100983246413411928696/100983246413411928696/\">Google Plus</a></li>\t\t\t\t</ul>\t\t\t</div>\t\t</section>    </body></html>",
    "ID" : ""
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

