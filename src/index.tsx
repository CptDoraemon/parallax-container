import styles from './styles.css'
import * as React from 'react';
import {RefObject, useEffect, useRef, useState} from 'react';

// import './styles.css';

function useParallax(containerRef: RefObject<HTMLInputElement>): number {
  const [scrolledPercentage, setScrolledPercentage] = useState(0.5);
  /*
  * scrolledPercentage ~ [0-1]:
  * 0: top of the page is about to show from the bottom of viewport
  * 0.5: normal position, the whole page is visible.
  * 1: bottom of the page is about to disappear from the top of viewport
  * */

  useEffect(() => {
    function scrollHandler() {
      if (containerRef.current === null) return;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.getBoundingClientRect().height;
      const containerBottom = containerTop + containerHeight;

      const isBefore = containerTop > containerHeight;
      const isPast = containerBottom < 0;
      const isContainerInSight = !isBefore && !isPast;

      if (isContainerInSight) {
        const scrolled /* % withInThisContainer */ = 1 - containerBottom / (2 * containerHeight);
        setScrolledPercentage(scrolled);
      } else if (isBefore && scrolledPercentage !== 0) {
        setScrolledPercentage(0);
      } else if (isPast && scrolledPercentage !== 1) {
        setScrolledPercentage(1);
      }
    }

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  });

  return scrolledPercentage;
}

interface ParallaxBackgroundProps {
  backgroundUrl: string,
  scrolledPercentage: number
}

function ParallaxBackground(props: ParallaxBackgroundProps) {
  const PARALLAX_STRENGTH = 1; // fixed at 2
  const offset = (0.5 - props.scrolledPercentage) * 100 * PARALLAX_STRENGTH;

  return (
    <div className={styles.parallaxBackground} style={{top: `${-offset}%`}}>
      <img src={props.backgroundUrl} alt={'background'}/>
    </div>
  )
}

interface ParallaxContainerProps {
  backgroundUrl: string,
  children: any
}

function ParallaxContainer(props: ParallaxContainerProps) {
  const containerRef = useRef(null);
  const scrolledPercentage: number = useParallax(containerRef);

  const PARALLAX_STRENGTH = 2; // sync at 2
  const offset = (0.5 - scrolledPercentage) * 100 * PARALLAX_STRENGTH;

  return (
    <>
      <div className={styles.parallaxContainer} style={{top: `${offset}%`}}>
        <ParallaxBackground backgroundUrl={props.backgroundUrl} scrolledPercentage={scrolledPercentage} />
        <div className={styles.parallaxPayload}>
          { props.children }
        </div>
      </div>
      <div className={styles.parallaxContainerPlaceholder} ref={containerRef}>

      </div>
    </>
  )
}

export default ParallaxContainer;
