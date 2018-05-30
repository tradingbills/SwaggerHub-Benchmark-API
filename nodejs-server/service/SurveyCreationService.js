'use strict';


/**
 * Get a Details of survey
 * Get a Details of survey  Query string parameters :  None    Request Body parameters :            Parameter      Required      Type      Description                      ID        Required        string        Survey ID                Response Body Parameters :            Parameter      Type      Description                      surveyData        <a href=\"http://www.benchmarkemail.com/models.htm#SurveyData\" >SurveyData</a>        Array of survey detals returned.            
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns GetADetailsOfSurvey
 **/
exports.surveyByIDGet = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Details of Survey
 * Update Details of Survey  Query string Parameters :  None    Request Body Parameters :                     Parameter        Required        Type        Description                            ID        Required        string        Survey ID                    Data        Required        <a href=\"http://www.benchmarkemail.com/models.htm#SurveyData\" >SurveyData </a>        Array of survey data                Response Body Parameters :                     Parameter        Type        Description                            Data        <a href=\"http://www.benchmarkemail.com/models.htm#SurveyData\" >SurveyData </a>        Data of survey returned.                    Errors        ErrorData        Return error message            
 *
 * body UpdateDetailsOfSurveyrequest 
 * authToken String 
 * contentType String 
 * iD String 
 * returns UpdateDetailsOfSurvey
 **/
exports.surveyByIDPatch = function(body,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Errors" : [ ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete question of a survey
 * Delete question of a Survey  Query string parameters :  None    Request Body Parameters :                     Parameter        Required        Type        Description                            ID        Required        string        Survey ID                    QuestionID        Required        string        Question ID                Response Body Parameters :                     Parameter        Type        Description                            Response        string        Survey ID if successful else error            
 *
 * authToken String 
 * contentType String 
 * iD String 
 * questionID String 
 * returns DeleteQuestionOfASurvey
 **/
exports.surveyQuestionByIDAndQuestionIDDelete = function(authToken,contentType,iD,questionID) {
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


/**
 * Update Question of a Survey
 * Update Question of a Survey  Query string parameters :  None    Request Body Parameters :                     Parameter        Required        Type        Description                            ID        Required        string        Survey ID                    QuestionID        Required        string        Question ID                    QuestionData        Required        <a href=\"http://www.benchmarkemail.com/models.htm#SurveyQuestion\" >SurveyQuestion</a>        Array of question data                Response Body Parameters :                     Parameter        Type        Description                            Response        string        Survey ID if successful else error            
 *
 * body UpdateQuestionOfASurveyrequest 
 * authToken String 
 * contentType String 
 * iD String 
 * questionID String 
 * returns UpdateQuestionOfASurvey
 **/
exports.surveyQuestionByIDAndQuestionIDPatch = function(body,authToken,contentType,iD,questionID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 0,
    "Data" : [ {
      "Answer1" : "",
      "Answer10" : "",
      "Answer2" : "",
      "Answer3" : "",
      "Answer4" : "",
      "Answer5" : "",
      "Answer6" : "",
      "Answer7" : "",
      "Answer8" : "",
      "Answer9" : "",
      "Comment" : "0",
      "CommentCount" : 0,
      "Notes" : "",
      "Other" : "0",
      "Question" : "Okay",
      "QuestionID" : "704919",
      "QuestionOptions" : "0",
      "QuestionType" : "3",
      "QuestionTypeText" : "#CHECK#",
      "Required" : "1",
      "ResponseRatio" : "",
      "Responses" : 0,
      "Sequence" : 0,
      "Total" : 0
    } ],
    "Errors" : [ ],
    "Status" : "1"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add Question to Survey
 * Add Question to Survey  Query string Parameters :  None    Request Body Parameters :                     Parameter        Required        Type        Description                            ID        Required        string        Survey ID                    QuestionData        Required        <a href=\"http://www.benchmarkemail.com/models.htm#SurveyQuestion\" >SurveyQuestion </a>        Array of question data                Response Body Parameters :                     Parameter        Type        Description                            Count        int        Total number                    Status        string        1 if successful, -1 if error                    Data        SurveyQuestion        Array of survey question list returned.                    Errors        ErrorData        Return error message            
 *
 * body AddQuestionToSurveyrequest 
 * authToken String 
 * contentType String 
 * iD String 
 * returns AddQuestionToSurvey
 **/
exports.surveyQuestionByIDPost = function(body,authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 0,
    "Data" : [ {
      "Answer1" : "Harry Potter",
      "Answer10" : "",
      "Answer2" : "Jurassic Park",
      "Answer3" : "Godzilla",
      "Answer4" : "King Kong",
      "Answer5" : "Ted",
      "Answer6" : "",
      "Answer7" : "",
      "Answer8" : "",
      "Answer9" : "",
      "Comment" : "1",
      "CommentCount" : 0,
      "Notes" : "",
      "Other" : "1",
      "Question" : "What is your favorite film franchise?",
      "QuestionID" : "704926",
      "QuestionOptions" : "5",
      "QuestionType" : "4",
      "QuestionTypeText" : "#DROPDOWN#",
      "Required" : "0",
      "ResponseRatio" : "",
      "Responses" : 0,
      "Sequence" : 0,
      "Total" : 0
    } ],
    "Errors" : [ ],
    "Status" : "1"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sort Question of a survey
 * Sort Question of a survey  Query string parameters :  None    Request Body Parameters :                     Parameter        Required        Type        Description                            ID        Required        string        Survey ID                    SortOrder        Required        string        Comma seperated question ids                Response Body Parameters :                     Parameter        Type        Description                            Response        string        Survey ID if successful else error            
 *
 * body SortQuestionOfASurveyrequest 
 * authToken String 
 * contentType String 
 * iD String 
 * returns SortQuestionOfASurvey
 **/
exports.surveyQuestionSortByIDPatch = function(body,authToken,contentType,iD) {
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


/**
 * Get template list of survey
 * Get template list of survey  Query string Parameters :  None    Request Body Parameters :  None    Response Body Parameters :             Parameter      Type      Description                      Count        int        Total number                    Status        string        1 if successful, -1 if error                    Data        <a href=\"http://www.benchmarkemail.com/models.htm#SurveyData\" >SurveyData</a>        Array of survey list returned.            
 *
 * authToken String 
 * contentType String 
 * returns GetTemplateListOfSurvey
 **/
exports.surveyTemplateListGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

