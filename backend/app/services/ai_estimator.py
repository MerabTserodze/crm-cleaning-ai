def estimate_price(area: float, complexity: str) -> float:
    base_price = 1000
    price_per_m2 = 30 if complexity == "высокая" else 20
    return base_price + area * price_per_m2
ROOM_PRICES_EUR = {
    "офис": {"price_per_m2": 1.2, "time_per_m2": 0.5},
    "туалет": {"price_per_m2": 1.8, "time_per_m2": 1.0},
    "склад": {"price_per_m2": 0.9, "time_per_m2": 0.3},
    "кухня": {"price_per_m2": 1.6, "time_per_m2": 0.8}
}

COMPLEXITY_COEFFICIENTS = {
    "низкая": 1.0,
    "средняя": 1.25,
    "высокая": 1.5,
    "экстремальная": 2.0
}

def estimate_order(rooms: list, hourly_wage: float = 20.0):
    total_price = 0
    total_time_min = 0

    for room in rooms:
        base = ROOM_PRICES_EUR[room["room_type"]]
        coef = COMPLEXITY_COEFFICIENTS[room["complexity"]]
        area = room["area"]

        room_price = base["price_per_m2"] * area * coef
        room_time = base["time_per_m2"] * area * coef

        total_price += room_price
        total_time_min += room_time

    hours = total_time_min / 60
    estimated_cost = round(hours * hourly_wage, 2)

    return {
        "total_price": round(total_price, 2),
        "total_time_min": round(total_time_min, 1),
        "estimated_cost": estimated_cost
    }
