'use strict';

var utils = require('../utils/writer.js');
var AddContacts = require('../service/AddContactsService');

module.exports.contactCompilationByListIDPatch = function contactCompilationByListIDPatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  AddContacts.contactCompilationByListIDPatch(body,authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsByListIDAndContactIDPatch = function contactContactDetailsByListIDAndContactIDPatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  var contactID = req.swagger.params['ContactID'].value;
  AddContacts.contactContactDetailsByListIDAndContactIDPatch(body,authToken,contentType,listID,contactID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsByListIDPost = function contactContactDetailsByListIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  AddContacts.contactContactDetailsByListIDPost(body,authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsCSVByListIDPost = function contactContactDetailsCSVByListIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  AddContacts.contactContactDetailsCSVByListIDPost(body,authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsCSVUploadByListIDPost = function contactContactDetailsCSVUploadByListIDPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  AddContacts.contactContactDetailsCSVUploadByListIDPost(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsCSVUploadVerifiedByIDPost = function contactContactDetailsCSVUploadVerifiedByIDPost (req, res, next) {
  var data = req.swagger.params['Data'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  AddContacts.contactContactDetailsCSVUploadVerifiedByIDPost(data,authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactContactDetailsCSVVerifiedByListIDPost = function contactContactDetailsCSVVerifiedByListIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  AddContacts.contactContactDetailsCSVVerifiedByListIDPost(body,authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactMappingByListIDAndFileNameGet = function contactMappingByListIDAndFileNameGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  var fileName = req.swagger.params['FileName'].value;
  AddContacts.contactMappingByListIDAndFileNameGet(authToken,contentType,listID,fileName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactMappingByListIDPatch = function contactMappingByListIDPatch (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  AddContacts.contactMappingByListIDPatch(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactPost = function contactPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  AddContacts.contactPost(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
