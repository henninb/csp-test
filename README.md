# CSP Test

A minimal Express.js server for testing Content Security Policy (CSP) headers and behavior. Serves static content with configurable CSP headers to observe how browsers enforce policies.

## Tech Stack

- Node.js / Express
- Vanilla HTML/CSS/JS frontend
- Deployable to Vercel (`vercel.json` included)

## Setup

```bash
npm install
```

## Usage

```bash
npm start
```

The server starts on the default port and serves `index.html` with CSP headers applied.

## Deployment

Deploy to Vercel:

```bash
vercel
```

## Related

- [csp-app](../csp-app) — More advanced CSP exploration with nonce and unsafe-inline modes
