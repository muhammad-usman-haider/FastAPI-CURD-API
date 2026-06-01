from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Data model
class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    in_stock: bool = True

# Fake in-memory database
items_db = {}

# CREATE
@app.post("/items/")
def create_item(item: Item):
    items_db[item.name] = item
    return {"message": "Item created", "item": item}

# READ (all items)
@app.get("/items/")
def read_items():
    return items_db

# READ (single item)
@app.get("/items/{item_name}")
def read_item(item_name: str):
    return items_db.get(item_name, {"error": "Item not found"})

# UPDATE
@app.put("/items/{item_name}")
def update_item(item_name: str, item: Item):
    items_db[item_name] = item
    return {"message": "Item updated", "item": item}

# DELETE
@app.delete("/items/{item_name}")
def delete_item(item_name: str):
    if item_name in items_db:
        del items_db[item_name]
        return {"message": "Item deleted"}
    return {"error": "Item not found"}
