import NextLink from "next/link";

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* ...props to pass any other props link clicks, accessibility and so on */}
      <a {...props}>{children}</a>
    </NextLink>
  );
}
