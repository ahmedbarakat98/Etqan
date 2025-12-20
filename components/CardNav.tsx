'use client';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};


export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  href: string;
  links: CardNavLink[];
};


export interface CardNavProps {
  logo: string | StaticImageData;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = ' min-h-fit',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > window.innerHeight - 50) {
        setIsFixed(true);  
        setIsHamburgerOpen(false);
        setIsExpanded(false);
        if (tlRef.current) {
          tlRef.current.reverse();
        }
      } else {
        setIsFixed(false); 
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  
  }, []);




  const calculateHeight = () => {
  const navEl = navRef.current;
  if (!navEl) return 270;

  const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement | null;
  if (!contentEl) return 270;

  const wasVisible = contentEl.style.visibility;
  const wasPointerEvents = contentEl.style.pointerEvents;
  const wasPosition = contentEl.style.position;
  const wasHeight = contentEl.style.height;

  contentEl.style.visibility = 'visible';
  contentEl.style.pointerEvents = 'auto';
  contentEl.style.position = 'static';
  contentEl.style.height = 'fit-content';

  
  contentEl.offsetHeight;

  const topBar = 60;  
  const padding = 12;    
  const contentHeight = contentEl.scrollHeight;

  contentEl.style.visibility = wasVisible;
  contentEl.style.pointerEvents = wasPointerEvents;
  contentEl.style.position = wasPosition;
  contentEl.style.height = wasHeight;

  return Math.max(20, topBar + contentHeight + padding);
};


  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 5 , opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
    className={`
      card-nav-container p-3 left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-50
      transition-all duration-1000 ease-in-out
      ${isFixed
        ? "fixed top-[0.8em] md:top-[1.5em]  translate-y-2"
        : "absolute top-[1.2em] md:top-[2em] shadow-none translate-y-2 "
      }
      ${className}
    `}
  >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-0.5">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-1.5 order-2 md:order-none`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div
              className={`hamburger-line w-[30px] h-0.5 bg-current transition-[transform,opacity,margin] duration-300 ease-linear origin-center ${
                isHamburgerOpen ? 'translate-y-1 rotate-45' : ''
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[30px] h-0.5 bg-current transition-[transform,opacity,margin] duration-300 ease-linear origin-center ${
                isHamburgerOpen ? '-translate-y-1 -rotate-45' : ''
              } group-hover:opacity-75`}
            />
          </div>

          <Link href="/">
          <div className="logo-container cursor-pointer flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1">
            <img src={typeof logo === "string" ? logo : logo.src} alt={logoAlt} className="logo w-15" />
            <h3 className='font-bold flex flex-col md:text-center  text-[20px] py-0 text-[#1694CC]'>ETQAN <span className='text-[8px]'>Geoinformatics Systems</span></h3>
          </div></Link>

          <button
            type="button"
            className="card-nav-cta-button cursor-pointer hidden md:inline-flex border-0 rounded-[calc(0.75rem-0.2rem)] px-4 bg-[#1694CC] text-white hover:bg-white border-2 border-white hover:border-[#1694CC] hover:text-[#1694CC] items-center h-full font-medium transition-colors duration-300"
          >
            <Link href="/contact">Let's Talk</Link>
            
          </button>
        </div>
        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-1 ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end md:gap-3`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 6).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="select-none group relative text-center bg-[#1694CC] hover:bg-blue-50 hover:border-2 hover:border-[#1694CC] hover:shadow-2xl duration-200 flex justify-center items-center gap-2 p-[8px_10px] md:p-[10px_14px] h-full rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{color: item.textColor }}
            >
              <Link href={item.href} className='w-full h-full flex justify-center items-center'>
              <div className="nav-card-label  font-normal  duration-200 group-hover:scale-110 group-hover:text-[#1694CC] tracking-[-0.5px] text-[15px] md:text-[16px] rubik">
                {item.label}
              </div>
              </Link>

            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
