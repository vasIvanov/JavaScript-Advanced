class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId () {
        return this._clientId;
    }

    set clientId (clientId) {
        if(clientId.length === 6 && Number.isInteger(+clientId)) {
            this._clientId = clientId;
        } else {
            throw new TypeError('Client ID must be a 6-digit number');
        }
    }

    get email () {
        return this._email;
    }

    set email (email) {
        if(/^\w+@[a-z]+\.[a-z]+\.*[a-z]*$/g.test(email)) {
            this._email = email;
        } else {
            throw new TypeError('Invalid e-mail')
        }
    }

    get firstName() {
        return this._firstName;
    }

    set firstName (firstName) {
        if(firstName.length < 3 || firstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long')
        }
        if(!(/^[a-zA-Z]+$/gm.test(firstName))){
            throw new TypeError('First name must contain only Latin characters')
        }

        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName (lastName) {
        if(lastName.length < 3 || lastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }
        if(!(/^[a-zA-Z]+$/gm.test(lastName))){
            throw new TypeError('Last name must contain only Latin characters')
        }

        this._lastName = lastName;
    }
}
let acc = new CheckingAccount('423414', 'petkan@another.co.uk', 'Petkan', 'D')