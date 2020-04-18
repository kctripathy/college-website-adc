export default function titleCase(str) {
    str = str.replace(/-/g).toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function upperCase(str) {
    str = str.toUpperCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function isAnImage(str) {
    // str = str.toUpperCase().split('.');
    // for (var i = 0; i < str.length; i++) {
    //     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    // }
    // return str.join(' ');
    if (str.toLowerCase().includes('jpg') || str.toLowerCase().includes('jpeg') || str.toLowerCase().includes('png'))
        return true;
    else
        return false;
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

    MyDateString = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);

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
}

const getCurrentDate = () => {
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    return date;
}

const getCurrentDate_MMDDYYYY = () => {
    var today = new Date();
    var date = (today.getMonth() + 1) + "/" + today.getDate() + '/' + today.getFullYear();
    return date;
}

const getCurrentDateTime = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}
export { upperCase, getCurrentDate, getCurrentDateTime, getCurrentDate_MMDDYYYY, getCurrentDate_YYYY_MM_DD, isAnImage }