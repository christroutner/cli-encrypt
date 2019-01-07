/*
*/

'use strict'

const assert = require('chai').assert
const Encrypt = require('../../src/commands/encrypt')

// Inspect utility used for debugging.
const util = require('util')
util.inspect.defaultOptions = {
  showHidden: true,
  colors: true,
  depth: 1,
}

describe('encrypt', () => {
  describe('validateFlags()', () => {
    it('should throw error if filename is not supplied', async () => {
      try {
        const encrypt = new Encrypt()
        await encrypt.validateFlags({})
      } catch (error) {
        assert.include(
          error.message,
          'You must specify a filename with the -n flag',
          'Expected error message.'
        )
      }
    })

    it('should throw error if ENCRYPTION_PASSWORD is not specified', async () => {
      try {
        const encrypt = new Encrypt()
        await encrypt.validateFlags({name: 'test'})
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

      const encrypt = new Encrypt()
      const result = encrypt.validateFlags(obj)

      assert.equal(result, true)
    })
  })

  describe('encrypt()', () => {
    it('should return an encrypted string', () => {
      const data = 'test data'

      const encrypt = new Encrypt()

      const result = encrypt.encrypt(data)
      // console.log(`result: ${result}`)

      assert.equal(result, 'ea9a985e2d0082f9f2fbff97bed6c14c')
    })
  })

  describe('encryptFile()', () => {
    it('should encrypt data in the test file', async () => {
      const flags = {
        name: 'testfile.txt',
      }

      const encrypt = new Encrypt()

      await encrypt.encryptFile(flags)
    })
  })
})
