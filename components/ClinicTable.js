const cell = "border-b border-line px-4 py-3 text-start";

export default function ClinicTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-card border border-line bg-white">
      <table className="w-full min-w-[420px] border-collapse">
        <thead className="bg-teal text-white">
          <tr>
            <th scope="col" className={cell}>القسم</th>
            <th scope="col" className={cell}>الطبيب</th>
            <th scope="col" className={cell}>الوقت</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) =>
            r.doctors.map((d, i) => (
              <tr key={r.dept + d.name}>
                {i === 0 && (
                  <th scope="row" rowSpan={r.doctors.length} className={`${cell} bg-mint font-bold text-teal`}>
                    {r.dept}
                  </th>
                )}
                <td className={cell}>{d.name}</td>
                <td className={cell}>{d.time}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
