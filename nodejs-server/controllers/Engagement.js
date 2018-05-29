'use strict';

var utils = require('../utils/writer.js');
var Engagement = require('../service/EngagementService');

module.exports.engagementCampaignListGet = function engagementCampaignListGet (req, res, next) {
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var orderBy = req.swagger.params['OrderBy'].value;
  var filter = req.swagger.params['Filter'].value;
  var sortOrder = req.swagger.params['SortOrder'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Engagement.engagementCampaignListGet(pageNumber,pageSize,orderBy,filter,sortOrder,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.engagementClickContactCountGet = function engagementClickContactCountGet (req, res, next) {
  var emailIDList = req.swagger.params['EmailIDList'].value;
  var filterType = req.swagger.params['FilterType'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Engagement.engagementClickContactCountGet(emailIDList,filterType,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.engagementClickURLContactCountGet = function engagementClickURLContactCountGet (req, res, next) {
  var campaignURLList = req.swagger.params['CampaignURLList'].value;
  var clickAll = req.swagger.params['ClickAll'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Engagement.engagementClickURLContactCountGet(campaignURLList,clickAll,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.engagementCreateListPost = function engagementCreateListPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Engagement.engagementCreateListPost(body,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.engagementNonContactCountGet = function engagementNonContactCountGet (req, res, next) {
  var emailIDList = req.swagger.params['EmailIDList'].value;
  var filterType = req.swagger.params['FilterType'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Engagement.engagementNonContactCountGet(emailIDList,filterType,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.engagementOpenContactCountGet = function engagementOpenContactCountGet (req, res, next) {
  var emailIDList = req.swagger.params['EmailIDList'].value;
  var filterType = req.swagger.params['FilterType'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Engagement.engagementOpenContactCountGet(emailIDList,filterType,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.engagementURLListGet = function engagementURLListGet (req, res, next) {
  var filter = req.swagger.params['Filter'].value;
  var emailIDs = req.swagger.params['EmailIDs'].value;
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var orderBy = req.swagger.params['OrderBy'].value;
  var sortOrder = req.swagger.params['SortOrder'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Engagement.engagementURLListGet(filter,emailIDs,pageNumber,pageSize,orderBy,sortOrder,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
