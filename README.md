# Avaliacoes

<div align="center">
	<img width="800" src="https://i.ibb.co/t2FkHRz/Avalia-es-V2.png">
</div>

## 🔥 Sobre

A ideia do projeto é ser um centralizador dos dados gerados pelo cartão de visitas digital.

Atualmente o projeto se encontra publicado na [Vercel](https://avaliacoes-wiriswernek.vercel.app/), e usa como base o Angular com Typescript, Tailwind com Flowbite e Firebase.

## 🔨 Como executar esta aplicação?

### Padrão
Para rodar a aplicação voce deve:
- Primeiro clonar este repositório
- Navegar para a pasta `avaliacoes-app`
- Executar o comando `npm i` para instalar as dependências do projeto
- Executar o comando `ng s` ou `ng serve` para rodar a aplicação
- Abrir em seu navegador de preferência a URL `http://localhost:4200/` para acessar a aplicação
- Se desejar pode executar diretamente `ng s -o` ou `ng serve --open` para executar a aplicação e abrir automaticamente o navegador já na pagina da aplicação

### Docker
Basta clonar o repositório entrar no mesmo e executar o comando `docker-compose up` ele vai automaticamente buildar a imagem e iniciar um container com a mesma, após ele finalizar basta acessar `localhost:8081` e a aplicação já estará sendo servida.

Por ser uma aplicação focada em mobile para uma melhor experiência é recomendado que você utilize o modo de design responsivo(No Chrome e Firefox pode ser acessado com as teclas `CTRL` + `SHIFT`+ `M`) e trocar para o display de um dos modelos de smartphones que seu navegador disponibilizar. 

Também é possível utilizar a extensão [Mobile Simulator](https://chrome.google.com/webstore/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk) disponível para Google Chrome e Firefox.

## 📦 Tecnologias usadas
- ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)