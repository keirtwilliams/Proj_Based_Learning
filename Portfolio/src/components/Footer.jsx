import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 transition-colors duration-300 py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Links */}
        <div className="flex gap-4 mb-3">
          <IconButton
            component="a"
            href="mailto:keirtwilliamgemperle@gmail.com"
            target="_blank"
            sx={{ color: "inherit" }}
          >
            <Email className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors" />
          </IconButton>

          <IconButton
            component="a"
            href="https://github.com/keirtwilliams"
            target="_blank"
            sx={{ color: "inherit" }}
          >
            <GitHub className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors" />
          </IconButton>

          <IconButton
            component="a"
            href="https://linkedin.com/in/keirt-william-gemperle-ab1028313/"
            target="_blank"
            sx={{ color: "inherit" }}
          >
            <LinkedIn className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors" />
          </IconButton>
        </div>

        {/* Tagline */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Keirt William Gemperle
        </p>
      </div>
    </footer>
  );
}
