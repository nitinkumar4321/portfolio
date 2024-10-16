### Deployed to Cloudflare Pages

```bash
# Install NOT NEEED, we can use npx 
#Install Wrangler CLI
npm install -g wrangler

#Or use instead of intalling globally
npx wrangler whoami

# Login to Cloudflare account from CLI
npx wrangler login

# Run your build command
npm run build

# Create new deployment
npx wrangler pages deploy dist
```

Url of deployed site: [Cloudflare](myresume-ddx.pages.dev) [My custom site](info.kumarnit.in)

## Bugs
- In mobile view `Name` is hidden by navbar
- In desktop view navbar clicks are not scrolling properly

## TODO
- Add projects
- Update skills section with better looks