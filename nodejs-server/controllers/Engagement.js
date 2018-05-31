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
