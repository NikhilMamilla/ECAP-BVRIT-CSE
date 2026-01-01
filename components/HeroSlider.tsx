import React, { useContext } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StoreContext } from '../storeContext/StoreContext';

// Custom Arrow Components
const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full transition-all duration-300 group hidden md:block"
            onClick={onClick}
        >
            <ChevronRight className="text-white w-6 h-6 group-hover:scale-110 transition-transform" />
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full transition-all duration-300 group hidden md:block"
            onClick={onClick}
        >
            <ChevronLeft className="text-white w-6 h-6 group-hover:scale-110 transition-transform" />
        </div>
    );
};

const HeroSlider: React.FC = () => {
    const { statsData, heroList } = useContext(StoreContext);
    const dynamicImages = statsData
        ?.filter((item: any) => item.section === 'hero_slider' && item.note === 'active')
        .map((item: any) => ({
            url: item.value,
            alt: item.label,
        }));

    const displayImages = dynamicImages && dynamicImages.length > 0 ? dynamicImages : heroList;

    if (displayImages.length === 0) {
        return null;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        pauseOnHover: true,
        fade: true,
        cssEase: "linear",
        swipe: true,
        touchMove: true
    };

    return (
        <div className="w-full overflow-hidden bg-gray-900 relative">
            <Slider {...settings}>
                {displayImages.map((img, index) => (
                    <div key={index} className="relative outline-none">
                        {/* Slide Container */}
                        <div className="relative w-full aspect-[1500/600] bg-gray-900 overflow-hidden">
                            <img
                                src={img.url}
                                alt={img.alt}
                                className="w-full h-full object-cover object-center transition-transform duration-[7000ms] group-hover:scale-105"
                            />

                            {/* Overlay Gradient for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

                            {/* Info Overlay */}
                            <div className="absolute bottom-16 left-0 right-0 text-center z-20 px-4">
                                <h3 className="text-white text-xl md:text-3xl font-bold opacity-0 translate-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards tracking-tight" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>
                                    {img.alt}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Premium Scroll Indicator */}
            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-60">
                <span className="text-[10px] text-white font-medium uppercase tracking-[0.2em]">Scroll</span>
                <div className="w-[1px] h-6 bg-gradient-to-b from-white to-transparent" />
            </div> */}
        </div>
    );
};

export default HeroSlider;
