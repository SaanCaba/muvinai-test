import { Box, Grid, Typography } from "@mui/material"

interface Props{
    field:string | boolean
    fieldName:string
}

function Field({field,fieldName}: Props) {
  return (
    <Grid item xs={3} >
        <Typography variant="h6" sx={{
            textDecoration:'underline',
            textAlign:"center"
        }}><i>{fieldName}</i></Typography>
        <Typography sx={{
             textAlign:"center"
        }} variant="h6">{typeof field === "boolean" ? "Activo" : field}</Typography>
    </Grid>
  )
}

export default Field
