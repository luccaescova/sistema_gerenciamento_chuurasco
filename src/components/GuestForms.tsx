import { useState, type FormEvent } from 'react';
import type { GuestType } from '../types';

interface GuestFormProps {
  onAddGuest: (name: string, type: GuestType) => void;
}

export function GuestForm({ onAddGuest }: GuestFormProps) {
  const [name, setName] = useState('');
  const [type, setType] = useState<GuestType>('adult');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddGuest(name, type);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '15px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px', background: '#f9f9f9' }}>
      <input
        type="text"
        placeholder="Nome do convidado"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '8px', flex: 1, border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <select value={type} onChange={(e) => setType(e.target.value as GuestType)} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
        <option value="adult">Adulto</option>
        <option value="child">Criança</option>
      </select>
      <button type="submit" style={{ padding: '8px 16px', background: '#ff5722', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px'   }}>
        Adicionar
      </button>
    </form>
  );
}