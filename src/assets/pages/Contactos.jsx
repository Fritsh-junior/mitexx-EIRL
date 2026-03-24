import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#ff6b00aa_0%,transparent_40%),radial-gradient(circle_at_70%_30%,#ff8c00aa_0%,transparent_40%)] opacity-30" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text  from-amber-400 via-orange-500 to-amber-600 animate-pulse-slow">
            CONTACTO
          </h1>

          <p className="text-2xl md:text-4xl font-bold mb-16 max-w-4xl mx-auto leading-tight">
            CONSTRUIMOS TU FUTURO
            <br />
            <span className="text-amber-400">LLÁMANOS YA</span>
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a
              href="https://wa.me/51928942418"
              target="_blank"
              className="group bg-gray-900/80 backdrop-blur-md border-2 border-amber-500/50 rounded-2xl p-10 hover:border-amber-400 hover:bg-amber-900/30 transition-all duration-300 hover:scale-105"
            >
              <FaWhatsapp className="text-7xl text-green-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-black mb-2">WHATSAPP</div>
              <div className="text-4xl font-bold text-amber-400">
                +51 928 942 418
              </div>
            </a>

            {/* Teléfono */}
            <a
              href="tel:+51928942418"
              className="group bg-gray-900/80 backdrop-blur-md border-2 border-red-500/50 rounded-2xl p-10 hover:border-red-400 hover:bg-red-900/30 transition-all duration-300 hover:scale-105"
            >
              <FaPhoneAlt className="text-7xl text-red-500 mx-auto mb-6 group-hover:rotate-12 transition-transform" />
              <div className="text-3xl font-black mb-2">LLAMAR</div>
              <div className="text-4xl font-bold text-red-400">
                +51 928 942 418
              </div>
            </a>

            {/* Email */}
            <div className="group bg-gray-900/80 backdrop-blur-md border-2 border-cyan-500/50 rounded-2xl p-10 hover:border-cyan-400 hover:bg-cyan-900/30 transition-all duration-300 hover:scale-105">
              <FaEnvelope className="text-7xl text-cyan-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-black mb-2">EMAIL</div>
              <div className="text-3xl font-bold text-cyan-400 break-all">
                ventasMitexx@gmail.com.pe
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sedes y horario */}
      <div className="border-t-4 border-amber-600/30 bg-black/80 py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-center">
          <div>
            <h2 className="text-4xl font-black text-amber-500 mb-8">SEDES</h2>
            <div className="space-y-6 text-2xl text-gray-300">
              <p>Ocobamba – Chincheros</p>
              <p>Rocchac</p>
              <p>Ongoy</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black text-amber-500 mb-8">HORARIO</h2>
            <div className="space-y-4 text-2xl text-gray-300">
              <p>Lunes a Sábado</p>
              <p className="text-3xl font-bold">7:30 – 18:00</p>
              <p>Domingos</p>
              <p className="text-3xl font-bold">8:00 – 13:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
