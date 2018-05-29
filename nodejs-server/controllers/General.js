'use strict';

var utils = require('../utils/writer.js');
var General = require('../service/GeneralService');

module.exports.aBSplitByIDDelete = function aBSplitByIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.aBSplitByIDDelete(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aBSplitGet = function aBSplitGet (req, res, next) {
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var filter = req.swagger.params['Filter'].value;
  var filterType = req.swagger.params['FilterType'].value;
  var orderBy = req.swagger.params['OrderBy'].value;
  var sortOrder = req.swagger.params['SortOrder'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.aBSplitGet(pageNumber,pageSize,filter,filterType,orderBy,sortOrder,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.aBSplitStatusByIDPatch = function aBSplitStatusByIDPatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.aBSplitStatusByIDPatch(body,authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationByAutomationIDDelete = function automationByAutomationIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var automationID = req.swagger.params['AutomationID'].value;
  General.automationByAutomationIDDelete(authToken,contentType,automationID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationCopyByAutomationIDPost = function automationCopyByAutomationIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var automationID = req.swagger.params['AutomationID'].value;
  General.automationCopyByAutomationIDPost(body,authToken,contentType,automationID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationEmailsByAutomationIDAndAutomationDetailIDDelete = function automationEmailsByAutomationIDAndAutomationDetailIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var automationID = req.swagger.params['AutomationID'].value;
  var automationDetailID = req.swagger.params['AutomationDetailID'].value;
  General.automationEmailsByAutomationIDAndAutomationDetailIDDelete(authToken,contentType,automationID,automationDetailID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationEmailsByAutomationIDAndAutomationDetailIDPost = function automationEmailsByAutomationIDAndAutomationDetailIDPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var automationID = req.swagger.params['AutomationID'].value;
  var automationDetailID = req.swagger.params['AutomationDetailID'].value;
  General.automationEmailsByAutomationIDAndAutomationDetailIDPost(authToken,contentType,automationID,automationDetailID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationGet = function automationGet (req, res, next) {
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var filter = req.swagger.params['Filter'].value;
  var orderBy = req.swagger.params['OrderBy'].value;
  var sortOrder = req.swagger.params['SortOrder'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.automationGet(pageNumber,pageSize,filter,orderBy,sortOrder,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientArchiveDomainGet = function clientArchiveDomainGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.clientArchiveDomainGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientCommunityDomainGet = function clientCommunityDomainGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.clientCommunityDomainGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientDMarcGet = function clientDMarcGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.clientDMarcGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientListUploadTermsGet = function clientListUploadTermsGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.clientListUploadTermsGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientNotificationGet = function clientNotificationGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.clientNotificationGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientRatingRangeGet = function clientRatingRangeGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.clientRatingRangeGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientResponsiveGet = function clientResponsiveGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.clientResponsiveGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientResponsivePatch = function clientResponsivePatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.clientResponsivePatch(body,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactActiveCountGet = function contactActiveCountGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.contactActiveCountGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactAllByListIDsGet = function contactAllByListIDsGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listIDs = req.swagger.params['ListIDs'].value;
  General.contactAllByListIDsGet(authToken,contentType,listIDs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactAuditHistoryByListIDGet = function contactAuditHistoryByListIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactAuditHistoryByListIDGet(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactAuditHistoryDetailsGroupIDByListIDAndBatchIDGet = function contactAuditHistoryDetailsGroupIDByListIDAndBatchIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  var batchID = req.swagger.params['BatchID'].value;
  var groupID = req.swagger.params['GroupID'].value;
  General.contactAuditHistoryDetailsGroupIDByListIDAndBatchIDGet(authToken,contentType,listID,batchID,groupID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactByListIDDelete = function contactByListIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactByListIDDelete(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactByListIDGet = function contactByListIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactByListIDGet(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactByListIDPatch = function contactByListIDPatch (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactByListIDPatch(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactCleanByCleanListIDPost = function contactCleanByCleanListIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var cleanListID = req.swagger.params['CleanListID'].value;
  General.contactCleanByCleanListIDPost(body,authToken,contentType,cleanListID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactCleanCountByListIDGet = function contactCleanCountByListIDGet (req, res, next) {
  var ct = req.swagger.params['ct'].value;
  var ctc = req.swagger.params['ctc'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactCleanCountByListIDGet(ct,ctc,authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactCompareByListIDsGet = function contactCompareByListIDsGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listIDs = req.swagger.params['ListIDs'].value;
  General.contactCompareByListIDsGet(authToken,contentType,listIDs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsAllByListIDAndContactIDDelete = function contactContactDetailsAllByListIDAndContactIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  var contactID = req.swagger.params['ContactID'].value;
  General.contactContactDetailsAllByListIDAndContactIDDelete(authToken,contentType,listID,contactID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsAllDelete = function contactContactDetailsAllDelete (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.contactContactDetailsAllDelete(body,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsByContactIDDelete = function contactContactDetailsByContactIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var contactID = req.swagger.params['ContactID'].value;
  General.contactContactDetailsByContactIDDelete(authToken,contentType,contactID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsByListIDAndContactIDDelete = function contactContactDetailsByListIDAndContactIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['listID'].value;
  var contactID = req.swagger.params['ContactID'].value;
  General.contactContactDetailsByListIDAndContactIDDelete(authToken,contentType,listID,contactID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsByListIDAndIDGet = function contactContactDetailsByListIDAndIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  var iD = req.swagger.params['ID'].value;
  General.contactContactDetailsByListIDAndIDGet(authToken,contentType,listID,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsByListIDGet = function contactContactDetailsByListIDGet (req, res, next) {
  var searchFilter = req.swagger.params['SearchFilter'].value;
  var searchType = req.swagger.params['SearchType'].value;
  var searchField = req.swagger.params['SearchField'].value;
  var filter = req.swagger.params['Filter'].value;
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var orderBy = req.swagger.params['OrderBy'].value;
  var sortOrder = req.swagger.params['SortOrder'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactContactDetailsByListIDGet(searchFilter,searchType,searchField,filter,pageNumber,pageSize,orderBy,sortOrder,authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsDelete = function contactContactDetailsDelete (req, res, next) {
  var search = req.swagger.params['Search'].value;
  var filter = req.swagger.params['Filter'].value;
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.contactContactDetailsDelete(search,filter,body,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsGet = function contactContactDetailsGet (req, res, next) {
  var searchFilter = req.swagger.params['SearchFilter'].value;
  var search = req.swagger.params['Search'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.contactContactDetailsGet(searchFilter,search,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactImportStatusGet = function contactContactImportStatusGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.contactContactImportStatusGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactReportHistoryByEMailGet = function contactContactReportHistoryByEMailGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var eMail = req.swagger.params['EMail'].value;
  General.contactContactReportHistoryByEMailGet(authToken,contentType,eMail)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactReportHistoryByEMailIDGet = function contactContactReportHistoryByEMailIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var eMailID = req.swagger.params['EMailID'].value;
  General.contactContactReportHistoryByEMailIDGet(authToken,contentType,eMailID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactSummaryByListIDGet = function contactContactSummaryByListIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactContactSummaryByListIDGet(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactCopyContactsByListIDAndContactIDPost = function contactCopyContactsByListIDAndContactIDPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  var contactID = req.swagger.params['ContactID'].value;
  General.contactCopyContactsByListIDAndContactIDPost(authToken,contentType,listID,contactID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactCopyContactsPost = function contactCopyContactsPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.contactCopyContactsPost(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactCountByListIDsAndSegmentIDsGet = function contactCountByListIDsAndSegmentIDsGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listIDs = req.swagger.params['ListIDs'].value;
  var segmentIDs = req.swagger.params['SegmentIDs'].value;
  General.contactCountByListIDsAndSegmentIDsGet(authToken,contentType,listIDs,segmentIDs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactDeleteListByListIDsDelete = function contactDeleteListByListIDsDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listIDs = req.swagger.params['ListIDs'].value;
  General.contactDeleteListByListIDsDelete(authToken,contentType,listIDs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactDeleteListCheckByListIDsGet = function contactDeleteListCheckByListIDsGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listIDs = req.swagger.params['ListIDs'].value;
  General.contactDeleteListCheckByListIDsGet(authToken,contentType,listIDs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactDeleteTrashListByListIDsDelete = function contactDeleteTrashListByListIDsDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listIDs = req.swagger.params['ListIDs'].value;
  General.contactDeleteTrashListByListIDsDelete(authToken,contentType,listIDs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactDownloadByIDGet = function contactDownloadByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.contactDownloadByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactDownloadByIDPost = function contactDownloadByIDPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.contactDownloadByIDPost(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactExportToListGet = function contactExportToListGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.contactExportToListGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactFieldsByListIDGet = function contactFieldsByListIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactFieldsByListIDGet(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactGet = function contactGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.contactGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactListbuilderListGet = function contactListbuilderListGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.contactListbuilderListGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactListbuilderListsByListIDGet = function contactListbuilderListsByListIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactListbuilderListsByListIDGet(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactMergeIntoExistingListByListIDsPost = function contactMergeIntoExistingListByListIDsPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listIDs = req.swagger.params['ListIDs'].value;
  General.contactMergeIntoExistingListByListIDsPost(body,authToken,contentType,listIDs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactMergeIntoListNewListByListIDsPost = function contactMergeIntoListNewListByListIDsPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listIDs = req.swagger.params['ListIDs'].value;
  General.contactMergeIntoListNewListByListIDsPost(authToken,contentType,listIDs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactMergeListsByListIDsGet = function contactMergeListsByListIDsGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listIDs = req.swagger.params['ListIDs'].value;
  General.contactMergeListsByListIDsGet(authToken,contentType,listIDs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactMoveContactsByListIDPost = function contactMoveContactsByListIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactMoveContactsByListIDPost(body,authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactMoveContactsContactIDsByListIDAndTargetListIDPost = function contactMoveContactsContactIDsByListIDAndTargetListIDPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  var targetListID = req.swagger.params['TargetListID'].value;
  var contactIDs = req.swagger.params['ContactIDs'].value;
  General.contactMoveContactsContactIDsByListIDAndTargetListIDPost(authToken,contentType,listID,targetListID,contactIDs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactMoveToDNCByListIDAndContactIDDelete = function contactMoveToDNCByListIDAndContactIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  var contactID = req.swagger.params['ContactID'].value;
  General.contactMoveToDNCByListIDAndContactIDDelete(authToken,contentType,listID,contactID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactResendEmailsByListIDPost = function contactResendEmailsByListIDPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactResendEmailsByListIDPost(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactRestoreTrashListByListIDsPatch = function contactRestoreTrashListByListIDsPatch (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listIDs = req.swagger.params['ListIDs'].value;
  General.contactRestoreTrashListByListIDsPatch(authToken,contentType,listIDs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactShareListsByListIDAndClientIDsPost = function contactShareListsByListIDAndClientIDsPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  var clientIDs = req.swagger.params['ClientIDs'].value;
  General.contactShareListsByListIDAndClientIDsPost(authToken,contentType,listID,clientIDs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactSplitIntoListNewListByListIDPost = function contactSplitIntoListNewListByListIDPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactSplitIntoListNewListByListIDPost(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactTrashByListIDDelete = function contactTrashByListIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactTrashByListIDDelete(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactTrashCountGet = function contactTrashCountGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.contactTrashCountGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactUniqueCountGet = function contactUniqueCountGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.contactUniqueCountGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactWebhooksByListIDGet = function contactWebhooksByListIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  General.contactWebhooksByListIDGet(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsABSplitByIDDelete = function emailsABSplitByIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.emailsABSplitByIDDelete(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsByIDDelete = function emailsByIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.emailsByIDDelete(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsByIDPost = function emailsByIDPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.emailsByIDPost(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsCommunityByIDPatch = function emailsCommunityByIDPatch (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.emailsCommunityByIDPatch(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsCommunityGetEmailByIDGet = function emailsCommunityGetEmailByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.emailsCommunityGetEmailByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsGet = function emailsGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.emailsGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsPreviewByIDGet = function emailsPreviewByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.emailsPreviewByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsShareTemplateByIDPost = function emailsShareTemplateByIDPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.emailsShareTemplateByIDPost(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsTrashByIDDelete = function emailsTrashByIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.emailsTrashByIDDelete(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsTrashByIDPost = function emailsTrashByIDPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.emailsTrashByIDPost(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pollByPollIDDelete = function pollByPollIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var pollID = req.swagger.params['PollID'].value;
  General.pollByPollIDDelete(authToken,contentType,pollID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pollCopyByPollIDPost = function pollCopyByPollIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var pollID = req.swagger.params['PollID'].value;
  General.pollCopyByPollIDPost(body,authToken,contentType,pollID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pollGet = function pollGet (req, res, next) {
  var filter = req.swagger.params['Filter'].value;
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var orderBy = req.swagger.params['OrderBy'].value;
  var sortOrder = req.swagger.params['SortOrder'].value;
  var status = req.swagger.params['status'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.pollGet(filter,pageNumber,pageSize,orderBy,sortOrder,status,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pollRenderByPollIDGet = function pollRenderByPollIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var pollID = req.swagger.params['PollID'].value;
  General.pollRenderByPollIDGet(authToken,contentType,pollID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyByIDDelete = function surveyByIDDelete (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.surveyByIDDelete(body,authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyCopyByIDPost = function surveyCopyByIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  General.surveyCopyByIDPost(body,authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyGet = function surveyGet (req, res, next) {
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var orderBy = req.swagger.params['OrderBy'].value;
  var filter = req.swagger.params['Filter'].value;
  var sortOrder = req.swagger.params['SortOrder'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  General.surveyGet(pageNumber,pageSize,orderBy,filter,sortOrder,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyStatusUpdateByIDAndStatusPatch = function surveyStatusUpdateByIDAndStatusPatch (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  var status = req.swagger.params['Status'].value;
  General.surveyStatusUpdateByIDAndStatusPatch(authToken,contentType,iD,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
