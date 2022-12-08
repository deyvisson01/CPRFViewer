# CPRFViewer

Olá!

Esse pequeno projeto foi construído para a avaliação técnica da FinPec.
Consiste em uma carteira digital onde são listadas as CPRFs, podendo ter seus detalhes visualizados, liquidar a CPRF, adicionar uma nova e filtrar por tipo e status.

Na construção utilizei:
- TypeScript;
- React;
- Styled-components;
- ContextAPI;
- Axios para a integração;
- Vite - para inicialização mais limpa do projeto.

Algumas observações sobre o teste:

- As validações de formulário e ações foram deixadas de lado nesse momento pela questão de tempo;
- Responsividade e casos como o acréscimo de CPRFs além do número que comporta a visualização inicial não foram tratados;
- A forma de montar uma nova CPRF a partir da resposta da requisição ficou um pouco confuso. Segui a seguinte linha de pensamento:
  - O tipo da CPRF é definido pelo valor investido inicialmente;
  - A taxa diária foi calculada localmente a partir da data inicial e local, em caso de CPRF ativa, e inicial e final, em caso de CPRF liquidada;
  - Mensurei um valor estimado do investimento com base no dia vigente;
  - Criei um id novo para cada CPRF;
 - Acredito que o cálculo de lucro descrito no desafio esteja errado, já que me deparei com um valor absurdo nos primeiros testes e após algumas modificações ele se apresentou normal;
 - Entender e montar as novas CPRFs tomaram mais tempo do que eu imaginei. Mensurei cerca de 1:30 horas a mais por problemas de entendimento do que deveria usar do response pelos títulos dos valores serem diferentes e bem variados em primeiro contato.

O app roda normalmente com yarn e yarn dev.

No mais, é isso. Grande abraço!
