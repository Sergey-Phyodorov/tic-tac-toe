# Игра "Крестики-Нолики"

Этот проект представляет собой игру "Крестики-Нолики", созданную с использованием Create React App.

## Задачи

1. Использовать пакет “redux” для управления состоянием приложения; +
2. Не использовать React Context и хук useReducer(); +
3. Использовать пакет ”react-redux” для рендера компонентов вместо собственного решения, 
сделанного для этих целей;
4. Соблюдать 3 фундаментальных принципа Redux.

 ## Особенности

- Интеграция Redux для централизованного управления состоянием игры.
- Подписка компонентов на обновления Redux store для рендеринга интерфейса 
в ответ на изменения состояния.
- Реализация логики игры без использования вспомогательных пакетов, таких как react-redux,
React Context и useReducer.
- Внедрение логики для определения победителя и подсветки выигрышной линии.
- Добавление функциональности для сброса игры и начала новой партии.


 ## Структура Проекта

Проект "Крестики-Нолики" включает в себя следующие компоненты и файлы:

### Компоненты React:
- `GameBoard`: Основной компонент игры, отображающий игровое поле.
- `GameCell`: Компонент для каждой ячейки игрового поля.
- `GameStatus`: Показывает текущее состояние игры и информацию о победителе.

### Redux:
- `store.js`: Создание и экспорт Redux store.
- `gameReducer.js`: Редьюсер, управляющий состоянием игры.

### Действия (Actions):
- `makeMove`: Вызывается при клике на ячейку.
- `resetGame`: Сбрасывает игру для начала новой партии.

### Утилиты:
- `calculateWinner.js`: Функция для определения победителя.

## Логика Редьюсера

Редьюсер `gameReducer` управляет следующими аспектами состояния игры:

- `board`: Текущее состояние игрового поля.
- `currentPlayer`: Определяет, кто сейчас ходит.
- `winner`: Победитель игры или 'Ничья'.
- `winningLine`: Индексы ячеек выигрышной линии.

Reducer обрабатывает действия `MAKE_MOVE` и `RESET_GAME`.

## Установка

1. Клонируйте репозиторий.
2. Установите зависимости с помощью команды `npm install`.
3. Запустите сервер разработки с помощью команды `npm start`.

## Используемые технологии

- React
- Create React App

## Лицензия

Этот проект лицензирован под лицензией MIT.
