import { useState, useEffect, useRef, MutableRefObject } from 'react';

export const useIsVisible = (ref: any, rootMargin = '0px') => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  // useEffect(() => {
  //   const { current } = ref;

  //   if (current === null) return;
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       // Update our state when observer callback fires
  //       setIntersecting(entry.isIntersecting);
  //     },
  //     {
  //       rootMargin,
  //     }
  //   );
  //   if (current) {
  //     observer.observe(current);
  //   }
  //   return () => {
  //     observer.unobserve(current);
  //   };
  // }, []); // Empty array ensures that effect is only run on mount and unmount
  return true;
};
