import Header from "../components/header";
import Footer from "../components/footer";

export default function AboutUs() {
  return (
    <div className="w-full bg-white flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col">
        <section className="flex-1 flex items-center bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-900 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
            <div className="flex flex-col md:flex-row items-center justify-end">
              <div className="md:w-1/2 lg:w-3/5 text-center md:text-right">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Wat doen wij ?
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto md:ml-auto md:mr-0">
                  Wij bij Polbouw BV bieden snelle toegang tot ervaren experts
                  en betrouwbare onderaannemers, zonder langdurige
                  verplichtingen of complexe contracten. Zo kun je direct
                  schakelen en de juiste mensen inzetten voor jouw project,
                  precies wanneer je ze nodig hebt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex-1 flex items-center bg-white text-black">
          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
            <div className="flex flex-col md:flex-row items-center justify-start">
              <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Wie zijn wij ?
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
                  Bij Polbouw BV vormen we een gedreven en betrouwbaar team,
                  klaar om jouw project tot een succes te maken. Met onze
                  expertise, flexibiliteit en korte lijnen bieden we precies de
                  ondersteuning die je nodig hebt, op het juiste moment. Samen
                  streven we naar kwaliteit en resultaat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
