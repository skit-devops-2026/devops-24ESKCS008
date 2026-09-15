export const Table = ({ headers = [], rows = [], className = '' }) => (
  <div className={`overflow-x-auto rounded-2xl border border-slate-200/70 bg-white/70 ${className}`}>
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-slate-200/70 bg-slate-50/90">
          {headers.map((header, i) => (
            <th key={i} className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-slate-200/60 last:border-0 hover:bg-primary-50/45 transition-smooth">
            {Array.isArray(row) ? (
              row.map((cell, j) => (
                <td key={j} className="px-6 py-4 font-medium text-slate-700">
                  {cell}
                </td>
              ))
            ) : (
              <td colSpan={headers.length} className="px-6 py-8 text-center text-slate-500">
                No data available
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Table
