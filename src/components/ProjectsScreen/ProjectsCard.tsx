export const projects = [
  {
    title: {
      pt: "API de Gestão de Filiais e Produtos",
      en: "Branch and Product Management API",
    },
    description: {
      pt: "Uma API desenvolvida com Node.js, TypeScript e TypeORM para gerenciar filiais, produtos e movimentações entre unidades.",
      en: "An API built with Node.js, TypeScript, and TypeORM to manage branches, products, and transfers between units.",
    },
    fullDescription: {
      pt: "Este projeto é uma API RESTful desenvolvida com Node.js, TypeScript e TypeORM, utilizando PostgreSQL como banco de dados. A API oferece funcionalidades para cadastro e autenticação de usuários, gerenciamento de produtos e controle de movimentações entre filiais. A autenticação é realizada via JWT e a segurança das senhas é garantida com Bcrypt. A documentação da API é feita com Swagger, facilitando a integração e uso por outros desenvolvedores.",
      en: "This is a RESTful API developed with Node.js, TypeScript, and TypeORM, using PostgreSQL as the database. It provides user registration and authentication, product management, and control of transfers between branches. Authentication is handled via JWT, with password security ensured using Bcrypt. API documentation is provided via Swagger for easy integration.",
    },
    technologies: ["Node.js", "Express", "TypeScript", "TypeORM", "PostgreSQL", "Bcrypt"],
    coverImage: "src/assets/projects-images/api-gestao-filiais-produtos/logo-api-gestao.webp",
    images: [],
    keyFeatures: {
      pt: [
        "Autenticação com JWT",
        "Gerenciamento de usuários",
        "Cadastro e listagem de produtos",
        "Movimentação de produtos entre filiais",
        "Documentação com Swagger",
        "Criptografia de senhas com Bcrypt"
      ],
      en: [
        "JWT authentication",
        "User management",
        "Product registration and listing",
        "Product transfers between branches",
        "Swagger documentation",
        "Password encryption with Bcrypt"
      ]
    },
    githubUrl: "https://github.com/br1ansouza/api-gestao-filiais-produtos",
  },
  {
    title: {
      pt: "Farmacia App",
      en: "Pharmacy App",
    },
    description: {
      pt: "Um aplicativo mobile desenvolvido com React Native e Expo, criado para gerenciar o estoque, usuários e movimentações de uma farmácia fictícia.",
      en: "A mobile app built with React Native and Expo to manage stock, users, and movements of a fictional pharmacy.",
    },
    fullDescription: {
      pt: "Este projeto foi desenvolvido utilizando React Native e Expo, permitindo a gestão eficiente do estoque de uma farmácia fictícia. A aplicação inclui funcionalidades como autenticação de usuários, controle de movimentações de produtos e gerenciamento de diferentes níveis de acesso. Além disso, integrações com banco de dados facilitam a atualização em tempo real.",
      en: "This project was developed using React Native and Expo, allowing efficient stock management for a fictional pharmacy. It includes user authentication, product movement tracking, and access-level management. Database integration enables real-time updates.",
    },
    technologies: ["JavaScript", "TypeScript", "React Native", "Expo"],
    coverImage: "/src/assets/projects-images/app-farmacia/tela-logo-farmacia.webp",
    images: [
      "/src/assets/projects-images/app-farmacia/tela_home.png",
      "/src/assets/projects-images/app-farmacia/tela_users.png",
      "/src/assets/projects-images/app-farmacia/tela_movimentacoes.png"
    ],
    keyFeatures: {
      pt: ["Autenticação", "Gestão de Estoque", "Gestão de Usuários", "Gestão de Movimentações"],
      en: ["Authentication", "Stock Management", "User Management", "Movement Management"]
    },
    githubUrl: "https://github.com/br1ansouza/App-React-Farmacia",
  },
  {
    title: {
      pt: "WebCarros",
      en: "WebCarros",
    },
    description: {
      pt: "Um aplicativo React Native que permite aos usuários compartilhar opiniões sobre automóveis e navegar por produtos de forma simples e intuitiva.",
      en: "A React Native app that allows users to share car reviews and browse automotive products with ease.",
    },
    fullDescription: {
      pt: "O WebCarros é um aplicativo desenvolvido em React Native que permite aos usuários fazer login, visualizar produtos relacionados a automóveis, e compartilhar suas avaliações. O objetivo é facilitar a troca de informações e opiniões sobre diferentes veículos.",
      en: "WebCarros is a React Native app that allows users to log in, view automotive-related products, and share their reviews. It aims to facilitate the exchange of information and opinions about different vehicles.",
    },
    technologies: ["TypeScript", "React Native", "Expo"],
    coverImage: "src/assets/projects-images/app-webcarros/tela-logo-webcarros.webp",
    images: [
      "src/assets/projects-images/app-webcarros/tela-login-webcarros.png",
      "src/assets/projects-images/app-webcarros/tela-veiculos-webcarros.png",
      "src/assets/projects-images/app-webcarros/tela-avaliacao-webcarros.png"
    ],
    keyFeatures: {
      pt: ["Catálogo de produtos", "Avaliações de usuários", "Autenticação"],
      en: ["Product catalog", "User reviews", "Authentication"]
    },
    githubUrl: "https://github.com/br1ansouza/app-Projeto-WebCarros",
  },
  {
    title: {
      pt: "Plataforma E-commerce",
      en: "E-commerce Platform",
    },
    description: {
      pt: "Aplicativo React Native que exibe uma lista de produtos com funcionalidade de pesquisa e rolagem infinita para carregar mais itens.",
      en: "React Native app that displays a product list with search functionality and infinite scroll to load more items.",
    },
    fullDescription: {
      pt: "Bem-vindo ao Product Page app Ecommerce! Este é um aplicativo React Native que exibe uma lista de produtos com funcionalidade de pesquisa e rolagem infinita para carregar mais itens. Os usuários podem adicionar produtos ao carrinho e navegar facilmente pela interface. Além disso, o aplicativo possui uma aba de login funcional.",
      en: "Welcome to the Product Page Ecommerce App! This is a React Native app that showcases a product list with search functionality and infinite scroll. Users can add products to the cart and navigate through the interface smoothly. It also features a working login tab.",
    },
    technologies: ["JavaScript", "React Native", "Expo"],
    coverImage: "src/assets/projects-images/app-ecommerce/tela-logo-ecommerce.webp",
    images: [
      "src/assets/projects-images/app-ecommerce/tela-login.png",
      "src/assets/projects-images/app-ecommerce/tela-produtos.png",
      "src/assets/projects-images/app-ecommerce/carrinho-de-compras.png"
    ],
    keyFeatures: {
      pt: ["Catálogo de produtos", "Carrinho de compras", "Integração de pagamento"],
      en: ["Product catalog", "Shopping cart", "Payment integration"]
    },
    githubUrl: "https://github.com/br1ansouza/app-ecommerce",
  },
  {
    title: {
      pt: "Simulador de Combate RPG",
      en: "RPG Combat Simulator",
    },
    description: {
      pt: "Projeto que demonstra como utilizar conceitos avançados de POO em TypeScript com uma simulação de combate.",
      en: "Project demonstrating advanced OOP concepts in TypeScript through an interactive combat simulation.",
    },
    fullDescription: {
      pt: "Este projeto é um jogo de RPG simplificado desenvolvido em TypeScript. Ele explora conceitos de programação orientada a objetos (POO), como herança, encapsulamento e polimorfismo, para criar interações entre personagens, inimigos e um chefe desafiador.",
      en: "This is a simplified RPG game built in TypeScript. It explores object-oriented programming (OOP) concepts such as inheritance, encapsulation, and polymorphism to create interactions between characters, enemies, and a challenging boss.",
    },
    technologies: ["TypeScript"],
    coverImage: "src/assets/projects-images/app-rpg/logo-rpg.webp",
    images: [],
    keyFeatures: {
      pt: ["POO", "Encapsulamento", "Herança", "Polimorfismo"],
      en: ["OOP", "Encapsulation", "Inheritance", "Polymorphism"]
    },
    githubUrl: "https://github.com/br1ansouza/Jogo-RPG-TS",
  }
];
