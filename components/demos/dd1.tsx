"use client";

import * as React from "react";
import Dropdown1, { MenuItem } from "@/components/pumki-ui/dropdown/dd1";
import { User, Settings, BarChart2, HelpCircle, LogOut } from "lucide-react";

export default function DropdownUserDemo() {
  const profileMenuItems: MenuItem[] = [
    {
      title: "Profile",
      description: "View or edit your profile settings",
      icon: <User className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Settings",
      description: "Configure application preferences",
      icon: <Settings className="w-5 h-5 text-green-400" />,
    },
    {
      title: "Analytics",
      description: "View your usage statistics",
      icon: <BarChart2 className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: "Help",
      description: "Get support and documentation",
      icon: <HelpCircle className="w-5 h-5 text-purple-400" />,
    },
    {
      title: "Logout",
      description: "Sign out of your account",
      icon: <LogOut className="w-5 h-5 text-red-400" />,
    },
  ];

  return (
    <Dropdown1
      menuItems={profileMenuItems}
      triggerText="User Menu"
      menuTitle="User Options"
      buttonVariant="outline"
      buttonSize="default"
    />
  );
}
