import { Schema, model } from "mongoose";
import { ContactSchema, CustomerNameSchema } from "../contact";
import type { ServiceRequestSchemaProps, ServiceRequestSchemaModel } from "./types";

export const ServiceRequestSchema = new Schema({
  customerName: { type: CustomerNameSchema, required: true },
  contactInfo: { type: ContactSchema, required: true },
  requestedService: { type: String, required: true },
  status: { type: String, required: true }
});


ServiceRequestSchema.method("apiRepr", function () {
  return {
    id: this._id.toString(),
    customerName: this.customerName,
    contactInfo: this.contactInfo,
    requestedService: this.requestedService,
    status: this.status
  };
});

export const ServiceRequest: ServiceRequestSchemaModel = model<
ServiceRequestSchemaProps,
  ServiceRequestSchemaModel
>("ServiceRequest", ServiceRequestSchema);

export default ServiceRequest;