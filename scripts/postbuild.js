const fs = require('fs');
const path = require('path');

// 1. Cria o .nojekyll em out/ e na raiz
fs.writeFileSync(path.join(__dirname, '..', 'out', '.nojekyll'), '');
fs.writeFileSync(path.join(__dirname, '..', '.nojekyll'), '');

// 2. Copia o index.html gerado em out/ para a raiz
try {
  fs.copyFileSync(
    path.join(__dirname, '..', 'out', 'index.html'),
    path.join(__dirname, '..', 'index.html')
  );
} catch (err) {
  console.warn('Aviso: Não foi possível copiar out/index.html para index.html:', err.message);
}

// 3. Copia brand e brokers para a raiz caso haja deploy direto da raiz da branch
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  copyDirSync(path.join(__dirname, '..', 'out', 'brand'), path.join(__dirname, '..', 'brand'));
  copyDirSync(path.join(__dirname, '..', 'out', 'brokers'), path.join(__dirname, '..', 'brokers'));
} catch (err) {
  console.warn('Aviso ao sincronizar pastas de assets:', err.message);
}

console.log('Postbuild concluído com sucesso (.nojekyll, index.html, brand, brokers sincronizados).');
