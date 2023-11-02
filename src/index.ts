import cp = require('child_process')
import fs = require('fs')
import p = require('path')

// Logger
const l = (msg: string): void => console.log(`h-com-linters - ${msg}`)

//npx command
const npx = (args: string[]): cp.SpawnSyncReturns<Buffer> =>
  cp.spawnSync('npx', args, { stdio: 'inherit', shell: true })

const notCopyWhenExistRule = /tsconfig\.json$/

export function install(dir = '.'): void {
  // Ensure that we're inside a git repository
  // If git command is not found, status is null and we should return.
  // That's why status value needs to be checked explicitly.
  if (npx(['husky', 'install']).status !== 0) {
    l(`npx command not found, skipping install`)
    return
  }

  try {
    fs.cp(
      p.join(__dirname, '../configs'),
      p.join(dir),
      {
        recursive: true,
        filter(source, destination) {
          if (notCopyWhenExistRule.test(source) && fs.existsSync(destination)) {
            l(
              'tsconfig.json already exists, if you want to use the file in h-com-linters, please delete it first',
            )
            return false
          }
          return true
        },
      },
      (err) => {
        if (err) {
          throw err
        }
      },
    )
  } catch (e) {
    l('h-com-linters failed to install')
    throw e
  }

  l('h-com-linters installed')
}

export function uninstall(): void {
  npx(['husky', 'uninstall'])
}
