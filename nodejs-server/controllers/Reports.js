'use strict';

var utils = require('../utils/writer.js');
var Reports = require('../service/ReportsService');

module.exports.aBSplitCompareByIDGet = function aBSplitCompareByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.aBSplitCompareByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aBSplitReportByIDAndABIDGet = function aBSplitReportByIDAndABIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  var aBID = req.swagger.params['ABID'].value;
  Reports.aBSplitReportByIDAndABIDGet(authToken,contentType,iD,aBID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aBSplitReportGet = function aBSplitReportGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Reports.aBSplitReportGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aBSplitResultsByIDGet = function aBSplitResultsByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.aBSplitResultsByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationReportByAutomationIDGet = function automationReportByAutomationIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var automationID = req.swagger.params['AutomationID'].value;
  Reports.automationReportByAutomationIDGet(authToken,contentType,automationID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationReportGet = function automationReportGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Reports.automationReportGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsCampaignHistoryByIDGet = function emailsCampaignHistoryByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsCampaignHistoryByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsGetSaveAsListGet = function emailsGetSaveAsListGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Reports.emailsGetSaveAsListGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsLinkDetailByIDGet = function emailsLinkDetailByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsLinkDetailByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsRSSHistoryByIDGet = function emailsRSSHistoryByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsRSSHistoryByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportAbuseCampaignByIDGet = function emailsReportAbuseCampaignByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportAbuseCampaignByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportAbuseGet = function emailsReportAbuseGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Reports.emailsReportAbuseGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportBouncesByIDGet = function emailsReportBouncesByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportBouncesByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportByIDGet = function emailsReportByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportClickHeatMapByIDGet = function emailsReportClickHeatMapByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportClickHeatMapByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportClickPerformanceByIDGet = function emailsReportClickPerformanceByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportClickPerformanceByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportClickPerformanceDetailsByIDGet = function emailsReportClickPerformanceDetailsByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportClickPerformanceDetailsByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportClicksByIDGet = function emailsReportClicksByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportClicksByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportDownloadByIDAndRTypeGet = function emailsReportDownloadByIDAndRTypeGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  var rType = req.swagger.params['RType'].value;
  Reports.emailsReportDownloadByIDAndRTypeGet(authToken,contentType,iD,rType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportDownloadByIDAndRTypePost = function emailsReportDownloadByIDAndRTypePost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  var rType = req.swagger.params['RType'].value;
  Reports.emailsReportDownloadByIDAndRTypePost(authToken,contentType,iD,rType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportForwardsByIDGet = function emailsReportForwardsByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportForwardsByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportGet = function emailsReportGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Reports.emailsReportGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportOpensByIDGet = function emailsReportOpensByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportOpensByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportOpensHourlyByIDGet = function emailsReportOpensHourlyByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportOpensHourlyByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportOpensLocationByIDAndCountryCodeGet = function emailsReportOpensLocationByIDAndCountryCodeGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  var countryCode = req.swagger.params['CountryCode'].value;
  Reports.emailsReportOpensLocationByIDAndCountryCodeGet(authToken,contentType,iD,countryCode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportOpensLocationByIDGet = function emailsReportOpensLocationByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportOpensLocationByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportOpensRegionByIDAndCountryGet = function emailsReportOpensRegionByIDAndCountryGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  var country = req.swagger.params['Country'].value;
  var region = req.swagger.params['Region'].value;
  Reports.emailsReportOpensRegionByIDAndCountryGet(authToken,contentType,iD,country,region)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportSocialPerformanceByIDGet = function emailsReportSocialPerformanceByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportSocialPerformanceByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportUnopensByIDGet = function emailsReportUnopensByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportUnopensByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsReportUnsubscribesByIDGet = function emailsReportUnsubscribesByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsReportUnsubscribesByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsSaveAsListPatch = function emailsSaveAsListPatch (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Reports.emailsSaveAsListPatch(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsURLListByIDGet = function emailsURLListByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Reports.emailsURLListByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pollResponseByPollIDGet = function pollResponseByPollIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var pollID = req.swagger.params['PollID'].value;
  Reports.pollResponseByPollIDGet(authToken,contentType,pollID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyReportAnswerCommentBySurveyIDGet = function surveyReportAnswerCommentBySurveyIDGet (req, res, next) {
  var questionID = req.swagger.params['QuestionID'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var surveyID = req.swagger.params['SurveyID'].value;
  Reports.surveyReportAnswerCommentBySurveyIDGet(questionID,authToken,contentType,surveyID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyReportAnswerOtherBySurveyIDGet = function surveyReportAnswerOtherBySurveyIDGet (req, res, next) {
  var questionID = req.swagger.params['QuestionID'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var surveyID = req.swagger.params['SurveyID'].value;
  Reports.surveyReportAnswerOtherBySurveyIDGet(questionID,authToken,contentType,surveyID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyReportAnswerTextBySurveyIDGet = function surveyReportAnswerTextBySurveyIDGet (req, res, next) {
  var questionID = req.swagger.params['QuestionID'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var surveyID = req.swagger.params['SurveyID'].value;
  Reports.surveyReportAnswerTextBySurveyIDGet(questionID,authToken,contentType,surveyID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyReportDetailBySurveyIDGet = function surveyReportDetailBySurveyIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var surveyID = req.swagger.params['SurveyID'].value;
  Reports.surveyReportDetailBySurveyIDGet(authToken,contentType,surveyID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyReportFullBySurveyIDGet = function surveyReportFullBySurveyIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var surveyID = req.swagger.params['SurveyID'].value;
  Reports.surveyReportFullBySurveyIDGet(authToken,contentType,surveyID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyReportIndividualBySurveyIDAndEmailIDGet = function surveyReportIndividualBySurveyIDAndEmailIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var surveyID = req.swagger.params['SurveyID'].value;
  var emailID = req.swagger.params['EmailID'].value;
  Reports.surveyReportIndividualBySurveyIDAndEmailIDGet(authToken,contentType,surveyID,emailID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyReportIndividualBySurveyIDGet = function surveyReportIndividualBySurveyIDGet (req, res, next) {
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var filter = req.swagger.params['Filter'].value;
  var orderBy = req.swagger.params['OrderBy'].value;
  var sortOrder = req.swagger.params['SortOrder'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var surveyID = req.swagger.params['SurveyID'].value;
  Reports.surveyReportIndividualBySurveyIDGet(pageNumber,pageSize,filter,orderBy,sortOrder,authToken,contentType,surveyID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyReportListGet = function surveyReportListGet (req, res, next) {
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var orderBy = req.swagger.params['OrderBy'].value;
  var filter = req.swagger.params['Filter'].value;
  var sortOrder = req.swagger.params['SortOrder'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Reports.surveyReportListGet(pageNumber,pageSize,orderBy,filter,sortOrder,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
