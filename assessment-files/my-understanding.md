# My Understanding / ความเข้าใจของฉัน

## Submission Links / ลิงก์สำหรับส่งงาน

**Loom Video (must be set to public - anyone with the link):**  
[paste your Loom video URL here]

**วิดีโอ Loom (ต้องตั้งค่าเป็น public - anyone with the link):**  
[วางลิงก์ Loom ของคุณตรงนี้]

---

## Questions / คำถาม

Answer each question in your own words before submitting.

ตอบแต่ละข้อด้วยคำพูดของตัวเองก่อนส่งงาน ไฟล์นี้มีทั้งภาษาอังกฤษและภาษาไทย เพื่อช่วยให้เข้าใจและเตรียมพูดอธิบายในวิดีโอได้ง่ายขึ้น

---

## 1. HTTP Methods

**Question:**  
What does each HTTP method in your API mean - GET, POST, PUT or PATCH, and DELETE? Why do we use different methods instead of just using POST for everything?

**คำถามภาษาไทย:**  
HTTP method แต่ละตัวใน API หมายถึงอะไร เช่น GET, POST, PUT หรือ PATCH, และ DELETE? ทำไมเราต้องใช้หลาย method แทนที่จะใช้ POST อย่างเดียว?

**English answer:**  
GET asks the server to read data.

In my API, `GET /products` reads all products, and `GET /products/:id` reads one product by id.

POST creates a new product.

PATCH updates part of an existing product.

DELETE removes a product.

We use different methods because they describe the purpose of the request clearly. This makes the API easier to understand and helps the client know what action is happening.

**คำตอบภาษาไทย:**  
GET ใช้ขอข้อมูลจาก server

ใน API ของฉัน `GET /products` ใช้ดึงสินค้าทั้งหมด และ `GET /products/:id` ใช้ดึงสินค้าหนึ่งรายการตาม id

POST ใช้สร้างสินค้าใหม่

PATCH ใช้อัปเดตข้อมูลบางส่วนของสินค้าที่มีอยู่แล้ว

DELETE ใช้ลบสินค้า

เราใช้ method ที่ต่างกัน เพราะแต่ละ method บอกจุดประสงค์ของ request ชัดเจน ทำให้ API อ่านง่าย เข้าใจง่าย และฝั่ง client รู้ว่ากำลังสั่งให้ server ทำอะไร

---

## 2. express.json()

**Question:**  
What is `express.json()` and what would happen if you left it out?

**คำถามภาษาไทย:**  
`express.json()` คืออะไร และถ้าไม่ใส่จะเกิดอะไรขึ้น?

**English answer:**  
`express.json()` is middleware that reads JSON from the request body.

It turns that JSON into `req.body`, so my routes can use values like `req.body.name`, `req.body.price`, and `req.body.quantity`.

Without `express.json()`, Express would not understand the JSON sent by POST or PATCH requests.

That means `req.body` would not work correctly.

**คำตอบภาษาไทย:**  
`express.json()` คือ middleware ที่ช่วยให้ Express อ่านข้อมูล JSON ที่ส่งมาใน body ของ request

มันแปลง JSON นั้นให้เราใช้งานผ่าน `req.body` ได้ เช่น `req.body.name`, `req.body.price`, และ `req.body.quantity`

ถ้าไม่ใส่ `express.json()` เวลาใช้ POST หรือ PATCH แล้วส่ง JSON เข้ามา Express จะอ่านข้อมูลนั้นไม่ได้

ผลคือ `req.body` จะใช้งานไม่ถูกต้อง

---

## 3. req.body, req.params, and req.query

**Question:**  
What is the difference between `req.body`, `req.params`, and `req.query`? Give a real example from your API for each one.

**คำถามภาษาไทย:**  
`req.body`, `req.params`, และ `req.query` ต่างกันอย่างไร? ยกตัวอย่างจริงจาก API ของคุณ

**English answer:**  
`req.body` is data sent in the body of the request.

Example: when creating a product with `POST /products`, the name, price, and quantity come from `req.body`.

`req.params` is data from the route path.

Example: in `/products/1`, the `1` is the product id from `req.params.id`.

`req.query` is optional data after a question mark in the URL.

Example: `/products?name=key` uses `req.query.name` to filter products by name.

**คำตอบภาษาไทย:**  
`req.body` คือข้อมูลที่ส่งมาใน body ของ request

