'use strict';

var utils = require('../utils/writer.js');
var Webhooks = require('../service/WebhooksService');

module.exports.contactWebhooksByListIDAndIDDelete = function contactWebhooksByListIDAndIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  var iD = req.swagger.params['ID'].value;
  Webhooks.contactWebhooksByListIDAndIDDelete(authToken,contentType,listID,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactWebhooksByListIDAndIDPatch = function contactWebhooksByListIDAndIDPatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  var iD = req.swagger.params['ID'].value;
  Webhooks.contactWebhooksByListIDAndIDPatch(body,authToken,contentType,listID,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactWebhooksByListIDPost = function contactWebhooksByListIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  Webhooks.contactWebhooksByListIDPost(body,authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
