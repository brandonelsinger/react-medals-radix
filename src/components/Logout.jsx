import { ExitIcon } from "@radix-ui/react-icons";
import { Button, Tooltip, Flex, Text, Strong, Badge, Separator } from "@radix-ui/themes";

function Logout(props) {
  return (
    <Flex
      align="center"
      gap="3"
      style={{ position: "fixed", bottom: 20, left: 20, zIndex: 100 }}
    >
      <Tooltip content="Logout">
        <Button onClick={props.onLogout} variant="ghost">
          <ExitIcon />
        </Button>
      </Tooltip>
      <Text size="2">
        Logged in as: <Strong>{props.user.name}</Strong>
      </Text>
      <Separator orientation="vertical" />
      <Text size="2">Permissions:</Text>
      <Flex gap="1">
        {props.user.canPost && <Badge color="green">add</Badge>}
        {props.user.canPatch && <Badge color="blue">edit</Badge>}
        {props.user.canDelete && <Badge color="red">delete</Badge>}
        {!props.user.canPost && !props.user.canPatch && !props.user.canDelete && (
          <Badge color="gray">read only</Badge>
        )}
      </Flex>
    </Flex>
  );
}

export default Logout;