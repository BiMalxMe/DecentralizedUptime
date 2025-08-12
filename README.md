# Uptime Analyser

## VIdeo DEmo
https://youtu.be/ul3z2tK97z0  
https://youtu.be/ul3z2tK97z0  
https://youtu.be/ul3z2tK97z0

The **Overlaps Hub** is a backend service designed to coordinate a decentralized network of validators that monitor the uptime and performance of registered websites. The hub leverages WebSockets for real-time communication, a PostgreSQL database (via Prisma ORM) for persistence, and cryptographic signatures for secure validator authentication.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
  - [WebSocket Connection](#websocket-connection)
  - [Validator Signup Flow](#validator-signup-flow)
  - [Website Monitoring & Validation](#website-monitoring--validation)
  - [Callback Mechanism](#callback-mechanism)
- [Database Schema](#database-schema)
- [Development](#development)
- [Security](#security)
- [Extending the Hub](#extending-the-hub)
- [License](#license)

---

## Architecture Overview

The Overlaps Hub acts as a central coordinator in a distributed monitoring system:

- **Validators**: Independent nodes that connect to the hub via WebSocket, authenticate using cryptographic signatures, and perform website checks.
- **Hub**: Maintains a pool of available validators, assigns website validation tasks, verifies validator responses, and records results in the database.
- **Database**: Stores users, websites, validators, and validation results (ticks).

The architecture is event-driven and highly extensible, allowing for additional monitoring logic or validator incentives.

---

## Tech Stack

- **Runtime**: [Bun](https://bun.sh/) (for fast TypeScript/JavaScript execution and native WebSocket support)
- **Database**: PostgreSQL (accessed via [Prisma ORM](https://www.prisma.io/))
- **Cryptography**: [tweetnacl](https://github.com/dchest/tweetnacl-js) and [@solana/web3.js](https://solana.com/) for signature verification
- **WebSocket**: Bun's built-in WebSocket server
- **Type Definitions**: Custom types in the `overlaps/types` package

---

## How It Works

### WebSocket Connection

- The hub listens on port `8081` for incoming WebSocket connections.
- Validators connect and upgrade their HTTP connection to a WebSocket.
- Each validator is tracked in an in-memory pool with its socket, public key, and unique ID.

### Validator Signup Flow

1. **Signup Message**: Validator sends a `signup` message containing its public key, IP, and a signed message.
2. **Verification**: The hub verifies the signature using the provided public key.
3. **Registration**: If the validator is new, it is added to the database; otherwise, its existing record is used.
4. **Acknowledgement**: The hub responds with the validator's unique ID and registers the validator in the active pool.

### Website Monitoring & Validation

- Every minute, the hub fetches all enabled websites from the database.
- For each website, the hub assigns validation tasks to all connected validators.
- Each validator receives a `validate` message with the website URL and a unique callback ID.
- Validators perform the check and respond with a signed result (status, latency, etc.).
- The hub verifies the response signature and records the result in the database, incrementing the validator's pending payouts.

### Callback Mechanism

- The hub uses a callback registry (`CALLBACKS`) keyed by callback IDs to handle asynchronous validator responses.
- Once a response is processed, the callback is removed to prevent memory leaks.

---

## Database Schema

The schema is defined in Prisma and includes:

- **User**: Website owners.
- **Website**: Sites to be monitored.
- **Validator**: Nodes performing checks.
- **WebsiteTick**: Individual validation results.
- **WebsiteStatus**: Enum (`Good`/`Bad`).

See [`packages/db/prisma/schema.prisma`](packages/db/prisma/schema.prisma) for details.

---

## Development

### Prerequisites

- [Bun](https://bun.sh/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma CLI](https://www.prisma.io/docs/cli)

### Setup

1. **Install dependencies:**
   ```sh
   bun install
   ```

2. **Configure database:**
   - Set your `DATABASE_URL` in the environment.

3. **Run migrations:**
   ```sh
   npx prisma migrate dev
   ```

4. **Start the hub:**
   ```sh
   bun run index.ts
   ```

---

## Security

- **Authentication**: Validators must prove ownership of their public key by signing messages.
- **Signature Verification**: All critical messages (signup, validation results) are verified using Ed25519 signatures.
- **Isolation**: Validators are isolated from each other and only interact with the hub.

---

## Extending the Hub

- **Add new validation logic**: Modify the periodic task in `index.ts`.
- **Support more message types**: Extend the WebSocket message handler.
- **Integrate payouts**: Use the `pendingPayouts` field in the `Validator` model.

---

## License

This project is licensed under the MIT License.

---
