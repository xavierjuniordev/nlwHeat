const LinksSocialMedia = {
  github: 'xavierjuniordev',
  youtube: 'rocketseat',
  facebook: 'rocketseat',
  instagram: 'junior.xavier23',
  twitter: 'juniorx_95'
}

function chanceSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

chanceSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
}

getGitHubProfileInfos()
