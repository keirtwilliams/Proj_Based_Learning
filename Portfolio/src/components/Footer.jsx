// Footer.jsx
import { Box, Container, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email, Description } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        color: "grey.300",
        py: 3,
        mt: 5,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* Contact Icons */}
        <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
          <IconButton
            component="a"
            href="mailto:youremail@gmail.com"
            target="_blank"
            sx={{ color: "grey.300", "&:hover": { color: "white" } }}
          >
            <Email />
          </IconButton>

          <IconButton
            component="a"
            href="https://github.com/yourusername"
            target="_blank"
            sx={{ color: "grey.300", "&:hover": { color: "white" } }}
          >
            <GitHub />
          </IconButton>

          <IconButton
            component="a"
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            sx={{ color: "grey.300", "&:hover": { color: "white" } }}
          >
            <LinkedIn />
          </IconButton>
        </Box>

        {/* Small tagline */}
        <Typography variant="body2" color="grey.500">
          © {new Date().getFullYear()} Keirt William Gemperle
        </Typography>
      </Container>
    </Box>
  );
}
