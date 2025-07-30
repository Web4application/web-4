# Web4 API Reference

This document outlines the core APIs exposed by the Web4 backend server (`Server.js`) for service orchestration, configuration management, and runtime integration.

---

## 🧭 Base URL
All endpoints are relative to:  
`http://localhost:PORT/api/`

---

## 🔌 Endpoints

### 1. `/register`
**Method**: `POST`  
**Description**: Registers a new microservice with the Web4 ecosystem.  
**Payload**:
```json
{
  "serviceName": "auth-service",
  "host": "192.168.1.5",
  "port": "8080"
}
