import type { Item } from '../types';

interface ItemListProps {
  items: Item[];
  onRemoveItem: (id: number) => void;
}

export function ItemList({ items, onRemoveItem }: ItemListProps) {
  return (
    <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3>Lista de Compras / Gastos</h3>
      {items.length === 0 ? (
        <p style={{ color: '#666' }}>Nenhum item cadastrado.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map((item) => (
            <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #eee' }}>
              <div>
                <span>{item.name}</span> — <strong>{item.quantity}x</strong> (R$ {item.price.toFixed(2)})
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                style={{ background: '#f44336', color: '#fff', border: 'none', padding: '4px 8px', cursor: 'pointer', borderRadius: '4px' }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}