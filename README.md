# WhatsApp Message Automation with n8n

A workflow automation project built using **n8n, React, Google Sheets, and the Meta WhatsApp Cloud API** to automate scheduled WhatsApp messaging.

This project was created as a hands-on learning project to understand how **workflow automation, REST APIs, webhooks, OAuth2 authentication, scheduling, conditional logic, and external service integrations** work together in a real-world application.

---

## 🚀 Project Overview

The application allows customer information to be maintained in a Google Sheet and uses n8n to automatically process customer records and send WhatsApp messages through the **Meta WhatsApp Cloud API**.

The workflow supports both **manual execution** for testing and **scheduled execution** for automated messaging.

### Architecture

```text
                         ┌─────────────────────┐
                         │      React App      │
                         │   Manual Testing    │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │        n8n          │
                         │   Workflow Engine   │
                         └──────────┬──────────┘
                                    │
                 ┌──────────────────┴──────────────────┐
                 │                                     │
                 ▼                                     ▼
        ┌─────────────────┐                  ┌─────────────────┐
        │ Manual Trigger  │                  │Schedule Trigger │
        └────────┬────────┘                  └────────┬────────┘
                 │                                    │
                 └────────────────┬───────────────────┘
                                  ▼
                         ┌─────────────────┐
                         │  Google Sheets  │
                         │ Customer Data   │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   IF Condition  │
                         │  active = Yes   │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │  HTTP Request   │
                         │ WhatsApp Cloud  │
                         │      API        │
                         └────────┬────────┘
                                  │
                                  ▼
                              📱 WhatsApp
