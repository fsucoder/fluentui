import * as React from 'react';

import { Menu, MenuTrigger, MenuList, MenuItem, MenuPopover } from '@fluentui/react-menu';

import { Button } from '@fluentui/react-button';

const EditorLayoutSubMenu = () => {
  return (
    <Menu>
      <MenuTrigger>
        <MenuItem>Editor Layout</MenuItem>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>Split Up</MenuItem>
          <MenuItem>Split Down</MenuItem>
          <MenuItem>Single</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

const AppearanceSubMenu = () => {
  return (
    <Menu>
      <MenuTrigger>
        <MenuItem>Appearance</MenuItem>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>Centered Layout</MenuItem>
          <MenuItem>Zen</MenuItem>
          <MenuItem disabled>Zoom In</MenuItem>
          <MenuItem>Zoom Out</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

const PreferencesSubMenu = () => {
  return (
    <Menu>
      <MenuTrigger>
        <MenuItem>Preferences</MenuItem>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Online Services Settings</MenuItem>
          <MenuItem>Extensions</MenuItem>
          <AppearanceSubMenu />
          <EditorLayoutSubMenu />
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export const NestedSubmenus = () => {
  return (
    <Menu>
      <MenuTrigger>
        <Button>Toggle menu</Button>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>New </MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem disabled>Open File</MenuItem>
          <MenuItem>Open Folder</MenuItem>
          <PreferencesSubMenu />
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

NestedSubmenus.parameters = {
  layout: 'padded',
  docs: {
    description: {
      story: [
        'Menus can be nested within each other to render application submenus.',
        'Submenus are a complex control for any app, make sure you need them.',
        '',
        '- Try and limit nesting to 2 levels.',
        '- Creating submenus as separate components will result in more maintainable code.',
      ].join('\n'),
    },
  },
};
