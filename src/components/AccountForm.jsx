
export function AccountForm({
  email,
  password,
  updateFields,
}) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Account Info</h2>
      <div>
      <label className="block text-gray-700 mb-2">Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
        className="w-full px-3 py-2 border rounded-md"
      />
      <label className="block text-gray-700 mb-2">Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={e => updateFields({ password: e.target.value })}
        className="w-full px-3 py-2 border rounded-md"
      />
      </div>
    </div>
  )
}
