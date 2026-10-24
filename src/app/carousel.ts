export function carouselEdges(scrollLeft: number, clientWidth: number, scrollWidth: number): { previous: boolean; next: boolean } {
  return {
    previous: scrollLeft > 2,
    next: scrollLeft + clientWidth < scrollWidth - 2
  };
}
