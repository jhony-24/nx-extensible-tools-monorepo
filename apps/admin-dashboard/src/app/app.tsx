import React from 'react';
import { fetchMoneyList } from '@hermes/data-access';
import { BaseButton } from '@hermes/shared/ui-react-common';
import { formatMoneyInSoles } from '@hermes/utils/money-formats';

export function App() {
  return (
    <section>
      {fetchMoneyList().map((item) => {
        return (
          <BaseButton key={item.id}>
            {formatMoneyInSoles(item.money)}
          </BaseButton>
        );
      })}
    </section>
  );
}

export default App;
