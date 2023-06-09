const path = require('path')

module.exports = {
  packagerConfig: {
    icon: path.join(__dirname, 'icon.png'),
    debiarPackageDependencies: ['libgtk2.0.0'],
    packageManager: 'apt'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
}
