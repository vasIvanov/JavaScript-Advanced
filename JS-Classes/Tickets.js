function solve(array, sortCrit) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let ticketsArray = [];
    for (const string of array) {
        let [destination, price, status] = string.split('|');
        let ticket = new Ticket(destination, +price, status);
        ticketsArray.push(ticket);
    }
    
    switch(sortCrit) {
        case 'destination':
            ticketsArray = ticketsArray.sort((a, b) => { 
                let firstDestination = a.destination;
                let secondDestination = b.destination;
                
                return firstDestination.localeCompare(secondDestination);
            });
        break;

        case 'price':
            ticketsArray = ticketsArray.sort((a, b) => { 
                let firstPrice = a.price;
                let secondPrice = b.price;
                
                return firstPrice - secondPrice;
            });
        break;

        case 'status':
            ticketsArray = ticketsArray.sort((a, b) => { 
            let firstStatus = a.status;
            let secondStatus = b.status;
            
            return firstStatus.localeCompare(secondStatus);
            });
        break;
    }

    return ticketsArray;
}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)
