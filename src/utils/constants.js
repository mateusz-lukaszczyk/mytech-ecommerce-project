export const navLinks = [
  {
    id: "1",
    text: "home",
    url: "/",
  },
  {
    id: "2",
    text: "products",
    url: "/products",
  },
  {
    id: "3",
    text: "contact",
    url: "/contact",
  },
];

export const faqQuestions = [
  {
    id: 1,
    question: "What are your shipping options?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatibus labore similique ea repellat qui est veniam error. Libero, autem!",
  },
  {
    id: 2,
    question: "Do you offer expedited shipping?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatibus labore.",
  },
  {
    id: 3,
    question: "How long will it take for my order to arrive?",
    answer: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    id: 4,
    question: "Can i cancel my order once it's been placed?",
    answer: "Yes",
  },
];

export const insertDecimal = (num) => {
  return (num / 100).toFixed(2);
};
