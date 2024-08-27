CREATE TABLE expense
(
    id            BIGINT AUTO_INCREMENT NOT NULL,
    title         VARCHAR(255)          NULL,
    `description` VARCHAR(255)          NULL,
    category      VARCHAR(255)          NULL,
    date          date                  NULL,
    amount        INT                   NULL,
    CONSTRAINT pk_expense PRIMARY KEY (id)
);

CREATE TABLE income
(
    id            BIGINT AUTO_INCREMENT NOT NULL,
    title         VARCHAR(255)          NULL,
    amount        INT                   NULL,
    date          date                  NULL,
    category      VARCHAR(255)          NULL,
    `description` VARCHAR(255)          NULL,
    CONSTRAINT pk_income PRIMARY KEY (id)
);