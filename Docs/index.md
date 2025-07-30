# 🌐 Welcome to Web4

Web4 is a modern application framework designed for rapid deployment, scalability, and seamless microservice orchestration using Docker and Nacos.

## 📦 Repository Structure

- `Server.js` – Node.js service backend
- `Dockerfile` – Defines the base container
- `docker-compose.yml` – Orchestrates multiple services
- `build-nacos.sh` – Builds and starts Nacos
- `.github/workflows/` – CI/CD pipeline setup
- `docs/` – Documentation files

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Web4application/web-4.git
cd web-4

# Build and launch services
./build-nacos.sh
docker-compose up

