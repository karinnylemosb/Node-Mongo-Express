// Lista aqui todas as rotas que tiver;
import express from 'express';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Curso de node' });
  });

  app.use(express.json(), livros, autores);
};

export default routes;
// O objetivo desse index.js é juntar todas as rotas criadas, por organização, porque se tiver várias rotas, fica mais organizado.
