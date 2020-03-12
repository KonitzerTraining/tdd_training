fdescribe('Little CRM', function () {

    describe('Namespace', function () {

        it('should exist', function () {
            expect(window.ACME).toBeDefined();
            expect(window.ACME).toBeInstanceOf(Object)
        });

    });

    describe('http-client', function () {
        it('should exist', function () {
            expect(window.ACME.HttpClient).toBeDefined();
            expect(window.ACME.HttpClient).toBeInstanceOf(Function);
        });
        
        describe('get', function () {
            var httpClient;
            beforeEach(function () {
                httpClient = new window.ACME.HttpClient();
            });
            it('should exist', function () {
                expect(httpClient.get).toBeDefined();
                expect(httpClient.get).toBeInstanceOf(Function);
            });
            it('should accept url and callback', function (done) {
                // httpClient.get('url', function () {});

                var cbSpy = jasmine.createSpy('cb').and.callFake(function () {
                    console.log('passt');

                    expect(httpClient.get).toThrowError();
                    expect(cbSpy).toHaveBeenCalled();
                    done();
                });

                httpClient.get('', cbSpy);
            });
        })
    });
});