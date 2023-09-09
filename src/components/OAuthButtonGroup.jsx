import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { GitHubIcon, GoogleIcon, TwitterIcon } from './ProviderIcons'

const providers = [
  { name: 'Google', icon: <GoogleIcon /> },
  { name: 'Twitter', icon: <TwitterIcon /> },
  { name: 'GitHub', icon: <GitHubIcon /> },
]

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="secondary" spacing="4">
    {providers.map(({ name, icon }) => (
      <Button key={name} flexGrow={1} _hover={{bg:"gray.300"}} bg={"gray.100"}>
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
)