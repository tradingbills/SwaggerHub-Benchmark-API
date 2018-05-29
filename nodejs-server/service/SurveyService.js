'use strict';


/**
 * Use template for Survey
 * <h4>Copy template in Survey</h4> <b>Query string parameters : </b> None <br> <b>Request Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>ID</td>       <td>Required</td>       <td>string</td>       <td>Survey ID</td>     </tr>     <tr>       <td>Name</td>       <td>Required</td>       <td>string</td>       <td>Survey name</td>     </tr>   </tbody> </table>  <b>Response Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Response</td>       <td>string</td>       <td>New Survey ID if successful else error</td>     </tr>   </tbody> </table>
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
 * <h4>Create a Survey</h4> <b>Query String Parameters : </b> None <br> <b>Request Body Parameters : </b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Required</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Data</td>       <td>Required</td>       <td><a href=\"http://www.benchmarkemail.com/models.htm#SurveyData\" >SurveyData</a></td>       <td>Array of survey data post.</td>     </tr>   </tbody> </table> <b>Response Body Parameters:</b> <table>   <thead>     <tr>       <th>Parameter</th>       <th>Type</th>       <th>Description</th>     </tr>   </thead>   <tbody>     <tr>       <td>Response</td>       <td>string</td>       <td>1 if successful, -1 if error</td>     </tr>   </tbody> </table>
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

