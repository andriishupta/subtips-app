# SubTips
App do checkout how Polkadot ecosystem works, how to work with Subsocial Network.

General idea: Allow

What is done:
- connection to subsocial
- working with wallet:
  - connect
  - get injected context
  - loading user from localStorage - mimic "standard" Ethereum dev flow

What is "planned":
- create user on SoonSocial for testing
- add TIPS:
  - create PostgreSQL db to store user's "tip posts"
  - add UI for TIPs

Used:
- T3: Nextjs / Tailwindcss / tRPC / Prisma
- @subsocial/api
- @polkadot/extension-dapp
- Crust for ipfs
- SubWallet as example wallet

## T3 Stack APP
Follow docs to run the app https://create.t3.gg/