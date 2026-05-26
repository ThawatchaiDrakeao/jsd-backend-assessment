# Backend Assessment Task Plan

## Current Phase
PHASE 1 — Project Setup

## Progress Checklist

- [x] Initialize Node.js project
- [x] Install Express
- [x] Create basic server
- [x] Setup express.json()
- [x] Run server on port 3000
- [x] First git commit

---

## Project Rules

- Keep beginner friendly
- No database yet
- Use CommonJS
- Use clean JSON responses
- Explain important concepts
 

 ## Current Phase
PHASE 2 — GET Products Routes

## Progress Checklist

- [x] Create in-memory products array
- [x] Create GET /products
- [x] Create GET /products/:id
- [x] Handle product not found with 404
- [x] Test routes in browser/Postman/REST Client
- [x] Git commit phase 2


---

## Current Phase
PHASE 3 — POST Create Product

## Progress Checklist

- [x] Create POST /products
- [x] Read data from req.body
- [x] Validate name is required
- [x] Validate price is required
- [x] Set quantity default to 1
- [x] Generate new product id
- [x] Return status 201 when created
- [x] Test POST route
- [x] Git commit phase 3

---

## Current Phase
PHASE 4 — PATCH Update Product

## Progress Checklist

- [x] Create PATCH /products/:id
- [x] Read product id from req.params
- [x] Find product by id
- [x] Return 404 if product not found
- [x] Read update data from req.body
- [x] Update only provided fields
- [x] Validate price and quantity if provided
- [x] Return updated product
- [x] Test PATCH route
- [ ] Git commit phase 4
