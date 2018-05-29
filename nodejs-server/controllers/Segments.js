'use strict';

var utils = require('../utils/writer.js');
var Segments = require('../service/SegmentsService');

module.exports.contactSegmentDownloadByIDGet = function contactSegmentDownloadByIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Segments.contactSegmentDownloadByIDGet(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactSegmentListsByListIDGet = function contactSegmentListsByListIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  Segments.contactSegmentListsByListIDGet(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactSegmentsByListIDPost = function contactSegmentsByListIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  Segments.contactSegmentsByListIDPost(body,authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactSegmentsBySegmentIDDelete = function contactSegmentsBySegmentIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var segmentID = req.swagger.params['SegmentID'].value;
  Segments.contactSegmentsBySegmentIDDelete(authToken,contentType,segmentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactSegmentsBySegmentIDGet = function contactSegmentsBySegmentIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var segmentID = req.swagger.params['SegmentID'].value;
  Segments.contactSegmentsBySegmentIDGet(authToken,contentType,segmentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactSegmentsBySegmentIDPatch = function contactSegmentsBySegmentIDPatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var segmentID = req.swagger.params['SegmentID'].value;
  Segments.contactSegmentsBySegmentIDPatch(body,authToken,contentType,segmentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactSegmentsCriteriaBySegmentIDDelete = function contactSegmentsCriteriaBySegmentIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var segmentID = req.swagger.params['SegmentID'].value;
  Segments.contactSegmentsCriteriaBySegmentIDDelete(authToken,contentType,segmentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactSegmentsCriteriaBySegmentIDPost = function contactSegmentsCriteriaBySegmentIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var segmentID = req.swagger.params['SegmentID'].value;
  Segments.contactSegmentsCriteriaBySegmentIDPost(body,authToken,contentType,segmentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactSegmentsGet = function contactSegmentsGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Segments.contactSegmentsGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactSegmentsNameByListIDGet = function contactSegmentsNameByListIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var listID = req.swagger.params['ListID'].value;
  Segments.contactSegmentsNameByListIDGet(authToken,contentType,listID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactSegmentsSegmentDetailsBySegmentIDGet = function contactSegmentsSegmentDetailsBySegmentIDGet (req, res, next) {
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var orderBy = req.swagger.params['OrderBy'].value;
  var sortOrder = req.swagger.params['SortOrder'].value;
  var searchFilter = req.swagger.params['SearchFilter'].value;
  var searchType = req.swagger.params['SearchType'].value;
  var searchField = req.swagger.params['SearchField'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var segmentID = req.swagger.params['SegmentID'].value;
  Segments.contactSegmentsSegmentDetailsBySegmentIDGet(pageNumber,pageSize,orderBy,sortOrder,searchFilter,searchType,searchField,authToken,contentType,segmentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
