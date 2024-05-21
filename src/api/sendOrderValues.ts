export const sendOrderValues = async (values) => {
  const newOrder = { ...values, isPaid: false }; // Dodaje pole isPaid
  const response = await fetch('URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newOrder)
  });

  if (!response.ok) {
    throw new Error('Failed to add order');
  }

  return await response.json();
};
