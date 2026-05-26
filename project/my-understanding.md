# 1. HTTP Methods

HTTP Method คือวิธีที่ client ใช้บอก server ว่าต้องการทำอะไรกับข้อมูล

GET ใช้ดึงข้อมูล
เช่น GET /products ดูสินค้าทั้งหมด
หรือ GET /products/:id ดูสินค้าตาม id

POST ใช้สร้างข้อมูลใหม่
เช่น POST /products

PATCH ใช้แก้ไขข้อมูลบางส่วน
เช่นแก้ราคา หรือจำนวนสินค้า

DELETE ใช้ลบข้อมูล

การแยก method แบบนี้ช่วยให้ API อ่านง่าย และรู้ทันทีว่า route นั้นทำอะไร

---

# 2. express.json()

express.json() คือ middleware ที่ช่วยให้ Express อ่านข้อมูล JSON จาก request body ได้

ในโปรเจกต์นี้ route อย่าง POST และ PATCH ต้องใช้ข้อมูลจาก client เช่น name, price, quantity

ถ้าไม่มี express.json() ค่าใน req.body จะอ่านไม่ได้ ทำให้สร้างหรือแก้ไขข้อมูลไม่ได้

---

# 3. req.body, req.params, req.query

req.body ใช้อ่านข้อมูลที่ส่งมาใน body ของ request
เช่นตอนสร้างสินค้าใหม่

req.params ใช้อ่านค่าจาก URL path
เช่น /products/1 → 1 จะอยู่ใน req.params.id

req.query ใช้อ่านค่าหลัง ? ใน URL
เช่น /products?name=keyboard

---

# 4. HTTP Status Codes

Status code คือรหัสที่ server ส่งกลับเพื่อบอกผลลัพธ์ของ request

200 → ทำงานสำเร็จ
201 → สร้างข้อมูลใหม่สำเร็จ
400 → ข้อมูลที่ส่งมาไม่ถูกต้อง
404 → ไม่พบข้อมูลหรือ route
500 → server error

---

# 5. Middleware

Middleware คือโค้ดที่ทำงานระหว่าง request และ response

ในโปรเจกต์นี้มี logger middleware ที่ใช้บันทึก:

* เวลา
* method
* URL

หลังทำงานเสร็จจะเรียก next() เพื่อให้ request ไปต่อ

---

# 6. Middleware Order

ลำดับ middleware สำคัญ เพราะ Express ทำงานจากบนลงล่าง

logger ควรอยู่บนสุด เพื่อเก็บ log ทุก request

express.json() ต้องอยู่ก่อน route ที่ใช้ req.body

404 handler ควรอยู่หลัง route ทั้งหมด

global error handler ควรอยู่ท้ายสุด

---

# 7. Flow ของ POST /products

เมื่อ client ส่ง POST /products

1. request ผ่าน logger middleware
2. express.json() อ่าน JSON body
3. route ดึง name, price, quantity จาก req.body
4. ถ้าข้อมูลไม่ครบ → ตอบ 400
5. ถ้าถูกต้อง → สร้าง id ใหม่
6. เพิ่มข้อมูลลง array
7. ตอบกลับ 201 พร้อมข้อมูลสินค้าใหม่

---

# 8. CRUD

CRUD ย่อมาจาก

Create → สร้าง
Read → อ่าน
Update → แก้ไข
Delete → ลบ

ตัวอย่างในโปรเจกต์:

* POST /products → Create
* GET /products → Read
* PATCH /products/:id → Update
* DELETE /products/:id → Delete

---

# 9. Error Response

เวลามี error API จะตอบกลับเป็น JSON เช่น

{
"success": false,
"message": "Product not found"
}

ตัวอย่าง:

* หา product ไม่เจอ → 404
* route ไม่มี → 404
* server พัง → 500

---

# 10. Hardest Part

ส่วนที่ยากที่สุดสำหรับผมคือการจำว่า:

* อะไรใช้ req.body
* อะไรใช้ req.params

ผมเลยจำจากการใช้งานจริง:

* ถ้าอยู่ใน URL → req.params
* ถ้าส่งมาเป็น JSON → req.body

อีกเรื่องที่ยากคือการเลือก status code ให้ถูกต้อง เลยต้องแยกตามสถานการณ์ว่าเป็น:

* success
* create success
* bad request
* not found
* server error
