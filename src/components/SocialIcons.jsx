import { IconButton, Button } from "@mui/material"; 
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";

function SocialIcons() {
  return (
    <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
      {/* GitHub Icon */}
      <IconButton
        component="a"
        href="https://github.com/keirtwilliams"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        sx={{ width: 50, height: 50 }}
      >
        <GitHubIcon sx={{ fontSize: 36 }} />
      </IconButton>

      {/* LinkedIn Icon */}
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/keirt-william-gemperle-ab1028313/"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        sx={{ width: 50, height: 50 }}
      >
        <LinkedInIcon sx={{ fontSize: 36 }} />
      </IconButton>

      {/* Email Icon */}
      <IconButton
  component="a"
  href="mailto:keirtwilliamgemperle@gmail.com"
  color="primary"
  sx={{ width: 50, height: 50 }}
>
  <EmailIcon sx={{ fontSize: 36 }} />
</IconButton>


      {/* Resume Button */}
      <Button
        variant="contained"
        color="primary"
        href="../assets/ResumeGemperle.docx"
        download
        startIcon={<DownloadIcon />}
        sx={{
          borderRadius: "25px",
          textTransform: "none",
          fontSize: "1rem",
          padding: "10px 20px",
        }}
      >
        Resume
      </Button>
    </div>
  );
}

export default SocialIcons;
