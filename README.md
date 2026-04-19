# UNIFY Vendor Portal

Vendor and service provider portal for UNIFY. This repo is planned as the Next.js web application used by vendors and service points to verify student Verifiable Credentials and handle simulated service-point transactions.

Future Codex instances should read this file first, then:

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- [docs/DECISIONS.md](docs/DECISIONS.md)
- [docs/API_CONTRACTS.md](docs/API_CONTRACTS.md)
- [docs/WORKFLOW.md](docs/WORKFLOW.md)

## Current Status

- Stack: planned Next.js, TypeScript.
- Current implementation: repository governance files only.
- App scaffold: not created yet.
- Current data: no real student data or production secrets.
- GitHub Actions: present and expected to handle the repo before an app package exists.
- System scope: proof of concept using simulated student records, simulated service providers, and simulated wallet/payment flows.
- Target identity stack from `BA Innovation.docx`: W3C Verifiable Credentials, AnonCreds, Credo, DIDComm, Hyperledger Indy/BCovrin, Indy VDR, and Aries Askar.

This repo owns:

- Service-point credential verification flows
- Vendor-facing verifier UI
- Vendor-generated QR code flows for student verification and simulated wallet payment
- Verification result handling
- Service and pricing rule configuration
- Vendor access and operational views
- Verifier integration points with the broader UNIFY platform

## Working Agreement

- Work enters through issues and pull requests.
- `main` is protected and should only change through reviewed PRs.
- Use draft PRs early when work is still in progress.
- Link every PR to an issue before it is merged.
- Security-sensitive changes need two approving reviews before merge.

## Getting Started

The Next.js app has not been scaffolded yet. Once implementation starts, scaffold the app in this repo and update this section with the exact commands.

Expected baseline commands once a package is present:

```bash
npm install
npm run lint
npm run typecheck
npm test
npm run build
```

## Planned App Structure

Expected structure after scaffolding:

- `app/` or `src/app/` for Next.js routes.
- `src/components/` for shared vendor UI primitives.
- `src/features/verification/` for QR and credential verification flows.
- `src/features/service-points/` for service-point selection and status.
- `src/features/rules/` for service and pricing rules.
- `src/features/transactions/` for vendor transaction history.
- `src/lib/api/` for typed API clients.
- `src/lib/auth/` for vendor session and authorization helpers.

## Scope Alignment

This repo should stay aligned with the BA system document:

- Build for a controlled proof-of-concept, not production rollout.
- Vendors should be onboarded and approved through the admin portal before receiving access.
- Vendor QR codes should support student credential verification and simulated wallet payments.
- Payments are simulated; do not integrate real payment gateways, bank settlement, invoicing, or reconciliation in this project scope.
- Verification must rely on backend/verifier checks, not trusted client payloads alone.

## Documentation

- [Architecture](docs/ARCHITECTURE.md): systems, repo boundaries, and runtime flows.
- [Decisions](docs/DECISIONS.md): important project decisions and why they were made.
- [API Contracts](docs/API_CONTRACTS.md): draft contracts between wallet, admin, vendor, and future backend services.
- [Workflow](docs/WORKFLOW.md): GitHub Issues, PRs, checks, releases, and deployment conventions.
