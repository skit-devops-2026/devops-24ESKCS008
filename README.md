# DevOps Practice Project: B2B Procurement & SaaS Platform

[![CI Pipeline](https://github.com/skit-devops-2026/devops-24ESKCS008/actions/workflows/ci.yml/badge.svg)](https://github.com/skit-devops-2026/devops-24ESKCS008/actions/workflows/ci.yml)

## Project Overview

This repository hosts a full-stack **B2B Procurement & Vendor Management SaaS Platform** built as part of the DevOps Practices and Principles course (CSUL511, Session 2026). The platform provides end-to-end procurement tools, including Request for Quotation (RFQ) creation, vendor directory listings, tender management, interactive dashboards for buyers and suppliers, and procurement analytics.

- **Student Roll Number**: 24ESKCS008
- **Course**: DevOps Practices & Principles (CSUL511)
- **Repository**: `skit-devops-2026/devops-24ESKCS008`

---

## Technical Architecture & Stack

- **Frontend Framework**: React 19, Vite 8
- **Styling & UI**: Tailwind CSS, Framer Motion, Lucide React Icons
- **State & Data Handling**: Zustand, Axios, React Router DOM v7
- **Testing Framework**: Vitest, React Testing Library, jsdom
- **CI/CD Automation**: GitHub Actions (`.github/workflows/ci.yml`)
- **Build Server**: Jenkins Pipeline (`Jenkinsfile`)

---

## Repository Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI workflow configuration
├── docs/                      # Deployment screenshots and documentation
├── k8s/                       # Kubernetes deployment & service manifests
├── monitoring/                # Prometheus and monitoring configurations
├── scripts/
│   └── hygiene.sh             # Repository cleanliness & formatting helper script
├── src/
│   ├── components/            # UI components (Button, Badge, Card, Input, Modal)
│   ├── layouts/               # Dashboard and Auth layouts
│   ├── pages/                 # Application pages (Tenders, Suppliers, Analytics)
│   ├── __tests__/             # Unit and integration test suite
│   └── test/                  # Test setup & configuration
├── .gitignore                 # Standard git ignore patterns
├── Jenkinsfile                # Declarative Jenkins build pipeline definition
├── package.json               # Dependencies and npm scripts
├── vite.config.js             # Vite configuration with Vitest setup
└── README.md                  # Project documentation
```

---

## Local Development & Getting Started

### Prerequisites

- **Node.js**: v20.x or higher
- **npm**: v10.x or higher

### Installation

```bash
# Clone repository
git clone https://github.com/skit-devops-2026/devops-24ESKCS008.git
cd devops-24ESKCS008

# Install dependencies
npm install
```

### Development Server

Start the interactive Vite local development server:

```bash
npm run dev
```

### Production Build

Compile and bundle optimized assets for deployment:

```bash
npm run build
```

---

## Testing & Quality Assurance

The project features automated unit and integration tests using Vitest and React Testing Library.

```bash
# Execute test suite once
npm test

# Run tests in watch mode
npm run test:watch
```

---

## CI/CD & Pipeline Workflows

### 1. GitHub Actions CI Pipeline (`.github/workflows/ci.yml`)

The automated CI pipeline runs on every push and pull request to the `main` branch. It executes:
1. **Checkout**: Clones the latest commit from the target branch.
2. **Setup Node.js**: Prepares Node.js 20 environment with npm caching.
3. **Install**: Installs dependencies via `npm ci`.
4. **Test**: Executes `npm test` to verify component integrity.
5. **Build**: Runs `npm run build` to confirm build readiness.

### 2. Jenkins Automation (`Jenkinsfile`)

The declarative `Jenkinsfile` orchestrates local build verification in five distinct stages:
- `Checkout` -> `Install Dependencies` -> `Lint` -> `Test Suite` -> `Build Artifacts`.

---

## DevOps Milestones Progress

- [x] **M1: Repository Setup**: Verified `.gitignore`, removed build artifacts (`dist/`), zero placeholders in `README.md`.
- [x] **M2: Branching & Pull Requests**: Structured branch workflows (`main`, `feature/*`) and merged pull requests.
- [x] **M3: CI Pipeline with Automated Tests**: Configured `.github/workflows/ci.yml` and test suite with Vitest.
- [x] **M4: Jenkins Pipeline**: Declarative `Jenkinsfile` committed and configured.
