# My Understanding / ความเข้าใจของผม

## Submission Links / ลิงก์สำหรับส่งงาน

**Loom Video (must be set to public - anyone with the link):**  
[paste your Loom video URL here]

**วิดีโอ Loom:**  
[วางลิงก์ Loom ตรงนี้]

---

## 1. HTTP Methods

**English answer:**  
In my API, each HTTP method tells the server what action I want to do.

`GET` means read data. I use `GET /products` to get all products and `GET /products/:id` to get one product.

`POST` means create new data. I use `POST /products` to create a new product.

`PATCH` means update part of existing data. I use `PATCH /products/:id` when I only want to change some fields, like price or quantity.

`DELETE` means remove data. I use `DELETE /products/:id` to delete one product.

We use different methods because the API becomes clearer. If everything used only POST, it would be harder to understand what each route is supposed to do.

**คำตอบภาษาไทย:**  
ใน API ของผม HTTP method แต่ละตัวใช้บอก server ว่าผมต้องการทำอะไร

`GET` คือการอ่านข้อมูล เช่น `GET /products` ใช้ดูสินค้าทั้งหมด และ `GET /products/:id` ใช้ดูสินค้าหนึ่งรายการ

`POST` คือการสร้างข้อมูลใหม่ เช่น `POST /products` ใช้สร้างสินค้าใหม่

`PATCH` คือการแก้ไขข้อมูลบางส่วน เช่น `PATCH /products/:id` ใช้แก้แค่บาง field เช่น price หรือ quantity

`DELETE` คือการลบข้อมูล เช่น `DELETE /products/:id` ใช้ลบสินค้าหนึ่งรายการ

เราใช้หลาย method เพราะทำให้ API อ่านง่ายและเข้าใจง่าย ถ้าใช้ POST อย่างเดียวทุกอย่างจะดูไม่ชัดว่า route นั้นกำลังอ่าน สร้าง แก้ไข หรือลบข้อมูล

---

## 2. express.json()

**English answer:**  
`express.json()` is middleware that lets Express read JSON data from the request body.

In this project, `POST /products` and `PATCH /products/:id` need JSON data from the client, such as `name`, `price`, and `quantity`.

If I leave out `express.json()`, `req.body` will not contain the JSON data correctly, so the server cannot create or update products properly.

**คำตอบภาษาไทย:**  
`express.json()` คือ middleware ที่ช่วยให้ Express อ่านข้อมูล JSON ที่ client ส่งมาใน request body ได้

ในโปรเจกต์นี้ `POST /products` และ `PATCH /products/:id` ต้องใช้ข้อมูล JSON เช่น `name`, `price`, และ `quantity`

ถ้าไม่มี `express.json()` ค่าใน `req.body` จะอ่านไม่ได้ถูกต้อง ทำให้ server สร้างหรือแก้ไขสินค้าไม่ได้ตามที่ต้องการ

---

## 3. req.body, req.params, and req.query

**English answer:**  
`req.body` is data sent inside the request body. In this API, `POST /products` reads `name`, `price`, and `quantity` from `req.body`.

`req.params` is data from the route path. For example, in `GET /products/1`, the `1` is stored in `req.params.id`.

`req.query` is data after `?` in the URL. The final version of my API does not use `req.query`, but an example would be `/products?name=keyboard`, where `name` would come from `req.query.name`.

**คำตอบภาษาไทย:**  
`req.body` คือข้อมูลที่ส่งมาใน body ของ request เช่นใน `POST /products` ผมอ่าน `name`, `price`, และ `quantity` จาก `req.body`

`req.params` คือข้อมูลที่อยู่ใน path ของ route เช่น `GET /products/1` เลข `1` จะอยู่ใน `req.params.id`

`req.query` คือข้อมูลที่อยู่หลังเครื่องหมาย `?` ใน URL โปรเจกต์เวอร์ชันสุดท้ายของผมยังไม่ได้ใช้ `req.query` แต่ตัวอย่างคือ `/products?name=keyboard` ซึ่ง `name` จะอ่านได้จาก `req.query.name`

---

## 4. HTTP Status Codes

**English answer:**  
HTTP status codes tell the client what happened after the request.

I use `200` when the request works normally, such as getting products, updating a product, or deleting a product.

I use `201` when a new product is created by `POST /products`.

I use `400` when the client sends invalid data, such as missing `name` or `price`, or sending an invalid `price` or `quantity`.

I use `404` when the product id does not exist, or when the user visits an unknown route.

I use `500` in the global error handler for unexpected server errors.

**คำตอบภาษาไทย:**  
HTTP status code คือรหัสที่ server ส่งกลับไปบอก client ว่า request นั้นเกิดอะไรขึ้น

ผมใช้ `200` เมื่อ request สำเร็จตามปกติ เช่น ดึงข้อมูลสินค้า แก้ไขสินค้า หรือลบสินค้า

ผมใช้ `201` เมื่อสร้างสินค้าใหม่สำเร็จจาก `POST /products`

ผมใช้ `400` เมื่อ client ส่งข้อมูลไม่ถูกต้อง เช่น ไม่ส่ง `name` หรือ `price` หรือส่ง `price` / `quantity` ที่ไม่ถูกต้อง

ผมใช้ `404` เมื่อหา product id ไม่เจอ หรือเข้าถึง route ที่ไม่มีอยู่

ผมใช้ `500` ใน global error handler สำหรับ error ที่ไม่คาดคิดจากฝั่ง server

---

## 5. Middleware

**English answer:**  
Middleware is code that runs between the request coming in and the response going out.

In my project, I have a logger middleware near the top of `index.js`. It logs the timestamp, request method, and request URL.

After logging, it calls `next()` so Express can continue to the next middleware or route.

