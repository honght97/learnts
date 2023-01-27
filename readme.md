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
- unknow
  - tương tự như any, nhưng an toàn hơn so với any
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
- type Assertions
  - sometime you'll have information about type of a value that typescript can't know about.
  - sử dụng với keyword as
- interface object
- interface array

## 3. Function

## 4. OPP

- static
  - có thể truy cập trực tiếp vào thuộc tính, phương thức mà không cần khởi tạo ra một đối tượng
- inheritance: sự kế thừa
  - muốn kế thừa một class sử dụng extends và super()
- access modifiers
  - đối với việc khởi tạo 1 class, chúng ta phải thêm access modifiers vào cho thuộc tính or phương thức của nó.
  - public: (giá trị mặc định)
    - có thể truy cập bên trong class
    - có thể truy cập bên ngoài class
    - có thể truy cập từ class con
  - private:
    - có thể truy cập bên trong class
  - protected:
    - có thể truy cập bên trong class
    - có thể truy cập bên trong class con
- accessors
  - dùng cho từ khóa private
  - nếu muốn truy cập từ bên ngoài phải dùng setter và getter
- abstract
  - dùng khi 1 nhóm đối tượng có cùng bản chất kế thừa từ một class
- interface
  - dùng khi 1 nhóm đối tượng k có cùng bản chất nhưng có hàng động giống nhau
  - Implements: Dùng cho interface, bắt buộc phải tuân thủ theo 1 chuẩn nào đó

## 5. Generic

- allow creating 'type variables' which can be used to create classes, function and type aliases that don't need to explicitly(rõ ràng) define the types that they use.
- it easier to write reusable code

## 6. Module & Namespace
