# Configuration

To update the side navigation component that shows the page options, update the following parameter in `src/docs/components/sidenav.md`

```
export const sideNavPages = [
    { type: "link", text: "Homepage", href: "/" },
    { type: "link", text: "Table View", href: "/tableview" },
    { type: "link", text: "Details View", href: "/detailsview" },
    { type: "link", text: "Cards View", href: "/cardsview" },
    { type: "link", text: "Chatbot View", href: "/chatbotview" },
    { type: "link", text: "Analytics View", href: "/analyticsview" },
    { type: "divider" },
    {
        type: "link",
        text: "Documentation",
        href: "https://aws.amazon.com/",
        external: true
    }];
```