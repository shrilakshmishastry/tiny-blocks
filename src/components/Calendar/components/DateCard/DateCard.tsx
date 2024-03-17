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
};

/**
 * Component for displaying a date card.
 * Functionality:
 *  - display the date
 *  - call back function to pass on the on click event
 * @returns Date card
 */
const DateCard = (props: DateCardProps) => {
  return <p>Date card</p>;
};

export default DateCard;
