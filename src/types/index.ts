export interface RentEngineResponse {
  id: number;
  lat: number;
  long: number;
  street_number: string;
  street_name: string;
  unit: string;
  city_name: string;
  state_name: string;
  bedrooms: number;
  bathrooms: number;
  furnished: boolean | null;
  property_type: PropertyType;
  photos: string[];
  pets_allowed: PetsAllowed;
  desired_lease_duration_months: number[];
  target_rental_rate: number;
}

export enum PetsAllowed {
  No = 'No',
  Yes = 'Yes',
  YesWithPetFee = 'Yes with pet fee',
}

export enum PropertyType {
  Condo = 'CONDO',
  Duplex = 'DUPLEX',
  MultiFamily = 'MULTI-FAMILY',
  Room = 'ROOM',
  SingleFamilyResidence = 'SINGLE FAMILY RESIDENCE',
  Townhouse = 'TOWNHOUSE',
}
