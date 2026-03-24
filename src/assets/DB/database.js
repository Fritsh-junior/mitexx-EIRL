let contador = 1;
export const cemento = [
  {
    name: "Cemento Portland Tipo I",
    price: 28.5,
    category: "Materiales",
    marca:"Sol",
    subcategory: "Concretos",
    image: "https://promart.vteximg.com.br/arquivos/ids/9975675/22662.jpg?v=639037965260900000",
    details: "El cemento Sol Premium ofrece una experiencia de construcción duradera y confiable con tecnología de resistencia avanzada de última generación. Producido por UNACEM, está equipado con una fórmula que genera resistencias cristalinas excepcionales y bases sólidas. Alcanza más de 300 kg/cm² a los 3 días, 380 kg/cm² a los 7 días y 440 kg/cm² a los 28 días. Se endurece de forma óptima con curado adecuado y permite desencofrados más rápidos. Incluye excelente trabajabilidad, buena retención de slump y fraguado controlado para mayor comodidad en obra.",
    caracteristicas: ["Características principales","Resistencia inicial acelerada"," Excelente trabajabilidad y consistencia"," Cumple NTP 334.009 y ASTM C-150","Versátil para todo tipo de obras cotidianas"," Bolsa reforzada de 42.5 kg con protección multicapa"]
  },
   {
    name: "Cemento Portland Tipo I",
    price: 28.5,
    category: "Materiales",
    marca:"Apu",
    subcategory: "Concretos",
    unit: "saco 42 kg",
    image: "https://www.constructorcenter.com/wp-content/uploads/2021/02/cemento-apu.jpg",
    details: "Cemento de 42 kg de la marca Apu",
  },
  {
    name: "Cemento Portland Tipo I",
    price: 28.5,
    category: "Materiales",
    marca:"Andino",
    subcategory: "Concretos",
    unit: "saco 42 kg",
    image: "https://constructivo.com/imgPosts/15828120947BHWI6p6.jpg",
  }
  ,].map(item => ({
  id: contador++,        
  ...item
}));
export const aceros =[
  {
    name: 'Escobilla de metal',
    price: 3.0,
    category: "Acero",
    subcategory: "Accesorio",
    unit: "",
    image: "...",
  },
  {
    name: 'Escalera Metalica Multifuncional',
    price: 410.0,
    category: "Acero",
    subcategory: "Accesorio",
    unit: "Unidad",
    image: "...",
  },
  {
    name: 'Clavo espiral con cabeza de PVC"',
    price: 45.0,
    category: "Acero",
    subcategory: "Simientos",
    unit: "varilla 9 m",
    image: "...",
  },
  {
    name: 'Varilla de acerro corrugado 1/2"',
    price: 45.0,
    category: "Acero",
    subcategory: "Simientos",
    unit: "varilla 9 m",
    image: "...",
  },
{
    name: 'Varilla de acerro corrugado 3/8"',
    price: 25.0,
    category: "Acero",
    subcategory: "Simientos",
    unit: "varilla 9 m",
    image: "...",
  },
{
    name: 'Malla de acero galvanizado Nª10 Cocada',
    price: 30.0,
    category: "Acero",
    subcategory: "Muro",
    unit: "Metro",
    image: "...",
  },

{
    name: 'Angulo Estructural Astm A36',
    price: 95.0,
    category: "Acero",
    subcategory: "Muro",
    unit: "Unidad",
    image: "...",
  },
{
    name: 'Calamina de acero',
    price: 32.0,
    category: "Acero",
    subcategory: "Tejado",
    unit: "Unidad",
    image: "...",
  },].map(item => ({
  id: contador++,        
  ...item
}));
export const limpieza =[
  {
    name: 'Escobilla de plastico',
    price: 3.0,
    category: "Limpieza",
    subcategory: "Hogar",
    unit: "Unidad",
    image: "...",
  }, 
  {
    name: 'Escoba de mano',
    price: 15.0,
    category: "Limpieza",
    subcategory: "Hogar",
    unit: "Unidad",
    image: "...",
  },{
    name: 'Tela Franela',
    price: 6.0,
    category: "Limpieza",
    subcategory: "Hogar",
    unit: "Metro",
    image: "...",
  },
  {
    name: 'Desatorador',
    price: 6.0,
    category: "Limpieza",
    subcategory: "Sanitario",
    unit: "Unidad",
    image: "...",
  },
].map(item => ({
  id: contador++,        
  ...item
}));
export const herramientas =[
   {
    name: 'Brocha',
    price: 12.0,
    category: "Herramienta",
    subcategory: "Fachada",
    unit: "Unidad",
    image: "...",  
  },
  {
    name: 'Barreta de Fierro',
    price: 80.0,
    category: "Herramienta",
    subcategory: "Excavacion",
    unit: "Unidad",
    image: "...",  
  },
  {
    name: 'Carretilla de metal tipo bugui',
    price: 320.0,
    category: "Herramienta",
    subcategory: "Excavacion",
    unit: "Unidad",
    image: "...",  
  },
].map(item => ({
  id: contador++,        
  ...item
}));
export const seguridad =[
 {
    name: 'Cinta de Señalizacion de plastico',
    price: 35.0,
    category: "Seguridad",
    subcategory: "Señalizacion",
    unit: "Unidad",
    image: "...",
  }, 
  {
    name: 'Casco Protector',
    price: 12.0,
    category: "Seguridad",
    subcategory: "Epp",
    unit: "Unidad",
    image: "...",
  },
  {
    name: 'Arnes de seguridad de poliester',
    price: 190.0,
    category: "Seguridad",
    subcategory: "Epp",
    unit: "Unidad",
    image: "...",
  },
  {
    name: 'Botiquin de madera',
    price: 50.0,
    category: "Seguridad",
    subcategory: "Primeros Auxilios",
    unit: "Unidad",
    image: "...",
  },
].map(item => ({
  id: contador++,        
  ...item
}));
export const cubos =[
  {
    name: 'Balde de Plastico',
    price: 22.0,
    category: "Contenedor",
    subcategory: "Cubetas",
    unit: "Unidad",
    image: "...",
  },
].map(item => ({
  id: contador++,        
  ...item
}));
  export const bloques =[
  {
    name: "Ladrillo king kong",
    price: 1.2,
    category: "Materiales",
    subcategory: "Ladrillos y bloques",
    unit: "unidad",
    image: "...",
  },
].map(item => ({
  id: contador++,        
  ...item
}));
export const agregado =[
{
  name: 'Arena Gruesa',
    price: 150.0,
    category: "Aregado",
    subcategory: "Agregado",
    unit: "Metro Cubico (M3)",
    image: "...",},
    {
  name: 'Hormigon',
    price: 140.0,
    category: "Aregado",
    subcategory: "Agregado",
    unit: "Metro Cubico (M3)",
    image: "...",},


].map(item => ({
  id: contador++,          
  ...item
}));

