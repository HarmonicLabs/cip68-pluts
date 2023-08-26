import { AliasT, ListT, Methods, PByteString, PData, PList, PPair, PStruct, PairT, PrimType, StructT, data, int, pstruct } from "@harmoniclabs/plu-ts";

export type PCip68DatumT<M extends Methods> = PStruct<{
    Cip68Datum: {
        metadata: AliasT<ListT<PairT<[PrimType.BS], [PrimType.Data]>>, M>,
        version: [PrimType.Int],
        extra: [PrimType.Data]
    }
}, {}>;

export function PCip68Datum<M extends Methods>(
    metadata_t: AliasT<ListT<PairT<[PrimType.BS], [PrimType.Data]>>, M>
): PCip68DatumT<M>
{
    return pstruct({
        Cip68Datum: {
            metadata: metadata_t,
            version: int,
            extra: data
        }
    });
}