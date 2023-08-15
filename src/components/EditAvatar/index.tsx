import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  editPicture: (val: string) => void;
}

function EditAvatar({ editPicture }: Props) {
  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      editPicture(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <label className="labelPicture">
        <EditIcon />
        <input
          onChange={(e) => handleEdit(e)}
          accept="image/*"
          type="file"
          name="picture"
          hidden
        />
      </label>
    </Box>
  );
}

export default EditAvatar;
