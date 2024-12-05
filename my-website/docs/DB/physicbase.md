---
title: Физическая модель базы
sidebar_position: 3
---
# Схема

```plantuml

@startuml

entity "Client" {
    Phone_Number : VARCHAR(20) <<PK>> <<NOT NULL>>
    Client_Name : VARCHAR(255) <<NOT NULL>>
    Client_Email : VARCHAR(255) <<NOT NULL>>
}

entity "Master" {
    Master_ID : SERIAL <<PK>> <<NOT NULL>>
    Master_Name : VARCHAR(255) <<NOT NULL>>
    Contact_Info : VARCHAR(255)
    Master_Experience : VARCHAR(255) <<NOT NULL>>
}

entity "Request" {
    Request_ID : SERIAL <<PK>> <<NOT NULL>>
    Client_Phone_Number : VARCHAR(20) <<FK>> <<NOT NULL>>
    Assigned_Master_ID : INT <<FK>> <<NOT NULL>>
    Request_Date : DATE <<NOT NULL>>
    Request_Time : TIME <<NOT NULL>>
    Status : VARCHAR(20) <<NOT NULL>>
}

entity "Service" {
    Service_ID : SERIAL <<PK>> <<NOT NULL>>
    Service_Name : VARCHAR(255) <<NOT NULL>>
    Service_Description : VARCHAR(255)
    Service_Cost : DECIMAL(10, 2) <<NOT NULL>> <<CHECK (Service_Cost >= 0)>>
    Service_Execution_Time : FLOAT <<CHECK (Service_Execution_Time >= 0)>>
}

entity "Skill" {
    Skill_ID : SERIAL <<PK>> <<NOT NULL>>
    Skill_Name : VARCHAR(255) <<NOT NULL>>
}

entity "Service_Skill" {
    Service_Skill_ID : SERIAL <<PK>> <<NOT NULL>>
    Service_ID : INT <<FK>> <<NOT NULL>>
    Skill_ID : INT <<FK>> <<NOT NULL>>
}

entity "Request_Service" {
    Request_Service_ID : SERIAL <<PK>> <<NOT NULL>>
    Request_ID : INT <<FK>> <<NOT NULL>>
    Service_ID : INT <<FK>> <<NOT NULL>>
    Service_Quantity : INT <<NOT NULL>> <<CHECK (Service_Quantity > 0)>>
}

entity "Master_Skill" {
    Master_Skill_ID : SERIAL <<PK>> <<NOT NULL>>
    Master_ID : INT <<FK>> <<NOT NULL>>
    Skill_ID : INT <<FK>> <<NOT NULL>>
}

entity "Master_Photo_Report" {
    Photo_Report_ID : SERIAL <<PK>> <<NOT NULL>>
    Master_ID : INT <<FK>> <<NOT NULL>>
    Photo_URL : VARCHAR(255) <<NOT NULL>>
    Report_Description : 
}

entity "Work_Schedule" {
    Schedule_ID : SERIAL <<PK>> <<NOT NULL>>
    Master_ID : INT <<FK>> <<NOT NULL>>
    Work_Date : DATE <<NOT NULL>>
    Start_Time : TIME <<NOT NULL>>
    End_Time : TIME <<NOT NULL>>
}

"Client" --o{ "Request" : "creates"
"Master" --o{ "Request" : "executes"
"Request" --o{ "Request_Service" : "contains"
"Service" --o{ "Request_Service" : "includes"
"Service" --o{ "Service_Skill" : "requires"
"Skill" --o{ "Service_Skill" : "needed"
"Master" --o{ "Master_Skill" : "has"
"Skill" --o{ "Master_Skill" : "possesses"
"Master" --o{ "Master_Photo_Report" : "has"
"Master" --o{ "Work_Schedule" : "has"

@enduml

```

Физические модели данных используются для планирования и оптимизации процессов и систем хранения данных. Физические модели данных представляют собой строгую схему хранения данных в реляционной базе данных.