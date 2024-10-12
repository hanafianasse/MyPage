import React, { useRef, useState, useEffect } from "react";
import { oneTwoBreakPoint } from '../util';

export default function Slider({ children }) {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [startPosition, setStartPosition] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [itemPerPage, setItemPerPage] = useState(oneTwoBreakPoint());
    const locale = 'en';

    const touchStartX = useRef(0);

    const totalChildren = React.Children.count(children);

    useEffect(() => {
        const handleResize = () => {
            setItemPerPage(oneTwoBreakPoint());
            setCurrentIndex(0);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);

    const handleTouchStart = (e) => {
        const touchX = e.touches[0].clientX;
        touchStartX.current = touchX;
        setStartPosition(touchX);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging || startPosition === null) return;

        const currentTouchX = e.touches[0].clientX;
        const diff = locale == 'ar' ? currentTouchX - touchStartX.current : touchStartX.current - currentTouchX;

        if (diff > 10 && currentIndex < totalChildren - itemPerPage) {
            setCurrentIndex(currentIndex + itemPerPage);
            setIsDragging(false);
        } else if (diff < -10 && currentIndex > 0) {
            setCurrentIndex(currentIndex - itemPerPage);
            setIsDragging(false);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        setStartPosition(null);
    };

    const handleClick = (index) => {
        setCurrentIndex(index);
    }

    return (
        <>
            <div
                className="relative w-full min-w-[320px] overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {React.Children.map(children, (child, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 flex justify-center items-center p-8 xs:p-20"
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            < div className="w-full flex justify-center items-center h-10" >
                {React.Children.map(children, (child, index) => (
                    <div onClick={() => handleClick(index)} className={`mx-2 h-2 ${index == currentIndex ? 'bg-[#faa908] w-6' : 'bg-[#1F1F1F] w-4'} rounded-[10px]`}></div >
                ))}
            </div >
        </>
    );
}