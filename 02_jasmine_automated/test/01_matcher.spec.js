describe('matcher', function () {

    it('toBe', function () {
        var a = 1;
        var b = {a : 1};

        expect(b).not.toBe({a:1});
        expect(b).toEqual({a:1});
        expect(b).toEqual(b);
    });

});