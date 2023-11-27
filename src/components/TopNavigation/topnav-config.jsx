// Top Navigation Logo


// Top Navigation Header (Left Side)
export const topNavHeader = {
    href: "/",
    title: "Top Nav Header",
    logo: {
      src:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDNweCIgaGVpZ2h0PSIzMXB4IiB2aWV3Qm94PSIwIDAgNDMgMzEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGZpbGw9IiMyMzJmM2UiIHN0cm9rZT0iI2Q1ZGJkYiIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0MiIgaGVpZ2h0PSIzMCIgcng9IjIiPjwvcmVjdD4KICAgICAgICA8dGV4dCBmb250LWZhbWlseT0iQW1hem9uRW1iZXItUmVndWxhciwgQW1hem9uIEVtYmVyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjkiIHk9IjE5Ij5Mb2dvPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPgo=",
      alt: "Top Nav Header"
    }
  }


// Top Navigation Menu (Right Side)
export const topNavMenu = [
    {
      type: "button",
      text: "Link",
      href: "https://example.com/",
      external: true,
      externalIconAriaLabel: " (opens in a new tab)"
    },
    {
      type: "button",
      iconName: "notification",
      title: "Notifications",
      ariaLabel: "Notifications (unread)",
      badge: true,
      disableUtilityCollapse: false
    },
    {
      type: "menu-dropdown",
      iconName: "settings",
      ariaLabel: "Settings",
      title: "Settings",
      items: [
        {
          id: "settings-org",
          text: "Organizational settings"
        },
        {
          id: "settings-project",
          text: "Project settings"
        }
      ]
    },
    {
      type: "menu-dropdown",
      text: "Customer Name",
      description: "email@example.com",
      iconName: "user-profile",
      items: [
        { id: "profile", text: "Profile" },
        { id: "preferences", text: "Preferences" },
        { id: "security", text: "Security" },
        {
          id: "support-group",
          text: "Support",
          items: [
            {
              id: "documentation",
              text: "Documentation",
              href: "#",
              external: true,
              externalIconAriaLabel:
                " (opens in new tab)"
            },
            { id: "support", text: "Support" },
            {
              id: "feedback",
              text: "Feedback",
              href: "#",
              external: true,
              externalIconAriaLabel:
                " (opens in new tab)"
            }
          ]
        },
        { id: "signout", text: "Sign out" }
      ]
    }
  ]