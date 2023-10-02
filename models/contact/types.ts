export interface AddressSchemaType {
    houseNumber: string;
    streetName: string;
    city: string;
    stateOrProvince: string;
    country: string;
    postalCode: string;
}

export interface ContactSchemaType {
    email: string;
    address?: AddressSchemaType;
    phoneNumber?: string;
}

export interface CustomerNameSchemaType {
    firstName: string;
    lastName?:string;
}