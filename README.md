# Aquasol Energias Renováveis — Site Institucional

Site institucional em HTML, CSS e JavaScript puro (sem frameworks e sem build) para uma empresa fictícia de energia solar, com página inicial, portfólio de instalações com filtro e lightbox, e formulário de contato demonstrativo.

> ⚠️ **Projeto fictício.** Nome da empresa, endereço, telefone, e-mail e redes sociais são fictícios e usados apenas para fins de demonstração/portfólio.

## Estrutura do projeto

```
.
├── index.html            # Página inicial (hero, sobre, serviços, economia, contato, mapa)
├── instalacoes.html       # Página de portfólio (galeria com filtros e lightbox)
├── css/
│   └── style.css         # Estilos globais, design tokens e responsividade
├── js/
│   └── main.js            # Interações: menu, filtro, lightbox, scroll reveal, formulário
└── images/                 # Imagens do site (ver seção "Imagens" abaixo)
    └── istalacoes/         # Imagens específicas da galeria de instalações
```

> As pastas `css/`, `js/` e `images/` são referenciadas pelo HTML com esses nomes — mantenha essa hierarquia ao publicar o site.

## Como visualizar localmente

Como o site não depende de nenhum processo de build, basta abrir os arquivos em um servidor local (necessário para que os caminhos relativos e o `fetch` de fontes funcionem corretamente):

```bash
# Python 3
python3 -m http.server 8000

# ou, com Node.js
npx serve .
```

Depois acesse `http://localhost:8000` no navegador.

## Páginas

- **`index.html`** — Página inicial com:
  - Hero com estatísticas da empresa e gráfico em arco (nascer/pico/pôr do sol);
  - Seção "Quem somos", com números institucionais;
  - Seção "O que oferecemos" (Comercial, Projetos, Manutenção);
  - Seção "Serviços prestados" com gráfico de economia em arco (SVG animado);
  - Faixa de chamada para ação (CTA) para agendar visita técnica;
  - Seção de contato com formulário e lista de canais (endereço, telefone, e-mail, redes sociais, WhatsApp);
  - Mapa incorporado (Google Maps) e rodapé.

- **`instalacoes.html`** — Portfólio de instalações com:
  - Filtro por categoria: Todos, Fotovoltaico, Solar térmico, Piscinas, Estrutura & Componentes;
  - Grade de imagens (`gallery-grid`) com legendas;
  - Lightbox com navegação entre imagens (setas do teclado, clique fora fecha);
  - Mesma seção de contato e mapa da página inicial.

## Funcionalidades de JavaScript (`js/main.js`)

| Funcionalidade | Descrição |
|---|---|
| Header sólido ao rolar | Adiciona a classe `is-solid` ao `.site-header` após 24px de rolagem |
| Menu mobile | Abre/fecha `.main-nav` com overlay, tecla `Esc` e clique fora |
| Placeholders de imagem | Se uma imagem em `images/` não existir, exibe um bloco `.ph` com o rótulo definido em `data-ph` no lugar da imagem quebrada |
| Scroll reveal | Anima a entrada de elementos com classe `.reveal` usando `IntersectionObserver` |
| Gráfico em arco | Anima o preenchimento do gráfico SVG de economia (`.arc-seg`) ao entrar na viewport |
| Filtro da galeria | Filtra `.gallery-item` por `data-category` ao clicar nos `.filter-chip` |
| Lightbox | Abre imagem em tela cheia, navega entre itens visíveis e monta legenda dinamicamente |
| Formulário de contato | Intercepta o `submit`, exibe mensagem de sucesso e reseta os campos — **é apenas uma simulação, não há back-end** |

## Imagens

O HTML já referencia os caminhos de imagem esperados (ex.: `images/energia-solar-MS.jpg`, `images/istalacoes/2bda6b14b1c64e98bdaf5f11907315ac.jpg`). Enquanto o arquivo não existir na pasta `images/`, o script substitui a imagem quebrada por um placeholder cinza com o texto definido no atributo `data-ph`, indicando nome do arquivo e dimensões sugeridas — útil para saber exatamente quais fotos precisam ser produzidas/enviadas antes de publicar o site.

## Personalização (design tokens)

As cores, fontes e espaçamentos principais ficam centralizados no topo de `css/style.css`, dentro de `:root`:

```css
--ink        #10161F   /* fundo escuro principal */
--sun        #F5B400   /* amarelo da marca */
--paper      #FAF8F3   /* fundo claro principal */
--slate      #232A33   /* texto principal */
--sky        #2C6E9E   /* acento técnico (água/térmico) */
```

Fontes usadas (via Google Fonts): **Space Grotesk** (títulos), **Inter** (texto) e **JetBrains Mono** (números e detalhes técnicos).

## Formulário de contato

O formulário presente em ambas as páginas é **apenas demonstrativo**: ao ser enviado, o JavaScript impede o envio real, mostra uma mensagem de sucesso (`.form-success`) e limpa os campos. Para uso em produção, é necessário integrar a um back-end, serviço de formulários (ex.: Formspree, Netlify Forms) ou endpoint próprio.

## Compatibilidade

Site responsivo (mobile-first), testado com recursos padrão de navegadores modernos (`IntersectionObserver`, Flexbox/Grid, CSS custom properties). Não requer transpilação nem polyfills adicionais.

## Licença

Projeto de demonstração — ajuste a licença conforme a finalidade real de uso.
