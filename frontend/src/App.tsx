import React, { useState } from 'react';
import axios from 'axios';
import { Room, EstimateResult } from './types';
import RoomForm from './RoomForm';

const App: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [result, setResult] = useState<EstimateResult | null>(null);

  const addRoom = () => {
    setRooms([...rooms, { room_type: 'офис', area: 10, complexity: 'средняя' }]);
  };

  const updateRoom = (index: number, updated: Room) => {
    const newRooms = [...rooms];
    newRooms[index] = updated;
    setRooms(newRooms);
  };

  const estimate = async () => {
    try {
      const res = await axios.post('https://crm-cleaning-ai.onrender.com/orders/estimate', rooms);
      setResult(res.data);
    } catch (e) {
      console.error('Ошибка запроса:', e);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Оценка Уборки</h1>

      {rooms.map((room, index) => (
        <RoomForm key={index} room={room} onChange={(r) => updateRoom(index, r)} />
      ))}

      <button onClick={addRoom} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        ➕ Добавить комнату
      </button>

      <button onClick={estimate} className="mt-4 ml-4 bg-green-600 text-white px-4 py-2 rounded">
        💡 Рассчитать
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <p><strong>Общая стоимость:</strong> €{result.total_price}</p>
          <p><strong>Общее время:</strong> {result.total_time_min} минут</p>
          <p><strong>Себестоимость:</strong> €{result.estimated_cost}</p>
        </div>
      )}
    </div>
  );
};

export default App;
