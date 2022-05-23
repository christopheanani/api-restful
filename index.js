const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// MySQL
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'nodejs_etudiant',
})

//  Get all student
app.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query ( 'SELECT * from info_etudiant', (err, rows) => {
            connection.release() //return the connection to pool

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
})
})




//  Get a student by ID
app.get('/:id', (req, res) => {
    
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query ( 'SELECT * from info_etudiant WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() //return the connection to pool

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
})
})


//  Delete a records / student
app.delete('/:id', (req, res) => {
    
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query ( 'DELETE from info_etudiant WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() //return the connection to pool

            if (!err) {
                res.send(`Student with the ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
})
})

//  Add a records / beer
app.post('', (req, res) => {
    
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query ( 'INSERT INTO info_etudiant SET ?', params , (err, rows) => {
            connection.release() //return the connection to pool

            if (!err) {
                res.send(`Student with the ID: ${params.first_name} has been added.`)
            } else {
                console.log(err)
            }

        })
        console.log(req.body)
})
})

//  Update a record / student
app.put('', (req, res) => {
    
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { id, first_name, last_name, filiere } = req.body

        connection.query ( 'UPDATE info_etudiant SET first_name = ?, last_name = ?, filiere = ? = ? WHERE id = ?', [first_name, last_name, filiere, id], (err, rows) => {
            connection.release() //return the connection to pool

            if (!err) {
                res.send(`Student with the  name: ${first_name} has been updated.`)
            } else {
                console.log(err)
            }

        })
        console.log(req.body)
})
})




// Listen on environment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))