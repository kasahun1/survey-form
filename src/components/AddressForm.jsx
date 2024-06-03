
export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Address Info</h2>
      <div>
      <label className="block text-gray-700 mb-2">Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={e => updateFields({ street: e.target.value })}
        className="w-full px-3 py-2 border rounded-md"
      />
      <label className="block text-gray-700 mb-2">City</label>
      <input
        required
        type="text"
        value={city}
        onChange={e => updateFields({ city: e.target.value })}
        className="w-full px-3 py-2 border rounded-md"
      />
      <label className="block text-gray-700 mb-2">State</label>
      <input
        required
        type="text"
        value={state}
        onChange={e => updateFields({ state: e.target.value })}
        className="w-full px-3 py-2 border rounded-md"
      />
      <label className="block text-gray-700 mb-2">Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={e => updateFields({ zip: e.target.value })}
        className="w-full px-3 py-2 border rounded-md"
      />
      </div>
    </div>
  )
}
