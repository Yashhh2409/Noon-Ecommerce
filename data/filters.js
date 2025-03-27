const filters = [
  {
    name: "Brand",
    data: {
      popular: [
        "TOMMY HILFIGER",
        "ESPRIT",
        "DIESEL",
        "PUMA",
        "Nike",
        "Adidas",
        "Reebok",
      ],
      all: {
        A: ["ABOF", "ASICS Tiger", "Adidas", "Aeropostale"],
        B: ["Balenciaga", "Burberry"],
      },
    },
  },
  {
    name: "Size",
    data: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    name: "Colour",
    data: [
      { colour_name: "White", colour_code: "#FFFFFF" },
      { colour_name: "Red", colour_code: "#FF0000" },
      { colour_name: "Blue", colour_code: "#0000FF" },
      { colour_name: "Green", colour_code: "#008000" },
      { colour_name: "Violet", colour_code: "#8A2BE2" },
      { colour_name: "Pink", colour_code: "#FFC0CB" },
    ],
  },
];

export default filters;
