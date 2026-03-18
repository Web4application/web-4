# Service Architecture

This document explains how services interact with the Nacos backend:

- How services register
- How configuration updates are pushed
- Health check handling and re-registration logic

# 🔗 Service Architecture

This document explains how individual services within Web4 interact with the Nacos backend for dynamic configuration and service discovery.

## 🧭 Service Registration

- Upon startup, each service sends a registration payload to the Nacos server via its REST API.
- Registration includes service name, IP address, port, and metadata (e.g. health check interval).
- Nacos uses this data to populate the service registry for runtime discovery.

## 🔧 Configuration Updates

- Services subscribe to their config namespace within Nacos.
- Any config change triggers a push to active subscribers (via long polling or WebSocket, depending on setup).
- Updates may include database credentials, feature flags, or environment variables.

## 💓 Health Checks & Re-registration

- Each service exposes a `/health` endpoint monitored by Nacos.
- On failure detection, Nacos removes the service from the registry until it recovers.
- Services are responsible for re-registering after restart or transient failure.

---

If you’re up for it, we could also add example JSON payloads or flow diagrams showing the service–Nacos interaction sequence. Want me to sketch that out next?📐

# 🔗 Service Architecture

This document explains how individual services within Web4 interact with the Nacos backend for dynamic configuration and service discovery.

## 🧭 1. Service Registration

- Services send a registration request to the Nacos API during startup.
- Payload includes:
  ```json
  {
    "serviceName": "web4-api",
    "ip": "127.0.0.1",
    "port": 0.0.0.0
    "metadata": {
      "version": "1.0.0",
      "healthCheck": "/health"
    }
  }

## 📊 Service–Nacos Sequence Diagram

```bash
Service Start
     │
     ├──▶ Register with Nacos (POST /instance)
     │       └── Includes IP, Port, Metadata
     │
     ├──▶ Subscribe to Config Namespace
     │       └── Long Poll / WebSocket
     │
     ├──▶ Start Business Logic
     │
     ├──▶ Periodic Health Check (/health)
     │       └── Nacos polls service
     │
     └──◀ On Failure: Nacos deregisters instance
               └── Service restarts & re-registers

```

## 📈 Mermaid Sequence Diagram: Web4–Nacos Flow
```jsonl
sequenceDiagram
    participant Service
    participant Nacos
    Service->>Nacos: POST /instance (registration)
    Note right of Nacos: Includes IP, port, metadata
    Service->>Nacos: Subscribe to config namespace
    Nacos-->>Service: Config update (push)
    Service->>Service: Start business logic
    loop Periodic Health Check
        Nacos->>Service: GET /health
        Service-->>Nacos: Status 200 OK
    end
    alt Failure Detected
        Nacos-->>Nacos: Deregister service
        Service->>Nacos: Retry & Re-register
    end
```
