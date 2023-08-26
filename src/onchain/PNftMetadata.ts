import { bs, data, map, palias, perror, pfn, phoist, pmatch, punBData } from "@harmoniclabs/plu-ts";
import { plookupBsInMetadata } from "./plookupsMetadata/plookupBsInMeatadata";
import { plookupMaybeValInMeatadata } from "./plookupsMetadata/plookupMaybeValInMeatadata";
import { PMetadataFileDetails } from "./PMetadataFileDetails";
import { plookupMaybeBsInMetadata } from "./plookupsMetadata/plookupMaybeBsInMetadata";

export const PNftMetadata = palias(
    map( bs, data ),
    self_t => {

        return {
            name: plookupBsInMetadata.$("name"),
            image: plookupBsInMetadata.$("image"),
            description: plookupMaybeBsInMetadata.$("description"),
            files: plookupMaybeValInMeatadata( PMetadataFileDetails.type ).$("files"),
        }
    }
)