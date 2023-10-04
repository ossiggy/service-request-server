import { Schema, model } from "mongoose";
import { ContactSchema, CustomerNameSchema } from "../contact";
import type { ServiceRequestSchemaProps, ServiceRequestSchemaModel } from "./types";
import { AddressSchema } from "./address";

export const ServiceRequestSchema = new Schema({
  customerName: { type: CustomerNameSchema, required: true },
  contactInfo: { type: ContactSchema, required: true },
  address: { type: AddressSchema, required: true },
  requestedService: { type: String, required: true },
  status: { type: String, required: true }
});


ServiceRequestSchema.method("apiRepr", function () {
  return {
    id: this._id.toString(),
    customerName: this.customerName,
    contactInfo: this.contactInfo,
    address: this.address,
    requestedService: this.requestedService,
    status: this.status
  };
});

export const ServiceRequest: ServiceRequestSchemaModel = model<
ServiceRequestSchemaProps,
  ServiceRequestSchemaModel
>("ServiceRequest", ServiceRequestSchema);

export default ServiceRequest;