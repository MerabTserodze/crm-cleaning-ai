from app.schemas.order_schema import ObjectEstimateInput

def estimate_rooms(data: ObjectEstimateInput):
    total_price = 0
    total_time = 0
    cost_per_min = 0.5  # для расчёта себестоимости

    for room in data.rooms:
        multiplier = {
            "низкая": 1.0,
            "средняя": 1.2,
            "высокая": 1.5,
            "экстремальная": 2.0
        }[room.complexity]

        time_for_room = room.area * multiplier
        price_for_room = time_for_room * 0.8 * 1.5  # базовая ставка * наценка

        total_time += time_for_room
        total_price += price_for_room

    estimated_cost = total_time * cost_per_min

    return {
        "total_price": round(total_price, 2),
        "total_time_min": round(total_time),
        "estimated_cost": round(estimated_cost, 2)
    }
