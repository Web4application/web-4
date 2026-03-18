# Web4 API Reference

This document outlines the core APIs exposed by the Web4 backend server (`Server.js`) for service orchestration, configuration management, and runtime integration.

---

## 🧭 Base URL
All endpoints are relative to:  
`http://127.0.0.1:3000/api/`

---

## 🔌 Endpoints

### 1. `/register`
**Method**: `POST`  
**Description**: Registers a new microservice with the Web4 ecosystem.  
**Payload**:
```json
{
  "serviceName": "auth-service",
  "host": "127.0.0.1",
  "port": "8080"
}
