"use client"

import { motion } from "framer-motion"
import Link from "next/link";
import { FaLeaf, FaTractor, FaStore, FaHandshake } from "react-icons/fa"

interface Membership {
  title: string;
  icon: React.ElementType;
  price?: string;
  firstTime?: string;
  benefits: string[];
  buttonText: string;
}

interface MembershipCardProps {
  membership: Membership;
  index: number;
}


const memberships = [
  {
    title: "Consumer",
    icon: FaLeaf,
    price: "$139/mes",
    firstTime: "$69.50",
    benefits: ["Acceso a productos con THC", "Descuentos en productos CBD", "Contenido educativo exclusivo"],
    buttonText: "Únete Ahora",
  },
  {
    title: "Productores",
    price: "$239/mes",
    icon: FaTractor,
    benefits: [
      "Acceso a semillas certificadas",
      "Asistencia técnica y capacitación",
      "Descuentos en fertilizantes y herramientas",
    ],
    buttonText: "Ver Detalles",
  },
  {
    title: "Distribuidores",
    price: "$499/mes",
    icon: FaStore,
    benefits: [
      "Precios preferenciales en lotes grandes",
      "Acceso a productos exclusivos",
      "Asesoría en estrategias de venta",
    ],
    buttonText: "Ser Distribuidor",
  },
  {
    title: "Socios",
    price: "Inversión Mínima $5,000",
    icon: FaHandshake,
    benefits: [
      "Participación en toma de decisiones estratégicas",
      "Acceso a eventos y networking",
      "Oportunidad de inversión en nuevos productos",
    ],
    buttonText: "Forma Parte",
  },
]

export default function MembershipCards() {
  return (
    <section id="membership-cards" className="py-16 pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestras Membresías
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memberships.map((membership, index) => (
            <MembershipCard key={membership.title} membership={membership} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MembershipCard({ membership, index }: MembershipCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-6">
        <membership.icon className="text-4xl text-green-600 mb-4" />
        <h3 className="text-2xl font-semibold mb-2">{membership.title}</h3>
        {membership.price && <p className="text-xl font-bold mb-2 text-green-600">{membership.price}</p>}
        {membership.firstTime && <p className="text-sm mb-4">Primera vez: {membership.firstTime}</p>}
        <ul className="mb-6">
          {membership.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center mb-2">
              <svg
                className="w-4 h-4 mr-2 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 pb-6">
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          <Link href={`https://wa.me/529999688834?text=Hola%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20la%20suscripción%20de%20${membership.title}...
`} passHref target='_blank'>
            {membership.buttonText}
          </Link>

        </button>
      </div>
    </motion.div>
  )
}
