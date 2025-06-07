from fastapi import APIRouter
from app.schemas.order_schema import ObjectEstimateInput
from app.services.ai_estimator import estimate_rooms

router = APIRouter()

@router.post("/orders/estimate")
def estimate_order(data: ObjectEstimateInput):
    return estimate_rooms(data)
