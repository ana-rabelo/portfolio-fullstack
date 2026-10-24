import { ChangeDetectionStrategy, Component, ElementRef, HostListener, computed, signal, viewChild } from '@angular/core';
import { carouselEdges } from './carousel';
import { partitionProjects, projects, type ProjectFilter } from './projects';

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
  protected readonly groupedProjects = computed(() => partitionProjects(projects, this.selectedFilter()));
  protected readonly carouselTrack = viewChild<ElementRef<HTMLDivElement>>('carouselTrack');
  protected readonly carouselState = signal({ previous: false, next: true });
  protected readonly year = new Date().getFullYear();

  protected selectFilter(filter: ProjectFilter): void {
    this.selectedFilter.set(filter);
    requestAnimationFrame(() => {
      const track = this.carouselTrack()?.nativeElement;
      if (track) track.scrollLeft = 0;
      this.updateCarouselEdges();
    });
  }

  protected scrollProjects(direction: -1 | 1): void {
    const track = this.carouselTrack()?.nativeElement;
    if (!track) return;

    const card = track.querySelector<HTMLElement>('.carousel-card');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * ((card?.offsetWidth ?? track.clientWidth) + gap) });
  }

  @HostListener('window:resize')
  protected updateCarouselEdges(): void {
    const track = this.carouselTrack()?.nativeElement;
    this.carouselState.set(track
      ? carouselEdges(track.scrollLeft, track.clientWidth, track.scrollWidth)
      : { previous: false, next: false });
  }
}