**คำตอบภาษาไทย:**  
Middleware คือโค้ดที่ทำงานระหว่างตอน request เข้ามาและก่อน response ถูกส่งกลับไป

ในโปรเจกต์ของผมมี logger middleware อยู่ด้านบนของ `index.js` ใช้ log เวลา, method, และ URL ของ request

หลังจาก log แล้วจะเรียก `next()` เพื่อให้ Express ทำงานต่อไปยัง middleware หรือ route ถัดไป

---

## 6. Middleware Order

**English answer:**  
Middleware order matters because Express runs code from top to bottom.

The logger should be near the top so it can log every request.

`express.json()` must be before `POST` and `PATCH` routes because those routes need `req.body`.

The 404 handler must be after all real routes, because it should only run when no route matches.

The global error handler should be at the end because it catches errors after other route logic runs.

**คำตอบภาษาไทย:**  
ลำดับของ middleware สำคัญ เพราะ Express ทำงานจากบนลงล่าง

logger ควรอยู่ด้านบน เพื่อให้ log ได้ทุก request

`express.json()` ต้องอยู่ก่อน `POST` และ `PATCH` เพราะ route เหล่านั้นต้องใช้ `req.body`

404 handler ต้องอยู่หลัง route จริงทั้งหมด เพราะควรทำงานเฉพาะตอนที่ไม่มี route ไหนตรงกับ request

global error handler ควรอยู่ท้ายสุด เพื่อจัดการ error หลังจาก route หรือ middleware อื่นทำงานแล้ว

---

## 7. POST /products Flow

**English answer:**  
When a client sends `POST /products`, the request first goes through the logger middleware.

Then `express.json()` reads the JSON body and makes it available as `req.body`.

The route reads `name`, `price`, and `quantity` from `req.body`.

If `name` or `price` is missing, the API returns status `400` with an error message.

If the data is valid, the route creates a new id with `String(Date.now())`.

If `quantity` is not provided, it uses `1`.

Then the new product is pushed into the `products` array, and the API returns status `201` with the new product.

**คำตอบภาษาไทย:**  
เมื่อ client ส่ง `POST /products` request จะผ่าน logger middleware ก่อน

จากนั้น `express.json()` จะอ่าน JSON body และทำให้เราใช้ข้อมูลผ่าน `req.body` ได้

route จะอ่าน `name`, `price`, และ `quantity` จาก `req.body`

ถ้าไม่มี `name` หรือ `price` API จะตอบ `400` พร้อม error message

ถ้าข้อมูลถูกต้อง route จะสร้าง id ใหม่ด้วย `String(Date.now())`

ถ้าไม่ได้ส่ง `quantity` มา จะใช้ค่า default เป็น `1`

จากนั้นจะเพิ่มสินค้าใหม่เข้าไปใน `products` array และตอบกลับด้วย status `201` พร้อมข้อมูลสินค้าใหม่

---

## 8. CRUD

**English answer:**  
CRUD means Create, Read, Update, and Delete.

Create is `POST /products`.

Read is `GET /products` and `GET /products/:id`.

Update is `PATCH /products/:id`.

Delete is `DELETE /products/:id`.

This project is a small CRUD API for products, using an in-memory array instead of a database.

**คำตอบภาษาไทย:**  
CRUD ย่อมาจาก Create, Read, Update, Delete หรือ สร้าง อ่าน แก้ไข ลบ

Create คือ `POST /products`

Read คือ `GET /products` และ `GET /products/:id`

Update คือ `PATCH /products/:id`

Delete คือ `DELETE /products/:id`

โปรเจกต์นี้เป็น CRUD API ขนาดเล็กสำหรับสินค้า โดยใช้ array ใน memory แทน database

---

## 9. Error Response

**English answer:**  
When something goes wrong, my API returns JSON with `success: false` and a message.

For example, if I request `GET /products/999` and that product does not exist, the API returns status `404` with:

```json
{
  "success": false,
  "message": "Product not found"
}
```

For an unknown route, the API returns `404` with:

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

**คำตอบภาษาไทย:**  
เมื่อมีบางอย่างผิดพลาด API ของผมจะตอบกลับเป็น JSON ที่มี `success: false` และมีข้อความอธิบาย

ตัวอย่างเช่น ถ้าเรียก `GET /products/999` แล้วไม่มีสินค้านั้น API จะตอบ status `404` พร้อม:

```json
{
  "success": false,
  "message": "Product not found"
}
```

ถ้าเป็น route ที่ไม่มีอยู่ API จะตอบ `404` พร้อม:

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

---

## 10. Hardest Part

**English answer:**  
The hardest part for me was remembering which data comes from `req.body` and which data comes from `req.params`.

I got past it by connecting each one to a real example.

If the value is in the URL path, like `/products/1`, I use `req.params`.

If the value is sent as JSON, like when creating or updating a product, I use `req.body`.

Another hard part was choosing the correct status code, so I checked each situation: success, created, invalid input, not found, or server error.

**คำตอบภาษาไทย:**  
ส่วนที่ยากที่สุดสำหรับผมคือการจำว่าอะไรควรมาจาก `req.body` และอะไรควรมาจาก `req.params`

ผมแก้โดยผูกกับตัวอย่างจริงในโปรเจกต์

ถ้าค่าอยู่ใน URL path เช่น `/products/1` ผมใช้ `req.params`

ถ้าค่าส่งมาเป็น JSON เช่นตอนสร้างหรือแก้ไขสินค้า ผมใช้ `req.body`

อีกส่วนที่ยากคือการเลือก status code ให้ถูกต้อง ผมเลยดูตามสถานการณ์ เช่น สำเร็จ, สร้างใหม่, ข้อมูลผิด, ไม่พบข้อมูล, หรือ server error
