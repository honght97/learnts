## đồng bộ - synchronous

- thông thường 1 function - 1 chương trình sẽ thực hiện các câu lệnh từ trên xuống dưới => tại 1 thời điểm chỉ thực thi được 1 dòng lệnh duy nhất => khi 1 function dựa trên kết quả của 1 function khác => cần đợi cho tới khi function trả về kết quả => mới thực hiện tiếp

## bất đồng bộ

- có thể thực hiện 1 tác vụ khác mà không cần chờ tác vụ hiện tại thực thi xong
- làm được nhiều tác vụ đồng thời => làm nhiều việc hơn trong cùng 1 khoảng thời gian
- là 1 phương thức có thể thực hiện nhiều công việc cùng lúc thay vì chờ đợi công việc hiện tại hoàn thành trước mới bắt đầu
- có 3 cách sử lí bất đồng bộ trong js
  - callback
  - promises
  - async await
- có 2 loại bất đồng bộ chính trong js
  - browser api / web api: cung cấp các function, events để xử lý bất đồng bộ
    - setTimeout, setInterval, ...
    - scroll, click, ...events
  - promises
    - các đối tượng js để thực hiện
    - các tác vụ bất đồng bộ

## callback

- trong js function hoạt động như 1 object => có thể truyền 1 function vào 1 function như là 1 tham số => callback
- callback là một cách rất hiệu quả => khi chúng ta muốn trì hoãn việc thực thi 1 function nào đó => và chờ cho đến khi 1 function khác được thực thi và trả về kết quả
- với callback => 1 vấn đề lớn => callback hell

## promise

- là 1 lời hứa: có 2 trạng thái
  - có thể thực hiện được lời hứa
  - thất hứa
- promises là 1 object để đại diện cho 1 việc thực hiện bất đồng bộ được thành công hay thất bại
- promises có 3 trạng thái:
  - pending: trạng thái đang chờ việc thực thi hành động bất đồng bộ này => chưa biết được kết quả lúc này là đã thành công hay thất bại.
  - khi có kết quả trả về từ api => thành công thì có trạng thái resolve => có nghĩa là đã hoàn thành xong promises này
  - khi có kết quả trả về từ api => thất bại thì có trạng thái reject => promises không thực hiện thành công
- khi khởi tạo 1 promise => nhận vào 1 function => function này nhận vào 2 tham số resolve và reject

## async await

- giúp xử lý 1 đoạn code bất đồng bộ mà trông như đồng bộ => dễ dàng đọc và hiểu hơn
