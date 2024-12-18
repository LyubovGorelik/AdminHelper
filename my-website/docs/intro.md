---
sidebar_position: 1
---

# Карточка сервиса AdminHelper

# Карточка сервиса: **AdminHelper**

:::info
**AdminHelper** — это система, созданная для автоматизации работы администратора салона маникюра и помощи в решении тривиальных задач
:::

---

## Основные функциональные возможности

- **Автоматизированная онлайн-запись** клиента на процедуру
- **Управление записями администратором**
- **Формирование актуального расписания** для мастеров и администраторов салона
- **Автоматизированные напоминания** о записях клиентам через SMS рассылку


---

## Архитектура
- **Тип**: Монолитная архитектура.
- **Технологии**:
  - **Backend**: Java/Kotlin, PostgreSQL.
  - **Frontend**: gRPC, Redux.
  - **Мобильное приложение**: gRPC.
  - **API**: RESTful API для взаимодействия с клиентскими приложениями.
  - **Хостинг**: Yandex Cloud, S3 для хранения изображений и данных.
  