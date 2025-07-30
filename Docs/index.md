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

```
# Clone the repo
git clone https://github.com/Web4application/web-4.git
cd web-4

# Build and launch services
./build-nacos.sh
docker-compose up

# 📖 Web4-Main Documentation Portal

```
Welcome to the official docs for **Web4-Main**, a modular microservice framework powered by Node.js, Docker, and Nacos.

## 🚪 Entry Points

Explore the project:

- 📘 [Project Overview](overview.md)
- 🔧 [Service Architecture](services.md)
- 🚀 [Deployment Guide](deploy.md)
- 🛡️ [Security Practices](security.md)

## 🧪 Live MQTT Dashboard

The Web4-Main live page includes a built-in MQTT client panel. You can test service communication using:

- **Topic:** `machine_topic`
- **Default Message:** `Hello from Web4!`
- **Broker:** Cedalo Cloud via secure WebSocket

📍 Visit: [`index.html`](index.html) for live message testing and logging.

---

💡 Want to contribute? Check the [license](../LICENSE.txt) or fork us at [GitHub](https://github.com/Web4application/web-4)
