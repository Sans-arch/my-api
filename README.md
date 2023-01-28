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
- Use Cases: são estruturas utilizadas para centralizar a checagem de regras de negócio, no qual irão trabalhar em conjunto com os Controllers,
os controllers irão repassar os dados da rota para os Use Cases e os Use Cases irão trabalhar diretamente com os Repositórios e fazer toda
a verificação de regras de negócio, deixando para o Controller apenas a tarefa de retornar a Response de uma Request.

Design Patterns utilizados no projeto:
- Singleton
