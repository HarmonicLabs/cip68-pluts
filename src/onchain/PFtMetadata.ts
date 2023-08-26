import { bs, data, int, map, palias, perror, pfn, phoist, pmatch, punBData } from "@harmoniclabs/plu-ts";
import { plookupBsInMetadata } from "./plookupsMetadata/plookupBsInMeatadata";
import { plookupMaybeValInMeatadata } from "./plookupsMetadata/plookupMaybeValInMeatadata";
import { plookupMaybeBsInMetadata } from "./plookupsMetadata/plookupMaybeBsInMetadata";

export const PFtMetadata = palias(
    map( bs, data ),
    self_t => {

        return {
            name: plookupBsInMetadata.$("name"),
            description: plookupBsInMetadata.$("description"),
            ticker: plookupMaybeBsInMetadata.$("ticker"),
            url: plookupMaybeBsInMetadata.$("url"),
            decimals: plookupMaybeValInMeatadata( int ).$("decimals"),
            logo: plookupMaybeBsInMetadata.$("logo"),
        }
    }
)