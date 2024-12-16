import { createBrowserRouter } from "react-router-dom";  
import Layout from "../component/Layout/main";
import HomePage from "../pages/Home";
import Shop from "../pages/Home/Shop";
import AboutUs from "../pages/Home/AboutUs";
import Collection from "../pages/collection";
import Error from "../pages/Error";
import ItemDetail from "../pages/ItemDetail";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import PrivateLayout from "../component/Layout/privet";
import ProtectedRoute from "../component/protectedRoute";  // اضافه کردن ProtectedRoute

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // رندر صفحه Layout برای مسیرهای عمومی
    errorElement: <Error />,  // صفحه ارور برای مدیریت خطاها
    children: [
      {
        index: true,
        element: <HomePage />,  // صفحه اصلی
      },
      {
        path: "about-us",
        element: <AboutUs />,  // صفحه درباره ما
      },
      {
        path: "Collection/:category",
        element: <Collection />,  // صفحه دسته‌بندی محصولات
      },
      {
        path: "collection/:category/:productId",
        element: <ItemDetail />,  // صفحه جزئیات محصول
      },
      {
        path: "login",
        element: <Login />,  // صفحه لاگین
      },
      {
        path: "cart",
        element: <Cart />,  // صفحه سبد خرید (بدون نیاز به احراز هویت)
      },
    ],
  },
  {
    element: <PrivateLayout />,  // رندر صفحه Layout خصوصی برای مسیرهای نیازمند ورود
    children: [
      {
        path: "shop",
        element: (
          <ProtectedRoute
            element={<Shop />}
            redirectTo="/login"  // هدایت به صفحه لاگین اگر کاربر وارد نشده باشد
          />
        ),  // صفحه فروشگاه (در صورتی که نیاز به احراز هویت داشته باشد)
      },
      // مسیرهای دیگر نیازمند احراز هویت
    ],
  },
]);