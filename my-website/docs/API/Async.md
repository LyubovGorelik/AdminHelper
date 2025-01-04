---
title: Асинхронное взаимодействие
sidebar_position: 2
---
#### Асинхронное взаимодействие: уведомление клиентов о предстоящей записи

Для данной задачи я предлагаю использовать **RabbitMQ**. Вот обоснование выбора и описание контракта.

**Обоснование выбора RabbitMQ**

- **Платформы и стек**:

  - RabbitMQ поддерживает множество языков программирования и платформ, что делает его универсальным решением для различных приложений.

  - Он хорошо интегрируется с веб-приложениями, микросервисами и другими компонентами системы.

- **Характер взаимодействия**:

  - RabbitMQ обеспечивает надежную доставку сообщений с возможностью подтверждения (acknowledgment), что гарантирует получение уведомлений.

  - Подходит для сценариев, где требуется обмен сообщениями между различными компонентами системы, например, уведомления от сервера к клиенту.

- **Асинхронность**:

  - RabbitMQ позволяет отправлять и получать сообщения независимо от времени, что идеально подходит для асинхронного взаимодействия.

**Описание контракта с использованием AsyncAPI**

Для описания контракта я использую формат **AsyncAPI**, так как предполагается использование JSON для обмена данными.

**AsyncAPI документ**



```
asyncapi: '2.0.0'
info:
  title: Notification Service
  version: '1.0.0'
  description: Service for sending notifications to users.
servers:
  rabbitmq:
    url: 'localhost:5672'
    protocol: amqp
channels:
  notifications:
    description: Channel for sending notifications to users.
    subscribe:
      summary: Receive notifications
      operationId: receiveNotification
      message:
        contentType: application/json
        payload:
          type: object
          properties:
            userId:
              type: string
              description: Unique identifier for the user.
            message:
              type: string
              description: Notification message content.
            timestamp:
              type: string
              format: date-time
              description: Time when the notification was sent.

```
