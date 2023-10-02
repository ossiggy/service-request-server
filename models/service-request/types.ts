import { Model } from "mongoose";
import { ContactSchemaType, CustomerNameSchemaType } from "../contact/types";

export interface ServiceRequestSchemaBaseProps {
    id: string;
    customerName: CustomerNameSchemaType;
    contactInfo: ContactSchemaType;
    requestedService: string;
    status: string;
}

export interface ServiceRequestSchemaProps extends ServiceRequestSchemaBaseProps {
  apiRepr(): ServiceRequestSchemaBaseProps;
}

export interface ServiceRequestSchemaModel extends Model<ServiceRequestSchemaProps> {}