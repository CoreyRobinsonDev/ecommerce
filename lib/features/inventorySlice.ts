import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  womens: {
    clothes: [
      {
        brand: "MARC",
        name: "Darturien Laciniado Magnis Meros",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        img1: "/pictures/womens/clothes/fit6.webp",
        img2: "/pictures/womens/clothes/fit1.webp",
        price: (Math.floor(Math.random() * 20) * 10) + 9,
        numInStock: Math.floor(Math.random() * 50),
        colors: ["#C25E8E", "#9E66B5", "#4C76CF", "#0082CE", "#0087AF", "#008578"]
      },
      {
        brand: "MARC",
        name: "Loremous Scelerisques Saliduar Dan",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        img1: "/pictures/womens/clothes/fit2.webp",
        img2: "/pictures/womens/clothes/fit7.webp",
        price: (Math.floor(Math.random() * 20) * 10) + 9,
        numInStock: Math.floor(Math.random() * 50),
        colors: ["#C25E8E", "#9E66B5", "#4C76CF", "#0082CE", "#0087AF", "#008578"]
      },
      {
        brand: "ELLA",
        name: "Homuir Mollis Pharetras Praneu",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        img1: "/pictures/womens/clothes/fit8.webp",
        img2: "/pictures/womens/clothes/fit5.webp",
        price: (Math.floor(Math.random() * 20) * 10) + 9,
        numInStock: Math.floor(Math.random() * 50),
        colors: ["#C25E8E", "#9E66B5", "#4C76CF", "#0082CE", "#0087AF", "#008578"]
      },
      {
        brand: "MARC",
        name: "Praneu Homuir Mollis Pharetras",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        img1: "/pictures/womens/clothes/fit9.webp",
        img2: "/pictures/womens/clothes/fit4.webp",
        price: (Math.floor(Math.random() * 20) * 10) + 9,
        numInStock: Math.floor(Math.random() * 50),
        colors: ["#C25E8E", "#9E66B5", "#4C76CF", "#0082CE", "#0087AF", "#008578"]
      },
      {
        brand: "LOREM",
        name: "Faucibus Sullamcorper Matti Drost",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        img1: "/pictures/womens/clothes/fit10.webp",
        img2: "/pictures/womens/clothes/fit3.webp",
        price: (Math.floor(Math.random() * 20) * 10) + 9,
        numInStock: Math.floor(Math.random() * 50),
        colors: ["#C25E8E", "#9E66B5", "#4C76CF", "#0082CE", "#0087AF", "#008578"]
      },
      {
        brand: "ELLA",
        name: "Darturien Laciniado Magnis Meros",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        img1: "/pictures/womens/clothes/fit11.webp",
        img2: "/pictures/womens/clothes/fit1.webp",
        price: (Math.floor(Math.random() * 20) * 10) + 9,
        numInStock: Math.floor(Math.random() * 50),
        colors: ["#C25E8E", "#9E66B5", "#4C76CF", "#0082CE", "#0087AF", "#008578"]
      },
      {
        brand: "MARC",
        name: "Mollis Pharetras Praneu Homuir",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        img1: "/pictures/womens/clothes/fit12.webp",
        img2: "/pictures/womens/clothes/fit13.webp",
        price: (Math.floor(Math.random() * 20) * 10) + 9,
        numInStock: Math.floor(Math.random() * 50),
        colors: ["#C25E8E", "#9E66B5", "#4C76CF", "#0082CE", "#0087AF", "#008578"]
      },
      {
        brand: "LOREM",
        name: "Cosmo Naminos Delementum Bra",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        img1: "/pictures/womens/clothes/fit14.webp",
        img2: "/pictures/womens/clothes/fit15.webp",
        price: (Math.floor(Math.random() * 20) * 10) + 9,
        numInStock: Math.floor(Math.random() * 50),
        colors: ["#C25E8E", "#9E66B5", "#4C76CF", "#0082CE", "#0087AF", "#008578"]
      },
    ]
  },
  mens: {},
  kids: {}
}

const inventorySlice = createSlice({
  name: "inventorySlice",
  initialState,
  reducers: {

  }
});

export const inventoryReducer = inventorySlice.reducer; 