var connect;

function main(c) {
    connect = c;
    return request;
}

function request(table, columns, callback) {
    client = connect();

    client.query(`SELECT ${columns.join(",")} FROM ${table}`, (err, res) => {
        if (err) throw err;
        client.end();
        callback(res.rows);
    });
}
module.exports = main;