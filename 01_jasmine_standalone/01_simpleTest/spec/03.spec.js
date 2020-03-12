// Test Suites
// Organisation

// mit fdescribe, Fokus auf diese Suite
fdescribe('Feature A', function () {
    it('should exist', function () {
        expect('A').toBeDefined();
    });

    // xdescribe
    describe('Feature A.1', function () {
        var date;
        beforeAll(function () {
            date = new Date();
        });

        it('should produce microtime', function () {
            let p = (typeof date.getMilliseconds() === 'number');
            expect(p).toBeTrue();
        });
        xit('should compute date', function () {

        });
    });
});