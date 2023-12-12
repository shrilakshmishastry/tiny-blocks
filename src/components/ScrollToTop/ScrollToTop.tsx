import { useEffect, useState } from "react";
import "./ScrollToTop.css";

/**
 * Functionality:
 *  - check window scrollTop >30
 *     - yes show scrollTop button
 *  - onClicking ScrollTop scroll the screen to top and hide button
 *
 * @returns scroll to top button
 */
const ScrollToTop = () => {
  const [btnVisible, setBtnVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30) {
        setBtnVisible(true);
      } else {
        setBtnVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (btnVisible) {
    return (
      <button onClick={onClick} className="scroll-to-top-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </button>
    );
  }
  return null;
};
export default ScrollToTop;
