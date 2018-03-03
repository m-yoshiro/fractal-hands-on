module.exports = {
  transforms: {
    DIRTREE(content, options) {
      return require('markdown-magic-directory-tree');
    }
  },
  callback: function () {
    console.log('done')
  }
}