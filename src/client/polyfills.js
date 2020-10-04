console.log({ IntersectionObserver });
if (IntersectionObserver === undefined) {
  console.log('Intersecion Observer loaded');
  require('intersection-observer');
}
