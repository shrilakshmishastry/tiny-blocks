import "./ViewToggler.css";

type ViewTogglerProp = {
  /**
   * call back function to handle the change in
   * radio selection
   */
  onViewChange: (selectedView: string) => void;
};

/**
 * A component to toggle view based on Month, Week and Day.
 * This is used in the context of calendar.It highlights active selection
 * with white background
 * @returns UI for switch of calendar view based on Month, Week and Day
 */
const ViewToggler = (prop: ViewTogglerProp) => {
  return (
    <div className="toggler-container">
      <input
        type="radio"
        name="viewSelection"
        onChange={(e) => prop.onViewChange(e.target.value)}
        id="month"
        value="month"
      />
      <label htmlFor="month">Month</label>

      <input
        type="radio"
        name="viewSelection"
        id="week"
        onChange={(e) => prop.onViewChange(e.target.value)}
        value="week"
      />
      <label htmlFor="week">Week</label>

      <input
        type="radio"
        name="viewSelection"
        id="day"
        value="day"
        onChange={(e) => prop.onViewChange(e.target.value)}
      />
      <label htmlFor="day">Day</label>

      <span className="highlighter"></span>
    </div>
  );
};

export default ViewToggler;
