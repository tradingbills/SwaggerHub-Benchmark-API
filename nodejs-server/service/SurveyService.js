'use strict';


/**
 * Use template for Survey
 * Copy template in Survey  Query string parameters :  None    Request Body Parameters :                     Parameter        Required        Type        Description                            ID        Required        string        Survey ID                    Name        Required        string        Survey name                Response Body Parameters :                     Parameter        Type        Description                            Response        string        New Survey ID if successful else error            
 *
 * body UseTemplateForSurveyrequest 
 * authToken String 
 * contentType String 
 * iD String 
 * returns CopyTemplateInSurvey
 **/
exports.surveyCopyTemplateByIDPost = function(body,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "894757"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a Survey
 * Create a Survey  Query String Parameters :  None    Request Body Parameters :                     Parameter        Required        Type        Description                            Data        Required        <a href=\"http://www.benchmarkemail.com/models.htm#SurveyData\" >SurveyData</a>        Array of survey data post.              Response Body Parameters:                    Parameter        Type        Description                            Response        string        1 if successful, -1 if error            
 *
 * body CreateASurveyrequest 
 * authToken String 
 * contentType String 
 * returns CreateASurvey
 **/
exports.surveyPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "894737"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

