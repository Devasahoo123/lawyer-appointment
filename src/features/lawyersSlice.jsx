import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: "Rajesh Mishra", specialty: "Divorce Lawyer", availability: 10, cost: 10000, image: "https://tinyurl.com/4yz3zzwu" },
  { id: 2, name: "Kamlesh Kumar", specialty: "Criminal Lawyer", availability: 8, cost: 15000, image: "https://shorturl.at/aeq5z" },
  { id: 3, name: "Suresh Kumar", specialty: "Civil Lawyer", availability: 12, cost: 20000, image: "https://tinyurl.com/mrxewypd" },
  { id: 4, name: "Pankaj Gupta", specialty: "Divorce Lawyer", availability: 10, cost: 10000, image: "https://tinyurl.com/2s3mur9y" },
  { id: 5, name: "Anil Sharma", specialty: "Criminal Lawyer", availability: 8, cost: 150000, image: "https://shorturl.at/6yVHP" },
  { id: 6, name: "Gitanjli Gautam", specialty: "Civil Lawyer", availability: 2, cost: 20000, image: "https://shorturl.at/qdZEa" },
];

const lawyersSlice = createSlice({
  name: 'lawyers',
  initialState,
  reducers: {},
});

export default lawyersSlice.reducer;
