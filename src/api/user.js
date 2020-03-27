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
