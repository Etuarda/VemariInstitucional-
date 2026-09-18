# Guia de Deploy no GitHub Pages (Vemari Institucional)

O projeto foi configurado com exportação estática do Next.js (`output: 'export'`), gerando todos os arquivos estáticos na pasta `out/` com o `index.html` na raiz do build, suporte a `trailingSlash: true` e o arquivo `.nojekyll` gerado automaticamente.

---

## Opção 1: Deploy Automático via GitHub Actions (Recomendado)

O repositório já inclui o fluxo pronto em `.github/workflows/deploy.yml`.

### Passos:
1. **Inicializar o repositório Git e fazer o primeiro commit**:
   ```bash
   git init
   git add .
   git commit -m "feat: site institucional vemari pronto para deploy"
   ```

2. **Criar repositório no GitHub** e conectar:
   ```bash
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```

3. **Ativar o GitHub Pages no repositório**:
   - Acesse seu repositório no GitHub: **Settings** > **Pages**.
   - Em **Build and deployment** > **Source**, selecione: **GitHub Actions**.
   - Pronto! O GitHub Actions irá compilar e publicar o site automaticamente a cada commit na branch `main`.

---

## Opção 2: Deploy Direto com os Arquivos Estáticos (`index.html` fora/na raiz)

Se você preferir publicar os arquivos estáticos diretamente (por exemplo em uma branch `gh-pages` ou em repositório dedicado `usuario.github.io`):

1. **Gerar os arquivos estáticos**:
   ```bash
   npm run build
   ```
   *(Isso criará a pasta `out/` contendo `index.html` na raiz, todos os caminhos e o arquivo `.nojekyll`)*.

2. **Copiar o conteúdo de `out/`**:
   - O arquivo `out/index.html` é a página inicial.
   - Basta enviar o conteúdo de dentro da pasta `out/` para a branch `gh-pages` ou para o seu servidor.

---

## Comandos Úteis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento na porta **8080** (`http://localhost:8080`) |
| `npm run build` | Compila o site, gera os arquivos estáticos em `out/` e cria o `.nojekyll` |
| `npm run typecheck` | Valida tipagens TypeScript sem emitir arquivos |

