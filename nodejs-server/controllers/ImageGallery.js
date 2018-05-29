'use strict';

var utils = require('../utils/writer.js');
var ImageGallery = require('../service/ImageGalleryService');

module.exports.imagesByImageIDDelete = function imagesByImageIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var imageID = req.swagger.params['ImageID'].value;
  ImageGallery.imagesByImageIDDelete(authToken,contentType,imageID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.imagesByImageIDGet = function imagesByImageIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var imageID = req.swagger.params['ImageID'].value;
  ImageGallery.imagesByImageIDGet(authToken,contentType,imageID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.imagesByImageIDPatch = function imagesByImageIDPatch (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var imageID = req.swagger.params['ImageID'].value;
  ImageGallery.imagesByImageIDPatch(authToken,contentType,imageID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.imagesByImageTypeAndExtraPost = function imagesByImageTypeAndExtraPost (req, res, next) {
  var data = req.swagger.params['Data'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var imageType = req.swagger.params['ImageType'].value;
  var extra = req.swagger.params['Extra'].value;
  ImageGallery.imagesByImageTypeAndExtraPost(data,authToken,contentType,imageType,extra)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.imagesCopyByImageIDPost = function imagesCopyByImageIDPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var imageID = req.swagger.params['ImageID'].value;
  ImageGallery.imagesCopyByImageIDPost(authToken,contentType,imageID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.imagesGet = function imagesGet (req, res, next) {
  var filter = req.swagger.params['Filter'].value;
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var orderBy = req.swagger.params['OrderBy'].value;
  var sortOrder = req.swagger.params['SortOrder'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  ImageGallery.imagesGet(filter,pageNumber,pageSize,orderBy,sortOrder,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.imagesGiphyImagesListGet = function imagesGiphyImagesListGet (req, res, next) {
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var filter = req.swagger.params['Filter'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  ImageGallery.imagesGiphyImagesListGet(pageNumber,pageSize,filter,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.imagesPost = function imagesPost (req, res, next) {
  var data = req.swagger.params['Data'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  ImageGallery.imagesPost(data,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.imagesSummaryGet = function imagesSummaryGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  ImageGallery.imagesSummaryGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
