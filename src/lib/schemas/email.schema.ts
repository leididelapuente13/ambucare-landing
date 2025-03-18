"use client"

import { z } from "zod"
 
export const emailSchema = z.object({
  email: z.string().email({message: "El correo debe ser válido"}),
})