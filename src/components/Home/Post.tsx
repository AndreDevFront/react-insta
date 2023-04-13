import { FC } from 'react';
import { InstagramPost } from './types/InstagramPost'
import { PostContainer, ImageContainer, Image, TextContainer,  Subtitle } from './style';

interface PostProps {
  post: InstagramPost;
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <PostContainer>
      <ImageContainer>
        <a rel="noreferrer" target="_blank" href={post.permalink}>
          <Image
            src={post.thumbnail_url ? post.thumbnail_url : post.media_url}
            alt=""
          />
        </a>
      </ImageContainer>
      <TextContainer>
        {/* <Title>
          
        </Title> */}
        <Subtitle>Likes {post.like_count}</Subtitle>
        <Subtitle>
          Alcance: &nbsp;
          {post.insights.data[0] ? post.insights.data[0].values[0].value : 0}
        </Subtitle>
        <Subtitle>
          Impressões: &nbsp;
          {post.insights.data[1] ? post.insights.data[1].values[0].value : 0}
        </Subtitle>
        <Subtitle>
          Engajamento: &nbsp;
          {post.insights.data[2] ? post.insights.data[2].values[0].value : 0}
        </Subtitle>
        <Subtitle>
          Salvar: &nbsp;
          {post.insights.data[3] ? post.insights.data[3].values[0].value : 0}
        </Subtitle>
      </TextContainer>
    </PostContainer>
  );
};

export default Post;
