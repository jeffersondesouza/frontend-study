import React from "react";
import { sum } from "@jeff/utils/math/sum";
import { Text } from "@jeff/design-system/components/Text";

export default function HomeScreen() {
  return (
    <main>
      <Text tag="h1">Home Scree</Text>
      <Text tag="p">Soma de 1 + 3 = {sum(1, 2)}</Text>
    </main>
  );
}
