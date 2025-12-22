export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mb-6" />
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Loading
        </p>
      </div>
    </div>
  );
}
