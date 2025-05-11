import "@mantine/core/styles.css";
import { Badge, Button, Card, Group, Image, Text, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { useNuiEvent } from "./hooks/useNuiEvent";
import { useState } from "react";

export default function App() {
  const [mostra, setMostra] = useState(false)
  useNuiEvent('testUI', (data: boolean) => {
    setMostra(data)
  });

  console.log(mostra)

  return <MantineProvider defaultColorScheme="dark" theme={theme}>

    {mostra && (


      <div className="h-[20rem] w-[50rem]">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </div>

    )}




  </MantineProvider>;
}
