

## Next Examples
[Next Examples repository](https://github.com/vercel/next.js/tree/canary/examples)


## getStaticProps, getServerSideProps, getStaticPaths

getStaticPaths
- Se a página tem rotas dinâmicas e precisamos gerar o conteudo estático, devemos informar a quantidade de rotas ao next


getStaticProps
- essa função roda apenas no momento do build. 
- recomentdada para pegar dados literalmete staticos
- se os dados forem atualizados na fonte, um novo build deve ser rodado
- para api dinamica é o getSerSideProps


getServerSideProps:
- Roda a cada a acesso que recebe
- Não seta os dados no html da do source, ou seja,
- se queremos o dado ja preenchido, sempre ir pelo Static PROPS
- Bom ponto para carregar dados do backend


## NEXT BUILDS

## Static Site Generation
```next build && next export```

Utilizando o export, nós estamos fazendo uma static generation, ou seja, gerando arquivos estáticos em HTML. Esse comando é utilizado quando queremos fazer sites estáticos, podemos usar JAM stack.
Utilizando o getStaticProps  nós podemos carregar dados dinamicoa(apenas no build) e "injeta-los" no html

