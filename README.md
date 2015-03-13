projetoExemploUF 
==================================

Projeto para aprender a criar teste de unidade e funcional do angularjs.

Pré-Requisito
==================================
Ter instalado:
node.js  (linux install apt-get, mac brew) verison:>=10.26 .
NPM é o nome reduzido de Node Package Manager 

```
npm install grunt-cli -g .
npm install yeoman  -g  .
npm install bower -g .
```

Download do projeto e dependepências 
==================================
- 1 - Clone o projeto.
```

├── app --> aplicação 
│   ├── 404.html
│   ├── favicon.ico
│   ├── images
│   │   └── yeoman.png
│   ├── index.html
│   ├── robots.txt
│   ├── scripts
│   │   ├── app.js
│   │   └── controllers
│   │       ├── about.js
│   │       └── main.js
│   ├── styles
│   │   └── main.css
│   └── views
│       ├── about.html
│       └── main.html
├── Gruntfile.js --> deixa tarefas como mimificação de arquivos, jshint ,deploy e etc automaticas.
├── bower.json  -->  Gerenciamento de dependência clint-side. 
├── package.json --> Gerenciamento dependência dos modulos node para ajudar no desenvolvimento da aplicação
├── protractor.conf.js --> Configuração do teste funcional com protractor.
└── test
    ├── karma.conf.js --> arquivo de configuração para executar os teste em javascript.
    └── spec
    └── e2e
        └── controllers
            ├── about.js
            └── main.js
```
- 2 - Na linha de comando entre na pasta do projeto e execute o comando 
  - 2.1 - npm install(download package do node)
  - 2.2 - npm bower install(download das dependência client-side). 

Executar o projeto/test unit/test funcional 
==================================
Na pasta raiz do projeto execute os comandos:
  - grunt serve --> executar o projeto
  - grunt karma:unit --> teste de unidade 
  - grunt protractor --> em configuração.

Referencia
==================================
 - [Node](https://nodejs.org/).
 - [Grunt](http://gruntjs.com/).
 - [Bower](http://bower.io/).
 - [Yeoman](http://yeoman.io/).


