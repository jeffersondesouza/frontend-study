## Monorepo Architecture

- A idea pe termos um único repositório para controlar todos os projetos da equipe.
- Na ss8 tinhamos o common-gui, contudo, os projetos dx, fusion, globe, xcrdd eram separados por branch. A ideia do mono repo é de poder reutilizar pontos comouns, como por exemplo, libe d grid, UI etc

## Structure

- `projects`: Os projetos estão no diretório
- `packages/utils`: ponto centralizador das dependências dos projetos
- `package.json`: o arquivo a raíz será norso workspace. Via ele nós definimos os projetos que usaram ele como base das dependias, e ao rodar yar, as dependencias vao para a raiz, e  agora podemos fazer um projeto chamar dependicias dos outros (ver os node_modules) .
  ex: agora no projeto web-public, podemoc colocar a depencia @jeff/utis, q ele pegara tudo q tem no packages/utils
- `nomeclaturas`: os packages.json de cada projeto, pe importante iniciar de forma semântica, colocamos @jeff/nome-do-porjeto.

## workspace

- via yarn, vamos centralizar todas as dependencias do projeto, assim todos os projetos usarãoa mesma versao das libs ocm um unico yarn install
- No exmplo da SS8 acima, todos os projetos usavam ag-grid, mas em diferentes versões

## Setupd de configs
- Typescript
- ESLint