# Projeto institucional - Bolsa Família

## Como abrir
1. Extraia a pasta `meu-site-bolsa-familia`.
2. Abra essa pasta no Visual Studio Code.
3. Instale a extensão **Live Server**.
4. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

## Imagens
Coloque os arquivos de imagem na pasta `assets/img/` com estes nomes:
- `banner-familia.jpg`
- `apresentacao-familia.jpg`
- `logo-bolsa-familia.png`

Use imagens e logotipos oficiais ou que você tenha autorização para utilizar. Os espaços de imagem exibem um fallback quando os arquivos ainda não foram adicionados.

## Observações
- O menu direciona para páginas oficiais do Ministério do Desenvolvimento e Assistência Social.
- O painel de acessibilidade permite aumentar/diminuir o texto, ativar alto contraste e restaurar o padrão.
- Apenas 2003 possui conteúdo histórico fornecido nesta primeira versão. Os demais anos são marcadores visuais e não apresentam fatos não verificados.
- Este é um projeto demonstrativo independente, não um site oficial do Governo Federal.


## Atualização responsiva e nova seção
O projeto agora inclui a seção "O Bolsa Família garante", ondas SVG, indicador de famílias, sete blocos de benefícios e uma área reservada para Primeira Infância. Foram incluídos breakpoints para celulares pequenos, celulares maiores, tablets, notebooks e telas grandes. A linha do tempo e o menu têm rolagem horizontal contida; a página não deve rolar horizontalmente.

## Dados numéricos
Os valores apresentados foram fornecidos no briefing e estão marcados como referência com competência a confirmar. Antes de publicar, substitua `referenceMonth`, `families` e os valores no objeto `bolsaFamiliaData` em `js/script.js` por dados conferidos em publicação oficial. Não são apresentados como números atuais.
