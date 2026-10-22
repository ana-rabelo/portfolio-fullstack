import assert from 'node:assert/strict';
import test from 'node:test';
import { filterProjects, projects } from './projects.ts';

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
