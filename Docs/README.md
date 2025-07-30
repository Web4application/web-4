# Web4-Main

Web4-Main is a backend orchestration layer for dynamic microservices, service discovery, and configuration management. Built and maintained by **QUBUHUB**, this project integrates **Nacos** for runtime service coordination and real-time configuration updates within a distributed Web4 architecture.

---

## 🔧 Features

- ✅ Microservice registration and discovery
- ✅ Dynamic configuration sync across services
- ✅ Docker-based deployment with full CI/CD support
- ✅ Scalable backend for Web4-native applications
- ✅ Custom server extensions using Node.js (`Server.js`)

---

## 🏗️ Architecture Overview

- **Nacos** is used as a service registry and configuration server.
- **Server.js** provides custom API logic and service interfacing.
- **Docker + GitHub Actions** automate the build and deployment lifecycle.
- **Shell scripts** (`bash.sh`, `build-nacos.sh`) manage build pipelines and service hooks.

---

## 📁 Project Structure

| File / Folder            | Purpose                                      |
|--------------------------|----------------------------------------------|
| `Server.js`              | Node.js server logic                         |
| `Dockerfile`             | Docker container definition                  |
| `docker-compose.yml`     | Multi-service orchestration                  |
| `.github/workflows/`     | GitHub Actions CI/CD configuration           |
| `build-nacos.sh`         | Script to build/start Nacos                  |
| `Readme.md`              | Project documentation (you're reading it)    |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Maven](https://maven.apache.org/) (for Nacos backend build)
- [JDK 8+](https://adoptopenjdk.net/) (for Java components)

- 

# Web4 Modular MQTT Dashboard

This is a modular, browser-based MQTT dashboard built for the Web4 ecosystem. It includes:

- 📘 Documentation tab with project links
- 🔌 MQTT client panel with topic/message input, live message log, and real-time chart
- 💰 Donation tab with embedded crypto support
- 🌙 Theme toggle (light/dark)
- 📈 Chart.js integration for live sensor data
- 🧠 Smart alert system and rule engine
- 🗃️ Timestamped message logging

## 📦 File Location

Place this file in:



## 🚀 Features

| Feature         | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| MQTT Client     | Connects to Cedalo broker via WebSocket, subscribes to `machine_topic`     |
| Message Log     | Displays incoming messages with timestamps                                 |
| Charting        | Real-time line chart using Chart.js                                        |
| Alerts          | Shows warning if value > 80 or < 30, and auto-publishes to `alerts` topic  |
| Theme Toggle    | Switch between light and dark mode                                         |
| Tab Navigation  | Switch between Docs, MQTT, and Donate views                                |
| Donation        | NOWPayments crypto donation button                                         |

## 🧰 Dependencies

- [mqtt.js](https://github.com/mqttjs/MQTT.js)  
- [Chart.js](https://www.chartjs.org/)  
- [NOWPayments](https://nowpayments.io/)

## 🧪 Usage

Open the HTML file in any browser with internet access. No server required.

## 🛠️ Customization

You can modify:
- Broker URL (`wss://...`)
- Default topic (`machine_topic`)
- Chart styling and alert thresholds
- Add new tabs or widgets

## 📜 License

MIT — see [LICENSE.txt](../LICENSE.txt)

---

Built and maintained by **kubu lee**

### Build and Run

```bash
# Clone this project
git clone https://github.com/YOUR_USERNAME/Web4-Main.git
cd Web4-Main

# Build Docker images
bash build-nacos.sh

# Start services
docker-compose up -d
