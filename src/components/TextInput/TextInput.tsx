import { useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";
import { Loader } from "../Loader/Loader";

import type {
  ChangeEventHandler,
  DetailedHTMLProps,
  KeyboardEvent,
  InputHTMLAttributes,
} from "react";

const autocompleteOptions = [
  "ACCOUNT_CREATED",
  "TRANSACTION_SENT",
  "TRANSACTION_RECEIVED",
];

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "onChange"
> & {
  onChange: (value: string) => void;
  validateSearch: (value: string) => void;
  isLoading: boolean;
  value: string;
};

export const TextInput = (props: Props) => {
  const { value, onChange, validateSearch, isLoading, ...p } = props;
  const [text, setText] = useState("");
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const updateValue = (value: string) => {
    setText(value);
    onChange(value);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateValue(e.target.value);
  };

  const filteredAutocompleteItems = useMemo(() => {
    return autocompleteOptions.filter(
      (option) => option.startsWith(text.toUpperCase()) || text === ""
    );
  }, [text]);

  const handleKeyDown = (e: KeyboardEvent) => {
    const selectedItem = filteredAutocompleteItems[selectedIndex] || "";
    switch (e.key) {
      case "Enter":
        if (selectedItem) {
          updateValue(selectedItem);
        }
        validateSearch(selectedItem || text);
        setShowAutocomplete(false);
        break;

      case "Escape":
        setShowAutocomplete(false);
        break;

      case "ArrowUp":
        setSelectedIndex((i) => (i >= 0 ? i - 1 : i));
        break;

      case "ArrowDown":
        setSelectedIndex((i) =>
          i < autocompleteOptions.length - 1 ? i + 1 : i
        );
    }
  };

  useEffect(() => {
    const onWindowClick = () => {
      setShowAutocomplete(false);
    };
    window.addEventListener("click", onWindowClick);

    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  }, []);

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <div
      className="relative w-full"
      onClick={(e) => e.stopPropagation()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.stopPropagation();
      }}
    >
      <div className="w-full flex-1 flex-col">
        <div className="relative">
          <input
            className="border-4 p-2 w-full"
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowAutocomplete(true)}
            disabled={isLoading}
            value={value}
            {...p}
          />
          <div className="absolute top-3 right-4">
            {isLoading ? (
              <Loader />
            ) : (
              <div
                onClick={() => validateSearch(text)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") validateSearch(text);
                }}
              >
                <img
                  src="/public/search.svg"
                  width={24}
                  height={24}
                  alt="search button"
                />
              </div>
            )}
          </div>
        </div>
        {showAutocomplete && (
          <div className="shadow-xl absolute w-full top-12 left-0 bg-white">
            {filteredAutocompleteItems.map((option, index) => (
              <div
                key={option}
                className={clsx(
                  { "bg-blue-200": index === selectedIndex },
                  "lowercase p-2 hover:bg-blue-200"
                )}
                onClick={() => {
                  updateValue(option);
                  validateSearch(option);
                  setShowAutocomplete(false);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateValue(option);
                    validateSearch(option);
                    setShowAutocomplete(false);
                  }
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
