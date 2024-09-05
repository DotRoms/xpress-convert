import { XpressSvg } from "../svg/svg"
export default function Hearder() {
  return (
    <nav>
    <div className="flex w-full bg-slate-100 p-6 justify-center">
      <XpressSvg />
    </div>
    <div className="flex w-full p-10 justify-center text-xl">

      <p className="flex flex-col gap-2 items-center">
      Are you an engineer, mathematician, computer scientist or other ? <span className="bloc text-orange-500">Do you waste time making conversions ? <strong>Xpress Convert</strong>  is here to help.</span>
      </p>
    </div>
    </nav>
    )
}