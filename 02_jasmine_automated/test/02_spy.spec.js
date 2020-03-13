describe('spy', function () {

    it('should spy on', function () {
        var context = {
            getData: function () {
                return '3,4,5';
            }
        };

        function pruefling () {
            return context.getData();
        }

        var getDataSpy = spyOn(context, 'getData').and.callThrough();

        var result = pruefling();
        expect(getDataSpy).toHaveBeenCalled();
        expect(result).toEqual('3,4,5');
    });

    it('should call fech', function () {

        var fetchSpy = spyOn(window, 'fetch').and.callFake(function () {
            return new Promise(function (resolve) {
                resolve([]);
            });
        });

        var result = pruefling();
        expect(fetchSpy).toHaveBeenCalled();
        expect(result).toBeInstanceOf(Promise);
    });
});