import DashboardLayout from "../components/layout/DashboardLayout";

const cards = [
  {
    title: "Patients",
    value: 1200,
  },
  {
    title: "Doctors",
    value: 85,
  },
  {
    title: "Appointments",
    value: 245,
  },
  {
    title: "Revenue",
    value: "$45K",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold mb-8">
        Welcome Back 👋
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow p-6"
          >
            <h3 className="text-gray-500">
              {card.title}
            </h3>

            <p className="text-3xl font-bold mt-3">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}