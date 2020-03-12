describe('matcher', function () {

    it('toBe', function () {
        var a = 1;
        var b = {a: 1};

        expect(b).not.toBe({a: 1});
        expect(b).toEqual({a: 1});
        expect(b).toEqual(b);

    });
    it('should be nothing', function () {
        expect('').nothing();
        expect(null).nothing();
        expect(undefined).nothing();
        expect({}).nothing();
        expect([]).nothing();
        expect(0).nothing();
        expect('234').nothing();
    });

    xit('should ', function () {
        expect().toBeDefined();
    });

    it('should throw an error', function () {
        function f(p) {
            if (typeof p !== 'string') {
                throw new TypeError();
            }
        }
        expect(f).toThrowError();
    });

    it('should contain', function () {
        var list = [4, 6, 7, 8, 5, 3];
        expect(list).toContain(7);
        expect(list).toEqual(jasmine.arrayContaining([4, 8]));

        var obj = {a: 1, b: 2, c: 3};
        expect(obj).toEqual(jasmine.objectContaining({a: 1, c: 3}));
    });

    it('should have a version', function () {
        // expect(version).toEqual('2.4.5');
        expect(version).toBeDefined();
    });

    it('should be an instance', function () {
        var date = new Date();
        expect(date).toBeInstanceOf(Date);
        expect(date).toEqual(jasmine.any(Date));
    });
    /*
        expect().toBeDefined()
        expect().toBeCloseTo()
        expect().toBeGreaterThan()
        expect().toBeLessThanOrEqual()
        expect(1/'').toBeNaN();

        expect().toBeDefined()
     */
});