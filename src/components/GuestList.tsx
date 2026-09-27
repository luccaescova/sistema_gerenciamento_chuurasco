import type { Guest } from '../types';

interface GuestListProps {
  guests: Guest[];
  onToggleConfirm: (id: number) => void;
  onRemoveGuest: (id: number) => void;
}

export function GuestList({ guests, onToggleConfirm, onRemoveGuest }: GuestListProps) {
  return (
    <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3>Convidados ({guests.length})</h3>
      {guests.length === 0 ? (
        <p style={{ color: '#666' }}>Nenhum convidado adicionado ainda.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {guests.map((guest) => (
            <li key={guest.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #eee' }}>
              <div>
                <span style={{ fontWeight: 'bold' }}>{guest.name}</span>
                <span style={{ fontSize: '12px', color: '#666', marginLeft: '8px' }}>
                  ({guest.type === 'adult' ? 'Adulto' : 'Criança'})
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => onToggleConfirm(guest.id)}
                  style={{ background: guest.isConfirmed ? '#4caf50' : '#ff9800', color: '#fff', border: 'none', padding: '4px 8px', cursor: 'pointer', borderRadius: '4px' }}
                >
                  {guest.isConfirmed ? 'Confirmado' : 'Pendente'}
                </button>
                <button
                  onClick={() => onRemoveGuest(guest.id)}
                  style={{ background: '#f44336', color: '#fff', border: 'none', padding: '4px 8px', cursor: 'pointer', borderRadius: '4px' }}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}