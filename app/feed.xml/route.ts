import { ROUTES } from '../AppRoutes'

export async function GET() {
  const baseUrl = 'https://daily-affirm.com'

  const posts = Object.entries(ROUTES.blogPosts)
    .map(([slug, post]) => ({ slug, ...post }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const rssItems = posts
    .map(
      post => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}${post.path}</link>
      <guid isPermaLink="true">${baseUrl}${post.path}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${post.category}</category>
    </item>`,
    )
    .join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Daily Affirmations Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Science-backed insights, practical guides, and tips for using daily affirmations effectively.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
