from fastapi import APIRouter
from typing import List
from app.schemas.room_schema import RoomSchema
from app.services.ai_estimator import estimate_order

router = APIRouter()

@router.get("/ping")
def ping():
    return {"status": "ok"}

@router.post("/orders/estimate")
def estimate(rooms: List[RoomSchema]):
    result = estimate_order([room.dict() for room in rooms])
    return result
