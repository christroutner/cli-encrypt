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
})
