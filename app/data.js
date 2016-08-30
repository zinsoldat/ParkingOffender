export default class DataProvider {
    constructor() {

    }

    getParkingOffenders() {
        return testData;
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
        title: 'HP AD 1570',
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
        title: 'XY UI 7895',
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
        title: 'K UL 1234',
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
        title: 'HD L 555',
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
        title: 'KU PO 569',
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
        title: 'MA HU 8523',
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
        title: 'CC DD 12',
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
        title: 'AZ YU 777',
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
        title: 'AZ YU 777',
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
        title: 'AZ YU 777',
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
        title: 'AZ YU 777',
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
        title: 'AZ YU 777',
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