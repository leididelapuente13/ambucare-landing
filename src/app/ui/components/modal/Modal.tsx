"use client";

import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { useForm } from "react-hook-form"
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

export const Modal = () => {
  const form = useForm();

  const onSubmit = () => {
    console.log("Form submitted")
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-white text-black rounded-3xl py-2 lg:py-4 shadow-sm transition delay-150 duration-300 ease-in-out hover:cursor-pointer hover:scale-105 hover:bg-gray-200 hover:text-gray-800">Quiero este servicio</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Aún no hemos lanzado SIOS AmbuCare</AlertDialogTitle>
          <AlertDialogDescription>
            Aún no hemos lanzado, pero estaremos encantados de mantenerte informado sobre el programa beta y el lanzamiento oficial de SIOS AmbuCare.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
          <FormDescription>
            Tu correo solo será utilizado para enviarte novedades relacionadas con el servicio.
          </FormDescription>
        </Form>
        <AlertDialogFooter>
          <AlertDialogAction className="bg-[#0F4C69]">
            <Button type="submit" className="bg-[#0F4C69]">Enviar</Button>
          </AlertDialogAction>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}