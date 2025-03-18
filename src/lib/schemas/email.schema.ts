"use client"

import { z } from "zod"
 
export const emailSchema = z.object({
  email: z.string().email({message: "Formato incorrecto. Ingresa un correo válido como usuario@email.com."}),
})