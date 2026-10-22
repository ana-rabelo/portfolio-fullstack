import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { filterProjects, projects, type ProjectFilter } from './projects';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly filters: ProjectFilter[] = ['Todos', 'Web', 'APIs', 'Dados', 'Arquitetura'];
  protected readonly selectedFilter = signal<ProjectFilter>('Todos');
  protected readonly menuOpen = signal(false);
  protected readonly visibleProjects = computed(() => filterProjects(projects, this.selectedFilter()));
  protected readonly year = new Date().getFullYear();

  protected selectFilter(filter: ProjectFilter): void {
    this.selectedFilter.set(filter);
  }
}
