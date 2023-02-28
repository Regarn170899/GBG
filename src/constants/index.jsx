import { v4 as uuidv4 } from "uuid";

export const formDataKeys = {
  productType: "productType",
  budget: "budget",
};
export const services = [
  {
    description: (
      <>
        Это одностраничный сайт, создание которого занимает меньше времени чем
        создание полноценного сайта.
        <br />
        <br /> С его помощью можно эфективно создать портфолио, запустить
        продажи или просто собрать заявки.
      </>
    ),
    title: "Лендинг",
    id: uuidv4(),
  },
  {
    description: (
      <>
        Это самый малозатратный и быстрый способ заявить о себе и своем проекте.
        <br />
        <br />
        Он является аналогом рекламного баннера или обычной визитки, которую мы
        раздаем при знакомстве. Основной задачей мини-сайта является привлечение
        внимания целевой аудитории, а также формирование положительного имиджа.
      </>
    ),
    title: "Сайт-визитка",
    id: uuidv4(),
  },
  {
    description: (
      <>
        Это портал для бизнеса, необходимый элемент успешной работы любой
        компании, будь то крупная международная организация или небольшое
        предприятие.
        <br /> <br /> Именно от внешнего вида и функционала этого сайта зависит,
        какое мнение о компании сложится у потенциальных клиентов.
      </>
    ),
    title: "Коорпоративный сайт",
    id: uuidv4(),
  },
];

export const PRODUCTS = {
  landing: "Лендинг",
  cutAway: "Сайт-визитка",
  corporate: "Коорпоративный сайт",
  custom: "Кастом",
};

export const posts = [
  { description: "111111", id: uuidv4() },
  { description: "111111", id: uuidv4() },
  { description: "111111", id: uuidv4() },
  { description: "111111", id: uuidv4() },
  { description: "111111", id: uuidv4() },
];
export const navigationLinkName = [
  { description: "Наши услуги", linkTo: "card", id: uuidv4() },
  { description: "Портфолио", linkTo: "projects", id: uuidv4() },
  { description: "О нас", linkTo: "about", id: uuidv4() },
  { description: "Блог", linkTo: "blog", id: uuidv4() },
  { description: "Заказать", linkTo: "form", id: uuidv4() },
];
export const technologiesDescriptionBackend = [
  { description: "Python", id: uuidv4() },
  { description: "Django", id: uuidv4() },
  { description: "DjangoREST", id: uuidv4() },
  { description: "MySQL", id: uuidv4() },
  { description: "PostgreSQL", id: uuidv4() },
  { description: "Docker", id: uuidv4() },
];

export const technologiesDescriptionFrontend = [
  { description: "TypeScript", id: uuidv4() },
  { description: "JavaScript", id: uuidv4() },
  { description: "Redux", id: uuidv4() },
  { description: "React", id: uuidv4() },
];
export const technologiesDescriptionWebDesign = [
  { description: "Figma", id: uuidv4() },
  { description: "Adobe Photoshop", id: uuidv4() },
];
