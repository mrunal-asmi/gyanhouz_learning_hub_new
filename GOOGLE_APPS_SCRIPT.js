/**
 * Google Apps Script to handle form submissions from GYANHOUZ website.
 * 
 * Instructions:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1UqsidDV420H2WDbilFXBuEhTVPOxhIFcTnf0YwQEkr0/edit
 * 2. Go to Extensions > Apps Script.
 * 3. Delete any existing code and paste this code.
 * 4. Click "Deploy" > "New deployment".
 * 5. Select type "Web app".
 * 6. Set "Execute as" to "Me".
 * 7. Set "Who has access" to "Anyone".
 * 8. Click "Deploy" and copy the "Web app URL".
 * 9. Add this URL to your .env file as NEXT_PUBLIC_GOOGLE_SCRIPT_URL.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Get headers from the first row
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    // If sheet is empty, create headers from data keys
    if (sheet.getLastRow() === 0 || headers[0] === "") {
      headers = ["Timestamp", "Form Type"];
      for (var key in data) {
        if (headers.indexOf(key) === -1) {
          headers.push(key);
        }
      }
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    
    // Prepare row data
    var row = headers.map(function(header) {
      if (header === "Timestamp") return new Date().toLocaleString();
      if (header === "Form Type") return data.formType || "Unknown";
      return data[header] || "";
    });
    
    // Check if there are new keys in data not in headers
    var newHeadersFound = false;
    for (var key in data) {
      if (key !== "formType" && headers.indexOf(key) === -1) {
        headers.push(key);
        newHeadersFound = true;
      }
    }
    
    if (newHeadersFound) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      // Re-map row with new headers
      row = headers.map(function(header) {
        if (header === "Timestamp") return new Date().toLocaleString();
        if (header === "Form Type") return data.formType || "Unknown";
        return data[header] || "";
      });
    }
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Google Apps Script is running. Use POST to submit data.");
}
