import assert from 'node:assert/strict';
import test from 'node:test';
import { filterProjects, partitionProjects, projects } from './projects.ts';
import { carouselEdges } from './carousel.ts';

test('exibe todos os projetos na categoria Todos', () => {
  assert.ok(projects.length >= 8);
  assert.equal(filterProjects(projects, 'Todos').length, projects.length);
});

test('filtra projetos pela categoria escolhida', () => {
  const apis = filterProjects(projects, 'APIs');
  assert.ok(apis.length > 0);
  assert.ok(apis.every((project) => project.category === 'APIs'));
});

test('projetos privados não expõem uma URL de repositório', () => {
  assert.ok(projects.filter((project) => project.private).every((project) => !project.url));
});

test('separa sistemas em produção dos demais sem alterar a ordem', () => {
  const grouped = partitionProjects(projects, 'Todos');
  assert.deepEqual(grouped.production.map((project) => project.id), ['legislativo', 'diarias', 'ponto']);
  assert.deepEqual(grouped.other.map((project) => project.id), ['insis', 'imobiliaria', 'alfood', 'space', 'escola', 'dados', 'money']);
});

test('o filtro de categoria também se aplica ao carrossel', () => {
  const grouped = partitionProjects(projects, 'APIs');
  assert.deepEqual(grouped.production, []);
  assert.deepEqual(grouped.other.map((project) => project.id), ['imobiliaria', 'escola', 'money']);
});

test('setas do carrossel refletem o início, o meio e o fim do trilho', () => {
  assert.deepEqual(carouselEdges(0, 320, 960), { previous: false, next: true });
  assert.deepEqual(carouselEdges(320, 320, 960), { previous: true, next: true });
  assert.deepEqual(carouselEdges(640, 320, 960), { previous: true, next: false });
  assert.deepEqual(carouselEdges(0, 320, 320), { previous: false, next: false });
});
