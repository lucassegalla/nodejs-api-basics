const http = require('http');
const usuariosRoute = require('./routes/usuarios');

//criar servidor com metodos req e res
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  //encaminha requisições de usuarios
  if (usuariosRoute(req, res)) {
    return;
  }

  //se url for vazia vai pra pagina inicial
  if (req.method === 'GET' && req.url === '/') {
    res.end('Pagina inicial');
    return;
  }

  //metodo GET /produtos
  if (req.url === '/produtos') {
    res.end('lista de produtos');
    return;
  }

  //rota não encontrada
  res.statusCode = 404;
  res.end('pagina nao encontrada');
});

server.listen(3000);
