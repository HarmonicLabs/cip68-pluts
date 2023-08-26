import { bs, data, map, palias } from "@harmoniclabs/plu-ts";
import { plookupBsInMetadata } from "./plookupsMetadata/plookupBsInMeatadata";
import { plookupMaybeBsInMetadata } from "./plookupsMetadata/plookupMaybeBsInMetadata";

export const PMetadataFileDetails = palias(
    map( bs, data ),
    self_t => {

        return {
            name: plookupBsInMetadata.$("name"),
            mediaType: plookupBsInMetadata.$("mediaType"),
            src: plookupMaybeBsInMetadata.$("src")
        }
    }
);