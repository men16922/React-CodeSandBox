import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/cart"> cart </Link>
      <Link to="/users"> users </Link>
      <Link to="/products"> products </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart name="licat" />} />
        <Route path="/users/*" element={<Outlet />}>
          <Route path="" element={<Users />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="question" element={<Question />} />
          <Route path="notice" element={<Notice />} />
        </Route>
        <Route path="/products/*" element={<Outlet />}>
          <Route path="notice" element={<Notice />} />
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function Cart({ name }) {
  return <h1>{name} world1</h1>;
}

function Users() {
  return <h1>hello users</h1>;
}

function Product() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Product</h1>;
}

function Notice() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Notice</h1>;
}

function Coupon() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Coupon</h1>;
}

function Question() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Question</h1>;
}

export default App;
