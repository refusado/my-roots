import { Plant } from '@/utils/plants';
import { useState } from 'react';

export function UserSaves() {
  const [plants, setPlantas] = useState<Plant[] | null>(null);

  return (
    <aside>
      <h2 className="py-10 text-center font-serif text-2xl">Plantas salvas</h2>
    </aside>
  );
}
