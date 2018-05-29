'use strict';

var utils = require('../utils/writer.js');
var EmailEditor = require('../service/EmailEditorService');

module.exports.clientIntegrationsEbaySiteGet = function clientIntegrationsEbaySiteGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  EmailEditor.clientIntegrationsEbaySiteGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientIntegrationsGet = function clientIntegrationsGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  EmailEditor.clientIntegrationsGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsBadgesGet = function emailsBadgesGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  EmailEditor.emailsBadgesGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsLayoutGet = function emailsLayoutGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  EmailEditor.emailsLayoutGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsSchemeByIDDelete = function emailsSchemeByIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  EmailEditor.emailsSchemeByIDDelete(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsSchemeGet = function emailsSchemeGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  EmailEditor.emailsSchemeGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsSchemePatch = function emailsSchemePatch (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  EmailEditor.emailsSchemePatch(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsTemplateByTemplateIDGet = function emailsTemplateByTemplateIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var templateID = req.swagger.params['TemplateID'].value;
  EmailEditor.emailsTemplateByTemplateIDGet(authToken,contentType,templateID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsTemplateCategoryByCategoryIDGet = function emailsTemplateCategoryByCategoryIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var categoryID = req.swagger.params['CategoryID'].value;
  EmailEditor.emailsTemplateCategoryByCategoryIDGet(authToken,contentType,categoryID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsTemplateCategoryGet = function emailsTemplateCategoryGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  EmailEditor.emailsTemplateCategoryGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailsTemplateGet = function emailsTemplateGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  EmailEditor.emailsTemplateGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
