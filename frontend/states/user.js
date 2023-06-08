let user = {};
const setUserState = (newUser) => {
    user = newUser
}
const getUserState = () => {
    // console.log(user)
    return user
}

export { setUserState, getUserState }