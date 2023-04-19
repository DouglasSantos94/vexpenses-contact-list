import { useEffect, useState } from "react";
import { Contact } from "../types/contact";

export const useContactSearch = (contacts: Contact[], contactSearchRef: HTMLInputElement | null) => {

  const [searchedContactName, setSearchedContactName] = useState("");
  const [suggestions, setSuggestions] = useState<Contact[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      const filteredSuggestions = contacts?.filter((contact) => {
        const value = e.target.value.toUpperCase()
        const name = contact.name.toUpperCase()

        return value && name.startsWith(value) && name !== value
      })
      setSearchedContactName(e.target.value)
      setSuggestions(filteredSuggestions)
    }
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "ArrowDown" && activeSuggestion < suggestions.length) {
      setActiveSuggestion(activeSuggestion + 1)
    } else if (event.key === "ArrowUp" && activeSuggestion > 1) {
      setActiveSuggestion(activeSuggestion - 1)
    } else if (event.key === "Enter") {
      setSearchedContactName(suggestions[activeSuggestion - 1].name)
      setSelectedSuggestion(suggestions[activeSuggestion - 1].name)
      setSuggestions([])
      setActiveSuggestion(0)
    }
  }

  const handleClick = (value: string) => {
    setSelectedSuggestion(value)
    setSearchedContactName(value)
    setSuggestions([])
    setActiveSuggestion(0)
  }

  useEffect(() => {
    if(contactSearchRef) contactSearchRef.focus();
  }, [])


  return {
    searchedContactName,
    suggestions,
    selectedSuggestion,
    activeSuggestion,
    handleSearch,
    handleKeyDown,
    handleClick,
  }
}
