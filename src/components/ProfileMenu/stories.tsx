import { StoryFn, Meta } from '@storybook/react'
import ProfileMenu from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu
} as Meta

export const Basic: StoryFn = () => <ProfileMenu />
