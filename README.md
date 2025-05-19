# Multi-tenant SaaS with Next.js and Subdomain Routing

This project is a Next.js 14 application that supports multi-tenant websites using subdomain routing. It allows you to host multiple business websites under a single codebase, with each business having its own subdomain.

## Features

- **Subdomain-based routing**: Each business gets its own unique subdomain
- **Dynamic styling**: Businesses have custom theme colors and branding
- **Responsive design**: Fully responsive on all devices
- **Mock database**: Sample business data stored in JSON format
- **Contact form**: Lead generation for each business
- **Dynamic components**: Header, services, testimonials, and more

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/multi-tenant-nextjs.git
cd multi-tenant-nextjs
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

## Local Development

To test subdomains locally, you need to modify your hosts file to point subdomains to your localhost:

1. Edit your hosts file (`/etc/hosts` on Linux/Mac, `C:\Windows\System32\drivers\etc\hosts` on Windows)
2. Add entries for your test subdomains:
```
127.0.0.1 salon.localhost
127.0.0.1 ramplumber.localhost  
127.0.0.1 techhub.localhost
```

3. Access your site at `http://salon.localhost:3000`, `http://ramplumber.localhost:3000`, etc.

## Deployment

### Deploying to Vercel

This project is configured for deployment on Vercel with wildcard domains. To deploy:

1. Push your code to a Git repository
2. Import to Vercel
3. Add your primary domain (e.g., `yourdomain.com`) in the Vercel dashboard
4. Configure wildcard DNS with your domain provider:
   - Add a wildcard CNAME record: `*.yourdomain.com` pointing to `cname.vercel-dns.com`

### Alternative Deployment (VPS)

To deploy on a VPS:

1. Build the application:
```bash
npm run build
```

2. Configure your web server (Nginx, Apache) with wildcard subdomain support
3. Set up a wildcard SSL certificate (Let's Encrypt supports this)

## Adding New Business Tenants

To add a new business tenant:

1. Add a new entry to the `businesses.json` file
2. Follow the existing schema with:
   - Business name
   - Description
   - Theme colors
   - Logo type
   - Contact information
   - Services
   - Testimonials

## Roadmap

Future enhancements may include:

- Database integration (PostgreSQL, MongoDB, etc.)
- Admin dashboard for businesses
- Authentication system
- Custom domain support (beyond subdomains)
- Business-specific content management
- Analytics per tenant

## License

This project is licensed under the MIT License - see the LICENSE file for details