// storage: number of notes to store
export function calculateCost(storage) {
  const rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;

  return rate * storage * 100; // pennies (the currency’s smallest unit)
}
