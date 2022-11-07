# COOPANA

## DB structure

## How to run

### ENV

- Create user in MySQL:

```mysql
CREATE USER 'MYSQL_USER'@'MYSQL_HOST' IDENTIFIED BY 'MYSQL_PASSWORD';
GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on *.* TO 'MYSQL_USER'@'MYSQL_HOST' WITH GRANT OPTION;
```

- Create .env file:

`touch .env`

- Follow `.env.example`template, adding the values to the fields:

```env
MYSQL_USER=
MYSQL_HOST=
MYSQL_PASSWORD=;
```

## Dependencies

### Frontend

- Vue (**WIP**)
- Something to show graphs using data (**WIP**)

### Backend

- Express (**WIP**)
- MySQL (**WIP**)

## Common Errors

- `ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client`

Execute the following command in MySQL:

```sql
ALTER USER 'MYSQL_USER'@'MYSQL_HOST' IDENTIFIED WITH mysql_native_password BY 'MYSQL_PASSWORD';
```
