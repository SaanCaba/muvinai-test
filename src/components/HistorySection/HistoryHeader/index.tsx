import { colors } from "../../../constants";
import { Box } from "@mui/material";
import SectionTitle from "../../Helpers/SectionTitle";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  expanded: boolean;
  setExpanded: (val: boolean) => void;
  title: string;
  children: React.ReactNode;
}

function HistoryHeader({ expanded, setExpanded, title, children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        color: colors.primary,
      }}
    >
      <SectionTitle title={title}>{children}</SectionTitle>
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
