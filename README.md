## mesto_server_with_db
## https://github.com/alsu-dxdy/mesto_server_with_db
### Version v0.0.2
### Description: Creating server with db, without authentication
### Для вадидации ссылок используется сторонний валидатор:
### https://github.com/validatorjs/validator.js
### **Инструкция по сборке:**
### точка входа: app.js
### команда npm run dev запускает сервер на localhost:3000 с хот релоудом;
### Node.js приложение подключается к серверу Mongo по адресу mongodb://localhost:27017/mestodb;
### созданы схема и модель пользователя с полями name, about и avatar, поля корректно валидируются;
### созданы схема и модель карточки с полями name, link, owner, likes и createdAt, поля корректно валидируются;
### запрос на GET /users возвращает всех пользователей из базы;
### запрос GET /users/:userId возвращает конкретного пользователя;
### запрос POST /users создаёт пользователя;
### запрос GET /cards возвращает все карточки всех пользователей;
### запрос POST /cards создаёт карточку;
### запрос POST /users создаёт юзера;
### запрос POST /users создаёт юзера;
### запрос POST /users создаёт юзера;
### если в любом из запросов что-то идёт не так, сервер возвращает ответ с ошибкой и соответствующим ей статусом;
### Также реализованы роуты:
⋅⋅* PATCH /users/me — обновляет профиль
⋅⋅* PATCH /users/me/avatar — обновляет аватар
⋅⋅* PUT /cards/:cardId/likes — поставить лайк карточке
⋅⋅* DELETE /cards/:cardId/likes — убрать лайк с карточки


 