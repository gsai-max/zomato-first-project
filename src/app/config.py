from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field

class Settings(BaseSettings):
    LLM_PROVIDER: str = "groq"
    LLM_API_KEY: str = "gsk_dummykeyhere"
    LLM_MODEL: str = "llama-3.1-8b-instant"
    
    # Storage Selection (Option A Parquet, Option B SQLite)
    DATA_PATH: str = "data/processed/restaurants.parquet"
    SQLITE_DB_PATH: str = "data/processed/restaurants.db"
    
    # Budget classification thresholds
    LOW_BUDGET_LIMIT: float = 500.0
    MEDIUM_BUDGET_LIMIT: float = 1500.0
    
    # System tuning parameters
    MAX_CANDIDATES: int = 30
    DEFAULT_RECOMMENDATION_COUNT: int = 5

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )

settings = Settings()
