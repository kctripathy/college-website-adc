import { API_URL } from '../config';

//===================================
// load All Menu Items
//===================================
export const getAllMenuItems = () => {
    //const { accountId } = isAuthenticated();;

    //debugger;
    let url = `${API_URL}/webmenu`;
    return fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return (err)
        })
};

//===================================
// loadAllEstablishments
//===================================
export const loadAllEstablishments = () => {
    let url = `${API_URL}/establishments`;
    return fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return (err)
        })
};


//===================================
// Students
//===================================
export const loadAllStudents = () => {
    let url = `${API_URL}/students`;
    return fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return (err)
        })
};


//===================================
// Staffs
//===================================
export const loadAllStaffs = () => {
    //debugger;
    let url = `${API_URL}/staffs`;
    return fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return (err)
        })
};

//===================================
// Books
//===================================
export const loadAllBooks = () => {
    //debugger;
    let url = `${API_URL}/library`;
    return fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return (err)
        })
};


