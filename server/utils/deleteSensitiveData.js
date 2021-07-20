module.exports = (user) => {
    const copy = JSON.parse(JSON.stringify(user));
    delete copy.password;
    return copy;
};