from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class OrderBase(BaseModel):
    client_name: str
    object_address: str
    area: float
    complexity: str
    scheduled_time: datetime

class OrderCreate(OrderBase):
    pass

class OrderResponse(OrderBase):
    id: int
    status: str
    price_estimate: Optional[float]
    created_at: datetime

    class Config:
        orm_mode = True
