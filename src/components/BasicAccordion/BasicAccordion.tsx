import { useState } from "react";
import "../../styles/index.css";
import "./BasicAccordion.css";

type BasicAccordionProps = {
  /**
   * allow multiple accordion open in parallel
   */
  allowMultiplePanelOpen: boolean;
  /**
   * accordion data to display
   */
  data: Array<{
    title: string;
    description: string;
  }>;
};

const Accordion = ({
  panelData,
  index,
  onClosePanel,
  onOpenPanel,
  panelVisible,
  panelClassName,
}: {
  panelData: BasicAccordionProps["data"][0];
  index: number;
  onClosePanel: (index: number) => void;
  onOpenPanel: (index: number) => void;
  panelVisible: boolean;
  panelClassName: string;
}) => {
  return (
    <div className="container br8 p16" key={`${index}${panelData.title}`}>
      <h3
        onClick={() => {
          panelVisible ? onClosePanel(index) : onOpenPanel(index);
        }}
        className="flex-row between"
      >
        <span>{panelData.title}</span>
        {panelVisible ? (
          <button
            className="btn"
            aria-controls={`${panelData.title}-panel`}
            id={panelData.title}
            aria-expanded={true}
            onClick={() => onClosePanel(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </button>
        ) : (
          <button
            className="btn"
            aria-controls={`${panelData.title}-panel`}
            id={panelData.title}
            aria-expanded={false}
            onClick={() => onOpenPanel(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </button>
        )}
      </h3>
      <p
        role="region"
        id={`${panelData.title}-panel`}
        className={`panel lh-144 ${panelClassName}`}
        aria-labelledby={panelData.title}
      >
        {panelData.description}
      </p>
    </div>
  );
};

/**
 * Accordion component
 *
 * Functionality:
 *  - display heading and description texts of accordion
 *  - toggling the state of accordion panel
 *  - based on multiple accordion panel open prop, allow
 *    visibility of multiple accordion panel
 *  - respective aria-* handled
 *
 * @returns accordion component
 */
const BasicAccordion = (props: BasicAccordionProps) => {
  /**
   * state to handle visibility of accordion panel
   *  - keep 0th element as default open
   */
  const [visiblePanels, setVisiblePanels] = useState([0]);

  /**
   * close the panel on clicking hide button
   *
   * Functionality:
   *  - get the index of panel to be closed as prop
   *  - remove that from visiblePanels array
   */
  const onClosePanel = (index: number) => {
    const panelsOpen = [...visiblePanels];
    /**
     * index of panel is stored in array as value
     */
    const indexOfPanel = panelsOpen.indexOf(index);
    panelsOpen.splice(indexOfPanel, 1);
    setVisiblePanels(panelsOpen);
  };

  /**
   *  open the panel on clicking open button
   * Functionality:
   *  - check multiple panel visible is allowed
   *    - yes : push the index of panel to be visible to array
   *    - no: remove existing one and add new panel index
   */
  const onOpenPanel = (index: number) => {
    if (props.allowMultiplePanelOpen) {
      setVisiblePanels([...visiblePanels, index]);
    } else {
      setVisiblePanels([index]);
    }
  };

  return (
    <div className="flex-row accordion-grid-gap">
      <div className="flex-column accordion-grid-gap panel-width">
        {props.data
          .slice(0, props.data.length / 2 + 1)
          .map((panelData, index) => {
            const panelVisible = visiblePanels.includes(index);
            console.log(panelVisible);
            const panelClassName = panelVisible
              ? "panel-visible"
              : "panel-hidden";
            return (
              <Accordion
                onClosePanel={onClosePanel}
                onOpenPanel={onOpenPanel}
                index={index}
                panelClassName={panelClassName}
                panelVisible={panelVisible}
                panelData={panelData}
              />
            );
          })}
      </div>
      <div className="flex-column accordion-grid-gap panel-width">
        {props.data.slice(props.data.length / 2 + 1).map((panelData, index) => {
          const panelVisible = visiblePanels.includes(
            index + Math.ceil(props.data.length / 2)
          );
          const panelClassName = panelVisible
            ? "panel-visible"
            : "panel-hidden";
          const indexToPass = index + Math.ceil(props.data.length / 2);
          return (
            <Accordion
              onClosePanel={onClosePanel}
              onOpenPanel={onOpenPanel}
              index={indexToPass}
              panelClassName={panelClassName}
              panelVisible={panelVisible}
              panelData={panelData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BasicAccordion;
