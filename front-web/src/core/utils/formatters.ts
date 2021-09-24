export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString();
};

export const formtatDateToServer = (date?: Date) => {
  if (date) {
    return date?.toISOString().substring(0, 10);
  }
};
