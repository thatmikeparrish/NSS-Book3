const financialAdvisor = Object.create({}, {
    // naming the object
    company: {
        value: "Cohort 27",
        enumerable: true,
        writable: true
    },
        //first point
    specialty: {
        value: "website development",
        enumerable: true,
        writable: true
    },
    name: {
        value: "mike parrish",
        enumerable: true,
        writable: true
    },
    portfolio: {
        value: [],
        enumerable: false
    },
    purchase: {
        value: function(symbol, quantity, price){
            let purchasedStock = {
                company: symbol,
                quantity: quantity,
                price: price
            };
            financialAdvisor.portfolio.push(purchasedStock);
        },
        enumerable: false
    },
        //made value a funtion that took in 3 args and added purchased stock to the array
    sell: {
        value: function(symbol, quantity, price){
            let portfolio = financialAdvisor.portfolio;
            console.log("before loop portfolio ", portfolio);
            for(let i = 0; i < portfolio.length; i++){
                if(portfolio[i].company === symbol && portfolio[i].quantity === quantity && portfolio[i].price === price){
                    portfolio.splice(i,1);
                    console.log("after loop portfolio ", portfolio);
                }
            }
        }
    },
        // this added a funtion that took in 3 args and added a infuction variable. The loop compares the items sold vs. the items in inventory and prints the difference
    worth: {
        value: function(){
            let total = 0;
            for( let i = 0; i < this.portfolio.length; i++){
                let stockValue = this.portfolio[i].quantity * this.portfolio[i].price;
                total += stockValue;
            }
            return total;
        },
    }
        // this funtion adds the total worth of the stock in the purchased 

});

financialAdvisor.purchase("BLZZ", "540", "35");
financialAdvisor.purchase("TREY", "810", "25");
financialAdvisor.sell("TREY", "810", "25");
console.log("total ",financialAdvisor.worth());