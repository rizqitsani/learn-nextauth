/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://learn-nextauth.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
