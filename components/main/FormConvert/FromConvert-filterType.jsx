export default function FromConvertFilterType({
  nameOfTypeConversion,
  conversionTable,
  handleInitialUnitChange,
}) {
  return (
    <div className="flex gap-2 w-full justify-between">
      <label htmlFor="">Initial unit :</label>
      <select
        className="p-2 rounded-lg"
        name="inital-unit-to-convert"
        id="inital-unit-to-convert"
        required
        onChange={(e) => handleInitialUnitChange(e)}
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
