from pydantic import BaseModel
from typing import List, Literal


class RoomSchema(BaseModel):
    room_type: Literal["офис", "туалет", "кухня", "склад"]
    area: float
    complexity: Literal["низкая", "средняя", "высокая", "экстремальная"]

class ObjectEstimateInput(BaseModel):
    object_name: str
    object_type: Literal["офис", "склад", "таунхаус"]
    rooms: List[RoomSchema]
