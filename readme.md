## 1. tsconfig.json

- outDir

  - output direct nằm ở đâu?

- watch

  - tự động complie ts sang js khi có bất cứ thay đổi nào xảy ra

- exclude

  - nhận vào 1 mảng cấu hình các folder or file không muốn complie

- target

  - muốn complie từ ts sang js theo chuẩn nào (es5, es6, ...)

- removeComments

  - xóa đi comment ở các tệp ts khi complie sang js

- include

  - chỉ định đầu tệp ts để complie

- module

  - CommonJS là tiêu chuẩn được sử dụng trong Node.js để làm việc với các module

## 2. data type

- primitives
  - string
  - number
  - boolean
  - null
  - undefined
- array
- any
  - cho phép bạn gán giá trị với bất kì kiểu dữ liệu nào
- tuple array
  - ràng buộc số phần tử của mảng và chỉ định kiểu dữ liệu cho từng phần tử của mảng
- Object Types
  - cho phép chỉ định từng kiểu dữ liệu cho từng thuộc tính trong mảng
- enum
  - đại diện cho một nhóm hằng số
  - string and numberic
  - numberic: sẽ tự khởi tạo mặc định là 0, và cộng thêm 1 vào sau.
  - cần quản lý trạng thái các công việc hàng ngày
- Type Aliases
  - allow defining types with a custom name
  - can be used for string, object, array
- Interfaces
  - similar aliases
  - chỉ sử dụng với **object**
- differences **Interfaces** with **types aliases**
  - aliases không thể mở rộng or thêm mới thuộc tính
- union types
  - used when a value can be more a single type
- void
  - quyết định kiểu trả về của 1 function nào đó
  - không trả về một kiểu dữ liệu nào đó
