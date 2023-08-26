import { PMaybe, TermType, bs, data, map, pfn, phoist, punsafeConvertType } from "@harmoniclabs/plu-ts";

/**
 * works with every type because to be a field of a struct (PMaybe)
 * it is implicitly converted from/to data
 */
export function plookupMaybeValInMeatadata<T extends TermType>( t: T )
{
    const PMaybeVal = PMaybe( t );

    return phoist(
        pfn([
            bs,
            map( bs, data )
        ],  PMaybeVal.type )
        (( key, metadata ) =>
            punsafeConvertType( 
                metadata.lookup( key ),
                PMaybeVal.type
            )
        )
    );
}