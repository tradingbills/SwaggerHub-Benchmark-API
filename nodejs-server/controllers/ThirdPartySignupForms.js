'use strict';

var utils = require('../utils/writer.js');
var ThirdPartySignupForms = require('../service/ThirdPartySignupFormsService');

module.exports.clientIntegrationsSignupFormMagentoGet = function clientIntegrationsSignupFormMagentoGet (req, res, next) {
  var iD = req.swagger.params['ID'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  ThirdPartySignupForms.clientIntegrationsSignupFormMagentoGet(iD,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientIntegrationsSignupFormTumblerGet = function clientIntegrationsSignupFormTumblerGet (req, res, next) {
  var iD = req.swagger.params['ID'].value;
  var title = req.swagger.params['Title'].value;
  var subscribe = req.swagger.params['Subscribe'].value;
  var email = req.swagger.params['Email'].value;
  var language = req.swagger.params['Language'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  ThirdPartySignupForms.clientIntegrationsSignupFormTumblerGet(iD,title,subscribe,email,language,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientIntegrationsSignupFormUnbounceGet = function clientIntegrationsSignupFormUnbounceGet (req, res, next) {
  var iD = req.swagger.params['ID'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  ThirdPartySignupForms.clientIntegrationsSignupFormUnbounceGet(iD,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
