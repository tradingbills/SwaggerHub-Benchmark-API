'use strict';

var utils = require('../utils/writer.js');
var ContactDetails = require('../service/ContactDetailsService');

module.exports.contactContactDetailsDelete = function contactContactDetailsDelete (req, res, next) {
  var search = req.swagger.params['Search'].value;
  var filter = req.swagger.params['Filter'].value;
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  ContactDetails.contactContactDetailsDelete(search,filter,body,authToken,contentType)
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
  ContactDetails.contactContactDetailsGet(searchFilter,search,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
