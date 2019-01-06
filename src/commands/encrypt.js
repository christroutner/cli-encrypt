const {Command, flags} = require('@oclif/command')
const crypto = require('crypto')
const lib = require('../util')

let ENCRYPTION_PASSWORD

class Encrypt extends Command {
  async run() {
    try {
      const {flags} = this.parse(Encrypt)

      // Validate the input arguments are valid before doing any processing.
      this.validateFlags(flags)

      // Encrypt the file.
      await this.encryptFile(flags)
    } catch (error) {
      if (error.message) this.log(error.message)
      else console.log('Error in UpdateBalances.run: ', error)
    }
  }

  // Encrypt a file based on the data passed in with the flags.
  async encryptFile(flags) {
    try {
      // Read in the data from the file.
      const data = await lib.readFile(flags.name)
      // console.log(`unencrypted data: ${data.toString()}`)

      // Encrypt the data in the file.
      const newData = this.encrypt(data)
      // console.log(`encrypted data: ${newData}`)

      // Overwrite the exiting file with the encrypted data.
      await lib.saveFile(flags.name, newData)
    } catch (error) {
      console.log('Error in encrypt.js/encryptFile()')
      throw error
    }
  }

  // Encrypt and return some data.
  encrypt(data) {
    try {
      // Generate an initialization vector.
      const iv = 'abcdefghijklmnop'

      // Hash the password into a 32 byte string.
      const hash = crypto.createHash('md5')
      hash.update(ENCRYPTION_PASSWORD)
      const key = hash.digest('hex')
      // console.log(`hashed password: ${key}`)

      // Encrypt the input string.
      var cipher = crypto.createCipheriv('aes-256-cbc', key, iv)
      var crypted = cipher.update(data, 'utf8', 'hex')
      crypted += cipher.final('hex')

      return crypted
    } catch (error) {
      console.log('Error in encrypt.js/encrypt()')
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

Encrypt.description = `Encrypt a file
...
example: cli-encrypt encrypt -n <filename> -p <password>
`

Encrypt.flags = {
  name: flags.string({char: 'n', description: 'name of file'}),
  pass: flags.string({char: 'p', description: 'encryption password'}),
}

module.exports = Encrypt
