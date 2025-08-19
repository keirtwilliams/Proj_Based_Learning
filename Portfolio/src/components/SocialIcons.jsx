import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";

function SocialIcons() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {/* GitHub Icon */}
      <IconButton
        component="a"
        href="https://github.com/keirtwilliams"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
       <GitHubIcon sx={{ fontSize: 40 }} />
      </IconButton>

      {/* LinkedIn Icon */}
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/keirt-william-gemperle-ab1028313/"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
        <LinkedInIcon sx={{ fontSize: 40 }} />
      </IconButton>

        {/* Email Icon */}
      <IconButton
      component="a"
      href="mailto:keirtwilliamgemperle@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      color="primary"
      >

        <EmailIcon sx={{ fontSize: 40 }} />
      </IconButton>

      <IconButton
      variant="contained"
      color="primary"
      href="/resume.pdf"
      download="Keirt-William-Resume.pdf"
      startIcon={<DownloadIcon />}
      sx={{ mt: 2 }}
      >
        Download Resume
      </IconButton>
    </div>
  );
}

export default SocialIcons;
