describe("Tests …", function() {
    describe("makeAnOrder", function() {
        const pizza1={orderedDrink:'1'};
        const pizza2={};
        const pizza3={orderedPizza:'m'};
        const pizza4={orderedPizza:'d',orderedDrink:'tea'};
        it("Error", function() {
            assert.throw(()=>pizzUni.makeAnOrder(pizza1),'You must order at least 1 Pizza to finish the order.');
            assert.throw(()=>pizzUni.makeAnOrder(pizza2),'You must order at least 1 Pizza to finish the order.');

        });
        it("drink", function() {
            assert.equal(pizzUni.makeAnOrder(pizza4),'You just ordered d and tea.');
        });
        it("!drink", function() {
            assert.equal(pizzUni.makeAnOrder(pizza3),'You just ordered m');
        });
     });
     describe(" getRemainingWork", function() {
        let statusArr=[{pizzaName: 'pizza',status: 'ready'},
        {pizzaName: 'pizza2',status: 'ready'},
        {pizzaName: 'pizza3',status: 'preparing'},
        {pizzaName: 'pizza4',status: 'preparing'}]            

        let statusArr2=[{pizzaName: 'pizza',status: 'ready'},
        {pizzaName: 'pizza2',status: 'ready'}];

        let statusArr3=[
        {pizzaName: 'pizza3',status: 'preparing'},
        {pizzaName: 'pizza4',status: 'preparing'}]   

        it("ready", function() {
            assert.equal(pizzUni.getRemainingWork(statusArr2),'All orders are complete!');
        });  
        it("preparing", function() {
    //              let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
    //             let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`
            assert.equal(pizzUni.getRemainingWork(statusArr3),'The following pizzas are still preparing: pizza3, pizza4.');
            assert.equal(pizzUni.getRemainingWork(statusArr),'The following pizzas are still preparing: pizza3, pizza4.');

        }); 
    });
    describe(" getRemainingWork", function() {

        it("ready", function() {
            assert.equal(pizzUni.orderType(10,'Carry Out'),9);
            assert.equal(pizzUni.orderType(10,'Delivery'),10);

        }); 

    });
});
