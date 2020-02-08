const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/DamnStraight/damnstraight.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)