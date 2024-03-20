import { Toaster, toast } from "react-hot-toast";

import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query) {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(query);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
