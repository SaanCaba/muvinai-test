import { Box, Grid, TextField } from '@mui/material'

function PersonalDataForm() {
  return (
    <Box  component="form">
        <Grid container rowSpacing={1} >
            {Array.from(Array(8)).map((_, index) => (
                <Grid item xs={3} key={index} >
                    <Box sx={{
                        display:"flex",
                        justifyContent:"center",
                }}>
                        <TextField /> 
                    </Box>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}

export default PersonalDataForm
