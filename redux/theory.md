## redux là gì?

- là một thư viện js dùng để quản lý và cập nhật state(dữ liệu or trạng thái) của ứng dụng
  - sử dụng các sự kiện (action) => hoạt động giống 1 kho lưu trữ tập trung cho các state được sử dụng ở nhiều component hay nhiều nơi => đi kèm là các quy tắc => đảm bảo các state được cập nhật theo 1 cách chúng ta có thể dự đoán được.
- là 1 patter(khuôn mẫu) => tuân theo những quy tắc mà nó quy định

## vì sao phải tìm hiểu redux và redux toolkit là gì?

- quản lý global state
  - được sử dụng ở nhiều nơi trong ứng dụng có thể truy xuất và cập nhật dữ liệu
  - giải quyết vấn đề của react khi muốn truyền tải dữ liệu vào các cấp con cháu
- dễ dàng debug
- xử lý caching dữ liệu từ server

### vì sao phải sử dụng redux toolkit

- sinh ra giải quyết vấn đề với redux core
  - việc cấu hình (config) redux phức tạp.
  - phải cài đặt thủ công nhiều packages để redux hoạt động hiệu quả.
  - redux yêu cầu rất nhiều boilerplate code (các đoạn code lặp đi lặp lại rất nhiều lần)

### khi nào nên sử dụng redux

- dự án có số lượng lớn state và các state được sử dụng ở nhiều nơi.
- state được cập nhật thường xuyên
- logic code cập nhật state phức tạp
- ứng dụng có số lượng code trung bình or lớn và có nhiều người làm chung
- cần debug và xem cách state được cập nhật tại bất kì khoảng thời gian nào.

## kiến trúc và các khái niệm của redux

- state management
  - react hoạt động theo mô hình 1 chiều (one way data flow) state -> view -> action ( ngược lại)
  - state: sẽ lưu trữ các trạng thái, các điều kiện của ứng dựng ở bất kì thời điểm nào đó.
  - view: dựa vào trạng thái của state để hiển thị lên dữ liệu tương ứng
  - khi nhiều state và sử dụng ở nhiều nơi => nên có 1 nơi khai báo chung cho tất cả các state => để tất cả các component có thể sử dụng chúng => redux được xây dựng
- immutability(bất biến)
  - không thay đổi giá trị object, array => nên tạo bản copy bằng spread operator

### kiến trúc redux

- REDUCER

  - là 1 function cơ bản nhận vào 2 tham số
  - function này dùng để cập nhật lại state
  - function sẽ kiểm tra dựa trên action => thực hiện các đoạn code logic => cập nhật state tương ứng
    `const initValue = { value:0 }; const rootReducer = (state = initValue, action)=>{switch(action.type) {case 'INCREMENT':return {...state,value: stat+1}default:return state;}}`
  - 1 vài quy tắc đối với reducer:
    - giá trị của state phải luôn luôn được tính toán từ giá trị state trước đó và action(nếu có)
    - không bao giờ được thay đổi giá trị trực tiếp của state mà phải thực hiện immutability
    - không được có 1 đoạn code bất đồng bộ nào trong reducer
    - => bất kì function nào tuân theo 3 quy tắc trên đều được gọi là pure function
  - tại sao những quy tắc trên là quan trọng?
    - mục đích của redux -> làm cho code có thể predictable(dự đoán được) => dựa trên các tham số truyền vào

- ACTION
  `const INCREMENT = {type:'todolist/increment', payload:10}`

  - đơn giản chỉ là 1 object do chúng ta quy định
  - payload là dự liệu truyền vào
  - action creators:
    - là 1 function tạo 1 cái action
      `const incrementCreator = (data) => {return {type:'todolist/increment', payload:data} }`
    - giúp chúng ta không phải tạo các object lặp đi lặp lại

- DISPATCH
  - là 1 function => có 1 cách duy nhất để cập nhật lại state trong store => sử dụng dispatch
  - nhận vào 1 action
    `dispatch({type:'todolist/increment', payload:10})`

## khởi tạo ứng dụng

- yarn add redux react-redux
- tạo 1 kho lưu trữ state
- createStore(rootReducer, initValue, enhancers): nhận vào 3 tham số
  - rootReducer: là 1 function dùng để cập nhật state ở kho chung dựa trên các action
    - nhận vào 2 tham số là state và action
  - initValue: khởi tạo giá trị mặc định cho state
  - enhancers: để cấu hình các middleware
