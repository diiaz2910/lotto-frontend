import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons-react";
import logo from "../../assets/logo.png";

// styles
import classes from "./Footer.module.css";

const links = [{ link: "https://github.com/diiaz2910", label: "Contact" }];

export function FooterCentered() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      size="sm"
      lh={1}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: rem(50), height: rem(50) }}
        />

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="xl" variant="default" radius="lg">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
