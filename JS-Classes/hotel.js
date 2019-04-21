class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.roomsType = {
            single: Math.round(this.capacity * 0.5),
            double:  Math.round(this.capacity * 0.3),
            maisonette: Math.round(this.capacity * 0.2)
        }
        this.services = ['food', 'drink', 'housekeeping'];
        
        
    }

    roomsPricing() {
        return {
            single:50,
            double: 90,
            maisonette: 135
        };
    }

    servicesPricing() {
        return {
            food:10,
            drink:10,
            housekeeping: 25
        };
    }

    rentARoom(name, type, nights) {
        if(this.roomsType[type] >= 1) {
            this.bookings.push({
                name,
                type,
                nights,
                roomNumber: this.currentBookingNumber
            });
            this.currentBookingNumber ++;
            this.roomsType[type] --;
            return `Enjoy your time here Mr./Mrs. ${name}. Your booking is ${this.currentBookingNumber  - 1}.`;
        } else {
            let result = `No ${type} rooms available!`;
            let roomTypeArray = Object.entries(this.roomsType);
            for (const type of roomTypeArray) {
                if(type[1] > 0) {
                    result += ` Available ${type[0]} rooms: ${type[1]}.`;
                }
            }
            return result;
           }
    }


    roomService(bookingNumber, serviceType) {
        let flag = false;
        let bookingOrder;
        if(!this.services.includes(serviceType)) {
            return `We do not offer ${serviceType} service.`
        }
        for (let booking of this.bookings) {
            if(booking.roomNumber === bookingNumber) {
                flag = true;
                bookingOrder = booking;
                if(booking.hasOwnProperty('services')) {
                    booking.services.push(serviceType);
                } else {
                        booking.services = [];
                        booking.services.push(serviceType);
                }
            }
        }

       if(!flag) {
           return `The booking ${bookingNumber} is invalid.`
       }

       return `Mr./Mrs. ${bookingOrder.name}, Your order for ${serviceType} service has been successful.`
     
    }

    checkOut(bookingNumber) {
        let roomMoney = 0;
        let serviceMoney = 0;
        let checkOutObj = this.bookings.filter((e) => e.roomNumber === bookingNumber)[0];
        if(!checkOutObj) {
            return `The booking ${bookingNumber} is invalid.`
        }
        roomMoney = this.roomsPricing()[checkOutObj.type] * checkOutObj.nights;
        this.roomsType[checkOutObj.type] ++;
        let index = this.bookings.indexOf(checkOutObj);
        this.bookings.splice(index, 1);
        

        if(checkOutObj.hasOwnProperty('services')) {
            for (let service of checkOutObj.services) {
                serviceMoney += this.servicesPricing()[service];
            }
            return `We hope you enjoyed your time here, Mr./Mrs. ${checkOutObj.name}. The total amount of money you have to pay is ${roomMoney + serviceMoney} BGN. You have used additional room services, costing ${serviceMoney} BGN.`
        } else {
            return `We hope you enjoyed your time here, Mr./Mrs. ${checkOutObj.name}. The total amount of money you have to pay is ${roomMoney} BGN.`
        }
        
        
        
    }

    report() {
        let result = `${this.name.toUpperCase()} DATABASE:\n--------------------\n`;
        if(this.bookings.length === 0) {
            return `${result}There are currently no bookings.`;
        }
        for (const booking of this.bookings) {
            result += `bookingNumber - ${booking.roomNumber}\n`;
            result += `clientName - ${booking.name}\n`;
            result += `roomType - ${booking.type}\n`;
            result += `nights - ${booking.nights}\n`;
            if(booking.hasOwnProperty('services')) {
                result += `services: ${booking.services.join(', ')}`
            }
            if(this.bookings.indexOf(booking) !== this.bookings.length - 1) {
                result += `----------\n`;

            }
        }

        return result;
    
    }
}
let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(3, 'drink');

console.log(hotel.checkOut(3));







