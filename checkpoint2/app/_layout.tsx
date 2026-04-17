import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#7e6ef1",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="cadastro"
        options={{
          title: "Cadastro",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="perfil"
        options={{
          title: "Perfil",
          headerShown: true,
        }}
      />
    </Stack>
  );
}