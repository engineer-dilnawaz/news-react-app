import { useState } from "react";
import { MoreVertSharp, OpenInNew } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { formatDateTime } from "../../utils";
import { ExpandableText } from "../ExpandableText";
import type { LatestNews } from "../../api/types";

type NewsCardProps = {
  news: LatestNews;
};

export const NewsCard = ({ news }: NewsCardProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(true);

  const handleHideMenu = () => setShowMenu(false);

  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: "70%",
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: (theme) => theme.palette.primary.main }}
            aria-label="recipe"
            children={news.source.name.charAt(0)}
          />
        }
        action={
          <IconButton aria-label="settings" onClick={handleShowMenu}>
            <MoreVertSharp />
          </IconButton>
        }
        title={news.source.name}
        subheader={formatDateTime(news.publishedAt)}
      />

      <CardMedia component="img" image={news.urlToImage} alt={news.title} />
      <CardContent>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
          {news.title}
        </Typography>
        <Divider />
        <ExpandableText text={news.description} />
      </CardContent>

      <CardActions>
        <Button
          variant="text"
          color="primary"
          startIcon={<OpenInNew />}
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </Button>
      </CardActions>

      <Menu
        id="basic-menu"
        open={showMenu}
        onClose={handleHideMenu}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={handleHideMenu}>Profile</MenuItem>
        <MenuItem onClick={handleHideMenu}>My account</MenuItem>
        <MenuItem onClick={handleHideMenu}>Logout</MenuItem>
      </Menu>
    </Card>
  );
};
