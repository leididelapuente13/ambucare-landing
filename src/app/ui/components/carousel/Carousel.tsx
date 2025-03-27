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
import Image from "next/image"
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
      <Carousel setApi={setApi}>
        <CarouselContent>
          {improvedProcedures.map(({ title, description, imagepath }, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Card className="shadow-2xs border border-gray-200 rounded-xl p-5 bg-white w-full max-w-lg gap-4">
                <CardHeader className="flex flex-col justify-center items-center text-center pt-2.5">
                  <CardTitle className="text-lg font-semibold text-green-primary">{title}</CardTitle>
                </CardHeader>
                <CardContent className=" leading-relaxed flex flex-col gap-4 h-fit">
                  <div className="text-gray-700 text-sm text-left leading-relaxed tracking-normal break-words hyphens-auto line-clamp">
                    {description}
                  </div>
                  <div className="h-[40%]">
                    <Image alt={`Imagen del paso ${title}`} src={imagepath} width={420} height={300} placeholder="blur" blurDataURL={imagepath} />
                  </div>
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