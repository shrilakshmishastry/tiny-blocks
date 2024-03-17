import "@/style/button.css";
import "@/style/blocks.css";
import classNames from "classnames";
import "./DateCard.css";

type DateCardProps = {
  /**
   * callback function on selecting a date
   */
  onDateSelect: () => void;
  /**
   * date to display
   * This should be number not date object
   */
  dateInNumber: number;
  /**
   * day of the week
   */
  day: string;
  /**
   * whether current date is selected on
   */
  isActive: boolean;
};

/**
 * Component for displaying a date card.
 * Functionality:
 *  - display the date
 *  - call back function to pass on the on click event
 * @returns Date card
 */
const DateCard = (props: DateCardProps) => {
  const cardStyle = classNames("flex-column", "btn", "btn-base", {
    active: props.isActive,
    "non-active": !props.isActive,
  });
  return (
    <button className={cardStyle} onClick={props.onDateSelect}>
      <span>{props.day}</span>
      <span className="date">{props.dateInNumber}</span>
    </button>
  );
};

export default DateCard;
