cli-encrypt
===========

Simple CLI for encrypting files using node.js Crypto library.

*Primary Use Case*: Quickly and easily encrypting and decrypting text files.

[NPM package](https://www.npmjs.com/package/cli-encrypt)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli-encrypt.svg)](https://npmjs.org/package/cli-encrypt)
[![Downloads/week](https://img.shields.io/npm/dw/cli-encrypt.svg)](https://npmjs.org/package/cli-encrypt)
[![License](https://img.shields.io/npm/l/cli-encrypt.svg)](https://github.com/christroutner/cli-encrypt/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli-encrypt
$ cli-encrypt COMMAND
running command...
$ cli-encrypt (-v|--version|version)
cli-encrypt/v1.0.0 linux-x64 node-v10.14.0
$ cli-encrypt --help [COMMAND]
USAGE
  $ cli-encrypt COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cli-encrypt decrypt`](#cli-encrypt-decrypt)
* [`cli-encrypt encrypt`](#cli-encrypt-encrypt)
* [`cli-encrypt help [COMMAND]`](#cli-encrypt-help-command)

## `cli-encrypt decrypt`

Decrypt a file

```
USAGE
  $ cli-encrypt decrypt

OPTIONS
  -n, --name=name  name of file
  -p, --pass=pass  encryption password

DESCRIPTION
  ...
  example: cli-encrypt decrypt -n <filename> -p <password>
```

_See code: [src/commands/decrypt.js](https://github.com/christroutner/cli-encrypt/blob/vv1.0.0/src/commands/decrypt.js)_

## `cli-encrypt encrypt`

Encrypt a file

```
USAGE
  $ cli-encrypt encrypt

OPTIONS
  -n, --name=name  name of file
  -p, --pass=pass  encryption password

DESCRIPTION
  ...
  example: cli-encrypt encrypt -n <filename> -p <password>
```

_See code: [src/commands/encrypt.js](https://github.com/christroutner/cli-encrypt/blob/vv1.0.0/src/commands/encrypt.js)_

## `cli-encrypt help [COMMAND]`

display help for cli-encrypt

```
USAGE
  $ cli-encrypt help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_
<!-- commandsstop -->
