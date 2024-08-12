import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons-react";
import logo from "../../assets/logo.png";

// styles
import classes from "./Footer.module.css";

const links = [{ link: "https://github.com/diiaz2910", label: "Contact" }];
const instagramLink = "https://www.instagram.com/rdiiazr/";

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
          style={{ width: rem(40), height: rem(40) }}
        />

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <Anchor
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="xl" variant="default" radius="xl">
              <IconBrandInstagram
                style={{ width: rem(18), height: rem(18) }}
                stroke={2}
              />
            </ActionIcon>
          </Anchor>
        </Group>
      </div>
    </div>
  );
}
