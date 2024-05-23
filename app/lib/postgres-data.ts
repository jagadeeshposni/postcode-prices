import { sql } from '@vercel/postgres';
import { createClient } from '@vercel/postgres';
const { Pool } = require('pg');

import {
  PriceData,
  SampleType,
} from './definitions';

// export async function getPriceData(postcode: string,
//   currentPage: number,
// ): Promise<PriceData[]> {
//   const client = await pool.connect();
//   try {
//     const result = await client.query<PriceData>(
//       `SELECT DATE_TRUNC('year', transfer_date) AS year, AVG(price) AS average_price
//        FROM price_paid_complete
//        WHERE postcode LIKE $1 || '%'
//        AND property_type != 'O'
//        GROUP BY year
//        ORDER BY year`,
//       [postcode]
//     );
//     //log count of rows
//     const priceData = result.rows.map((row) => ({
//       ...row,
//       average_price: parseFloat(row.average_price).toFixed(2),
//     }));

//     // log number of elements in priceData
//     return priceData;
//   } catch (err) {
//     console.error('Error executing query', err);
//     throw err;
//   } finally {
//     client.release();
//   }
// }

export async function fetchSampleData(query: string) {
  const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  });
  try {
    //retain type from query

    const data = await pool.query(`
    SELECT 
    TO_CHAR(DATE_TRUNC('year', transfer_date), 'YYYY') AS transfer_date,
    ROUND(AVG(CASE WHEN property_type = 'T' THEN price ELSE NULL END))::INTEGER AS terraced_houses_average_price,
    ROUND(AVG(CASE WHEN property_type = 'S' THEN price ELSE NULL END))::INTEGER AS semi_detached_houses_average_price,
    ROUND(AVG(CASE WHEN property_type = 'D' THEN price ELSE NULL END))::INTEGER AS detached_houses_average_price,
    ROUND(AVG(CASE WHEN property_type = 'F' THEN price ELSE NULL END))::INTEGER AS flats_average_price
    FROM 
        sample
    WHERE
        postcode like $1 || '%'
    GROUP BY 
        DATE_TRUNC('year', transfer_date)
    ORDER BY 
        transfer_date;
      `, [query]);

    // log count of rows in data
    console.debug("Data rowcount: " + data.rowCount);



    console.log("Sample data: ", data.rows);
    return data.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch SAMPLE table.');
  }
}