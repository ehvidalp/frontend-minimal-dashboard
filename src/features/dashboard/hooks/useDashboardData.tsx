import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { getRecords } from '../../../api/recordService';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface DashboardDataContextType {
  comments: Comment[];
  error: string | null;
  loading: boolean;
}

const DashboardDataContext = createContext<DashboardDataContextType | null>(null);

const useFetchRecords = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRecords = useCallback(async () => {
    try {
      const data = await getRecords();
      setComments(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Error fetching records: ${err.message}`);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  return { comments, error, loading };
};

export const DashboardDataProvider = ({ children }: { children: React.ReactNode }) => {
  const { comments, error, loading } = useFetchRecords();

  return (
    <DashboardDataContext.Provider value={{ comments, error, loading }}>
      {children}
    </DashboardDataContext.Provider>
  );
};

export const useDashboardData = (): DashboardDataContextType => {
  const context = useContext(DashboardDataContext);
  if (context === undefined) {
    throw new Error('useDashboardData must be used within a DashboardDataProvider');
  }
  return context!;
};