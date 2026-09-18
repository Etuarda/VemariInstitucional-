# Institucional Vemari

Site institucional da Vemari Empreendimentos, construído com Next.js App Router, React, TypeScript e Tailwind CSS.

## Executar localmente

```powershell
npm install
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Qualidade

```powershell
npm run typecheck
npm run build
```

## Estrutura

```text
public/
└── brand/                   # arquivos oficiais de marca servidos diretamente
src/
├── app/                     # rotas, layouts e composição de páginas
├── content/                 # conteúdo institucional compartilhado
├── features/                # regras, dados e componentes de cada domínio
│   ├── attribution/
│   ├── brokers/
│   ├── contact/
│   └── developments/
└── shared/                  # recursos reutilizados por diferentes features
    ├── components/
    ├── lib/
    └── types/
```

As rotas apenas compõem a interface. Regras e dados permanecem próximos da feature a que pertencem, enquanto `shared` recebe somente código com uso realmente transversal.

## Decisões de arquitetura

- Server Components são o padrão; componentes de cliente ficam restritos a interação, persistência e telemetria.
- Dados temporários estão isolados por feature para permitir futura troca por CMS ou API sem acoplar as páginas.
- A origem comercial do primeiro contato é preservada durante a janela de atribuição.
- Falhas de analytics não interrompem a navegação nem a conversão pelo WhatsApp.
- Imagens de marca ficam em `public/brand`; mídia editorial continua com placeholder enquanto não houver material aprovado.

## Conteúdo pendente de validação

- Dados reais de corretores, telefones e empreendimentos.
- Fotografias institucionais e dos empreendimentos.
- Integração do formulário com o CRM oficial.
- Textos jurídicos definitivos para privacidade e termos de uso.
- Configuração de GA4, Meta Pixel ou GTM conforme a governança aprovada.
