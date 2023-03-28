import React from 'react'
import {createRoot} from 'react-dom/client'
import Home from './pages/Home'
import './index.module.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  // Link,
  createRoutesFromElements,
} from "react-router-dom";
import About from './pages/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="activity/:id" element={<h1>activity</h1>} />
      <Route path="city/:id" element={<h1>city</h1>} />
    </Route>
  )
)
const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
