import { fromHex } from "@harmoniclabs/uint8array-utils";
import { crc8 } from "./crc8";

export function getPrefixFromLabel( label: number ): Uint8Array
{
    label = Number( label ) & 0xffff;
    const labelHex = label.toString(16).padStart(4,'0');
    return fromHex(
        "0" + 
        labelHex +
        crc8( fromHex( labelHex ) ).toString(16).padStart(2,'0') + 
        "0"
    );
}