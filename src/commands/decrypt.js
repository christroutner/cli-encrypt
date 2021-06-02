const {Command, flags} = require('@oclif/command')
const crypto = require('crypto')
const lib = require('../util')

let ENCRYPTION_PASSWORD

class Decrypt extends Command {
  async run() {
    try {
      const {flags} = this.parse(Decrypt)

      // Validate the input arguments are valid before doing any processing.
      this.validateFlags(flags)

      // Decrypt the file.
      await this.decryptFile(flags)
    } catch (error) {
      if (error.message) this.log(error.message)
      else console.log('Error in UpdateBalances.run: ', error)
    }
  }

  // Decrypt a file based on the data passed in with the flags.
  async decryptFile(flags) {
    try {
      // Read in the data from the file.
      const data = await lib.readFile(flags.name)
      // console.log(`encrypted data: ${data.toString()}`)

      // Encrypt the data in the file.
      let newData = this.decrypt(data.toString())
      // console.log(`decrypted data: ${newData}`)

      // If binary, convert the decrypted hex into a binary Buffer.
      if (flags.binary) {
        newData = Buffer.from(newData, 'hex')
      }

      // Overwrite the exiting file with the encrypted data.
      await lib.saveFile(flags.name, newData)
    } catch (error) {
      console.log('Error in encrypt.js/decryptFile()')
      throw error
    }
  }

  // Encrypt and return some data.
  decrypt(data) {
    try {
      // Generate an initialization vector.
      const iv = 'abcdefghijklmnop'

      // Hash the password into a 32 byte string.
      const hash = crypto.createHash('md5')
      hash.update(ENCRYPTION_PASSWORD)
      const key = hash.digest('hex')
      // console.log(`hashed password: ${key}`)

      // Encrypt the input string.
      var decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
      var decrypted = decipher.update(data, 'hex', 'utf8')
      decrypted += decipher.final('utf8')

      return decrypted
    } catch (error) {
      console.log('Error in encrypt.js/decrypt()')
      throw error
    }
  }

  // Validate the proper flags are passed in.
  validateFlags(flags) {
    // Exit if wallet not specified.
    const name = flags.name
    if (!name || name === '')
      throw new Error('You must specify a filename with the -n flag.')

    const pass = flags.pass
    if (!pass || pass === '' || process.env.ENCRYPTION_PASSWORD === 'undefined')
      throw new Error(
        'ENCRYPTION_PASSWORD environment variable or password with the -p flag is required.'
      )

    if (process.env.ENCRYPTION_PASSWORD)
      ENCRYPTION_PASSWORD = process.env.ENCRYPTION_PASSWORD
    if (pass) ENCRYPTION_PASSWORD = pass

    return true
  }
}

Decrypt.description = `Decrypt a file
...
example: cli-encrypt decrypt -n <filename> -p <password>
`

Decrypt.flags = {
  name: flags.string({char: 'n', description: 'name of file'}),
  pass: flags.string({char: 'p', description: 'encryption password'}),
  binary: flags.boolean({
    char: 'b',
    description: 'Signals the input is a binary file',
  }),
}

module.exports = Decrypt
