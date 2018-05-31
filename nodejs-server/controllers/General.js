'use strict';

var utils = require('../utils/writer.js');
var General = require('../service/GeneralService');

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
