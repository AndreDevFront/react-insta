import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
    PostContainer,
    ImageContainer,
    Image,
    TextContainer,
    Title,
    Subtitle
} from './style'


interface InstagramPost {
  followers_count: number;
  id: string;
  media: Postagem[];
}

interface Postagem { 
    comments_count: number;
    like_count: number;
    thumbnail_url: string;
    permalink: string;
    media_url: string;
    media_type: string;
    insights: {
      reach: number;
      impressions: number;
      engagement: number;
    };
}

const Home: React.FC = () => { 
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [follower, setFollower] = useState();
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        setLoading(false);
        const id = "5442295289125264";
        const urlGraph = `https://graph.facebook.com/v16.0/${id}`;
        const token = 'EABHdDNqVJMEBAFZAMnOYzVF3AZAW0YbyGVHaPBeZBtOowj2utVqZCm2XhZBLHdGmDzrM38ZCetkxEZB5y7tU5MEsEt7jkjVXgJei16UTdeChUFf3slzZAFHdU5QlsOFn04TmwowwbksdB0pD7R4EK5p2p6Wtf8vyB7crMxB9yjeeVKofVsxHYPYZBxwjkyHkohSPDSJFMWtqN9o0bRNw5DQlBuR7aTWM8lYQZD';
        
        const fetchData = async () => {
            try {
                const response = await axios.get(`${urlGraph}?fields=businesses{instagram_business_accounts{followers_count,id,media.limit(30){timestamp,comments_count,like_count,thumbnail_url,permalink,media_url,insights.metric(reach,impressions,engagement,saved)}}}&access_token=${token}`);
                
                if (response) {
                    console.log(response.data.businesses.data[1].instagram_business_accounts.data[0].media.data);
                    setPosts(response.data.businesses.data[1].instagram_business_accounts.data[0].media.data);
                } else {
                    console.log('vazio')
                }
                setFollower(response.data.businesses.data[1].instagram_business_accounts.data[0].followers_count);

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
                        {posts.map((post:any, i) => (
                            <PostContainer key={i}>
                                <ImageContainer>
                                    <Image
                                        src={post.thumbnail_url ? post.thumbnail_url : post.media_url}
                                        alt=""
                                    />
                                </ImageContainer>
                                <TextContainer>                                    
                                    <Title>
                                        <Link target='_blank' to={post.permalink}>{post.permalink}</Link>
                                    </Title>
                                    <Subtitle>Likes {post.like_count}</Subtitle>
                                    <Subtitle>
                                        Alcance: &nbsp;
                                        {post.insights.data[0]
	                                    ? post.insights.data[0].values[0].value
                	                    : 0}
                                    </Subtitle>
                                    <Subtitle>
                                         Impressões: &nbsp;
                                        {post.insights.data[1]
	                                    ? post.insights.data[1].values[0].value
                	                    : 0}
                                    </Subtitle>
                                    <Subtitle>
                                        Engajamento: &nbsp;
                                        {post.insights.data[2]
                                        ? post.insights.data[2].values[0].value
                                        : 0}
                                    </Subtitle>
                                    <Subtitle>
                                        Salvar: &nbsp;
                                        {post.insights.data[3]
                                        ? post.insights.data[3].values[0].value
                                        : 0}
                                    </Subtitle>
                                </TextContainer>
                               
                            </PostContainer>
                            
                        ))}
                    </div>
            )}
        </div>
    );
} 

// comments_count: number;
//     media_url: string;
//     media_type: string;
//     insights: {
//       reach: number;
//       impressions: number;
//       engagement: number;
//     };

export default Home;