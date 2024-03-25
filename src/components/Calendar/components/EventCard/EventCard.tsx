import { useRef, useState } from "react";
import "./EventCard.css";
/**
 * Functionality:
 *  - Show title
 *  - show timing
 *  - show participants list
 *  - occupy space in calendar based on timing
 *  - whole card is draggable
 *  - whole card is clickable
 *  - on click of card, allow editing of event
 *  - whole card is resizable
 *    eg: if event scheduled is for 2 hours height of card should be 2x
 *
 * Note:
 *  Design decisions:
 *   - Each time grid is 1 hour
 *   - grid height is (view port height - header height)  / 24
 *   - grid width of one day is (view port width - sidebar width) / 7
 *
 * @returns UI for event card
 */
const EventCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPositionChanging, setIsPositionChanging] = useState(false);
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);

  const onDragFooterStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
  };
  const onDragFooter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current && isDragging) {
      cardRef.current.style.height = `${e.clientY}px`;
    }
  };

  const onDragFooterEnd = () => {
    setIsDragging(false);
  };

  const onDragCardStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsPositionChanging(true);

    if (cardRef.current) {
      setXPosition(e.clientX);
      setYPosition(e.clientY);
    }
  };

  const onDragCardEnd = () => {
    setIsPositionChanging(false);
  };

  const onDragCard = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current && isPositionChanging) {
      /**
       * Note:
       *    what am I doing here?
       *   - In Drag start we get the distance from browser left and store it in variable
       *   - when we drag, we subtract initial distance from new one. which will be negative if moved towards
       *     right and positive if moved towards left
       *   - with that subtracted value we again subtract it in offsetLeft which is
       *     distance of card from parent. Then assigning it to left position of card.
       *
       * eg: newX is -4 cursor is moved 4 pixel from initial position
       *     offsetLeft: 200
       *     left = 200 - (-4) = 204
       *    card will move 4 pixel towards right
       */

      const newX = xPosition - e.clientX;
      const newY = yPosition - e.clientY;

      setXPosition(e.clientX);
      setYPosition(e.clientY);

      cardRef.current.style.top = `${cardRef.current.offsetTop - newY}px`;
      cardRef.current.style.left = `${cardRef.current.offsetLeft - newX}px`;
    }
  };

  return (
    <section
      ref={cardRef}
      onMouseDown={onDragCardStart}
      onMouseMove={onDragCard}
      onMouseUp={onDragCardEnd}
      className="event-card-container"
    >
      Event card
      <footer
        onMouseMove={onDragFooter}
        onMouseDown={onDragFooterStart}
        onMouseUp={onDragFooterEnd}
        className="footer"
        ref={footerRef}
      ></footer>
    </section>
  );
};

export default EventCard;
