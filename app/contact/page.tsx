import Header from "../components/header";
import ContactForm from "./components/ContactForm";
import Footer from "../components/footer";

export default function AboutUs() {
  return (
    <div className="w-full bg-white flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-20">
        <h1 className="text-3xl font-bold text-center mb-8">Contacteer Ons</h1>
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
