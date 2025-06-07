from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(
    title="CRM Cleaning AI",
    description="CRM-система для клининговых компаний с ИИ-расчётом",
    version="1.0.0"
)

app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "CRM Cleaning AI работает!"}
