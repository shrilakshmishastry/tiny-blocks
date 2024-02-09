import { useCallback, useEffect, useRef, useState } from "react";
import "@/style/index.css";
import "./OptionToggle.css";

const filerList = ["filter1", "filter2", "filter3", "filter4", "filter5"];

/**
 * Functionality:
 *  - Provide filter option
 *  - open options in a modal
 *     - if filter is applied
 *        - show close button inside filter button
 *     - else
 *       - hide the close button
 * This is a Nested interaction option
 * @returns option toggle UI
 */
const OptionToggle = () => {
  const [showFilterOption, setShowFilterOption] = useState(false);
  /**
   * Keep applied filters
   */
  const [appliedFilters, setAppliedFilters] = useState<string[] | []>([]);
  const panelRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const onClick = useCallback(
    (e: MouseEvent) => {
      if (
        !panelRef.current?.contains(e.target as Node) &&
        !btnRef.current?.contains(e.target as Node) &&
        showFilterOption
      ) {
        setShowFilterOption(false);
        panelRef.current?.blur();
      }
    },
    [showFilterOption]
  );

  useEffect(() => {
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [onClick]);

  useEffect(() => {
    if (showFilterOption) {
      panelRef.current?.focus();
    }
  }, [showFilterOption]);

  const onFilterSelection = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    panelRef.current?.blur();
    setAppliedFilters([...appliedFilters, e.currentTarget.innerHTML]);
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button
          ref={btnRef}
          onClick={() => {
            setShowFilterOption(!showFilterOption);
            btnRef.current?.blur();
          }}
          className="btn btn-base filter-btn flex-row start items-center"
        >
          <svg
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>
          {appliedFilters.length}
          Filter
        </button>
        <button
          aria-label="clear filter"
          className="flex-row btn-base center btn close-btn"
        >
          <svg
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>

      {showFilterOption ? (
        <ul ref={panelRef} tabIndex={0} className="panel pr16 pl16">
          {filerList.map((filter) => (
            <li key={filter}>
              <button onClick={onFilterSelection} className="btn p8 panelItem">
                {filter}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default OptionToggle;
