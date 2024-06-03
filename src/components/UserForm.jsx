
export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">User Info</h2>
     <div>
     <label className="block text-gray-700 mb-2">First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
        className="w-full px-3 py-2 border rounded-md"
      />
      <label className="block text-gray-700 mb-2">Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
        className="w-full px-3 py-2 border rounded-md"
      />
      <label className="block text-gray-700 mb-2">Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={e => updateFields({ age: e.target.value })}
        className="w-full px-3 py-2 border rounded-md"
      />
     </div>
    </div>
  )
}
