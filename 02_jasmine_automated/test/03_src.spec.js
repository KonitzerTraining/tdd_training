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
            it('should ', function () {
                
            });
        })
    });
    
});