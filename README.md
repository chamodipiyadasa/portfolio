# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## EmailJS setup (contact form)

If you configured EmailJS for the contact form, add the following env vars to a `.env` file at the project root (restart Vite after editing):

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxx
VITE_EMAILJS_PUBLIC_KEY=user_xxxxxxxx
```

Create an EmailJS template that uses these variables: `from_name`, `from_email`, `message`.

Recommended EmailJS template subject:

```
New message from {{from_name}} — Portfolio
```

HTML body (example):

```html
<h1>New message from {{from_name}}</h1>
<p>From: <a href="mailto:{{from_email}}">{{from_email}}</a></p>
<pre>{{message}}</pre>
```

Quick test flow
- Install deps and start dev server: `npm install` then `npm run dev`.
- Open the site, fill the contact form and click Send.
- Check EmailJS Dashboard → Email Logs if the message doesn't arrive.

Security note: the EmailJS Public Key (`user_xxx`) is intended for client use. Never expose private/server keys in the frontend or commit them to a public repo.

## How to run locally

Clone the repo and run the following commands to start the development server locally:

```bash
git clone <your-repo-url>
cd portfolio
npm install
# create a .env with your EmailJS keys (see above)
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173) and verify the site loads. To test the contact form you must set the EmailJS env variables in `.env` as described above.

## License

This project is available under the MIT License — see the `LICENSE` file for details.
