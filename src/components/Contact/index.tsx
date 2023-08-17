import { Box, Typography } from "@mui/material";
import BoxLayout from "../BoxLayout";
import SectionTitle from "../Helpers/SectionTitle";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { colors } from "../../constants";

function Contact() {
  return (
    <BoxLayout>
      <SectionTitle title="Contacto">
        <EmailIcon />
      </SectionTitle>
      <Box
        sx={{
          paddingLeft: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "13px",
            alignItems: "center",
          }}
        >
          <WhatsAppIcon
            sx={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              color: colors.wpp,
            }}
          />
          <button className="wppButton">Enviar mensaje de Whatsapp</button>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "13px",
            alignItems: "center",
          }}
        >
          <ForwardToInboxIcon
            sx={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              color: colors.mail,
            }}
          />
          <button className="mailButton">Enviar correo electrónico</button>
        </Box>
      </Box>
    </BoxLayout>
  );
}

export default Contact;
