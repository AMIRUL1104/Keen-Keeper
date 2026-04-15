"use client";

function CheckInButton({ icon, label }) {
  return (
    <button
      key={label}
      className="bg-gray-50 border border-gray-100 rounded-lg py-3 flex flex-col items-center gap-1.5 hover:bg-blue-50 hover:border-blue-100 transition-colors group"
    >
      <span className="text-gray-500 group-hover:text-blue-600 transition-colors">
        {icon}
      </span>
      <span className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors">
        {label}
      </span>
    </button>
  );
}

export default CheckInButton;
