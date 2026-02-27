'use client';

import { useEffect, useMemo, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

type BannerSlide = {
  id: number;
  image: string;
  alt: string;
  imageMobile?: string;
  imageTablet?: string;
};

const AUTOPLAY_MS = 5000;

const TopBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners: BannerSlide[] = useMemo(
    () => [
      {
        id: 1,
        image: '/assets/images/homebanner1_desk_1340X525.png',
        imageMobile: '/assets/images/homebanner1mob2.png',
        imageTablet: '/assets/images/homebanner1tab2.png',
        alt: 'Gyanhouz Learning Hub Banner 1',
      },
      {
        id: 2,
        image: '/assets/images/homebanner2_desk_1340X525.png',
        imageMobile: '/assets/images/homebanner2_mob_768X1376.png',
        imageTablet: '/assets/images/homebanner2_tab_1265X525.png',
        alt: 'Gyanhouz Learning Hub Banner 2',
      },
      {
        id: 3,
        image: '/assets/images/homebanner3_desk_1340X525.png',
        imageMobile: '/assets/images/homebanner3_mob_768X1376.png',
        imageTablet: '/assets/images/homebanner3_tab_1265X525.png',
        alt: 'Gyanhouz Learning Hub Banner 3',
      },
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="relative -mt-[10px] pb-5 lg:mt-14  lg:pb-5 overflow-hidden">
      <div className="container mx-auto px-1">

        {/* Slider Wrapper */}
        <div className="relative w-full bg-white overflow-hidden">

          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="
                  min-w-full
                  flex
                  items-center
                  justify-center
                  py-0
                  lg:py-1   /* Desktop top & bottom spacing */
                "
              >
                <picture className="w-full flex justify-center">
                  <source
                    srcSet={banner.image}
                    media="(min-width: 1280px)"
                  />
                  <source
                    srcSet={banner.imageTablet ?? banner.image}
                    media="(min-width: 640px)"
                  />
                  <img
                    src={banner.imageMobile ?? banner.image}
                    alt={banner.alt}
                    className="w-full object-contain"     
                    loading={banner.id === 1 ? 'eager' : 'lazy'}
                  />
                </picture>

                {/* LCP Optimization */}
                {banner.id === 1 && (
                  <AppImage
                    src={banner.image}
                    alt={banner.alt}
                    priority
                    className="hidden"
                  />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopBanner;