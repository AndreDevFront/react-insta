import React, { useState, useEffect } from 'react';
import axios from 'axios';


import Post from './Post'

interface InstagramBusinessAccount {
    followers_count: number;
    id: string;
    media: InstagramPost[];
}

interface InstagramPost {
  comments_count: number;
  like_count: number;
  thumbnail_url: string;
  permalink: string;
  media_url: string;
  media_type: string;
  insights: {
    data: {
      values: {
        value: number;
      }[];
    }[];
  };
}


const Home: React.FC = () => { 
    const [posts, setPosts] = useState<InstagramBusinessAccount[]>([]);
    const [follower, setFollower] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    
    useEffect(() => {
        setLoading(false);
        const id = "5442295289125264";
        const urlGraph = `https://graph.facebook.com/v16.0/${id}`;
        const token = 'EABHdDNqVJMEBAKSZBXldx9szh7G7ndFudHOvBUwwwuFZCl6L76NnXVZCWTZBaZABc0TZA1QsFiZA0LM12S0nLZA4hB1bwf7ZCbOAP2jC7J3r4eCZBO2ytvnLfH1ulXNrhvONHxDzVfYKqqBlZB6Bp7z0QxOlhprwVdifztsS5Ndt0WlwI655JB0Qx9MOSZBqdjlzk3kZD';
        
        const fetchData = async () => {
            try {
                const response = await axios.get(`${urlGraph}?fields=businesses{instagram_business_accounts{followers_count,id,media.limit(30){timestamp,comments_count,like_count,thumbnail_url,permalink,media_url,insights.metric(reach,impressions,engagement,saved)}}}&access_token=${token}`);
                
                if (response) {
                    const { media, followers_count } = response.data.businesses.data[1].instagram_business_accounts.data[0];
                    setPosts(media.data);
                    setFollower(followers_count);
                } else {
                    console.log('vazio')
                }

            } catch (error) { console.log(error); }
        };        
        fetchData();
    }, []);

    return (
        <div>
            <p>{ follower } seguidores</p>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                    <div>
                        {posts && posts.length > 0 && posts.map((post:any, i) => <Post key={i} post={post} />)}
                    </div>
            )}
        </div>
    );
} 


export default Home;