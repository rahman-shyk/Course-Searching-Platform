
function SearchBox({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <label htmlFor="course-search">
        Search for a course:
      </label>

      <input
        id="course-search"
        type="text"
        placeholder="Type a course name..."
        value={searchTerm}
        onChange={(event) =>
          setSearchTerm(event.target.value)
        }
      />
    </div>
  );
}

export default SearchBox;
