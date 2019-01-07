/*
*/

'use strict'

const assert = require('chai').assert
const Decrypt = require('../../src/commands/decrypt')

// Inspect utility used for debugging.
const util = require('util')
util.inspect.defaultOptions = {
  showHidden: true,
  colors: true,
  depth: 1,
}

describe('decrypt', () => {
  describe('validateFlags()', () => {
    it('should throw error if filename is not supplied', async () => {
      try {
        const decrypt = new Decrypt()
        await decrypt.validateFlags({})
      } catch (error) {
        assert.include(
          error.message,
          'You must specify a filename with the -n flag',
          'Expected error message.'
        )
      }
    })

    it('should throw error if ENCRYPION_PASSWORD is not specified', async () => {
      try {
        const decrypt = new Decrypt()
        await decrypt.validateFlags({name: 'test'})
      } catch (error) {
        // console.log(error)
        assert.include(
          error.message,
          'ENCRYPTION_PASSWORD environment variable or password with the -p flag is required.',
          'Expected error message.'
        )
      }
    })

    it('should return true with valid flags', () => {
      const obj = {
        name: 'test',
        pass: 'test',
      }

      const decrypt = new Decrypt()
      const result = decrypt.validateFlags(obj)

      assert.equal(result, true)
    })
  })

  describe('decrypt()', () => {
    it('should return an decrypted string', () => {
      const data = 'ea9a985e2d0082f9f2fbff97bed6c14c'

      const decrypt = new Decrypt()

      const result = decrypt.decrypt(data)
      // console.log(`result: ${result}`)

      assert.equal(result, 'test data')
    })
  })
/*
  describe('decryptFile()', () => {
    it('should decrypt data in the test file', async () => {
      const flags = {
        name: 'testfile.txt',
      }

      const decrypt = new Decrypt()

      await decrypt.decryptFile(flags)
    })
  })
*/
})
