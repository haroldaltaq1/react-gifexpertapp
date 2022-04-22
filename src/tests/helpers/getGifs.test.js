import {getGifs} from "../../helpers/GetGif";

describe('Pruebas con getGifs Fecth', () => {

    test('Debe de tener 10 elementos', async () => {

        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBe( 10 );
    })

    test('Debe tener 0 elementos', async () => {

        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 );
    })
});