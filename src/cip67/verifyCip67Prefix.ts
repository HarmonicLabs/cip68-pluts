import { fromHex, toHex } from "@harmoniclabs/uint8array-utils";
import { crc8 } from "./crc8";

export function verifyCip67Prefix( prefix: string | Uint8Array ): boolean
{
    prefix = prefix instanceof Uint8Array ? toHex( prefix ) : String( prefix );

    if(!(
        prefix.length === 8 &&
        prefix[0] === '0' && 
        prefix[7] === '0'
    ))  return false;

    const label = prefix.substring( 1 , 5 );
    const checksum = prefix.substring( 5 , 7 );

    return checksum === crc8( fromHex( label ) ).toString(16).padStart(2,'0');
}