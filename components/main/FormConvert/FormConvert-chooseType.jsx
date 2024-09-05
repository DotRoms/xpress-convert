export default function FormConvertChooseType({ handleValueOnChange }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <label className="text-bold" htmlFor="conversion-select">
        Choose conversion type :
      </label>
      <select
        id="conversion-select text-center"
        onChange={handleValueOnChange}
        className="p-2 text-center rounded-lg"
        required
      >
        <option value="">--Please choose an option--</option>
        <option value="Energy">Energy</option>
        <option value="Flow">Flow</option>
        <option value="Force">Force</option>
        <option value="Mass">Mass</option>
        <option value="Volume">Volume</option>
      </select>
    </div>
  );
}
