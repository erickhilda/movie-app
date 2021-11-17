const Input = ({ handleSearch }: { handleSearch: any }) => {
  return (
    <input
      className="w-full p-2 border border-gray-300 rounded-md"
      type="text"
      placeholder="Search for a movie"
      onChange={handleSearch}
    />
  );
};

export default Input;
