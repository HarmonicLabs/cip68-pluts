import { verifyCip67Prefix } from "..";

describe("verifyCip67Prefix", () => {

    test("cip67 test vector", () => {

        function verifyTestVectorPrefix( prefix: string )
        {
            expect( verifyCip67Prefix( prefix ) ).toBe( true )
        }

        verifyTestVectorPrefix( "00000000" );
        verifyTestVectorPrefix( "00001070" );
        verifyTestVectorPrefix( "00017650" );
        verifyTestVectorPrefix( "000632e0" );
        verifyTestVectorPrefix( "00215410" );
        verifyTestVectorPrefix( "007d0550" );
        verifyTestVectorPrefix( "011d7690" );
        verifyTestVectorPrefix( "02b670b0" );
        verifyTestVectorPrefix( "0c0b0f40" );
        verifyTestVectorPrefix( "0ffff240" );
        
    })
})