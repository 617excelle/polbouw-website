import { Button } from "@/components/ui/button";
import Header from "./components/header";
import { Rocket, Podcast, HandHelping, SearchCheck } from "lucide-react";
import { IconText } from "./components/iconText";
import Footer from "./components/footer";
import Image from "next/image";

export default function Component() {
  const features = [
    {
      Icon: SearchCheck,
      title: "Overleg",
      description:
        "Wij starten met een uitgebreide bespreking om de behoeften en uitdagingen van de opdrachtgever te begrijpen.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      Icon: Rocket,
      title: "Doelgericht",
      description:
        "Het Polbouw bv team benut zijn netwerk om snel geschikte kandidaten te benaderen.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      Icon: Podcast,
      title: "Kwaliteits Selectie",
      description:
        "Onze selectieprocedures omvatten interviews en referentiechecks om de best passende professionals voor te stellen.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      Icon: HandHelping,
      title: "Begeleiding en Ondersteuning",
      description:
        "Ook na het afsluiten van het contract blijft het Polbouw bv team betrokken bij het monitoren van de voortgang en prestaties van de professionals.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="min-h-screen pt-16 md:pt-20 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-900 relative overflow-hidden">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Snelle toegang tot experts en onderaannemers, zonder lange
                verplichtingen.
              </h1>
              <Button className="w-full sm:w-auto bg-white hover:bg-white/90 text-blue-500 font-bold rounded-md px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg transition-colors duration-200">
                Waar wacht je nog op
              </Button>
            </div>
            <div className="mt-8 md:mt-0">
              <Image
                className="rounded-md w-full h-auto object-cover mb-8 "
                src="/images/worker.jpg"
                alt="An example image"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-tr from-blue-500 via-blue-600 to-indigo-900">
        <div className="py-12 md:py-16 bg-white rounded-2xl ">
          <div className="container mx-auto px-4">
            <div className="my-12 md:my-20 grid sm:grid-cols-2 gap-12 md:gap-x-8 md:gap-y-16">
              {features.map((feature, index) => (
                <IconText key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
