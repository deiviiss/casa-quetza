'use server'

import { Product } from "@/types/product.interface"

// import prisma from '@/lib/prisma'

const products: Product[] = [
  {
    id: '1',
    name: "Pre-Rolados K’aax Ik’",
    image: "/imgs/pre-rolados.png",
    shortDescription: "Disfruta de la experiencia pura del cáñamo con nuestros pre-rolados premium. De flores curadas de 2 años sin fertilizantes sintéticos.",
    longDescription: "Nuestros pre-rolados K’aax Ik’ están elaborados con flores de cáñamo curadas por más de 2 años, garantizando una experiencia suave, aromática y de la más alta calidad. Sin fertilizantes sintéticos, preservamos la pureza del producto y promovemos la regeneración del suelo en su cultivo.",
    benefits: [
      "Relajación profunda y natural.",
      "Libre de fertilizantes sintéticos.",
      "Aroma y sabor premium.",
      "Cultivo sustentable y regenerativo."
    ],
    usage: [
      "Encender y disfrutar en un ambiente relajado.",
      "Ideal para sesiones de meditación o descanso nocturno."
    ],
    ingredients: ["Flores de cáñamo curadas (100% orgánicas)."],
    origin: "Cultivado en milpas regenerativas sin químicos sintéticos en México.",
    price: 299,
  },
  {
    id: '2',
    name: "Cremas, Aceites y Miel con CBD",
    image: "/imgs/crema-cbd.png",
    shortDescription: "Infusionados con cáñamo cultivado en espacios regenerativos. Alivio natural y relajación.",
    longDescription: "Nuestra línea de cremas, aceites y miel con CBD está diseñada para proporcionar alivio y bienestar de manera natural. Cada producto está infusionado con extractos de cáñamo de alta calidad, cultivado en condiciones sustentables.",
    benefits: [
      "Alivio del estrés y la ansiedad.",
      "Hidratación y regeneración de la piel.",
      "Propiedades antiinflamatorias naturales."
    ],
    usage: [
      "Aplicar sobre la piel limpia en áreas de tensión o dolor.",
      "Usar la miel como endulzante o suplemento diario."
    ],
    ingredients: [
      "Extracto de CBD de cáñamo orgánico.",
      "Aceites esenciales naturales.",
      "Miel 100% pura (en la variante de miel)."
    ],
    origin: "Producido con cáñamo cultivado en espacios regenerativos en México.",
    price: 499,
  },
  {
    id: '3',
    name: "Velas y Souvenirs de cáñamo",
    image: "/imgs/vela-decorativa.png",
    shortDescription: "Lleva contigo un pedazo de nuestra cultura del cáñamo. Productos ecológicos hechos con fibra de cáñamo.",
    longDescription: "Nuestras velas y souvenirs están elaborados con materiales ecológicos derivados del cáñamo, fusionando tradición y sostenibilidad en cada pieza. Aromas relajantes y un diseño artesanal los convierten en el complemento perfecto para cualquier espacio.",
    benefits: [
      "Ambientación con aromas relajantes.",
      "Materiales ecológicos y biodegradables.",
      "Diseño artesanal y exclusivo."
    ],
    usage: [
      "Encender en un espacio cerrado para un ambiente relajante.",
      "Usar como decoración sostenible en el hogar."
    ],
    ingredients: [
      "Cera de cáñamo.",
      "Esencias naturales.",
      "Fibra de cáñamo reciclada."
    ],
    origin: "Elaborado con fibra de cáñamo reciclada en talleres sustentables en México.",
    price: 199,
  },
  {
    id: '4',
    name: "Biofertilizante Orgánico",
    image: "/imgs/aceite-cbd.png",
    shortDescription: "Nutre tus cultivos de manera natural con nuestro biofertilizante de cáñamo.",
    longDescription: "Nuestro biofertilizante orgánico está elaborado con procesos anaeróbicos que maximizan los nutrientes esenciales para la regeneración del suelo. Ideal para agricultores que buscan una alternativa sostenible y natural.",
    benefits: [
      "Aporta nutrientes esenciales para el crecimiento de cultivos.",
      "Mejora la calidad del suelo de manera natural.",
      "Fórmula 100% orgánica y libre de químicos sintéticos."
    ],
    usage: [
      "Diluir en agua y aplicar directamente en la tierra.",
      "Usar como complemento en cultivos ecológicos."
    ],
    ingredients: [
      "Extracto de cáñamo fermentado.",
      "Microorganismos beneficiosos.",
      "Minerales naturales."
    ],
    origin: "Producido con residuos de cáñamo y procesos anaeróbicos en México.",
    price: 399,
  }
];


export const getProducts = async () => {
  return {
    ok: true,
    products
  }
}
