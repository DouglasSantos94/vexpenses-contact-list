import { useEffect, useState } from "react";
import { Contact } from "../types/contact";

export const useContactSearch = (
  contacts: Contact[],
  contactSearchRef: HTMLInputElement | null
) => {
  const [searchedContactName, setSearchedContactName] = useState("");
  const [suggestions, setSuggestions] = useState<Contact[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      const filteredSuggestions = contacts?.filter((contact) => {
        const value = e.target.value.toUpperCase();
        const name = contact.name.toUpperCase();

        return value && name.startsWith(value) && name !== value;
      });
      setSearchedContactName(e.target.value);
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleBlur = () => setShowSuggestions(false);

  useEffect(() => {
    if (contactSearchRef) contactSearchRef.focus();
  }, []);

  return {
    searchedContactName,
    suggestions,
    handleSearch,
    showSuggestions,
    handleBlur,
  };
};
