import format from "date";
import { query } from "some-sql-library";

const result = query("SELECT * FROM users");

console.log(result.rows);
console.log(result.count);

const formattedDate = format(new Date());

console.log(formattedDate);
