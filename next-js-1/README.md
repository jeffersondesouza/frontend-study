

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


## Incremental Static Generation
```next build && next start```
- Essa abordagem é meolhor  uando temos integração e dados dinâmicos
- Ela gera os dados em tempo de execução e sobre demanda, ou seja, se a infromação vem do back, o modo Static vai gerar, por exemplo' 1000 arquivos referentes a cada saida do BD. nesse caso ele gera sobre demanda, ou seja ao usuario acessar a página, porem uma vez gerada  uma página ele faz cache da mesma.

- Essa abordagem precisa ainda do getStaticPaths retonando fallback true ou 'blocking' e getStaticProps buscando os dados normalmente
- true: gera a página e quando o conteudo chega ele rendereza. Pensando em SEO pode nao ser bom pois o view soroce pode voltar vazio
- bloking: Espera o conteudo da pagina chegar antes de gerar. nessa caso é melhor para SEO pois ele so gera o condeudo da pagina no view source
- É uma boa opção para lojas e etc devido SEO, cache e tempo de carregamento



