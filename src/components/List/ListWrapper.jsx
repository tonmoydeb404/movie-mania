/* eslint-disable no-lonely-if */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { LISTCONTENT, LISTHEADER, LISTSECTION } from '../../assets/styles/ListWrapper.styles';
import ListFilter from './ListFilter';

const ListWrapper = (
    { title, filters, defaultFilter, contentWidth, isVideo = false, scroller = false, children },
    ref
) => {
    const [filter, setFilter] = useState(defaultFilter);
    const scrollSectionRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    // SCROLL ON MOUSE WHEEL
    useEffect(() => {
        if (scroller) {
            const handleWheel = (e) => {
                // SCROLL PIXEL
                const scrollPixel = 20;

                if (e.deltaY > 0) {
                    // EXCUTE WHEN SCROLL RIGHT IS END
                    if (
                        scrollSectionRef.current.scrollWidth <=
                        scrollSectionRef.current.scrollLeft + scrollSectionRef.current.offsetWidth
                    ) {
                        setHovered(false);
                        return;
                    }
                    // EXCUTE TO GO TO RIGHT
                    scrollSectionRef.current.scrollLeft += scrollPixel;
                } else {
                    // EXCUTE WHEN SCROLL LEFT IS END
                    if (scrollSectionRef.current.scrollLeft <= 0) {
                        setHovered(false);
                        return;
                    }
                    // EXCUTE TO GO TO LEFT
                    scrollSectionRef.current.scrollLeft -= scrollPixel;
                }

                // PREVENT SCROLLING
                e.preventDefault();
            };

            if (hovered) {
                scrollSectionRef.current.addEventListener('wheel', handleWheel);
            } else {
                scrollSectionRef.current.removeEventListener('wheel', handleWheel);
            }
        }
    }, [hovered, scroller]);

    // RESET SCROLL ON CHANGING LINK
    useEffect(() => {
        if (scroller) {
            scrollSectionRef.current.scrollLeft = 0;
        }
    }, [filter, scroller]);

    return (
        <LISTSECTION ref={ref}>
            <LISTHEADER>
                {title && <h2> {title} </h2>}
                {filters && (
                    <ListFilter filters={filters} currentFilter={filter} setFilter={setFilter} />
                )}
            </LISTHEADER>
            <LISTCONTENT
                contentWidth={contentWidth}
                isVideo={isVideo}
                onMouseOver={scroller ? () => setHovered(true) : null}
                onMouseLeave={scroller ? () => setHovered(false) : null}
                ref={scroller ? scrollSectionRef : null}
                className={scroller ? 'scrollable' : null}
            >
                {filters ? children(filter) : children}
            </LISTCONTENT>
        </LISTSECTION>
    );
};

export default forwardRef(ListWrapper);
