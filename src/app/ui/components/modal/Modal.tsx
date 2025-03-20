"use client";

import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { emailSchema } from "@/lib/schemas/email.schema";
import React, { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export const Modal = () => {
  const [open, setOpen] = useState(false);

  type emailType = z.infer<typeof emailSchema>;

  const formMethods = useForm<emailType>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  })

  const { handleSubmit, trigger, reset, control } = formMethods;

  const onSubmit: SubmitHandler<emailType> = async (email: emailType) => {
    const isValid = await trigger();
    if (isValid) setOpen(false);

    const response = await fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    })

    const data = await response.json();

    if (response.ok) {
      toast.success("¡Correo registrado con éxito!", {
        description: `Te mantendremos informado en ${email.email}.`
      });
      reset();
    } else {
      toast.error("¡Ups! No pudimos guardar tu correo", {
        description: data.message ?? "Por favor, inténtalo de nuevo más tarde.",
      });
    }

  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <Toaster position="top-right" richColors />
      <AlertDialogTrigger asChild>
        <Button type="button" onClick={() => setOpen(true)} className="bg-white text-black md:w-[15%] rounded-3xl py-2 lg:py-4 shadow-sm transition delay-150 duration-300 ease-in-out hover:cursor-pointer hover:scale-105 hover:bg-gray-200 hover:text-gray-800">Quiero este servicio</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-green-secondary">Aún no hemos lanzado SIOS AmbuCare</AlertDialogTitle>
          <AlertDialogDescription className="text-slate-900">
            Aún no hemos lanzado SIOS AmbuCare, pero estaremos encantados de mantenerte informado sobre el programa beta y el lanzamiento oficial de SIOS AmbuCare.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Form {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-green-secondary">Correo</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormDescription className="text-xs">
              Tu correo solo será utilizado para enviarte novedades relacionadas con el servicio.
            </FormDescription>
            <AlertDialogFooter>
              <Button variant="outline" className="hover:cursor-pointer" type="button" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button className="bg-green-primary hover:bg-green-shade-secondary hover:cursor-pointer" type="submit">
                Guardar mi correo
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  )
}