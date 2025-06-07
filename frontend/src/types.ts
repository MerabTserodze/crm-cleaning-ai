export interface Room {
  room_type: 'офис' | 'туалет' | 'склад' | 'кухня';
  area: number;
  complexity: 'низкая' | 'средняя' | 'высокая' | 'экстремальная';
}

export interface ObjectEstimateInput {
  object_name: string;
  object_type: 'офис' | 'склад' | 'таунхаус';
  rooms: Room[];
}

export interface EstimateResult {
  total_price: number;
  total_time_min: number;
  estimated_cost: number;
}