//Servicios
export const serviciosDB = [
  {
    category: "Diseño y planos",
    subcategory: "Planos",
    name: "Diseño y planos arquitectónicos",
    image: "https://gruposanpedro.com.pe/wp-content/uploads/2020/12/servicios-diseno-planos-aequitectonicos-lima-peru-grupo-san-pedro-1.jpg",
    details: "Ofrecemos un servicio integral de diseño y elaboración de planos arquitectónicos completos para viviendas, edificios multifamiliares, locales comerciales y proyectos industriales. Nuestro equipo de arquitectos e ingenieros desarrolla planos en 2D (AutoCAD) y modelos 3D (Revit), incluyendo planos de arquitectura, estructurales, eléctricos, sanitarios, gas y acabados. Cumplimos con todas las normas municipales de dentro del departamento de Apurimac, entregamos expedientes técnicos listos para aprobación y brindamos acompañamiento durante el proceso de licencia de construcción.",
    caracteristicas: [
      "Planos completos de arquitectura, estructura, instalaciones y acabados",
      "Modelado BIM en Revit y renders 3D fotorrealistas",
      "Expediente técnico completo para licencia municipal",
      "Entrega en formatos PDF, DWG y 3D",
      "Asesoría personalizada y modificaciones ilimitadas durante el proceso",
      "Cumplimiento de normas sismorresistentes y accesibilidad"
    ]
  },
   {
  category: "Diseño y planos",
  subcategory: "Construccion",
  name: "Construcción de Casas a Todo Costo",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  details: "Ofrecemos la construcción completa de tu casa en la modalidad \"Todo Incluido\" o \"Llave en Mano\". M&X se encarga de absolutamente todo el proceso constructivo, desde la preparación del terreno hasta la entrega final de la vivienda. Esto incluye mano de obra especializada, maquinaria pesada, suministro de todos los materiales de construcción, transporte, logística, dirección técnica completa y limpieza final de la obra.\n\nEn cuanto a los aspectos técnicos, trabajamos con un sistema de albañilería confinada con columnas y vigas de concreto armado, el cual es especialmente recomendado para las zonas sísmicas del Perú. Cumplimos estrictamente con la Norma Técnica E.030 de Diseño Sismorresistente y el Reglamento Nacional de Edificaciones (RNE). La cimentación se diseña según el estudio de suelos del terreno, utilizando concreto de resistencia f'c 175 kg/cm² o superior y acero de grado fy 4200 kg/cm². Las losas pueden ser aligeradas o macizas según el diseño estructural aprobado.\n\nLos acabados incluyen pisos de cerámica o porcelanato según el presupuesto del cliente, paredes con tarrajeo fino y pintura látex de primera calidad, instalaciones eléctricas y sanitarias completas con materiales certificados, y techo según las especificaciones acordadas. Todo el proyecto cuenta con planos estructurales visados por ingeniero civil colegiado, garantizando el cumplimiento total de las normas peruanas vigentes.\n\nRespecto a las modalidades de pago, ofrecemos tres opciones flexibles para mayor comodidad del cliente: pago total al inicio con un atractivo descuento, pago en dos partes (50% al inicio de la obra y 50% al finalizar), o pago fraccionado en 6 cuotas mensuales sujeto a términos y condiciones. Entregamos la casa completamente terminada, limpia y lista para habitar, con garantía escrita de la obra por un año.",
  caracteristicas: [
    "Construcción completa a todo costo (mano de obra + materiales + maquinaria)",
    "Sistema estructural sismorresistente según Norma E.030",
    "Incluye todos los acabados de calidad",
    "Supervisión técnica diaria por ingeniero residente",
    "Tres modalidades de pago flexibles",
    "Cumplimiento total de normas técnicas peruanas",
    "Entrega llave en mano con garantía de 1 año"
  ]
},
  {
    category: "Diseño y planos",
    subcategory: "Diseño",
    name: "Remasterización de planos en 3D",
    image: "https://images.unsplash.com/photo-1581092580497-e21f9d5a6e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    details: "Transformamos tus planos antiguos o básicos en 2D a impresionantes modelos tridimensionales de alta calidad. El servicio incluye la digitalización completa del plano, modelado 3D preciso, texturizado realista, iluminación profesional y renders fotorrealistas desde múltiples ángulos. Ideal para presentaciones a clientes, municipalidad, inversionistas o para marketing inmobiliario. También realizamos recorridos virtuales 360° y animaciones para una mejor visualización del proyecto.",
    caracteristicas: [
      "Digitalización y corrección de planos antiguos",
      "Modelado 3D profesional en alta resolución",
      "Renders fotorrealistas interiores y exteriores",
      "Recorridos virtuales y tours 360°",
      "Animaciones de día y noche",
      "Exportación en formatos para impresión y web",
      "Entrega en menos de 7 días"
    ]
  },
  {
    category: "Alquiler",
    subcategory: "Maquinaria Pesada",
    name: "Alquiler de Maquinaria Pesada",
    image: "https://images.unsplash.com/photo-1581092160607-4c5f9c4c4e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    details: "Contamos con una amplia flota de maquinaria pesada para alquiler con y sin operador en Lima y provincias. Ofrecemos excavadoras, retroexcavadoras, cargadores frontales, motoniveladoras, rodillos compactadores, volquetes y mini cargadores. Todos nuestros equipos están en excelente estado, con mantenimiento preventivo reciente y seguros al día. Brindamos servicio rápido de entrega y recojo, asesoría técnica para elegir la máquina adecuada y flexibilidad en los periodos de alquiler (por hora, día, semana o mes).",
    caracteristicas: [
      "Excavadoras de 3 a 20 toneladas",
      "Retroexcavadoras y miniexcavadoras",
      "Cargadores frontales y volquetes",
      "Motoniveladoras y rodillos vibratorios",
      "Alquiler con operador certificado",
      "Entrega en todo Lima y Callao el mismo día",
      "Mantenimiento y combustible incluido según contrato",
      "Precios competitivos y facturación electrónica"
    ]
  }
].map(item => ({
  id: contador++,          
  ...item
}));

