const MENU = [
 
  {
    title: "Lanche do dia",
    data: [
      {
        id: "1",
        title: "X-Master",
        information : "",
        price: 50.00,
        description:
          "Uma criação exclusiva da nossa pizzaria, o X-Master é uma verdadeira obra-prima culinária.",
         cover: require("../../assets/products/cover/Lanche do dia/X-Master.png"),
        thumbnail: require("../../assets/products/thumbnail/Lanche do dia/X-Master.png"),
        ingredients: [
          "Massa artesanal crocante;",
          "Hamburguer artesanal 200G;",
          "Molho de tomate especial da casa;",
          "Queijo mussarela de alta qualidade;",
          "Fatias de pepperoni;",
          "Fatias de calabresa defumada;",
          "Proteína Vegetal Hidrolizada;",
          "Cebolas caramelizadas;",
          "Pimentão amarelo;",
          "Champignon fresco;",
      
        ],

    
      },
    ],
  },

  {
    title : "Pizzas Saldadas",
    data: [
    {
      id: "2",
      title: "Pizza Margherita",
      information : "* A pizza possui 12 pedaços *",
      price: 30.00,
      description:
        "Uma explosão de sabores simples e tradicionais - molho de tomate, mussarela, tomate fresco e manjericão.",
      cover: require("../../assets/products/cover/Pizzas Salgadas/Pizza-Margherita.png"),
      thumbnail: require("../../assets/products/thumbnail/Pizza-Saldadas/Pizza-Margherita.png"),
      ingredients: [
        "Molho de tomate",
        "mussarela",
        "tomate ;",
        "manjericão fresco;",
        
      ],
    },

    {
      id: "3",
      title: "Pizza de Calabresa",
      information : "* A pizza possui 12 pedaços *",
      price: 32.00,
      description:
        "Calabresa defumada, cebolas caramelizadas, queijo mussarela e molho de tomate em uma base crocante.",
      cover: require("../../assets/products/cover/Pizzas Salgadas/Pizza-De-Calabresa.png"),
      thumbnail: require("../../assets/products/thumbnail/Pizza-Saldadas/Pizza-de-calabreza.png"),
      ingredients: [
        "Molho de tomate",
        "calabresa fatiada",
        "cebola ;",
        "queijo mussarela;",
      
      ],
    },

    {
      id: "4",
      title: "Pizza Quatro Queijos",
      information : "* A pizza possui 12 pedaços *",
      price: 38.00,
      description:
        "Mussarela, gorgonzola, parmesão e provolone sobre molho de tomate - uma explosão de queijos deliciosos.",
      cover: require("../../assets/products/cover/Pizzas Salgadas/Pizza-4-Queijos.png"),
      thumbnail: require("../../assets/products/thumbnail/Pizza-Saldadas/Pizza-4-Queijos.png"),
      ingredients: [
        "Molho de tomate",
        "Mussarela",
        "Gorgonzola;",
        "Parmesão;",
        "Provolone;",
      ],
    },

    {
      id: "5",
      title: "Pizza de Frango com Catupiry",
      information : "* A pizza possui 12 pedaços *",
      price: 32.00,
      description:
        "Frango desfiado, Catupiry, milho e molho de tomate - uma mistura irresistível de sabores.",
      cover: require("../../assets/products/cover/Pizzas Salgadas/pizza-de-frango-com-catupiry.png"),
      thumbnail: require("../../assets/products/thumbnail/Pizza-Saldadas/Pizza-Frango-com-catupiry.png"),
      ingredients: [
        "Molho de tomate",
        "frango desfiado",
        "Catupiry;",
        "milho;",
      ],
    },

    {
      id: "6",
      title: "Pizza Portuguesa",
      information : "* A pizza possui 12 pedaços *",
      price: 36.00,
      description:
        " Presunto, cebola, ovos cozidos, azeitonas e queijo mussarela sobre molho de tomate.",
      cover: require("../../assets/products/cover/Pizzas Salgadas/Pizza-Portuguesa.png"),
      thumbnail: require("../../assets/products/thumbnail/Pizza-Saldadas/Pizza-portuguesa.png"),
      ingredients: [
        "Molho de tomate",
        "presunto",
        "cebola;",
        "ovos;",
        "azeitonas;",
        "queijo mussarela;",
      ],
    },

    {
      id: "7",
      title: "Pizza Carne Seca com Rúcula",
      information : "* A pizza possui 12 pedaços *",
      price: 37.00,
      description:
        "Carne seca desfiada, rúcula fresca, tomate seco e queijo mussarela sobre um molho de tomate gourmet.",
      cover: require("../../assets/products/cover/Pizzas Salgadas/Pizza-De-Carne-seca-com-Rucula.png"),
      thumbnail: require("../../assets/products/thumbnail/Pizza-Saldadas/Pizza-Carne-seca-com-rucula.png"),
      ingredients: [
        "Molho de tomate",
        "carne seca desfiada",
        "rúcula;",
        "tomate seco;",
        "mussarela;",
      
      ],
    },

    {
      id: "8",
      title: "Pizza Vegetariana",
      information : "* A pizza possui 12 pedaços *",
      price: 34.00,
      description:
        "Berinjela, abobrinha, pimentão, cebola, tomate e queijo mussarela sobre molho de tomate.",
      cover: require("../../assets/products/cover/Pizzas Salgadas/Pizza-Vegetariana.png"),
      thumbnail: require("../../assets/products/thumbnail/Pizza-Saldadas/Pizza-Vegetariana.png"),
      ingredients: [
        "Molho de tomate;",
        "berinjela;",
        "abobrinha;",
        "pimentão;",
        "cebola;",
        "tomate;",
        "queijo mussarela;",
      ],
    },
    
    {
      id: "9",
      title: "Pizza Bacon com Milho",
      information : "* A pizza possui 12 pedaços *",
      price: 33.00,
      description:
        "Bacon em cubos, milho verde, e queijo mussarela sobre um molho de tomate especial.",
      cover: require("../../assets/products/cover/Pizzas Salgadas/Pizza-Bacon-Com-Milho.png"),
      thumbnail: require("../../assets/products/thumbnail/Pizza-Saldadas/Pizza-Bacon-Com-milho.png"),
      ingredients: [
        "Molho de tomate;",
        "bacon em cubos;",
        "milho verde ;",
        "queijo mussarela;",
      ]
    },

    {
      id: "10",
      title: "Pizza Supreme",
      information : "* A pizza possui 12 pedaços *",
      price: 50.00,
      description:
        "Pepperoni, presunto, salsicha, cogumelos, pimentões, cebolas, azeitonas e uma generosa camada de queijo.",
      cover: require("../../assets/products/cover/Pizzas Salgadas/Pizza-Supreme.png"),
      thumbnail: require("../../assets/products/thumbnail/Pizza-Saldadas/Pizza-supreme.png"),
      ingredients: [
        "Molho de tomate;",
        "pepperoni;",
        "presunto;",
        "salsicha;",
        "cogumelos",
        "pimentões",
        "cebolas",
        "azeitonas",
        "queijo",
      
      ],
    },
  ]
},

  
  {
    title: "Pizzas Doces",
    data: [
      {
        id: "11",
        title: "Chocolate com Morango",
        information : "* A pizza possui 8 pedaços *",
        price: 30.00,
        description:
          "Chocolate derretido, morangos frescos e raspas de chocolate sobre uma massa crocante.",
        cover: require("../../assets/products/cover/Pizzas Doces/Morango com chocolate.png"),
        thumbnail: require("../../assets/products/thumbnail/Pizza-doce/Morango com chocolate.png"),
        ingredients: [
          "Chocolate derretido",
          "morangos fatiados ",
          "raspas de chocolate",
        ],
      },

      {
        id: "12",
        title: "Banana com Canela",
        information : "* A pizza possui 8 pedaços *",
        price: 28.00,
        description:
          "Fatias de banana, canela, açúcar mascavo e queijo mussarela para uma experiência reconfortante.",
        cover: require("../../assets/products/cover/Pizzas Doces/Banana-com-Canela.png"),
         thumbnail: require("../../assets/products/thumbnail/Pizza-doce/Pizza-Banana.png"),
        ingredients: [
          "Fatias de banana",
          "canela",
          "açúcar mascavo ",
          "queijo mussarela",
        ],
      },
      {
        id: "13",
        title: "Pizza de Brigadeiro",
        information : "* A pizza possui 8 pedaços *",
        price: 25.00,
        description:
          "Brigadeiro cremoso e granulado de chocolate sobre uma base de massa - uma indulgência para os amantes de chocolate.",
        cover: require("../../assets/products/cover/Pizzas Doces/Pizza-de-brigadeiro.png"),
        thumbnail: require("../../assets/products/thumbnail/Pizza-doce/Pizza-Brigadeira.png"),
        ingredients: [
          "Brigadeiro cremoso",
          "granulado de chocolate",
         
        ],
      },

      {
        id: "14",
        title: "Pizza	Romeu e Julieta",
        information : "* A pizza possui 8 pedaços *",
        price: 28.00,
        description:
          "Goiabada cremosa e queijo mussarela - uma combinação clássica que conquista paladares.",
        cover: require("../../assets/products/cover/Pizzas Doces/Romeu-e-julieta.png"),
        thumbnail: require("../../assets/products/thumbnail/Pizza-doce/Pizza-romeu-e-julieta.png"),
        ingredients: [
          "Goiabada cremosa",
          "queijo mussarela",
         
        ],
      },

      {
        id: "15",
        title: "Pizza Prestígio",
        information : "* A pizza possui 8 pedaços *",
        price: 30.00,
        description:
          "Chocolate, coco ralado e leite condensado para uma experiência indulgente.",
        cover: require("../../assets/products/cover/Pizzas Doces/pizza-de-prestigio.png"),
        thumbnail: require("../../assets/products/thumbnail/Pizza-doce/Pizza-Prestigio.png"),
        ingredients: [
          "Chocolate",
          "coco ralado ",
          "leite condensado",
        ],
      },


      {
        id: "16",
        title: "Pizza Doce de Leite com Amêndoas",
        information : "* A pizza possui 8 pedaços *",
        price: 32.00,
        description:
          "Doce de leite, amêndoas laminadas e queijo mussarela para uma mistura perfeita de doçura e textura.",
        cover: require("../../assets/products/cover/Pizzas Doces/Pizza-doce-de-leite-com-amendoas.png"),
        thumbnail: require("../../assets/products/thumbnail/Pizza-doce/pizza-doce-de-leite-e-amendoas.png"),
        ingredients: [
          "Doce de leite",
          "amêndoas laminadas",
          "queijo mussarela",
        ],
      },

      {
        id: "17",
        title: "Pizza Nutella com Morango",
        information : "* A pizza possui 8 pedaços *",
        price: 32.00,
        description:
          "Nutella cremosa, morangos frescos e raspas de chocolate - irresistível!",
        cover: require("../../assets/products/cover/Pizzas Doces/Pizza-nutella-com-morango.png"),
        thumbnail: require("../../assets/products/thumbnail/Pizza-doce/pizza-nuttela-com-morango.png"),
        ingredients: [
          "Nutella",
          "morangos fatiados ",
          "raspas de chocolate",
        ],
      },

      {
        id: "18",
        title: "Pizza Banana Split",
        information : "* A pizza possui 8 pedaços *",
        price: 30.00,
        description:
          " Fatias de banana, sorvete de creme, calda de chocolate e chantilly sobre uma base crocante.",
        cover: require("../../assets/products/cover/Pizzas Doces/pizza-banana-split.png"),
        thumbnail: require("../../assets/products/thumbnail/Pizza-doce/Pizza-Banana-Split.png"),
        ingredients: [
          "Banana",
          "sorvete de creme",
          "calda de chocolate ",
          "chantilly",
        ],
      },


      {
        id: "19",
        title: "Pizza Maçã Caramelizada",
        information : "* A pizza possui 8 pedaços *",
        price: 28.00,
        description:
          "Maçãs caramelizadas, canela, açúcar mascavo e queijo mussarela para uma combinação deliciosa.",
        cover: require("../../assets/products/cover/Pizzas Doces/Pizza-maca-caramelizada.png"),
        thumbnail: require("../../assets/products/thumbnail/Pizza-doce/pizza-maca-caramelisada.png"),
        ingredients: [
          "Maçã caramelizada",
          "canela",
          "açúcar mascavo ",
          "queijo mussarela",
        ],
      },

      {
        id: "20",
        title: "Pizza Limão com Merengue",
        information : "* A pizza possui 8 pedaços *",
        price: 29.00,
        description:
          "Creme de limão, merengue fofo e raspas de limão sobre uma base crocante.",
        cover: require("../../assets/products/cover/Pizzas Doces/Pizza-limao-com-merengue.png"),
        thumbnail: require("../../assets/products/thumbnail/Pizza-doce/pizza-limao-com-merengue.png"),
        ingredients: [
          "Creme de limão",
          "merengue",
          "açúcar mascavo ",
          "raspas de limão",
        ],
      },
    ],
  },
  {
    title: "Lanches",

    data: [
      {
        id: "21",
        title: "Sanduíche de Frango Grelhado",
        information : "",
        price: 15.00,
        description:
          "Frango grelhado, alface, tomate e maionese, servido em pão de hambúrguer.",
         cover: require("../../assets/products/cover/Lanches/Sanduiche-De-Frango-Grelhado.png"),
         thumbnail: require("../../assets/products/thumbnail/Lanche/Sanduiche-de-frango-grelhado.png"),
        ingredients: [
          "Frango grelhado",
          "alface",
          "tomate;",
          "Água;",
          "maionese;",
          "servido em pão;",
        ],
      },

      {
        id: "22",
        title: "Sanduíche de Vegetais Assados",
        information : "",
        price: 18.00,
        description:
          "Legumes assados, queijo derretido e molho especial, servido em pão integral.",
        cover: require("../../assets/products/cover/Lanches/Sanduiche-De-Vegetais-Assados.png"),
        thumbnail: require("../../assets/products/thumbnail/Lanche/Sanduiche-de-vegetais-assados.png"),
        ingredients: [
          "Legumes assados",
          "queijo derretido",
          "molho especial;",
          "Água;",
          "Alho;",
          "servido em pão integral.;",
        ],
      },

      {
        id: "23",
        title: "Torta de Frango",
        information : "",
        price: 20.00,
        description:
          "Porção generosa de torta recheada com frango desfiado, acompanhada de uma salada de folhas verdes.",
        cover: require("../../assets/products/cover/Lanches/Torta-De-Frango.png"),
        thumbnail: require("../../assets/products/thumbnail/Lanche/Torta-de-frango.png"),
        ingredients: [
          "Frango desfiado",
          "massa de torta",
          "acompanhada de uma salada de folhas verdes",
        ],
      },

      

      {
        id: "24",
        title: "X-Salada Clássico",
        information : "",
        price: 17.00,
        description:
          "Hambúrguer de carne, queijo, alface, tomate, servido em pão de hambúrguer.",
          cover: require("../../assets/products/cover/Lanches/X-Salada-Classico.png"),
        thumbnail: require("../../assets/products/thumbnail/Lanche/x-salada-classico.png"),
        ingredients: [
          "Hambúrguer de carne",
          "queijo",
          "alface",
          "tomate",
          "servido em pão de hambúrguer."
        ],
      },


    ],
  },
  {
    title: "Refrigerantes",
    data: [
      {
        id: "25",
        title: "Coca-Cola (2 Litros)",
        information : "",
        price: 10.00,
        thumbnail: require("../../assets/products/thumbnail/Refrigerantes/Coca-cola-2-Litro.png"),
        cover: require("../../assets/products/cover/Refrigerantes/Coca-Cola-2-Litros.png"),
        description:
          "A refrescância e sabor únicos da Coca-Cola em uma garrafa de 2 litros.",
        ingredients: [],
      },
      {
        id: "26",
        title: "Sprite (lata)",
        information : "",
        price: 5.00,
        thumbnail: require("../../assets/products/thumbnail/Refrigerantes/Sprite.png"),
        cover: require("../../assets/products/cover/Refrigerantes/sprite.png"),
        description:
          "A refrescância da Sprite em uma lata conveniente.",
        ingredients: [],
      },

      {
        id: "27",
        title: "Fanta Laranja",
        information : "",
        price: 5.00,
        thumbnail: require("../../assets/products/thumbnail/Refrigerantes/fanta.png"),
        cover: require("../../assets/products/cover/Refrigerantes/fanta-lata.png"),
        description:
          " O sabor clássico da Coca-Cola Zero em uma lata, sem adição de açúcares.",
        ingredients: [],
      },

      {
        id: "28",
        title: "Coca-Cola Zero (lata)",
        information : "",
        price: 5.00,
        thumbnail: require("../../assets/products/thumbnail/Refrigerantes/Coca-cola-0.png"),
        cover: require("../../assets/products/cover/Refrigerantes/coca-cola-0-lata.png"),
        description:
          "Combo conveniente com Coca-Cola, Fanta Laranja e Sprite em latas geladas.",
        ingredients: [],
      },

      {
        id: "29",
        title: "Mix de Refrigerantes",
        information : "",
        price: 15.00,
        thumbnail: require("../../assets/products/thumbnail/Refrigerantes/Coca-Fanta-Sprint.png"),
        cover: require("../../assets/products/cover/Refrigerantes/Coca-fanta-sprite.png"),
        description:
          "Um combo conveniente com Coca-Cola, Fanta Laranja e Sprite em lata para satisfazer todas as suas vontades de refrigerante.",
        ingredients: [],
      },
    ],
  },

]

const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES, ProductProps }
