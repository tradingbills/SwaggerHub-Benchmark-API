'use strict';

var utils = require('../utils/writer.js');
var VideoGallery = require('../service/VideoGalleryService');

module.exports.videoByVideoIDDelete = function videoByVideoIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var videoID = req.swagger.params['VideoID'].value;
  VideoGallery.videoByVideoIDDelete(authToken,contentType,videoID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.videoByVideoIDGet = function videoByVideoIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var videoID = req.swagger.params['VideoID'].value;
  VideoGallery.videoByVideoIDGet(authToken,contentType,videoID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.videoCopyByVideoIDPost = function videoCopyByVideoIDPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var videoID = req.swagger.params['VideoID'].value;
  VideoGallery.videoCopyByVideoIDPost(body,authToken,contentType,videoID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.videoGet = function videoGet (req, res, next) {
  var filter = req.swagger.params['Filter'].value;
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var orderBy = req.swagger.params['OrderBy'].value;
  var sortOrder = req.swagger.params['SortOrder'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  VideoGallery.videoGet(filter,pageNumber,pageSize,orderBy,sortOrder,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.videoPost = function videoPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  VideoGallery.videoPost(body,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
