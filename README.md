# Phuc FPT Website

Website landing page tiếng Việt cho tư vấn Internet, Camera và truyền hình FPT, xây dựng bằng React + Vite.

## Chạy thử trên máy
1. Cài Node.js bản LTS từ https://nodejs.org/
2. Giải nén thư mục.
3. Mở Terminal/Command Prompt tại thư mục dự án.
4. Chạy:
   ```bash
   npm install
   npm run dev
   ```
5. Mở địa chỉ localhost được hiển thị trong terminal.

## Đưa lên Vercel
Cách đơn giản:
1. Tải thư mục dự án lên một repository GitHub.
2. Đăng nhập https://vercel.com/ bằng GitHub.
3. Chọn Add New → Project.
4. Import repository vừa tạo.
5. Vercel nhận diện Vite; nhấn Deploy.

## Trước khi công khai
Mở `src/main.jsx` và kiểm tra:
- `PHONE_DISPLAY`: số điện thoại hiển thị.
- `PHONE_LINK`: số dùng cho nút gọi điện và link Zalo. Định dạng phải đúng.
- Giá cước, tốc độ, khuyến mãi, điều kiện tặng camera và dịch vụ FPT Play phải được xác nhận theo chương trình/khu vực thực tế.
- Đây là trang tư vấn độc lập; chỉ dùng logo/nhãn hiệu chính thức nếu bạn có quyền sử dụng và không làm người xem hiểu nhầm đây là website chính thức của FPT Telecom.
