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
import Activity from './pages/Activity';
import CityId from './pages/id/cityId/CityId';
import MainLayout from './layouts/mainLayout';
import ActivityId from './pages/id/activityId/ActivityId';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout/>}>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="activity" element={<Activity/>} />
      <Route path="activity/:id" element={<ActivityId/>} />
      <Route path="city/:id" element={<CityId/>} />
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
