import React from 'react'
import JustinDiscover from '@/pages/discover';
import RecommendPage from '@/pages/discover/child-pages/recommend';
import RankingPage from '@/pages/discover/child-pages/ranking';
import SongsPage from '@/pages/discover/child-pages/songs';
import DiradioPage from '@/pages/discover/child-pages/djradio';
import ArtistPage from '@/pages/discover/child-pages/artist';
import AlbumPage from '@/pages/discover/child-pages/album';

import JustinMine from '@/pages/mine';
import JustinFriends from '@/pages/friends'
import { Redirect } from 'react-router-dom';


const routes = [
  {
    path:'/',
    exact:true,
    render:()=>(
      <Redirect to='/discover' />
    )
  },
  {
    path:'/discover',
    component:JustinDiscover,
    routes:[
      {
        path:'/discover',
        exact:true,
        render:()=>(
          <Redirect to='/discover/recommend' />
        )
      },
      {
        path:'/discover/recommend',
        component:RecommendPage
      },
      {
        path:'/discover/ranking',
        component:RankingPage
      },
      {
        path:'/discover/songs',
        component:SongsPage
      },
      {
        path:'/discover/djradio',
        component:DiradioPage
      },
      {
        path:'/discover/artist',
        component:ArtistPage
      },
      {
        path:'/discover/album',
        component:AlbumPage
      },
     
    ]
  },
  {
    path:'/mine',
    component:JustinMine
  },
  {
    path:'/friends',
    component:JustinFriends
  }
];


export default routes;