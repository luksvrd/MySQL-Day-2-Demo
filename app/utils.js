// This is a utility funciton we can use w a PREPARED STATE<EMT to ...
// export const selectStar = (connection, tableName) =>
// This is a prepared statement which is better for SQL, a 'fill in the blank' Q
// conn.query("SELECT * FROM ?", [tableName]);

// This is a utility function that we can use with a PREPARED STATEMENT to...
export const selectStar = (connection, tableName) =>
  connection.execute(`SELECT * FROM ${tableName}`);

export const delById = ({ connection, tableName, id }) => {
  connection.execute(`DELETE FROM ${tableName} WHERE id = ?`, [id]);
};
