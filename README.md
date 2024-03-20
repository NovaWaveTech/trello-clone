# AnyTask
AnyTask is a project developed that improves task and project management. Inspired by Trello, AnyTask offers a customized and enhanced solution for your specific needs. Using TypeScript as the main development language, we built a robust and secure application. The MySQL database was chosen to efficiently store and manage the system's data. Additionally, we use the Tailwind CSS framework to ensure a modern and responsive interface. AnyTask demonstrates our ability to develop innovative and functional solutions to meet companies' demands.

## Getting Started

First, install the required packages:

```bash
npm install
```

### Setup Environment Variables

Create a `.env` file in the root directory and add the following variables:

```plaintext
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

STRIPE_API_KEY=

NEXT_PUBLIC_APP_URL=

STRIPE_WEBHOOK_SECRET=
```

### Setup Prisma

Ensure you have MySQL Database (We used PlanetScale for this example). Then, run the following commands:

```bash
npx prisma generate
npx prisma db push
```

## Start the Application

To start the development server, run:

```bash
npm run dev
```

## Available Commands

You can run the following commands using npm:

```plaintext
`npm run [command]`
```

| Command | Description             |
|---------|-------------------------|
| `dev`     | Starts a development instance of the app |

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Your feedback and contributions are welcome!

## Deployment

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js. Check out our Next.js deployment documentation for more details.


## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/LuizRichardSan" title="Luiz Richard">
        <img src="https://avatars.githubusercontent.com/u/103777087?v=4" width="100px;" alt="Foto do Luiz Richard no GitHub"/><br>
        <sub>
          <b>Luiz Richard</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/caubineto" title="Caubi Neto">
        <img src="https://avatars.githubusercontent.com/u/90481370?v=4" width="100px;" alt="Foto do Caubi Neto no GitHub"/><br>
        <sub>
          <b>Caubi Neto</b>
        </sub>
      </a>
    </td>
  </tr>
</table>