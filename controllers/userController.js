function getUserInfo(req, res) {
    const userData = {
        name: req.decoded.name,
        email: req.decoded.email
    };
    res.json(userData);
}

export { getUserInfo };
