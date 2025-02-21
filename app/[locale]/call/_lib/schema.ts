import { z } from 'zod';
import { OfficeLevels, OfficeRoles } from './types';

// Define Zod schema for submitted data
export const addressSchema = z.object({
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    zip: z.string().min(5, "Valid ZIP code is required"),
    includeOffices: z.boolean().optional(),
    levels: z.array(z.nativeEnum(OfficeLevels)).optional(),
    roles: z.array(z.nativeEnum(OfficeRoles)).optional(),
});