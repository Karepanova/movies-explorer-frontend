# movies-explorer-frontend
* Frontend: <a href="https://movies-explorer.karepanova.ru/" target="_blank">https://movies-explorer.karepanova.ru/</a></li>  
* <a href="https://" target="_blank">Ссылка на макет в Figma</a></li>
* IP: 45.86.183.246

**Описание проекта**
-

**Данный проект представляет собой интерактивную страницу. 
Это сервис, в котором можно найти фильмы по запросу и сохранить
в личном кабинете.**

**Основной функционал**
-
* авторизация и регистрация пользователя
* отображение текущих данных пользователя в форме редактирования данных
* возможность редактирования данных профиля
* добавление фильма в избранное и его удаление от туда
* возможность поиска фильмов, по ключевым словам
* возможность фильтрации данных поиска по длительности фильма
* отображение найденных карточек фильмов и избранных на соответствующих страницах
* при закрытии страницы и повторном открытии данные поиска сохраняются
* количество отображаемых карточек находится в зависимости от ширины экрана пользовательского устройства

**Инструменты и технологии**
-
* HTML5
* CCS3
* JavaScript (ES6)
* React (Create React App, разметка JSX, функциональные компоненты и хуки)
* создан контекст текущего пользователя
* использован React Router
* использован объект history
* используется HOC-компонент ProtectedRoute для защиты маршрутов
* данные поиска сохраняются в LocalStorage
* сайт адаптирован под разные расширения экранов
* реализовано бургер-меню для малых расширений
* используется прелоадер при ожидании ответов с сервера
* flexbox
* grid
* БЭМ (наименование классов)
* Webpack

**Установка и запуск**
-
* `npm i` - установка зависимостей
* `npm run start` - запуск проекта
* `npm run build` - запуск сборки проекта