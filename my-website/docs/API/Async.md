---
title: Асинхронное взаимодействие
sidebar_position: 2
---
# Схема

Асинхронное взаимодействие в системе: процесс передачи сформированной заявки от клиента на сервер.

Технология, выбранная для реализации этого взаимодействия: gRPC с использованием Protocol Buffers

Обоснования для выбора:

gRPC позволяет отправлять и  получать несколько сообщений в одном соединении. Поскольку я рассматриваю эту технологию для реализации системы в целом, мне важно оперативное обновление данных (окошек у мастера), возможность передавать файлы (ссылки на файлы) из портфолио мастера, и при этом чтобы страница загружалась достаточно быстро. 

Описание контракта с помощью Protocol Buffers:

```
syntax = "proto3";

package booking;

// Сообщение для представления услуги
message Service {
    string name = 2; // Название услуги
}

// Сообщение для данных клиента
message ClientInformation {
    string fullName = 1; // ФИО клиента
    string client_id = 2; // Номер телефона клиента
    string email = 3; // Электронная почта клиента
}

// Запрос для отправки заявки
message BookingsRequest {
    ClientInformation client_info = 1; // Данные клиента
    repeated Service selected_services = 2; // Список выбранных услуг
    string master_id = 3; // Идентификатор выбранного мастера
    string booking_date = 4; // Дата процедуры (в формате YYYY-MM-DD)
    string booking_time = 5; // Время процедуры (в формате HH:MM)
}

// Ответ на заявку
message BookingsResponse {
    bool success = 1; // Успех отправки заявки (true/false)
    string confirmation_id = 2; // Идентификатор подтверждения заявки
}

// Определение сервиса для обработки заявок
service BookingsService {
    rpc SubmitBooking(stream BookingsRequest) returns (stream BookingsResponse); // Асинхронная отправка заявки
}

```
