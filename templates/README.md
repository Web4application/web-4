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
