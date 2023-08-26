import { toHex } from "@harmoniclabs/uint8array-utils";
import { getPrefixFromLabel } from "../getPrefixFromLabel";

describe("getPrefixFromLabel", () => {


    test("cip67 test vector", () => {

        function testVector( label: number, expected: string )
        {
            expect( toHex( getPrefixFromLabel( label ) ) ).toEqual( expected )
        }

        /*
        0     : 00000000
        1     : 00001070
        23    : 00017650
        99    : 000632e0
        533   : 00215410
        2000  : 007d0550
        4567  : 011d7690
        11111 : 02b670b0
        49328 : 0c0b0f40
        65535 : 0ffff240
        */
        testVector( 0    , "00000000" );
        testVector( 1    , "00001070" );
        testVector( 23   , "00017650" );
        testVector( 99   , "000632e0" );
        testVector( 533  , "00215410" );
        testVector( 2000 , "007d0550" );
        testVector( 4567 , "011d7690" );
        testVector( 11111, "02b670b0" );
        testVector( 49328, "0c0b0f40" );
        testVector( 65535, "0ffff240" );
        
    });


})