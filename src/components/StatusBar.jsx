/* eslint-disable prettier/prettier */
import {
  MdBluetooth,
  MdVibration,
  MdSignalWifi4Bar,
  MdSignalCellular4Bar,
  MdBatteryFull,
} from "react-icons/md";

export default function StatusBar() {
  return (
    <div className="block md:hidden">
      <div className="flex justify-between">
        <div>3:19</div>
        <div className="flex items-center space-x-1">
          <MdBluetooth />
          <MdVibration />
          <MdSignalWifi4Bar />
          <MdSignalCellular4Bar />
          <MdBatteryFull />
          <div>59%</div>
        </div>
      </div>
    </div>
  );
}
