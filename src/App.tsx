import { useState } from 'react';
import type { Guest, Item, GuestType } from './types';
import { GuestForm } from './components/GuestForms';
import { GuestList } from './components/GuestList';
import { ItemForm } from './components/ItemForms';
import { ItemList } from './components/ItemList';
import { Summary } from './components/Summary';

export default function App() {
  const [guests, setGuests] = useState<Guest[]>([

  ]);

  const [items, setItems] = useState<Item[]>([

  ]);

  const handleAddGuest = (name: string, type: GuestType) => {
    const newGuest: Guest = {
      id: Date.now(),
      name,
      isConfirmed: true,
      type,
    };
    setGuests([...guests, newGuest]);
  };

  const handleToggleConfirm = (id: number) => {
    setGuests(
      guests.map((g) => (g.id === id ? { ...g, isConfirmed: !g.isConfirmed } : g))
    );
  };

  const handleRemoveGuest = (id: number) => {
    setGuests(guests.filter((g) => g.id !== id));
  };

  const handleAddItem = (name: string, quantity: number, price: number) => {
    const newItem: Item = {
      id: Date.now(),
      name,
      quantity,
      price,
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: number) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <div style={{ maxWidth: '700px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '0 15px' }}>
      <h1 style={{ textAlign: 'center', color: '#ff5722' }}> Gerenciador de</h1>
      <h1 style={{ textAlign: 'center', color: '#ff5722' }}> Churrasco </h1>

      <section style={{ marginBottom: '30px' }}>
        <h2>Gerenciar Convidados</h2>
        <GuestForm onAddGuest={handleAddGuest} />
        <GuestList
          guests={guests}
          onToggleConfirm={handleToggleConfirm}
          onRemoveGuest={handleRemoveGuest}
        />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Gerenciar Itens & Custos</h2>
        <ItemForm onAddItem={handleAddItem} />
        <ItemList items={items} onRemoveItem={handleRemoveItem} />
      </section>

      <Summary guests={guests} items={items} />
    </div>
  );
}