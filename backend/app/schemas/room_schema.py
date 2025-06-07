from pydantic import BaseModel
from typing import Literal

class RoomSchema(BaseModel):
    room_type: Literal["офис", "туалет", "склад", "кухня"]
    area: float
    complexity: Literal["низкая", "средняя", "высокая", "экстремальная"]
