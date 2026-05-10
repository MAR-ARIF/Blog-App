import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import LoginPage from './Pages/loginPage.jsx'
import SignUpPage from './Pages/SignUpPage.jsx'
import AllPostPage from './Pages/AllPostPage.jsx'
import AddPostPage from './Pages/AddPostPage.jsx'
import EditPostPage from './Pages/EditPostPage.jsx'
import PostPage from './Pages/PostPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element : <HomePage />

      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element:(
          <AuthLayout authentication={false}>
            <SignUpPage/>
          </AuthLayout>
        )
      },
      {
        path:"/all-post",
        element:(
          <AuthLayout authentication>
            <AllPostPage/>
          </AuthLayout>
        )
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPostPage/>
          </AuthLayout>
        )
      },
      {
        path:"/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPostPage />
          </AuthLayout>
        )
      },
      {
        path:"/post/:slug",
        element: <PostPage/>
      }

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>

    </Provider>
 
  </StrictMode>
)
