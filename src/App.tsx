import { Paper } from '@mui/material';
import './App.css';
import Layout from './components/Layout';
import { colors } from './constants';
import PersonalSection from './components/PersonalSection';
function App() {
  return <Layout>
    <PersonalSection />
    <Paper sx={{
      width:'100%',
      background: 'white',
      color:colors.primary,
      height:'350px',
      marginTop:'50px',
      border:`1px solid ${colors.primary}`
    }} component="section"> SANTIAGO CABALLERO </Paper>
  </Layout>
}

export default App;
