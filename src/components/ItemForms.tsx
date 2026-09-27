import { useState, type FormEvent } from 'react';

interface ItemFormProps {
  onAddItem: (name: string, quantity: number, price: number) => void;
}

export function ItemForm({ onAddItem }: ItemFormProps) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !quantity || !price) return;
    
    onAddItem(name, Number(quantity), Number(price));
    setName('');
    setQuantity('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '15px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px', background: '#f9f9f9' }}>
      <input
        type="text"
        placeholder="Item (ex: Picanha, Cerveja)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '8px', flex: 2, border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <input
        type="number"
        placeholder="Qtd"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={{ padding: '8px', width: '60px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <input
        type="number"
        placeholder="Preço Total (R$)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ padding: '8px', width: '100px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <button type="submit" style={{ padding: '8px 16px', background: '#3f51b5', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px'   }}>
        Adicionar
      </button>
    </form>
  );
}