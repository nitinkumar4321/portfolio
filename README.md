# Deployed On
- [My Portfolio](info.kumarnit.in)
- [Cloudflare](myresume-ddx.pages.dev) 

## Updated to include CI/CD
- Added github workflow to publish changes to [Prod](info.kumarnit.in) on every push to git.

### Manual Deployment to Cloudflare Pages

```bash
# Install NOT NEEED, we can use npx 
#Install Wrangler CLI
# npm install -g wrangler

#Or use instead of intalling globally
npx wrangler whoami

# Login to Cloudflare account from CLI
npx wrangler login

# Run your build command
npm run build

# Create new deployment
npx wrangler pages deploy dist
```

## Bugs 
- In mobile view `Name` is hidden by navbar
- In desktop view navbar clicks are not scrolling properly

## TODO
- Add projects
- Update skills section with better looks