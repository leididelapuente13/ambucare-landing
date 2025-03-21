"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { improvedProcedures } from "@/lib/data/improvedProcedures"
import { useEffect, useState } from "react"

export const ProcessCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mx-auto w-fit max-w-[80%]">
      <Carousel setApi={setApi} className="">
        <CarouselContent>
          {improvedProcedures.map(({ title, description }, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Card className="shadow-2xs border border-gray-200 rounded-xl p-6 bg-white w-full max-w-lg">
                <CardHeader className="flex justify-center items-center text-center">
                  <div className="w-9 h-9 flex justify-center items-center border-4 border-green-primary text-white rounded-full">
                    <p className="text-green-primary font-bold">{index + 1}</p>
                  </div>
                  <CardTitle className="text-base font-semibold text-green-primary">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 text-sm text-justify leading-relaxed">
                  {description}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-center text-sm text-gray-500 mt-4">
        Paso {current} de {count} pasos
      </div>
    </div>
  )
}