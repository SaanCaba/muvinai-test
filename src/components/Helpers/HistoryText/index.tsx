import React from "react";

interface Props {
  title: string | number;
  styles: React.CSSProperties;
}

function HistoryText({ styles, title }: Props) {
  return <span style={styles}>{title}</span>;
}

export default HistoryText;
