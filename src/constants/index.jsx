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
