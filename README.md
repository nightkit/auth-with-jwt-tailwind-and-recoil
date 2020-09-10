# 🌙 auth-with-jwt-tailwind-and-recoil
``auth-with-jwt-tailwind-and-recoil`` is a Tailwind+React based boilerplate that utilizes localStorage and RecoilJS for authentication. Currently, it's just a frontend. The backend is based on another Nightkit boilerplate [backend-with-crud-and-auth](https://github.com/nightkit/backend-with-crud-and-auth) which is pretty easy to setup.

You can use it for:
  - Quickly prototyping stuff in Hackathons.
  - Avoiding messy setups and only writing what's important.

# Get Started

### Setup Backend
Read ``backend-with-crud-and-auth`` documentation available at - [backend-with-crud-and-auth](https://github.com/nightkit/backend-with-crud-and-auth) to setup your backend.

After your backend is setup, you may want to setup an environment variable ``REACT_APP_SERVER_URL`` with the value set to your backend URL in this format - ``https://example.com/api`` without a trailing slash (/). If you're working locally, then just navigate to the ``src/authentication/server-config.js`` file and change the ``serverURL`` variable's value to your local URL in the same format.

If you changed your register/login routes or added more routes that are required in the frontend. Then you are supposed to add them for usage accordingly in the ``src/authentication/server-config.js`` file, followed by a trailing slash (/) like ``/play``.

### Global State
Since I'm using RecoilJS for state-management. It's important you read their documentation available at [https://recoiljs.org/](https://recoiljs.org/). All the state keys are stored in ``src/authentication/state.js``.

### Navbar
To add links in the Navbar, go to ``src/components/Nav.js`` and add your links in the ``links`` object with the same format as other links there. You can add a ``protected: true`` key to make the route exclusive for logged in users.

### Tailwind Configuration
There's a ``tailwind.js`` file in the root directory. You can use it to customize the theme accordingly.

## Hosting the project
Though this is unopinionated and you can use anything for hosting, I personally prefer Netlify for hosting my projects. For the same reason, if you decide to use Netlify, I've added a ``netlify.toml`` file in the root directory.
Other nice alternatives are Vercel, AWS Lambda, Heroku.

### Credits
Thanks to RecoilJS - Facebook, TailwindCSS, and all other open-source libraries that I may have used while building this.
