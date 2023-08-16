import { colors } from "../../../constants";
import { Box } from "@mui/material";
import SectionTitle from "../../Helpers/SectionTitle";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import CloseIcon from "@mui/icons-material/Close";
import PaidIcon from "@mui/icons-material/Paid";

interface Props {
  expanded: boolean;
  setExpanded: (val: boolean) => void;
  title: string;
}

function HistoryHeader({ expanded, setExpanded, title }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        color: colors.primary,
      }}
    >
      <SectionTitle title={title}>
        <PaidIcon color="success" />
      </SectionTitle>
      {expanded ? (
        <CloseIcon
          sx={{
            cursor: "pointer",
          }}
          onClick={() => setExpanded(false)}
        />
      ) : (
        <ExpandCircleDownIcon
          sx={{
            cursor: "pointer",
          }}
          onClick={() => setExpanded(true)}
        />
      )}
    </Box>
  );
}

export default HistoryHeader;
