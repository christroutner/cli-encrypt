/*
*/

'use strict'

const assert = require('chai').assert
const lib = require('../../src/util')

// Inspect utility used for debugging.
const util = require('util')
util.inspect.defaultOptions = {
  showHidden: true,
  colors: true,
  depth: 1,
}

describe('util', () => {
  describe('saveFile', () => {
    it('should save data to a file', async () => {
      const filename = 'testfile.txt'
      const data = 'This is test data.\n'

      await lib.saveFile(filename, data)
    })
  })

  describe('readFile', () => {
    it('should read data from a file', async () => {
      const filename = 'testfile.txt'

      const data = await lib.readFile(filename)
      // console.log(data.toString())

      assert.include(data.toString(), 'This is test data')
    })
  })
})
