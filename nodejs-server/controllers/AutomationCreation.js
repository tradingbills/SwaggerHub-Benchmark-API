'use strict';

var utils = require('../utils/writer.js');
var AutomationCreation = require('../service/AutomationCreationService');

module.exports.automationByAutomationIDGet = function automationByAutomationIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var automationID = req.swagger.params['AutomationID'].value;
  AutomationCreation.automationByAutomationIDGet(authToken,contentType,automationID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationByAutomationIDPatch = function automationByAutomationIDPatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var automationID = req.swagger.params['AutomationID'].value;
  AutomationCreation.automationByAutomationIDPatch(body,authToken,contentType,automationID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationEmailsByAutomationIDAndAutomationDetailIDGet = function automationEmailsByAutomationIDAndAutomationDetailIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var automationID = req.swagger.params['AutomationID'].value;
  var automationDetailID = req.swagger.params['AutomationDetailID'].value;
  AutomationCreation.automationEmailsByAutomationIDAndAutomationDetailIDGet(authToken,contentType,automationID,automationDetailID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationEmailsByAutomationIDAndAutomationDetailIDPatch = function automationEmailsByAutomationIDAndAutomationDetailIDPatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var automationID = req.swagger.params['AutomationID'].value;
  var automationDetailID = req.swagger.params['AutomationDetailID'].value;
  AutomationCreation.automationEmailsByAutomationIDAndAutomationDetailIDPatch(body,authToken,contentType,automationID,automationDetailID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationEmailsByAutomationIDPost = function automationEmailsByAutomationIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var automationID = req.swagger.params['AutomationID'].value;
  AutomationCreation.automationEmailsByAutomationIDPost(body,authToken,contentType,automationID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationEmailsContentByAutomationIDAndAutomationDetailIDPatch = function automationEmailsContentByAutomationIDAndAutomationDetailIDPatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var automationID = req.swagger.params['AutomationID'].value;
  var automationDetailID = req.swagger.params['AutomationDetailID'].value;
  AutomationCreation.automationEmailsContentByAutomationIDAndAutomationDetailIDPatch(body,authToken,contentType,automationID,automationDetailID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationEmailsContentByAutomationIDAndAutomationDetailIDPost = function automationEmailsContentByAutomationIDAndAutomationDetailIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var automationID = req.swagger.params['AutomationID'].value;
  var automationDetailID = req.swagger.params['AutomationDetailID'].value;
  AutomationCreation.automationEmailsContentByAutomationIDAndAutomationDetailIDPost(body,authToken,contentType,automationID,automationDetailID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.automationPost = function automationPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  AutomationCreation.automationPost(body,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
