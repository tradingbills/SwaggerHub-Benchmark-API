'use strict';

var utils = require('../utils/writer.js');
var Archive = require('../service/ArchiveService');

module.exports.archiveAddArchiveHomePost = function archiveAddArchiveHomePost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Archive.archiveAddArchiveHomePost(body,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archiveAddDomainPost = function archiveAddDomainPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Archive.archiveAddDomainPost(body,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archiveArchiveEmailByDomainPost = function archiveArchiveEmailByDomainPost (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var domain = req.swagger.params['Domain'].value;
  Archive.archiveArchiveEmailByDomainPost(authToken,contentType,domain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archiveArchiveHomeByDomainAndTypeGet = function archiveArchiveHomeByDomainAndTypeGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var domain = req.swagger.params['Domain'].value;
  var type = req.swagger.params['Type'].value;
  Archive.archiveArchiveHomeByDomainAndTypeGet(authToken,contentType,domain,type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archiveArchiveHomePageGet = function archiveArchiveHomePageGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Archive.archiveArchiveHomePageGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archiveArchivePagesGet = function archiveArchivePagesGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Archive.archiveArchivePagesGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archiveByIDDelete = function archiveByIDDelete (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var iD = req.swagger.params['ID'].value;
  Archive.archiveByIDDelete(authToken,contentType,iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archiveByModeGet = function archiveByModeGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var mode = req.swagger.params['mode'].value;
  Archive.archiveByModeGet(authToken,contentType,mode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archiveDetailByArchiveIDGet = function archiveDetailByArchiveIDGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var archiveID = req.swagger.params['ArchiveID'].value;
  Archive.archiveDetailByArchiveIDGet(authToken,contentType,archiveID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archiveDomainGet = function archiveDomainGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Archive.archiveDomainGet(authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archiveGet = function archiveGet (req, res, next) {
  var pageNumber = req.swagger.params['PageNumber'].value;
  var pageSize = req.swagger.params['PageSize'].value;
  var filter = req.swagger.params['Filter'].value;
  var orderBy = req.swagger.params['OrderBy'].value;
  var sortOrder = req.swagger.params['SortOrder'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Archive.archiveGet(pageNumber,pageSize,filter,orderBy,sortOrder,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archiveImageByModeGet = function archiveImageByModeGet (req, res, next) {
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var mode = req.swagger.params['mode'].value;
  Archive.archiveImageByModeGet(authToken,contentType,mode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archivePatch = function archivePatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Archive.archivePatch(body,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archivePost = function archivePost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Archive.archivePost(body,authToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archiveUpdateByArchiveIDPatch = function archiveUpdateByArchiveIDPatch (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var authToken = req.swagger.params['AuthToken'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  var archiveID = req.swagger.params['ArchiveID'].value;
  Archive.archiveUpdateByArchiveIDPatch(body,authToken,contentType,archiveID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
