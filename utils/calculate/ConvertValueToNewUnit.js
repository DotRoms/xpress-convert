export function ConvertValueToNewUnit(value, initialUnit, finalUnit, conversionTable) {
  
  const fromValue = value;
  const formUnit = initialUnit;
  const newUnit = finalUnit;
  const flowTable = conversionTable;

  const fromUnitData = flowTable.find(unit => unit.symbol === formUnit); // find the unit data in the table
  const newUnitData = flowTable.find(unit => unit.symbol === newUnit); // find the unit data in the table

  const valueInBaseUnit = fromValue * (fromUnitData.value/1); // convert the value to the base unit

  const valueInNewUnit = valueInBaseUnit / newUnitData.value; // convert the value to the new unit

  return `${valueInNewUnit} ${newUnitData.symbol}`; // return the new value

}