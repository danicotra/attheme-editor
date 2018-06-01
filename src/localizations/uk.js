import Link from "../link/component";
import React from "react";

const NBSP = `\xa0`;

const localization = {
  error_title: () => `Упс, виникла помилка`,
  error_description: () => <React.Fragment>
    Будь ласка, відправте скриншот помилки {}
    <Link href="//t.me/snejugal" isWhite={true}>
      розробнику по&nbsp;Телеграму
    </Link>
    {} и&nbsp;опишіть, що&nbsp;ви&nbsp;зробили, після чого виникла ця помилка.  Мабуть треба буде відправити &nbsp;оригінальний файл теми, який ви&nbsp;використовували.
  </React.Fragment>,
  error_dismiss: () => `Щоб закрити повідомлення про${NBSP}помилку, просто натисніть на неї.`,

  emptyWorkspace_title: () => `Почніть працювати над власною темою`,
  emptyWorkspace_createTheme: () => `Створити нову тему`,
  emptyWorkspace_openTheme: () => `Відкрити існуючу тему`,

  theme_defaultName: () => `Чудова тема`,

  workspace_themeNameLabel: () => `Ім'я теми`,
  workspace_closeTheme: () => `Закрити тему`,
  workspace_closeThemePrompt: () => `Ви впевнені, що бажаєте закрити тему?`,
  workspace_downloadThemeFile: () => `Завантажити файл .attheme`,

  confirmDialog_yes: () => `Так`,
  confirmDialog_no: () => `Ні`,
};

export default localization;