ตัวอย่างเช่น ตอนสร้างสินค้าด้วย `POST /products` ข้อมูล name, price, และ quantity จะมาจาก `req.body`

`req.params` คือข้อมูลที่อยู่ใน path ของ route

ตัวอย่างเช่น ใน `/products/1` เลข `1` คือ product id ที่อ่านจาก `req.params.id`

`req.query` คือข้อมูลเสริมที่อยู่หลังเครื่องหมาย `?` ใน URL

ตัวอย่างเช่น `/products?name=key` ใช้ `req.query.name` เพื่อกรองสินค้าตามชื่อ

---

## 4. HTTP Status Codes

**Question:**  
What are HTTP status codes? List every status code you used in your API and explain why you chose it for that situation.

**คำถามภาษาไทย:**  
HTTP status code คืออะไร? บอก status code ทุกตัวที่ใช้ใน API และอธิบายว่าทำไมถึงเลือกใช้ในสถานการณ์นั้น

**English answer:**  
HTTP status codes tell the client what happened after a request.

I used `200` when a request worked normally, such as getting, updating, or deleting a product.

I used `201` when a new product was created.

I used `400` when the client sent invalid input, such as missing name or price.

I used `404` when a product or route could not be found.

I used `500` in the error middleware for unexpected server errors.

**คำตอบภาษาไทย:**  
HTTP status code คือรหัสที่ server ส่งกลับไปบอก client ว่า request นั้นเกิดอะไรขึ้น

ฉันใช้ `200` เมื่อ request สำเร็จตามปกติ เช่น ดึงข้อมูล แก้ไข หรือลบสินค้า

ฉันใช้ `201` เมื่อสร้างสินค้าใหม่สำเร็จ

ฉันใช้ `400` เมื่อ client ส่งข้อมูลไม่ถูกต้อง เช่น ไม่ส่ง name หรือ price

ฉันใช้ `404` เมื่อไม่พบสินค้าหรือไม่พบ route

ฉันใช้ `500` ใน error middleware สำหรับ error ที่ไม่คาดคิดจากฝั่ง server

---

## 5. Middleware

**Question:**  
What is middleware? Describe what it does in your own words and give one example from your code.

**คำถามภาษาไทย:**  
middleware คืออะไร? อธิบายด้วยคำพูดของตัวเอง และยกตัวอย่างจากโค้ดของคุณ

**English answer:**  
Middleware is code that runs during the request and response cycle.

It can inspect the request, change something, log information, or stop the request by sending a response.

One example in my code is the logger middleware.

It logs the request method and URL before passing the request to the next middleware or route.

**คำตอบภาษาไทย:**  
Middleware คือโค้ดที่ทำงานระหว่างที่ request เข้ามาและก่อนที่ response จะถูกส่งกลับไป

มันสามารถตรวจสอบ request แก้ไขข้อมูลบางอย่าง log ข้อมูล หรือหยุด request แล้วส่ง response กลับได้

ตัวอย่างในโค้ดของฉันคือ logger middleware

มันแสดง method และ URL ของ request ก่อนส่งต่อไปยัง middleware หรือ route ถัดไป

---

## 6. Middleware Order

**Question:**  
Why does the order of middleware matter in Express? What could go wrong if it were in the wrong order?

**คำถามภาษาไทย:**  
ทำไมลำดับของ middleware ใน Express ถึงสำคัญ? ถ้าเรียงผิดอาจเกิดอะไรขึ้น?

**English answer:**  
Order matters because Express runs middleware from top to bottom.

`express.json()` must run before routes that use `req.body`.

The error handler should be near the end, after the routes, because it handles problems that happen while processing requests.

If middleware is in the wrong order, routes might not receive the data they need, or errors might not be handled properly.

**คำตอบภาษาไทย:**  
ลำดับสำคัญเพราะ Express ทำงานจากบนลงล่าง

`express.json()` ต้องอยู่ก่อน route ที่ใช้ `req.body`

error handler ควรอยู่ท้าย ๆ หลัง routes เพราะมันมีหน้าที่จัดการ error ที่เกิดขึ้นระหว่างประมวลผล request

ถ้าเรียง middleware ผิด route อาจไม่ได้ข้อมูลที่ต้องใช้ หรือ error อาจไม่ถูกจัดการอย่างถูกต้อง

