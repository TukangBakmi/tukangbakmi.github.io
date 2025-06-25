# EmailJS Setup for GitHub Pages

## Why EmailJS?
- Works with GitHub Pages (no backend needed)
- Free tier: 200 emails/month
- Easy setup

## Setup Steps:

1. **Install dependency:**
   ```bash
   npm install @emailjs/browser
   ```

2. **Create EmailJS account:**
   - Go to https://www.emailjs.com/
   - Sign up for free

3. **Setup Email Service:**
   - Add Gmail service
   - Connect your Gmail account

4. **Create Email Template:**
   - Template variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`

5. **Get your keys:**
   - Service ID
   - Template ID  
   - Public Key

6. **Update Contact.js:**
   - Replace `YOUR_SERVICE_ID` with your Service ID
   - Replace `YOUR_TEMPLATE_ID` with your Template ID
   - Replace `YOUR_PUBLIC_KEY` with your Public Key

## Deploy:
```bash
npm run deploy
```

Your contact form will work on GitHub Pages!