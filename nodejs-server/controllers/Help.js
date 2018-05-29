'use strict';

var utils = require('../utils/writer.js');
var Help = require('../service/HelpService');

module.exports.helpGet = function helpGet (req, res, next) {
  var filter[URL] = req.swagger.params['Filter[URL]'].value;
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Help.helpGet(filter[URL],pageNumber,pageSize,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.helpPost = function helpPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Help.helpPost(body,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.helpTicketPost = function helpTicketPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Help.helpTicketPost(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
