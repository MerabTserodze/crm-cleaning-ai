import React from 'react';
import { Room } from './types';

interface Props {
  room: Room;
  onChange: (room: Room) => void;
}

const RoomForm: React.FC<Props> = ({ room, onChange }) => {
  return (
    <div className="mb-4 p-4 border rounded shadow-sm">
      <div className="mb-2">
        <label className="block text-sm">Тип помещения:</label>
        <select
          value={room.room_type}
          onChange={(e) => onChange({ ...room, room_type: e.target.value as Room['room_type'] })}
          className="w-full border p-1 rounded"
        >
          <option value="офис">Офис</option>
          <option value="туалет">Туалет</option>
          <option value="склад">Склад</option>
          <option value="кухня">Кухня</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="block text-sm">Площадь (м²):</label>
        <input
          type="number"
          value={room.area}
          onChange={(e) => onChange({ ...room, area: parseFloat(e.target.value) })}
          className="w-full border p-1 rounded"
        />
      </div>

      <div>
        <label className="block text-sm">Сложность:</label>
        <select
          value={room.complexity}
          onChange={(e) => onChange({ ...room, complexity: e.target.value as Room['complexity'] })}
          className="w-full border p-1 rounded"
        >
          <option value="низкая">Низкая</option>
          <option value="средняя">Средняя</option>
          <option value="высокая">Высокая</option>
          <option value="экстремальная">Экстремальная</option>
        </select>
      </div>
    </div>
  );
};

export default RoomForm;
