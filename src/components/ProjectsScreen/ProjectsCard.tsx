export const projects = [
  {
    title: "API de Gestão de Filiais e Produtos",
    description: "Uma API desenvolvida com Node.js, TypeScript e TypeORM para gerenciar filiais, produtos e movimentações entre unidades.",
    fullDescription: "Este projeto é uma API RESTful desenvolvida com Node.js, TypeScript e TypeORM, utilizando PostgreSQL como banco de dados. A API oferece funcionalidades para cadastro e autenticação de usuários, gerenciamento de produtos e controle de movimentações entre filiais. A autenticação é realizada via JWT e a segurança das senhas é garantida com Bcrypt. A documentação da API é feita com Swagger, facilitando a integração e uso por outros desenvolvedores.",
    technologies: ["Node.js", "Express", "TypeScript", "TypeORM", "PostgreSQL", "JWT", "Bcrypt", "Swagger"],
    coverImage: "src/assets/projects-images/api-gestao-filiais-produtos/logo-api-gestao.webp",
    images: [],
    keyFeatures: [
      "Autenticação com JWT",
      "Gerenciamento de usuários",
      "Cadastro e listagem de produtos",
      "Movimentação de produtos entre filiais",
      "Documentação com Swagger",
      "Criptografia de senhas com Bcrypt"
    ],
    githubUrl: "https://github.com/br1ansouza/api-gestao-filiais-produtos",
  },
  {
    title: "Farmacia App",
    description: "Um aplicativo mobile desenvolvido com React Native e Expo, criado para gerenciar o estoque, usuários e movimentações de uma farmácia fictícia.",
    fullDescription: "Este projeto foi desenvolvido utilizando React Native e Expo, permitindo a gestão eficiente do estoque de uma farmácia fictícia. A aplicação inclui funcionalidades como autenticação de usuários, controle de movimentações de produtos e gerenciamento de diferentes níveis de acesso. Além disso, integrações com banco de dados facilitam a atualização em tempo real.",
    technologies: ["JavaScript", "TypeScript", "React Native", "Expo"],
    coverImage: "/src/assets/projects-images/app-farmacia/tela-logo-farmacia.webp",
    images: [
      "/src/assets/projects-images/app-farmacia/tela_home.png",
      "/src/assets/projects-images/app-farmacia/tela_users.png",
      "/src/assets/projects-images/app-farmacia/tela_movimentacoes.png"
    ],
    keyFeatures: ["Autenticação", "Gestão de Estoque", "Gestão de Usuários", "Gestão de Movimentações"],
    githubUrl: "https://github.com/br1ansouza/App-React-Farmacia",
  },
  {
    title: "WebCarros",
    description: "Um aplicativo React Native que permite aos usuários compartilhar opiniões sobre automóveis e navegar por produtos de forma simples e intuitiva. ",
    fullDescription: "O WebCarros é um aplicativo desenvolvido em React Native que permite aos usuários fazer login, visualizar produtos relacionados a automóveis, e compartilhar suas avaliações. O objetivo é facilitar a troca de informações e opiniões sobre diferentes veículos.",
    technologies: ["TypeScript", "React Native", "Expo"],
    coverImage: "src/assets/projects-images/app-webcarros/tela-logo-webcarros.webp",
    images: [
      "src/assets/projects-images/app-webcarros/tela-login-webcarros.png",
      "src/assets/projects-images/app-webcarros/tela-veiculos-webcarros.png",
      "src/assets/projects-images/app-webcarros/tela-avaliacao-webcarros.png"
    ],
    keyFeatures: ["Product catalog", "User reviews", "Authentication"],
    githubUrl: "https://github.com/br1ansouza/app-Projeto-WebCarros",
  },
  {
    title: "E-commerce Platform",
    description: "Aplicativo React Native que exibe uma lista de produtos com funcionalidade de pesquisa e rolagem infinita para carregar mais itens. ",
    fullDescription: "Bem-vindo ao Product Page app Ecommerce! Este é um aplicativo React Native que exibe uma lista de produtos com funcionalidade de pesquisa e rolagem infinita para carregar mais itens. Os usuários podem adicionar produtos ao carrinho e navegar facilmente pela interface. Além disso, o aplicativo possui uma aba de login funcional.",
    technologies: ["JavaScript", "React Native", "Expo"],
    coverImage: "src/assets/projects-images/app-ecommerce/tela-logo-ecommerce.webp",
    images: [
      "src/assets/projects-images/app-ecommerce/tela-login.png",
      "src/assets/projects-images/app-ecommerce/tela-produtos.png",
      "src/assets/projects-images/app-ecommerce/carrinho-de-compras.png"
    ],
    keyFeatures: ["Product catalog", "Shopping cart", "Payment integration"],
    githubUrl: "https://github.com/br1ansouza/app-ecommerce",
  },
  {
    title: "RPG Combat Simulator",
    description: "Projeto que demonstra como utilizar conceitos avançados de Programação Orientada a Objetos (POO) em TypeScript, aplicando práticas de encapsulamento, herança e polimorfismo para criar uma simulação de combate interativa. ",
    fullDescription: "Este projeto é um jogo de RPG simplificado desenvolvido em TypeScript. Ele explora conceitos de programação orientada a objetos (POO), como herança, encapsulamento e polimorfismo, para criar interações entre personagens, inimigos e um chefe desafiador. O objetivo principal é simular um combate até que todos os inimigos ou o herói sejam derrotados. Funcionalidades",
    technologies: ["TypeScript"],
    coverImage: "src/assets/projects-images/app-rpg/logo-rpg.webp",
    images: [],
    keyFeatures: ["POO", "Encapsulation", "Inheritance", "Polymorphism"],
    githubUrl: "https://github.com/br1ansouza/Jogo-RPG-TS",
  }
];
