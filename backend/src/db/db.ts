import postgres from 'postgres';

const sql = postgres({
  host: 'localhost',
  database: 'coolcrags',
  username: 'postgres',
  password: 'tigrou',
});

export default sql;
