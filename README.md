# Componentes de Estilização - Serviço Web

Este repositório contém os componentes de estilização do nosso serviço web. Ele foi criado para facilitar a construção e padronização de elementos visuais, baseados no nosso design do Figma.

## 📌 Seções disponíveis
O projeto inclui as seguintes seções:
- **Hovers**
- **Botões**
- **Modais/Cards**
- **Listas**
- **Menu**

Essas seções estão representadas no código como `secao{numero}`, onde cada número corresponde a uma seção específica do design.

## 🚀 Como utilizar este arquivo?

1. **Clone o repositório**
   ```sh
   git clone https://github.com/i9-tech/i9-desgin.git
   cd ./public
   ```
2. **Abra o projeto no navegador**
   Basta abrir o arquivo `index.html` no seu navegador.

3. **Selecione uma opção no menu inicial**
   - Cada seção está identificada como `secao1`, `secao2`, etc.
   - Essas seções funcionam como **containers** e já possuem algumas estilizações padrão, como:
     - Cor de fundo
     - Elementos centralizados
     - Preenchimento de 100% da tela | **NÃO ALTERE ESSE**

4. **Adicione suas estilizações**
   - Dentro de cada seção, há uma `div` de exemplo com um texto para que você possa começar a prototipar.
   - Modifique e adicione estilos conforme necessário.

## 🔀 Como colaborar no projeto?

Para desenvolver novos componentes ou modificar os existentes, siga as boas práticas do Git:

1. **Crie uma nova branch**
   ```sh
   git checkout -b dev-NOMESEÇÃO
   ```
   Exemplo:
   ```sh
   git checkout -b dev-botoes
   ```

2. **Desenvolva e teste seu código**
   - Faça as alterações na sua branch.
   - Teste localmente antes de enviar.

3. **Adicione e faça commit das mudanças**
   ```sh
   git add .
   git commit -m "Adiciona novos estilos para botoes"
   ```

4. **Envie para o repositório remoto**
   ```sh
   git push origin dev-NOMESEÇÃO
   ```

5. **Crie um Pull Request para a branch `main`**
   - No GitHub, vá até a aba de "Pull Requests" e crie um novo PR.
   - Certifique-se de que sua branch está atualizada e sem conflitos.

6. **Aguarde a aprovação e faça o merge**
   - Após a revisão, o código será integrado à branch principal.

## ⚠️ Atenção!
- Evite quebrar o fluxo do código.
- Sempre mantenha backups antes de grandes alterações.
- Se tiver dúvidas, pergunte antes de fazer mudanças que possam impactar outros componentes.

---

💡 **Dica:** As imagens dos componentes estão na pasta `assets`, então caso tenha alguma dúvida ou precise de auxílio, elas estão disponíveis para visualização.

Feliz codificação! 🚀
&copy; 2025 i9tech. Todos os direitos reservados. 