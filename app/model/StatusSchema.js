const StatusSchema = {
    name: 'Status',
    primaryKey: 'statusID',
    properties: {
        statusID: {type: 'string', indexed: true}, // primary key
        status: {type: 'bool'},
        mail: {type: 'string'},
        date: {type: 'date'}
    }
}

export default StatusSchema;