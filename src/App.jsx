import React from 'react';
import { Mail, Phone, MapPin, Clock, Calendar, ChevronRight, MessageCircle, Download, Instagram, Linkedin, MessageSquare, Briefcase } from 'lucide-react';

const colors = {
  primary: '#5E2A74', // morado ciruela profundo
  secondary: '#7B5A98', // violeta medio
  soft: '#9C82B3', // lavanda grisácea
  dark: '#1E1A35', // azul tinta oscuro
  bgMain: '#F8F6FA', // marfil / blanco cálido
  bgAlt: '#F1ECF6', // lila pálido
  border: '#CBBFD8', // gris malva suave
};

const SeviAIHub = () => {
  const hubData = {
    name: "Elena García",
    activity: "Social Media Manager con 15 años de experiencia",
    email: "elena.mgarcia.s@gmail.com",
    phone: "+34 687 65 28 46",
    whatsapp: "34687652846",
    profilePicture: "/elena_foto.JPG",
    hubUrl: "https://elena.seviai.com"
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:${hubData.name}\r\nTITLE:${hubData.activity}\r\nTEL;TYPE=WORK,VOICE:${hubData.phone}\r\nEMAIL;TYPE=INTERNET:${hubData.email}\r\nURL:${hubData.hubUrl}\r\nNOTE:SeviAI Hub\r\nEND:VCARD`;
    
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Elena_Garcia.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const ctaLink = {
    id: 'cta', title: "Trabajemos juntos", url: `mailto:${hubData.email}`, icon: Briefcase, subtitle: "Agenda una primera consulta gratis"
  };

  const primaryLinks = [
    { id: 'instagram', title: "Instagram", url: "https://www.instagram.com/elena.socialmedia", icon: Instagram, subtitle: "Contenido y novedades" },
    { id: 'linkedin', title: "LinkedIn", url: "https://www.linkedin.com/in/elenagarciasanchez", icon: Linkedin, subtitle: "Perfil profesional" },
    { id: 'tiktok', title: "TikTok", url: "https://tiktok.com/@elenagarcia.socialmedia", icon: MessageSquare, subtitle: "Tips de comunicación" }
  ];

  return (
    <div className="min-h-screen font-sans flex flex-col items-center relative transition-all" style={{ backgroundColor: colors.bgMain, color: colors.dark, selectionBackgroundColor: colors.secondary, selectionTextColor: '#fff' }}>
      
      {/* Fondo Ligero */}
      <div className="fixed inset-0 z-0 opacity-40 mix-blend-multiply" style={{ backgroundColor: colors.bgMain }}></div>

      {/* Contenedor Principal (Mobile First) */}
      <div className="w-full max-w-md min-h-screen flex flex-col relative z-10 mx-auto bg-transparent pb-10">
        
        {/* Cabecera */}
        <div className="pt-12 px-6 flex flex-col items-center text-center">
          
          {/* Foto de perfil vertical - Adaptado para no cortar manos (Portrait) */}
          {hubData.profilePicture && (
            <div 
               className="w-40 h-56 sm:w-44 sm:h-64 object-cover overflow-hidden mb-6 shadow-2xl relative"
               style={{ 
                 borderRadius: '2rem',
                 border: `4px solid white`,
                 backgroundColor: colors.bgAlt,
                 boxShadow: `0 10px 25px -5px ${colors.soft}80`
               }}
            >
              <img 
                src={hubData.profilePicture} 
                alt={hubData.name} 
                className="w-full h-full object-cover origin-top hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          )}

          {/* Nombre y Actividad */}
          <h1 className="text-[26px] font-extrabold mb-1.5 leading-tight tracking-tight" style={{ color: colors.dark }}>
            {hubData.name}
          </h1>
          
          <h2 className="text-[15px] font-medium mb-6 pb-4 border-b" style={{ color: colors.secondary, borderColor: colors.border }}>
            {hubData.activity}
          </h2>

          {/* Contacto Directo Cabecera */}
          <div className="flex flex-col gap-3 w-full mb-8 text-[13px] font-medium px-2" style={{ color: colors.dark }}>
            <a href={`mailto:${hubData.email}`} className="flex items-center justify-center gap-2 opacity-80 hover:opacity-100 transition-opacity bg-white/60 py-2.5 px-4 rounded-full border shadow-sm hover:shadow" style={{ borderColor: colors.border }}>
              <Mail className="w-4 h-4" style={{ color: colors.primary }} /> <span>{hubData.email}</span>
            </a>
            <a href={`tel:${hubData.phone.replace(/ /g, '')}`} className="flex items-center justify-center gap-2 opacity-80 hover:opacity-100 transition-opacity bg-white/60 py-2.5 px-4 rounded-full border shadow-sm hover:shadow" style={{ borderColor: colors.border }}>
              <Phone className="w-4 h-4" style={{ color: colors.primary }} /> <span>{hubData.phone}</span>
            </a>
          </div>
          
          {/* Frase Principal y Descripción */}
          <div className="mb-10 w-full px-2 text-center flex flex-col items-center">
            <h3 className="text-[20px] font-bold leading-snug mb-3 italic" style={{ color: colors.primary }}>
              "Todo empieza con estar presente.<br/>Pero que te recuerden lo cambia todo."
            </h3>
            <p className="text-[15px] leading-relaxed opacity-80 max-w-[280px]" style={{ color: colors.dark }}>
              Ayudo a pymes a profesionalizar su presencia en Redes Sociales a través de auditorías, asesorías o gestión integral de redes.
            </p>
          </div>

        </div>

        {/* Zona de Botones y Enlaces */}
        <div className="px-6 flex flex-col gap-0 w-full flex-grow">
          
          {/* CTA Principal y Destacado */}
          <a 
            href={ctaLink.url}
            className="group flex flex-col items-center justify-center p-6 rounded-3xl transition-all active:scale-95 mb-6 text-center transform hover:-translate-y-1 relative overflow-hidden"
            style={{ 
              backgroundColor: colors.primary, 
              color: '#FFFFFF',
              boxShadow: `0 14px 28px -6px ${colors.primary}90`,
              border: `1px solid ${colors.secondary}40`
            }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-center justify-center gap-3 mb-1.5">
               <ctaLink.icon className="w-6 h-6" />
               <span className="font-extrabold text-2xl tracking-tight">{ctaLink.title}</span>
            </div>
            <span className="text-white/90 text-[13px] font-medium">{ctaLink.subtitle}</span>
          </a>

          {/* Enlaces Sociales Principales */}
          <div className="flex flex-col gap-3 mb-6">
            {primaryLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between p-4 rounded-2xl transition-all shadow-sm active:-translate-y-px hover:shadow-md"
                style={{
                  backgroundColor: 'white', // Bright contrast against the ivory background
                  border: `1px solid ${colors.border}`,
                  color: colors.dark
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors" style={{ backgroundColor: colors.bgAlt, color: colors.primary }}>
                    <link.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block font-bold text-[17px] leading-tight mb-0.5">{link.title}</span>
                    <span className="text-[12px] font-medium" style={{ color: colors.secondary }}>{link.subtitle}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-all" style={{ color: colors.soft }} />
              </a>
            ))}
          </div>
          
          {/* Horario de Atención */}
          <div className="mt-2 pt-6 pb-2" style={{ borderTop: `1px dashed ${colors.border}` }}>
            <div className="rounded-3xl p-6 relative overflow-hidden group transition-all" style={{ backgroundColor: colors.bgAlt }}>
              <h3 className="text-sm font-bold mb-3 flex items-center justify-center gap-2 uppercase tracking-wide opacity-80" style={{ color: colors.dark }}>
                 <Clock className="w-4 h-4" style={{ color: colors.primary }} /> Horario de atención
              </h3>
              <p className="text-[15px] font-medium leading-relaxed text-center" style={{ color: colors.dark }}>
                9:00 a 14:00 y de 17:00 a 19:00
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-14 px-8 flex flex-col items-center transition-opacity pb-10">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-center mb-3" style={{ color: colors.soft }}>
             © 2026 Elena García
          </p>
          <div className="w-6 h-px mb-4" style={{ backgroundColor: colors.border }}></div>
          <p className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 justify-center" style={{ color: colors.soft }}>
            SeviAI Ecosystem
            <img src="/logo_sin_fondo.png" alt="SeviAI" className="h-4 w-auto opacity-70 grayscale mix-blend-multiply" />
          </p>
        </div>

      </div>

      {/* Floating VCard Superior */}
      <button 
        onClick={handleSaveContact} 
        className="fixed top-5 right-5 w-12 h-12 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 z-50 rounded-full flex items-center justify-center group cursor-pointer"
        style={{ backgroundColor: colors.bgMain, border: `1px solid ${colors.border}` }}
        title="Guardar contacto (vCard)"
      >
        <Download className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: colors.dark }} />
      </button>

      {/* Floating WhatsApp - Adaptado a la paleta del Hub */}
      <a 
        href={`https://wa.me/${hubData.whatsapp}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 w-14 h-14 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 z-50 rounded-full flex items-center justify-center group cursor-pointer"
        title="Contactar por WhatsApp"
        style={{ 
          backgroundColor: colors.primary, 
          boxShadow: `0 10px 25px -5px ${colors.primary}80` 
        }}
      >
        <MessageCircle className="w-7 h-7 text-white drop-shadow-sm group-hover:scale-110 transition-transform" />
      </a>

    </div>
  );
};

export default SeviAIHub;
