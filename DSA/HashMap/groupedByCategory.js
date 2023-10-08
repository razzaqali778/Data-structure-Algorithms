const products = [
  { name: "Product A", category: "Electronics" },
  { name: "Product B", category: "Clothing" },
  { name: "Product C", category: "Electronics" },
];

const groupedByCategory = products.reduce((acc, product) => {
  const category = product.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {});
