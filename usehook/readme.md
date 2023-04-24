# useHook

- được thêm vào từ version 16.8
- giúp sử dụng tính năng của react như lifecycle và quản lý sate trong react
- chỉ sử dụng được trong functional component
- life-cycle gồm 3 phase(giai đoạn)

  1. mounting: là quá trình component được tạo ra

  - constructor():được gọi đầu tiên khi component được tạo ra
  - getDerivedStateFromProps(): được gọi ngay sau contructor() và trước render() - cho phép component cập nhật state dựa trên props mới.
  - render(): được gọi để render ra giao diện
  - componentDidMount(): được gọi ngay sau khi component được render ra giao diện.

  2. Updating: là quá trình component được cập nhật thông qua việc cập nhật state or props

  - getDerivedStateFromProps(): được gọi ngay sau khi state or props được cập nhật
  - shouldComponentUpdate(): được gọi để kiểm tra xem component có cần được cập nhật hay không?
  - render():
  - getSnapshotBeforeUpdate(): được gọi khi component cập nhật trên dom
  - componentDidUpdate(): được gọi sau khi component cập nhật trên dom

  3. Unmounting: quá trình component bị xóa khỏi dom

  - componentWillUnmount(): được gọi trước khi component được xóa khỏi dom

## useState

- sử dụng để quản lý state trong 1 function component
- nhật vào 1 tham số là giá trị khởi tạo cho state
- nếu truyền 1 kết quả được trả về từ một hàm phức tạo khác => chú ý việc sử dụng vì sau mỗi lần render lại nó lại gọi lại hàm được truyền => ảnh hưởng tới hiệu năng của chương trình => sử dụng arrow function để khác phục
- khi set giá trị mới cho state sử dụng useSate => sẽ set lại giá trị mới thay vì merge như trong class
- để tránh bị mất dữ liệu những giá trị chưa => sử dụng Spread operator

## super()

- phương thức được sử dụng để gọi các phương thức từ class cha trong class con

## useEffect()

- sử dụng useEffect khi muốn thực hiện các tác vụ liên quan tới side effect:

  - gọi api
  - thêm / xóa các event listener(click, scroll, ...)
  - thao tác DOM trực tiếp
  - gọi web APIs (setTimeout, setInterval,...)
    `useEffect(() => {
        // code logic here
}, [dependency]);`

- một state thay đổi sẽ làm component re-render
- sẽ được gọi khi mỗi lần re-redener => nếu không có giá trị [dependency]
- khi có [dependency] -> chỉ được re-redener khi có dependency thay đổi
- có thể return về 1 function trong useEffect => hoạt động giống như 1 componentWillUnmount => thực hiện dọn dẹp những thực thi trước đó khi mà component unmount

## useMemo()

- sử dụng để tối ưu hóa hiệu suất của ứng dụng bằng cách lưu trữ giá trị tính toán trước đó vào bộ nhớ cache => nếu k có gì thay đổi => trả về giá trị đã lưu trước đó.
- nhận vào 2 tham số
  - tham số thứ nhất: là 1 function
  - tham số 2: 1 array dependency

## cache

- 1 bộ nhớ tạm thời, sử dụng để lưu trữ các dữ liệu thường xuyên truy cập để tăng tốc độ truy cập và giảm tải các thiết bị lưu trữ chính.

## nguyên lý hoạt động của reactjs

- khi một props or 1 state thay đổi => thì component sẽ được re-render =>chú ý hiệu năng của chương trình

## useId
- giải quyết vấn đề trùng id khi re-use lại một component
## useTransition()
## useDeferredValue()

## context api => useContext() 
- context api là một tính năng cho phéo truyền dữ liệu qua các components của ứng dụng mà không cần phải truyền dữ liệu qua từng components
- thay vì sử dụng props để truyển dữ liệu => các child components => context api cho phép tạo 1 global state or các function có thể truy cập từ bất cứ component nào trong ứng dụng.
- để sử dụng context trong react có 3 bước 
  - bước 1: tạo context
  - bước 2: quyết định xem context vừa tạo được dùng ở đâu bằng cách bọc <[Tên Context].Provider> bên ngoài => tất cả components con đều có thể lấy dữ liệu từ context
  - bước 3: sử dụng dữ liệu từ Context hay con gọi là comsumer(tiêu thụ):
    - có 2 cách để lấy dữ liệu
      - useContext
      - sử dụng <[tên context].Comsumer> => áp dụng với class components
## so sánh context api và redux
- context:
  - dễ học
  - là 1 api được tích hợp sẵn trong react library
  - phù hợp với những dự án nhỏ
- redux: 
  - khó học hơn, nắm nhiều khái niệm và cú pháp 
  - làm code có tính tổ chức và dễ maintain hơn
  - là 1 third library nên sẽ làm tăng bundle size
  - phù hợp với mọi loại dự án.
