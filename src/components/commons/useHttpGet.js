import { API_URL } from '../../config';

import { useState, useEffect } from 'react';

export const useHttpGet = (methodName) => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]);

    const url = `${API_URL}/${methodName}`;
    //debugger;
    useEffect(() => {
        //console.log(url);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('failed to fetch');
                }
                return response.json()
            })
            .then(data => {
                debugger;
                setIsLoading(false);
                setFetchedData(data);
            })
            .catch(err => {
                console.log(err);
                //debugger;
                setIsLoading(false);
                setFetchedData([]);
            })
    }, []);

    return [isLoading, fetchedData];
};


// export const useHttpPost = (methodName, inputData) => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [returnResult, setReturnResult] = useState([]);
//     const url = `${API_URL}/${methodName}`;
//     fetch(url, {
//         method: "POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(inputData)
//     })
//         .then(response => response.json())
//         .then(data => {
//             setIsLoading(false);
//             setReturnResult(data);
//         })
//         .catch(err => {
//             setIsLoading(false);
//             setReturnResult([]);
//         })

//     return [isLoading, returnResult];
// };


