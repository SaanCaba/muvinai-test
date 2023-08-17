import { Box, Avatar, Typography, Divider } from "@mui/material";
import BoxLayout from "../BoxLayout";
import SectionTitle from "../Helpers/SectionTitle";
import EditAvatar from "../EditAvatar";
import { colors } from "../../constants";
import { PersonalData } from "../../models/personalData";
import defaultAvatar from "../../assets/Default-avatar.jpg";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

interface Props {
  personalData: PersonalData;
  handleEditPicture: (picture: string) => void;
  children: React.ReactNode;
}

function PersonalInformation({
  personalData,
  handleEditPicture,
  children,
}: Props) {
  return (
    <BoxLayout>
      <Box
        sx={{
          position: "absolute",
          top: "-60px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          transform: "translateX(-70px)",
        }}
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            border: `2px solid ${colors.primary}`,
            background: "white",
          }}
          alt="profile photo"
          src={!personalData.picture ? defaultAvatar : personalData.picture}
        />
        <EditAvatar editPicture={handleEditPicture} />
      </Box>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        {personalData.firstName} {personalData.lastName} <i>#39389</i>
      </Typography>
      <SectionTitle title="Información personal">
        <AssignmentIndIcon />
      </SectionTitle>
      {children}
      <Divider
        sx={{
          background: colors.primary,
          marginTop: "10px",
        }}
      />
    </BoxLayout>
  );
}

export default PersonalInformation;
