import "../../styles/index.css";
import "./FeedbackCard.css";

type FeedbackCardProps = {
  /**
   * feedback by user
   */
  feedback: string;
  /**
   * name of the user
   */
  name: string;
  /**
   * profession
   */
  designation: string;
  /**
   * profile phot of user
   */
  profilePhoto: string;
  /**
   * background color for card
   */
  backgroundColor: string;
  /**
   * text color
   */
  textColor: string;
};

/**
 * Feedback card
 *
 * UI description:
 *  - Card with feedback
 *  - user image at the bottom of card
 *
 * @returns Component of Feedback card
 */
const FeedbackCard = (props: FeedbackCardProps) => {
  return (
    <div className="flex-column container">
      <div className="flex-column card-container">
        <div
          className="card text-16 lh-144"
          style={{
            backgroundColor: props.backgroundColor,
            color: props.textColor,
          }}
        >
          {props.feedback}
        </div>
        <img src={props.profilePhoto} height={50} width={50} />
      </div>
      <div>
        <p>{props.name}</p>
        <p className="text-12 mt-2 profession">{props.designation}</p>
      </div>
    </div>
  );
};
export default FeedbackCard;
