const mysql = require('mysql');


    let conn = mysql.createConnection({
        host:'35.224.253.108',
        user: 'root',
        password:'password',
        database:'myDB'
    });

    conn.connect();

    conn.query(`Drop Table Time`,
                (err,rows,fields) => {
                    if (err)
                        console.log(err);
                    else
                        console.log('Table Dropped');
                }
            )

conn.query(`Drop Table Preference`,
            (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('Table Dropped');
            }
        )

conn.query(`CREATE TABLE Time
(
    T1 varchar(50),
    T2 varchar(50),
    T3 varchar(50),
    T4 varchar(50),
    T5 varchar(50),
    T6 varchar(50),
    T7 varchar(50),
    T8 varchar(50),
    T9 varchar(50),
    T10 varchar(50)
)
`

, (err, rows,fields)=>{

    if(err)
    console.log(err)
    else 
    console.log('table created')
})

conn.query(`CREATE TABLE Preference
(
    name varchar(100),
    1pm varchar(50),
    2pm varchar(50),
    3pm varchar(50),
    4pm varchar(50),
    5pm varchar(50),
    6pm varchar(50),
    7pm varchar(50),
    8pm varchar(50),
    9pm varchar(50),
    10pm varchar(50)
)
`

, (err, rows,fields)=>{

    if(err)
    console.log(err)
    else 
    console.log('table created')
})


conn.query( `insert into Time values (0,1,2,3,5,6,7,8,9,10)`
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('One row inserted');
            });

conn.query( `insert into Preference values ('Example entry','false','false','false','false','false','false','false','false','false','false')`
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('One row inserted');
            });
    conn.end();