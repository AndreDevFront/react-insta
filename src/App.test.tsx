// import { render, screen } from '@testing-library/react';
// import App from './App';
import axios from 'axios'

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn()
}))

const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.post.mockResolvedValue({})

test('renders learn react link', () => {
  // render(<App />);
  // // eslint-disable-next-line @typescript-eslint/no-unused-expressions  
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
