const notFound = (req, res) => res.status(404).send("Route cannot access");

module.exports = notFound;
