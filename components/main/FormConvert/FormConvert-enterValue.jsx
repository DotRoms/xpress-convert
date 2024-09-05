export default function FormConvertEnterValue({ value, handleValueChange }) {
  return (
    <>
      <label htmlFor="value" className="flex items-center">
        Enter value :
      </label>
      <input
        className="text-center rounded-lg p-2"
        type="number"
        id="value"
        name="value"
        value={value}
        onChange={handleValueChange}
        required
      />
    </>
  );
}
