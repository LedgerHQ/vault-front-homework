import { useEffect, useState } from "react";

import type {
  ChangeEventHandler,
  DetailedHTMLProps,
  KeyboardEvent,
  InputHTMLAttributes,
} from "react";
import { Loader } from "./Loader";

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "onChange"
> & {
  onChange: (value: string) => void;
  validateSearch: (value: string) => void;
  isLoading: boolean;
};

const autocompleteOptions = [
  "ACCOUNT_CREATED",
  "TRANSACTION_SENT",
  "TRANSACTION_RECEIVED",
];

const TextInput = (props: Props) => {
  const { onChange, validateSearch, isLoading, ...p } = props;
  const [text, setText] = useState("");
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
    onChange(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") validateSearch(text);
    if (e.key === "Escape") setShowAutocomplete(false);
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
            {autocompleteOptions.map((option) => {
              if (option.startsWith(text.toUpperCase()) || text === "")
                return (
                  <div
                    className="lowercase p-2 hover:bg-blue-200"
                    onClick={() => {
                      onChange(option);
                      validateSearch(option);
                      setShowAutocomplete(false);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        onChange(option);
                        validateSearch(option);
                        setShowAutocomplete(false);
                      }
                    }}
                  >
                    {option}
                  </div>
                );
              return "";
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
