const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        data: [2, 4, 3, 15, 2, 3, 4],
        borderWidth: 1
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      },
    },
  },
});