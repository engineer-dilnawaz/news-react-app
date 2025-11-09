import { useState } from "react";
import { Button, Typography } from "@mui/material";

import { linkifyText } from "../../utils";

type ExpandableTextProps = {
  text: string;
};

const maxLines = 3;

export const ExpandableText = ({ text }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);

  const html = linkifyText(text);

  return (
    <>
      <Typography
        sx={{
          mt: 2,
          display: "-webkit-box",
          WebkitLineClamp: expanded ? "unset" : maxLines,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          whiteSpace: "pre-line",
        }}
        variant="subtitle1"
        color="textDisabled"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <Button
        variant="text"
        size="small"
        sx={{ mt: 1, p: 0, minWidth: "auto" }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </>
  );
};
