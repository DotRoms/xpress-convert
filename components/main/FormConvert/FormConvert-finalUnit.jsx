export default function FormConvertFinalUnit({
  nameOfTypeConversion,
  conversionTable,
  handleFinalUnitChange,
}) {
  return (
    <div className="flex gap-2 w-full justify-between">
      <label htmlFor="">Converted unit :</label>
      <select
        className="p-1 rounded-lg"
        name="inital-unit-to-convert"
        id="inital-unit-to-convert"
        required
        onChange={(e) => handleFinalUnitChange(e)}
      >
        {nameOfTypeConversion === `${nameOfTypeConversion}` ? (
          <>
            <option value="">Choose a unit</option>
            {conversionTable.table.map((unit) => (
              <option className="text-center" key={unit.id} value={unit.id}>
                {unit.symbol}
              </option>
            ))}
          </>
        ) : (
          <option value="">-- Select unit based on conversion type --</option>
        )}
      </select>
    </div>
  );
}
