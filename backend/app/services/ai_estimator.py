def estimate_price(area: float, complexity: str) -> float:
    base_price = 1000
    price_per_m2 = 30 if complexity == "высокая" else 20
    return base_price + area * price_per_m2
