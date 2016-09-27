#!/usr/bin/env node

require('electron-apis')('1.2.5').then(function (apis) {
  process.stdout.write(JSON.stringify(apis, null, 2))
  process.exit()
})
