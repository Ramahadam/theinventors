export default function ButtonNumber() {
  return (
    <button className="bg-black outline-none text-white rounded-[15px] px-[20px] py-[16px] flex items-center">
      <select
        name="countryCode"
        id="countryCode"
        className="bg-black outline-none"
      >
        <option value="+81">+81</option>
      </select>
      <input
        type="number"
        placeholder="(123)456-78-90"
        className="text-white placeholder:text-white ml-[15px] bg-black flex-grow w-full outline-none"
      />
      <span className="h-4 w-4 rounded-full border-2 text-xs flex items-center justify-center bg-black">
        i
      </span>
    </button>
  );
}
