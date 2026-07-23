const usuarios = require('../data/usuarios');

//receber requisições POST na url /usuarios em chunk e printar quando finalizado.. transformar json recebido em objeto javascript
function usuariosRoute(req, res) {
  if (req.method === 'GET' && req.url === '/usuarios') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(usuarios));
    return true;
  }
  if (req.method === 'POST' && req.url === '/usuarios') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const usuario = JSON.parse(body);

      usuarios.push(usuario);

      res.statusCode = 201;
      res.setHeader('Content-type', 'application/json');
      res.end(JSON.stringify(usuario));
    });
  }
  return true;
}

module.exports = usuariosRoute;
