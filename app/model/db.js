import Realm from 'realm';

import AddressSchema from './AddressSchema';
import StatusSchema from './StatusSchema';
import ParkingOffenderSchema from './ParkingOffenderSchema';

export default new Realm({schema: [AddressSchema, StatusSchema, ParkingOffenderSchema]});
