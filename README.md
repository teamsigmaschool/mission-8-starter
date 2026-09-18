# Mission 8 — Names API (Starter)

A small Express server that stores names in memory. By the end of
today's session, classmates will be able to add their name to a shared
list using Postman.

## Setup

```bash
npm install
npm run dev
```

Server runs at `http://localhost:3000`.

## What's already done for you

- Express server boilerplate
- JSON body parsing (`express.json()`)
- An in-memory `names` array to store the list
- A working health check route: `GET /`

## What you need to build

- `GET /names` — return the full list of names
- `POST /names` — add a new name to the list

See the `// TODO` comments in `server.js` for exact steps.

## Testing with Postman

**GET the list**
- Method: `GET`
- URL: `http://localhost:3000/names`

**Add a name**
- Method: `POST`
- URL: `http://localhost:3000/names`
- Body → raw → JSON:
  ```json
  { "name": "Alex" }
  ```

## Note on sharing

During the live session, everyone will POST to the instructor's hosted
version of this API (link shared in class) — not to each other's local
servers — so the shared list can grow as the whole class adds their name.
