import { PieChart } from '@mui/x-charts/PieChart';
import { RENT_ENGINE_DATA } from '../mock/data.ts';

export default function Charts() {
  return (
    <>
      <PieChart
        series={[
          {
            data: RENT_ENGINE_DATA.reduce(
              (previousValue, currentValue) => {
                if (previousValue.length === 0) {
                  return [
                    {
                      id: 0,
                      value: 1,
                      label: currentValue.property_type,
                    },
                  ];
                }

                const found = previousValue.find(
                  (item) => item.label === currentValue.property_type
                );

                if (!found) {
                  return [
                    ...previousValue,
                    {
                      id: previousValue.length,
                      value: 1,
                      label: currentValue.property_type,
                    },
                  ];
                }

                return previousValue.map((item) =>
                  item.label === currentValue.property_type
                    ? { ...item, value: item.value + 1 }
                    : item
                );
              },
              [] as { id: number; value: number; label: string }[]
            ),
          },
        ]}
        height={200}
      />

      <PieChart
        series={[
          {
            data: RENT_ENGINE_DATA.reduce(
              (previousValue, currentValue) => {
                if (previousValue.length === 0) {
                  return [
                    {
                      id: 0,
                      value: 1,
                      label: currentValue.pets_allowed,
                    },
                  ];
                }

                const found = previousValue.find(
                  (item) => item.label === currentValue.pets_allowed
                );

                if (!found) {
                  return [
                    ...previousValue,
                    {
                      id: previousValue.length,
                      value: 1,
                      label: currentValue.pets_allowed,
                    },
                  ];
                }

                return previousValue.map((item) =>
                  item.label === currentValue.pets_allowed
                    ? { ...item, value: item.value + 1 }
                    : item
                );
              },
              [] as { id: number; value: number; label: string }[]
            ),
          },
        ]}
        height={200}
      />

      <PieChart
        series={[
          {
            data: RENT_ENGINE_DATA.reduce(
              (previousValue, currentValue) => {
                if (previousValue.length === 0) {
                  return [
                    {
                      id: 0,
                      value: 1,
                      label: currentValue.state_name,
                    },
                  ];
                }

                const found = previousValue.find(
                  (item) => item.label === currentValue.state_name
                );

                if (!found) {
                  return [
                    ...previousValue,
                    {
                      id: previousValue.length,
                      value: 1,
                      label: currentValue.state_name,
                    },
                  ];
                }

                return previousValue.map((item) =>
                  item.label === currentValue.state_name
                    ? { ...item, value: item.value + 1 }
                    : item
                );
              },
              [] as { id: number; value: number; label: string }[]
            ),
          },
        ]}
        height={200}
      />
    </>
  );
}
