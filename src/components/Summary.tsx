import type { Guest, Item } from '../types';

interface SummaryProps {
  guests: Guest[];
  items: Item[];
}

export function Summary({ guests, items }: SummaryProps) {
  const confirmedGuests = guests.filter((g) => g.isConfirmed).length;
  const totalCost = items.reduce((acc, item) => acc + item.price, 0);
  const costPerPerson = confirmedGuests > 0 ? totalCost / confirmedGuests : 0;

  return (
    <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3>Resumo Financeiro</h3>
      <p><strong>Total de Confirmados:</strong> {confirmedGuests} pessoas</p>
      <p><strong>Custo Total do Churrasco:</strong> R$ {totalCost.toFixed(2)}</p>
      <p style={{ fontSize: '18px', color: '#2e7d32' }}>
        <strong>Valor por Pessoa:</strong> R$ {costPerPerson.toFixed(2)}
      </p>
    </div>
  );
}