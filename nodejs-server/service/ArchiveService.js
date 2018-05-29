'use strict';


/**
 * Update the Archive Home Page
 * Update the Archive Home Page  <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>SelArchiveIDs</td>  <td>Required</td>  <td>ID of the Email which want to add as archive</td>  </tr>  <tr>  <td>Vieworders</td>  <td>Required</td>  <td>view order for email</td>  </tr>  <tr>  <td>chkHide</td>  <td>Required</td>  <td>include thumbnail or not either true or false</td>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ArchiveHomePageData\">ArchiveHomePageData</a></td><td>Array</td></tr>  </tbody>  </table>
 *
 * body UpdateTheArchiveHomePagerequest 
 * authToken String 
 * contentType String 
 * returns UpdateTheArchiveHomePage
 **/
exports.archiveAddArchiveHomePost = function(body,authToken,contentType) {
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
 * Adding or Updating  archive domain
 * Add / Update archive domain  <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>Domain</td>  <td>Required</td>  <td>Name of the Archive Domain</td>  </tr>  </tbody>  </table>
 *
 * body AddingOrUpdatingArchiveDomainrequest 
 * authToken String 
 * contentType String 
 * returns AddingOrUpdatingArchiveDomain
 **/
exports.archiveAddDomainPost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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
 * Get HTML for Archive Newsletter
 * <h4>Get HTML for Archive Newsletter</h4>    <h4>URL Parameters</h4>  <table>  <thead>  <tr><th>Key</th><th>Required</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Domain</td><td>Required</td><td>Archive Domain</td></tr>  </tbody>  </table>    <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr><th>Key</th><th>Required</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>ArchiveURL</td><td>Required</td><td>Archive URL</td></tr>  <tr><td>Archive ID</td><td>Required</td><td>ID of the archive</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>CompanyName</td><td>string</td><td>Company Name</td></tr>  <tr><td>Content</td><td>string</td><td>Content in HTML format</td></tr>  <tr><td>ShowBody</td><td>bool</td><td>Show Body</td></tr>  <tr><td>Status</td><td>string</td><td>1 if success, -1 if error</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * domain String 
 * returns GetHtmlForArchiveNewsletter
 **/
exports.archiveArchiveEmailByDomainPost = function(authToken,contentType,domain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "CompanyName" : "Cybermax",
    "Content" : "<!DOCTYPE html>    \r\n<html>    \r\n<head>    \r\n<meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\">    \r\n<style type=\"text/css\">    \r\n<!-- BMEMBF Start -->    \r\n[name=bmeMainBody]{min-height:1000px;}    \r\n@media only screen and (max-width: 480px){table.blk, table[name=tblText], .bmeHolder, .bmeHolder1, table[name=bmeMainColumn]{width:100% !important;} }    \r\n@media only screen and (max-width: 480px){.bmeImageCard table.bmeImageTable{height: auto !important; width:100% !important; padding:20px !important;clear:both; float:left !important; border-collapse: separate;} }    \r\n@media only screen and (max-width: 480px){.bmeImageCard table.bmeCaptionTable td[name=tblCell]{padding:0px 20px 20px 20px !important;} }    \r\n@media only screen and (max-width: 480px){.bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td[name=tblCell]{padding:20px 20px 0 20px !important;} }    \r\n@media only screen and (max-width: 480px){.bmeMblInline table.bmeImageTable{height: auto !important; width:100% !important; padding:10px !important;clear:both;} }    \r\n@media only screen and (max-width: 480px){.bmeMblInline table.bmeCaptionTable{width:100% !important; clear:both;} }    \r\n@media only screen and (max-width: 480px){table.bmeImageTable{height: auto !important; width:100% !important; padding:10px !important;clear:both; } }    \r\n@media only screen and (max-width: 480px){table.bmeCaptionTable{width:100% !important;  clear:both;} }    \r\n@media only screen and (max-width: 480px){table.bmeImageContainer{width:100% !important; clear:both; float:left !important;} }    \r\n@media only screen and (max-width: 480px){table.bmeCaptionTable td[name=tblCell]{padding:10px !important;} }    \r\n@media only screen and (max-width: 480px){table.bmeImageTable td{padding:0px !important; height: auto; } }    \r\n@media only screen and (max-width: 480px){td.bmeImageContainerRow{padding:0px !important;}}    \r\n@media only screen and (max-width: 480px){table[name=tblGtr]{ padding-bottom:20px !important;} }    \r\n@media only screen and (max-width: 480px){td.blk_container, .blk_parent, [name=bmeLeftColumn], [name=bmeRightColumn], [name=bmeColumn1], [name=bmeColumn2], [name=bmeColumn3], [name=bmeBody]{display:table !important;max-width:600px !important;width:100% !important;} }    \r\n@media only screen and (max-width: 480px){img.mobile-img-large{width:100% !important; height:auto !important;} }    \r\n@media only screen and (max-width: 480px){img.bmeRSSImage{max-width:320px; height:auto !important;}}    \r\n@media only screen and (min-width: 640px){img.bmeRSSImage{max-width:600px !important; height:auto !important;} }    \r\n@media only screen and (max-width: 480px){.trMargin img{height:10px;} }    \r\n@media only screen and (max-width: 480px){table[class=container-table], .bmeheadertext, .container-table { width: 95% !important; } }    \r\n@media only screen and (max-width: 480px){.mobile-footer, .mobile-footer a{ font-size: 13px !important; line-height: 18px !important; } .mobile-footer{ text-align: center !important; } table[class=\"share-tbl\"] { padding-bottom: 15px; width: 100% !important; } table[class=\"share-tbl\"] td { display: block !important; text- align: center !important; width: 100% !important; } }    \r\n@media only screen and (max-width: 480px){div.bmefooter, div.bmeheader{ display:block !important;} }    \r\n@media only screen and (max-width: 480px){.tdPart{ width:100% !important; clear:both; float:left !important; } }    \r\n@media only screen and (max-width: 480px){table.blk_parent1, table.tblPart {width: 100% !important; } }    \r\n@media only screen and (max-width: 480px){td[name=bmeShareTD], td[name=bmeSocialTD]{width: 100% !important; } }    \r\n@media only screen and (max-width: 480px){.tblLine{min-width: 100% !important;}}     \r\n@media only screen and (max-width: 480px){.bmeMblCenter img { margin: 0 auto; } }       \r\n@media only screen and (max-width: 480px){.bmeMblCenter, .bmeMblCenter div, .bmeMblCenter span  { text-align: center !important; text-align: -webkit-center !important; } }    \r\n@media only screen and (max-width: 480px){.bmeNoBr br, .bmeImageGutterRow, .bmeMblStackCenter .bmeShareItem .tdMblHide { display: none !important; } }    \r\n@media only screen and (max-width: 480px){.bmeMblInline table.bmeImageTable, .bmeMblInline table.bmeCaptionTable, td.bmeMblInline { clear: none !important; width:50% !important; } }    \r\n@media only screen and (max-width: 480px){.bmeMblInlineHide, .bmeShareItem .trMargin { display: none !important; } }    \r\n@media only screen and (max-width: 480px){.bmeMblInline table.bmeImageTable img, .bmeMblShareCenter.tblContainer.mblSocialContain, .bmeMblFollowCenter.tblContainer.mblSocialContain{width: 100% !important; } }    \r\n@media only screen and (max-width: 480px){.bmeMblStack> .bmeShareItem{width: 100% !important; clear: both !important;} }    \r\n@media only screen and (max-width: 480px){.bmeShareItem{padding-top: 10px !important;} }    \r\n@media only screen and (max-width: 480px){.tdPart.bmeMblStackCenter, .bmeMblStackCenter .bmeFollowItemIcon {padding:0px !important; text-align: center !important;} }    \r\n@media only screen and (max-width: 480px){.bmeMblStackCenter> .bmeShareItem{width: 100% !important;} }    \r\n@media only screen and (max-width: 480px){ td.bmeMblCenter {border: 0 none transparent !important;padding: 0 !important;}}    \r\n@media only screen and (max-width: 480px){.bmeLinkTable.tdPart td{padding-left:0px !important; padding-right:0px !important; border:0px none transparent !important;padding-bottom:15px !important;height: auto !important;}}    \r\n@media only screen and (max-width: 480px){.tdMblHide{width:10px !important;} }    \r\n@media only screen and (max-width: 480px){.bmeShareItemBtn{display:table !important;}}    \r\n@media only screen and (max-width: 480px){.bmeMblStack td {text-align: left !important;}}    \r\n@media only screen and (max-width: 480px){.bmeMblStack .bmeFollowItem{clear:both !important; padding-top: 10px !important;}}    \r\n@media only screen and (max-width: 480px){.bmeMblStackCenter .bmeFollowItemText{padding-left: 5px !important;}}    \r\n@media only screen and (max-width: 480px){.bmeMblStackCenter .bmeFollowItem{clear:both !important;align-self:center; float:none !important; padding-top:10px;margin: 0 auto;}}    \r\n@media only screen and (max-width: 480px){td[name=tdBoxedTextBorder]{width: auto !important;}}    \r\n@media only screen and (max-width: 480px){    \r\n.tdPart> table{width:100% !important;}    \r\n}    \r\n@media only screen and (max-width: 480px){.tdPart>table.bmeLinkContainer{ width:auto !important; }}    \r\n@media only screen and (max-width: 480px){.tdPart.mblStackCenter>table.bmeLinkContainer{ width:100% !important;}}     \r\n.blk_parent:first-child, .blk_parent{float:left;}    \r\n.blk_parent:last-child{float:right;}    \r\n<!-- BMEMBF End -->    \r\n    \r\n/* Background color settings=====================================*/\ttable[name=\"bmeMainBody\"], body{   \t\tbackground-color: #e6e6e8;   \t}                /* Preheader settings=====================================*/\t/* Preheader background color */     \ttd[name=\"bmePreHeader\"]{         \t\tbackground-color:#e6e6e8; \t}            /* Header settings=====================================*/\t/* Header background color */     \ttd[name=\"bmeHeader\"]{   \t\tbackground: #ffffff;  \t}  /* Content/Body settings=====================================*/\t/* Content background color */      \ttd[name=\"bmeBody\"], table[name=\"bmeBody\"]{      \t\tbackground-color:#ffffff;  \t}                  /* Body 2 settings - COPY SETTINGS FROM CONTENT/BODY=====================================*/\t/* Body 2 background color */\ttd[name=\"bmePreFooter\"]{      \t\tbackground-color:#ffffff;  \t}            /* Footer settings=====================================*/\t/* Footer background color */     \ttd[name=\"bmeFooter\"]{      \t\tbackground-color:#e6e6e8;  \t}          /* Default Settings for fonts for blocks=====================================*/\ttd[name=\"tblCell\"], .blk{      \t\tfont-family: initial;       \t\tfont-weight: normal;       \t\tfont-size: initial;  \t} table[name=\"blk_blank\"] td[name=\"tblCell\"]{font-family: Arial, Helvetica, sans-serif;font-size: 14px;}    \r\n</style>    \r\n</head>    \r\n<body marginheight=0 marginwidth=0 topmargin=0 leftmargin=0 style=\"height: 100% !important; margin: 0; padding: 0; width: 100% !important;min-width: 100%;\"><style type=\"text/css\">\r\ntable[name=\"blk_permission\"], table[name=\"blk_footer\"] {display:none;} \r\n</style>\r\n    \r\n    \r\n<table name=\"bmeMainBody\" style=\"background-color: rgb(230, 230, 232);\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" bgcolor=\"#e6e6e8\"><tbody><tr><td width=\"100%\" valign=\"top\" align=\"center\">    \r\n<table name=\"bmeMainColumnParentTable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td name=\"bmeMainColumnParent\">     \r\n<table name=\"bmeMainColumn\" class=\"bmeHolder\" style=\"max-width: 600px; overflow: visible;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\">    <tbody><tr><td class=\"blk_container bmeHolder\" name=\"bmePreHeader\" style=\"background-color: rgb(230, 230, 232); color: rgb(102, 102, 102);   \" width=\"100%\" valign=\"top\" bgcolor=\"#e6e6e8\" align=\"center\"></td></tr> <tr><td class=\"bmeHolder\" name=\"bmeMainContentParent\" style=\"border-color: rgb(102, 102, 102); border-radius: 5px; border-collapse: separate; border-spacing: 0px;\" width=\"100%\" valign=\"top\" align=\"center\">     \r\n<table name=\"bmeMainContent\" style=\"border-radius: 5px; border-collapse: separate;border-spacing: 0px; overflow: hidden;\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\"> <tbody><tr><td class=\"blk_container bmeHolder\" name=\"bmeHeader\" style=\"background-color: rgb(255, 255, 255);   \" width=\"100%\" valign=\"top\" bgcolor=\"#ffffff\" align=\"center\"><div id=\"dv_2\" class=\"blk_wrapper\" style=\"\">    \r\n<table class=\"blk\" name=\"blk_image\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td>    \r\n<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"bmeImage\" style=\"padding: 20px; border-collapse: collapse;\" align=\"center\"><img    \r\n src=\"https://images.benchmarkemail.com/client{{client-id}}/image2288342.jpg\" class=\"mobile-img-large\" style=\"display: block; width: 560px; max-width: 800px;\" alt=\"\" width=\"560\" border=\"0\"></td></tr></tbody>    \r\n</table></td></tr></tbody>    \r\n</table></div>\n</td></tr> <tr><td class=\"blk_container bmeHolder\" name=\"bmeBody\" style=\"background-color: rgb(255, 255, 255); color: rgb(56, 56, 56);   \" width=\"100%\" valign=\"top\" bgcolor=\"#ffffff\" align=\"center\"><div id=\"dv_3\" class=\"blk_wrapper\" style=\"\">    \r\n<table class=\"blk\" name=\"blk_text\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td>    \r\n<table class=\"bmeContainerRow\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"tdPart\" valign=\"top\" align=\"center\">    \r\n<table name=\"tblText\" style=\"float:left;\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><tbody><tr><td name=\"tblCell\" style=\"padding: 20px; font-size: 30px; font-weight: 400; font-family: Arial,Helvetica,sans-serif; color: rgb(56, 56, 56); text-align: left;\" valign=\"top\" align=\"left\"><div style=\"line-height: 150%;\"><strong>Heading 1</strong></div></td></tr></tbody>    \r\n</table></td></tr></tbody>    \r\n</table></td></tr></tbody>    \r\n</table></div>\n<div id=\"dv_4\" class=\"blk_wrapper\" style=\"\">    \r\n<table class=\"blk\" name=\"blk_text\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td>    \r\n<table class=\"bmeContainerRow\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"tdPart\" valign=\"top\" align=\"center\">    \r\n<table name=\"tblText\" style=\"float:left;\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><tbody><tr><td name=\"tblCell\" style=\"padding: 10px 20px; font-size: 14px; font-weight: 400; font-family: Arial,Helvetica,sans-serif; color: rgb(56, 56, 56); text-align: left;\" valign=\"top\" align=\"left\"><div style=\"line-height: 150%;\">This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.</div></td></tr></tbody>    \r\n</table></td></tr></tbody>    \r\n</table></td></tr></tbody>    \r\n</table></div>\n<div id=\"dv_5\" class=\"blk_wrapper\" style=\"\">    \r\n<table class=\"blk\" name=\"blk_button\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td width=\"20\"></td><td align=\"center\">    \r\n<table class=\"tblContainer\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td height=\"10\"></td></tr><tr><td align=\"left\">    \r\n<table class=\"bmeButton\" style=\"border-collapse: separate;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><tbody><tr><td class=\"bmeButtonText\" style=\"border-collapse:seperate;border-radius:5px; border-width:0; border-style:none; border-color:transparent;background-color:#72C2A1; text-align: center;padding-top:20px;padding-bottom:20px; padding-left:40px; padding-right:40px;font-weight:bold;\"><span style=\"font-family:Arial, Verdana; font-size:14px;color:#FFFFFF;\">    \r\n<a target=\"_blank\" style=\"color:#FFFFFF;text-decoration:none;\">Button</a></span></td></tr></tbody>    \r\n</table></td></tr><tr><td height=\"10\"></td></tr></tbody>    \r\n</table></td><td width=\"20\"></td></tr></tbody>    \r\n</table></div>\n</td></tr> <tr><td class=\"blk_container bmeHolder\" name=\"bmePreFooter\" style=\"background-color: rgb(255, 255, 255);   \" width=\"100%\" valign=\"top\" bgcolor=\"#ffffff\" align=\"center\"><div id=\"dv_6\" class=\"blk_wrapper\" style=\"\">    \r\n<table name=\"blk_divider\" class=\"blk\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td style=\"padding-top:10px; padding-bottom:10px;padding-left:20px;padding-right:20px;\" class=\"tblCellMain\">    \r\n<table style=\"border-top: 1px solid rgb(225, 225, 225); min-width: 1px;\" class=\"tblLine\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td><span></span></td></tr></tbody>    \r\n</table></td></tr></tbody>    \r\n</table></div>\n<div id=\"dv_7\" class=\"blk_wrapper\" style=\"\">    \r\n<table style=\"\" name=\"blk_social_follow\" class=\"blk\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td style=\"padding:0px 0px 10px 0px;\" class=\"tblCellMain\">    \r\n<table style=\"float:left;\" class=\"tblContainer\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><tbody><tr><td class=\"tdItemContainer\" style=\"padding: 0px 20px;\">    \r\n<table style=\"table-layout: auto;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td valign=\"top\"><!--[if gte mso 6]></td><td align=\"left\" valign=\"top\"><![endif]-->    \r\n<table style=\"float: left; display: block;\" type=\"facebook\" class=\"bmeFollowItem\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><tbody><tr><td style=\"padding-right:5px;padding-top:5px;height:30px;\" class=\"bmeFollowItemIcon\" width=\"24\" align=\"left\">    \r\n<a target=\"_blank\" style=\"display: inline-block;background-color: rgb(53, 91, 161);border-radius: 0px;border-style: none; border-width: 0px; border-color: transparent;\" href=\"http://bmetrack.bmetrack.com/c/l?u=67F1AC3&e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&seq=1\" target=_blank><img alt=\"Facebook\"    \r\n src=\"https://ui.benchmarkemail.com/images/editor/socialicons/fb_btn.png\" style=\"max-width: 57px; display:block;\" width=\"24\" border=\"0\" height=\"24\"></a></td></tr></tbody>    \r\n</table><!--[if gte mso 6]></td><td align=\"left\" valign=\"top\"><![endif]-->    \r\n<table style=\"float: left; display: block;\" type=\"googleplus\" class=\"bmeFollowItem\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><tbody><tr><td style=\"padding-right:5px;padding-top:5px;height:30px;\" class=\"bmeFollowItemIcon\" width=\"24\" align=\"left\">    \r\n<a target=\"_blank\" style=\"display: inline-block;background-color: rgb(214, 73, 46);border-radius: 0px;border-style: none; border-width: 0px; border-color: transparent;\" href=\"http://bmetrack.bmetrack.com/c/l?u=67F1AC4&e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&seq=1\" target=_blank><img alt=\"Google Plus\"    \r\n src=\"https://ui.benchmarkemail.com/images/editor/socialicons/gp_btn.png\" style=\"max-width: 57px; display:block;\" width=\"24\" border=\"0\" height=\"24\"></a></td></tr></tbody>    \r\n</table><!--[if gte mso 6]></td><td align=\"left\" valign=\"top\"><![endif]-->    \r\n<table style=\"float: left; display: block;\" type=\"twitter\" class=\"bmeFollowItem\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><tbody><tr><td style=\"padding-right:5px;padding-top:5px;height:30px;\" class=\"bmeFollowItemIcon\" width=\"24\" align=\"left\">    \r\n<a target=\"_blank\" style=\"display: inline-block;background-color: rgb(50, 203, 255);border-radius: 0px;border-style: none; border-width: 0px; border-color: transparent;\" href=\"http://bmetrack.bmetrack.com/c/l?u=67F1AC5&e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&seq=1\" target=_blank><img alt=\"Twitter\"    \r\n src=\"https://ui.benchmarkemail.com/images/editor/socialicons/tw_btn.png\" style=\"max-width: 57px; display:block;\" width=\"24\" border=\"0\" height=\"24\"></a></td></tr></tbody>    \r\n</table></td></tr></tbody>    \r\n</table></td></tr></tbody>    \r\n</table></td></tr></tbody>    \r\n</table></div>\n</td></tr> </tbody>    \r\n</table> </td></tr>  <tr><td class=\"blk_container bmeHolder\" name=\"bmeFooter\" style=\"background-color: rgb(230, 230, 232); color: rgb(102, 102, 102);   \" width=\"100%\" valign=\"top\" bgcolor=\"#e6e6e8\" align=\"center\"><div id=\"dv_9\" class=\"blk_wrapper\" style=\"\">    \r\n<table class=\"blk\" name=\"blk_permission\" style=\"\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td name=\"tblCell\" style=\"padding:20px;\" valign=\"top\" align=\"left\">    \r\n<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td name=\"bmePermissionText\" style=\"text-align:left;\" align=\"left\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px;line-height: 140%;\">    \r\n<a style=\"color: #16a7e0;\" target=\"_new\" href=\"http://bmetrack.bmetrack.com/c/v?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D\">View this email in your browser</a>    \r\n<br>You are receiving this email because of your relationship with Cybermax Solutions. Please     \r\n<a style=\"color: #16a7e0;\" target=\"_new\" href=\"http://bmetrack.bmetrack.com/c/opt?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D\">reconfirm</a> your interest in receiving emails from us.  If you do not wish to receive any more emails, you can     \r\n<a style=\"color: #16a7e0;\" target=\"_new\" href=\"http://bmetrack.bmetrack.com/c/u?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D\">unsubscribe here</a>.</span></td></tr></tbody>    \r\n</table></td></tr></tbody>    \r\n</table></div><div id=\"dv_10\" class=\"blk_wrapper\" style=\"\">    \r\n<table class=\"blk\" name=\"blk_footer\" style=\"\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td name=\"tblCell\" style=\"padding:20px;\" valign=\"top\" align=\"left\">    \r\n<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td name=\"bmeBadgeText\" style=\"text-align:left; word-break: break-all;\" align=\"left\"><span id=\"spnFooterText\" style=\"font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px; line-height: 140%;\">This message was sent to mohit@cybermaxsolutions.com by mohit@cybermaxsolutions.com    \r\n<br>Kailash Cmplx, Mumbai, Maharashtra  400079, India</span>    \r\n<br>    \r\n<br><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px; line-height: 140%;\">    \r\n<a href=http://bmetrack.bmetrack.com/c/su?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=><img    \r\n src=\"https://www.benchmarkemail.com/images/verified.png\" alt=\"Unsubscribe from all mailings\" title=\"Unsubscribe from all mailings\" border=0 /></a>     \r\n<a class=bmefootertext  target=_new  href=\"http://bmetrack.bmetrack.com/c/su?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=\"  style=\"color:inherit;\">Unsubscribe</a>   |     \r\n<a class=bmefootertext  target=_new  href=\"http://bmetrack.bmetrack.com/c/s?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=\"  style=\"color:inherit;\">Manage Subscription</a>   |      \r\n<a class=bmefootertext  target=_new  href=\"http://bmetrack.bmetrack.com/c/f?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=\"  style=\"color:inherit;\">Forward Email</a>  |      \r\n<a class=bmefootertext  target=_new  href=\"http://bmetrack.bmetrack.com/Abuse?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=\"  style=\"color:inherit;\">Report Abuse</a>    \r\n<br></span></td></tr><tr><td name=\"bmeBadgeImage\" style=\"text-align: left; padding-top: 20px; word-break: break-all;\" align=\"left\">    \r\n<a href=\"http://www.benchmarkplug.com/es/?p=500289\" target=\"_new\"><img    \r\n src=\"https://www.benchmarkemail.com/images/web4/misc/emailfooter/opt1.png\"  style=\"max-width:116px;\" border=0 /></a></td></tr></tbody>    \r\n</table></td></tr></tbody>    \r\n</table></div></td></tr> </tbody>    \r\n</table></td></tr></tbody>    \r\n</table></td></tr></tbody>    \r\n</table>    \r\n<!-- /Test Path -->    \r\n</body>    \r\n</html><img    \r\n src='http://bmetrack.bmetrack.com/c/o?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=' alt='' border=0 style=\"display:none;\" height=1 width=1><br /><center><a href='http://www.benchmarkemail.com/Signup' target=_new><img border=0 src=\"https://www.benchmarkemail.com/mail_logo.gif\"/></a></center>",
    "ShowBody" : false,
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
 * Get Archive Home Data
 * <h4>Get the details of archive email which id is pass</h4>    <h4>URL Parameters</h4>  <table>  <thead>  <tr><th>Key</th><th>Required</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Domain</td><td>Required</td><td>Archive Domain</td></tr>  <tr><td>Type</td><td>Required</td><td>Type  <code>Home</code> - Home  <code>Image</code> - Image</td></tr>  </tbody>  </table>    <h4>Response body parameters</h4>  <table>  <thead>  <tr><th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>CompanyName</td><td>String</td><td>Company Name</td></tr>  <tr><td>Content</td><td>String</td><td>Data in HTML Format</td></tr>  <tr><td>ShowBody</td><td>String</td><td>Show Body</td></tr>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if failure</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * domain String 
 * type String 
 * returns GetArchiveHomeData
 **/
exports.archiveArchiveHomeByDomainAndTypeGet = function(authToken,contentType,domain,type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "CompanyName" : "Cybermax",
    "Content" : "<html>\r\n<head>\r\n<title><table cellspacing=0 cellpadding=0 border=0 width=\"100%\" style='font-size:inherit;'><tr><td style='font-size:inherit;'><b>Cybermax Solutions</b><br/><br />Kailash Cmplx <br />Mumbai 400079 <br />Maharashtra India </td></tr></table></title>\r\n</head>\r\n<body topmargin=0 leftmargin=0 paddingleft=0 paddingtop=0>\r\n<style type='text/css'> .archivelink{align:;color:#333333;font-family:Arial;font-size:12px;} </style>\r\n<div align=center>\r\n<div style=\"border: 1px solid #333333; width: 601px;\"><table cellspacing=0 cellpadding=0 border=0 width='600px'>\r\n<tr><td id='headerarea' valign=top align='left' style='align:left;background-color:#1b5680;color:#ffffff;font-family:Arial;font-size:32px;padding:10px;letter-spacing:-2px;'>\r\nCybermax Solutions Archive Home\r\n</td></tr>\r\n<tr><td valign=top bgcolor=#ffffff><img width=6 height=6 src=https://www.benchmarkemail.com/images/blank.gif /></td></tr><tr><td id='container' style='background-color:#ededed;padding:15px;'>\r\n<table cellspacing=0 cellpadding=5 border=0 width='100%'>\r\n<tr><td id='introarea' align='left' style='align:left;color:#333333;font-family:Arial;font-size:12px;'>\r\nBelow you will find an archive of Cybermax Solutions monthly Newsletter(s) and the Cybermax Solutions weekly update(s). Browse through the issues below, or follow the link located at the bottom of this page to subscribe.\r\n</td></tr>\r\n<tr><td id='archivearea' align=''>\r\n<hr /><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'><tr> <!--10600469 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client{{client-id}}/sst_10600469.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Sep-30-2016-Email-1\">Sep 30 2016 Email 1 (Sep 2016) </a> <br />\r\nHeading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax Solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to</div></td></tr></table><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'><tr> <!--10600449 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client{{client-id}}/sst_10600449.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Sep-30-2016-Email\">Sep 30 2016 Email (Sep 2016) </a> <br />\r\nHeading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax Solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to</div></td></tr></table><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'><tr> <!--10476168 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client{{client-id}}/sst_10476168.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Sep-10-2016-Email\">Sep 10 2016 Email (Sep 2016) </a> <br />\r\nHeading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax Solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to</div></td></tr></table><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'><tr> <!--10207348 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/clien{{client-id}}/sst_10207348.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Magical-Clicks\">Magical Clicks (Jul 2016) </a> <br />\r\nHeading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Google   \n     \n               \n     View this email in your browser  Cybermax Solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to</div></td></tr></table><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'><tr> <!--10207249 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client{{client-id}}/sst_10207249.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Hey-open-this-Mail\">Hey! open this Mail!! (Jul 2016) </a> <br />\r\nHeading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n      \n   Heading 2   \n   This is also exciting enough news to put in your newsletter, just not as exciting as what your subscribers read above. It's like silver medal to the a</div></td></tr></table><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'><tr> <!--11057656 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client{{client-id}}/sst_11057656.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Classic-Editor-Email\">Classic Editor Email (Jan 2017) </a> <br />\r\n10 days left for discount offer Visit our Trips Page to see our latest Trips and Deals!  Call us at: (000) 123 4567  Travel NewsletterNewsletter Subtitle     Lorem ipsum dolor sit amet consectetuer adipiscing elit. Etiam ut elit ac metus facilisis fermentum. Curabitur magna magna elementum.  Phasellus tellus pede pulvinar et scelerisque a tempor a velit. Morbi feugiat. Etiam ut elit ac metus facilisis fermentum. Curabitur magna magna elementum fermentum placerat vel commodo vel tortor. Sed justo</div></td></tr></table><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'><tr> <!--11614304 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client{{client-id}}/sst_11614304.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Jan-27-2017-Email-May--3-2017\">Jan 27 2017 Email May  3 2017 (May 2017) </a> <br />\r\nSpecial Olympics Stories NewsletterAn ongoing stream of headlines and stories from and about Special Olympics worldwide.        Rebekah Tucker: April Athlete of the Month for North Carolina 02 May 2017 02:14 AM  Anonymous     Read More     Special Olympics South Africa helped him realize his dream 02 May 2017 01:43 AM  Anonymous     Read More     Special Olympics Bahamas, Engaging The Youth 02 May 2017 01:32 AM  Anonymous     Read More     My Paddle Board Story 02 May 2017 01:27 AM  Anonymous   </div></td></tr></table><br /><br /><hr /><br /></td></tr>\r\n<tr><td id='footerarea' align='left' style='align:left;color:#333333;font-family:Arial;font-size:12px;'>\r\n<table cellspacing=0 cellpadding=0 border=0 width=\"100%\" style='font-size:inherit;'><tr><td style='font-size:inherit;'><b>Cybermax Solutions</b><br/><br />Kailash Cmplx <br />Mumbai 400079 <br />Maharashtra India </td></tr></table><table cellspacing=0 cellpadding=0 border=0 width=\"100%\" style='font-size:inherit;'><tr><td align=right valign=top><a style=\"font-size: 12px; color: #333333;\" href=\"http://lb.benchmarkemail.com//listbuilder/signup?I496BbPDMZuPLZ%2BLyle8d%2FG6VTMKFmIozGXnzIpVAlU%3D\" target=_blank><b>Join our Mailing List!</b></a></td></tr></table>\r\n</td></tr>\r\n</table>\r\n</td></tr>\r\n</table>\r\n</div></div>\r\n</body>\r\n</html>\r\n",
    "ShowBody" : true,
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
 * Getting the archive home page
 * Get the archive home page  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ArchiveHomePageData\">ArchiveHomePageData</a></td><td>Array</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * returns GettingTheArchiveHomePage
 **/
exports.archiveArchiveHomePageGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Data" : {
      "CSS" : {
        "Archive" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "#333333",
          "Font" : "Arial",
          "Size" : "12px"
        },
        "Body" : {
          "Align" : "",
          "Bgcolor" : "#ffefe9",
          "Color" : "",
          "Font" : "",
          "Size" : ""
        },
        "Footer" : {
          "Align" : "left",
          "Bgcolor" : "",
          "Color" : "#333333",
          "Font" : "Arial",
          "Size" : "12px"
        },
        "Header" : {
          "Align" : "center",
          "Bgcolor" : "#fd2e17",
          "Color" : "#fdf117",
          "Font" : "Arial black",
          "Size" : "30px"
        },
        "Intro" : {
          "Align" : "left",
          "Bgcolor" : "",
          "Color" : "#352c2c",
          "Font" : "Arial black",
          "Size" : "12px"
        },
        "Logo" : {
          "Align" : "",
          "Bgcolor" : "",
          "Color" : "",
          "Font" : "",
          "Size" : ""
        }
      },
      "Errors" : [ ],
      "Footer" : "<table cellspacing=0 cellpadding=0 border=0 width=\"100%\" style='font-size:inherit;'><tr><td style='font-size:inherit;'><b>Cybermax solutions</b><br/><br />Mumbai <br />Mumbai 400085 <br />MH India </td></tr></table>",
      "Form" : "<style type='text/css'> .archivelink{align:;color:#333333;font-family:Arial;font-size:12px;} </style><div style=\"border: 1px solid #333333; width: 601px;\"><table cellspacing=0 cellpadding=0 border=0 width='600px'><tr><td id='headerarea' valign=top style='align:center;background-color:#fd2e17;color:#fdf117;font-family:Arial black;font-size:30px;padding:10px;letter-spacing:-2px;'>Cybermax Solutions Archive Home8</td></tr><tr><td id='container' style='background-color:#ffefe9;padding:15px;'><table cellspacing=0 cellpadding=5 border=0 width='100%'><tr><td id='introarea' style='align:left;color:#352c2c;font-family:Arial black;font-size:12px;'>Below you will find an archive of Cybermax solutions monthly Newsletter(s) and the Cybermax solutions weekly update(s). Browse through the issues below, or follow the link located at the bottom of this page to subscribe.</td></tr><tr><td id='archivearea' style='align:;color:#333333;font-family:Arial;font-size:12px;'><br /><br /><hr /><br /><table cellspacing=0 cellpaddding=5 border=0 width='100%'><tr><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10581806.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/PoojaGorde/newsletter/RSS-test-by-Pooja-Sep-28-2016\" style='font-size: 125%;'>RSS test by Pooja Sep 28 2016 (Sep 2016) </a> <br />\r\nRSS TITLE&#8629;         Shimon Peres, former Israeli president, dies aged 93 27 Sep 2016 06:43 PM  Former Israeli PM and President Shimon Peres has died aged 93 following a stroke two weeks ago.  Read More     MH17: Dutch-led team to pinpoint Buk missile launch site 27 Sep 2016 07:16 PM  An international investigation team looking into the downing of Malaysia Airlines flight MH17 is due to release its findings on Wednesday.  Read More     Stolen African penguin 'cannot survive in the wild' 27 Sep 201</td></tr></table><table cellspacing=0 cellpaddding=5 border=0 width='100%'><tr><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10511470.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/PoojaGorde/newsletter/list-plan-2k-test\" style='font-size: 125%;'>list plan 2k test (Sep 2016) </a> <br />\r\nHeading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to</td></tr></table><table cellspacing=0 cellpaddding=5 border=0 width='100%'><tr><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10511456.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/PoojaGorde/newsletter/test-free-plan-mail\" style='font-size: 125%;'>test free plan mail (Sep 2016) </a> <br />\r\nHeading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to</td></tr></table><table cellspacing=0 cellpaddding=5 border=0 width='100%'><tr><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10696924.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/PoojaGorde/newsletter/Oct-18-2016-Email\" style='font-size: 125%;'>Oct 18 2016 Email (Oct 2016) </a> <br />\r\nHeading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to</td></tr></table><table cellspacing=0 cellpaddding=5 border=0 width='100%'><tr><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10690912.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/PoojaGorde/newsletter/Oct-17-2016-Email-1\" style='font-size: 125%;'>Oct 17 2016 Email 1 (Oct 2016) </a> <br />\r\nHeading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to</td></tr></table><table cellspacing=0 cellpaddding=5 border=0 width='100%'><tr><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10689970.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/PoojaGorde/newsletter/Oct-17-2016-Email\" style='font-size: 125%;'>Oct 17 2016 Email (Oct 2016) </a> <br />\r\nHeading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to</td></tr></table><table cellspacing=0 cellpaddding=5 border=0 width='100%'><tr><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10863094.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/PoojaGorde/newsletter/Automation-Test\" style='font-size: 125%;'>Automation Test (Nov 2016) </a> <br />\r\nTHE WEATHER IN YOUR POCKET  You had to be excited enough about something to decide to send this email campaign. This is where that news goes. Think of it as your mountaintop to shout from.   AVAILABLE FOR IPHONE & ANDROID                     SUNNY _____  You are totally stoked about the piece of information that goes here and your subscribers will be too.         CLOUDY _____  You are totally stoked about the piece of information that goes here and your subscribers will be too.         STORMY __</td></tr></table><table cellspacing=0 cellpaddding=5 border=0 width='100%'><tr><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10685460.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/PoojaGorde/newsletter/Oct-13-2016-Email-Oct-15-2016\" style='font-size: 125%;'>Oct 13 2016 Email Oct 15 2016 (Oct 2016) </a> <br />\r\nmagazinespain.comNoticias de actualidad, famosos, tendencias, moda y belleza          \n Karlie Kloss o cómo llevar una gabardina \n14 Oct 2016 01:30 AM \n \nParecía que no iba a llegar, pero el otoño ya está aquí… La modelo Karlie Kloss nos da una lección de estilo para llevar unas de las prendas must de la temporada: la gabardina. Parecía que no llegaría nunca pero ya está aquí, el otoño ha comenzado meteorológicamente hablando… Ha empezado a llover y caen...  Read More \n Read More        \n Natali</td></tr></table><table cellspacing=0 cellpaddding=5 border=0 width='100%'><tr><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10681383.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/PoojaGorde/newsletter/sanket-test2\" style='font-size: 125%;'>sanket test2 (Oct 2016) </a> <br />\r\nHelp Fund the World's Best Exciting New Product!      By Billy Doe Johnson              440 backers  $31,806 pledged of $40,000 goal  28 days to go        Back This Project          About This Project      You had to be excited enough about something to decide to send this email campaign. This is where that news goes. Think of it as your mountaintop to shout from.  You know how when something totally awesome happens during your day and you cannot wait to share the story with a significant other,</td></tr></table><table cellspacing=0 cellpaddding=5 border=0 width='100%'><tr><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10681371.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/PoojaGorde/newsletter/sanket-test1\" style='font-size: 125%;'>sanket test1 (Oct 2016) </a> <br />\r\nTHE WEATHER IN YOUR POCKET  You had to be excited enough about something to decide to send this email campaign. This is where that news goes. Think of it as your mountaintop to shout from.   AVAILABLE FOR IPHONE & ANDROID                    SUNNY _____  You are totally stoked about the piece of information that goes here and your subscribers will be too.        CLOUDY _____  You are totally stoked about the piece of information that goes here and your subscribers will be too.        STORMY _____</td></tr></table><table cellspacing=0 cellpaddding=5 border=0 width='100%'><tr><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10352772.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /></td><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/PoojaGorde/newsletter/Aug-17-2016-Email\" style='font-size: 125%;'>Aug 17 2016 Email (Aug 2016) </a> <br />\r\nButton   \n     \n               \n     View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to receive any more emails, you can  unsubscribe here.    This message was sent to pooja.gorde.gmail.com@email.benchmarkapps.com by pooja.gorde.gmail.com@email.benchmarkapps.com Mumbai, Mumbai, MH 400085, India     Unsubscribe |  Manage Subscription |  Forward Email |  Report Abuse</td></tr></table><br /><hr /><br /></td></tr><tr><td id='footerarea' style='align:left;color:#333333;font-family:Arial;font-size:12px;'><table cellspacing=0 cellpadding=0 border=0 width=\"100%\" style='font-size:inherit;'><tr><td style='font-size:inherit;'><b>Cybermax solutions</b><br/><br />Mumbai <br />Mumbai 400085 <br />MH India </td></tr></table><table cellspacing=0 cellpadding=0 border=0 width=\"100%\" style='font-size:inherit;'><tr><td align=right valign=top><a style=\"font-size: 12px; color: #333333;\" href=\"http://lb.benchmarkemail.com//listbuilder/signup?lmjkuOxIEpaU1WCvTXj6qfG6VTMKFmIoS2YEIFvYW7w%3D\" target=_blank><b>Join our Mailing List!</b></a></td></tr></table></td></tr></table></td></tr></table></div>",
      "Header" : "Cybermax Solutions Archive Home8",
      "ImageLogo" : "",
      "Intro" : "Below you will find an archive of Cybermax solutions monthly Newsletter(s) and the Cybermax solutions weekly update(s). Browse through the issues below, or follow the link located at the bottom of this page to subscribe.",
      "ListBuilderID" : "683865",
      "PageTitle" : "Cybermax Solutions Archive Home7"
    },
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
 * Getting list of archive pages
 * <h4>Response body parameters</h4> <table> <thead> <tr> <th>Key</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>Count</td> <td>Int</td> <td>Count of the archive pages</td> </tr> <tr> <td>Status</td> <td>String</td> <td>1 if success, -1 if error</td> </tr> <tr> <td>HideThumbnail</td> <td>String</td> <td>Whether the thumbnail should be hidden or not</td> </tr> <tr> <td>ArchiveIDs</td> <td>String</td> <td>Comma separated list of archive IDs</td> </tr> <tr> <td>Data</td> <td><a href=\"http://www.benchmarkemail.com/models.htm#ArchivePageData\">ArchivePageData</a></td> <td>List of the archive Each element contains the Name, ImageURL, etc. For more details  </td> </tr> </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GettingListOfArchivePages
 **/
exports.archiveArchivePagesGet = function(authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ArchiveIDs" : ",393174,393176,393175,403183,403184,403185,403350,403325,403326,403360,403367,",
    "Count" : 15,
    "Data" : [ {
      "Date" : "Sep 28, 2016",
      "Errors" : [ ],
      "ID" : "393174",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10581806.jpg",
      "Name" : "RSS test by Pooja Sep 28 2016",
      "Order" : "1",
      "Summary" : "RSS TITLE&#8629;         Shimon Peres, former Israeli president, dies aged 93 27 Sep 2016 06:43 PM  Former Israeli PM and President Shimon Peres has died aged 93 following a stroke two weeks ago.  Read More     MH17: Dutch-led team to pinpoint Buk missile launch site 27 Sep 2016 07:16 PM  An international investigation team looking into the downing of Malaysia Airlines flight MH17 is due to release its findings on Wednesday.  Read More     Stolen African penguin 'cannot survive in the wild' 27 Sep 201"
    }, {
      "Date" : "Sep 16, 2016",
      "Errors" : [ ],
      "ID" : "393176",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10511470.jpg",
      "Name" : "list plan 2k test",
      "Order" : "2",
      "Summary" : "Heading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to"
    }, {
      "Date" : "Sep 16, 2016",
      "Errors" : [ ],
      "ID" : "393175",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10511456.jpg",
      "Name" : "test free plan mail",
      "Order" : "3",
      "Summary" : "Heading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to"
    }, {
      "Date" : "Oct 18, 2016",
      "Errors" : [ ],
      "ID" : "403183",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10696924.jpg",
      "Name" : "Oct 18 2016 Email",
      "Order" : "4",
      "Summary" : "Heading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to"
    }, {
      "Date" : "Oct 17, 2016",
      "Errors" : [ ],
      "ID" : "403184",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10690912.jpg",
      "Name" : "Oct 17 2016 Email 1",
      "Order" : "5",
      "Summary" : "Heading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to"
    }, {
      "Date" : "Oct 16, 2016",
      "Errors" : [ ],
      "ID" : "403185",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10689970.jpg",
      "Name" : "Oct 17 2016 Email",
      "Order" : "6",
      "Summary" : "Heading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to"
    }, {
      "Date" : "Nov 24, 2016",
      "Errors" : [ ],
      "ID" : "403350",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10863094.jpg",
      "Name" : "Automation Test",
      "Order" : "7",
      "Summary" : "THE WEATHER IN YOUR POCKET  You had to be excited enough about something to decide to send this email campaign. This is where that news goes. Think of it as your mountaintop to shout from.   AVAILABLE FOR IPHONE & ANDROID                     SUNNY _____  You are totally stoked about the piece of information that goes here and your subscribers will be too.         CLOUDY _____  You are totally stoked about the piece of information that goes here and your subscribers will be too.         STORMY __"
    }, {
      "Date" : "Oct 15, 2016",
      "Errors" : [ ],
      "ID" : "403325",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10685460.jpg",
      "Name" : "Oct 13 2016 Email Oct 15 2016",
      "Order" : "8",
      "Summary" : "magazinespain.comNoticias de actualidad, famosos, tendencias, moda y belleza          \n Karlie Kloss o cómo llevar una gabardina \n14 Oct 2016 01:30 AM \n \nParecía que no iba a llegar, pero el otoño ya está aquí… La modelo Karlie Kloss nos da una lección de estilo para llevar unas de las prendas must de la temporada: la gabardina. Parecía que no llegaría nunca pero ya está aquí, el otoño ha comenzado meteorológicamente hablando… Ha empezado a llover y caen...  Read More \n Read More        \n Natali"
    }, {
      "Date" : "Oct 14, 2016",
      "Errors" : [ ],
      "ID" : "403326",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10681383.jpg",
      "Name" : "sanket test2",
      "Order" : "9",
      "Summary" : "Help Fund the World's Best Exciting New Product!      By Billy Doe Johnson              440 backers  $31,806 pledged of $40,000 goal  28 days to go        Back This Project          About This Project      You had to be excited enough about something to decide to send this email campaign. This is where that news goes. Think of it as your mountaintop to shout from.  You know how when something totally awesome happens during your day and you cannot wait to share the story with a significant other,"
    }, {
      "Date" : "Oct 14, 2016",
      "Errors" : [ ],
      "ID" : "403360",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10681371.jpg",
      "Name" : "sanket test1",
      "Order" : "10",
      "Summary" : "THE WEATHER IN YOUR POCKET  You had to be excited enough about something to decide to send this email campaign. This is where that news goes. Think of it as your mountaintop to shout from.   AVAILABLE FOR IPHONE & ANDROID                    SUNNY _____  You are totally stoked about the piece of information that goes here and your subscribers will be too.        CLOUDY _____  You are totally stoked about the piece of information that goes here and your subscribers will be too.        STORMY _____"
    }, {
      "Date" : "Aug 16, 2016",
      "Errors" : [ ],
      "ID" : "403367",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10352772.jpg",
      "Name" : "Aug 17 2016 Email",
      "Order" : "11",
      "Summary" : "Button   \n     \n               \n     View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to receive any more emails, you can  unsubscribe here.    This message was sent to pooja.gorde.gmail.com@email.benchmarkapps.com by pooja.gorde.gmail.com@email.benchmarkapps.com Mumbai, Mumbai, MH 400085, India     Unsubscribe |  Manage Subscription |  Forward Email |  Report Abuse"
    }, {
      "Date" : "Oct 16, 2017",
      "Errors" : [ ],
      "ID" : "439839",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_12462717.jpg",
      "Name" : "Jul 11 2017 Email 1 Oct 17 2017",
      "Order" : "12",
      "Summary" : "Times of IndiaThe Times of India: Breaking news, views, reviews, cricket from across India        North Korea says 'a nuclear war may break out any moment' 16 Oct 2017 01:53 PM  \"The entire US mainland is within our firing range and if the US dares to invade our sacred territory even an inch it will not escape our severe punishment in any part of the globe,\" North Korea's deputy UN ambassador Kim In Ryong warned.  Read More     Pak gang sells bank details of Indians for Rs 500 16 Oct 2017 06:17 "
    }, {
      "Date" : "Oct 10, 2017",
      "Errors" : [ ],
      "ID" : "439166",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_12439286.jpg",
      "Name" : "Jul 11 2017 Email 1 Oct 11 2017",
      "Order" : "14",
      "Summary" : "Times of IndiaThe Times of India: Breaking news, views, reviews, cricket from across India        Love jihad: Kerala sent list of 90 cases of 'forced' conversions to NIA 10 Oct 2017 11:23 AM  Significantly, ‘radical’ Muslim outfit Popular Front of India and its political arm Social Democratic Party of India (SDPI) have emerged as a common link in the “indoctrination” and “luring” of not only the two Athiras but also that of Akhila Asokanalias Hadiya, a senior NIA officer told TOI. Hadiya has ins"
    }, {
      "Date" : "Dec 16, 2016",
      "Errors" : [ ],
      "ID" : "403537",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10982675.jpg",
      "Name" : "Mahesh - IE",
      "Order" : "15",
      "Summary" : "Your destination for the  latest trends in fashion            The first 10 orders will get a 50% discount in any product you choose!      ORDER NOW       \n         We are proud to introduce you the best collections in fashion industry           Women's  Collection   Your intro copy was exciting enough to keep your subscribers reading. Let's continue that trend here!   SHOW MORE         Men's  Collection   Your intro copy was exciting enough to keep your subscribers reading. Let's continue that t"
    }, {
      "Date" : "Oct 05, 2016",
      "Errors" : [ ],
      "ID" : "403374",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10634496.jpg",
      "Name" : "RSS test by Pooja Oct  5 2016",
      "Order" : "19",
      "Summary" : "RSS TITLE\n         US election: Trump 'fool' and Clinton 'weak', say VPs 04 Oct 2016 05:06 PM  Donald Trump is likened to a \"fool or maniac\" while Hillary Clinton is dismissed as \"weak and feckless\" in a punchy vice-presidential debate.  Read More     Hurricane Matthew: Thousands displaced in Haiti 04 Oct 2016 06:43 PM  The most powerful Caribbean hurricane in nearly a decade has left thousands of people displaced in Haiti, with officials still trying to reach the worst-hit areas to assess the d"
    } ],
    "HideThumbnail" : "0",
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
 * Delete email from archive
 * Delete an email from archive  <h4>URL Parameters</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>{{ID}}</td>  <td>Required</td>  <td>Archive ID</td>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Return value</td><td>String</td><td>1 if success, -1 if error</td></tr>  </tbody>  </table>
 *
 * authToken String 
 * contentType String 
 * iD String 
 * returns DeleteEmailFromArchive
 **/
exports.archiveByIDDelete = function(authToken,contentType,iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get HTML for button
 * Get HTML for button <h4>URL Parameters</h4> <table> <thead> <tr> <th>Key</th> <th>Required</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>{{Mode}}</td> <td>Required</td> <td>ID of the button selected for archive(eg. 1,2,3,4,5,6,1000 etc)</td> </tr> </tbody> </table>  <h4>Response body parameters</h4> <table> <thead> <tr> <th>Key</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>Code</td> <td>String</td> <td>HTML of button</td> </tr> <tr> <td>ArchiveURL</td> <td>String</td> <td>URL to the archive page</td> </tr> <tr> <td>Status</td> <td>String</td> <td>1 if success, -1 if failure</td> </tr> </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * mode String 
 * returns GetHtmlForButton
 **/
exports.archiveByModeGet = function(authToken,contentType,mode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ArchiveURL" : "http://archive.benchmarkemail.com/PoojaGorde",
    "Code" : "<!-- BEGIN: Newsletter Archive Link By Benchmark Email ------>\r\n<div align=\"center\">\r\n<a href=\"http://archive.benchmarkemail.com/PoojaGorde\" target=_new><img src=\"http://www.benchmarkemail.com/images/in/archive/3.gif?r=DZF7L3\" border=0 /></a>\r\n</div>\r\n<!-- END: Newsletter Archive Link By Benchmark Email ------>\r\n",
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
 * Get the details of archive email
 * Get the details of archive email which id is pass <h4>URL Parameters</h4> <table> <thead> <tr> <th>Key</th> <th>Required</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>{{ArchiveID}}</td> <td>Required</td> <td>Archive ID</td> </tr> </tbody> </table>  <h4>Response body parameters</h4> <table> <thead> <tr> <th>Key</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>ArchiveRootURL</td> <td>String</td> <td>Archive main URL</td> </tr> <tr> <td>EmailID</td> <td>String</td> <td>Email ID</td> </tr> <tr> <td>ID</td> <td>String</td> <td>Archive ID</td> </tr> <tr> <td>ImageTitle</td> <td>String</td> <td>Image Title </td> </tr> <tr> <td>Name</td> <td>String</td> <td>Newsletter Name </td> </tr> <tr> <td>SentDate</td> <td>String</td> <td></td> </tr> <tr> <td>Sequence</td> <td>String</td> <td>0</td> </tr> <tr> <td>Status</td> <td>String</td> <td>1 if success, -1 if failure</td> </tr> <tr> <td>Summary</td> <td>String</td> <td>Description</td> </tr> <tr> <td>URL</td> <td>String</td> <td>Archive URL for email</td> </tr> </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * archiveID String 
 * returns GetTheDetailsOfArchiveEmail
 **/
exports.archiveDetailByArchiveIDGet = function(authToken,contentType,archiveID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "ArchiveRootURL" : "http://archive.benchmarkemail.com/PoojaGorde/newsletter/",
    "EmailID" : "10689970",
    "Errors" : [ ],
    "ID" : "403185",
    "ImageTitle" : "",
    "Name" : "Oct 17 2016 Email",
    "SentDate" : "",
    "Sequence" : 0,
    "Status" : "1",
    "Summary" : "Heading 1   \n   This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.   \n    Button   \n     \n               \n     View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to",
    "URL" : "Oct-17-2016-Email",
    "isArchived" : false
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
 * Get details about Archive Page
 * Getting details about Archive Page <h4>Response body parameters</h4> <table> <thead> <tr> <th>Key</th><th>Type</th><th>Description</th></tr> </thead> <tbody> <tr><td>ArchiveURL</td><td>String</td><td>Archive URL</td></tr> <tr><td>Share</td><td>String</td><td>Share</td></tr> <tr><td>SharePanel</td><td>String</td><td>Share Panel</td></tr> <tr><td>Domain</td><td>String</td><td>Domain</td></tr> <tr><td>ArchiveRootURL</td><td>String</td><td>Archive Root URL</td></tr> <tr><td>Image</td><td>String</td><td>Image</td></tr> <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr> <tr><td>Errors</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a></td><td>Array</td></tr> </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * returns GetDetailsAboutArchivePage
 **/
exports.archiveDomainGet = function(authToken,contentType) {
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
 * Get a list of emails for archive
 * Get a list of emails for archive <h4>Query String Parameter : </h4> <table> <thead> <tr> <th>Key</th> <th>Required</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>PageNumber</td> <td>optional</td> <td>Page Number</td> </tr> <tr> <td>PageSize</td> <td>optional</td> <td>Number of records to show per page</td> </tr> <tr> <td>Filter</td> <td>optional</td> <td>Filter for archive name</td> </tr> <tr> <td>OrderBy</td> <td>optional</td> <td>The column to sort on</td> </tr> <tr> <td>SortOrder</td> <td>optional</td> <td>The column to sort as <code>asc</code> or <code>desc</code></td> </tr> </tbody> </table> <h4>Response body parameters</h4> <table> <thead> <tr> <th>Key</th><th>Type</th><th>Description</th></tr> </thead> <tbody> <tr><td>Count</td><td>Int</td><td>Total count of emails for archive</td></tr> <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr> <tr><td>Data</td><td><a href=\"http://www.benchmarkemail.com/models.htm#ArchiveData\">ArchiveData</a></td><td>Each element in the array contains the ID, Name, etc.</td></tr> </tbody> </table> <h4>Response Model: ArchiveData</h4>
 *
 * pageNumber String 
 * pageSize String 
 * filter String 
 * orderBy String 
 * sortOrder String 
 * authToken String 
 * contentType String 
 * returns GetAListOfEmailsForArchive
 **/
exports.archiveGet = function(pageNumber,pageSize,filter,orderBy,sortOrder,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Count" : 1196,
    "Data" : [ {
      "ArchiveRootURL" : "",
      "EmailID" : "12462094",
      "Errors" : [ ],
      "ID" : "",
      "ImageTitle" : "",
      "Name" : "Mohit RSS Test Drag Drop Editor Email Oct 17 2017",
      "SentDate" : "#NOT_PUBLISH#",
      "Sequence" : 1,
      "Status" : "0",
      "Summary" : "",
      "URL" : "",
      "isArchived" : false
    }, {
      "ArchiveRootURL" : "",
      "EmailID" : "12460478",
      "Errors" : [ ],
      "ID" : "",
      "ImageTitle" : "",
      "Name" : "Kiran Feb 08 2017 Test 1 Oct 16 2017",
      "SentDate" : "Oct 17, 2017",
      "Sequence" : 2,
      "Status" : "0",
      "Summary" : "",
      "URL" : "",
      "isArchived" : false
    }, {
      "ArchiveRootURL" : "",
      "EmailID" : "12460477",
      "Errors" : [ ],
      "ID" : "",
      "ImageTitle" : "",
      "Name" : "Kiran - RSS Email Jan 23 2017 Test1 Oct 16 2017",
      "SentDate" : "Oct 17, 2017",
      "Sequence" : 3,
      "Status" : "0",
      "Summary" : "",
      "URL" : "",
      "isArchived" : false
    }, {
      "ArchiveRootURL" : "",
      "EmailID" : "12458817",
      "Errors" : [ ],
      "ID" : "",
      "ImageTitle" : "",
      "Name" : "Client RSS Oct 16 2017",
      "SentDate" : "#NOT_PUBLISH#",
      "Sequence" : 4,
      "Status" : "0",
      "Summary" : "",
      "URL" : "",
      "isArchived" : false
    }, {
      "ArchiveRootURL" : "",
      "EmailID" : "12458719",
      "Errors" : [ ],
      "ID" : "",
      "ImageTitle" : "",
      "Name" : "Jul 11 2017 Email 4 Oct 16 2017",
      "SentDate" : "Oct 16, 2017",
      "Sequence" : 5,
      "Status" : "0",
      "Summary" : "",
      "URL" : "",
      "isArchived" : false
    }, {
      "ArchiveRootURL" : "",
      "EmailID" : "12458337",
      "Errors" : [ ],
      "ID" : "",
      "ImageTitle" : "",
      "Name" : "Jul 11 2017 Email 2 Oct 16 2017",
      "SentDate" : "Oct 16, 2017",
      "Sequence" : 6,
      "Status" : "0",
      "Summary" : "",
      "URL" : "",
      "isArchived" : false
    }, {
      "ArchiveRootURL" : "",
      "EmailID" : "12457682",
      "Errors" : [ ],
      "ID" : "",
      "ImageTitle" : "",
      "Name" : "Jul 11 2017 Email 1 Oct 16 2017",
      "SentDate" : "Oct 16, 2017",
      "Sequence" : 7,
      "Status" : "0",
      "Summary" : "",
      "URL" : "",
      "isArchived" : false
    }, {
      "ArchiveRootURL" : "",
      "EmailID" : "12457075",
      "Errors" : [ ],
      "ID" : "",
      "ImageTitle" : "",
      "Name" : "Mohit RSS Test Drag Drop Editor Email Oct 16 2017",
      "SentDate" : "#NOT_PUBLISH#",
      "Sequence" : 8,
      "Status" : "0",
      "Summary" : "",
      "URL" : "",
      "isArchived" : false
    }, {
      "ArchiveRootURL" : "",
      "EmailID" : "12456069",
      "Errors" : [ ],
      "ID" : "",
      "ImageTitle" : "",
      "Name" : "Kiran Feb 08 2017 Test 1 Oct 15 2017",
      "SentDate" : "Oct 16, 2017",
      "Sequence" : 9,
      "Status" : "0",
      "Summary" : "",
      "URL" : "",
      "isArchived" : false
    }, {
      "ArchiveRootURL" : "",
      "EmailID" : "12456068",
      "Errors" : [ ],
      "ID" : "",
      "ImageTitle" : "",
      "Name" : "Kiran - RSS Email Jan 23 2017 Test1 Oct 15 2017",
      "SentDate" : "Oct 16, 2017",
      "Sequence" : 10,
      "Status" : "0",
      "Summary" : "",
      "URL" : "",
      "isArchived" : false
    } ],
    "FreePlan" : 1,
    "Limit" : 0,
    "PremiumClient" : 0,
    "Status" : "1",
    "Used" : 0
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
 * Get image for button
 * Get HTML for button <h4>URL Parameters</h4> <table> <thead> <tr> <th>Key</th> <th>Required</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>{{Mode}}</td> <td>Required</td> <td>ID of the button selected for archive(eg. 1,2,3,4,5,6,1000 etc)</td> </tr> </tbody> </table>  <h4>Response body parameters</h4> <table> <thead> <tr> <th>Key</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>Image</td> <td>String</td> <td>URL of the image</td> </tr> <tr> <td>Status</td> <td>Int</td> <td>-1 if failure</td> </tr> </tbody> </table>
 *
 * authToken String 
 * contentType String 
 * mode String 
 * returns GetImageForButton
 **/
exports.archiveImageByModeGet = function(authToken,contentType,mode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
    "Image" : "https://images.benchmarkemail.com/client553754/archive_link.gif",
    "Status" : ""
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
 * Update archive home page data
 * Update archieve home page data like Page Title ,logo,header,footer etc  <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Type</th>  </tr>  </thead>  <tbody>  <tr>  <td>data</td>  <td>Required</td>  <td><a href=http://www.benchmarkemail.com/models.htm#ArchiveHomePageData>ArchiveHomePageData</a></td>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Data</td><td><a href=http://www.benchmarkemail.com/models.htm#ArchiveHomePageResult>ArchiveHomePageResult</a></td><td>Array</td></tr>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  </tbody>  </table>
 *
 * body UpdateArchiveHomePageDatarequest 
 * authToken String 
 * contentType String 
 * returns UpdateArchiveHomePageData
 **/
exports.archivePatch = function(body,authToken,contentType) {
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
 * Adding an email to archive
 * Add an email to archive page  <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Description</th>  </tr>  </thead>  <tbody>  <tr>  <td>EmailID</td>  <td>Required</td>  <td>ID of the Email which want to add as archive</td>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Return value</td><td>String</td><td>1 if success, -1 if error</td></tr>  </tbody>  </table>
 *
 * body AddingAnEmailToArchiverequest 
 * authToken String 
 * contentType String 
 * returns AddingAnEmailToArchive
 **/
exports.archivePost = function(body,authToken,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : "1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the archive email details
 * Update the archive email details like description,URL etc  <h4>Body Parameters (to be encoded as a JSON string)</h4>  <table>  <thead>  <tr>  <th>Key</th>  <th>Required</th>  <th>Type</th>  </tr>  </thead>  <tbody>  <tr>  <td>ArchiveID</td>  <td>Required</td>  <td>Archive ID</td>  </tr>  <tr>  <td>data</td>  <td>Required</td>  <td><a href=http://www.benchmarkemail.com/models.htm#ArchiveData>ArchiveData</a></td>  </tr>  </tbody>  </table>  <h4>Response body parameters</h4>  <table>  <thead>  <tr>  <th>Key</th><th>Type</th><th>Description</th></tr>  </thead>  <tbody>  <tr><td>Errors</td><td><a href=http://www.benchmarkemail.com/models.htm#ErrorData>ErrorData</a></td><td>Array</td></tr>  <tr><td>Status</td><td>String</td><td>1 if success, -1 if error</td></tr>  </tbody>  </table>
 *
 * body UpdateTheArchiveEmailDetailsrequest 
 * authToken String 
 * contentType String 
 * archiveID String 
 * returns UpdateTheArchiveEmailDetails
 **/
exports.archiveUpdateByArchiveIDPatch = function(body,authToken,contentType,archiveID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Response" : {
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

