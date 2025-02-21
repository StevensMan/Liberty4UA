export interface NormalizedInput {
    locationName: string;
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state: string;
    zip: string;
  }
  
  export interface Division {
    name: string;
    alsoKnownAs: string[];
    officeIndices: number[];
  }
  
  export interface Source {
    name: string;
    official: boolean;
  }
  
  export interface Office {
    name: string;
    divisionId: string;
    levels: string[];
    roles: string[];
    sources: Source[];
    officialIndices: number[];
  }
  
  export interface Address {
    locationName: string;
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state: string;
    zip: string;
  }
  
  export interface Channel {
    type: string;
    id: string;
  }
  
  export interface Official {
    name: string;
    address?: Address[];
    party?: string;
    phones?: string[];
    urls?: string[];
    photoUrl?: string;
    emails?: string[];
    channels?: Channel[];
    uniqueId: string;
  }
  
  export interface CivicInfoResponse {
    kind: string;
    normalizedInput: NormalizedInput;
    divisions: { [key: string]: Division };
    offices: Office[];
    officials: Official[];
  }

  export enum OfficeLevels {
    AdministrativeArea1 = "administrativeArea1",
    AdministrativeArea2 = "administrativeArea2",
    Country = "country",
    International = "international",
    Locality = "locality",
    Regional = "regional",
    Special = "special",
    SubLocality1 = "subLocality1",
    SubLocality2 = "subLocality2"
  }
  
  export enum OfficeRoles {
    DeputyHeadOfGovernment = "deputyHeadOfGovernment",
    ExecutiveCouncil = "executiveCouncil",
    GovernmentOfficer = "governmentOfficer",
    HeadOfGovernment = "headOfGovernment",
    HeadOfState = "headOfState",
    HighestCourtJudge = "highestCourtJudge",
    Judge = "judge",
    LegislatorLowerBody = "legislatorLowerBody",
    LegislatorUpperBody = "legislatorUpperBody",
    SchoolBoard = "schoolBoard",
    SpecialPurposeOfficer = "specialPurposeOfficer"
  }
  
  export interface CivicInfoParams {
    address: string;
    includeOffices?: boolean;
    levels?: OfficeLevels[];
    roles?: OfficeRoles[];
  }