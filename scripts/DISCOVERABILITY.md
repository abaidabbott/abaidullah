# Search and browser-agent discoverability

The homepage includes public profile text in the initial HTML, which React replaces with the interactive portfolio. Keep that text, index.html Person structured data, public/profile.json and the visible portfolio consistent when updating the profile.

public/webmcp.js registers get_abaid_ullah_profile using document.modelContext when available. It returns only public profile data and performs no contact submissions. This is browser WebMCP, not a hosted MCP server or a search submission service. Browser support and experimental enablement vary. Unsupported browsers continue normally.

Validation: npm run build and node --test scripts/webmcp.test.mjs. On a WebMCP-enabled browser, inspect the tool in Chrome DevTools' WebMCP panel and execute it. Automated tests use a mocked API; they do not verify a native browser integration.

After deployment:
1. Verify the homepage, /robots.txt, /sitemap.xml and /profile.json return HTTP 200 without authentication or bot challenges.
2. Verify domain ownership in Google Search Console and Bing Webmaster Tools; submit https://abaidbutt.website/sitemap.xml and request homepage indexing.
3. Check the homepage with Google's Rich Results Test or Schema Markup Validator and Search Console URL Inspection.
4. Keep the official website linked from the existing GitHub and LinkedIn profiles.

robots.txt currently allows all crawlers, including Googlebot, Claude-SearchBot and Claude-User. Hosting/CDN controls can still block them. Neither crawl access, structured data nor WebMCP guarantees indexing or appearance in Google, Gemini, Claude or other AI answers.

References:
- https://developer.chrome.com/docs/ai/webmcp/imperative-api
- https://developers.google.com/search/docs/essentials/technical
- https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
