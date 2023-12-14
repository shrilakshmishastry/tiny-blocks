import "./BottomAckBtn.css";

/**
 * Functionality:
 *  - A  bottom absolutely positioned button
 *  - The button will come above the keyboard when
 * @returns UI for button that is absolutely positioned to bottom of page
 */
const BottomAckBtn = () => {
  return (
    <div className="container">
      <header></header>
      <div className="ipt">
        <input
          style={{
            backgroundColor: "yellow",
          }}
          type="number"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <button className="btn">Submit</button>
    </div>
  );
};
export default BottomAckBtn;
