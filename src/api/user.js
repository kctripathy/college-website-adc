import { API_URL } from '../config';

/******************************************************************
 *  This method will allow users to login to the application
 *****************************************************************/
export const login = (user) => {
    const url = `${API_URL}/user/login`;

    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            //console.log('response=', response);
            //debugger;
            return response.clone().json()
        })
        .catch(err => {
            console.log(err)
        })
};

/******************************************************************
 * 
 * @param {*} next 
 *****************************************************************/
export const logout = (next) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem('accessToken');
        next();
        //   fetch(`${API_URL}/users/logout`, {
        //      method: "GET"
        //   })
        //      .then(response => {
        //         console.log(response);
        //      })
        //      .catch(err => {
        //         console.log(err);
        //      })
    }
};
/*****************************************************************
 * This method will set the local storage after successful login
 * @param {*} data 
 * @param {*} next 
 *****************************************************************/
export const authenticate = (data, next) => {
    //debugger;
    if (typeof window !== "undefined") {
        localStorage.setItem('accessToken', JSON.stringify(data));
        next();
    }
};

/*****************************************************************
* This method will check if user has logged into the system or not
****************************************************************/
export const isAuthenticated = () => {
    if (typeof window === "undefined") {
        return false;
    }
    //debugger;
    if (localStorage.getItem('accessToken')) {
        var user = JSON.parse(localStorage.getItem('accessToken'));
        return user;
    }
    else {
        return false;
    }
}


/*****************************************************************
* This method will check if user has logged into the system as admin
****************************************************************/
export const isAdmin = () => {
    if (typeof window === "undefined") {
        return false;
    }
    //debugger;
    if (localStorage.getItem('accessToken')) {
        var user = JSON.parse(localStorage.getItem('accessToken'));
        if (user.accessLevel === 10)
            return user
        else
            return false;
    }
    else {
        return false;
    }
};
//===================================
// loadUsers
//===================================
export const loadAllUsers = () => {
    const { accountId } = isAuthenticated();;
    let url = `${API_URL}/users/all?accountId=${accountId}`;
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
// changePassword
//===================================
export const changePassword = (user) => {
    const url = `${API_URL}/user/changePassword`;

    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            //console.log('response=', response);
            //debugger;
            return response.json()
        })
        .catch(err => {
            console.log(err)
            return err;
        })
};


//===================================
// changePassword
//===================================
export const forgotPassword = (user) => {
    const url = `${API_URL}/user/forgotPassword`;

    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            //console.log('response=', response);
            //debugger;
            return response.json()
        })
        .catch(err => {
            console.log(err)
            return err;
        })
};



//===================================
// submitFeedback
//===================================
export const submitFeedback = (feedback) => {
    const url = `${API_URL}/user/submitFeedback`;
    debugger;
    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(feedback)
    })
        .then(response => {
            //console.log('response=', response);
            //debugger;
            return response.json()
        })
        .catch(err => {
            console.log(err)
            return err;
        })
};

//===================================
// addEstablishment
//===================================
export const addEstablishment = (userid, estb) => {
    const url = `${API_URL}/establishment/add/${userid}`;
    //debugger;
    console.log("addEstablishment=> estb", estb);
    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(estb)
    })
        .then(response => {
            //console.log('response=', response);
            //debugger;
            return response.json()
        })
        .catch(err => {
            console.log(err)
            return err;
        })
};


//===================================
// updateEstablishments
//===================================
export const updateEstablishments = (establishments) => {
    const url = `${API_URL}/establishments/update`;
    //debugger;
    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(establishments)
    })
        .then(response => {
            //console.log('response=', response);
            //debugger;
            return response.json()
        })
        .catch(err => {
            console.log(err)
            return err;
        })
};

//===================================
// editEstablishmentRecord
//===================================
export const editEstablishmentRecord = (establishment) => {
    const url = `${API_URL}/establishment/edit`;
    //debugger;
    console.log("editEstablishmentRecord > establishment=", establishment)
    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(establishment)
    })
        .then(response => {
            //console.log('response=', response);
            //debugger;
            return response.json()
        })
        .catch(err => {
            console.log(err)
            return err;
        })
};