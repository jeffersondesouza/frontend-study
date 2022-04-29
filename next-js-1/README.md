

## Next Examples
[Next Examples repository](https://github.com/vercel/next.js/tree/canary/examples)


## NEXT BUILDS - Glosário Geral

### Static
```next build && next export```
- Por padão tudo é Static
- so vai usar ```next export``` quando TUDO for pré-renderizado, ou seja, tudo estático (uma landage, blog estatico, etc)
- `getStaticProps` pode ser usado com menos recursos
- tudo aqui roda em tempo de build


## Static Site Generation - SSG
```next build && next start```
- `getStaticProps` utilizado, pode ser junto de getStaticPaths para deixar claro quais páginas geraremos 
- um pouco mias rico, com algumas posssibiidade a mais como o dynamic pages
- tudo aqui roda em tempo de build

- `Incremental Static Generation`
  > ao usar o fallback: blocking | true.
  > com isso, páginas que seria dinamicas sao geradas incrementalmente de forma estática com cache 

- Bom para land pages, páginas de lana,mentode produtos, paginas sem restrições de acesso, páginas publicas de e-commerce 
- tudo aqui roda em tempo de execução, dando a cesso a cookies e etc



**
Utilizando o start, nós estamos fazendo uma static generation, ou seja, gerando arquivos estáticos em HTML. Esse comando é utilizado quando queremos fazer sites estáticos, podemos usar JAM stack.
Utilizando o getStaticProps  nós podemos carregar dados dinamicoa(apenas no build) e "injeta-los" no html
**


## Server Side Rendereing - SSR
- `getServerSideProps`s
- É gerado em tempo de requisição
- Componentes com restrições de acesso para bloquear em nível de servidor 




## getStaticProps, getServerSideProps, getStaticPaths

getStaticPaths
- Se a página tem rotas dinâmicas e precisamos gerar o conteudo estático, devemos informar a quantidade de rotas ao next


getStaticProps
- essa função roda apenas no momento do build. 
- recomentdada para pegar dados literalmete staticos
- se os dados forem atualizados na fonte, um novo build deve ser rodado
- para api dinamica é o getSerSideProps
- `revalidate`:
  > irá revalidar a API a cada 10 segundos para ver se chegou algo novo, assim nao fará por requisição
    // é bom para paginas que fazem MUUUitas requisições, como a pagina de reultado da megasena, pois
    // como nao hou alteração do back, a pagina sempre mostra o cache e so faz uma nova chamada 
    // detro do revalidate


getServerSideProps:
- Roda a cada a acesso que recebe
- Não seta os dados no html da do source, ou seja,
- se queremos o dado ja preenchido, sempre ir pelo Static PROPS
- Bom ponto para carregar dados do backend



## Incremental Static Generation
```next build && next start```
- Essa abordagem é meolhor  uando temos integração e dados dinâmicos
- Ela gera os dados em tempo de execução e sobre demanda, ou seja, se a infromação vem do back, o modo Static vai gerar, por exemplo' 1000 arquivos referentes a cada saida do BD. nesse caso ele gera sobre demanda, ou seja ao usuario acessar a página, porem uma vez gerada  uma página ele faz cache da mesma.

- Essa abordagem precisa ainda do getStaticPaths retonando fallback true ou 'blocking' e getStaticProps buscando os dados normalmente
- true: gera a página e quando o conteudo chega ele rendereza. Pensando em SEO pode nao ser bom pois o view soroce pode voltar vazio
- bloking: Espera o conteudo da pagina chegar antes de gerar. nessa caso é melhor para SEO pois ele so gera o condeudo da pagina no view source
- É uma boa opção para lojas e etc devido SEO, cache e tempo de carregamento



## Link prefetch
- por padão é true,setar sempre como false
- O ideal é que se estamos em uma pagina e clicamos no link que leva a outra, o next so baixa a  proxima pagina quando acessamos a mesma
- Porem se estamos em uma pagina e o link q leva a outra está com prefetch, o next por baixo dos panos ja baixa essa pagina. ou seja, se estamos  prevendo q o usuario irá clicar nesse link e ja baixamos a página, assim quando o usuario for para a nova paginaela ja está baixada
- Por padrão deixar false e so setar para links de páginas importantes, pois assim economisamos request e nao criar um problema de performance por baixar coisas desnecessárias. 

```
  <NextLink href={"/sobre"} passHref prefetch={true}>
    <a>sobre</a>
  <NextLink>

```

## Dynamic import
- realiza o import sob demanda fazendo ganhar performance
- nem toda situação pede, mas haverão situações que será pedido
```const Componnet = dynamic(() => import(‘.../components/Component’))```

## API Routes

- Criar uma folder `api` em `pages`. Os arquivos em api com uma função handler serão capazes de retornar dados de uma "api" para o front
```
export default function handle(re1, res) {
  res.status(200).json({
    name: 'joao'
  })
}
```