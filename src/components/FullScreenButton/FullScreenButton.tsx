import { useEffect, useRef, useState } from "react";
import "../../styles/index.css";
import "./FullScreenButton.css";

type FullScreenButtonProps = {
  children: React.ReactNode;
  buttonStyle: React.CSSProperties;
};

/**
 * Functionality:
 *  - Provides a HOC that contains button
 *  - on click it toggles between
 *     - full screen
 *     - normal view
 * Api used:
 *   - <elem>.requestFullScreen()
 * @returns full screen button UI
 */
const FullScreenButton = (props: FullScreenButtonProps) => {
  const resizeBtn = useRef<null | HTMLDivElement>(null);
  const [isFSMode, setFSMode] = useState(false);

  /**
   * When full screen is exited , set isFSMode to false
   */
  const onFullScreenChange = () => {
    if (document.fullscreenElement === null) {
      setFSMode(false);
    }
  };

  /**
   * listen to the dom when it enters and exit full screen
   * why this approach?
   *  - certain browsers like firefox doesn't support keydown events in full screen
   *   for security purpose
   */
  useEffect(() => {
    document.addEventListener("fullscreenchange", onFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullScreenChange);
    };
  }, []);

  const onClick = () => {
    if (!isFSMode && resizeBtn.current?.requestFullscreen) {
      setFSMode(true);
      resizeBtn.current.requestFullscreen();
    } else {
      setFSMode(false);
      document.exitFullscreen();
    }
  };

  return (
    <div className="outer-container" ref={resizeBtn} tabIndex={0}>
      {props.children}
      <button
        aria-label={
          isFSMode
            ? "Click on to exit full screen"
            : "Click on to enter full screen"
        }
        style={props.buttonStyle}
        className={`btn`}
        onClick={onClick}
      >
        {isFSMode ? (
          <svg
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            className="zoom-out-btn"
          >
            <path
              fill-rule="evenodd"
              d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"
            />
          </svg>
        ) : (
          <svg
            aria-hidden
            className="zoom-in-btn"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default FullScreenButton;
