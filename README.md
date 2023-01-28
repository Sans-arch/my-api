# API em NodeJS com TypeScript

Projeto elaborado com as tecnologias:
- NodeJS
- TypeScript
- ExpressJS

Estrutura de pastas:
- /shared: tudo o que for para compartilhar entre os módulos da aplicação estará nesta pasta.

Conceitos:
- Repositories: são Classes responsáveis por manipularem os dados de uma Entidade.
- DTO: Data Transfer Object, é um objeto que definimos qual tipo de informação que iremos permitir que uma aplicação
cliente pode mandar para a nossa aplicação back-end. Em palavras próprias, é como se fosse uma espécie de objeto
"peneira" que irá peneirar os dados recebidos pelo front-end e mandará somente o suficiente para o back-end.
- Controller: é uma estrutura específica para trabalhar as informações recebidas na rota, criar instâncias do repositório, verificar regras de negócio,
tudo o que for tangível a manipulação de informações não deve ser feito pela rota e sim pelo controlador.
