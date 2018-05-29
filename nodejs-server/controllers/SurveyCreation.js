'use strict';

var utils = require('../utils/writer.js');
var SurveyCreation = require('../service/SurveyCreationService');

module.exports.surveyByIDGet = function surveyByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  SurveyCreation.surveyByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyByIDPatch = function surveyByIDPatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  SurveyCreation.surveyByIDPatch(body,authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyQuestionByIDAndQuestionIDDelete = function surveyQuestionByIDAndQuestionIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  var questionID = req.swagger.params['QuestionID'].value;
  SurveyCreation.surveyQuestionByIDAndQuestionIDDelete(authToken,contentType,iD,questionID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyQuestionByIDAndQuestionIDPatch = function surveyQuestionByIDAndQuestionIDPatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  var questionID = req.swagger.params['QuestionID'].value;
  SurveyCreation.surveyQuestionByIDAndQuestionIDPatch(body,authToken,contentType,iD,questionID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyQuestionByIDPost = function surveyQuestionByIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  SurveyCreation.surveyQuestionByIDPost(body,authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyQuestionSortByIDPatch = function surveyQuestionSortByIDPatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  SurveyCreation.surveyQuestionSortByIDPatch(body,authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.surveyTemplateListGet = function surveyTemplateListGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  SurveyCreation.surveyTemplateListGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
