import createApiClient from './apiClient';

const apiClient = createApiClient();

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const getRecords = async (): Promise<Comment[]> => {
  try {
    const response = await apiClient.get('/comments');
    return response.data;
  } catch (error) {
    console.error('Error fetching records:', error);
    throw error;
  }
};