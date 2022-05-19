import React from "react";
import { sum } from "@jeff/utils/math/sum";

export default function HomeScreen() {
  return (
    <main>
      <div>Home Scree - {sum(1, 3)}</div>
    </main>
  );
}
