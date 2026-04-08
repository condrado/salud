import { reactive, watch } from 'vue';

const initialState = {
  activeView: 'desayuno',
  startDate: '2026-03-30', // Lunes 30 de Marzo de 2026
  "meals": {
    "desayuno": [
      { "id": 1, "name": "El Clásico", "ingredients": "1 tostada pan 100% integral (60g), 1 tarrina Queso Burgos 0%, 2 lonchas pavo, vaso leche desnatada/avena.", "prep": "Tostar pan. Poner queso y pavo. Café descafeinado o infusión con leche/avena.", "count": 0 },
      { "id": 2, "name": "El Nórdico", "ingredients": "1 tostada pan 100% integral, 1/4 aguacate chafado (capa fina), 1 loncha salmón ahumado.", "prep": "Chafar aguacate en capa fina. Añadir salmón. No abusar de la grasa.", "count": 0 },
      { "id": 3, "name": "El Dulce Digestivo", "ingredients": "1 Yogur Bífidus Natural, 30g copos de avena finos, un platano.", "prep": "El plátano protege la mucosa. Mezclar todo. Digestivo.", "count": 0 },
      { "id": 4, "name": "El Proteico", "ingredients": "1 huevo entero + 1 clara (sartén antiadherente, casi sin aceite), 1 tostada integral.", "prep": "Huevos revueltos sobre tostada. Proteína limpia.", "count": 0 },
      { "id": 5, "name": "El Rápido", "ingredients": "1 batido '+Proteínas' (Vainilla/Fresa), 3 nueces naturales, 1 manzana sin piel.", "prep": "Tomar batido frío. Picar nueces. Pelar manzana para hiato.", "count": 0 }
    ],
    "comida": [
      { "id": 101, "name": "Día 1: Lentejas Estofadas Suaves", "ingredients": "150g lentejas cocidas (bote), 100g zanahoria pelada, 100g calabacín, 1 cdta AOVE, sal.", "prep": "Hervir zanahoria y calabacín 10 min. Añadir lentejas lavadas 3 min. AOVE en crudo al final.", "count": 0 },
      { "id": 102, "name": "Día 2: Pollo, Arroz y Judías", "ingredients": "150g pechuga pollo, 1 vasito arroz integral, 150g judías verdes congeladas.", "prep": "Cuece judías 10 min. Arroz 1 min micro. Pollo plancha fuego medio (sin tostar bordes).", "count": 0 },
      { "id": 103, "name": "Día 3: Macarrones Pavo y Champiñones", "ingredients": "50g pasta integral, 100g solomillo pavo, 100g champiñones frescos.", "prep": "Hierve pasta. Saltear champiñones y pavo a dados pequeños. Mezclar.", "count": 0 },
      { "id": 104, "name": "Día 4: Garbanzos con Espinacas", "ingredients": "150g garbanzos cocidos (bote), 150g espinacas congeladas, 1 huevo duro.", "prep": "Saltear espinacas suave. Añadir garbanzos lavados 3 min. Añadir huevo duro picado.", "count": 0 },
      { "id": 105, "name": "Día 5: Solomillo de Cerdo con Boniato", "ingredients": "150g solomillo cerdo magro, 150g boniato, canónigos, AOVE, sal.", "prep": "Boniato dados al micro 6 min. Solomillo plancha. Canónigos con AOVE.", "count": 0 },
      { "id": 106, "name": "Día 6: Ensalada Quinoa", "ingredients": "1 vasito quinoa, 150g pechuga pollo, 100g zanahoria rallada, 50g maíz.", "prep": "Quinoa 1 min micro. Pollo plancha en tiras. Mezclar todo.", "count": 0 },
      { "id": 107, "name": "Día 7: Guiso Pavo y Patata", "ingredients": "150g pavo guisar, 150g patata, 100g zanahoria, sal.", "prep": "Sellar pavo. Añadir agua, verdura y patata 'cascada'. Hervir 25 min fuego lento.", "count": 0 },
      { "id": 108, "name": "Día 8: Salmón Vapor con Patata", "ingredients": "150g lomo salmón fresco, 150g patata pequeña, AOVE, sal.", "prep": "Estuche vapor/bolsa: patata rodajas y salmón. Sal/AOVE. 5 min microondas.", "count": 0 },
      { "id": 109, "name": "Día 9: Lomo con Puré de Patata", "ingredients": "150g lomo cerdo, 150g patata, vaso leche desnatada, sal.", "prep": "Hervir y chafar patata con leche. Lomo a la plancha suave.", "count": 0 },
      { "id": 110, "name": "Día 10: Alubias Blancas con Verduras", "ingredients": "150g alubias blancas (bote), 100g calabaza, 100g calabacín, AOVE.", "prep": "Hervir verduras dados 10 min. Añadir alubias lavadas 3 min.", "count": 0 },
      { "id": 111, "name": "Día 11: Arroz con Pollo en Bolsa", "ingredients": "150g pollo, 50g arroz crudo, zanahoria.", "prep": "Arroz hervido. Pollo/zanahoria en bolsa Mercadona (Micro 6m / Horno 20m). Mezclar.", "count": 0 },
      { "id": 112, "name": "Día 12: Pasta Integral con Pavo", "ingredients": "50g pasta integral, 100g fiambre pavo extra, calabacín, AOVE.", "prep": "Hierve pasta. Dados calabacín/pavo salteados. Mezclar.", "count": 0 },
      { "id": 113, "name": "Día 13: Burger Pollo con Zanahoria", "ingredients": "1 burger pollo Mercadona (+Prot), 2 zanahorias.", "prep": "Zanahoria bastones vapor 4 min. Burger plancha sin pan.", "count": 0 },
      { "id": 114, "name": "Día 14: Tiras de Pollo Salteadas", "ingredients": "150g pechuga, 200g salteado de verduras (sin pimiento).", "prep": "Sartén con gota aceite, tapado, hasta que se haga en su propio jugo.", "count": 0 }
    ],
    "merienda": [
      { "id": 201, "name": "Manzana Asada", "ingredients": "1 manzana sin piel ni corazón.", "prep": "Pela, corazón fuera, bol con dedo agua. Micro 4 min. Batch cooking el domingo.", "count": 0 },
      { "id": 202, "name": "Frutos Secos", "ingredients": "20g de nueces naturales o almendras crudas.", "prep": "Esenciales para el colesterol. Masticar muy despacio.", "count": 0 },
      { "id": 203, "name": "Lácteo Suave", "ingredients": "1 Gelatina 0% Mercadona o 1 Yogur natural.", "prep": "Tomar directamente del envase.", "count": 0 },
      { "id": 204, "name": "Embutido Magro", "ingredients": "3 lonchas Jamón Cocido Extra o Pechuga Pavo gruesa.", "prep": "Mínimo 90% carne. Masticar a conciencia.", "count": 0 },
      { "id": 205, "name": "Snack Salado", "ingredients": "30g altramuces en bote.", "prep": "Lavar MUY BIEN para quitar toda la sal.", "count": 0 }
    ],
    "cena": [
      { "id": 301, "name": "Día 1: Tortilla y Espárragos", "ingredients": "2 huevos, 100g espárragos blancos bote, 1 rebanada pan integral (30g).", "prep": "Tortilla francesa. Espárragos bien escurridos.", "count": 0 },
      { "id": 302, "name": "Día 2: Crema de Calabacín y Patata", "ingredients": "2 calabacines, 1 patata mediana, vaso leche desnatada, sal.", "prep": "Pela, hierve 15 min, tritura fino con leche. Haz doble para el día 6.", "count": 0 },
      { "id": 303, "name": "Día 3: Sushi Salmón (10 piezas)", "ingredients": "8 makis de salmón y 2 nigiris de salmón.", "prep": "Saca 10 min antes del frigo. Sin wasabi, jengibre ni soja.", "count": 0 },
      { "id": 304, "name": "Día 4: Caldo Pollo con Fideos", "ingredients": "30g fideos finos, caldo casero (Día 4 prep).", "prep": "Hervir fideos 3 min en el caldo. Cenar tazón caliente.", "count": 0 },
      { "id": 305, "name": "Día 5: Salmón Ahumado y Queso", "ingredients": "100g salmón ahumado, 1 tarrina queso Burgos 0%, 2 biscotes integrales.", "prep": "Montar frío sobre biscotes. Cena muy ligera.", "count": 0 },
      { "id": 306, "name": "Día 6: Crema de Calabacín + Pavo", "ingredients": "Crema sobrante (Día 2), 3 lonchas gruesas pavo.", "prep": "Calentar crema. Pavo 10 seg en sartén.", "count": 0 },
      { "id": 307, "name": "Día 7: Revuelto de Ajetes", "ingredients": "1 huevo + 1 clara, 100g ajetes tiernos congelados.", "prep": "Saltear ajetes hasta estar muy tiernos. Añadir huevo jugoso.", "count": 0 },
      { "id": 308, "name": "Día 8: Sopa Pollo Huevo Cuajado", "ingredients": "Caldo casero (Día 4), 1 huevo crudo.", "prep": "Hervir caldo. Cascar huevo dentro, bajar fuego, tapar 3 min.", "count": 0 },
      { "id": 309, "name": "Día 9: Ensalada Atún y Canónigos", "ingredients": "Canónigos, 1 lata atún natural, 1 queso Burgos 0%, AOVE.", "prep": "Atún muy escurrido. Aliño muy suave. Masticar mucho.", "count": 0 },
      { "id": 310, "name": "Día 10: Crema de Zanahoria", "ingredients": "300g zanahorias, 1/2 patata, 2 lonchas jamón cocido, sal.", "prep": "Hervir, triturar fino. Jamón cocido picado encima.", "count": 0 },
      { "id": 311, "name": "Día 11: 'Falso Tartar' Antirreflujo", "ingredients": "100g salmón fresco (pre-congelado), 1/2 aguacate, 2 biscotes, AOVE, sal.", "prep": "Picar todo a cuchillo minúsculo. Mezclar suave con AOVE/sal.", "count": 0 },
      { "id": 312, "name": "Día 12: Puré de Patata con Atún", "ingredients": "1 patata mediana, 1 lata atún natural, vaso leche desnatada, sal.", "prep": "Patata hervida chafada con leche y atún escurrido. Digestivo.", "count": 0 },
      { "id": 313, "name": "Día 13: Sushi Atún (10 piezas)", "ingredients": "8 makis de atún y 2 nigiris de atún.", "prep": "Saca 10 min antes del frigo. Sin salsas. Masticar muy bien el arroz.", "count": 0 },
      { "id": 314, "name": "Día 14: Tortilla Calabacín", "ingredients": "2 huevos, 1/2 calabacín rallado.", "prep": "Rallar calabacín, quitar agua con manos. Hacer tortilla.", "count": 0 }
    ]
  },
  "shoppingList": [
    { "id": 10, "name": "Pechuga de pollo entera", "qty": "3 bandejas", "checked": false, "cat": "Carnes (Trocear a 150g)", "freq": "Quincenal" },
    { "id": 11, "name": "Solomillo de pavo", "qty": "1 bandeja", "checked": false, "cat": "Carnes (Trocear a 150g)", "freq": "Quincenal" },
    { "id": 12, "name": "Pavo para guisar en dados", "qty": "1 bandeja", "checked": false, "cat": "Carnes (Trocear a 150g)", "freq": "Quincenal" },
    { "id": 13, "name": "Solomillo de cerdo magro", "qty": "1 bandeja", "checked": false, "cat": "Carnes (Trocear a 150g)", "freq": "Quincenal" },
    { "id": 14, "name": "Lomo de cerdo cintas/filetes", "qty": "1 bandeja", "checked": false, "cat": "Carnes (Trocear a 150g)", "freq": "Quincenal" },
    { "id": 15, "name": "Hamburguesas de Pollo Alta Prot", "qty": "1 pack", "checked": false, "cat": "Carnes (Trocear a 150g)", "freq": "Quincenal" },
    { "id": 16, "name": "Salmón fresco (Lomos)", "qty": "2-3 lomos", "checked": false, "cat": "Pescadería", "freq": "Quincenal" },
    { "id": 20, "name": "Judías Verdes congeladas", "qty": "2 bolsas", "checked": false, "cat": "Congelados", "freq": "Quincenal" },
    { "id": 21, "name": "Espinacas congeladas", "qty": "1 bolsa", "checked": false, "cat": "Congelados", "freq": "Quincenal" },
    { "id": 22, "name": "Ajetes tiernos congelados", "qty": "1 bolsa", "checked": false, "cat": "Congelados", "freq": "Quincenal" },
    { "id": 30, "name": "Patatas", "qty": "1 malla", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 31, "name": "Arroz Integral", "qty": "1 pack", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 32, "name": "Macarrones Integrales", "qty": "1 pack", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 33, "name": "Lentejas cocidas", "qty": "1 bote", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 34, "name": "Garbanzos cocidos", "qty": "1 bote", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 35, "name": "Alubias blancas cocidas", "qty": "1 bote", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 36, "name": "Espárragos blancos gruesos", "qty": "1 bote", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 37, "name": "Atún al natural", "qty": "3 latas", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 38, "name": "Altramuces en bote", "qty": "1 bote", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 39, "name": "Copos de avena finos", "qty": "1 bolsa", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 40, "name": "Biscotes integrales", "qty": "1 caja", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 41, "name": "Bolsas para asar", "qty": "1 pack", "checked": false, "cat": "Accesorios", "freq": "Quincenal" },
    { "id": 42, "name": "Aceite de Oliva Virgen Extra (AOVE)", "qty": "1 botella", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 43, "name": "Sal", "qty": "1 pack", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 44, "name": "Fideos finos", "qty": "1 pack", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 45, "name": "Café descafeinado Dolce Gusto", "qty": "1 pack", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 46, "name": "Quinoa", "qty": "1 pack", "checked": false, "cat": "Despensa", "freq": "Quincenal" },
    { "id": 50, "name": "Manzanas", "qty": "1 malla", "checked": false, "cat": "Fruta", "freq": "Semanal" },
    { "id": 51, "name": "Plátanos", "qty": "1 mano", "checked": false, "cat": "Fruta", "freq": "Semanal" },
    { "id": 52, "name": "Calabacines", "qty": "2 unidades", "checked": false, "cat": "Verdura Fresca", "freq": "Semanal" },
    { "id": 53, "name": "Zanahorias", "qty": "1kg", "checked": false, "cat": "Verdura Fresca", "freq": "Semanal" },
    { "id": 54, "name": "Boniato", "qty": "1 unidad", "checked": false, "cat": "Verdura Fresca", "freq": "Semanal" },
    { "id": 55, "name": "Champiñón laminado", "qty": "1 bandeja", "checked": false, "cat": "Verdura Fresca", "freq": "Semanal" },
    { "id": 56, "name": "Canónigos", "qty": "1 bolsa", "checked": false, "cat": "Verdura Fresca", "freq": "Semanal" },
    { "id": 57, "name": "Aguacates", "qty": "2 unidades (verdes)", "checked": false, "cat": "Verdura Fresca", "freq": "Semanal" },
    { "id": 58, "name": "Huevos L", "qty": "1 docena", "checked": false, "cat": "Proteína Fresca", "freq": "Semanal" },
    { "id": 59, "name": "Queso Burgos 0%", "qty": "1 tarrina", "checked": false, "cat": "Lácteos", "freq": "Semanal" },
    { "id": 60, "name": "Yogures Bífidus naturales", "qty": "1 pack", "checked": false, "cat": "Lácteos", "freq": "Semanal" },
    { "id": 61, "name": "Batidos/Yogures +Proteínas", "qty": "1 pack", "checked": false, "cat": "Lácteos", "freq": "Semanal" },
    { "id": 62, "name": "Jamón Cocido Extra", "qty": "1 pack", "checked": false, "cat": "Embutido Magro", "freq": "Semanal" },
    { "id": 63, "name": "Pechuga de Pavo Extra", "qty": "1 pack", "checked": false, "cat": "Embutido Magro", "freq": "Semanal" },
    { "id": 64, "name": "Salmón Ahumado", "qty": "1 pack", "checked": false, "cat": "Proteína Fresca", "freq": "Semanal" },
    { "id": 65, "name": "Pan de molde 100% integral", "qty": "1 bolsa", "checked": false, "cat": "Despensa", "freq": "Semanal" },
    { "id": 66, "name": "Leche Desnatada o Bebida de Avena", "qty": "2 Bricks", "checked": false, "cat": "Lácteos", "freq": "Semanal" },
    { "id": 80, "name": "Sushi Salmón y Atún (Bandejas)", "qty": "Días 3 y 13. Solo 10 piezas (8 makis + 2 nigiris)", "checked": false, "cat": "Día a Día", "freq": "Diario" }
  ],
  shoppingFilter: 'Todos',
  lastCancelledReminder: null,
  rules: [
    'Regla 120 min: No tumbarse antes de 2h tras cenar.',
    'Masticación: Masticar 20 veces cada bocado.',
    'Protección Gástrica: Pelar fruta (manzana/zanahoria).',
    'Cero Aderezos: Prohibido wasabi, jengibre y picantes.',
    'Batch Cooking: Haz crema/caldo para varios días.'
  ]
};

const STORAGE_KEY = 'salud_app_data_v7'; // Forzamos v7 para la versión sushi controlada

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
  setShoppingFilter(filter) {
    store.shoppingFilter = filter;
  },
  cancelReminder(dateId) {
    store.lastCancelledReminder = dateId;
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
