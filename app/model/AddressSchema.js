const AddressSchema = {
    name: 'Address',
    primaryKey: 'addressID',
    properties: {
        addressID: {type: 'string', indexed: true}, // primary key
        zipCode: {type: 'string'},
        city: {type: 'string'},
        street: {type: 'string'},
        streetNumber: {type: 'string'}
    }
};

export default AddressSchema;