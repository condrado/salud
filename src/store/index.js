import { reactive, watch } from 'vue';

const initialState = {
  activeView: 'desayuno',
  startDate: '2026-03-30', // Lunes 30 de Marzo de 2026
  meals: {
    desayuno: [
      { id: 1, name: 'El Clásico', ingredients: '1 tostada integral (60g), Queso Fresco de Burgos 0% (1 tarrina), 2 lonchas pechuga pavo.', prep: 'Tostar pan. Poner el queso y el pavo encima. Acompañar con café descafeinado/infusión con avena.', count: 0 },
      { id: 2, name: 'El Nórdico', ingredients: '1 tostada integral (60g), 1/4 aguacate, 1 loncha salmón ahumado.', prep: 'Chafar el aguacate en capa fina sobre el pan tostado. Añadir el salmón encima.', count: 0 },
      { id: 3, name: 'El Dulce Digestivo', ingredients: '1 Yogur Bífidus Natural, 30g copos de avena finos, media banana madura.', prep: 'Mezclar el yogur con la avena y la banana troceada. La banana madura protege tu mucosa gástrica.', count: 0 },
      { id: 4, name: 'El Proteico', ingredients: '1 huevo entero + 1 clara, 1 tostada integral.', prep: 'Hacer huevos revueltos con gota de aceite en sartén antiadherente. Servir sobre la tostada.', count: 0 },
      { id: 5, name: 'El Rápido', ingredients: '1 batido "+Proteínas" Mercadona (Vainilla/Fresa), 3 nueces, 1 manzana sin piel.', prep: 'Tomar el batido frío. Picar las nueces y pelar la manzana (sin piel es mejor para tu hiato).', count: 0 }
    ],
    comida: [
      { id: 101, name: 'Día 1: Lentejas Estofadas', ingredients: '150g lentejas cocidas, 100g zanahoria, 100g calabacín, 1 cdta AOVE.', prep: 'Hervir zanahoria/calabacín 10 min. Añadir lentejas lavadas 3 min. AOVE en crudo al final.', count: 0 },
      { id: 102, name: 'Día 2: Pollo con Arroz', ingredients: '150g pechuga pollo, 1 vasito arroz integral, 150g judías verdes.', prep: 'Judías hervidas 10 min. Arroz al micro 1 min. Pollo a la plancha (sin quemar los bordes).', count: 0 },
      { id: 103, name: 'Día 3: Macarrones Pavo', ingredients: '50g pasta integral, 100g solomillo pavo, 100g champiñones.', prep: 'Hervir pasta. Saltear pavo y champiñones. Mezclar (sin tomate).', count: 0 },
      { id: 104, name: 'Día 4: Garbanzos Espinacas', ingredients: '150g garbanzos, 150g espinacas, 1 huevo duro.', prep: 'Saltear espinacas sin agua. Añadir garbanzos lavados y huevo duro picado.', count: 0 },
      { id: 105, name: 'Día 5: Solomillo Boniato', ingredients: '150g solomillo cerdo, 150g boniato, canónigos.', prep: 'Boniato al micro 6 min. Solomillo plancha. Acompañar con canónigos frescos.', count: 0 },
      { id: 106, name: 'Día 6: Ensalada Quinoa', ingredients: '1 vasito quinoa, 150g pechuga pollo, 100g zanahoria, 50g maíz.', prep: 'Mezclar quinoa (1 min micro) con tiras de pollo a la plancha y vegetales crudos.', count: 0 },
      { id: 107, name: 'Día 7: Guiso Pavo Patata', ingredients: '150g pavo guisar, 150g patata, 100g zanahoria.', prep: 'Sellar pavo. Añadir agua, patata y zanahoria cascada. Hervir 25 min a fuego lento.', count: 0 },
      { id: 108, name: 'Día 8: Salmón Vapor', ingredients: '150g salmón fresco, 150g patata pequeña.', prep: 'En estuche vapor: patata en rodajas y salmón. Sal/eneldo. 5 min microondas.', count: 0 },
      { id: 109, name: 'Día 9: Lomo con Puré', ingredients: '150g lomo cerdo, 150g patata, chorrito leche desnatada.', prep: 'Hervir patata y chafar con leche. Lomo a la plancha vuelta y vuelta.', count: 0 },
      { id: 110, name: 'Día 10: Alubias Verdura', ingredients: '150g alubias blancas, 100g calabaza, 100g calabacín.', prep: 'Hervir verduras 10 min. Añadir alubias lavadas 3 min. Mucha fibra anti-colesterol.', count: 0 },
      { id: 111, name: 'Día 11: Arroz Pollo Bolsa', ingredients: '150g pollo, 50g arroz seco, zanahoria.', prep: 'Hacer pollo/zanahoria en bolsa de asar (6 min micro). Mezclar con arroz hervido.', count: 0 },
      { id: 112, name: 'Día 12: Pasta Integral Pavo', ingredients: '50g pasta integral, 100g fiambre pavo (taco), calabacín.', prep: 'Hervir pasta. Saltear dados de calabacín y pavo. Mezclar.', count: 0 },
      { id: 113, name: 'Día 13: Burger Pollo', ingredients: '1 burguer pollo premium Mercadona, 2 zanahorias.', prep: 'Zanahorias en bastones al vapor (4 min). Hamburguesa a la plancha (sin pan).', count: 0 },
      { id: 114, name: 'Día 14: Pollo Salteado', ingredients: '150g pollo tiras, 200g salteado verduras (sin pimiento).', prep: 'Todo a la sartén con gota de aceite y tapado para que se haga en su jugo.', count: 0 }
    ],
    merienda: [
      { id: 201, name: 'Manzana Asada', ingredients: '1 manzana sin piel ni corazón.', prep: 'En bol con gota agua, film agujereado, micro 4 min. Ideal para el estómago.', count: 0 },
      { id: 202, name: 'Frutos Secos', ingredients: '20g de nueces naturales o almendras crudas.', prep: 'Masticar muy despacio para saciar.', count: 0 },
      { id: 203, name: 'Lácteo Suave', ingredients: '1 Gelatina 0% Mercadona o 1 Yogur natural.', prep: 'Tomar directamente del envase.', count: 0 },
      { id: 204, name: 'Embutido Magro', ingredients: '3 lonchas Jamón Cocido Extra o Pavo (+90% carne).', prep: 'Masticar bien cada loncha.', count: 0 },
      { id: 205, name: 'Snack Salado', ingredients: '30g altramuces en bote.', prep: 'Lavar MUY BIEN bajo el grifo para quitar la sal del conservante.', count: 0 }
    ],
    cena: [
      { id: 301, name: 'Día 1: Tortilla y Espárragos', ingredients: '2 huevos, 100g espárragos blancos, 1 rebanada pan integral.', prep: 'Tortilla francesa con poco aceite. Espárragos bien escurridos.', count: 0 },
      { id: 302, name: 'Día 2: Crema Calabacín', ingredients: '1/2 ración crema casera (calabacín, patata, leche desnatada).', prep: 'Triturar muy bien para facilitar la digestión nocturna.', count: 0 },
      { id: 303, name: 'Día 3: Sushi Salmón', ingredients: 'Bandeja sushi salmón/atún Mercadona.', prep: 'Prohibido wasabi y jengibre rosa. Sacar 15 min antes del frigo.', count: 0 },
      { id: 304, name: 'Día 4: Caldo de Pollo', ingredients: '1 tazón caldo casero, 30g fideos finos.', prep: 'Hervir fideos 3 min en el caldo. Cena muy ligera.', count: 0 },
      { id: 305, name: 'Día 5: Salmón Ahumado', ingredients: '100g salmón ahumado, 1 tarrina queso Burgos 0%, 2 biscotes integrales.', prep: 'Montar el queso y salmón sobre los biscotes. Cena fría.', count: 0 },
      { id: 306, name: 'Día 6: Crema + Pavo', ingredients: 'Ración crema calabacín, 3 lonchas gruesas pavo.', prep: 'Calentar crema. Pavo vuelta y vuelta 10 seg en sartén.', count: 0 },
      { id: 307, name: 'Día 7: Revuelto Ajetes', ingredients: '1 huevo + 1 clara, 100g ajetes tiernos congelados.', prep: 'Saltear ajetes hasta que estén muy tiernos (clave hiato). Añadir huevos.', count: 0 },
      { id: 308, name: 'Día 8: Sopa con Huevo', ingredients: '1 tazón caldo casero, 1 huevo crudo.', prep: 'Hervir caldo. Añadir huevo, bajar fuego y tapar 3 min hasta cuajar.', count: 0 },
      { id: 309, name: 'Día 9: Ensalada Atún', ingredients: 'Canónigos, 1 lata atún natural, queso Burgos 0%.', prep: 'Escurrir atún al máximo. Mezclar y masticar a conciencia.', count: 0 },
      { id: 310, name: 'Día 10: Crema Zanahoria', ingredients: '300g zanahoria, media patata, 2 lonchas jamón cocido.', prep: 'Hervir y triturar vegetales. Añadir pavo picado encima.', count: 0 },
      { id: 311, name: 'Día 11: Tartar Salmón', ingredients: '1 bandeja tartar salmón Mercadona, 1/2 aguacate.', prep: 'Mezclar tartar con aguacate picaditos. 2 tostaditas.', count: 0 },
      { id: 312, name: 'Día 12: Puré Patata Atún', ingredients: '1 patata mediana, 1 lata atún natural.', prep: 'Patata hervida chafada con tenedor mezclada con atún. Asienta el estómago.', count: 0 },
      { id: 313, name: 'Día 13: Sushi Atún', ingredients: 'Bandeja sushi atún Mercadona.', prep: 'Cena fría digestiva. No comer helado.', count: 0 },
      { id: 314, name: 'Día 14: Tortilla Calabacín', ingredients: '2 huevos, 1/2 calabacín rallado.', prep: 'Rallar calabacín, quitarle el agua con las manos. Mezclar con huevo y hacer tortilla.', count: 0 }
    ]
  },
  shoppingList: [
    { id: 10, name: 'Pechuga Pollo Entera (3 bandejas)', checked: false, cat: 'Súper / Proteína', freq: 'Quincenal' },
    { id: 11, name: 'Solomillo Pavo/Dados (2 bandejas)', checked: false, cat: 'Súper / Proteína', freq: 'Quincenal' },
    { id: 12, name: 'Solomillo/Lomo Cerdo (1 bandeja)', checked: false, cat: 'Súper / Proteína', freq: 'Quincenal' },
    { id: 13, name: 'Huevos L (1 docena)', checked: false, cat: 'Súper / Proteína', freq: 'Semanal' },
    { id: 14, name: 'Hamburguesas Pollo (Pack +Prot)', checked: false, cat: 'Súper / Proteína', freq: 'Quincenal' },
    { id: 15, name: 'Salmón fresco (2 lomos)', checked: false, cat: 'Pescadería', freq: 'Diario' },
    { id: 16, name: 'Tartar de Salmón (1 bandeja)', checked: false, cat: 'Pescadería', freq: 'Diario' },
    { id: 17, name: 'Salmón ahumado (2 packs)', checked: false, cat: 'Lácteos/Fríos', freq: 'Semanal' },
    { id: 20, name: 'Judías verdes / Espinacas (2 bolsas)', checked: false, cat: 'Congelados', freq: 'Quincenal' },
    { id: 22, name: 'Ajetes tiernos (1 bolsa)', checked: false, cat: 'Congelados', freq: 'Quincenal' },
    { id: 30, name: 'Patatas (Malla) / Boniato (1)', checked: false, cat: 'Despensa', freq: 'Quincenal' },
    { id: 31, name: 'Arroz / Pasta Integral (1 pack)', checked: false, cat: 'Despensa', freq: 'Quincenal' },
    { id: 32, name: 'Legumbres en bote (3 botes)', checked: false, cat: 'Despensa', freq: 'Quincenal' },
    { id: 33, name: 'Copos Avena Finos (1 bolsa)', checked: false, cat: 'Despensa', freq: 'Quincenal' },
    { id: 40, name: 'Manzanas (Malla) / Plátanos (1 mano)', checked: false, cat: 'Fruta', freq: 'Semanal' },
    { id: 41, name: 'Calabacines (2) / Zanahorias (1kg)', checked: false, cat: 'Verdura', freq: 'Semanal' },
    { id: 42, name: 'Canónigos (bolsa) / Champiñones (1)', checked: false, cat: 'Verdura', freq: 'Semanal' },
    { id: 43, name: 'Aguacate (1/2 unidades)', checked: false, cat: 'Verdura', freq: 'Semanal' },
    { id: 50, name: 'Queso Burgos / Bífidus (Pack)', checked: false, cat: 'Lácteos', freq: 'Semanal' },
    { id: 51, name: 'Batidos +Proteínas (Pack)', checked: false, cat: 'Lácteos', freq: 'Semanal' },
    { id: 60, name: 'Sushi Salmón/Atún (1 bandeja)', checked: false, cat: 'Día a Día', freq: 'Diario' }
  ],
  rules: [
    'Regla 120 min: No tumbarse antes de 2h tras cenar.',
    'Masticación: Masticar 20 veces cada bocado.',
    'Protección Gástrica: Pelar fruta (manzana/zanahoria).',
    'Cero Aderezos: Prohibido wasabi, jengibre y picantes.',
    'Batch Cooking: Haz crema/caldo para varios días.'
  ]
};

const STORAGE_KEY = 'salud_app_data_v4'; // Subimos a v4 para forzar las frecuencias

const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
export const store = reactive({ 
  ...initialState, 
  ...savedState,
  meals: initialState.meals,
  shoppingList: initialState.shoppingList 
});

watch(store, (newState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
}, { deep: true });

export const actions = {
  getCycleDay() {
    const today = new Date();
    const start = new Date(store.startDate);
    const diffTime = today - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays < 0 ? 0 : (diffDays % 14) + 1;
  },
  setActiveView(view) {
    store.activeView = view;
  },
  incrementMeal(type, id) {
    const meal = store.meals[type].find(m => m.id === id);
    if (meal) meal.count++;
  },
  decrementMeal(type, id) {
    const meal = store.meals[type].find(m => m.id === id);
    if (meal && meal.count > 0) meal.count--;
  },
  toggleItem(id) {
    const item = store.shoppingList.find(i => i.id === id);
    if (item) item.checked = !item.checked;
  },
  resetShoppingList() {
    store.shoppingList.forEach(item => item.checked = false);
  }
};
