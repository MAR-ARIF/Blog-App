# Blog App

A full stack blog application built with React and Appwrite. Users can create accounts, write and publish blog posts with a rich text editor, upload featured images, and manage their own content.

Live demo: [blog-app-one-eta-55.vercel.app](https://blog-app-one-eta-55.vercel.app/)

---

## What it does

- Sign up, log in, and log out with secure authentication
- Create, edit, and delete blog posts
- Write content using a rich text editor powered by TinyMCE
- Upload featured images for each post
- Set posts as active or inactive to control visibility
- Only logged in users can create or manage posts
- Slug auto-generates from the post title

---

## Tech used

| Tech | Purpose |
|------|---------|
| React 18 | UI and component architecture |
| Redux Toolkit | Global auth state management |
| React Router v6 | Client side routing and protected routes |
| Appwrite | Backend — authentication, database, file storage |
| React Hook Form | Form handling and validation |
| TinyMCE | Rich text editor for writing posts |
| Tailwind CSS | Styling |
| Vite | Build tool |

---

## Project structure

```
src/
├── appwrite/
│   ├── auth.js          all authentication methods
│   ├── database.js      all database CRUD operations
│   └── storage.js       file upload and retrieval
├── conf/
│   └── conf.js          centralised environment config
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── PostForm.jsx      create and edit posts
│   ├── PostCard.jsx      post preview card
│   ├── RTE.jsx           TinyMCE rich text editor
│   ├── Input.jsx         reusable input with forwardRef
│   ├── Select.jsx        reusable select with forwardRef
│   ├── Button.jsx        reusable button
│   ├── AuthLayout.jsx    protected and guest route wrapper
│   └── index.js          barrel exports
├── Pages/
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── SignUpPage.jsx
│   ├── AllPostPage.jsx
│   ├── AddPostPage.jsx
│   ├── EditPostPage.jsx
│   └── PostPage.jsx
├── Slices/
│   └── authSlice.js      login and logout reducers
├── Store/
│   └── Store.js          Redux store config
├── App.jsx               layout and auth check on load
└── main.jsx              router and provider setup
```

---

## Things I learned building this

- How to integrate a third party backend service into a React app
- Structuring Appwrite service calls into separate class based files
- Managing global auth state with Redux Toolkit across the whole app
- Using React Hook Form with native inputs and third party components
- The difference between `register` and `Controller` in React Hook Form
- Using `forwardRef` to pass refs through custom components
- How protected routes work with `AuthLayout` and Redux auth state
- Separating database and storage into different service files
- Handling file upload and linking image IDs to database documents
- Deploying a Vite React app to Vercel with environment variables
