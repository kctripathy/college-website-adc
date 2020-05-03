import moment from "moment";

export default function titleCase(str) {
  if (str === undefined || str.length === 0) return "";
  str = str.replace(/-/g).toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

function upperCase(str) {
  str = str.toUpperCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

function isAnImage(str) {
  //debugger;
  if (str === undefined || str.length === 0) return false;

  if (
    str.toLowerCase().includes("jpg") ||
    str.toLowerCase().includes("jpeg") ||
    str.toLowerCase().includes("png")
  )
    return true;
  else return false;
}

function isPDF(str) {
  if (str === undefined || str.length === 0) return false;

  if (str.toLowerCase().includes("pdf")) return true;
  else return false;
}

function isDocument(str) {
  if (str === undefined || str.length === 0) return false;
  if (str.toLowerCase().includes("doc") || str.toLowerCase().includes("docx"))
    return true;
  else return false;
}

const getCurrentDate_YYYY_MM_DD = () => {
  // var today = new Date();
  // var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  // return date;

  var MyDate = new Date();
  var MyDateString;

  //MyDate.setDate(MyDate.getDate() + 20);

  // MyDateString = ('0' + MyDate.getDate()).slice(-2) + '/'
  //     + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '/'
  //     + MyDate.getFullYear();

  MyDateString =
    MyDate.getFullYear() +
    "-" +
    ("0" + (MyDate.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + MyDate.getDate()).slice(-2);

  return MyDateString;

  //To explain, .slice(-2) gives us the last two characters of the string.
  // So no matter what, we can add "0" to the day or month, and just ask for the last two since those are always the two we want.

  // So if the MyDate.getMonth() returns 9, it will be:
  // ("0" + "9") // Giving us "09"

  // so adding .slice(-2) on that gives us the last two characters which is:
  // ("0" + "9").slice(-2)
  // "09"
  // But if MyDate.getMonth() returns 10, it will be:

  // ("0" + "10") // Giving us "010"
  // so adding .slice(-2) gives us the last two characters, or:

  // ("0" + "10").slice(-2)
  // "10"
};

const getCurrentDate = () => {
  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  return date;
};

const getCurrentDate_MMDDYYYY = () => {
  var today = new Date();
  var date =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  return date;
};

const getCurrentDateTime = () => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  return dateTime;
};

const getFileSize = (size) => {
  //const OneMB = 1024 * 1024;
  var ReturnValue = "";
  if (size > 1024 * 1024) {
    ReturnValue = ` ${(size / (1024 * 1024)).toFixed(2)} MB`;
  } else {
    ReturnValue = `${(size / 1024).toFixed(2)} KB`;
  }
  return ReturnValue;
};

function alphaOnly(event) {
  if (!/^[a-z A-Z]*$/.test(event.key)) {
    // alert("Please enter alphabet only");
    event.preventDefault();
  }
}

function alphaNumOnly(event) {
  if (/[^0-9a-zA-Z]/.test(event.key)) {
    event.preventDefault();
  }
}

function objectHasKey(obj, key) {
  if (
    obj !== undefined &&
    obj !== null &&
    Object.keys(obj).length > 0 &&
    obj.hasOwnProperty(key)
  ) {
    return true;
  }
  return false;
}

function objectHasKeys(obj) {
  if (obj !== undefined && obj !== null && Object.keys(obj).length > 0) {
    return true;
  }
  return false;
}

function validateEmail(emailField) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(emailField.value)) {
    return false;
  }
  return true;
}

function arrayNotNull(array) {
  if (
    array !== undefined &&
    array !== null &&
    Array.isArray(array) &&
    array.length > 0
  ) {
    return true;
  }
  return false;
}

function notNull(data) {
  if (data !== undefined && data !== null && data !== "") {
    return true;
  }
  return false;
}

function defaultDate(date) {
  return moment(date).format("DD/MM/YYYY");
}

function defaultDateTime(date) {
  return moment(date).format("DD/MM/YYYY: hh:mm A");
}

export {
  alphaNumOnly,
  alphaOnly,
  objectHasKey,
  objectHasKeys,
  validateEmail,
  arrayNotNull,
  notNull,
  defaultDate,
  defaultDateTime,
  upperCase,
  getCurrentDate,
  getCurrentDateTime,
  getCurrentDate_MMDDYYYY,
  getCurrentDate_YYYY_MM_DD,
  isDocument,
  isPDF,
  isAnImage,
  getFileSize,
};
