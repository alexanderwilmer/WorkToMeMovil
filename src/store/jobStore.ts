import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Job {
  type: string;
  location: string;
}

interface JobStore {
  requests: Job[];
  myJobs: Job[];
  createRequest: (type: string, location: string) => void;
  takeJob: (index: number) => void;
}

const useJobStore = create<JobStore>()(persist(
  (set) => ({
    requests: [],
    myJobs: [],
    createRequest: (type, location) => set((state) => ({
      requests: [...state.requests, { type, location }]
    })),
    takeJob: (index) => set((state) => {
      const job = state.requests[index];
      const newRequests = state.requests.filter((_, i) => i !== index);
      return {
        myJobs: [...state.myJobs, job],
        requests: newRequests
      };
    })
  }),
  { name: 'job-storage' }
));

export default useJobStore;