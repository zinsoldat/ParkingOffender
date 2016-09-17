const ParkingOffenderSchema = {
    name: 'ParkingOffender',
    primaryKey: 'parkingOffenderID',
    properties: {
        parkingOffenderID: {type: 'string', indexed: true}, // primary key
        licensePlate: {type: 'string', indexed: true},
        comment: {type: 'string'},
        witness: {type: 'string'},
        date: {type: 'date'},
        image: {type: 'data', optional: true},
        address: {type: 'Address', optional: true},
        sended: {type: 'Status'}
    }
};

export default ParkingOffenderSchema;