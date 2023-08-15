import React from "react";

interface Props {
  name: string;
}

function Label({ name }: Props) {
  return <label>{name}</label>;
}

export default Label;
