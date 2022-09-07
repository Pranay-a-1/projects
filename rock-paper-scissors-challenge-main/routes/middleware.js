const middleware = (req, res, next) => {
    req.playerName = req.body.playerName;
    next();
};

export default middleware;