'use strict';

var utils = require('../utils/writer.js');
var PollCreation = require('../service/PollCreationService');

module.exports.pollByPollIDGet = function pollByPollIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var pollID = req.swagger.params['PollID'].value;
  PollCreation.pollByPollIDGet(authToken,contentType,pollID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pollByPollIDPatch = function pollByPollIDPatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var pollID = req.swagger.params['PollID'].value;
  PollCreation.pollByPollIDPatch(body,authToken,contentType,pollID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pollPost = function pollPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  PollCreation.pollPost(body,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
