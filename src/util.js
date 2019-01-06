/*
  A utility library of common functions.
*/

'use strict'

const fs = require('fs')

module.exports = {
  readFile,
  saveFile,
}

// Save data to a file.
// Returns a promise that resolves when the write is complete.
function saveFile(filename, outStr) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, outStr, function (err) {
      if (err) return reject(err)

      // console.log(`${name}.json written successfully.`)
      return resolve()
    })
  })
}

// Read data from a file
// Returns a promise that resolves to a Buffer containing the data in the file.
// For a text file, be sure to run data.toString() after reading the data.
function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, function (err, data) {
      if (err) return reject(err)

      return resolve(data)
    })
  })
}
