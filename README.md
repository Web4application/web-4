
  ## Web4

Web4-Main is a backend orchestration layer for dynamic microservices, service discovery, and configuration management. Built and maintained by **[QUBUHUB]**, this project integrates **Nacos** for runtime service coordination and real-time configuration updates within a distributed Web4 architecture.

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
- **Shell scripts** `bash.sh`, `build-nacos.sh` manage build pipelines and service hooks.

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

### Build and Run
---

```bash

# Clone this project
git clone https://github.com/YOUR_USERNAME/Web4-Main.git
cd Web4-Main

# Build Docker images
bash build-nacos.sh

# Start services
docker-compose up -d

```

📚 Documentation

This project comes with developer notes and guides (coming soon):
		`docs/overview.md`: System architecture
	•	`docs/services.md`: How services register and fetch config
	•	`docs/deploy.md`: Deployment tips and cloud setup
	•	`docs/security.md`: How to secure your services

You may create this folder and use Markdown files to document each area.

⸻

🙌 Credits
	•	Nacos (by Alibaba): https://github.com/alibaba/nacos
Used as an integrated service registry and configuration system.

⸻

📜 License

This project is licensed under the MIT License.
You are free to modify, distribute, and use it commercially.

MIT License

Copyright (c) 2025 [QUBUHUB]

Permission is hereby granted, free of charge, to any person obtaining a copy...


⸻

👤 Author

Built with ❤️ by seriki yakub O 
Contact: [kubulee@gmail.com](web4app4.com)

---

## 🙏 Sponsor This Project

If Web4-Main helped you, consider supporting continued development:

- **BTC Address**: `38MpKvskcfJXzAbpBMn5F17x51uUfuefBU`
- 
- **License**: See [LICENSE.txt](./LICENSE.txt)
-
- for details on commercial use and attribution

![favico.ico](https://copilot.microsoft.com/shares/V3ukpUr32VJHW43Mouycc)

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

# Contributing to Web4 Modular MQTT Dashboard

Thanks for your interest in contributing! 🎉 This project thrives on community collaboration.

## 🧰 Ways to Contribute

- 🛠️ Improve UI/UX or styling
- 🧠 Add new widgets or chart types
- 🔐 Enhance security or authentication
- 🧪 Add testing or validation logic
- 📚 Improve documentation or translations
- 🐛 Report bugs or suggest features

## 🧪 Development Setup

1. Fork the repository  
2. Clone your fork  
3. Open `.github/templates/mqtt-client.html` in your editor  
4. Test changes locally in your browser  
5. Submit a pull request with a clear description

## 📦 Coding Guidelines

- Use semantic HTML and clean CSS
- Keep JavaScript modular and readable
- Comment complex logic
- Follow existing naming conventions

## 📜 License

By contributing, you agree your work will be licensed under the MIT License.

---

Let’s build something amazing together! 🚀
