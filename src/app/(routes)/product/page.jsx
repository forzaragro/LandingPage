"use client";

import React from "react";
import Image from "next/image";
import { Card, CardBody, Typography, Button, IconButton } from "@material-tailwind/react";

export default function Producto() {
  return (
    <main className="container mx-auto text-left tablet:pt-20">
      <Typography variant="h1" className="text-4xl font-bold text-center mb-8">
        Nuestros Productos 
      </Typography>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <Image
            src="/images/productoDestacado.png"
            alt="Producto"
            width={300}
            height={300}
            className="opacity:0 transition:opacity 0.5s ease rounded-lg w-full h-full xl:p-16"
          />
        </div>
        <div className="flex flex-col justify-center">
          <Typography variant="h2" className="text-3xl font-semibold mb-4">
            Pulverizador automatizado
          </Typography>
          <Typography className="text-lg text-gray-600 mb-4">
            Equipo de pulverización electrostática completamente autónomo y autorregulable. Alta resistencia a condiciones climáticas adversas y acumulación de producto.  
          </Typography>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">implementos</span>
            <div className="flex items-center"></div>
            <Typography variant="small" className="text-gray-600">
              (más de xx clientes satisfechos)
            </Typography>
          </div>
          <Button color="blue" ripple={true} className="w-full md:w-auto">
            Más Información
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-4 flex items-center gap-2">
              Componentes
            </Typography>
            <ul className="list-disc list-inside space-y-2">
              <li>Panel de control.</li>
              <li>Módulo inductor.</li>
              <li>Anillo inductor.</li>
            </ul>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-4 flex items-center gap-2">
              Beneficios
            </Typography>
            <ul className="list-disc list-inside space-y-2">
              <li>Ahorro de ingrediente activo.</li>
              <li>Mayor cantidad de impactos logrados.</li>
              <li>Ahorro de combustible.</li>
              <li>Distribución de producto homogénea.</li>
            </ul>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-4 flex items-center gap-2">
              Modo de Uso
            </Typography>
            <ol className="list-decimal list-inside space-y-2">
              <li>Insecticidas y Fungicidas.</li>
              <li>Debe haber cobertura verde.</li>
              <li>Pastillas que generen gotas medio/fino.</li>
              <li>Altura de botalón + 50cm de altura.</li>
            </ol>
          </CardBody>
        </Card>


      </div>
    </main>
  );
}
