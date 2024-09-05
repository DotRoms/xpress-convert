"use client";
import { ConvertValueToNewUnit } from "@/utils/calculate/ConvertValueToNewUnit";
import { useState } from "react";
import energy from "../../../utils/convert/energy/table/energyTable";
import flow from "../../../utils/convert/flow/table/flowTable";
import force from "../../../utils/convert/force/table/forceTable";
import mass from "../../../utils/convert/mass/table/massTable";
import power from "../../../utils/convert/power/table/powerTable";
import volume from "../../../utils/convert/volume/table/tableVolume";
import FormConvertChooseType from "./FormConvert-chooseType";
import FormConvertEnterValue from "./FormConvert-enterValue";
import FormConvertFinalUnit from "./FormConvert-finalUnit";
import FormConvertFilterType from "./FromConvert-filterType";
export default function FormConvert() {
  const [nameOfTypeConversion, setNameOfTypeConversion] = useState("");
  const [value, setValue] = useState(""); // value to convert
  const [initialUnit, setInitialUnit] = useState(""); // initial unit to convert
  const [finalUnit, setFinalUnit] = useState(""); // final unit to convert
  const [result, setResult] = useState(""); // result of the conversion
  const handleValueOnChange = (e) => {
    setNameOfTypeConversion(e.target.value);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleInitialUnitChange = (e) => {
    setInitialUnit(e.target.value);
  };

  const handleFinalUnitChange = (e) => {
    setFinalUnit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = ConvertValueToNewUnit(
      value,
      initialUnit,
      finalUnit,
      conversionTable.table
    );
    setResult(result);
  };

  const conversionTables = [
    { name: "Mass", table: mass },
    { name: "Flow", table: flow },
    { name: "Force", table: force },
    { name: "Power", table: power },
    { name: "Volume", table: volume },
    { name: "Energy", table: energy },
  ];

  const conversionTable = conversionTables.find(
    (table) => table.name === nameOfTypeConversion
  ) || { table: [] };

  return (
    <div className="flex flex-col bg-slate-100 p-6 gap-10">
      <form
        className="flex flex-col gap-4 sm:gap-10 text-lg w-full sm:items-center sm:justify-center"
        onSubmit={handleSubmit}
      >
        <FormConvertChooseType handleValueOnChange={handleValueOnChange} />

        <div className="flex flex-col sm:flex-row gap-4">
          <FormConvertEnterValue
            value={value}
            handleValueChange={handleValueChange}
          />
          <div className="flex flex-col gap-4">
            <FormConvertFilterType
              nameOfTypeConversion={nameOfTypeConversion}
              conversionTable={conversionTable}
              handleInitialUnitChange={handleInitialUnitChange}
            />

            <FormConvertFinalUnit
              nameOfTypeConversion={nameOfTypeConversion}
              conversionTable={conversionTable}
              handleFinalUnitChange={handleFinalUnitChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="py-2 px-4 rounded-lg border-2 border-orange-500 bg-orange-500 text-white hover:bg-orange-100 hover:text-orange-500 transition-all"
        >
          Execute
        </button>
      </form>

      {result && (
        <div className="text-xl text-center">
          <p>
            New value : <span className=" font-extrabold">{result}</span>
          </p>
        </div>
      )}
    </div>
  );
}