---

## 7. POST /products Flow

**Question:**  
Walk through what happens on the server, step by step, when a POST request is sent to `/products`.

**คำถามภาษาไทย:**  
อธิบายทีละขั้นตอนว่าเกิดอะไรขึ้นบน server เมื่อมี POST request ส่งไปที่ `/products`

**English answer:**  
First, the request reaches the logger middleware, which prints the method and URL.

Then `express.json()` reads the JSON body and creates `req.body`.

Next, the `POST /products` route runs.

The route validates that the name and price are valid.

If quantity was not sent, the route gives it a default value of `1`.

Then it creates a new product with an id, pushes it into the products array, and returns the new product with a `201` status code.

**คำตอบภาษาไทย:**  
ขั้นแรก request จะผ่าน logger middleware ซึ่งแสดง method และ URL ออกมา

จากนั้น `express.json()` จะอ่าน JSON body และสร้าง `req.body` ให้ใช้งาน

ต่อมา route `POST /products` จะทำงาน

route จะตรวจสอบว่า name และ price ถูกต้องหรือไม่

ถ้าไม่ได้ส่ง quantity มา route จะกำหนดค่า default เป็น `1`

จากนั้นจะสร้าง product ใหม่พร้อม id เพิ่มเข้าไปใน array `products` แล้วส่ง product ที่สร้างใหม่กลับไปพร้อม status code `201`

---

## 8. CRUD

**Question:**  
What is CRUD? Map each operation to the HTTP method and route you used in your API.

**คำถามภาษาไทย:**  
CRUD คืออะไร? จับคู่แต่ละ operation กับ HTTP method และ route ที่ใช้ใน API ของคุณ

**English answer:**  
CRUD means Create, Read, Update, and Delete.

Create is `POST /products`.

Read is `GET /products` and `GET /products/:id`.

Update is `PATCH /products/:id`.

Delete is `DELETE /products/:id`.

**คำตอบภาษาไทย:**  
CRUD ย่อมาจาก Create, Read, Update, Delete หรือ สร้าง อ่าน แก้ไข ลบ

Create คือ `POST /products`

Read คือ `GET /products` และ `GET /products/:id`

Update คือ `PATCH /products/:id`

Delete คือ `DELETE /products/:id`

---

## 9. Error Response

**Question:**  
How does your API respond when something goes wrong - for example, when a product with a given ID does not exist?

**คำถามภาษาไทย:**  
API ของคุณตอบกลับอย่างไรเมื่อเกิดข้อผิดพลาด เช่น ไม่พบสินค้าตาม id ที่ส่งมา

**English answer:**  
The API responds with a consistent JSON error format.

For example, if a product does not exist, it returns status `404`.

The response body is `{ "success": false, "message": "Product not found" }`.

This helps the client understand that the request was received, but the specific product could not be found.

**คำตอบภาษาไทย:**  
API จะตอบกลับด้วยรูปแบบ JSON สำหรับ error ที่เหมือนกันทุกครั้ง

ตัวอย่างเช่น ถ้าไม่พบสินค้า จะส่ง status `404`

response body คือ `{ "success": false, "message": "Product not found" }`

วิธีนี้ช่วยให้ client เข้าใจว่า server ได้รับ request แล้ว แต่ไม่พบสินค้าที่ต้องการ

---

## 10. Hardest Part

**Question:**  
What was the hardest part of building this API and what did you do to get past it?

**คำถามภาษาไทย:**  
ส่วนที่ยากที่สุดในการสร้าง API นี้คืออะไร และคุณแก้ปัญหานั้นอย่างไร?

**English answer:**  
The hardest part was making sure each route returned the right status code and error message.

I worked through it by thinking about what each request is trying to do.

Then I chose a response that matches the situation, such as success, created, invalid input, or not found.

**คำตอบภาษาไทย:**  
ส่วนที่ยากที่สุดคือการทำให้แต่ละ route ส่ง status code และ error message ให้ถูกกับสถานการณ์

ฉันแก้ปัญหาโดยคิดก่อนว่า request นั้นต้องการทำอะไร

จากนั้นเลือก response ให้ตรงกับผลลัพธ์ เช่น สำเร็จ สร้างข้อมูลใหม่ ข้อมูลไม่ถูกต้อง หรือไม่พบข้อมูล
