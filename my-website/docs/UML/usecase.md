---
title: Диаграмма вариантов использования
sidebar_position: 2
---
# Схема

```plantuml

@startuml

actor Клиент as cl

actor Администратор as ad

actor Мастер as m

usecase "Загрузка фото в портфолио" as UC4

package "Экран клиента при создании заявки на процедуру" {

usecase "Выбрать услуги" as UC2

usecase "Выбрать временной интервал процедуры" as UC7

usecase "Авторизоваться/зарегистрироваться в системе" as UC8

usecase "Разместить заявку" as UC12

usecase "Отправить заявку" as UC13

usecase "Посмотреть список мастеров" as UC14

usecase "Просмотреть портфолио мастера" as UC5

usecase "Выбрать мастера" as UC6

usecase "Выбрать окошко для записи" as UC11

}

package "Экран администратора при работе с заявками" {

usecase "Подтвердить заявку" as UC9

usecase "Отменить заявку" as UC10

usecase "Обработать заявку" as UC15

usecase "Просмотреть заявку" as UC16

usecase "Просмотреть список заявок" as UC17

usecase "Создать заявку вручную" as  UC18

}

m -right-> UC4

cl --> UC12

UC12 ..> UC2: include

UC12 .left.> UC8: include

UC6 <.. UC5: extend

UC6 ..> UC11: include

UC12 ..> UC14: include

UC14 ..> UC6: include

UC12 ..> UC7: include

UC12 .right..> UC13: include

ad --> UC17

UC17 <.. UC15: extend

UC15 <... UC9: extend

UC15 <... UC10: extend

UC15 ..> UC16: include

ad --> UC18

@enduml



```

## Назначение

Диаграмма отображает все виды действий пользователей в системе с уточнением отношений между действиями.