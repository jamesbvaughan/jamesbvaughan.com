/**
 * @global
 * @type {{
 *   altVal: string,
 *   etad: string,
 *   gspdVal: string,
 *   ttgc: string,
 *   actime24: string,
 * }[]}
 */
const flightData = window.flightData || [];

const times = flightData.map(({ actime24 }) => actime24);

const timeToMinutes = (timeString) => {
  const [time, period] = timeString.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (period === "PM" && hours !== 12) {
    hours += 12;
  }
  if (period === "AM" && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
};

const minutesPastMidnight = flightData.map(({ etad }) => timeToMinutes(etad));
const firstTime = minutesPastMidnight[0];
const etads = minutesPastMidnight.map((time) => time - firstTime);

const groundSpeeds = flightData.map(({ gspdVal }) => Number(gspdVal));
const altitudes = flightData.map(({ altVal }) => Number(altVal));

Chart.defaults.color = "#eee";

const renderChart = ({
  canvasId,
  data,
  yAxisLabel,
  sliceLength = flightData.length,
}) =>
  new Chart(document.getElementById(canvasId).getContext("2d"), {
    type: "line",
    data: {
      labels: times.slice(0, sliceLength),
      datasets: [
        {
          label: yAxisLabel,
          data: data.slice(0, sliceLength),
          borderColor: "rgba(75, 192, 192, 1)",
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: "Time",
          },
        },
        y: {
          title: {
            display: true,
            text: yAxisLabel,
          },
        },
      },
      animation: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

renderChart({
  canvasId: "altitude-chart-canvas",
  data: altitudes,
  yAxisLabel: "Altitude (feet)",
});

renderChart({
  canvasId: "cropped-altitude-chart-canvas",
  data: altitudes,
  yAxisLabel: "Altitude (feet)",
  sliceLength: 241,
});

renderChart({
  canvasId: "eta-chart-canvas",
  data: etads,
  yAxisLabel: "Change in ETA (minutes)",
  sliceLength: 291,
});

renderChart({
  canvasId: "ground-speed-chart-canvas",
  data: groundSpeeds,
  yAxisLabel: "Ground speed (knots)",
});
