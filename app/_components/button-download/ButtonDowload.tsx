"use client";

import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

export const ButtonDownload = () => {
  return (
    <button className="btn btn-lg self-start bg-yellow-400 text-black hover:bg-yellow-100">
      <DownloadForOfflineIcon />
      Download Report
    </button>
  );
};
