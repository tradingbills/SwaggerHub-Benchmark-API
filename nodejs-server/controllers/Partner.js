'use strict';

var utils = require('../utils/writer.js');
var Partner = require('../service/PartnerService');

module.exports.partnerCommissionLevel1ListGet = function partnerCommissionLevel1ListGet (req, res, next) {
  var imonth = req.swagger.params['imonth'].value;
  var iyear = req.swagger.params['iyear'].value;
  var sort = req.swagger.params['sort'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Partner.partnerCommissionLevel1ListGet(imonth,iyear,sort,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.partnerCommissionLevel2ListGet = function partnerCommissionLevel2ListGet (req, res, next) {
  var client_id = req.swagger.params['client_id'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Partner.partnerCommissionLevel2ListGet(client_id,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.partnerCommissionListGet = function partnerCommissionListGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Partner.partnerCommissionListGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.partnerProfileGet = function partnerProfileGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Partner.partnerProfileGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.partnerProfilePatch = function partnerProfilePatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Partner.partnerProfilePatch(body,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.partnerReferralsLevel1ListGet = function partnerReferralsLevel1ListGet (req, res, next) {
  var imonth = req.swagger.params['imonth'].value;
  var iyear = req.swagger.params['iyear'].value;
  var sort = req.swagger.params['sort'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Partner.partnerReferralsLevel1ListGet(imonth,iyear,sort,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.partnerReferralsListGet = function partnerReferralsListGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Partner.partnerReferralsListGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.partnerWebPageAdsDetailGet = function partnerWebPageAdsDetailGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Partner.partnerWebPageAdsDetailGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
