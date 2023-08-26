import { bs, data, map, perror, pfn, phoist, pmatch, punBData } from "@harmoniclabs/plu-ts";

export const plookupBsInMetadata = phoist(
    pfn([
        bs,
        map( bs, data )
    ],  bs)
    (( key, metadata ) =>
        pmatch( metadata.lookup( key ) )
        .onJust(({ val }) => punBData.$( val ))
        .onNothing( _ => perror(bs) ) 
    )
);