import { fortmatNumber } from './actions';

test('fortmatNumber tests', () => {
    const testArray: Array<[number, string]> = [
        [2000, '2.0k'],
        [4565, '4.6k'],
        [20, '20'],
        [-999, '-999'],
        [-9999, '-10.0k'],
    ];

    testArray.map(([feed, expectedValue]) => {
        const result = fortmatNumber(feed);
        expect(result).toMatch(expectedValue);
    });
});
