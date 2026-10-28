# Phuc FPT Website

Landing page tiếng Việt cho tư vấn Internet, Camera và truyền hình. Dự án dùng React + Vite.

## Chạy trên máy tính
1. Cài Node.js bản LTS: https://nodejs.org/
2. Giải nén dự án và mở Terminal/CMD tại thư mục có `package.json`.
3. Chạy `npm install`.
4. Chạy `npm run dev` để xem bản phát triển.
5. Chạy `npm run build` để kiểm tra bản production; kết quả nằm trong `dist/`.

## Deploy lên Vercel qua GitHub
1. Đẩy toàn bộ nội dung thư mục này lên repository GitHub (đảm bảo `package.json` nằm ở thư mục gốc repository, không nằm lồng thêm một thư mục).
2. Trên Vercel chọn Add New → Project rồi import repository.
3. Nếu cần cài thủ công, chọn Framework Preset `Vite`, Build Command `npm run build`, Output Directory `dist`.
4. Chọn Deploy. File `vercel.json` đã khai báo các thiết lập build/output cơ bản.

## Kiểm tra trước khi công khai
- Kiểm tra số điện thoại trong `src/main.jsx`: `PHONE_DISPLAY` và `PHONE_LINK`.
- Xác nhận giá cước, tốc độ, khuyến mãi, quà tặng và điều kiện theo khu vực/thời điểm thực tế.
- Đây là trang tư vấn độc lập; không khiến người xem hiểu nhầm đây là website chính thức của FPT Telecom nếu không được ủy quyền.
