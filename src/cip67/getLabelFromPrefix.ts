import { fromHex, toHex } from "@harmoniclabs/uint8array-utils";
import { verifyCip67Prefix } from "./verifyCip67Prefix";

export function getLabelFromPrefix( prefix: Uint8Array | string ): number
{
    if( !verifyCip67Prefix( prefix ) ) throw new Error("invalid prefix");

    prefix = prefix instanceof Uint8Array ? toHex( prefix ) : String( prefix );

    prefix = fromHex( prefix.substring( 1 , 5 ) );

    return (prefix[0] << 8) | prefix[1];
}