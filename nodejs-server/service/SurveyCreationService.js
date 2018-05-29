'use strict';


/**
 * Get a Details of survey
 * <h4>Get a Details of survey</h4> <b>Query string parameters : </b> None <br> <b>Request Body parameters :</b> <table>   <thead>     <th>Parameter</th>     <th>Required</th>     <th>Type</th>     <th>Description</th>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Survey ID</td>     </tr>   </tbody> </table>  <b>Response Body Parameters :</b> <table>   <thead>     <th>Parameter</th>     <th>Type</th>     <th>Description</th>   </thead>   <tbody>     <tr>       <td>surveyData</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyData\" >SurveyData</a></td>       <td>Array of survey detals returned.</td>     </tr>   </tbody> </table>
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
 * <h4>Update Details of Survey</h4> <b>Query string Parameters : </b> None <br> <b>Request Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Survey ID</td>     </tr>     <tr>       <td>Data</td>       <td>Required</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyData\" >SurveyData </a></td>       <td>Array of survey data</td>     </tr>   </tbody> </table>  <b>Response Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyData\" >SurveyData </a></td>       <td>Data of survey returned.</td>     </tr>     <tr>       <td>Errors</td>       <td>ErrorData</td>       <td>Return error message</td>     </tr>   </tbody> </table>
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
 * <h4>Delete question of a Survey</h4> <b>Query string parameters : </b> None <br> <b>Request Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Survey ID</td>     </tr>     <tr>       <td>QuestionID</td>       <td>Required</td>       <td>string</td>       <td>Question ID</td>     </tr>   </tbody> </table>  <b>Response Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Response</td>       <td>string</td>       <td>Survey ID if successful else error</td>     </tr>   </tbody> </table>
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
 * <h4>Update Question of a Survey</h4> <b>Query string parameters : </b> None <br> <b>Request Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Survey ID</td>     </tr>     <tr>       <td>QuestionID</td>       <td>Required</td>       <td>string</td>       <td>Question ID</td>     </tr>     <tr>       <td>QuestionData</td>       <td>Required</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyQuestion\" >SurveyQuestion</a></td>       <td>Array of question data</td>     </tr>   </tbody> </table>  <b>Response Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Response</td>       <td>string</td>       <td>Survey ID if successful else error</td>     </tr>   </tbody> </table>
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
 * <h4>Add Question to Survey</h4> <b>Query string Parameters : </b> None <br> <b>Request Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Survey ID</td>     </tr>     <tr>       <td>QuestionData</td>       <td>Required</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyQuestion\" >SurveyQuestion </a></td>       <td>Array of question data</td>     </tr>   </tbody> </table>  <b>Response Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>int</td>       <td>Total number</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>     <tr>       <td>Data</td>       <td>SurveyQuestion</td>       <td>Array of survey question list returned.</td>     </tr>     <tr>       <td>Errors</td>       <td>ErrorData</td>       <td>Return error message</td>     </tr>   </tbody> </table>
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
 * <h4>Sort Question of a survey</h4> <b>Query string parameters : </b> None <br> <b>Request Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Survey ID</td>     </tr>     <tr>       <td>SortOrder</td>       <td>Required</td>       <td>string</td>       <td>Comma seperated question ids</td>     </tr>   </tbody> </table>  <b>Response Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Response</td>       <td>string</td>       <td>Survey ID if successful else error</td>     </tr>   </tbody> </table>
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
 * <h4>Get template list of survey</h4> <b>Query string Parameters : </b> None <br> <b>Request Body Parameters : </b> None <br> <b>Response Body Parameters : </b> <table>   <thead>     <th>Parameter</th>     <th>Type</th>     <th>Description</th>   </thead>   <tbody>     <tr>       <td>Count</td>       <td>int</td>       <td>Total number</td>     </tr>     <tr>       <td>Status</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>     <tr>       <td>Data</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyData\" >SurveyData</a></td>       <td>Array of survey list returned.</td>     </tr>   </tbody> </table>
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

