# DevOps Practice Project: B2B Procurement & SaaS Platform

[![CI Pipeline](https://github.com/skit-devops-2026/devops-24ESKCS008/actions/workflows/ci.yml/badge.svg)](https://github.com/skit-devops-2026/devops-24ESKCS008/actions/workflows/ci.yml)

## Live Demo

https://skit-devops-2026.github.io/devops-24ESKCS008/

- **Live Service Health**: http://localhost:3000/health
- **Prometheus Metrics**: http://localhost:3000/metrics
- **Container Registry Image**: `abaancc/devops-24eskcs008:latest`

---

## Project Overview

This repository hosts a full-stack **B2B Procurement & Vendor Management SaaS Platform** built as part of the DevOps Practices and Principles course (CSUL511, Session 2026). The platform provides end-to-end procurement tools, including Request for Quotation (RFQ) creation, vendor directory listings, tender management, interactive dashboards for buyers and suppliers, and procurement analytics.

- **Student Roll Number**: 24ESKCS008
- **Course**: DevOps Practices & Principles (CSUL511)
- **Repository**: `skit-devops-2026/devops-24ESKCS008`

---

## Technical Architecture & Stack

- **Frontend Framework**: React 19, Vite 8
- **Backend / Production Server**: Node.js, Express, `prom-client`
- **Styling & UI**: Tailwind CSS, Framer Motion, Lucide React Icons
- **State & Data Handling**: Zustand, Axios, React Router DOM v7
- **Testing Framework**: Vitest, React Testing Library, jsdom
- **CI/CD Automation**: GitHub Actions (`.github/workflows/ci.yml`)
- **Containerization**: Docker (multi-stage alpine), Docker Compose
- **Orchestration**: Kubernetes manifests (Deployment & Service in `k8s/`)
- **Monitoring**: Prometheus scrape configuration (`monitoring/prometheus.yml`) & Grafana dashboard (`monitoring/dashboard.json`)
- **Build Server**: Jenkins Pipeline (`Jenkinsfile`)

---

## Repository Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI workflow configuration
├── docs/                      # Deployment screenshots and documentation
│   ├── deployment.png         # Live deployment verification screenshot
│   └── kubernetes-pods.png    # kubectl get pods & deployment status screenshot
├── k8s/                       # Kubernetes deployment & service manifests
│   ├── deployment.yaml        # Deployment manifest referencing container registry image
│   └── service.yaml           # Service manifest (NodePort on port 30080)
├── monitoring/                # Prometheus and monitoring configurations
│   ├── dashboard.json         # Grafana dashboard export for traffic, memory, CPU, health
│   └── prometheus.yml         # Prometheus scrape configuration targeting /metrics
├── scripts/
│   └── hygiene.sh             # Repository cleanliness & formatting helper script
├── src/
│   ├── components/            # UI components (Button, Badge, Card, Input, Modal)
│   ├── layouts/               # Dashboard and Auth layouts
│   ├── pages/                 # Application pages (Tenders, Suppliers, Analytics)
│   ├── __tests__/             # Unit and integration test suite
│   └── test/                  # Test setup & configuration
├── .gitignore                 # Standard git ignore patterns
├── Dockerfile                 # Multi-stage production container definition
├── docker-compose.yml         # Local container orchestration specification
├── Jenkinsfile                # Declarative Jenkins build pipeline definition
├── package.json               # Dependencies and npm scripts
├── server.js                  # Production server with /health and /metrics endpoints
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

### Production Build & Server

Compile assets and run production server:

```bash
# Build frontend assets
npm run build

# Start production server with /health and /metrics
npm start
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

## M5 — Containerization

The application includes a multi-stage `Dockerfile` and `docker-compose.yml` for containerized environments.

### Docker Commands

```bash
# Build Docker image
docker build -t abaancc/devops-24eskcs008:latest .

# Run Docker container
docker run -d -p 3000:3000 --name procurement-app abaancc/devops-24eskcs008:latest

# Run via Docker Compose
docker compose up -d

# Verify container health
curl http://localhost:3000/health
```

---

## M6 — Monitoring & Observability

- **Metrics Endpoint**: `GET /metrics` exposes standard Node.js runtime metrics (Heap, RSS, GC duration, CPU usage) and custom application metrics (`procurement_http_requests_total`, `procurement_http_request_duration_seconds`).
- **Health Check**: `GET /health` returns JSON `{"status": "UP"}`.
- **Prometheus Scrape Configuration**: Configured in `monitoring/prometheus.yml` targeting the `/metrics` endpoint with a 5s scrape interval.
- **Monitoring Dashboard**: Usable Grafana dashboard JSON committed in `monitoring/dashboard.json` with panels for availability, request throughput, p95 latency, memory footprint, and CPU utilization.

---

## M7 — Kubernetes Deployment

The container image is orchestrated in Kubernetes via manifests under `k8s/`:

```bash
# Deploy to local cluster (kind or k3d)
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# Verify cluster resources
kubectl get deployments
kubectl get pods -o wide
kubectl get services
```

- **Deployment (`k8s/deployment.yaml`)**: Specifies 2 replicas, resource requests/limits, HTTP liveness and readiness probes against `/health`, and pulls `abaancc/devops-24eskcs008:latest`.
- **Service (`k8s/service.yaml`)**: Exposes port 80 routing to container port 3000 via `NodePort: 30080`.

---

## DevOps Milestones Progress

- [x] **M1: Repository Setup**: Verified `.gitignore`, removed build artifacts (`dist/`), zero placeholders in `README.md`.
- [x] **M2: Branching & Pull Requests**: Structured branch workflows (`main`, `feature/*`) and merged pull requests.
- [x] **M3: CI Pipeline with Automated Tests**: Configured `.github/workflows/ci.yml` and test suite with Vitest.
- [x] **M4: Jenkins Pipeline**: Declarative `Jenkinsfile` committed and configured.
- [x] **M5: Containerization**: Production multi-stage `Dockerfile`, `docker-compose.yml`, and container registry image setup.
- [x] **M6: Deployment & Monitoring**: Live URL documented, Prometheus `/metrics` endpoint and `prometheus.yml`, Grafana dashboard in `monitoring/dashboard.json`, and deployment screenshot in `docs/deployment.png`.
- [x] **M7: Kubernetes**: Deployment and Service manifests under `k8s/` targeting registry image, verified pods, and `docs/kubernetes-pods.png` committed.
