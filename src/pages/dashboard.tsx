import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

// o Chart precisa do objeto window, e isso não tem quando o Next carrega nosso conteúdo
// pelo lado do servidor, então importamos ele com o dynamic passando ssr: false
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false, // tira o menuzinho
    },
    zoom: {
      enabled: false, // tira o zoom
    },
    foreColor: theme.colors.gray[500], // mudo a cor dos números
  },
  grid: {
    show: false, // tira as linhas de grid atrás do gráfico
  },
  dataLabels: {
    enabled: false, // tira os labels do gráfico
  },
  tooltip: {
    enabled: false, // desabilita aparecer infos quando damos o hover no gráfico
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600], // muda a cor da linha do eixo X
    },
    axisTicks: {
      color: theme.colors.gray[600], // muda a cor das linhazinhas pra fora
    },
    categories: [
      // quais infos vão aparecer debaixo das ticks (mesma qtd da data do series)
      "2021-06-01T04:20:00.000Z",
      "2021-06-02T04:20:00.000Z",
      "2021-06-03T04:20:00.000Z",
      "2021-06-04T04:20:00.000Z",
      "2021-06-05T04:20:00.000Z",
      "2021-06-06T04:20:00.000Z",
      "2021-06-07T04:20:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark", // vai do mais escuro -> claro
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [90, 120, 133, 323, 110, 200, 210] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth={320} align="flex-start">
          <Box p="8" pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p="8" pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
