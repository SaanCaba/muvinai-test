interface Props {
  name: string;
}

function Label({ name }: Props) {
  return (
    <label
      style={{ display: "flex", justifyContent: "center", fontSize: "17px" }}
    >
      {name}
    </label>
  );
}

export default Label;
