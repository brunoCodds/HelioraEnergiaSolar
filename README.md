<div align="center">

# ☀️ Heliora Energia Solar

**Site institucional e portfólio de instalações para uma empresa de energia solar — aquecimento solar térmico, sistemas fotovoltaicos e aquecimento de piscinas.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES5%2B-F7DF1E?logo=javascript&logoColor=black)
![Sem dependências](https://img.shields.io/badge/depend%C3%AAncias-nenhuma-2ea44f)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222?logo=github)
![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)

[**Ver o site online →**](https://brunocodds.github.io/HelioraEnergiaSolar/)

</div>

---

## Sobre o projeto

A Heliora é uma empresa de energia solar de Jundiaí (SP) que atua desde 2005 com aquecimento solar térmico e, mais recentemente, com projeto e homologação de sistemas fotovoltaicos. Este projeto é o **site institucional** dela, pensado para três objetivos:

1. **Gerar confiança** — mostrar quem é a empresa, há quanto tempo atua e como trabalha.
2. **Mostrar prova real** — um portfólio de instalações com fotos, filtráveis por tipo de solução.
3. **Converter visitas em contatos** — WhatsApp sempre à mão, formulário de orçamento e mapa com a localização.

Foi construído em **HTML, CSS e JavaScript**

## Páginas

### Início — index.html

| Seção | O que apresenta |
|---|---|
| **Hero** | Proposta de valor ("Energia que se paga sozinha"), chamadas para orçamento e portfólio, números da empresa e um arco solar em SVG (nascer → pico → pôr do sol) |
| **Quem somos** | História da empresa, diferenciais e números institucionais |
| **O que oferecemos** | Os três pilares do atendimento: Comercial, Projetos e Manutenção |
| **Serviços prestados** | Cards de Energia solar (fotovoltaico), Solar térmico e Aquecimento de piscinas |
| **Economia real** | Estimativas de economia por solução, com gráfico circular em SVG animado ao entrar na tela |
| **Visita técnica** | Faixa de chamada para agendar uma visita gratuita |
| **Contato** | Formulário, endereço, e-mail, redes sociais e WhatsApp |
| **Mapa** | Google Maps incorporado e botão "Como chegar" |

### Instalações — instalacoes.html

Galeria com **16 projetos reais**, organizada em quatro categorias:

| Filtro | Fotos |
|---|:---:|
| Solar térmico | 7 |
| Fotovoltaico | 6 |
| Estrutura & Componentes | 2 |
| Piscinas | 1 |

Ao clicar em uma foto, abre um **lightbox** com legenda e navegação entre os itens do filtro ativo (setas do teclado, `Esc` ou clique fora para fechar).

## Funcionalidades

Todas as interações ficam em um único arquivo, **js/main.js**, sem dependências:

| Funcionalidade | Como funciona |
|---|---|
| **Header adaptativo** | Ganha fundo sólido após 24 px de rolagem (classe `is-solid`) |
| **Menu mobile** | Abre e fecha por botão, overlay, tecla `Esc` ou ao redimensionar para desktop; bloqueia a rolagem da página enquanto aberto |
| **Revelar ao rolar** | Elementos `.reveal` entram com animação via `IntersectionObserver` (com fallback para navegadores sem suporte) |
| **Gráfico de economia** | Os anéis SVG (`.arc-seg`) preenchem até o percentual definido em `data-percent` quando entram na viewport |
| **Filtro da galeria** | Botões `.filter-chip` mostram/ocultam itens pelo atributo `data-category` |
| **Lightbox** | Navegação circular entre as fotos visíveis, legenda vinda de `data-caption` e suporte a teclado |
| **Placeholder de imagem** | Se uma `<img data-ph>` falhar ao carregar, aparece um bloco informativo no lugar de um ícone quebrado |
| **Formulário** | Valida os campos, exibe mensagem de sucesso e limpa o formulário (**demonstrativo — veja [Formulário de contato](#formulário-de-contato)**) |

## Tecnologias e decisões

- **HTML5 semântico** — `header`, `nav`, `section`, `article`, `address`, `footer`; `lang="pt-BR"`; título e `meta description` em cada página.
- **CSS3 moderno** — Grid, Flexbox, custom properties e `clamp()` para tipografia fluida, tudo em um único `style.css`.
- **JavaScript vanilla** — um IIFE em modo estrito, sem globais.
- **Design tokens** centralizados em `:root` (cores, raios, sombras e fontes), o que torna trocar a identidade visual uma edição de poucas linhas.
- **Tipografia** — [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (títulos), [Inter](https://fonts.google.com/specimen/Inter) (texto) e [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (números e detalhes técnicos), via Google Fonts.
- **Responsivo, mobile-first** — breakpoints em 980 px, 720 px e 380 px.
- **Acessibilidade** — texto alternativo em todas as imagens, `aria-label` e `aria-expanded` nos controles, navegação por teclado no menu e no lightbox, e respeito a `prefers-reduced-motion`.

## Estrutura do projeto

```
HelioraEnergiaSolar/
├── index.html              # Página inicial
├── instalacoes.html        # Portfólio com filtros e lightbox
├── css/
│   └── style.css           # Tokens, componentes e responsividade
├── js/
│   └── main.js             # Todas as interações do site
└── images/
    ├── energia-solar-MS.jpg        # Fundo do hero
    ├── equipe-instalacao.jpg       # Seção "Quem somos"
    ├── campo-paineis-solares.jpg   # Fundo da seção de contato
    ├── servico-*.jpg               # Cards de serviços
    └── istalacoes/                 # Fotos da galeria de instalações
```

Na raiz também ficam o [`LICENSE`](LICENSE) e este `README.md`.

## Personalização

### Cores e fontes

Os tokens ficam no topo de [`css/style.css`](css/style.css):

```css
:root {
  --ink:   #10161F;  /* fundo escuro principal */
  --sun:   #F5B400;  /* amarelo da marca */
  --paper: #FAF8F3;  /* fundo claro principal */
  --slate: #232A33;  /* texto principal */
  --sky:   #2C6E9E;  /* acento técnico (térmico / água) */
}
```

### Adicionar uma foto à galeria

1. Salve a imagem em `images/istalacoes/`.
2. Em `instalacoes.html`, copie um bloco existente dentro de `.gallery-grid` e ajuste:

```html
<div class="gallery-item" data-category="fotovoltaico" data-caption="Legenda exibida no lightbox">
  <img src="./images/istalacoes/minha-foto.jpg"
       alt="Descrição para leitores de tela"
       data-ph="minha-foto.jpg (800×600px)">
  <span class="gallery-caption">Legenda curta</span>
</div>
```

Valores aceitos em `data-category`: `fotovoltaico`, `termico`, `piscina` e `estrutura`. Para criar uma categoria nova, adicione também um botão `.filter-chip` com o mesmo valor em `data-filter`.

### Dados da empresa

Endereço, telefone/WhatsApp, e-mail e redes sociais aparecem em `index.html` e `instalacoes.html` (contato, mapa, rodapé e botão flutuante). Use a busca do editor por `5511987654321` e `Rua das Palmeiras` para localizar todos os pontos.

## Formulário de contato

O formulário está presente nas duas páginas, mas é **demonstrativo**: o JavaScript impede o envio, mostra a mensagem de sucesso e limpa os campos. **Nenhum dado é enviado ou armazenado.**

Para uso real, integre com um serviço de formulários (por exemplo [Formspree](https://formspree.io) ou [Netlify Forms](https://docs.netlify.com/forms/setup/)) ou com um endpoint próprio, e remova o `preventDefault` do handler de `submit` em `js/main.js`.

## Deploy

O site é publicado com **GitHub Pages** a partir da branch `main`. Para publicar um fork:

1. Vá em **Settings → Pages** no repositório.
2. Em *Build and deployment*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Aguarde alguns minutos e acesse `https://<seu-usuario>.github.io/HelioraEnergiaSolar/`.

## Aviso

Os dados de contato (endereço, telefone, e-mail e perfis de redes sociais) e os números institucionais são **ilustrativos**, usados para fins de demonstração e portfólio.

## Licença

O **código-fonte** (HTML, CSS e JavaScript) é distribuído sob a [Licença MIT](LICENSE): você pode usar, copiar, modificar e distribuir, desde que mantenha o aviso de copyright.

A licença **não cobre** as fotos da pasta `images/`, nem o nome, a marca e a identidade visual da Heliora. Esses itens pertencem aos seus respectivos titulares e não devem ser reutilizados sem autorização.

## Autor

Desenvolvido por **[brunoCodds](https://github.com/brunoCodds)**.