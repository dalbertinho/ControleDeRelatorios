angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {

    $routeProvider
    .when('/alunos', {
      templateUrl: 'partials/alunos.html',
      controller: 'AlunosController'
    })
    .when('/cronograma', {
      templateUrl: 'partials/cronograma.html',
      controller: 'CronogramaController'
    })
    .when('/notas', {
      templateUrl: 'partials/notas.html',
      controller: 'NotasController'
    });
});