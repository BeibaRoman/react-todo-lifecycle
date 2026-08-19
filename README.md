# React Todo — Lifecycle Methods

Навчальний проєкт на React: список завдань із модальним вікном, збереженням у localStorage та повною адаптивністю. Написаний на класових компонентах для практики методів життєвого циклу.

## Демо

🔗 [Дивитись онлайн](https://beibaroman.github.io/react-todo-lifecycle/)

## Технології

- React 19 (Class Components)
- Vite
- CSS Modules
- nanoid
- React Portals

## Функціонал

- Додавання, видалення, позначення завдань виконаними
- Модальне вікно для додавання завдання — закривається по Escape, кліку на фон або кнопці закриття
- Завдання зберігаються в localStorage — не зникають при оновленні сторінки
- Фільтр: All / Active / Completed
- Лічильник активних завдань
- Кнопка "Clear completed"
- Повністю адаптивний вигляд (mobile-first)

## Запуск локально

\`\`\`bash
git clone https://github.com/BeibaRoman/react-todo-lifecycle.git
cd react-todo-lifecycle
npm install
npm run dev
\`\`\`

## Архітектурні рішення

- `componentDidMount`/`componentDidUpdate` в `App` — читання й запис завдань у localStorage, з перевіркою на зміну посилання масиву, щоб уникнути зайвих записів
- `componentDidMount`/`componentWillUnmount` в `Modal` — підписка та відписка від клавіші Escape, реалізовані через `React Portal` (`createPortal`), щоб модальне вікно рендерилось поза деревом `App`
- Перевикористовуваний компонент `Button` з варіантами оформлення (`primary`, `ghost`, `icon`) замість дублювання стилів кнопок у кожному компоненті
- Валідація форми додавання завдання без сторонніх бібліотек, з власним станом помилки