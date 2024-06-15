import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './components/Login/Login.jsx';
import Logout from './components/Logout/Logout.jsx';
import Register from './components/Register/Register.jsx';
import VideoPage from './components/Videos/VideoPage.jsx';
import Home from './components/Home.jsx';
import LikedVideosPage from './components/LikedVideosPage.jsx';
import WatchHistoryPage from './components/WatchHistoryPage.jsx';
import './index.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Playlist from './components/Playlist.jsx';
import UserProfile from './components/UserProfile.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="likedVideos" element={<LikedVideosPage/>}/>
      <Route path="history" element={<WatchHistoryPage/>}/>
      <Route path="playlist" element={<Playlist/>}/>
      <Route path="watch/:id" element={<VideoPage />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </React.StrictMode>
);