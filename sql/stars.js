const { connector } = require('./connection.js');

function handleQuery(err, res) {
    if (err) { throw err; }
    console.log("GOT THE RES", res);
}


function getStars() {
    query = 'SELECT * FROM stars;'
    const res = connector.query(query, handleQuery);
}

module.exports = { getStars: getStars }