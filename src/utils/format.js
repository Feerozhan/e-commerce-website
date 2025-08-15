export function formatCurrency(n, currency='PKR'){
  return new Intl.NumberFormat('en-PK', { style:'currency', currency: currency }).format(n)
}
