const meta = {
  // Metadata
  siteTitle: 'Vikram Kumar - Creative Full Stack Engineer',
  siteDescription:
    'A skilled and enthusiastic developer from India with expertise in both Java and the MERN stack.',
  siteTitleAlt: 'Vikram Kumar',
  siteShortName: 'Vikram Kumar',
  siteUrl: 'https://myportfoliovikram.gatsbyjs.io/', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@vikramkbgs',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'vikramkbgs',
  googleAnalyticsID: 'G-FH7Y01CCF3',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
