import db from './model/db';

export default class DataProvider {
    constructor() {
        this.realm = db;
    }

    getParkingOffenders() {
        return this.realm.objects('ParkingOffender');
        //return testData;
    }

    getParkingOffendersBySended(value) {
        return testData.filter((parkingOffender) => {
            return parkingOffender.sended.status === value;
        });
    }
}

const testData = [
    {   
        parkingOffenderID: 1,
        licensePlate: 'HP AD 1570',
        comment: '',
        witness: '',
        address: {
            zipCode: '',
            city: '',
            street: '',
            streetNumber: ''
        },
        date: new Date(),
        image: undefined,
        sended: {
            status: false,
            mail: '',
            date: {}
        }
    },
    {
        parkingOffenderID: 2,
        licensePlate: 'XY UI 7895',
        comment: '',
        witness: '',
        address: {
            zipCode: '12345',
            city: 'Abtsteinach',
            street: 'Weinheimer Str.',
            streetNumber: '7'
        },
        date: new Date(),
        image: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
        sended: {
            status: false,
            mail: '',
            date: {}
        }
    },
    {
        parkingOffenderID: 3,
        licensePlate: 'K UL 1234',
        comment: '',
        witness: '',
        address: {
            zipCode: '12345',
            city: 'Abtsteinach',
            street: 'Weinheimer Str.',
            streetNumber: '7'
        },
        date: new Date(),
        image: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
        sended: {
            status: false,
            mail: '',
            date: {}
        }
    },
    {
        parkingOffenderID: 4,
        licensePlate: 'HD L 555',
        comment: '',
        witness: '',
        address: {
            zipCode: '12345',
            city: 'Abtsteinach',
            street: 'Weinheimer Str.',
            streetNumber: '7'
        },
        date: new Date(),
        image: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
        sended: {
            status: false,
            mail: '',
            date: {}
        }
    },
    {
        parkingOffenderID: 5,
        licensePlate: 'KU PO 569',
        comment: '',
        witness: '',
        address: {
            zipCode: '12345',
            city: 'Abtsteinach',
            street: 'Weinheimer Str.',
            streetNumber: '7'
        },
        date: new Date(),
        image: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
        sended: {
            status: true,
            mail: 'abcd@gmx.de',
            date: new Date()
        }
    },
    {
        parkingOffenderID: 6,
        licensePlate: 'MA HU 8523',
        comment: '',
        witness: '',
        address: {
            zipCode: '12345',
            city: 'Abtsteinach',
            street: 'Weinheimer Str.',
            streetNumber: '7'
        },
        date: new Date(),
        image: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
        sended: {
            status: true,
            mail: 'abcd@gmx.de',
            date: new Date()
        }
    },
    {
        parkingOffenderID: 7,
        licensePlate: 'CC DD 12',
        comment: '',
        witness: '',
        address: {
            zipCode: '12345',
            city: 'Abtsteinach',
            street: 'Weinheimer Str.',
            streetNumber: '7'
        },
        date: new Date(),
        image: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
        sended: {
            status: true,
            mail: 'abcd@gmx.de',
            date: new Date()
        }
    },
    {
        parkingOffenderID: 8,
        licensePlate: 'AZ YU 777',
        comment: '',
        witness: '',
        address: {
            zipCode: '12345',
            city: 'Abtsteinach',
            street: 'Weinheimer Str.',
            streetNumber: '7'
        },
        date: new Date(),
        image: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
        sended: {
            status: true,
            mail: 'abcd@gmx.de',
            date: new Date()
        }
    },
    {
        parkingOffenderID: 9,
        licensePlate: 'AZ YU 777',
        comment: '',
        witness: '',
        address: {
            zipCode: '12345',
            city: 'Abtsteinach',
            street: 'Weinheimer Str.',
            streetNumber: '7'
        },
        date: new Date(),
        image: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
        sended: {
            status: true,
            mail: 'abcd@gmx.de',
            date: new Date()
        }
    },
    {
        parkingOffenderID: 10,
        licensePlate: 'AZ YU 777',
        comment: '',
        witness: '',
        address: {
            zipCode: '12345',
            city: 'Abtsteinach',
            street: 'Weinheimer Str.',
            streetNumber: '7'
        },
        date: new Date(),
        image: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
        sended: {
            status: true,
            mail: 'abcd@gmx.de',
            date: new Date()
        }
    },
    {
        parkingOffenderID: 11,
        licensePlate: 'AZ YU 777',
        comment: '',
        witness: '',
        address: {
            zipCode: '12345',
            city: 'Abtsteinach',
            street: 'Weinheimer Str.',
            streetNumber: '7'
        },
        date: new Date(),
        image: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
        sended: {
            status: true,
            mail: 'abcd@gmx.de',
            date: new Date()
        }
    },
    {
        parkingOffenderID: 12,
        licensePlate: 'AZ YU 777',
        comment: '',
        witness: '',
        address: {
            zipCode: '12345',
            city: 'Abtsteinach',
            street: 'Weinheimer Str.',
            streetNumber: '7'
        },
        date: new Date(),
        image: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
        sended: {
            status: true,
            mail: 'abcd@gmx.de',
            date: new Date()
        }
    }
];