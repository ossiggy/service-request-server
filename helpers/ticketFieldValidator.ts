import { requiredTicketFields, requiredAddressFields, requiredContactFields, requiredCustomerNameFields, validContactFields, validCustomerNameFields } from "./validAndRequiredFields";
import type { ServiceRequestSchemaBaseProps } from "../models";
type ValidatorType = (payload: any, requiredFields: string[], validFields?: string[]) => boolean;

const hasRequiredFields = (payloadKeys:string[], requiredFields: string[]) => {
  requiredFields.forEach(field => {
    if (!payloadKeys.includes(field)) {
      return false
    }
  })
  return true;
}

const hasValidKeys = (payloadKeys: string[], validFields: string[]) => {
  payloadKeys.forEach(key => {
    if(!validFields.includes(key)) {
      return false
    }
  })

  return true;
}

const validateKeys: ValidatorType = (payload, requiredFields, validFields) => {
  let allFieldsValid = true;
  const payloadKeys = Object.keys(payload);
  if (validFields) {
    allFieldsValid = hasValidKeys(payloadKeys, [...requiredFields, ...validFields]);
  }
  
  return hasRequiredFields(payloadKeys, requiredFields) && allFieldsValid;

};

export const validatePayload = (payload: ServiceRequestSchemaBaseProps) => {
  const { customerName, contactInfo } = payload;
  const { address } = contactInfo;

  return validateKeys(payload, requiredTicketFields) 
  && validateKeys(customerName, requiredCustomerNameFields, validCustomerNameFields) 
  && validateKeys(contactInfo, requiredContactFields, validContactFields)
  && validateKeys(address, requiredAddressFields)
};

export const validateUpdatePayload = (payload: ServiceRequestSchemaBaseProps) => {
  const { customerName, contactInfo } = payload;
  const { address } = contactInfo;
  let validAddress = true;

  if (address) {
    validAddress = hasValidKeys(Object.keys(address), requiredAddressFields)
  }

  return hasValidKeys(Object.keys(payload), requiredTicketFields) 
  && hasValidKeys(Object.keys(customerName), [...requiredCustomerNameFields, ...validCustomerNameFields]) 
  && hasValidKeys(Object.keys(contactInfo), [...requiredContactFields, ...validContactFields])
  && validAddress
}