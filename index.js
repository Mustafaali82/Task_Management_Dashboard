const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        data: [2, 4, 3, 15, 2, 3, 4],
        borderWidth: 1,
        colors: ["#CCCCCC", "#cccccc"]
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