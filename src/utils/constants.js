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

export const insertDecimal = (num) => {
  return (num / 100).toFixed(2);
};
