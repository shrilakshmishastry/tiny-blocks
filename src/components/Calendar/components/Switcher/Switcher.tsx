import "@/style/button.css";
import "./Switcher.css";

type SwitcherProps = {
  /**
   * handler for previous button click
   */
  onPreviousCtaClick: () => void;
  /**
   * handler for next button click
   */
  onNextCtaClick: () => void;
  /**
   * handler for today button click
   */
  onTodayCtaClick: () => void;
};

/**
 * Component for switching between different views of the calendar.
 * Switching between next and previous months, weeks, days, etc depending on
 * the current view.On click on Today, will focus on the current date.
 *
 * Functionality
 * - Switching between different views of the calendar.
 * - on click on Today, will focus on the current date.
 * - on clicking previous and next buttons, will switch to previous and
 *   next months, weeks, days, etc depending on the current view.
 */
const Switcher = (props: SwitcherProps) => {
  return (
    <section className="flex-row switcher-container">
      <button className="btn cta-base" onClick={props.onPreviousCtaClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
      </button>
      <button
        className="btn cta-base today-cta"
        onClick={props.onTodayCtaClick}
      >
        Today
      </button>
      <button className="btn cta-base" onClick={props.onNextCtaClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </button>
    </section>
  );
};

export default Switcher;
