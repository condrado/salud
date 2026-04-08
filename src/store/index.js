import { reactive, watch } from 'vue';

const STORAGE_KEY = 'salud_app_data_v2';

const initialState = {
  startDate: '2026-04-13', // Lunes 13 de Abril de 2026
  meals: {
    desayuno: [
      { id: 1, name: 'Tostadas con Pavo', ingredients: 'Pan integral, Pechuga de pavo extra (90%)', prep: 'Tostar el pan y añadir el pavo.', count: 0 },
      { id: 2, name: 'Yogur +Proteínas', ingredients: 'Yogur +Proteínas Mercadona', prep: 'Tomar directamente o con cuchara.', count: 0 },
      { id: 3, name: 'Fruta (Manzana/Pera)', ingredients: 'Manzana o Pera', prep: 'Lavar y trocear.', count: 0 }
    ],
    comida: [
      { id: 4, name: 'Lentejas estofadas', ingredients: '150g lentejas (bote), 1 zanahoria, 1/2 calabacín', prep: 'Hervir 10 min a fuego medio. Añadir aceite en crudo al servir.', count: 0 },
      { id: 5, name: 'Pollo con arroz y judías', ingredients: '150g pechuga, 1 vasito arroz integral, 100g judías verdes', prep: 'Pollo a la plancha (fuego medio). Arroz al micro (1 min).', count: 0 },
      { id: 6, name: 'Salmón con patata asada', ingredients: '150g salmón fresco, 1 patata mediana', prep: 'Patata al micro (7 min). Salmón a la plancha o bolsa de asar (5 min).', count: 0 },
      { id: 7, name: 'Pasta integral con atún', ingredients: '60g pasta seca, 1 lata atún natural, calabacín picado', prep: 'Hervir pasta 10 min. Saltear calabacín y mezclar.', count: 0 },
      { id: 8, name: 'Garbanzos con espinacas', ingredients: '150g garbanzos, espinacas congeladas', prep: 'Saltear espinacas y calentar con los garbanzos 5 min.', count: 0 },
      { id: 9, name: 'Solomillo de cerdo con ensalada', ingredients: '150g solomillo, zanahoria, canónigos', prep: 'Solomillo al horno o plancha. Aliño: solo aceite y sal.', count: 0 },
      { id: 10, name: 'Guiso de pollo Batch Cooking', ingredients: '150g pollo, 1 patata, judías verdes', prep: 'Todo a la olla con agua/caldo 20 min.', count: 0 }
    ],
    merienda: [
      { id: 11, name: 'Yogur Bífidus', ingredients: 'Yogur bífidus natural', prep: 'Tomar frío.', count: 0 },
      { id: 12, name: 'Pieza de Fruta', ingredients: 'Plátano, Manzana o Pera', prep: 'Lavar y comer.', count: 0 },
      { id: 13, name: 'Queso de Burgos 0%', ingredients: 'Queso de Burgos 0%', prep: 'Servir con un toque de miel opcional.', count: 0 }
    ],
    cena: [
      { id: 14, name: 'Tortilla y espárragos', ingredients: '2 huevos, 6 espárragos blancos (bote)', prep: 'Tortilla con gotas de aceite. Espárragos a la plancha 1 min.', count: 0 },
      { id: 15, name: 'Crema de calabacín', ingredients: '1 calabacín, 1 patata pequeña, chorrito leche desnatada', prep: 'Hervir 15 min, pelar y triturar.', count: 0 },
      { id: 16, name: 'Tiras de pavo con zanahoria', ingredients: '150g solomillo pavo, 2 zanahorias', prep: 'Saltear pavo. Zanahorias al vapor (5 min micro).', count: 0 },
      { id: 17, name: 'Huevo duro y salmón ahumado', ingredients: '2 huevos duros, 80g salmón ahumado, canónigos', prep: 'Ensalada fría. Muy fácil de digerir.', count: 0 },
      { id: 18, name: 'Lomo con puré de calabaza', ingredients: '150g lomo de cerdo, 200g calabaza congelada', prep: 'Lomo plancha. Calabaza hervida y chafada.', count: 0 },
      { id: 19, name: 'Sushi Mercadona', ingredients: 'Pack salmón/atún', prep: 'Prohibido wasabi y jengibre. Poca soja.', count: 0 },
      { id: 20, name: 'Cena líquida suave', ingredients: 'Caldo de pollo natural, 1 yogur bífidus', prep: 'Calentar caldo y tomar suave.', count: 0 }
    ]
  },
  shoppingList: [
    { id: 201, name: 'Pechugas de pollo (1.2kg)', checked: false, cat: 'Proteína' },
    { id: 202, name: 'Solomillo de pavo (800g)', checked: false, cat: 'Proteína' },
    { id: 203, name: 'Solomillo de cerdo', checked: false, cat: 'Proteína' },
    { id: 204, name: 'Lomo de cerdo', checked: false, cat: 'Proteína' },
    { id: 205, name: 'Huevos grandes (2 docenas)', checked: false, cat: 'Proteína' },
    { id: 206, name: 'Salmón fresco (3-4 lomos)', checked: false, cat: 'Proteína' },
    { id: 207, name: 'Salmón ahumado (2 packs)', checked: false, cat: 'Proteína' },
    { id: 208, name: 'Pechuga de pavo extra (90%)', checked: false, cat: 'Proteína' },
    { id: 301, name: 'Judías verdes congeladas', checked: false, cat: 'Verduras' },
    { id: 302, name: 'Espinacas congeladas', checked: false, cat: 'Verduras' },
    { id: 303, name: 'Salteado de verduras', checked: false, cat: 'Verduras' },
    { id: 304, name: 'Calabaza troceada', checked: false, cat: 'Verduras' },
    { id: 305, name: 'Calabacines grandes (4)', checked: false, cat: 'Verduras' },
    { id: 306, name: 'Zanahorias (1kg)', checked: false, cat: 'Verduras' },
    { id: 307, name: 'Canónigos (bolsa)', checked: false, cat: 'Verduras' },
    { id: 308, name: 'Manzanas y Peras', checked: false, cat: 'Fruta' },
    { id: 309, name: 'Plátanos', checked: false, cat: 'Fruta' },
    { id: 401, name: 'Arroz integral', checked: false, cat: 'Despensa' },
    { id: 402, name: 'Pasta integral', checked: false, cat: 'Despensa' },
    { id: 403, name: 'Patatas (3kg)', checked: false, cat: 'Despensa' },
    { id: 404, name: 'Copos de avena', checked: false, cat: 'Despensa' },
    { id: 405, name: 'Garbanzos cocidos (2 botes)', checked: false, cat: 'Despensa' },
    { id: 406, name: 'Lentejas cocidas (2 botes)', checked: false, cat: 'Despensa' },
    { id: 407, name: 'Queso de Burgos 0%', checked: false, cat: 'Lácteos' },
    { id: 408, name: 'Yogures Bífidus naturales', checked: false, cat: 'Lácteos' },
    { id: 409, name: 'Yogures +Proteínas', checked: false, cat: 'Lácteos' },
    { id: 410, name: 'Caldo de pollo natural', checked: false, cat: 'Otros' }
  ],
  rules: [
    'Regla 120 min: No tumbarse antes de 2h post-comida.',
    'Masticación: Masticar cada bocado 20 veces.',
    'Bebida: Solo agua / Rooibos / Manzanilla.',
    'Prohibido: Wasabi, jengibre y exceso de soja.'
  ]
};

const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
export const store = reactive(savedState || initialState);

watch(store, (newState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
}, { deep: true });

export const actions = {
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
