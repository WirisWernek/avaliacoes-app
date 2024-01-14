# Avaliacoes ![version](https://img.shields.io/badge/version-1.0.0-blue)

## Sobre

A ideia do projeto é ser um centralizador dos dados gerados pelo cartão de visitas digital.

Atualmente o projeto se encontra publicado na [Vercel](https://avaliacoes-wiriswernek.vercel.app/), e usa como base o Angular com Typescript, Tailwind com Flowbite e Firebase.

Segue abaixo uma prévia da aplicação.

<!-- <h2 align="center">Preview Mobile</h2>
<div align="center">
	<img width="400" src="./docs/images/mobile.png">
</div>

<h2 align="center">Preview Desktop</h2>
<div align="center">
	<img width="800" src="./docs/images/macbook.png">
</div> -->



## Como executar esta aplicação?

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

## Versões dos recursos da aplicação
- angular/cli <img style="vertical-align: middle;" src="https://img.shields.io/badge/version-16.2.10-blue"/>
- node <img style="vertical-align: middle;" src="https://img.shields.io/badge/version-16.20.1-blue"/>
- typescript <img style="vertical-align: middle;" src="https://img.shields.io/badge/version-5.1.3-blue"/>
- firebase <img style="vertical-align: middle;" src="https://img.shields.io/badge/version-10.5.2-blue"/>
- tailwind <img style="vertical-align: middle;" src="https://img.shields.io/badge/version-3.3.5-blue"/>
- flowbite <img style="vertical-align: middle;" src="https://img.shields.io/badge/version-2.0.0-blue"/>