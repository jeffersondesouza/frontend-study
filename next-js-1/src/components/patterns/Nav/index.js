import { theme } from "../../../theme/theme";
import { Box, Text } from "../../../theme/components";
import Link from "../../Link";

export default function Nav() {
  return (
    <Box
      as="nav"
      styleSheet={{
        backgroundColor: theme.colors.primary[900],
      }}
    >
      <Box
        styleSheet={{
          overflow: "hidden",
          maxWidth: theme.space.xcontainer_xl,
          marginLeft: "auto",
          marginRight: "auto",
          textColor: theme.colors.neutral["000"],
          paddingVertical: {
            xs: theme.space.x4,
          },
          paddingHorizontal: {
            xs: theme.space.x4,
            sm: theme.space.x6,
            lg: theme.space.x8,
          },
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/posts">Blog</Link>
      </Box>
    </Box>
  );
}
