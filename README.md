# Cloudflare Email Protection decode

A script that decodes the email protection format used by Cloudflare. It takes a hash and decodes it to the original email address.

I made this in 5 minutes by looking into the [`email-decode.min.js`](https://www.cloudflare.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js) file.

## Where can I find the hash?

The hash is a string that you can pass in the script. It's available in two formats:
- Directly in the link URL: `/cdn-cgi/l/email-protection#.......`
- As a `data-cfemail` attribute in the HTML: 
  ```html
  <a href="/cdn-cgi/l/email-protection" data-cfemail=".......">[email protected]</a>
  ```
  
Of course, search for it in the HTML source code.