'use strict';


/**
 * Update the Archive Home Page
 * Update the Archive Home Page   Body Parameters (to be encoded as a JSON string)            Key   Required   Description               SelArchiveIDs   Required   ID of the Email which want to add as archive         Vieworders   Required   view order for email         chkHide   Required   include thumbnail or not either true or false            Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#ArchiveHomePageData\">ArchiveHomePageData</a>Array      
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
 * Add / Update archive domain   Body Parameters (to be encoded as a JSON string)            Key   Required   Description               Domain   Required   Name of the Archive Domain         
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
 * Get HTML for Archive Newsletter      URL Parameters         KeyRequiredDescription         DomainRequiredArchive Domain            Body Parameters (to be encoded as a JSON string)         KeyRequiredDescription         ArchiveURLRequiredArchive URL   Archive IDRequiredID of the archive            Response body parameters            KeyTypeDescription         CompanyNamestringCompany Name   ContentstringContent in HTML format   ShowBodyboolShow Body   Statusstring1 if success, -1 if error      
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
    "Content" : "<!DOCTYPE html>    \r  <html>    \r  <head>    \r  <meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\">    \r  <style type=\"text/css\">    \r  <!-- BMEMBF Start -->    \r  [name=bmeMainBody]{min-height:1000px;}    \r  @media only screen and (max-width: 480px){table.blk, table[name=tblText], .bmeHolder, .bmeHolder1, table[name=bmeMainColumn]{width:100% !important;} }    \r  @media only screen and (max-width: 480px){.bmeImageCard table.bmeImageTable{height: auto !important; width:100% !important; padding:20px !important;clear:both; float:left !important; border-collapse: separate;} }    \r  @media only screen and (max-width: 480px){.bmeImageCard table.bmeCaptionTable td[name=tblCell]{padding:0px 20px 20px 20px !important;} }    \r  @media only screen and (max-width: 480px){.bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td[name=tblCell]{padding:20px 20px 0 20px !important;} }    \r  @media only screen and (max-width: 480px){.bmeMblInline table.bmeImageTable{height: auto !important; width:100% !important; padding:10px !important;clear:both;} }    \r  @media only screen and (max-width: 480px){.bmeMblInline table.bmeCaptionTable{width:100% !important; clear:both;} }    \r  @media only screen and (max-width: 480px){table.bmeImageTable{height: auto !important; width:100% !important; padding:10px !important;clear:both; } }    \r  @media only screen and (max-width: 480px){table.bmeCaptionTable{width:100% !important;  clear:both;} }    \r  @media only screen and (max-width: 480px){table.bmeImageContainer{width:100% !important; clear:both; float:left !important;} }    \r  @media only screen and (max-width: 480px){table.bmeCaptionTable td[name=tblCell]{padding:10px !important;} }    \r  @media only screen and (max-width: 480px){table.bmeImageTable td{padding:0px !important; height: auto; } }    \r  @media only screen and (max-width: 480px){td.bmeImageContainerRow{padding:0px !important;}}    \r  @media only screen and (max-width: 480px){table[name=tblGtr]{ padding-bottom:20px !important;} }    \r  @media only screen and (max-width: 480px){td.blk_container, .blk_parent, [name=bmeLeftColumn], [name=bmeRightColumn], [name=bmeColumn1], [name=bmeColumn2], [name=bmeColumn3], [name=bmeBody]{display:table !important;max-width:600px !important;width:100% !important;} }    \r  @media only screen and (max-width: 480px){img.mobile-img-large{width:100% !important; height:auto !important;} }    \r  @media only screen and (max-width: 480px){img.bmeRSSImage{max-width:320px; height:auto !important;}}    \r  @media only screen and (min-width: 640px){img.bmeRSSImage{max-width:600px !important; height:auto !important;} }    \r  @media only screen and (max-width: 480px){.trMargin img{height:10px;} }    \r  @media only screen and (max-width: 480px){table[class=container-table], .bmeheadertext, .container-table { width: 95% !important; } }    \r  @media only screen and (max-width: 480px){.mobile-footer, .mobile-footer a{ font-size: 13px !important; line-height: 18px !important; } .mobile-footer{ text-align: center !important; } table[class=\"share-tbl\"] { padding-bottom: 15px; width: 100% !important; } table[class=\"share-tbl\"] td { display: block !important; text- align: center !important; width: 100% !important; } }    \r  @media only screen and (max-width: 480px){div.bmefooter, div.bmeheader{ display:block !important;} }    \r  @media only screen and (max-width: 480px){.tdPart{ width:100% !important; clear:both; float:left !important; } }    \r  @media only screen and (max-width: 480px){table.blk_parent1, table.tblPart {width: 100% !important; } }    \r  @media only screen and (max-width: 480px){td[name=bmeShareTD], td[name=bmeSocialTD]{width: 100% !important; } }    \r  @media only screen and (max-width: 480px){.tblLine{min-width: 100% !important;}}     \r  @media only screen and (max-width: 480px){.bmeMblCenter img { margin: 0 auto; } }       \r  @media only screen and (max-width: 480px){.bmeMblCenter, .bmeMblCenter div, .bmeMblCenter span  { text-align: center !important; text-align: -webkit-center !important; } }    \r  @media only screen and (max-width: 480px){.bmeNoBr br, .bmeImageGutterRow, .bmeMblStackCenter .bmeShareItem .tdMblHide { display: none !important; } }    \r  @media only screen and (max-width: 480px){.bmeMblInline table.bmeImageTable, .bmeMblInline table.bmeCaptionTable, td.bmeMblInline { clear: none !important; width:50% !important; } }    \r  @media only screen and (max-width: 480px){.bmeMblInlineHide, .bmeShareItem .trMargin { display: none !important; } }    \r  @media only screen and (max-width: 480px){.bmeMblInline table.bmeImageTable img, .bmeMblShareCenter.tblContainer.mblSocialContain, .bmeMblFollowCenter.tblContainer.mblSocialContain{width: 100% !important; } }    \r  @media only screen and (max-width: 480px){.bmeMblStack> .bmeShareItem{width: 100% !important; clear: both !important;} }    \r  @media only screen and (max-width: 480px){.bmeShareItem{padding-top: 10px !important;} }    \r  @media only screen and (max-width: 480px){.tdPart.bmeMblStackCenter, .bmeMblStackCenter .bmeFollowItemIcon {padding:0px !important; text-align: center !important;} }    \r  @media only screen and (max-width: 480px){.bmeMblStackCenter> .bmeShareItem{width: 100% !important;} }    \r  @media only screen and (max-width: 480px){ td.bmeMblCenter {border: 0 none transparent !important;padding: 0 !important;}}    \r  @media only screen and (max-width: 480px){.bmeLinkTable.tdPart td{padding-left:0px !important; padding-right:0px !important; border:0px none transparent !important;padding-bottom:15px !important;height: auto !important;}}    \r  @media only screen and (max-width: 480px){.tdMblHide{width:10px !important;} }    \r  @media only screen and (max-width: 480px){.bmeShareItemBtn{display:table !important;}}    \r  @media only screen and (max-width: 480px){.bmeMblStack td {text-align: left !important;}}    \r  @media only screen and (max-width: 480px){.bmeMblStack .bmeFollowItem{clear:both !important; padding-top: 10px !important;}}    \r  @media only screen and (max-width: 480px){.bmeMblStackCenter .bmeFollowItemText{padding-left: 5px !important;}}    \r  @media only screen and (max-width: 480px){.bmeMblStackCenter .bmeFollowItem{clear:both !important;align-self:center; float:none !important; padding-top:10px;margin: 0 auto;}}    \r  @media only screen and (max-width: 480px){td[name=tdBoxedTextBorder]{width: auto !important;}}    \r  @media only screen and (max-width: 480px){    \r  .tdPart> table{width:100% !important;}    \r  }    \r  @media only screen and (max-width: 480px){.tdPart>table.bmeLinkContainer{ width:auto !important; }}    \r  @media only screen and (max-width: 480px){.tdPart.mblStackCenter>table.bmeLinkContainer{ width:100% !important;}}     \r  .blk_parent:first-child, .blk_parent{float:left;}    \r  .blk_parent:last-child{float:right;}    \r  <!-- BMEMBF End -->    \r      \r  /* Background color settings=====================================*/\ttable[name=\"bmeMainBody\"], body{   \t\tbackground-color: #e6e6e8;   \t}                /* Preheader settings=====================================*/\t/* Preheader background color */     \ttd[name=\"bmePreHeader\"]{         \t\tbackground-color:#e6e6e8; \t}            /* Header settings=====================================*/\t/* Header background color */     \ttd[name=\"bmeHeader\"]{   \t\tbackground: #ffffff;  \t}  /* Content/Body settings=====================================*/\t/* Content background color */      \ttd[name=\"bmeBody\"], table[name=\"bmeBody\"]{      \t\tbackground-color:#ffffff;  \t}                  /* Body 2 settings - COPY SETTINGS FROM CONTENT/BODY=====================================*/\t/* Body 2 background color */\ttd[name=\"bmePreFooter\"]{      \t\tbackground-color:#ffffff;  \t}            /* Footer settings=====================================*/\t/* Footer background color */     \ttd[name=\"bmeFooter\"]{      \t\tbackground-color:#e6e6e8;  \t}          /* Default Settings for fonts for blocks=====================================*/\ttd[name=\"tblCell\"], .blk{      \t\tfont-family: initial;       \t\tfont-weight: normal;       \t\tfont-size: initial;  \t} table[name=\"blk_blank\"] td[name=\"tblCell\"]{font-family: Arial, Helvetica, sans-serif;font-size: 14px;}    \r  </style>    \r  </head>    \r  <body marginheight=0 marginwidth=0 topmargin=0 leftmargin=0 style=\"height: 100% !important; margin: 0; padding: 0; width: 100% !important;min-width: 100%;\"><style type=\"text/css\">\r  table[name=\"blk_permission\"], table[name=\"blk_footer\"] {display:none;} \r  </style>\r      \r      \r  <table name=\"bmeMainBody\" style=\"background-color: rgb(230, 230, 232);\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" bgcolor=\"#e6e6e8\"><td width=\"100%\" valign=\"top\" align=\"center\">    \r  <table name=\"bmeMainColumnParentTable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td name=\"bmeMainColumnParent\">     \r  <table name=\"bmeMainColumn\" class=\"bmeHolder\" style=\"max-width: 600px; overflow: visible;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\">    <td class=\"blk_container bmeHolder\" name=\"bmePreHeader\" style=\"background-color: rgb(230, 230, 232); color: rgb(102, 102, 102);   \" width=\"100%\" valign=\"top\" bgcolor=\"#e6e6e8\" align=\"center\"> <td class=\"bmeHolder\" name=\"bmeMainContentParent\" style=\"border-color: rgb(102, 102, 102); border-radius: 5px; border-collapse: separate; border-spacing: 0px;\" width=\"100%\" valign=\"top\" align=\"center\">     \r  <table name=\"bmeMainContent\" style=\"border-radius: 5px; border-collapse: separate;border-spacing: 0px; overflow: hidden;\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\"> <td class=\"blk_container bmeHolder\" name=\"bmeHeader\" style=\"background-color: rgb(255, 255, 255);   \" width=\"100%\" valign=\"top\" bgcolor=\"#ffffff\" align=\"center\"><div id=\"dv_2\" class=\"blk_wrapper\" style=\"\">    \r  <table class=\"blk\" name=\"blk_image\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">    \r  <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td class=\"bmeImage\" style=\"padding: 20px; border-collapse: collapse;\" align=\"center\"><img    \r   src=\"https://images.benchmarkemail.com/client{{client-id}}/image2288342.jpg\" class=\"mobile-img-large\" style=\"display: block; width: 560px; max-width: 800px;\" alt=\"\" width=\"560\" border=\"0\">    \r      \r  </div>   <td class=\"blk_container bmeHolder\" name=\"bmeBody\" style=\"background-color: rgb(255, 255, 255); color: rgb(56, 56, 56);   \" width=\"100%\" valign=\"top\" bgcolor=\"#ffffff\" align=\"center\"><div id=\"dv_3\" class=\"blk_wrapper\" style=\"\">    \r  <table class=\"blk\" name=\"blk_text\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">    \r  <table class=\"bmeContainerRow\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td class=\"tdPart\" valign=\"top\" align=\"center\">    \r  <table name=\"tblText\" style=\"float:left;\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td name=\"tblCell\" style=\"padding: 20px; font-size: 30px; font-weight: 400; font-family: Arial,Helvetica,sans-serif; color: rgb(56, 56, 56); text-align: left;\" valign=\"top\" align=\"left\"><div style=\"line-height: 150%;\"><strong>Heading 1</strong></div>    \r      \r      \r  </div>  <div id=\"dv_4\" class=\"blk_wrapper\" style=\"\">    \r  <table class=\"blk\" name=\"blk_text\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">    \r  <table class=\"bmeContainerRow\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td class=\"tdPart\" valign=\"top\" align=\"center\">    \r  <table name=\"tblText\" style=\"float:left;\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td name=\"tblCell\" style=\"padding: 10px 20px; font-size: 14px; font-weight: 400; font-family: Arial,Helvetica,sans-serif; color: rgb(56, 56, 56); text-align: left;\" valign=\"top\" align=\"left\"><div style=\"line-height: 150%;\">This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.</div>    \r      \r      \r  </div>  <div id=\"dv_5\" class=\"blk_wrapper\" style=\"\">    \r  <table class=\"blk\" name=\"blk_button\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td width=\"20\"><td align=\"center\">    \r  <table class=\"tblContainer\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td height=\"10\"><td align=\"left\">    \r  <table class=\"bmeButton\" style=\"border-collapse: separate;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td class=\"bmeButtonText\" style=\"border-collapse:seperate;border-radius:5px; border-width:0; border-style:none; border-color:transparent;background-color:#72C2A1; text-align: center;padding-top:20px;padding-bottom:20px; padding-left:40px; padding-right:40px;font-weight:bold;\"><span style=\"font-family:Arial, Verdana; font-size:14px;color:#FFFFFF;\">    \r  <a target=\"_blank\" style=\"color:#FFFFFF;text-decoration:none;\">Button</a></span>    \r  <td height=\"10\">    \r  <td width=\"20\">    \r  </div>   <td class=\"blk_container bmeHolder\" name=\"bmePreFooter\" style=\"background-color: rgb(255, 255, 255);   \" width=\"100%\" valign=\"top\" bgcolor=\"#ffffff\" align=\"center\"><div id=\"dv_6\" class=\"blk_wrapper\" style=\"\">    \r  <table name=\"blk_divider\" class=\"blk\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td style=\"padding-top:10px; padding-bottom:10px;padding-left:20px;padding-right:20px;\" class=\"tblCellMain\">    \r  <table style=\"border-top: 1px solid rgb(225, 225, 225); min-width: 1px;\" class=\"tblLine\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><span></span>    \r      \r  </div>  <div id=\"dv_7\" class=\"blk_wrapper\" style=\"\">    \r  <table style=\"\" name=\"blk_social_follow\" class=\"blk\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td style=\"padding:0px 0px 10px 0px;\" class=\"tblCellMain\">    \r  <table style=\"float:left;\" class=\"tblContainer\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td class=\"tdItemContainer\" style=\"padding: 0px 20px;\">    \r  <table style=\"table-layout: auto;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td valign=\"top\"><!--[if gte mso 6]><td align=\"left\" valign=\"top\"><![endif]-->    \r  <table style=\"float: left; display: block;\" type=\"facebook\" class=\"bmeFollowItem\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td style=\"padding-right:5px;padding-top:5px;height:30px;\" class=\"bmeFollowItemIcon\" width=\"24\" align=\"left\">    \r  <a target=\"_blank\" style=\"display: inline-block;background-color: rgb(53, 91, 161);border-radius: 0px;border-style: none; border-width: 0px; border-color: transparent;\" href=\"http://bmetrack.bmetrack.com/c/l?u=67F1AC3&e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&seq=1\" target=_blank><img alt=\"Facebook\"    \r   src=\"https://ui.benchmarkemail.com/images/editor/socialicons/fb_btn.png\" style=\"max-width: 57px; display:block;\" width=\"24\" border=\"0\" height=\"24\"></a>    \r  <!--[if gte mso 6]><td align=\"left\" valign=\"top\"><![endif]-->    \r  <table style=\"float: left; display: block;\" type=\"googleplus\" class=\"bmeFollowItem\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td style=\"padding-right:5px;padding-top:5px;height:30px;\" class=\"bmeFollowItemIcon\" width=\"24\" align=\"left\">    \r  <a target=\"_blank\" style=\"display: inline-block;background-color: rgb(214, 73, 46);border-radius: 0px;border-style: none; border-width: 0px; border-color: transparent;\" href=\"http://bmetrack.bmetrack.com/c/l?u=67F1AC4&e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&seq=1\" target=_blank><img alt=\"Google Plus\"    \r   src=\"https://ui.benchmarkemail.com/images/editor/socialicons/gp_btn.png\" style=\"max-width: 57px; display:block;\" width=\"24\" border=\"0\" height=\"24\"></a>    \r  <!--[if gte mso 6]><td align=\"left\" valign=\"top\"><![endif]-->    \r  <table style=\"float: left; display: block;\" type=\"twitter\" class=\"bmeFollowItem\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"left\"><td style=\"padding-right:5px;padding-top:5px;height:30px;\" class=\"bmeFollowItemIcon\" width=\"24\" align=\"left\">    \r  <a target=\"_blank\" style=\"display: inline-block;background-color: rgb(50, 203, 255);border-radius: 0px;border-style: none; border-width: 0px; border-color: transparent;\" href=\"http://bmetrack.bmetrack.com/c/l?u=67F1AC5&e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&seq=1\" target=_blank><img alt=\"Twitter\"    \r   src=\"https://ui.benchmarkemail.com/images/editor/socialicons/tw_btn.png\" style=\"max-width: 57px; display:block;\" width=\"24\" border=\"0\" height=\"24\"></a>    \r      \r      \r      \r  </div>       \r     <td class=\"blk_container bmeHolder\" name=\"bmeFooter\" style=\"background-color: rgb(230, 230, 232); color: rgb(102, 102, 102);   \" width=\"100%\" valign=\"top\" bgcolor=\"#e6e6e8\" align=\"center\"><div id=\"dv_9\" class=\"blk_wrapper\" style=\"\">    \r  <table class=\"blk\" name=\"blk_permission\" style=\"\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td name=\"tblCell\" style=\"padding:20px;\" valign=\"top\" align=\"left\">    \r  <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td name=\"bmePermissionText\" style=\"text-align:left;\" align=\"left\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px;line-height: 140%;\">    \r  <a style=\"color: #16a7e0;\" target=\"_new\" href=\"http://bmetrack.bmetrack.com/c/v?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D\">View this email in your browser</a>    \r   You are receiving this email because of your relationship with Cybermax Solutions. Please     \r  <a style=\"color: #16a7e0;\" target=\"_new\" href=\"http://bmetrack.bmetrack.com/c/opt?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D\">reconfirm</a> your interest in receiving emails from us.  If you do not wish to receive any more emails, you can     \r  <a style=\"color: #16a7e0;\" target=\"_new\" href=\"http://bmetrack.bmetrack.com/c/u?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D\">unsubscribe here</a>.</span>    \r      \r  </div><div id=\"dv_10\" class=\"blk_wrapper\" style=\"\">    \r  <table class=\"blk\" name=\"blk_footer\" style=\"\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td name=\"tblCell\" style=\"padding:20px;\" valign=\"top\" align=\"left\">    \r  <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><td name=\"bmeBadgeText\" style=\"text-align:left; word-break: break-all;\" align=\"left\"><span id=\"spnFooterText\" style=\"font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px; line-height: 140%;\">This message was sent to mohit@cybermaxsolutions.com by mohit@cybermaxsolutions.com    \r   Kailash Cmplx, Mumbai, Maharashtra  400079, India</span>    \r       \r   <span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px; line-height: 140%;\">    \r  <a href=http://bmetrack.bmetrack.com/c/su?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=><img    \r   src=\"https://www.benchmarkemail.com/images/verified.png\" alt=\"Unsubscribe from all mailings\" title=\"Unsubscribe from all mailings\" border=0 /></a>     \r  <a class=bmefootertext  target=_new  href=\"http://bmetrack.bmetrack.com/c/su?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=\"  style=\"color:inherit;\">Unsubscribe</a>   |     \r  <a class=bmefootertext  target=_new  href=\"http://bmetrack.bmetrack.com/c/s?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=\"  style=\"color:inherit;\">Manage Subscription</a>   |      \r  <a class=bmefootertext  target=_new  href=\"http://bmetrack.bmetrack.com/c/f?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=\"  style=\"color:inherit;\">Forward Email</a>  |      \r  <a class=bmefootertext  target=_new  href=\"http://bmetrack.bmetrack.com/Abuse?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=\"  style=\"color:inherit;\">Report Abuse</a>    \r   </span><td name=\"bmeBadgeImage\" style=\"text-align: left; padding-top: 20px; word-break: break-all;\" align=\"left\">    \r  <a href=\"http://www.benchmarkplug.com/es/?p=500289\" target=\"_new\"><img    \r   src=\"https://www.benchmarkemail.com/images/web4/misc/emailfooter/opt1.png\"  style=\"max-width:116px;\" border=0 /></a>    \r      \r  </div>     \r      \r      \r      \r  <!-- /Test Path -->    \r  </body>    \r  </html><img    \r   src='http://bmetrack.bmetrack.com/c/o?e=A1C015&c=7F681&t=1&email=9c521VCvQgRZiRpCmsFJ2%2B5Mrqcg%2BOHEeeWRGMtRs94%3D&relid=' alt='' border=0 style=\"display:none;\" height=1 width=1><br /><center><a href='http://www.benchmarkemail.com/Signup' target=_new><img border=0 src=\"https://www.benchmarkemail.com/mail_logo.gif\"/></a></center>",
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
 * Get the details of archive email which id is pass      URL Parameters         KeyRequiredDescription         DomainRequiredArchive Domain   TypeRequiredType   <code>Home</code> - Home   <code>Image</code> - Image            Response body parameters         KeyTypeDescription         CompanyNameStringCompany Name   ContentStringData in HTML Format   ShowBodyStringShow Body   StatusString1 if success, -1 if failure      
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
    "Content" : "<html>\r  <head>\r  <title><table cellspacing=0 cellpadding=0 border=0 width=\"100%\" style='font-size:inherit;'><td style='font-size:inherit;'>Cybermax Solutions<br/><br />Kailash Cmplx <br />Mumbai 400079 <br />Maharashtra India </title>\r  </head>\r  <body topmargin=0 leftmargin=0 paddingleft=0 paddingtop=0>\r  <style type='text/css'> .archivelink{align:;color:#333333;font-family:Arial;font-size:12px;} </style>\r  <div align=center>\r  <div style=\"border: 1px solid #333333; width: 601px;\"><table cellspacing=0 cellpadding=0 border=0 width='600px'>\r  <td id='headerarea' valign=top align='left' style='align:left;background-color:#1b5680;color:#ffffff;font-family:Arial;font-size:32px;padding:10px;letter-spacing:-2px;'>\r  Cybermax Solutions Archive Home\r  \r  <td valign=top bgcolor=#ffffff><img width=6 height=6 src=https://www.benchmarkemail.com/images/blank.gif /><td id='container' style='background-color:#ededed;padding:15px;'>\r  <table cellspacing=0 cellpadding=5 border=0 width='100%'>\r  <td id='introarea' align='left' style='align:left;color:#333333;font-family:Arial;font-size:12px;'>\r  Below you will find an archive of Cybermax Solutions monthly Newsletter(s) and the Cybermax Solutions weekly update(s). Browse through the issues below, or follow the link located at the bottom of this page to subscribe.\r  \r  <td id='archivearea' align=''>\r  <hr /><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'> <!--10600469 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client{{client-id}}/sst_10600469.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Sep-30-2016-Email-1\">Sep 30 2016 Email 1 (Sep 2016) </a> <br />\r  Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax Solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to</div><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'> <!--10600449 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client{{client-id}}/sst_10600449.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Sep-30-2016-Email\">Sep 30 2016 Email (Sep 2016) </a> <br />\r  Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax Solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to</div><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'> <!--10476168 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client{{client-id}}/sst_10476168.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Sep-10-2016-Email\">Sep 10 2016 Email (Sep 2016) </a> <br />\r  Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax Solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to</div><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'> <!--10207348 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/clien{{client-id}}/sst_10207348.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Magical-Clicks\">Magical Clicks (Jul 2016) </a> <br />\r  Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Google                                  View this email in your browser  Cybermax Solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to</div><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'> <!--10207249 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client{{client-id}}/sst_10207249.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Hey-open-this-Mail\">Hey! open this Mail!! (Jul 2016) </a> <br />\r  Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.                Heading 2        This is also exciting enough news to put in your newsletter, just not as exciting as what your subscribers read above. It's like silver medal to the a</div><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'> <!--11057656 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client{{client-id}}/sst_11057656.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Classic-Editor-Email\">Classic Editor Email (Jan 2017) </a> <br />\r  10 days left for discount offer Visit our Trips Page to see our latest Trips and Deals!  Call us at: (000) 123 4567  Travel NewsletterNewsletter Subtitle     Lorem ipsum dolor sit amet consectetuer adipiscing elit. Etiam ut elit ac metus facilisis fermentum. Curabitur magna magna elementum.  Phasellus tellus pede pulvinar et scelerisque a tempor a velit. Morbi feugiat. Etiam ut elit ac metus facilisis fermentum. Curabitur magna magna elementum fermentum placerat vel commodo vel tortor. Sed justo</div><br /><table cellspacing=0 cellpaddding=0 border=0 width='100%'> <!--11614304 --><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client{{client-id}}/sst_11614304.jpg' onerror=\"this.src='http://www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='align:;color:#333333;font-family:Arial;font-size:12px;padding-left:15px;'><div style=\"width:425px; overflow:hidden;\"><a class='archivelink' style='font-size: 150%;' target=_new href=\"https://archive.benchmarkemail.com/Cybermax-Solutions17/newsletter/Jan-27-2017-Email-May--3-2017\">Jan 27 2017 Email May  3 2017 (May 2017) </a> <br />\r  Special Olympics Stories NewsletterAn ongoing stream of headlines and stories from and about Special Olympics worldwide.        Rebekah Tucker: April Athlete of the Month for North Carolina 02 May 2017 02:14 AM  Anonymous     Read More     Special Olympics South Africa helped him realize his dream 02 May 2017 01:43 AM  Anonymous     Read More     Special Olympics Bahamas, Engaging The Youth 02 May 2017 01:32 AM  Anonymous     Read More     My Paddle Board Story 02 May 2017 01:27 AM  Anonymous   </div><br /><br /><hr /><br />\r  <td id='footerarea' align='left' style='align:left;color:#333333;font-family:Arial;font-size:12px;'>\r  <table cellspacing=0 cellpadding=0 border=0 width=\"100%\" style='font-size:inherit;'><td style='font-size:inherit;'>Cybermax Solutions<br/><br />Kailash Cmplx <br />Mumbai 400079 <br />Maharashtra India <table cellspacing=0 cellpadding=0 border=0 width=\"100%\" style='font-size:inherit;'><td align=right valign=top><a style=\"font-size: 12px; color: #333333;\" href=\"http://lb.benchmarkemail.com//listbuilder/signup?I496BbPDMZuPLZ%2BLyle8d%2FG6VTMKFmIozGXnzIpVAlU%3D\" target=_blank>Join our Mailing List!</a>\r  \r  \r  \r  \r  </div></div>\r  </body>\r  </html>\r  ",
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
 * Get the archive home page   Response body parameters            KeyTypeDescription         StatusString1 if success, -1 if error   Data<a href=\"http://www.benchmarkemail.com/models.htm#ArchiveHomePageData\">ArchiveHomePageData</a>Array      
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
      "Footer" : "<table cellspacing=0 cellpadding=0 border=0 width=\"100%\" style='font-size:inherit;'><td style='font-size:inherit;'>Cybermax solutions<br/><br />Mumbai <br />Mumbai 400085 <br />MH India ",
      "Form" : "<style type='text/css'> .archivelink{align:;color:#333333;font-family:Arial;font-size:12px;} </style><div style=\"border: 1px solid #333333; width: 601px;\"><table cellspacing=0 cellpadding=0 border=0 width='600px'><td id='headerarea' valign=top style='align:center;background-color:#fd2e17;color:#fdf117;font-family:Arial black;font-size:30px;padding:10px;letter-spacing:-2px;'>Cybermax Solutions Archive Home8<td id='container' style='background-color:#ffefe9;padding:15px;'><table cellspacing=0 cellpadding=5 border=0 width='100%'><td id='introarea' style='align:left;color:#352c2c;font-family:Arial black;font-size:12px;'>Below you will find an archive of Cybermax solutions monthly Newsletter(s) and the Cybermax solutions weekly update(s). Browse through the issues below, or follow the link located at the bottom of this page to subscribe.<td id='archivearea' style='align:;color:#333333;font-family:Arial;font-size:12px;'><br /><br /><hr /><br /><table cellspacing=0 cellpaddding=5 border=0 width='100%'><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10581806.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/firstNamelastName/newsletter/RSS-test-by-firstName-Sep-28-2016\" style='font-size: 125%;'>RSS test by firstName Sep 28 2016 (Sep 2016) </a> <br />\r  RSS TITLE&#8629;         Shimon Peres, former Israeli president, dies aged 93 27 Sep 2016 06:43 PM  Former Israeli PM and President Shimon Peres has died aged 93 following a stroke two weeks ago.  Read More     MH17: Dutch-led team to pinpoint Buk missile launch site 27 Sep 2016 07:16 PM  An international investigation team looking into the downing of Malaysia Airlines flight MH17 is due to release its findings on Wednesday.  Read More     Stolen African penguin 'cannot survive in the wild' 27 Sep 201<table cellspacing=0 cellpaddding=5 border=0 width='100%'><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10511470.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/firstNamelastName/newsletter/list-plan-2k-test\" style='font-size: 125%;'>list plan 2k test (Sep 2016) </a> <br />\r  Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to<table cellspacing=0 cellpaddding=5 border=0 width='100%'><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10511456.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/firstNamelastName/newsletter/test-free-plan-mail\" style='font-size: 125%;'>test free plan mail (Sep 2016) </a> <br />\r  Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to<table cellspacing=0 cellpaddding=5 border=0 width='100%'><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10696924.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/firstNamelastName/newsletter/Oct-18-2016-Email\" style='font-size: 125%;'>Oct 18 2016 Email (Oct 2016) </a> <br />\r  Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to<table cellspacing=0 cellpaddding=5 border=0 width='100%'><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10690912.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/firstNamelastName/newsletter/Oct-17-2016-Email-1\" style='font-size: 125%;'>Oct 17 2016 Email 1 (Oct 2016) </a> <br />\r  Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to<table cellspacing=0 cellpaddding=5 border=0 width='100%'><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10689970.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/firstNamelastName/newsletter/Oct-17-2016-Email\" style='font-size: 125%;'>Oct 17 2016 Email (Oct 2016) </a> <br />\r  Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to<table cellspacing=0 cellpaddding=5 border=0 width='100%'><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10863094.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/firstNamelastName/newsletter/Automation-Test\" style='font-size: 125%;'>Automation Test (Nov 2016) </a> <br />\r  THE WEATHER IN YOUR POCKET  You had to be excited enough about something to decide to send this email campaign. This is where that news goes. Think of it as your mountaintop to shout from.   AVAILABLE FOR IPHONE & ANDROID                     SUNNY _____  You are totally stoked about the piece of information that goes here and your subscribers will be too.         CLOUDY _____  You are totally stoked about the piece of information that goes here and your subscribers will be too.         STORMY __<table cellspacing=0 cellpaddding=5 border=0 width='100%'><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10685460.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/firstNamelastName/newsletter/Oct-13-2016-Email-Oct-15-2016\" style='font-size: 125%;'>Oct 13 2016 Email Oct 15 2016 (Oct 2016) </a> <br />\r  magazinespain.comNoticias de actualidad, famosos, tendencias, moda y belleza             Karlie Kloss o cómo llevar una gabardina   14 Oct 2016 01:30 AM      Parecía que no iba a llegar, pero el otoño ya está aquí… La modelo Karlie Kloss nos da una lección de estilo para llevar unas de las prendas must de la temporada: la gabardina. Parecía que no llegaría nunca pero ya está aquí, el otoño ha comenzado meteorológicamente hablando… Ha empezado a llover y caen...  Read More    Read More           Natali<table cellspacing=0 cellpaddding=5 border=0 width='100%'><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10681383.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/firstNamelastName/newsletter/sanket-test2\" style='font-size: 125%;'>sanket test2 (Oct 2016) </a> <br />\r  Help Fund the World's Best Exciting New Product!      By Billy Doe Johnson              440 backers  $31,806 pledged of $40,000 goal  28 days to go        Back This Project          About This Project      You had to be excited enough about something to decide to send this email campaign. This is where that news goes. Think of it as your mountaintop to shout from.  You know how when something totally awesome happens during your day and you cannot wait to share the story with a significant other,<table cellspacing=0 cellpaddding=5 border=0 width='100%'><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10681371.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/firstNamelastName/newsletter/sanket-test1\" style='font-size: 125%;'>sanket test1 (Oct 2016) </a> <br />\r  THE WEATHER IN YOUR POCKET  You had to be excited enough about something to decide to send this email campaign. This is where that news goes. Think of it as your mountaintop to shout from.   AVAILABLE FOR IPHONE & ANDROID                    SUNNY _____  You are totally stoked about the piece of information that goes here and your subscribers will be too.        CLOUDY _____  You are totally stoked about the piece of information that goes here and your subscribers will be too.        STORMY _____<table cellspacing=0 cellpaddding=5 border=0 width='100%'><td width=19% valign=top align=left><img width=108 src='https://images.benchmarkemail.com/client553754/sst_10352772.jpg' onerror=\"this.src='//www.benchmarkemail.com/images/default_sst.gif';\" /><td valign=top style='padding-left:15px;'><a class='archivelink' href=\"http://archive.benchmarkemail.com/firstNamelastName/newsletter/Aug-17-2016-Email\" style='font-size: 125%;'>Aug 17 2016 Email (Aug 2016) </a> <br />\r  Button                                  View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to receive any more emails, you can  unsubscribe here.    This message was sent to firstName.lastName.gmail.com@email.benchmarkapps.com by firstName.lastName.gmail.com@email.benchmarkapps.com Mumbai, Mumbai, MH 400085, India     Unsubscribe |  Manage Subscription |  Forward Email |  Report Abuse<br /><hr /><br /><td id='footerarea' style='align:left;color:#333333;font-family:Arial;font-size:12px;'><table cellspacing=0 cellpadding=0 border=0 width=\"100%\" style='font-size:inherit;'><td style='font-size:inherit;'>Cybermax solutions<br/><br />Mumbai <br />Mumbai 400085 <br />MH India <table cellspacing=0 cellpadding=0 border=0 width=\"100%\" style='font-size:inherit;'><td align=right valign=top><a style=\"font-size: 12px; color: #333333;\" href=\"http://lb.benchmarkemail.com//listbuilder/signup?lmjkuOxIEpaU1WCvTXj6qfG6VTMKFmIoS2YEIFvYW7w%3D\" target=_blank>Join our Mailing List!</a></div>",
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
 * Response body parameters        Key  Type  Description          Count  Int  Count of the archive pages      Status  String  1 if success, -1 if error      HideThumbnail  String  Whether the thumbnail should be hidden or not      ArchiveIDs  String  Comma separated list of archive IDs      Data  <a href=\"http://www.benchmarkemail.com/models.htm#ArchivePageData\">ArchivePageData</a>  List of the archive Each element contains the Name, ImageURL, etc. For more details        
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
      "Name" : "RSS test by firstName Sep 28 2016",
      "Order" : "1",
      "Summary" : "RSS TITLE&#8629;         Shimon Peres, former Israeli president, dies aged 93 27 Sep 2016 06:43 PM  Former Israeli PM and President Shimon Peres has died aged 93 following a stroke two weeks ago.  Read More     MH17: Dutch-led team to pinpoint Buk missile launch site 27 Sep 2016 07:16 PM  An international investigation team looking into the downing of Malaysia Airlines flight MH17 is due to release its findings on Wednesday.  Read More     Stolen African penguin 'cannot survive in the wild' 27 Sep 201"
    }, {
      "Date" : "Sep 16, 2016",
      "Errors" : [ ],
      "ID" : "393176",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10511470.jpg",
      "Name" : "list plan 2k test",
      "Order" : "2",
      "Summary" : "Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to"
    }, {
      "Date" : "Sep 16, 2016",
      "Errors" : [ ],
      "ID" : "393175",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10511456.jpg",
      "Name" : "test free plan mail",
      "Order" : "3",
      "Summary" : "Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to"
    }, {
      "Date" : "Oct 18, 2016",
      "Errors" : [ ],
      "ID" : "403183",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10696924.jpg",
      "Name" : "Oct 18 2016 Email",
      "Order" : "4",
      "Summary" : "Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to"
    }, {
      "Date" : "Oct 17, 2016",
      "Errors" : [ ],
      "ID" : "403184",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10690912.jpg",
      "Name" : "Oct 17 2016 Email 1",
      "Order" : "5",
      "Summary" : "Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to"
    }, {
      "Date" : "Oct 16, 2016",
      "Errors" : [ ],
      "ID" : "403185",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10689970.jpg",
      "Name" : "Oct 17 2016 Email",
      "Order" : "6",
      "Summary" : "Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to"
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
      "Summary" : "magazinespain.comNoticias de actualidad, famosos, tendencias, moda y belleza             Karlie Kloss o cómo llevar una gabardina   14 Oct 2016 01:30 AM      Parecía que no iba a llegar, pero el otoño ya está aquí… La modelo Karlie Kloss nos da una lección de estilo para llevar unas de las prendas must de la temporada: la gabardina. Parecía que no llegaría nunca pero ya está aquí, el otoño ha comenzado meteorológicamente hablando… Ha empezado a llover y caen...  Read More    Read More           Natali"
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
      "Summary" : "Button                                  View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to receive any more emails, you can  unsubscribe here.    This message was sent to firstName.lastName.gmail.com@email.benchmarkapps.com by firstName.lastName.gmail.com@email.benchmarkapps.com Mumbai, Mumbai, MH 400085, India     Unsubscribe |  Manage Subscription |  Forward Email |  Report Abuse"
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
      "Name" : "firstName - IE",
      "Order" : "15",
      "Summary" : "Your destination for the  latest trends in fashion            The first 10 orders will get a 50% discount in any product you choose!      ORDER NOW                  We are proud to introduce you the best collections in fashion industry           Women's  Collection   Your intro copy was exciting enough to keep your subscribers reading. Let's continue that trend here!   SHOW MORE         Men's  Collection   Your intro copy was exciting enough to keep your subscribers reading. Let's continue that t"
    }, {
      "Date" : "Oct 05, 2016",
      "Errors" : [ ],
      "ID" : "403374",
      "ImageURL" : "https://images.benchmarkemail.com/client553754/sst_10634496.jpg",
      "Name" : "RSS test by firstName Oct  5 2016",
      "Order" : "19",
      "Summary" : "RSS TITLE           US election: Trump 'fool' and Clinton 'weak', say VPs 04 Oct 2016 05:06 PM  Donald Trump is likened to a \"fool or maniac\" while Hillary Clinton is dismissed as \"weak and feckless\" in a punchy vice-presidential debate.  Read More     Hurricane Matthew: Thousands displaced in Haiti 04 Oct 2016 06:43 PM  The most powerful Caribbean hurricane in nearly a decade has left thousands of people displaced in Haiti, with officials still trying to reach the worst-hit areas to assess the d"
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
 * Delete an email from archive   URL Parameters            Key   Required   Description               {{ID}}   Required   Archive ID            Response body parameters            KeyTypeDescription         Return valueString1 if success, -1 if error      
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
 * Get HTML for button  URL Parameters        Key  Required  Description          {{Mode}}  Required  ID of the button selected for archive(eg. 1,2,3,4,5,6,1000 etc)          Response body parameters        Key  Type  Description          Code  String  HTML of button      ArchiveURL  String  URL to the archive page      Status  String  1 if success, -1 if failure      
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
    "ArchiveURL" : "http://archive.benchmarkemail.com/firstNamelastName",
    "Code" : "<!-- BEGIN: Newsletter Archive Link By Benchmark Email ------>\r  <div align=\"center\">\r  <a href=\"http://archive.benchmarkemail.com/firstNamelastName\" target=_new><img src=\"http://www.benchmarkemail.com/images/in/archive/3.gif?r=DZF7L3\" border=0 /></a>\r  </div>\r  <!-- END: Newsletter Archive Link By Benchmark Email ------>\r  ",
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
 * Get the details of archive email which id is pass  URL Parameters        Key  Required  Description          {{ArchiveID}}  Required  Archive ID          Response body parameters        Key  Type  Description          ArchiveRootURL  String  Archive main URL      EmailID  String  Email ID      ID  String  Archive ID      ImageTitle  String  Image Title       Name  String  Newsletter Name       SentDate  String        Sequence  String  0      Status  String  1 if success, -1 if failure      Summary  String  Description      URL  String  Archive URL for email      
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
    "ArchiveRootURL" : "http://archive.benchmarkemail.com/firstNamelastName/newsletter/",
    "EmailID" : "10689970",
    "Errors" : [ ],
    "ID" : "403185",
    "ImageTitle" : "",
    "Name" : "Oct 17 2016 Email",
    "SentDate" : "",
    "Sequence" : 0,
    "Status" : "1",
    "Summary" : "Heading 1        This is where your most exciting news goes. This is the part that will be \"above the fold.\" That's just fancy talk for \"you don't have to scroll down to see it.\" It will also likely be displayed in inbox clients that show a preview. You want the best content to be where it will be seen by the most eyes.         Button                                  View this email in your browser  Cybermax solutions. Please  reconfirm your interest in receiving emails from us. If you do not wish to",
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
 * Getting details about Archive Page  Response body parameters        KeyTypeDescription      ArchiveURLStringArchive URL  ShareStringShare  SharePanelStringShare Panel  DomainStringDomain  ArchiveRootURLStringArchive Root URL  ImageStringImage  StatusString1 if success, -1 if error  Errors<a href=\"http://www.benchmarkemail.com/models.htm#ErrorData\">ErrorData</a>Array    
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
 * Get a list of emails for archive  Query String Parameter :         Key  Required  Description          PageNumber  optional  Page Number      PageSize  optional  Number of records to show per page      Filter  optional  Filter for archive name      OrderBy  optional  The column to sort on      SortOrder  optional  The column to sort as <code>asc</code> or <code>desc</code>        Response body parameters        KeyTypeDescription      CountIntTotal count of emails for archive  StatusString1 if success, -1 if error  Data<a href=\"http://www.benchmarkemail.com/models.htm#ArchiveData\">ArchiveData</a>Each element in the array contains the ID, Name, etc.      Response Model: ArchiveData
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
 * Get HTML for button  URL Parameters        Key  Required  Description          {{Mode}}  Required  ID of the button selected for archive(eg. 1,2,3,4,5,6,1000 etc)          Response body parameters        Key  Type  Description          Image  String  URL of the image      Status  Int  -1 if failure      
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
 * Update archieve home page data like Page Title ,logo,header,footer etc   Body Parameters (to be encoded as a JSON string)            Key   Required   Type               data   Required   <a href=http://www.benchmarkemail.com/models.htm#ArchiveHomePageData>ArchiveHomePageData</a>            Response body parameters            KeyTypeDescription         Data<a href=http://www.benchmarkemail.com/models.htm#ArchiveHomePageResult>ArchiveHomePageResult</a>Array   StatusString1 if success, -1 if error      
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
 * Add an email to archive page   Body Parameters (to be encoded as a JSON string)            Key   Required   Description               EmailID   Required   ID of the Email which want to add as archive            Response body parameters            KeyTypeDescription         Return valueString1 if success, -1 if error      
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
 * Update the archive email details like description,URL etc   Body Parameters (to be encoded as a JSON string)            Key   Required   Type               ArchiveID   Required   Archive ID         data   Required   <a href=http://www.benchmarkemail.com/models.htm#ArchiveData>ArchiveData</a>            Response body parameters            KeyTypeDescription         Errors<a href=http://www.benchmarkemail.com/models.htm#ErrorData>ErrorData</a>Array   StatusString1 if success, -1 if error      
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

