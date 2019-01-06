encrypt-cli
===========

Simple CLI for encrypting files using node.js Crypto library.

*Primary Use Case*: Quickly and easily encrypting and decrypting text files.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/encrypt-cli.svg)](https://npmjs.org/package/encrypt-cli)
[![Downloads/week](https://img.shields.io/npm/dw/encrypt-cli.svg)](https://npmjs.org/package/encrypt-cli)
[![License](https://img.shields.io/npm/l/encrypt-cli.svg)](https://github.com/christroutner/encrypt-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g encrypt-cli
$ encrypt-cli COMMAND
running command...
$ encrypt-cli (-v|--version|version)
encrypt-cli/v1.0.0 linux-x64 node-v10.14.0
$ encrypt-cli --help [COMMAND]
USAGE
  $ encrypt-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`encrypt-cli hello`](#encrypt-cli-hello)
* [`encrypt-cli help [COMMAND]`](#encrypt-cli-help-command)

## `encrypt-cli hello`

Describe the command here

```
USAGE
  $ encrypt-cli hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/christroutner/encrypt-cli/blob/vv1.0.0/src/commands/hello.js)_

## `encrypt-cli help [COMMAND]`

display help for encrypt-cli

```
USAGE
  $ encrypt-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_
<!-- commandsstop -->
