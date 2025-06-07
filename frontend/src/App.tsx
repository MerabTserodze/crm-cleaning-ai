import React, { useState } from 'react';
import axios from 'axios';
import { Room, EstimateResult, ObjectEstimateInput } from './types';
import RoomForm from './RoomForm';

const App: React.FC = () => {
  const [objectName, setObjectName] = useState('');
  const [objectType, setObjectType] = useState<'офис' | 'склад' | 'таунхаус'>('офис');
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
    const payload: ObjectEstimateInput = {
      object_name: objectName,
      object_type: objectType,
      rooms
    };

    try {
      const res = await axios.post('https://crm-cleaning-ai.onrender.com/orders/estimate', payload);
      setResult(res.data);
    } catch (e) {
      console.error('Ошибка запроса:', e);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Оценка Объекта</h1>

      <div className="mb-4">
        <label className="block text-sm">Название объекта:</label>
        <input
          type="text"
          value={objectName}
          onChange={(e) => setObjectName(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm">Тип объекта:</label>
        <select
          value={objectType}
          onChange={(e) => setObjectType(e.target.value as ObjectEstimateInput['object_type'])}
          className="w-full border p-2 rounded"
        >
          <option value="офис">Офис</option>
          <option value="склад">Склад</option>
          <option value="таунхаус">Таунхаус</option>
        </select>
      </div>

      {rooms.map((room, index) => (
        <RoomForm key={index} room={room} onChange={(r) => updateRoom(index, r)} />
      ))}

      <button onClick={addRoom} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        ➕ Добавить комнату
      </button>

      <button
        onClick={estimate}
        disabled={rooms.length === 0 || objectName.trim() === ''}
        className={`mt-4 ml-4 px-4 py-2 rounded text-white ${
          rooms.length === 0 || objectName.trim() === ''
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700'
        }`}
      >
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
