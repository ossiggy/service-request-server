import { Model } from 'mongoose';
import { ContactSchemaType, CustomerNameSchemaType } from '../contact/types';

export interface AddressSchemaType {
  houseNumber: string;
  streetName: string;
  city: string;
  stateOrProvince: string;
  country: string;
  postalCode: string;
}

export interface ServiceRequestSchemaBaseProps {
  id: string;
  customerName: CustomerNameSchemaType;
  contactInfo: ContactSchemaType;
  address: AddressSchemaType;
  requestedService: string;
  status: string;
}

export interface ServiceRequestSchemaProps extends ServiceRequestSchemaBaseProps {
  apiRepr(): ServiceRequestSchemaBaseProps;
}

export interface ServiceRequestSchemaModel extends Model<ServiceRequestSchemaProps> {}
