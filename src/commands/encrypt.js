const {Command, flags} = require('@oclif/command')
var crypto = require('crypto')

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
      await this.openFile(flags.name)
    } catch (error) {
      console.log('Error in encrypt.js/encryptFile()')
      throw error
    }
  }

  // Read in a file and return the contents.
  async openFile(filename) {
    try {

    } catch (error) {
      console.log('Error in encrypt.js/openFile()')
      throw error
    }
  }

  // Encrypt and return some data.
  encrypt(data) {
    try {
      var cipher = crypto.createCipher('aes-256-cbc', ENCRYPTION_PASSWORD)
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
      throw new Error('ENCRYPTION_PASSWORD environment variable or password with the -p flag is required.')

    if (process.env.ENCRYPTION_PASSWORD) ENCRYPTION_PASSWORD = process.env.ENCRYPTION_PASSWORD
    if (pass) ENCRYPTION_PASSWORD = pass

    return true
  }
}

Encrypt.description = `Describe the command here
...
Extra documentation goes here
`

Encrypt.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
  pass: flags.string({char: 'p', description: 'encryption password'}),
}

module.exports = Encrypt
