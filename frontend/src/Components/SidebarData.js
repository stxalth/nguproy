import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";
import EventNoteIcon from "@material-ui/icons/EventNote";
import GroupIcon from "@material-ui/icons/Group";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon className="Icon" />,
    link: "/dashboard",
  },
  {
    title: "Daftar Program Studi",
    icon: <ListIcon className="Icon" />,
    link: "/daftarprogramstudi",
  },
  {
    title: "Daftar Kegiatan",
    icon: <EventNoteIcon className="Icon" />,
    link: "/daftarkegiatan",
  },
  {
    title: "Data Mahasiswa",
    icon: <GroupIcon className="Icon" />,
    link: "/datamahasiswa",
  },
];
