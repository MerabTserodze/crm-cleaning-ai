from sqlalchemy import Column, Integer, String, DateTime, Float
from app.db import Base
from datetime import datetime

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    client_name = Column(String, index=True)
    object_address = Column(String)
    area = Column(Float)
    complexity = Column(String)
    status = Column(String, default="назначен")
    scheduled_time = Column(DateTime)
    price_estimate = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)
