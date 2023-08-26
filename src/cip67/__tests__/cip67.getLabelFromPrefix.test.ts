import { toHex } from "@harmoniclabs/uint8array-utils";
import { getLabelFromPrefix } from "../getLabelFromPrefix";

describe("getLabelFromPrefix", () => {


    test("cip67 test vector", () => {

        function testVector( label: string, expected: number )
        {
            expect( getLabelFromPrefix( label ) ).toEqual( expected )
        }

        testVector( "00000000", 0     );
        testVector( "00001070", 1     );
        testVector( "00017650", 23    );
        testVector( "000632e0", 99    );
        testVector( "00215410", 533   );
        testVector( "007d0550", 2000  );
        testVector( "011d7690", 4567  );
        testVector( "02b670b0", 11111 );
        testVector( "0c0b0f40", 49328 );
        testVector( "0ffff240", 65535 );
        
    });


})